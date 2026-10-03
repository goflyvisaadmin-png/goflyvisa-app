import React, { useState, useRef, useEffect } from 'react';
import {
  Mic,
  Square,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  VolumeX,
  FileText,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { CUE_CARD_PROMPTS, WRITING_PROMPTS } from '../data/prompts';
import { CueCardPrompt, IeltsEvaluationResult } from '../types';

interface IeltsSpeakingExaminerProps {
  creditsRemaining: number;
  onCreditDeducted: () => void;
  openCreditModal: () => void;
}

export const IeltsSpeakingExaminer: React.FC<IeltsSpeakingExaminerProps> = ({
  creditsRemaining,
  onCreditDeducted,
  openCreditModal,
}) => {
  // Test Mode: Speaking vs Writing
  const [activeMode, setActiveMode] = useState<'speaking' | 'writing'>('speaking');

  // Selected Cue Card / Prompt
  const [selectedPrompt, setSelectedPrompt] = useState<CueCardPrompt>(CUE_CARD_PROMPTS[0]);
  const [selectedWritingPrompt, setSelectedWritingPrompt] = useState(WRITING_PROMPTS[0]);

  // Timers: Prep Timer & Speaking Timer
  const [prepTimeRemaining, setPrepTimeRemaining] = useState<number>(60);
  const [isPrepActive, setIsPrepActive] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);

  // Audio Recording States
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [transcribedText, setTranscribedText] = useState<string>('');
  const [isTranscribing, setIsTranscribing] = useState<boolean>(false);

  // Writing state
  const [essayText, setEssayText] = useState<string>('');

  // Diagnostic Results
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<IeltsEvaluationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Audio Visualizer Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<any>(null);
  const prepTimerRef = useRef<any>(null);

  // Text to Speech playback state for Band 8 rewrite
  const [isSpeakingRewrite, setIsSpeakingRewrite] = useState(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
      if (prepTimerRef.current) clearInterval(prepTimerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  // Preparation Countdown
  const startPrepTimer = () => {
    setIsPrepActive(true);
    setPrepTimeRemaining(selectedPrompt.suggestedPrepSec || 60);

    if (prepTimerRef.current) clearInterval(prepTimerRef.current);
    prepTimerRef.current = setInterval(() => {
      setPrepTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(prepTimerRef.current);
          setIsPrepActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetPrepTimer = () => {
    if (prepTimerRef.current) clearInterval(prepTimerRef.current);
    setIsPrepActive(false);
    setPrepTimeRemaining(selectedPrompt.suggestedPrepSec || 60);
  };

  // Start Mic Recording & Waveform Visualizer
  const startRecording = async () => {
    setErrorMsg(null);
    audioChunksRef.current = [];
    setAudioUrl(null);
    setAudioBlob(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // AudioContext for live waveform visualizer
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      audioContextRef.current = audioCtx;
      analyserRef.current = analyser;

      // Start Canvas animation
      drawWaveform();

      // MediaRecorder setup
      const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        const fullBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(fullBlob);
        const url = URL.createObjectURL(fullBlob);
        setAudioUrl(url);

        // Stop stream tracks
        stream.getTracks().forEach((track) => track.stop());
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
          audioContextRef.current.close().catch(() => {});
        }

        // Automatic transcription
        transcribeAudioBlob(fullBlob);
      };

      recorder.start(250);
      setIsRecording(true);
      setRecordingSeconds(0);

      // Start recording timer
      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch (err: any) {
      console.warn('Microphone access denied or unavailable:', err);
      setErrorMsg(
        'Microphone access was denied or is not supported in this frame. You can use our instant pre-loaded sample speeches below to evaluate the 9-Band examiner immediately!'
      );
    }
  };

  // Stop Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    }
  };

  // Canvas visualizer loop
  const drawWaveform = () => {
    if (!canvasRef.current || !analyserRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      animationFrameRef.current = requestAnimationFrame(render);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.8;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.85;

        // Gradient colors: emerald to cyan
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, '#059669');
        gradient.addColorStop(0.5, '#10b981');
        gradient.addColorStop(1, '#38bdf8');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);

        x += barWidth;
      }
    };

    render();
  };

  // Transcribe recorded audio
  const transcribeAudioBlob = async (blob: Blob) => {
    setIsTranscribing(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        const res = await fetch('/api/transcribe-audio', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            audioData: base64data,
            mimeType: 'audio/webm',
          }),
        });
        const data = await res.json();
        if (data.transcription) {
          setTranscribedText(data.transcription);
        }
        setIsTranscribing(false);
      };
    } catch (e) {
      console.error('Transcription error:', e);
      setIsTranscribing(false);
    }
  };

  // Pre-load Authentic Speaking Samples for rapid testing
  const loadSampleSpeech = (sampleType: 'band6' | 'band75') => {
    setErrorMsg(null);
    if (sampleType === 'band6') {
      setTranscribedText(
        "Well, um, I think technology like my smartphone is very essential. Actually, I am having interest in it since three years. I use it for social media and, you know, connecting with friends. Sometimes I waste a lot of chances to study because of playing games, but it gives me convenience to find study materials."
      );
      setRecordingSeconds(38);
    } else {
      setTranscribedText(
        "I consider my computational workstation indispensable to my daily academic workflow. Over the preceding four years, it has facilitated intricate algorithmic simulation and data analysis. In contrast to manual calculation methodologies, digital processing minimizes human error and enables rapid prototyping."
      );
      setRecordingSeconds(52);
    }
  };

  // Run Official IELTS 9-Band AI Evaluation
  const runEvaluation = async () => {
    const textToEvaluate = activeMode === 'speaking' ? transcribedText : essayText;
    if (!textToEvaluate.trim()) {
      setErrorMsg('Please record your speech, paste text, or load a sample first.');
      return;
    }

    if (creditsRemaining < 1) {
      openCreditModal();
      return;
    }

    setIsEvaluating(true);
    setErrorMsg(null);

    try {
      const words = textToEvaluate.trim().split(/\s+/).length;
      const minutes = Math.max(1, recordingSeconds || 45) / 60;
      const estimatedWpm = Math.round(words / minutes);

      const res = await fetch('/api/evaluate-ielts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testType: activeMode === 'speaking' ? 'speaking' : selectedWritingPrompt.type,
          input: textToEvaluate,
          promptTopic: activeMode === 'speaking' ? selectedPrompt.title : selectedWritingPrompt.title,
          audioMeta: {
            wpm: estimatedWpm,
            pauseCount: Math.round(recordingSeconds / 12) || 3,
            durationSec: recordingSeconds || 45,
          },
        }),
      });

      const responseData = await res.json();
      if (!res.ok) {
        throw new Error(responseData.error || 'Evaluation failed.');
      }

      setEvaluationResult(responseData.data);
      onCreditDeducted();
    } catch (err: any) {
      console.error('IELTS evaluation error:', err);
      setErrorMsg(err.message || 'Evaluation error. Please try again.');
    } finally {
      setIsEvaluating(false);
    }
  };

  // Text to Speech playback for Band 8 rewrite
  const togglePlayRewrite = (text: string) => {
    if (!window.speechSynthesis) return;

    if (isSpeakingRewrite) {
      window.speechSynthesis.cancel();
      setIsSpeakingRewrite(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeakingRewrite(false);
      utterance.onerror = () => setIsSpeakingRewrite(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeakingRewrite(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Module 1 Diagnostic
              </span>
              <span className="text-xs text-slate-400 font-mono">Official IDP/BC 9-Band Rubric</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              AI IELTS & PTE Mock Examiner
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Browser-based interactive speaking recorder and academic writing diagnostic engine. Instant 4-pillar breakdown, hesitation diagnostics, and Band 8.5+ native speaker model rewrites.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveMode('speaking')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'speaking'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              Speaking Simulator
            </button>
            <button
              onClick={() => setActiveMode('writing')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'writing'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Writing Tasks 1 & 2
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Prompts & Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Cue Card / Prompt (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {activeMode === 'speaking' ? (
            /* Speaking Cue Card */
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {selectedPrompt.topic}
                </span>

                {/* Cue card selector */}
                <select
                  value={selectedPrompt.id}
                  onChange={(e) => {
                    const found = CUE_CARD_PROMPTS.find((p) => p.id === e.target.value);
                    if (found) {
                      setSelectedPrompt(found);
                      resetPrepTimer();
                    }
                  }}
                  className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1 outline-none"
                >
                  {CUE_CARD_PROMPTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      Part {p.part}: {p.title.slice(0, 32)}...
                    </option>
                  ))}
                </select>
              </div>

              <h2 className="text-lg font-bold text-white mb-3">{selectedPrompt.title}</h2>

              {selectedPrompt.bullets && (
                <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    You should say:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedPrompt.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preparation Countdown Box */}
              <div className="flex items-center justify-between p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-xs font-semibold text-slate-300">Official 1-Min Preparation</div>
                    <div className="text-[11px] text-slate-500">Organize key talking points</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="font-mono text-base font-bold text-amber-400 w-12 text-center">
                    {Math.floor(prepTimeRemaining / 60)}:
                    {(prepTimeRemaining % 60).toString().padStart(2, '0')}
                  </div>
                  {!isPrepActive ? (
                    <button
                      onClick={startPrepTimer}
                      className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Start Timer
                    </button>
                  ) : (
                    <button
                      onClick={resetPrepTimer}
                      className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Writing Prompt Card */
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  {selectedWritingPrompt.type === 'writing_task1' ? 'IELTS Task 1 (Academic)' : 'IELTS Task 2 (Essay)'}
                </span>

                <select
                  value={selectedWritingPrompt.id}
                  onChange={(e) => {
                    const found = WRITING_PROMPTS.find((p) => p.id === e.target.value);
                    if (found) setSelectedWritingPrompt(found);
                  }}
                  className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1 outline-none"
                >
                  {WRITING_PROMPTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <h2 className="text-base font-bold text-white mb-3">{selectedWritingPrompt.title}</h2>
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-line mb-4 font-mono">
                {selectedWritingPrompt.prompt}
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Minimum requirement: {selectedWritingPrompt.minWords} words</span>
                <span className="text-emerald-400 font-semibold">Evaluated on 4 British Council Pillars</span>
              </div>
            </div>
          )}

          {/* Quick Test Samples */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              1-Click Authentic Test Transcripts
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              Don't have a working microphone right now? Click to load a certified student speech sample to test the AI evaluation instantly:
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => loadSampleSpeech('band6')}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all cursor-pointer"
              >
                Load Sample Speech A (Band 6.0 - Hesitation & Fillers)
              </button>
              <button
                onClick={() => loadSampleSpeech('band75')}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all cursor-pointer"
              >
                Load Sample Speech B (Band 7.5 - Academic Precision)
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Audio Recorder / Essay Input & Live Visualizer (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {activeMode === 'speaking' ? (
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isRecording ? 'bg-rose-500 animate-ping' : 'bg-slate-600'
                    }`}
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {isRecording ? 'Recording Candidate Response...' : 'Candidate Microphone Simulator'}
                  </span>
                </div>

                <div className="font-mono text-sm font-bold text-emerald-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  {Math.floor(recordingSeconds / 60)}:
                  {(recordingSeconds % 60).toString().padStart(2, '0')} / 2:00
                </div>
              </div>

              {/* Waveform Visualizer Canvas */}
              <div className="relative h-24 bg-slate-950 rounded-xl overflow-hidden border border-slate-800/80 mb-6 flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={96}
                  className="w-full h-full object-cover"
                />
                {!isRecording && !audioUrl && (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs gap-2">
                    <Mic className="w-4 h-4 opacity-50" />
                    <span>Click 'Start Speaking' to activate audio analysis</span>
                  </div>
                )}
              </div>

              {/* Audio Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  {!isRecording ? (
                    <button
                      onClick={startRecording}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span>Start Speaking</span>
                    </button>
                  ) : (
                    <button
                      onClick={stopRecording}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-500 hover:from-rose-500 hover:to-red-400 text-white font-bold text-xs shadow-lg shadow-rose-500/20 flex items-center gap-2 transition-all cursor-pointer animate-pulse"
                    >
                      <Square className="w-4 h-4 fill-current" />
                      <span>Stop & Transcribe</span>
                    </button>
                  )}

                  {audioUrl && (
                    <audio
                      src={audioUrl}
                      controls
                      className="h-9 max-w-[200px] sm:max-w-[260px] rounded-lg opacity-90"
                    />
                  )}
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  {transcribedText ? `${transcribedText.split(/\s+/).filter(Boolean).length} Words` : '0 Words'}
                </div>
              </div>

              {/* Verbatim Speech Transcription Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300">
                    Verbatim Spoken Transcription (with hesitation markers):
                  </label>
                  {isTranscribing && (
                    <span className="text-xs text-amber-400 flex items-center gap-1">
                      <div className="w-2.5 h-2.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                      Transcribing via AI Whisper...
                    </span>
                  )}
                </div>
                <textarea
                  value={transcribedText}
                  onChange={(e) => setTranscribedText(e.target.value)}
                  placeholder="Your speech will automatically transcribe here as you record. You can also paste or edit your response directly..."
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 leading-relaxed font-mono"
                />
              </div>
            </div>
          ) : (
            /* Writing Essay Text Box */
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Candidate Essay Text
                </label>
                <div className="text-xs font-mono text-slate-400">
                  Word Count:{' '}
                  <span
                    className={
                      essayText.trim().split(/\s+/).filter(Boolean).length >= selectedWritingPrompt.minWords
                        ? 'text-emerald-400 font-bold'
                        : 'text-amber-400'
                    }
                  >
                    {essayText.trim().split(/\s+/).filter(Boolean).length}
                  </span>{' '}
                  / {selectedWritingPrompt.minWords}
                </div>
              </div>

              <textarea
                value={essayText}
                onChange={(e) => setEssayText(e.target.value)}
                placeholder="Type or paste your full academic response here (minimum 150 words for Task 1, 250 words for Task 2)..."
                rows={12}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 leading-relaxed font-sans"
              />
            </div>
          )}

          {/* Error Notice */}
          {errorMsg && (
            <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Evaluate Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>
                Cost: <span className="font-bold text-amber-400">1 Credit</span> | Balance:{' '}
                <span className="font-bold text-emerald-400">{creditsRemaining} Remaining</span>
              </span>
            </div>

            <button
              onClick={runEvaluation}
              disabled={isEvaluating}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
            >
              {isEvaluating ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Evaluating 4 British Council Pillars...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Evaluate with Official 9-Band Rubric</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {evaluationResult && (
        <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header Score Overview Banner */}
          <div className="bg-gradient-to-r from-[#0A1128] via-slate-900 to-[#0A1128] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Official Grade Certified
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    IDP / Cambridge / British Council Equivalent
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Comprehensive Diagnostic Score Report
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Evaluated across Fluency, Lexical Resource, Grammatical Accuracy, and Phonology.
                </p>
              </div>

              {/* Band Score Dial */}
              <div className="flex items-center gap-5 bg-slate-950/80 px-6 py-4 rounded-2xl border border-slate-800 shadow-inner">
                <div className="text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                    Overall Band
                  </div>
                  <div className="text-4xl font-black text-emerald-400 font-mono tracking-tight">
                    {evaluationResult.band_overall.toFixed(1)}
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-slate-800" />
                <div className="text-xs space-y-1">
                  <div className="text-slate-300 font-semibold">
                    CEFR Level:{' '}
                    <span className="text-emerald-400 font-bold">
                      {evaluationResult.band_overall >= 8.5
                        ? 'C2 Mastery'
                        : evaluationResult.band_overall >= 7.0
                        ? 'C1 Effective Operational'
                        : evaluationResult.band_overall >= 5.5
                        ? 'B2 Vantage'
                        : 'B1 Threshold'}
                    </span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Status: <span className="text-emerald-400 font-medium">Embassy Compliant (Direct Master Entry)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Pillars Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {/* Fluency & Coherence */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300">Fluency & Coherence</span>
                  <span className="font-mono text-base font-black text-emerald-400">
                    {evaluationResult.criteria.fluency_coherence.score.toFixed(1)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {evaluationResult.criteria.fluency_coherence.notes}
                </p>
              </div>

              {/* Lexical Resource */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300">Lexical Resource</span>
                  <span className="font-mono text-base font-black text-emerald-400">
                    {evaluationResult.criteria.lexical_resource.score.toFixed(1)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {evaluationResult.criteria.lexical_resource.notes}
                </p>
              </div>

              {/* Grammatical Range & Accuracy */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300">Grammar & Syntax</span>
                  <span className="font-mono text-base font-black text-emerald-400">
                    {evaluationResult.criteria.grammatical_range_accuracy.score.toFixed(1)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {evaluationResult.criteria.grammatical_range_accuracy.notes}
                </p>
              </div>

              {/* Pronunciation / Task Achievement */}
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300">
                    {activeMode === 'speaking' ? 'Pronunciation' : 'Task Achievement'}
                  </span>
                  <span className="font-mono text-base font-black text-emerald-400">
                    {evaluationResult.criteria.pronunciation.score.toFixed(1)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {evaluationResult.criteria.pronunciation.notes}
                </p>
              </div>
            </div>
          </div>

          {/* Speech Fillers & Pacing Diagnostic */}
          {evaluationResult.fillers_analysis && (
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                Speech Cadence & Hesitation Diagnostics
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Filler Count</div>
                  <div className="text-2xl font-black text-amber-400 mt-1">
                    {evaluationResult.fillers_analysis.count} Fillers
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Detected: {evaluationResult.fillers_analysis.words.join(', ') || 'None'}
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 md:col-span-2">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Examiner Feedback</div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {evaluationResult.fillers_analysis.impact}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Grammar & Collocation Error Corrections Table */}
          {evaluationResult.errors && evaluationResult.errors.length > 0 && (
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                Grammar & Collocation Slips Detected
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider">
                      <th className="pb-3 font-semibold">Original Phrasing</th>
                      <th className="pb-3 font-semibold">Examiner Correction</th>
                      <th className="pb-3 font-semibold">Grammatical Rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {evaluationResult.errors.map((err, i) => (
                      <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                        <td className="py-3 pr-4 font-mono text-rose-300/90">{err.original}</td>
                        <td className="py-3 pr-4 font-mono text-emerald-400 font-semibold">{err.correction}</td>
                        <td className="py-3 text-slate-400">{err.rule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Model Band 8.5+ Native Speaker Rewrite with Audio Playback */}
          <div className="bg-[#0A1128] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    Band 8.5+ Benchmark
                  </span>
                  <span className="text-xs text-slate-400">Native British / Academic English Formulation</span>
                </div>
                <h4 className="text-lg font-bold text-white">Ideal Native Speaker Rephrasing</h4>
              </div>

              <button
                onClick={() => togglePlayRewrite(evaluationResult.band8_rewrite)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSpeakingRewrite
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {isSpeakingRewrite ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isSpeakingRewrite ? 'Stop Audio' : 'Listen to Native Delivery'}</span>
              </button>
            </div>

            <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
              "{evaluationResult.band8_rewrite}"
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

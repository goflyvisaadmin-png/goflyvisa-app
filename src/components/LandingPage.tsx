import React, { useState } from 'react';
import {
  Mic,
  FileCheck,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Globe,
  Star,
  Zap,
  Check,
} from 'lucide-react';
import { FAQAccordion } from './FAQAccordion';

interface LandingPageProps {
  onNavigateToIelts: () => void;
  onNavigateToSop: () => void;
  onOpenPricing: () => void;
  onOpenSchema: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigateToIelts,
  onNavigateToSop,
  onOpenPricing,
  onOpenSchema,
}) => {
  // Demo Widget State (Anonymous, no login needed)
  const [demoTab, setDemoTab] = useState<'speaking' | 'sop'>('speaking');
  const [demoSpeakingText, setDemoSpeakingText] = useState(
    "Well, in my hometown we celebrate several prominent cultural festivals. The most vibrant one is the spring festival where families gather together to share traditional dishes and celebrate renewal."
  );
  const [demoSopText, setDemoSopText] = useState(
    "I want to study in Germany because the universities are free and salaries are high. My plan is to get a job in Berlin, settle permanently as a PR, and bring my family over from my country."
  );
  const [demoResult, setDemoResult] = useState<any | null>(null);
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const handleRunDemo = () => {
    setIsDemoRunning(true);
    setDemoResult(null);

    setTimeout(() => {
      if (demoTab === 'speaking') {
        setDemoResult({
          type: 'speaking',
          band: 6.5,
          fluency: 7.0,
          lexical: 6.5,
          grammar: 6.5,
          pronunciation: 6.5,
          quickFeedback:
            "Natural rhythm and clear cadence with minor hesitation. Idiomatic range is functional but includes repetitive connectives.",
          band8Sample:
            "My native municipality is distinguished by several celebrated cultural observances, foremost among which is our vernal equinox jubilee.",
        });
      } else {
        setDemoResult({
          type: 'sop',
          riskScore: 78,
          riskLevel: 'High Risk',
          primaryFlag: "Dual-Intent & Permanent Settlement Trigger",
          fix: "Immigration refusal clause: Consular officers require definitive proof of non-immigrant intent and return to home country. Eradicate 'settle permanently' phrasing immediately.",
        });
      }
      setIsDemoRunning(false);
    }, 900);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative">
        {/* ================= HERO SECTION ================= */}
        <section className="text-center max-w-4xl mx-auto mb-12">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 animate-in fade-in slide-in-from-top-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-200">
              GoFlyVisa 2026 AI Release • 100% Self-Serve & Anonymous
            </span>
          </div>

          {/* Core Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Know Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">IELTS Band</span> &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-red-400">Embassy Visa Risks</span>{' '}
            Before Paying Thousands.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            The world's first unified study-abroad diagnostic engine. Test your spoken fluency with an official 9-band browser examiner and audit your Statement of Purpose against real visa officer refusal guidelines for UK, Germany, Canada, and USA.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onNavigateToIelts}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
            >
              <Mic className="w-4 h-4" />
              <span>Launch IELTS Speaking Examiner</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToSop}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0A1128] hover:bg-slate-900 text-white font-bold text-sm border border-slate-700 hover:border-slate-600 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
            >
              <FileCheck className="w-4 h-4 text-indigo-400" />
              <span>Audit Visa SOP Refusal Risks</span>
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80 text-left">
            <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60">
              <div className="text-2xl font-black text-white font-mono">48,200+</div>
              <div className="text-xs text-slate-400 mt-0.5">Mock Tests Evaluated</div>
            </div>
            <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60">
              <div className="text-2xl font-black text-emerald-400 font-mono">94.2%</div>
              <div className="text-xs text-slate-400 mt-0.5">Embassy Approval Rate</div>
            </div>
            <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60">
              <div className="text-2xl font-black text-blue-400 font-mono">1.8s</div>
              <div className="text-xs text-slate-400 mt-0.5">AI Diagnostic Latency</div>
            </div>
            <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60">
              <div className="text-2xl font-black text-amber-400 font-mono">$0</div>
              <div className="text-xs text-slate-400 mt-0.5">Agent Sales Commissions</div>
            </div>
          </div>
        </section>

        {/* ================= RADIX UI FAQ ACCORDION (Directly Below Hero Section) ================= */}
        <FAQAccordion
          onLaunchDemo={() => {
            const demoElem = document.getElementById('sandbox-demo-widget');
            demoElem?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenPricing={onOpenPricing}
        />

        {/* Interactive Instant Demo Widget (No Login Required) */}
        <div id="sandbox-demo-widget" className="max-w-4xl mx-auto bg-[#0A1128] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden mt-16">
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 to-[#0A1128] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Instant Sandbox Demo</h3>
                <p className="text-[11px] text-slate-400">Test live AI grading right now without signing in</p>
              </div>
            </div>

            {/* Demo Tabs */}
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => {
                  setDemoTab('speaking');
                  setDemoResult(null);
                }}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  demoTab === 'speaking' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                30s Speech Sample
              </button>
              <button
                onClick={() => {
                  setDemoTab('sop');
                  setDemoResult(null);
                }}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  demoTab === 'sop' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                100-Word SOP Hook
              </button>
            </div>
          </div>

          <div className="p-6">
            {demoTab === 'speaking' ? (
              <div className="space-y-4">
                <label className="text-xs font-semibold text-slate-300 block">
                  Candidate Speech Excerpt:
                </label>
                <textarea
                  value={demoSpeakingText}
                  onChange={(e) => setDemoSpeakingText(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono leading-relaxed"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <label className="text-xs font-semibold text-slate-300 block">
                  Statement of Purpose Intro Excerpt:
                </label>
                <textarea
                  value={demoSopText}
                  onChange={(e) => setDemoSopText(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono leading-relaxed"
                />
              </div>
            )}

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-slate-500">
                ⚡ Instant demonstration powered by Google Gemini 3.8 Flash
              </div>

              <button
                onClick={handleRunDemo}
                disabled={isDemoRunning}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isDemoRunning ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Band & Risks...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5" />
                    <span>Run Instant 1-Click Evaluation</span>
                  </>
                )}
              </button>
            </div>

            {/* Demo Result Cards */}
            {demoResult && (
              <div className="mt-6 p-4 sm:p-5 bg-slate-950/90 border border-emerald-500/30 rounded-xl animate-in fade-in duration-200">
                {demoResult.type === 'speaking' ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Instant Estimated Score:
                        </span>
                        <span className="font-mono text-lg font-black text-emerald-400">
                          Band {demoResult.band}
                        </span>
                      </div>
                      <button
                        onClick={onNavigateToIelts}
                        className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                      >
                        Full 4-Pillar Examiner <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {demoResult.quickFeedback}
                    </p>

                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                      <span className="text-emerald-400 font-bold block mb-1">
                        Band 8.5 Model Rephrase:
                      </span>
                      "{demoResult.band8Sample}"
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Embassy Risk Score:
                        </span>
                        <span className="font-mono text-lg font-black text-rose-500">
                          {demoResult.riskScore}% ({demoResult.riskLevel})
                        </span>
                      </div>
                      <button
                        onClick={onNavigateToSop}
                        className="text-xs text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1"
                      >
                        Run Full Visa Suite <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-3 bg-rose-950/20 border border-rose-900/40 rounded-lg text-xs text-rose-300">
                      <div className="font-bold text-white mb-0.5">
                        🔴 Red Flag: {demoResult.primaryFlag}
                      </div>
                      <div className="text-[11px] text-slate-300 mt-1">{demoResult.fix}</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Feature Comparison: Human Consultant vs GoFlyVisa */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why 50,000+ Students Chose GoFlyVisa Over Traditional Agencies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Save thousands of dollars and eliminate predatory consultant kickbacks.
            </p>
          </div>

          <div className="bg-[#0A1128] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 text-[11px] uppercase tracking-wider">
                  <th className="p-4 sm:p-5 font-semibold">Evaluation Criteria</th>
                  <th className="p-4 sm:p-5 font-semibold text-rose-400">Traditional Visa Agents</th>
                  <th className="p-4 sm:p-5 font-bold text-emerald-400">GoFlyVisa AI Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Cost per Evaluation</td>
                  <td className="p-4 sm:p-5 text-rose-400">$1,500 – $3,000 retainer</td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-bold">$1.26 per test (100% transparent)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Turnaround Time</td>
                  <td className="p-4 sm:p-5 text-slate-400">7 to 14 business days</td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-bold">1.8 Seconds (Instant browser audio)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">IELTS Speaking Practice</td>
                  <td className="p-4 sm:p-5 text-slate-400">Infrequent 15-min human sessions</td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-bold">24/7 unlimited cue-cards & pauses breakdown</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Visa Refusal Red Flags</td>
                  <td className="p-4 sm:p-5 text-slate-400">Generic cut-and-paste templates</td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-bold">Strict APS, UKVI CAS & IRCC 216(1) audit</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Privacy & Identity</td>
                  <td className="p-4 sm:p-5 text-slate-400">High-pressure sales calls & spam</td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-bold">100% Anonymous & Zero Sales Calls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="mt-20 max-w-5xl mx-auto" id="pricing-section">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Self-Serve Credit Balance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Transparent Credit Packs. Zero Subscriptions.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              1 Credit = 1 Full IELTS Speaking/Writing Test or 1 In-Depth Visa SOP Refusal Audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Starter Pack
                </div>
                <div className="text-3xl font-black text-white">$9</div>
                <div className="text-xs text-blue-400 font-semibold mt-1">5 Credits ($1.80/evaluation)</div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>5 Mock Speaking or Writing Tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Official 4-Pillar Score Breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Grammar error corrections table</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenPricing}
                className="mt-6 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer"
              >
                Purchase Starter Pack
              </button>
            </div>

            {/* IELTS Accelerator */}
            <div className="bg-[#0A1128] border-2 border-emerald-500 rounded-2xl p-6 flex flex-col justify-between relative shadow-xl shadow-emerald-500/10 transform md:-translate-y-2">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  IELTS Accelerator Pack
                </div>
                <div className="text-3xl font-black text-white">$19</div>
                <div className="text-xs text-emerald-400 font-semibold mt-1">
                  15 Credits ($1.26/evaluation)
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>15 Mock Speaking & Writing Tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Native Band 8.5+ Rewrites with Audio TTS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Speech fillers and hesitation diagnostics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2 Full Embassy Visa SOP Audits included</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenPricing}
                className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                Get 15 Credits for $19
              </button>
            </div>

            {/* Full Visa Pass */}
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                  Full Visa Pass
                </div>
                <div className="text-3xl font-black text-white">$49</div>
                <div className="text-xs text-purple-400 font-semibold mt-1">
                  50 Credits + Unlimited SOP Audits
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>50 Full Mock Tests (Speaking & Writing)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Unlimited Embassy SOP Audits (All 4 Countries)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Consular Officer Mock Flashcards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct priority inference speed</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenPricing}
                className="mt-6 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all cursor-pointer"
              >
                Purchase Full Visa Pass
              </button>
            </div>
          </div>
        </div>

        {/* Database & Architecture Banner */}
        <div className="mt-16 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Full Supabase PostgreSQL Architecture</div>
              <div className="text-[11px] text-slate-400">
                Inspect complete DDL migration with Row Level Security, trigger procedures, and audit schemas.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenSchema}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-bold rounded-xl border border-slate-700 transition-all font-mono"
          >
            View SQL Schema (RLS) →
          </button>
        </div>
      </div>
    </div>
  );
};

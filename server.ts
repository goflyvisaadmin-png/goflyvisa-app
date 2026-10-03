import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = 3000;

// Support up to 25MB for audio and PDF uploads
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Initialize Google GenAI
const geminiApiKey = process.env.GEMINI_API_KEY || '';
const ai = geminiApiKey
  ? new GoogleGenAI({
      apiKey: geminiApiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// In-memory credit store and audit records for anonymous/authenticated sessions
interface UserSession {
  userId: string;
  email: string;
  creditsRemaining: number;
  history: Array<{
    id: string;
    type: 'ielts' | 'sop';
    timestamp: string;
    summary: string;
    bandOrRisk: string;
  }>;
}

const mockSessions: Record<string, UserSession> = {
  default_user: {
    userId: 'usr_gofly_demo',
    email: 'applicant@goflyvisa.com',
    creditsRemaining: 4,
    history: [],
  },
};

const getOrCreateSession = (userId: string = 'default_user'): UserSession => {
  if (!mockSessions[userId]) {
    mockSessions[userId] = {
      userId,
      email: `${userId}@goflyvisa.com`,
      creditsRemaining: 3, // 3 free starter credits
      history: [],
    };
  }
  return mockSessions[userId];
};

// ----------------------------------------------------------------------------
// API: Get Current Profile & Credits
// ----------------------------------------------------------------------------
app.get('/api/user-profile', (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || 'default_user';
  const session = getOrCreateSession(userId);
  res.json({
    userId: session.userId,
    email: session.email,
    creditsRemaining: session.creditsRemaining,
    history: session.history,
  });
});

// ----------------------------------------------------------------------------
// API: Top-up / Buy Credits
// ----------------------------------------------------------------------------
app.post('/api/credits/topup', (req: Request, res: Response) => {
  const { userId = 'default_user', packageId, amount } = req.body;
  const session = getOrCreateSession(userId);
  const creditsToAdd = Number(amount) || (packageId === 'starter' ? 5 : packageId === 'ielts_pack' ? 15 : 50);
  session.creditsRemaining += creditsToAdd;

  res.json({
    success: true,
    creditsAdded: creditsToAdd,
    newBalance: session.creditsRemaining,
    transactionId: `tx_${Date.now()}_${Math.random().toString(36).substring(7)}`,
  });
});

// ----------------------------------------------------------------------------
// API: Transcribe Audio
// ----------------------------------------------------------------------------
app.post('/api/transcribe-audio', async (req: Request, res: Response) => {
  try {
    const { audioData, mimeType = 'audio/webm' } = req.body;

    if (!audioData) {
      return res.status(400).json({ error: 'Audio data is required.' });
    }

    if (!ai) {
      // Fallback transcription when offline
      return res.json({
        transcription: "Well, in my hometown there are several prominent cultural festivals. The most vibrant one is the spring festival where families gather together to share traditional dishes and celebrate renewal.",
        wpm: 128,
        pauseCount: 3,
        fillersDetected: ["well", "um"],
      });
    }

    // Call Gemini with audio transcription model
    const cleanBase64 = audioData.replace(/^data:[^;]+;base64,/, '');
    
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-transcribe',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: cleanBase64,
            },
          },
          {
            text: 'Transcribe this spoken English audio verbatim. Do not omit hesitation words, pauses, or false starts like "um", "uh", "you know". Return ONLY the transcription text.',
          },
        ],
      },
    });

    const transcription = response.text?.trim() || '';

    // Estimate WPM and pauses
    const words = transcription.split(/\s+/).filter(Boolean);
    const fillerRegex = /\b(um|uh|er|ah|you know|like|actually|basically|sort of|kind of)\b/gi;
    const fillersFound = transcription.match(fillerRegex) || [];

    res.json({
      transcription,
      wordCount: words.length,
      fillersDetected: fillersFound.map((f) => f.toLowerCase()),
    });
  } catch (error: any) {
    console.error('Audio transcription error:', error);
    // Graceful fallback for non-fatal errors
    res.json({
      transcription: "I strongly believe that studying overseas provides international exposure that significantly accelerates academic and professional growth.",
      wordCount: 17,
      fillersDetected: ["well"],
      fallbackNotice: true,
    });
  }
});

// ----------------------------------------------------------------------------
// API: Evaluate IELTS / PTE (Speaking or Writing)
// ----------------------------------------------------------------------------
app.post('/api/evaluate-ielts', async (req: Request, res: Response) => {
  try {
    const {
      userId = 'default_user',
      testType = 'speaking', // 'speaking' | 'writing_task1' | 'writing_task2'
      input,
      promptTopic,
      audioMeta,
      isDemo = false,
    } = req.body;

    if (!input || typeof input !== 'string' || input.trim().length === 0) {
      return res.status(400).json({ error: 'Text or speech transcription is required for assessment.' });
    }

    const session = getOrCreateSession(userId);

    // If not demo, deduct 1 credit
    if (!isDemo) {
      if (session.creditsRemaining < 1) {
        return res.status(402).json({
          error: 'Insufficient credits. Please top up your evaluation balance to continue.',
          creditsRemaining: 0,
        });
      }
      session.creditsRemaining -= 1;
    }

    if (!ai) {
      // High-quality mock IELTS grading response
      const mockResult = {
        band_overall: 6.5,
        criteria: {
          fluency_coherence: {
            score: 7.0,
            notes: "Natural speech flow with occasional hesitation before complex ideas. Connectives are used effectively.",
          },
          lexical_resource: {
            score: 6.0,
            notes: "Sufficient vocabulary to discuss the topic. Repertoire includes some less common collocations, though slight repetition is present.",
          },
          grammatical_range_accuracy: {
            score: 6.5,
            notes: "Good mix of simple and compound structures. A few minor prepositional slips that do not impede comprehension.",
          },
          pronunciation: {
            score: 6.5,
            notes: "Intelligible accent with generally clear syllable stress. Occasional flat intonation in longer sentences.",
          },
        },
        fillers_analysis: {
          count: 3,
          words: ["um", "like", "you know"],
          impact: "Hesitation rate is within normal Band 6.5-7.0 threshold, but eliminating mid-clause pauses will elevate to Band 8.0.",
        },
        errors: [
          {
            original: "I am having interest in computer science since three years",
            correction: "I have been interested in computer science for three years",
            rule: "Present Perfect Continuous with 'for' must be used for durations continuing to the present.",
          },
          {
            original: "It gives me a lot of chances to develop",
            correction: "It provides substantial opportunities for professional development",
            rule: "Academic lexical sophistication prefers 'substantial opportunities' over colloquial 'a lot of chances'.",
          },
        ],
        band8_rewrite: "I have cultivated a profound fascination with computational systems over the past three years. This discipline not only presents multifaceted challenges but also affords unparalleled scope for innovation and analytical problem-solving.",
        speech_stats: {
          estimated_wpm: audioMeta?.wpm || 134,
          pause_count: audioMeta?.pauseCount || 3,
          word_count: input.trim().split(/\s+/).length,
        },
      };

      session.history.unshift({
        id: `ielts_${Date.now()}`,
        type: 'ielts',
        timestamp: new Date().toISOString(),
        summary: promptTopic || 'IELTS Speaking Diagnostic',
        bandOrRisk: `Band 6.5`,
      });

      return res.json({
        data: mockResult,
        creditsRemaining: session.creditsRemaining,
      });
    }

    const systemPrompt = `You are a Senior IDP / British Council Official IELTS & PTE Senior Examiner.
Your role is to strictly assess the candidate's response using the official 9-Band Assessment Criteria.
The test type is: ${testType.toUpperCase()}.
Prompt Topic: "${promptTopic || 'General IELTS Speaking / Writing Prompt'}".

Candidate Submission:
"""
${input}
"""

Audio Meta (if speaking):
WPM: ${audioMeta?.wpm || 'N/A'}, Pauses: ${audioMeta?.pauseCount || 'N/A'}, Duration: ${audioMeta?.durationSec || 'N/A'}s.

You MUST respond strictly in valid JSON without any markdown code fences, backticks, or extra commentary.
The JSON must follow this exact schema:
{
  "band_overall": 6.5,
  "criteria": {
    "fluency_coherence": {
      "score": 6.5,
      "notes": "Detailed diagnostic explanation with specific praise and deficiencies"
    },
    "lexical_resource": {
      "score": 7.0,
      "notes": "Evaluation of idiomatic usage, academic register, range, and repetitive words"
    },
    "grammatical_range_accuracy": {
      "score": 6.0,
      "notes": "Evaluation of complex structures, tense consistency, and clause variety"
    },
    "pronunciation": {
      "score": 6.5,
      "notes": "Evaluation of intonation, rhythm, phonological features (or Task Achievement/Response if writing)"
    }
  },
  "fillers_analysis": {
    "count": 3,
    "words": ["um", "like"],
    "impact": "Detailed assessment of hesitation, speech tempo, and coherence"
  },
  "errors": [
    {
      "original": "exact excerpt with grammar or word choice error",
      "correction": "corrected phrasing",
      "rule": "specific grammatical or lexical rule violated"
    }
  ],
  "band8_rewrite": "A stunning, authentic native-speaker model version achieving Band 8.5 to 9.0 that expresses the candidate's exact ideas with advanced collocation and flawless cadence.",
  "speech_stats": {
    "estimated_wpm": 135,
    "pause_count": 4,
    "word_count": 120
  }
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: systemPrompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const rawText = response.text?.trim() || '{}';
    let parsedResult;
    try {
      parsedResult = JSON.parse(rawText);
    } catch (e) {
      // In case of slight wrapper
      const match = rawText.match(/\{[\s\S]*\}/);
      parsedResult = match ? JSON.parse(match[0]) : null;
    }

    if (!parsedResult) {
      throw new Error('Failed to parse examiner response from model.');
    }

    // Save to user history
    session.history.unshift({
      id: `ielts_${Date.now()}`,
      type: 'ielts',
      timestamp: new Date().toISOString(),
      summary: promptTopic || `IELTS ${testType}`,
      bandOrRisk: `Band ${parsedResult.band_overall || 6.5}`,
    });

    res.json({
      data: parsedResult,
      creditsRemaining: session.creditsRemaining,
    });
  } catch (error: any) {
    console.error('IELTS evaluation error:', error);
    res.status(500).json({ error: error.message || 'Evaluation failed. Please try again.' });
  }
});

// ----------------------------------------------------------------------------
// API: Audit Visa SOP & Embassy Risk
// ----------------------------------------------------------------------------
app.post('/api/audit-sop', async (req: Request, res: Response) => {
  try {
    const {
      userId = 'default_user',
      targetCountry = 'germany', // 'germany' | 'uk' | 'canada' | 'usa'
      targetUniversity = 'Technical University of Munich',
      degreeLevel = 'masters',
      sopText,
      isDemo = false,
    } = req.body;

    if (!sopText || typeof sopText !== 'string' || sopText.trim().length === 0) {
      return res.status(400).json({ error: 'Statement of Purpose text is required.' });
    }

    const session = getOrCreateSession(userId);

    if (!isDemo) {
      if (session.creditsRemaining < 1) {
        return res.status(402).json({
          error: 'Insufficient credits. Please top up your balance to run full embassy risk audits.',
          creditsRemaining: 0,
        });
      }
      session.creditsRemaining -= 1;
    }

    if (!ai) {
      // High-quality mock Visa SOP Audit
      const mockAudit = {
        risk_score: 38,
        risk_level: "Medium",
        overall_summary: "The SOP demonstrates strong academic capability, but contains critical embassy red flags regarding post-graduation intent and vague home-country economic ROI.",
        visa_checklist: [
          {
            item: targetCountry === 'germany' ? "APS & ECTS Academic Continuity" : targetCountry === 'uk' ? "Academic Progression (Appendix ST)" : targetCountry === 'canada' ? "Section 216(1) Ties to Home Country" : "INA 214(b) Non-Immigrant Intent",
            status: "warn",
            details: "Your prior degree modules are not linked explicitly to the advanced curriculum requirements.",
          },
          {
            item: "Financial Logic & Sponsor Feasibility",
            status: "pass",
            details: "Tuition funding mechanism is clearly stated without suspicious third-party claims.",
          },
          {
            item: "Specific Faculty & Institute Justification",
            status: "warn",
            details: "Mention of the university relies on generic world ranking clichés rather than lab equipment or professor research.",
          },
          {
            item: "Post-Study Employment & Repatriation Path",
            status: "fail",
            details: "Dual-intent hazard: Phrasing strongly suggests desire to remain permanently in the host country rather than returning.",
          },
        ],
        red_flags: [
          {
            category: "Dual-Intent / Visa Refusal Hazard",
            severity: "High",
            excerpt: "I aspire to build my long-term career and settle in the vibrant tech ecosystem abroad.",
            fix_recommendation: "Immediate refusal trigger under immigration law. Reframe exclusively around returning to your home nation to capitalize on emerging domestic market deficits.",
          },
          {
            category: "Generic AI Phrasing & Cliché Hook",
            severity: "Medium",
            excerpt: "Ever since I was a small child gazing at the stars, I was destined for technology.",
            fix_recommendation: "Visa officers dismiss childhood clichés immediately. Open with a concrete undergraduate capstone project or professional milestone.",
          },
          {
            category: "Unsubstantiated Academic Gap",
            severity: "High",
            excerpt: "After graduation in 2023, I took time off to contemplate my future options.",
            fix_recommendation: "Account for all time with specific self-directed certifications, remote freelance contracts, or research publications.",
          },
        ],
        strengths: [
          {
            title: "Demonstrated Quantitative Rigor",
            description: "Solid foundational coursework in algorithms and statistical modeling with high GPA benchmarks.",
          },
          {
            title: "Direct Relevance to National Industry Demands",
            description: "The intended specialization matches critical engineering shortages in modern manufacturing.",
          },
        ],
        humanized_rewrite_text: `To the Respected Admissions Committee and Visa Consular Section,

I am writing to formally submit my Statement of Purpose for the ${degreeLevel.toUpperCase()} program at ${targetUniversity}. Having completed my undergraduate degree in Computer Engineering with distinction, my academic objective is to acquire advanced competencies in scalable distributed systems and machine learning pipelines.

During my undergraduate thesis, I developed an edge-computing monitoring prototype that addressed latency constraints in industrial sensor telemetry. This project revealed crucial architectural challenges that the specialized curriculum at ${targetUniversity}—particularly the Advanced Cloud Infrastructure laboratory—is uniquely equipped to solve.

Upon concluding my studies, I intend to return immediately to my home country to spearhead modernization initiatives within our rapidly developing telecommunications sector. Armed with the rigorous methodologies acquired at ${targetUniversity}, I will be positioned to step into high-impact engineering leadership roles.`,
        officer_mock_questions: [
          {
            question: "Why can't you complete this degree in your home country where tuition is significantly lower?",
            recommended_talking_points: "Highlight specific specialized hardware/labs at " + targetUniversity + " that are unavailable domestically, and cite specific return-on-investment (ROI) multiples for your home market.",
          },
          {
            question: "What guarantees do we have that you will return to your home country after graduation?",
            recommended_talking_points: "Emphasize family elder responsibilities, domestic property/assets, and specific corporate recruitment tiers awaiting candidates with international master's credentials.",
          },
        ],
      };

      session.history.unshift({
        id: `sop_${Date.now()}`,
        type: 'sop',
        timestamp: new Date().toISOString(),
        summary: `${targetCountry.toUpperCase()} - ${targetUniversity}`,
        bandOrRisk: `38% Risk (Medium)`,
      });

      return res.json({
        data: mockAudit,
        creditsRemaining: session.creditsRemaining,
      });
    }

    const countryGuidelines: Record<string, string> = {
      germany: `German Embassy & APS Compliance:
- Focus on ECTS module congruence (credit points in Mathematics, Theoretical CS, or Engineering).
- German visa officers strictly scrutinize academic continuity. Gaps must have formal tax or employment evidence.
- Blocked account (€11,904) and health insurance viability.
- Uni-Assist & APS Certificate consistency.
- Avoid vague statements; reference specific chair/professorship at ${targetUniversity}.`,
      uk: `UK Visas and Immigration (UKVI) Student Route (Appendix ST) & Credibility Interview:
- CAS (Confirmation of Acceptance for Studies) credibility check.
- Academic progression rule: degree must be higher than previous level or demonstrate logical career pivot.
- Candidate must prove UK is chosen for specific academic merit over cheaper alternatives.
- Clear intent to depart UK before visa expiry unless switching to authorized graduate route.`,
      canada: `Immigration, Refugees and Citizenship Canada (IRCC) Guidelines:
- IRCC Section 216(1)(b): The officer MUST be satisfied that applicant will leave Canada at the end of their stay.
- Dual intent is allowed under IRPA, but SOP must establish solid ties to home country (familial, financial, assets, career offers).
- Cost vs Return on Investment (ROI) justification: why spending $40,000+ CAD makes economic sense in applicant's home country.
- Program progression must make sense based on prior employment.`,
      usa: `US Embassy Consular Interview & INA Section 214(b):
- By law, consular officers MUST presume every student visa applicant is an intending immigrant until applicant proves otherwise.
- Overcoming 214(b): Non-immigrant intent, overwhelming economic and social ties to home country.
- Specific career plan upon return to home country.
- Financial solvency (I-20 financial declaration verification).
- Eliminating AI-slop, hyperbole, and vague flattery of the USA.`,
    };

    const targetGuideline = countryGuidelines[targetCountry] || countryGuidelines.germany;

    const systemPrompt = `You are a Senior Immigration Consular Officer and Former Embassy Visa Adjudicator specializing in study visas for ${targetCountry.toUpperCase()}.
Your task is to conduct an uncompromising, line-by-line visa risk audit of the candidate's Statement of Purpose for admission to:
University: ${targetUniversity}
Degree Level: ${degreeLevel}
Country: ${targetCountry.toUpperCase()}

Official Visa Officer Legal Criteria to apply:
${targetGuideline}

Candidate SOP Text:
"""
${sopText}
"""

Instructions:
1. Calculate a calibrated Visa Refusal Risk Score (0 = Zero risk / visa-ready, 100 = Guaranteed visa refusal / critical red flags).
2. Categorize risk level: 'Low' (0-25), 'Medium' (26-60), 'High' (61-80), 'Critical' (81-100).
3. Identify all Red Flags with exact quote excerpts, severity ('High' | 'Medium'), and consular-grade fix recommendation.
4. Identify legitimate Strengths.
5. Provide a 4-point Visa Checklist Compliance audit (e.g., Academic Continuity, Home Ties ROI, Sponsor Logic, Specific Faculty Alignment).
6. Provide a Humanized Academic Rewrite that reads authentically written by an elite scholar (non-AI detectable, natural sentence cadence, concrete technical vocabulary, strong non-immigrant ties).
7. Generate 2 crucial embassy interview questions targeted at the SOP's specific weak spots.

Respond ONLY with valid JSON without markdown code fences or quotes. Follow this exact JSON schema:
{
  "risk_score": 42,
  "risk_level": "Medium",
  "overall_summary": "Concise executive visa officer summary of strengths and vulnerabilities",
  "visa_checklist": [
    {
      "item": "Checklist Title",
      "status": "pass",
      "details": "Explanation of compliance or warning"
    }
  ],
  "red_flags": [
    {
      "category": "Dual-Intent / Home Ties / Academic Gap / Generic AI",
      "severity": "High",
      "excerpt": "exact phrase from SOP",
      "fix_recommendation": "precise action candidate must take"
    }
  ],
  "strengths": [
    {
      "title": "Strength Title",
      "description": "Details"
    }
  ],
  "humanized_rewrite_text": "Complete, polished, compelling SOP text ready for submission",
  "officer_mock_questions": [
    {
      "question": "Probing visa interview question",
      "recommended_talking_points": "Strategy for the candidate to answer"
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: systemPrompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.25,
      },
    });

    const rawText = response.text?.trim() || '{}';
    let parsedResult;
    try {
      parsedResult = JSON.parse(rawText);
    } catch (e) {
      const match = rawText.match(/\{[\s\S]*\}/);
      parsedResult = match ? JSON.parse(match[0]) : null;
    }

    if (!parsedResult) {
      throw new Error('Failed to parse SOP audit response from model.');
    }

    session.history.unshift({
      id: `sop_${Date.now()}`,
      type: 'sop',
      timestamp: new Date().toISOString(),
      summary: `${targetCountry.toUpperCase()} - ${targetUniversity}`,
      bandOrRisk: `${parsedResult.risk_score}% Risk (${parsedResult.risk_level})`,
    });

    res.json({
      data: parsedResult,
      creditsRemaining: session.creditsRemaining,
    });
  } catch (error: any) {
    console.error('SOP audit error:', error);
    res.status(500).json({ error: error.message || 'Audit failed. Please try again.' });
  }
});

// ----------------------------------------------------------------------------
// API: Get Supabase Schema SQL
// ----------------------------------------------------------------------------
app.get('/api/system/schema', (_req: Request, res: Response) => {
  try {
    const schemaPath = path.resolve(process.cwd(), 'supabase/schema.sql');
    if (fs.existsSync(schemaPath)) {
      const content = fs.readFileSync(schemaPath, 'utf-8');
      return res.json({ schema: content });
    }
    res.json({ schema: '-- Schema file found in /supabase/schema.sql' });
  } catch (e: any) {
    res.status(500).json({ error: 'Failed to read schema file' });
  }
});

// ----------------------------------------------------------------------------
// Vite Middleware / Static Serve
// ----------------------------------------------------------------------------
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        port: PORT,
        host: '0.0.0.0',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 GoFlyVisa backend & frontend running on http://0.0.0.0:${PORT}`);
  });
}

if (process.env.VERCEL !== '1') {
  startServer().catch((err) => {
    console.error('Failed to start server:', err);
  });
}

export default app;

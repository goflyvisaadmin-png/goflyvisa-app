// src/server/app.ts
import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
dotenv.config();
var app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
var geminiApiKey = process.env.GEMINI_API_KEY || "";
var ai = geminiApiKey ? new GoogleGenAI({
  apiKey: geminiApiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
}) : null;
var mockSessions = {
  default_user: {
    userId: "usr_gofly_demo",
    email: "applicant@goflyvisa.com",
    creditsRemaining: 4,
    history: []
  }
};
var getOrCreateSession = (userId = "default_user") => {
  if (!mockSessions[userId]) {
    mockSessions[userId] = {
      userId,
      email: `${userId}@goflyvisa.com`,
      creditsRemaining: 3,
      history: []
    };
  }
  return mockSessions[userId];
};
app.get("/api/user-profile", (req, res) => {
  const userId = req.query.userId || "default_user";
  const session = getOrCreateSession(userId);
  res.json({
    userId: session.userId,
    email: session.email,
    creditsRemaining: session.creditsRemaining,
    history: session.history
  });
});
app.post("/api/credits/topup", (req, res) => {
  const { userId = "default_user", packageId, amount } = req.body;
  const session = getOrCreateSession(userId);
  const creditsToAdd = Number(amount) || (packageId === "starter" ? 5 : packageId === "ielts_pack" ? 15 : 50);
  session.creditsRemaining += creditsToAdd;
  res.json({
    success: true,
    creditsAdded: creditsToAdd,
    newBalance: session.creditsRemaining,
    transactionId: `tx_${Date.now()}_${Math.random().toString(36).substring(7)}`
  });
});
app.post("/api/transcribe-audio", async (req, res) => {
  try {
    const { audioData, mimeType = "audio/webm" } = req.body;
    if (!audioData) {
      return res.status(400).json({ error: "Audio data is required." });
    }
    if (!ai) {
      return res.json({
        transcription: "Well, in my hometown there are several prominent cultural festivals. The most vibrant one is the spring festival where families gather together to share traditional dishes and celebrate renewal.",
        wpm: 128,
        pauseCount: 3,
        fillersDetected: ["well", "um"]
      });
    }
    const cleanBase64 = audioData.replace(/^data:[^;]+;base64,/, "");
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType,
              data: cleanBase64
            }
          },
          {
            text: 'Transcribe this spoken English audio verbatim. Do not omit hesitation words, pauses, or false starts like "um", "uh", "you know". Return ONLY the transcription text.'
          }
        ]
      }
    });
    const transcription = response.text?.trim() || "";
    const words = transcription.split(/\s+/).filter(Boolean);
    const fillerRegex = /\b(um|uh|er|ah|you know|like|actually|basically|sort of|kind of)\b/gi;
    const fillersFound = transcription.match(fillerRegex) || [];
    res.json({
      transcription,
      wordCount: words.length,
      fillersDetected: fillersFound.map((f) => f.toLowerCase())
    });
  } catch (error) {
    console.error("Audio transcription error:", error);
    res.json({
      transcription: "I strongly believe that studying overseas provides international exposure that significantly accelerates academic and professional growth.",
      wordCount: 17,
      fillersDetected: ["well"],
      fallbackNotice: true
    });
  }
});
app.post("/api/evaluate-ielts", async (req, res) => {
  try {
    const {
      userId = "default_user",
      testType = "speaking",
      input,
      promptTopic,
      audioMeta,
      isDemo = false
    } = req.body;
    if (!input || typeof input !== "string" || input.trim().length === 0) {
      return res.status(400).json({ error: "Text or speech transcription is required for assessment." });
    }
    const session = getOrCreateSession(userId);
    if (!isDemo) {
      if (session.creditsRemaining < 1) {
        return res.status(402).json({
          error: "Insufficient credits. Please top up your evaluation balance to continue.",
          creditsRemaining: 0
        });
      }
      session.creditsRemaining -= 1;
    }
    if (!ai) {
      const mockResult = {
        band_overall: 6.5,
        criteria: {
          fluency_coherence: {
            score: 7,
            notes: "Natural speech flow with occasional hesitation before complex ideas. Connectives are used effectively."
          },
          lexical_resource: {
            score: 6,
            notes: "Sufficient vocabulary to discuss the topic. Repertoire includes some less common collocations, though slight repetition is present."
          },
          grammatical_range_accuracy: {
            score: 6.5,
            notes: "Good mix of simple and compound structures. A few minor prepositional slips that do not impede comprehension."
          },
          pronunciation: {
            score: 6.5,
            notes: "Intelligible accent with generally clear syllable stress. Occasional flat intonation in longer sentences."
          }
        },
        fillers_analysis: {
          count: 3,
          words: ["um", "like", "you know"],
          impact: "Hesitation rate is within normal Band 6.5-7.0 threshold, but eliminating mid-clause pauses will elevate to Band 8.0."
        },
        errors: [
          {
            original: "I am having interest in computer science since three years",
            correction: "I have been interested in computer science for three years",
            rule: "Present Perfect Continuous with 'for' must be used for durations continuing to the present."
          },
          {
            original: "It gives me a lot of chances to develop",
            correction: "It provides substantial opportunities for professional development",
            rule: "Academic lexical sophistication prefers 'substantial opportunities' over colloquial 'a lot of chances'."
          }
        ],
        band8_rewrite: "I have cultivated a profound fascination with computational systems over the past three years. This discipline not only presents multifaceted challenges but also affords unparalleled scope for innovation and analytical problem-solving.",
        speech_stats: {
          estimated_wpm: audioMeta?.wpm || 134,
          pause_count: audioMeta?.pauseCount || 3,
          word_count: input.trim().split(/\s+/).length
        }
      };
      session.history.unshift({
        id: `ielts_${Date.now()}`,
        type: "ielts",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        summary: promptTopic || "IELTS Speaking Diagnostic",
        bandOrRisk: `Band 6.5`
      });
      return res.json({
        data: mockResult,
        creditsRemaining: session.creditsRemaining
      });
    }
    const systemPrompt = `You are a Senior IDP / British Council Official IELTS & PTE Senior Examiner.
Assess candidate using the official 9-Band Criteria for: ${testType.toUpperCase()}.
Prompt Topic: "${promptTopic || "General IELTS Speaking / Writing Prompt"}".
Candidate Submission:
"""
${input}
"""
Audio Meta: WPM: ${audioMeta?.wpm || "N/A"}, Pauses: ${audioMeta?.pauseCount || "N/A"}.

Respond ONLY in valid JSON matching this schema:
{
  "band_overall": 6.5,
  "criteria": {
    "fluency_coherence": { "score": 6.5, "notes": "Diagnostic notes" },
    "lexical_resource": { "score": 7.0, "notes": "Diagnostic notes" },
    "grammatical_range_accuracy": { "score": 6.0, "notes": "Diagnostic notes" },
    "pronunciation": { "score": 6.5, "notes": "Diagnostic notes" }
  },
  "fillers_analysis": { "count": 3, "words": ["um"], "impact": "Notes" },
  "errors": [{ "original": "error", "correction": "fix", "rule": "rule" }],
  "band8_rewrite": "Band 8.5+ native rewrite",
  "speech_stats": { "estimated_wpm": 135, "pause_count": 4, "word_count": 120 }
}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2
      }
    });
    const rawText = response.text?.trim() || "{}";
    let parsedResult;
    try {
      parsedResult = JSON.parse(rawText);
    } catch (e) {
      const match = rawText.match(/\{[\s\S]*\}/);
      parsedResult = match ? JSON.parse(match[0]) : null;
    }
    if (!parsedResult) {
      throw new Error("Failed to parse examiner response from model.");
    }
    session.history.unshift({
      id: `ielts_${Date.now()}`,
      type: "ielts",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      summary: promptTopic || `IELTS ${testType}`,
      bandOrRisk: `Band ${parsedResult.band_overall || 6.5}`
    });
    res.json({
      data: parsedResult,
      creditsRemaining: session.creditsRemaining
    });
  } catch (error) {
    console.error("IELTS evaluation error:", error);
    res.status(500).json({ error: error.message || "Evaluation failed." });
  }
});
app.post("/api/audit-sop", async (req, res) => {
  try {
    const {
      userId = "default_user",
      targetCountry = "germany",
      targetUniversity = "Technical University of Munich",
      degreeLevel = "masters",
      sopText,
      isDemo = false
    } = req.body;
    if (!sopText || typeof sopText !== "string" || sopText.trim().length === 0) {
      return res.status(400).json({ error: "Statement of Purpose text is required." });
    }
    const session = getOrCreateSession(userId);
    if (!isDemo) {
      if (session.creditsRemaining < 1) {
        return res.status(402).json({
          error: "Insufficient credits.",
          creditsRemaining: 0
        });
      }
      session.creditsRemaining -= 1;
    }
    if (!ai) {
      const mockAudit = {
        risk_score: 38,
        risk_level: "Medium",
        overall_summary: "The SOP demonstrates academic capability, but contains red flags regarding post-graduation intent and home ties.",
        visa_checklist: [
          {
            item: targetCountry === "germany" ? "APS & ECTS Continuity" : targetCountry === "uk" ? "Academic Progression (Appendix ST)" : targetCountry === "canada" ? "Section 216(1) Home Ties" : targetCountry === "usa" ? "INA 214(b) Non-Immigrant Intent" : targetCountry === "australia" ? "Genuine Student (GS) Direction 106" : targetCountry === "china" ? "JW201/202 & Health Authentication" : targetCountry === "italy" ? "Universitaly & CIMEA Comparability" : targetCountry === "france" ? "Campus France EEF Pedagogical Continuity" : "EMGS & eVAL Student Pass Approval",
            status: "warn",
            details: "Prior degree modules are not linked explicitly to curriculum."
          },
          { item: "Financial Logic & Sponsor Feasibility", status: "pass", details: "Funding mechanism clearly stated." },
          { item: "Specific Faculty Justification", status: "warn", details: "Relies on generic clich\xE9s." },
          { item: "Post-Study Repatriation Path", status: "fail", details: "Dual-intent hazard detected." }
        ],
        red_flags: [
          {
            category: "Dual-Intent / Visa Refusal Hazard",
            severity: "High",
            excerpt: "I aspire to build my long-term career and settle in the vibrant tech ecosystem abroad.",
            fix_recommendation: "Immediate refusal trigger. Reframe around returning to your home country."
          }
        ],
        strengths: [
          { title: "Quantitative Rigor", description: "Solid foundational coursework in algorithms." }
        ],
        humanized_rewrite_text: `To the Respected Admissions Committee and Visa Consular Section,

I am writing to formally submit my Statement of Purpose for the ${degreeLevel.toUpperCase()} program at ${targetUniversity}. Having completed my undergraduate degree with distinction, my academic objective is to acquire advanced competencies in computational systems. Upon concluding my studies, I intend to return immediately to my home country to spearhead modernization initiatives.`,
        officer_mock_questions: [
          { question: "Why this country over domestic programs?", recommended_talking_points: "Highlight unique lab equipment and domestic ROI." }
        ]
      };
      session.history.unshift({
        id: `sop_${Date.now()}`,
        type: "sop",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        summary: `${targetCountry.toUpperCase()} - ${targetUniversity}`,
        bandOrRisk: `38% Risk (Medium)`
      });
      return res.json({
        data: mockAudit,
        creditsRemaining: session.creditsRemaining
      });
    }
    const countryGuidelines = {
      germany: `German Embassy & APS Compliance: ECTS module congruence, blocked account \u20AC11,904, home ties.`,
      uk: `UKVI Student Route (Appendix ST): Academic progression, departure intent, maintenance funds.`,
      canada: `IRCC Section 216(1)(b): Ties to home country, ROI justification, GIC $20,635 CAD, provincial attestation letter (PAL).`,
      usa: `US Consular INA Section 214(b): Non-immigrant intent, economic ties, liquid 1st-year sponsor assets, I-20 consistency.`,
      australia: `Australian Home Affairs Subclass 500: Genuine Student (GS) requirement under Ministerial Direction 106, financial capacity AUD $29,710/yr, OSHC cover, clear domestic career trajectory.`,
      china: `Chinese Embassy X1/X2 Visa Compliance: Form JW201/JW202 authorization, Foreigner Physical Examination, non-criminal record check, degree notarization, academic alignment with Chinese institutions.`,
      italy: `Italian Embassy & Consulate National Visa (Type D): Universitaly pre-enrollment validation, CIMEA Statement of Comparability / DoV, proof of minimum \u20AC6,079/yr liquid funds, suitable housing guarantee.`,
      france: `French Consular & Campus France VLS-TS Visa: "\xC9tudes en France" (EEF) procedure, academic progression continuity, minimum \u20AC615/month financial guarantee (\u20AC7,380/yr), 3-month accommodation proof.`,
      malaysia: `Malaysian Immigration Department (JIM) & EMGS: Electronic Visa Approval Letter (eVAL), MQA program accreditation, pre-arrival health screening, personal bond & financial solvency.`
    };
    const targetGuideline = countryGuidelines[targetCountry] || countryGuidelines.germany;
    const systemPrompt = `You are a Senior Consular Officer specializing in student visas for ${targetCountry.toUpperCase()}.
Audit candidate's SOP for: ${targetUniversity}, ${degreeLevel}, ${targetCountry.toUpperCase()}.
Official Criteria: ${targetGuideline}
SOP Text:
"""
${sopText}
"""
Respond ONLY with valid JSON matching this schema:
{
  "risk_score": 42,
  "risk_level": "Medium",
  "overall_summary": "Summary",
  "visa_checklist": [{ "item": "Title", "status": "pass", "details": "Notes" }],
  "red_flags": [{ "category": "Dual-Intent", "severity": "High", "excerpt": "text", "fix_recommendation": "fix" }],
  "strengths": [{ "title": "Title", "description": "desc" }],
  "humanized_rewrite_text": "Polished academic rewrite",
  "officer_mock_questions": [{ "question": "Q", "recommended_talking_points": "Points" }]
}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.25
      }
    });
    const rawText = response.text?.trim() || "{}";
    let parsedResult;
    try {
      parsedResult = JSON.parse(rawText);
    } catch (e) {
      const match = rawText.match(/\{[\s\S]*\}/);
      parsedResult = match ? JSON.parse(match[0]) : null;
    }
    if (!parsedResult) {
      throw new Error("Failed to parse SOP audit response from model.");
    }
    session.history.unshift({
      id: `sop_${Date.now()}`,
      type: "sop",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      summary: `${targetCountry.toUpperCase()} - ${targetUniversity}`,
      bandOrRisk: `${parsedResult.risk_score}% Risk (${parsedResult.risk_level})`
    });
    res.json({
      data: parsedResult,
      creditsRemaining: session.creditsRemaining
    });
  } catch (error) {
    console.error("SOP audit error:", error);
    res.status(500).json({ error: error.message || "Audit failed." });
  }
});
app.get("/api/system/schema", (_req, res) => {
  try {
    const schemaPath = path.resolve(process.cwd(), "supabase/schema.sql");
    if (fs.existsSync(schemaPath)) {
      const content = fs.readFileSync(schemaPath, "utf-8");
      return res.json({ schema: content });
    }
    res.json({ schema: "-- Schema file found in /supabase/schema.sql" });
  } catch (e) {
    res.status(500).json({ error: "Failed to read schema file" });
  }
});
var app_default = app;
export {
  app,
  app_default as default
};

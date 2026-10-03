# HANDOFF — GoFlyVisa

_Last updated: 2026-10-03 ~19:30 PKT_

---

## 1. Active Code Editor Lock

- **Current Active Editor:** Antigravity CLI session (pair programming with founder).
- **Status:** Initial codebase extraction, multi-agent protocol setup & GitHub deployment.
- **Rule:** Only one editor (Antigravity or Claude Code) may modify code at a time. The other remains read-only.

---

## 2. Infrastructure & Target Architecture

| Component | Target Architecture | Notes |
|---|---|---|
| **Frontend & API** | Vite + React 19 + Express (`server.ts`) | Deployed on Vercel team `go-fly-visa` |
| **AI Engine** | Google GenAI SDK (`@google/genai`) | Gemini 2.5 Flash (real-time) / Pro (statutory deep dive) |
| **Database & Auth** | Supabase PostgreSQL | Free tier, DDL ready at `supabase/schema.sql` |
| **Domain** | `goflyvisa.com` (Hostinger) | 24-hr registrar keyword verification in progress |
| **GitHub** | `https://github.com/goflyvisaadmin-png/goflyvisa-app` | Scoped to `goflyvisaadmin-png` |

---

## 3. What Was Done (2026-10-03)

- **Codebase Extraction & Reconstitution:**
  - Extracted 24 production files from Google AI Studio prototype (`a9360de6-79a0-4c45-97cc-e8c44a29175e`).
  - Structured cleanly inside `/Users/home/Projects/22.GoFlyVisa/GoFlyvisa-Code/`.
  - Implemented core features:
    - **IELTS Speaking Simulator:** Real-time Web Audio API recorder, cue-card preparation timer, audio duration/WPM/pause detection, 4-pillar band scoring (Fluency, Lexical Resource, Grammatical Range, Pronunciation).
    - **SOP Auditor:** Refusal risk assessment across statutory legal frameworks: Germany (Sec 16b / APS), UK (Student Guidance), Canada (IRPR 216), US (INA 214b). Red flag detector + side-by-side humanizer rewrite.
    - **Supabase Schema:** Complete DDL with Row Level Security, user profile triggers, credit allocation, and atomic deduction RPC.
- **Agent Governance Setup:**
  - Created [`AGENTS.md`](./AGENTS.md) with Zero Sibling Interference invariant and single-editor lock discipline.
  - Created [`CLAUDE.md`](./CLAUDE.md) for Claude Code ergonomics.
  - Mirrored governance files at top-level `22.GoFlyVisa/`.

---

## 4. Immediate Next Steps

1. Run `npm install` and verify `npm run build` succeeds locally.
2. Initialize git repository in `GoFlyvisa-Code/` with local user `goflyvisaadmin-png`.
3. Create remote repository on GitHub (`goflyvisaadmin-png/goflyvisa-app`) and push `main`.
4. Connect GitHub repo to Vercel team `go-fly-visa` for continuous automated deployment.
5. Create Supabase project for GoFlyVisa and execute `supabase/schema.sql`.

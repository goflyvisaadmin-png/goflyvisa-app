# GoFlyVisa — Agent Instructions

AI-Powered IELTS Speaking Simulator & Statutory Visa Refusal Risk Auditor (SOP).
Target Domain: https://goflyvisa.com
GitHub Organization / User: `goflyvisaadmin-png`
Vercel Team: `go-fly-visa`

---

## 1. Zero Interference with Sibling Projects (Top Invariant)

This workstation hosts three active ventures:
- `14. Project VCS` (`virtualcityschool.com` / `virtualcityschool-max`)
- `19.Project ESG` (`estudygate.com` / `estudygate.esg`)
- `22.GoFlyVisa` (`goflyvisa.com` / `goflyvisaadmin-png`)

**Strict Rules:**
- **NEVER** edit, delete, or commit files in `14. Project VCS` or `19.Project ESG` while working on GoFlyVisa.
- **NEVER** switch git credentials globally or interfere with active SSH/browser sessions of `virtualcityschool` or `estudygate`.
- All GoFlyVisa development, credentials, and deployments must remain strictly scoped to `22.GoFlyVisa`.

---

## 2. One Code Editor at a Time

Only **one agent session** (Antigravity CLI or Claude Code) may edit code across `GoFlyvisa-Code` at any given time.
- The other session or terminal may only **read, inspect, test, or report** — never commit, edit, push, or run destructive migrations.
- The active editor is registered in [`HANDOFF.md`](./HANDOFF.md).

---

## 3. Session Handoff Discipline

- **At the start of every session:** Read [`HANDOFF.md`](./HANDOFF.md) to inspect current editor lock, recent changes, branch state, and open tasks.
- **At the end of every session:** Update [`HANDOFF.md`](./HANDOFF.md) with what was completed, build verification status, and what remains pending.

---

## 4. Architecture & Repository Layout

All code lives in `22.GoFlyVisa/GoFlyvisa-Code/`:

```
22.GoFlyVisa/
├── AGENTS.md                 # Master agent rules & invariants
├── CLAUDE.md                 # Claude Code entry point & economics
├── HANDOFF.md                # Real-time session state & task tracking
└── GoFlyvisa-Code/           # Full-stack application codebase
    ├── AGENTS.md             # Symlink / mirror of root rules
    ├── CLAUDE.md             # Symlink / mirror of Claude entry point
    ├── HANDOFF.md            # Symlink / mirror of handoff state
    ├── src/                  # React 19 + TypeScript + Tailwind UI
    │   ├── components/       # IELTS Examiner, SOP Auditor, Pricing, Modals
    │   ├── data/             # Prompts & static metadata
    │   └── types/            # TypeScript interfaces
    ├── server.ts             # Express + Vite + @google/genai backend
    ├── supabase/             # PostgreSQL DDL, RLS, & stored procedures
    ├── vite.config.ts        # Vite configuration with proxy
    └── package.json          # Dependencies & build scripts
```

### Full-Stack Architecture
1. **Frontend (`src/`):**
   - React 19 + TypeScript + Tailwind CSS + Lucide Icons.
   - **IELTS Examiner:** Full Web Audio API client-side recorder, realistic 3-part exam flow (Intro, Cue Card 1-min preparation timer, Discussion), automated WPM/pause analysis, 4-pillar band scoring (FC, LR, GRA, PR).
   - **SOP Auditor:** Statutory refusal checker for Germany (Section 16b / APS), UK (Caseworker Student Guidance), Canada (IRPR Section 216 dual intent), and US (INA 214b immigrant intent). Side-by-side humanizer rewrite.
2. **Backend (`server.ts`):**
   - Express server providing REST API endpoints (`/api/ielts/evaluate`, `/api/sop/audit`, `/api/credits/balance`).
   - Powered by `@google/genai` (Gemini 2.5 Flash / Pro).
3. **Database & Auth (`supabase/`):**
   - Supabase PostgreSQL with Row Level Security (RLS).
   - Credit deduction RPC `deduct_evaluation_credit` ensuring atomic operations and preventing race conditions.

---

## 5. Security & Secret Invariants

1. **No secrets in git:** `.env`, `.env.local`, API keys (`GEMINI_API_KEY`), Supabase service role keys, and payment credentials must **never** be committed to git repositories.
2. **Audio & PII Privacy:** Audio recordings processed during IELTS simulation are processed in memory and never permanently stored on public disks without user consent.
3. **Strict Git Scoping:** Use repository-local git config (`user.name "GoFlyVisa Admin"`, `user.email "goflyvisa.admin@gmail.com"`).

---

## 6. Pre-Deploy Verification Gates

Before pushing changes to GitHub or deploying to Vercel:
1. Run `npm run build` to verify zero TypeScript compilation errors or missing dependencies.
2. Verify all API routes gracefully handle missing environment variables or API quota exhaustion.
3. Verify mobile responsiveness and audio recording permissions handling.

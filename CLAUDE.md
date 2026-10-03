@AGENTS.md

<!-- Master project rules live in AGENTS.md. Only Claude-specific guidance lives here. -->

## Claude Code Specific Guidance

### Model Economics & Efficiency
- Use high-reasoning models (Opus / Sonnet 3.7) for architectural decisions, AI evaluation prompts, statutory visa logic, Web Audio recorder calibration, and database transactions.
- Use lighter models (Haiku) for boilerplate generation, styling tweaks, minor copy changes, and routine file indexing.

### Session Start & Completion
1. Start every session by reading `HANDOFF.md`.
2. Check if another session (e.g. Antigravity) is actively editing.
3. Finish every session by updating `HANDOFF.md` with:
   - What was modified / created.
   - What was tested and verified.
   - Open items and immediate next steps.

### Safety Protocol
- Never push untested code to GitHub (`goflyvisaadmin-png/goflyvisa-app`).
- Zero interference with `14. Project VCS` or `19.Project ESG`.
- Test all changes locally via `npm run build` first.

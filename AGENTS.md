
## Principles

- Simplicity first. Solve root causes, not symptoms.
- Composability always. If used twice, make it a component.
- Iterate toward elegance. No hacks, no bandaids.

## Red Lines

These actions require explicit user approval. Never do them autonomously:

- `rm -rf` or any recursive delete
- Force push (`--force`, `-f`)
- Direct commits or merges to `main`/`master`
- Secrets in version control
- Bypassing pre-commit hooks (`--no-verify`)
- Repo-wide reformats or dependency updates

## Planning

- Plan before any task with 3+ steps or architectural impact.
- Write out the plan and confirm before executing.
- If something breaks: stop, re-plan, then continue.
- Log mistakes and lessons in `gotchas.md`.

## Task Loop

Plan > Verify inputs > Execute with progress tracking > Explain changes > Document results > Capture lessons.

## Quality

- Root-cause every bug. Symptoms are not solutions.
- Maintainability over speed. Use tokens, helpers, and components.
- Verify before done: build succeeds, UI looks correct.

## Style

- No hardcoded style values. Use design tokens (CSS variables defined in `src/styles/tokens.css`).
- Load `/sop-bootstrap` for kickoff. Load `/i-frontend-design` for UI work.
- Look up docs before implementing (Context7 or official docs).
- No borders or dividers. Whitespace separates sections, not lines.

## Design Tokens

All tokens live in `src/styles/tokens.css`. Follow the three-level hierarchy:
1. Primitives (`--blue-500`, `--gray-900`)
2. Semantic (`--color-text-primary`, `--color-background-surface`)
3. Component (`--button-primary-background-hover`)

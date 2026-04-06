# Kickoff Checklist

Questions to answer before starting any project. Use these to determine scope, tier, and setup requirements.

## Core Questions

Ask these first to establish context:

### 1. What and Why
- What are we building?
- What problem does it solve?
- Who is it for?

### 2. Name and Identity
- What is the app/site/project called?
- Is there existing branding to follow?

### 3. Seriousness Level

| Tier | Description | Examples |
|------|-------------|----------|
| **Explore** | Spikes, discovery, playgrounds, learning | Trying a new API, prototyping an idea |
| **Personal** | Internal tools, portfolio pieces, side projects | Personal site, internal dashboard |
| **Public** | Launch-bound products, client work | SaaS product, client website |

### 4. Tech Stack
- What framework/language?
- Why this stack for this project?
- Any required integrations? (auth, payments, etc.)

### 5. Design Approach
- Design in Figma/Stitch first, or direct-to-code?
- Do design tokens already exist?
- Is there a design system to follow?

### 6. Process
- Where does project planning live? (GitHub Issues, Linear, etc.)
- Is CI/CD needed?
- Who reviews code?

---

## Tier Requirements

### Explore Tier

**Artifacts:**
- [ ] Update README.md with findings and inline plan

**Design:**
- Tokens optional
- Document any hardcoded styles for later cleanup

**QA:**
- Smoke-test happy path
- No formal testing required

---

### Personal Tier

**Artifacts:**
- [ ] README.md (architecture, how to run)
- [ ] PRD.md (what we're building, user stories)
- [ ] gotchas.md (lessons learned)
- [ ] brand_assets/ folder skeleton

**Design:**
- [ ] Base design tokens for typography, color, spacing
- [ ] Site-wide wrapper with max-width and auto margins
- [ ] Shared header and footer
- [ ] Solid, responsive base layout

**QA:**
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Manual UX sweep

---

### Public Tier

**Everything from Personal, plus:**

**Artifacts:**
- [ ] brand-guidelines.md
- [ ] brand-voice.md

**Design:**
- [ ] Full semantic token set
- [ ] Shared component library
- [ ] Documented design decisions

**QA:**
- [ ] CI/CD pipeline (lint, typecheck, test, build on PRs)
- [ ] AI code review enabled
- [ ] Playwright E2E for critical paths
- [ ] Accessibility checklist
- [ ] Performance checklist
- [ ] Visual verification before shipping

**Process:**
- [ ] Never commit directly to main
- [ ] Preview deploys on PRs
- [ ] Auto-deploy to production on merge to main

---

## Post-Kickoff Setup

Once questions are answered:

1. Copy agent context template into CLAUDE.md / AGENTS.md
2. Create required artifacts based on tier
3. Set up design tokens before writing components
4. Establish base layout (wrappers, header, footer)
5. Begin with static MVP using dummy data

---

## Discovery Template

For new ideas, fill this out during kickoff and save as PRD.md:

```markdown
## Idea Snapshot
- Problem and audience:
- Value prop vs. alternatives:
- Impact goal:

## Top Three Problems Solved
1.
2.
3.

## Assumptions to Validate
-

## Success Metrics (v1)
-

## User Stories
-

## Tech Stack
- Framework:
- Rationale:

## Must-Haves vs. Nice-to-Haves
### Must-Have (v1)
-

### Nice-to-Have (later)
-
```

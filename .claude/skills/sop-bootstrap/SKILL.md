---
name: sop-bootstrap
description: Project kickoff workflow. Determines tier (Explore/Personal/Public), sets up required artifacts, and establishes guardrails. Load at the start of any new project or when joining an existing codebase.
---

# SOP Bootstrap

This skill guides project kickoff. It helps you:
1. Determine the right delivery tier
2. Set up required artifacts
3. Copy the agent context template into CLAUDE.md / AGENTS.md
4. Establish design foundations before building

## When to Load This Skill

- Starting a new project
- Joining an existing codebase for the first time
- When asked to "bootstrap" or "kick off" a project
- When project scope or tier needs reassessment

---

## Kickoff Workflow

### Step 1: Ask the Core Questions

Use the question tool to gather context. See [kickoff-checklist.md](reference/kickoff-checklist.md) for the full list.

**Minimum questions:**
1. What are we building and why?
2. What is the name?
3. What tier? (Explore / Personal / Public)
4. Tech stack and rationale?
5. Design in Figma first or direct-to-code?

### Step 2: Determine Tier

| Tier | Use When | Required Artifacts |
|------|----------|-------------------|
| **Explore** | Spikes, prototypes, learning | README.md with findings |
| **Personal** | Portfolio, internal tools | README.md, PRD.md, gotchas.md, brand_assets/ |
| **Public** | Production, client work | All of Personal + CI/CD, brand docs, test coverage |

### Step 3: Create Artifacts

Based on tier, create the required files:

**All tiers:**
- Update README.md with architecture and how to run

**Personal and Public:**
- Create PRD.md from the [discovery template](reference/kickoff-checklist.md)
- Create gotchas.md for logging lessons
- Create brand_assets/ folder

**Public only:**
- Set up CI/CD (lint, typecheck, test, build on PRs)
- Create brand-guidelines.md and brand-voice.md
- Enable AI code review on PRs

### Step 4: Set Up Agent Context

Copy the [agent context template](reference/agent-context-template.md) into the project's CLAUDE.md (or AGENTS.md for other agents).

This gives every future session the core rules without needing to reload the skill.

### Step 5: Establish Design Foundations

Before writing any components:

1. **Set up design tokens** - See [design-tokens.md](reference/design-tokens.md)
   - Primitives (colors, spacing, typography scales)
   - Semantic tokens (color-text-primary, color-background-surface, etc.)
   
2. **Create site-wide wrappers** - max-width + auto margins so content is centered and doesn't touch edges on large screens

3. **Build shared header and footer** - These appear on every page

4. **Ensure base layout is solid** - This is the foundation. It must be responsive, clean, and simple before building features.

### Step 6: Build Static MVP

**MVP Rule:** Always ship a static MVP with dummy data first. Real data, APIs, and integrations come later.

- Use `https://picsum.photos/800/600` for placeholder images
- Hardcode content, but never hardcode styles
- Once MVP is approved, layer in real data

---

## Reference Documents

Load these when needed:

| Reference | When to Use |
|-----------|-------------|
| [agent-context-template.md](reference/agent-context-template.md) | Copy into CLAUDE.md |
| [red-lines.md](reference/red-lines.md) | Review dangerous operations |
| [design-tokens.md](reference/design-tokens.md) | Setting up design system |
| [testing-strategy.md](reference/testing-strategy.md) | Setting up tests or verification |
| [kickoff-checklist.md](reference/kickoff-checklist.md) | Full list of kickoff questions |
| [default-stack.md](reference/default-stack.md) | Tech stack decisions |

---

## Conflict Resolution

If existing repo instructions (CLAUDE.md / AGENTS.md, README.md) conflict with this skill:

1. **Existing instructions take precedence** - The repo knows itself best
2. **Document the conflict** - Note it in gotchas.md
3. **Reconcile explicitly** - Don't silently override

---

## Quick Reference: Tier Checklist

### Explore
- [ ] README.md updated with findings
- [ ] Smoke-test happy path

### Personal
- [ ] README.md (architecture, how to run)
- [ ] PRD.md (scope, user stories)
- [ ] gotchas.md created
- [ ] Design tokens set up
- [ ] Base layout responsive and solid
- [ ] Lint and build pass

### Public
- [ ] Everything from Personal
- [ ] CI/CD pipeline configured
- [ ] AI code review enabled
- [ ] Playwright tests for critical paths
- [ ] brand-guidelines.md and brand-voice.md
- [ ] Accessibility checked
- [ ] Performance checked
- [ ] Never commit directly to main

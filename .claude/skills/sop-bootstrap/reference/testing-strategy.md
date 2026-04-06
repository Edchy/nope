# Testing Strategy

Testing philosophy and guidelines. Load this reference when setting up tests or when verification is needed.

## Core Principle

**Verify before declaring done.** Every task should end with evidence that it works, not just code that looks right.

## Verification Levels

Match verification effort to task risk:

| Risk Level | Examples | Minimum Verification |
|------------|----------|---------------------|
| Low | Copy changes, styling tweaks | Visual check in browser |
| Medium | New components, bug fixes | Manual test + build passes |
| High | Auth, payments, data mutations | Automated tests + manual verification |
| Critical | Security, production deploys | Full test suite + staging verification |

## When to Write Tests

**Always write tests for:**
- Business logic (calculations, transformations, validations)
- Auth and permissions
- Data mutations (create, update, delete)
- API endpoints
- Anything that has broken before

**Tests optional for:**
- Pure UI components (use visual verification instead)
- One-off scripts
- Exploring/spike tier work

**Never skip tests for:**
- Public tier projects going to production
- Anything touching user data or money

## Test Types by Purpose

| Type | Purpose | When to Use |
|------|---------|-------------|
| Unit | Verify isolated logic | Business rules, utilities, transformers |
| Integration | Verify components work together | API routes, database operations |
| E2E (Playwright) | Verify user flows work | Critical paths: signup, checkout, core features |
| Visual | Catch unintended UI changes | Before declaring UI work done |

## Verification Checklist

Before marking a task complete:

- [ ] Does the build pass? (`npm run build` or equivalent)
- [ ] Do existing tests pass?
- [ ] Did you manually test the happy path?
- [ ] Did you test edge cases? (empty states, errors, loading)
- [ ] Does it look correct in the browser?
- [ ] Does it work on mobile viewport?

## Common Testing Mistakes

| Mistake | Better Approach |
|---------|-----------------|
| Testing implementation details | Test behavior and outcomes |
| Mocking everything | Use real dependencies when practical |
| Only testing happy path | Include error cases and edge cases |
| Flaky tests | Fix or delete them; flaky tests erode trust |
| No tests because "it's simple" | Simple code breaks too |

## Project Setup

If no test runner exists:

1. **Explore tier**: Skip formal tests, use manual verification
2. **Personal tier**: Add Vitest or Jest for unit tests
3. **Public tier**: Add Playwright for E2E, enforce tests in CI

## CI Integration

For Personal/Public tiers, tests should run automatically:

```yaml
# Example GitHub Actions
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck  
      - run: npm run test
      - run: npm run build
```

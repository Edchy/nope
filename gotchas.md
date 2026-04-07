# Gotchas

Log mistakes, surprises, and lessons learned here so future sessions don't repeat them.

---

<!-- Format:
## YYYY-MM-DD — Short title
**What happened:** ...
**Root cause:** ...
**Fix / lesson:** ...
-->

## 2026-04-07 — Button components are not row-layout primitives
**What happened:** A hover-lift request on the `work` page was initially implemented by reusing `LiftButton` for full project rows, which leaked inline/button presentation into the list layout.
**Root cause:** Interaction behavior and visual button styling were coupled in one component, so reusing it outside button contexts distorted spacing, display mode, and typography.
**Fix / lesson:** Keep motion utilities separate from presentation primitives. Use dedicated surface-level components for row/card hover behavior instead of forcing button components to act as layout wrappers.

# Design Token Naming Guide

Design tokens are the backbone of any design system. They keep your brand's visual style consistent and easy to manage.

## What Are Design Tokens?

Design tokens are reusable, named variables that store visual design attributes. Instead of hard-coding values like hex codes or pixel sizes, you define them once and reference them everywhere.

Think of design tokens as **nicknames for your design elements**.

```css
/* Instead of hard-coding everywhere: */
button { background: #3B82F6; }
link { color: #3B82F6; }
icon { fill: #3B82F6; }

/* Define once as a token: */
--color-brand-primary: #3B82F6;

/* Then reference everywhere: */
button { background: var(--color-brand-primary); }
link { color: var(--color-brand-primary); }
```

When the brand color changes, you update **one value** and it updates everywhere.

---

## The Token Hierarchy

Tokens flow through layers of abstraction.

### Level 1: Primitives (Raw Values)

Primitives are the foundational values. They are actual colors, sizes, and values with no meaning attached.

**Good primitive name:** `blue-500` (describes the color itself)
**Not a primitive name:** `button-primary` (describes usage, that's semantic)

| Category | Examples |
|----------|----------|
| Colors | `blue-500`, `gray-900`, `red-400` |
| Spacing | `space-1: 4px`, `space-2: 8px`, `space-4: 16px` |
| Typography | `font-size-sm: 14px`, `font-size-base: 16px` |

#### Color Scales

Colors are organized into scales from light to dark using numbers from 50 (lightest) to 950 (darkest), with 500 being the base color.

```
50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
Lighter ←-----------------------------→ Darker
```

---

### Level 2: Semantic Tokens (Purpose)

Semantic tokens give primitive values meaning. Instead of saying "use blue-500", you say "use the primary action color".

**Pattern:** `[category]-[property]-[variant]`

| Pattern | Examples |
|---------|----------|
| `color-background-*` | `primary`, `secondary`, `surface`, `overlay` |
| `color-text-*` | `primary`, `secondary`, `disabled`, `inverse` |
| `color-action-*` | `primary`, `secondary`, `danger`, `success` |
| `color-border-*` | `default`, `focus`, `error`, `success` |

#### Theming

Semantic tokens unlock theming. The same token name can point to different primitives:

| Token | Light Theme | Dark Theme |
|-------|-------------|------------|
| `color-text-primary` | `gray-900` | `gray-50` |
| `color-background` | `gray-50` | `gray-900` |
| `color-action-primary` | `blue-500` | `blue-400` |

---

### Level 3: Component Tokens (Specific)

For when semantic tokens aren't specific enough. A button might need different hover colors than a card.

**Use component tokens when:**
- Components need unique states (hover, active, focus)
- Different components need different styling for the same "role"
- You want to change a component without affecting others

**Pattern:** `[component]-[variant]-[property]-[state]`

```
button-primary-background-hover
input-default-border-focus
card-elevated-shadow-default
badge-danger-text-default
```

#### Reference Chain

```
/* Primitive */
--blue-600: #2563EB;

/* Semantic (references primitive) */
--color-action-primary-hover: var(--blue-600);

/* Component (references semantic) */
--button-primary-background-hover: var(--color-action-primary-hover);
```

---

## Naming Patterns Reference

| Token Type | Pattern | Examples |
|------------|---------|----------|
| Primitives | `[color]-[shade]` | `blue-500`, `gray-900` |
| Semantic | `[category]-[property]-[variant]` | `color-background-primary` |
| Component | `[component]-[variant]-[property]-[state]` | `button-primary-background-hover` |

---

## Naming Principles

| Principle | Description |
|-----------|-------------|
| **Descriptive** | Names explain purpose, not just appearance |
| **Consistent** | Same pattern throughout the system |
| **Predictable** | Others can guess token names correctly |
| **Concise** | Short enough to type, long enough to understand |

---

## Naming Checklist

Before finalizing any token name:

- [ ] Does the name describe **what it's for**, not what it looks like?
- [ ] Does it follow your system's **established pattern**?
- [ ] Could someone **guess the name** without seeing documentation?
- [ ] Is it **specific enough** to avoid confusion?
- [ ] Does the reference chain end at a **primitive value**?
- [ ] Are reference chains **under 4 levels deep**?

---

## Common Token Categories

| Category | Properties |
|----------|------------|
| `color` | background, text, border, fill, stroke |
| `font` | family, size, weight, line-height |
| `space` | inset, margin, padding, gap |
| `border` | width, style, radius |
| `shadow` | elevation levels |
| `motion` | duration, easing |

---

## Real-World Examples

### Colors

```css
--color-background-primary
--color-background-surface
--color-text-primary
--color-text-secondary
--color-text-disabled
--color-action-primary
--color-action-danger
--color-border-default
--color-border-focus
```

### Typography

```css
--font-size-sm
--font-size-base
--font-size-lg
--font-weight-regular
--font-weight-medium
--font-weight-bold
--line-height-tight
--line-height-normal
```

### Spacing

```css
--space-1: 4px;
--space-2: 8px;
--space-4: 16px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
```

### Component States

```css
--button-primary-background-default
--button-primary-background-hover
--button-primary-background-active
--button-primary-background-disabled
--input-default-border-default
--input-default-border-focus
--input-default-border-error
```

We want systems for things like:
• Font size
• Font weight
• Line height
• Color
• Margin
• Padding
• Width
• Height
• Box shadows
• Border radius
• Border width
• Opacity

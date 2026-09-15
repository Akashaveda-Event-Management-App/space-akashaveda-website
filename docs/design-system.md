# Akashaveda Design System
> Space-Tech Ops aesthetic — inspired by quindar.space. Dark-first, dual-theme.

---

## Color Tokens

### Dark Theme (default)

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#0B0F16` | Page background, section backgrounds |
| `--surface` | `#131A24` | Card/panel backgrounds |
| `--surface-raised` | `#1C2A3D` | Hover states, elevated surfaces |
| `--text` | `#F4F6F9` | Headlines, primary content |
| `--text-muted` | `#C7CEDA` | Body copy, descriptions |
| `--text-faint` | `#8A95A3` | Captions, labels, secondary text |
| `--accent` | `#5A7AB3` | Buttons (bg fill), large decorative elements only |
| `--accent-hover` | `#6E8EC7` | Button hover state |
| `--accent-brand` | `#37517E` | Deep brand navy, gradients |
| `--border` | `rgba(255,255,255,0.08)` | Dividers, card edges |

### Light Theme (`.light` class on `<html>`)

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#F7F9FC` | Page background |
| `--surface` | `#F0F3F8` | Cards |
| `--surface-raised` | `#FFFFFF` | Elevated cards |
| `--text` | `#1A2333` | Headlines |
| `--text-muted` | `#4A5568` | Body copy |
| `--text-faint` | `#6B7A8D` | Secondary text |
| `--accent` | `#37517E` | Buttons, links |
| `--accent-hover` | `#4A6A9E` | Hover state |
| `--border` | `#E2E6ED` | Dividers |

---

## WCAG Contrast Ratios (Dark Theme)

| Color | On `#0B0F16` | On `#131A24` | AA? |
|-------|-------------|-------------|-----|
| `#F4F6F9` | 15.5:1 | 12.8:1 | ✅ AAA |
| `#C7CEDA` | 8.9:1 | 7.3:1 | ✅ AAA |
| `#8A95A3` | 5.3:1 | 4.4:1 | ✅ AA |
| `#7B9BC8` | 4.8:1 | 3.9:1 | ✅ AA (large text only for 3.9:1) |
| `#5A7AB3` | 3.2:1 | 2.6:1 | ❌ fails AA — **buttons/fill only** |
| `#37517E` | 1.8:1 | 1.5:1 | ❌ decorative/gradient only |

### Critical Rule
> `#5A7AB3` must NEVER be used as foreground text color on dark backgrounds.
> Use `#7B9BC8` for accent labels, eyebrow text, icon colors on dark bg.
> Use `#5A7AB3` only for button backgrounds, badge backgrounds, and large decorative use.

---

## Tailwind Class Reference

### Accent Text (use `#7B9BC8`, not `#5A7AB3`)
```
text-[#7B9BC8]   → eyebrow labels, section tags, mono labels, icon tints
text-[#6E8EC7]   → hover states for accent text, gradient ends
text-[#5A7AB3]   → large headings only (>2rem), never body/label text
```

### Card Surfaces
```
bg-[#131A24]              → standard card / panel background
bg-[#0F1520]              → slightly darker card (nested depth)
bg-[#1C2A3D]              → hover state / raised surface
hover:bg-[#1C2A3D]        → card hover
bg-[#5A7AB3]/10           → tinted badge background
border-[rgba(255,255,255,0.08)]  → standard card border (keep subtle)
```

### Page / Section Backgrounds
```
bg-[#0B0F16]              → base page bg (replaces old #030712)
from-[#0B0F16] via-[#0F1520] to-[#0B0F16]   → section gradient (subtle)
```

### Gradient Text Headings
```
from-[#A8BCD9] to-[#6E8EC7]         → bright navy gradient (stat headings)
from-[#7B9BC8] via-[#6E8EC7] to-[#5A7AB3]   → full-range hero gradient
from-[#C7CEDA] to-[#7B9BC8]         → light-to-mid gradient
```
> Always use TWO DIFFERENT colors in gradients — single-color gradients are invisible.

### Body & Supporting Text
```
text-[#F4F6F9]   → primary headings, key data points
text-[#C7CEDA]   → body copy, descriptions (replaces gray-400)
text-[#8A95A3]   → captions, tags, secondary labels (replaces gray-500/600)
```

---

## Typography

| Role | Class | Size |
|------|-------|------|
| Page headline (hero) | `font-extrabold uppercase tracking-tight` | `text-5xl`–`text-7xl` |
| Section headline | `font-extrabold uppercase tracking-tight` | `text-3xl`–`text-5xl` |
| Card headline | `font-bold uppercase tracking-tight` | `text-xl`–`text-2xl` |
| Eyebrow label | `font-mono text-[11px] uppercase tracking-[0.18em] text-[#7B9BC8]` | `11px` |
| Body | `text-[#C7CEDA] leading-[1.8]` | `text-sm`–`text-base` |
| Caption/tag | `font-mono text-[10px] uppercase text-[#8A95A3]` | `10px` |

---

## Spacing — Section Rhythm

All sections use consistent vertical padding:
```
py-20 sm:py-28           → standard section
py-24 sm:py-32           → hero-adjacent sections (Stats, Contact)
```

Consistent `scroll-mt-28 sm:scroll-mt-32` on all `id`-anchored sections.

---

## Component Patterns

### Card
```tsx
// Standard info card — no border, solid surface
<div className="bg-[#131A24] rounded-2xl p-7 sm:p-9 hover:bg-[#1C2A3D] transition-colors duration-300">
```

### Badge / Eyebrow label
```tsx
<p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#7B9BC8] mb-4">
  Section Label
</p>
```

### Section heading with gradient accent
```tsx
<h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
  Primary Text{' '}
  <span className="bg-gradient-to-r from-[#A8BCD9] to-[#6E8EC7] bg-clip-text text-transparent">
    Accent Text
  </span>
</h2>
```

### Primary CTA Button
```tsx
<button className="bg-[#5A7AB3] hover:bg-[#6E8EC7] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-[0_0_20px_rgba(90,122,179,0.3)]">
```

### Outlined Button
```tsx
<button className="border border-[rgba(255,255,255,0.12)] bg-white/[0.03] hover:bg-white/[0.07] text-[#C7CEDA] hover:text-white text-sm font-medium px-6 py-3 rounded-xl transition-all">
```

---

## Navigation

### Current links
```ts
{ label: 'About',     sectionId: 'about' }
{ label: 'Services',  sectionId: 'services' }
{ label: 'Platform',  sectionId: 'platform' }
{ label: 'Products',  sectionId: 'products' }
{ label: 'Mission',   sectionId: 'missions' }
// CTA: Contact Us → sectionId: 'contact'
```

### Mobile — numbered prefix
```tsx
<span className="text-[11px] font-mono text-[#7B9BC8] font-bold w-5">01</span>
<span>{label}</span>
```

---

## Animation

Single animation system: **Framer Motion** for React components.
GSAP used for: imperative loops (Orbit3DGlobe), mouse-parallax (HUD card tilt), ScrollTrigger parallax.

Shared variants in `src/lib/motion.ts`:
- `fadeUp` — standard section reveal
- `staggerContainer(delay)` — grid stagger wrapper
- `staggerItem` — individual staggered child
- `viewport` — `{ once: true, margin: '-56px 0px' }`

---

## Theme Toggle

`ThemeToggle` component in `src/components/ThemeToggle.tsx`.
- Persists to `localStorage` key `theme`
- Toggles `.light` class on `<html>`
- Full light-theme support requires CSS var usage: `bg-[var(--surface)]`, `text-[var(--text)]`
- Current: dark theme is fully styled; light theme applies to layout-level elements

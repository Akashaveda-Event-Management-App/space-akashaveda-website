# Akashaveda Design System — Orbtrix Cinematic Dark & High-Contrast Invert
> Space-Tech Autonomy aesthetic — directly modeled on Orbtrix.space. Deep black orbit canvas with precision violet accents and signature high-contrast white footer.

---

## 1. Color Tokens

### Dark Canvas (Body & Main Sections)

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#000000` | Page background, base section canvas |
| `--surface` | `#08080A` | Standard card and module backgrounds |
| `--surface-raised` | `#121216` | Hover state, elevated surfaces, telemetry monitors |
| `--surface-hover` | `rgba(255, 255, 255, 0.06)` | Hover highlight for list items and controls |
| `--text-primary` | `#FFFFFF` | Headlines, titles, key data points |
| `--text-muted` | `#A3A3AE` | Body copy, technical descriptions |
| `--accent` | `#A78BFA` | Eyebrow badges, section labels, highlighted terms |
| `--accent-mark` | `#7C3AED` | Diamond markers (45° rotated), active bars, main CTA fill |
| `--accent-soft` | `#8B5CF6` | Sub-accents and gradient cues |
| `--accent-wash` | `rgba(124, 58, 237, 0.14)` | Hover wash for buttons and interactive items |
| `--border` | `rgba(255, 255, 255, 0.12)` | Subtle hairline card borders and dividers |
| `--border-strong` | `rgba(255, 255, 255, 0.24)` | Active outlines, input borders |
| `--border-accent` | `rgba(167, 139, 250, 0.40)` | Interactive and active card boundaries |

### Inverted High-Contrast Canvas (Signature Footer)

| Token | Hex | Use |
|---|---|---|
| `--ft-bg` | `#FFFFFF` | Footer background (pure crisp white) |
| `--ft-text` | `#0B0B0F` | Headings, office names, brand name |
| `--ft-muted` | `#5B5B66` | Address descriptions, taglines, legal fine print |
| `--ft-link` | `#33333C` | Navigation links (hover: `#7C3AED`) |
| `--ft-border` | `rgba(11, 11, 15, 0.14)` | Hairline dividers and social button outlines |
| `--ft-accent` | `#7C3AED` | Monospace category tags (`# MISSION_CONNECT`, `INCUBATED AT`) |
| `--ft-cta-border` | `#0B0B0F` | Bottom action button solid border |

---

## 2. Typography

- **Display & Headings**: `Google Sans Flex`, `system-ui`, `-apple-system`, `sans-serif`
  - Font weight: 500 / 600
  - Letter spacing: `-0.03em` to `-0.04em` (cinematic tight tracking)
- **Eyebrows & Micro-copy**: `JetBrains Mono`, `ui-monospace`, `monospace`
  - Font size: `11px` / `12px`
  - Letter spacing: `+0.14em` to `+0.18em` uppercase
  - Color: `#A78BFA` (Dark canvas) / `#7C3AED` (Inverted footer)
- **Body Text**: `Google Sans Flex`
  - Font weight: 300 / 400
  - Line height: 1.65 to 1.75
  - Color: `#A3A3AE`

---

## 3. Shape & Interaction Rules

- **Radius Scale**:
  - `sm`: 6px
  - `md`: 10px (standard cards and panels)
  - `lg`: 14px (dialogs, large containers)
  - `btn`: 8px (footer CTA button)
  - `pill`: 9999px (floating navbar, hero CTAs, badge chips)
- **Diamond Marker**: Characteristic Orbtrix design element:
  - 5px × 5px square, rotated 45 degrees (`rotate-45`), colored `#7C3AED`.
- **Buttons**:
  - `Primary Dark`: Pill radius, black background, subtle `#A78BFA` border, violet text or white text, hover purple wash.
  - `Secondary Dark`: Pill radius, transparent background, white border `border-white/20`.
  - `Footer Inverted`: White background, solid black border, black text, with right arrow sliding on hover.

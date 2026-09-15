---
version: alpha
name: Orbtrix
description: |
  Orbtrix's design system embodies a cutting-edge, space-forward aesthetic that
  balances cosmic darkness with purposeful, energetic accents. The visual
  language is rooted in deep blacks and minimal contrast, creating an immersive,
  futuristic backdrop for intelligent autonomy infrastructure. Bold, expansive
  typography dominates hero moments, while purple accents (#7C3AED) punctuate
  the interface, evoking precision and advanced technology. The system
  prioritizes content clarity through generous whitespace and deliberate color
  gradients that guide the eye across sectional transitions. Every element feels
  intentional and calibrated, reflecting the precision required for spacecraft
  operations and autonomous decision-making.
source:
  url: "https://www.orbtrix.space/"
  pagesAnalyzed: 1
  extractedAt: 2026-09-15
  tokensMeasured: true
colors:
  primary: "#121216"
  accent: "#7C3AED"
  link: "#33333C"
  canvas: "#000000"
  surface-alt: "#FFFFFF"
  on-primary: "#A3A3AE"
  ink: "#FFFFFF"
  body: "#A3A3AE"
  muted: "#5B5B66"
  faint: "#0B0B0F"
  accent-1: "#A78BFA"
typography:
  display-xl:
    fontFamily: "Google Sans Flex"
    fontSize: 77.76px
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: -1.56px
  display-lg:
    fontFamily: "Google Sans Flex"
    fontSize: 51.6088px
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: -1.55px
  display-md:
    fontFamily: "Google Sans Flex"
    fontSize: 43.2848px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: -1.3px
  heading-xxl:
    fontFamily: "Google Sans Flex"
    fontSize: 37.44px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -1.12px
  heading-xl:
    fontFamily: "Google Sans Flex"
    fontSize: 35.7932px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0.17px
  heading-lg:
    fontFamily: "Google Sans Flex"
    fontSize: 34.9608px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -1.05px
  heading-md:
    fontFamily: "Google Sans Flex"
    fontSize: 33.296px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.83px
  heading-sm:
    fontFamily: "Google Sans Flex"
    fontSize: 32.4636px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: -0.97px
  heading-xs:
    fontFamily: "Google Sans Flex"
    fontSize: 26.6368px
    fontWeight: 300
    lineHeight: 1.38
    letterSpacing: -0.8px
  body-xl:
    fontFamily: "Google Sans Flex"
    fontSize: 23.04px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.17px
  body-lg:
    fontFamily: "Google Sans Flex"
    fontSize: 19.44px
    fontWeight: 300
    lineHeight: 1.62
    letterSpacing: 0.17px
  body-md:
    fontFamily: "Google Sans Flex"
    fontSize: 16.648px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0.17px
  body-sm:
    fontFamily: "Google Sans Flex"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.15px
  body-xs:
    fontFamily: "Google Sans Flex"
    fontSize: 14.6502px
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: 0.17px
  body-xs-2:
    fontFamily: "Google Sans Flex"
    fontSize: 13.8178px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0.17px
  button-xl:
    fontFamily: "Google Sans Flex"
    fontSize: 21.3094px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.21px
  button-lg:
    fontFamily: "Google Sans Flex"
    fontSize: 16.648px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.17px
  button-md:
    fontFamily: "Google Sans Flex"
    fontSize: 12.9854px
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: 0.17px
  caption-md:
    fontFamily: "Google Sans Flex"
    fontSize: 11.5px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0.17px
  caption-sm:
    fontFamily: "Google Sans Flex"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 1.76px
    textTransform: uppercase
  caption-xs:
    fontFamily: "Google Sans Flex"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.6px
  code:
    fontFamily: ui-monospace
    fontSize: 11.6536px
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: 0.52px
rounded:
  none: 0px
  xs: 8px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px
  section: 36px
  band: 40px
borderWidths:
  thin: 1px
elevationStrategy: color-blocking
themes:
  derived: light   # the other theme is the site's measured palette
  light:
    bg: "#FBFBFB"
    surface: "#F1F1F1"
    surfaceRaised: "#E9E9E9"
    text: "#111111"
    textMuted: "#737373"
    border: "#D8D8D8"
    accent: "#121216"
    accentFg: "#FFFFFF"
    focusRing: "#121216"
    elevation: shadow
  dark:
    bg: "#000000"
    surface: "#FFFFFF"
    surfaceRaised: "#FFFFFF"
    text: "#FFFFFF"
    textMuted: "#A3A3AE"
    border: "#1F1F1F"
    accent: "#5B5B70"
    accentFg: "#FFFFFF"
    focusRing: "#121216"
    elevation: "border+surface"
  contrastFailures:
    - "dark: text on surface = 1:1 (needs 4.5:1)"
gradients:
  - context: section
    kind: linear
    value: "linear-gradient(to right, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.62) 38%, rgb(0, 0, 0) 74%)"
  - context: section
    kind: linear
    value: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 78%, rgb(0, 0, 0) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.92) 30%, rgba(0, 0, 0, 0.55) 55%, rgba(0, 0, 0, 0.12) 80%, rgba(0, 0, 0, 0) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 22%, rgba(0, 0, 0, 0) 76%, rgb(0, 0, 0) 100%)"
components:
  button-filled:
    typography: "{typography.body-sm}"
    textColor: "{colors.ink}"
    border: "1px solid rgba(255, 255, 255, 0.38)"
    height: 50px
    padding: "0px 26px 0px 26px"
    rounded: 26px
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  button-secondary:
    textColor: "{colors.faint}"
    border: "1px solid {colors.faint}"
    height: 39.8438px
    padding: "11.6536px 20.81px 11.6536px 20.81px"
    fontSize: 13.3184px
    fontFamily: "Google Sans Flex"
    fontWeight: 500
    lineHeight: 1
    rounded: "{rounded.xs}"
    backgroundColor: "{colors.surface-alt}"
  button-icon:
    typography: "{typography.button-lg}"
    textColor: "{colors.body}"
    border: "1px solid rgba(255, 255, 255, 0.14)"
    height: 49.9375px
    rounded: 999px
    backgroundColor: "{colors.primary}"
  button-filled-sm:
    textColor: "{colors.ink}"
    height: 16.625px
    padding: "8.324px 20.81px 8.324px 20.81px"
    fontSize: 16.648px
    fontFamily: "Google Sans Flex"
    fontWeight: 500
    lineHeight: 1.7
    rounded: "{rounded.xs}"
    backgroundColor: "{colors.accent}"
  button-outline:
    typography: "{typography.body-sm}"
    textColor: "{colors.accent-1}"
    border: "1px solid rgba(167, 139, 250, 0.34)"
    height: 50px
    padding: "0px 26px 0px 26px"
    rounded: 26px
    backgroundColor: "{colors.canvas}"
  button-outline-sm:
    textColor: "{colors.ink}"
    border: "1px solid rgba(255, 255, 255, 0.45)"
    height: 41.6094px
    padding: "0px 24.972px 0px 24.972px"
    fontSize: 14.1508px
    fontFamily: "Google Sans Flex"
    fontWeight: 500
    lineHeight: 1.7
    rounded: "{rounded.xs}"
  badge-text:
    textColor: "{colors.muted}"
    height: 72.1875px
    fontSize: 14.1508px
    fontFamily: "Google Sans Flex"
    fontWeight: 300
    lineHeight: 1.7
  navigation:
    typography: "{typography.button-lg}"
    textColor: "{colors.ink}"
    height: 42.0938px
  footer:
    typography: "{typography.button-lg}"
    textColor: "{colors.muted}"
    backgroundColor: "{colors.surface-alt}"
  link:
    textColor: "rgba(255, 255, 255, 0.72)"
    padding: "8.324px 0px 8.324px 0px"
    fontSize: 14.9832px
    fontFamily: "Google Sans Flex"
    fontWeight: 500
    lineHeight: 1.7
  link-sm:
    typography: "{typography.button-lg}"
    textColor: "{colors.ink}"
states:
  card-hover:
    target: card
    state: hover
    opacity: 1
  other-hover:
    target: other
    state: hover
    borderColor: "rgba(167, 139, 250, 0.34)"
  badge-hover:
    target: badge
    state: hover
    borderColor: "rgba(167, 139, 250, 0.42)"
  nav-hover:
    target: nav
    state: hover
    opacity: 1
    transform: "scaleY(1)"
  button-hover:
    target: button
    state: hover
    borderColor: "{colors.ink}"
    backgroundColor: "rgba(255, 255, 255, 0.12)"
breakpoints:
  - width: 375
    containerWidth: 345
    gridColumns: 3
    navLinksVisible: 33
    menuToggleVisible: true
    headingPx: 44
    bodyPx: 16
    sectionPaddingX: 20
  - width: 768
    containerWidth: 707
    gridColumns: 6
    navLinksVisible: 33
    menuToggleVisible: true
    headingPx: 44
    bodyPx: 16
    sectionPaddingX: 23
  - width: 1024
    containerWidth: 942
    gridColumns: 6
    navLinksVisible: 21
    menuToggleVisible: true
    headingPx: 55
    bodyPx: 16
    sectionPaddingX: 31
  - width: 1280
    containerWidth: 1178
    gridColumns: 6
    navLinksVisible: 21
    menuToggleVisible: true
    headingPx: 69
    bodyPx: 16
    sectionPaddingX: 38
  - width: 1440
    containerWidth: 1325
    gridColumns: 6
    navLinksVisible: 21
    menuToggleVisible: true
    headingPx: 78
    bodyPx: 17
    sectionPaddingX: 43
coverage:
  statesFound: 61
  gradientsFound: 4
  rolesUnassigned: 1
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Orbtrix

## 1. Visual Theme & Atmosphere

Orbtrix's design system embodies a cutting-edge, space-forward aesthetic that balances cosmic darkness with purposeful, energetic accents. The visual language is rooted in deep blacks and minimal contrast, creating an immersive, futuristic backdrop for intelligent autonomy infrastructure. Bold, expansive typography dominates hero moments, while purple accents (`{colors.accent}` — `#7C3AED`) punctuate the interface, evoking precision and advanced technology. The system prioritizes content clarity through generous whitespace and deliberate color gradients that guide the eye across sectional transitions. Every element feels intentional and calibrated, reflecting the precision required for spacecraft operations and autonomous decision-making.

**Key Characteristics**
- Deep black canvas (`{colors.canvas}` — `#000000`) as the dominant background, establishing a premium, immersive environment
- Strategic use of purple accent (`{colors.accent}` — `#7C3AED`) for calls-to-action and interactive highlights
- Minimal color blocking with accent-driven hierarchy rather than multi-colored status ramps
- Expansive heading sizes with tight letter-spacing for impact
- Generous whitespace and gradient overlays that create depth without shadow layering
- Pill-shaped primary buttons contrasting with sharp component edges elsewhere
- Opacity-driven interaction states that feel responsive and lightweight

## 2. Color Palette & Roles

### Primary & Brand
- **Primary / Brand** (`{colors.primary}` — `#121216`): Core brand accent used in CTAs, active states, and brand mark; near-black with subtle warmth
- **Accent** (`{colors.accent}` — `#7C3AED`): Vibrant purple driving secondary CTAs, decorative hero bands, and interactive highlights; signals advanced capability and energy

### Interactive & Accent
- **Accent Decorative** (`{colors.accent-1}` — `#A78BFA`): Lighter purple tone used for decorative elements and gradient transitions; no direct interaction role assigned

### Neutral Scale & Text
- **Canvas** (`{colors.canvas}` — `#000000`): Default page background; deep, immersive foundation
- **Surface Alt / Ink** (`{colors.surface-alt}` — `#FFFFFF`): Alternating section backgrounds and primary heading text; creates contrast bands across the page
- **Body / On Primary** (`{colors.on-primary}` — `#A3A3AE`): Secondary text and body copy; label color on brand surfaces; mid-tone gray
- **Muted** (`{colors.muted}` — `#5B5B66`): Captions and tertiary text; deeper gray for reduced emphasis
- **Faint** (`{colors.faint}` — `#0B0B0F`): Tertiary and placeholder text; near-black for minimal visual weight

### Links
- **Link** (`{colors.link}` — `#33333C`): Inline link color; very dark gray, barely distinguishable from canvas until interaction

## 3. Typography Rules

### Font Family
**Primary**: Google Sans Flex (https://fonts.googleapis.com/)  
**Fallback stack**: system-ui, -apple-system, sans-serif

**Secondary / Code**: ui-monospace  
**Fallback stack**: monospace

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display XL | Google Sans Flex | 78px | 500 | auto | tight | Hero headline; largest measured |
| Display L | Google Sans Flex | 69px | 500 | auto | tight | Large hero section |
| Display M | Google Sans Flex | 55px | 500 | auto | tight | Secondary headline tier |
| Display S | Google Sans Flex | 44px | 500 | auto | tight | Smaller display context |
| Body MD | Google Sans Flex | 16px | 400 | auto | normal | Primary body and section text |
| Body SM | Google Sans Flex | 14px–15px | 400–500 | auto | normal | Navigation and secondary content |
| Button | Google Sans Flex | 13px–15px | 500 | auto | normal | CTA and button text |
| Caption | Google Sans Flex | 14px | 300–400 | auto | normal | Badges and tertiary labels |
| Code SM | ui-monospace | 16px | 400 | auto | normal | Monospace detail or technical reference |

### Principles
- **Expansive headlines**: Display sizes (44px–78px) create visual dominance and hierarchy, with tight letter-spacing reinforcing a technical, premium feel
- **Consistent body rhythm**: Body text remains stable across breakpoints (16px) to ensure readability in dense content
- **Weight distinction**: Heavier weights (500) reserved for interactive elements (buttons, nav links) and headlines; regular (400) weight for body
- **Minimal font switching**: Google Sans Flex is the primary typeface across all contexts except code; this consistency reinforces brand cohesion
- **Letter-spacing tightness**: Display text uses negative/tight tracking to feel controlled and forward-looking, matching the precision of space operations

## 4. Component Stylings

### Buttons

#### Primary Filled
- **Background**: `rgba(0, 0, 0, 0.3)` (semi-transparent black overlay on dark canvas)
- **Text Color**: `rgb(255, 255, 255)` white
- **Padding**: `0px 26px` (horizontal)
- **Height**: `50px`
- **Font Size**: `15px`, weight `500`, line-height `15px`
- **Border**: `1px solid rgba(255, 255, 255, 0.38)` (subtle white outline)
- **Border Radius**: `{rounded.full}` (pill shape — `9999px`)
- **Font Family**: Google Sans Flex
- **Hover State**: Background shifts to `var(--accent-wash)` (purple-tinted); text brightens
- **Usage**: Primary calls-to-action; hero CTAs and main conversion points

#### Secondary (Outlined)
- **Background**: `rgb(255, 255, 255)` white
- **Text Color**: `rgb(11, 11, 15)` near-black (`{colors.faint}`)
- **Padding**: `11.65px 20.81px`
- **Height**: `39.84px`
- **Font Size**: `13.32px`, weight `500`, line-height `13.32px`
- **Border**: `1px solid rgb(11, 11, 15)` (dark outline on light surface)
- **Border Radius**: `{rounded.xs}` (`8px`)
- **Font Family**: Google Sans Flex
- **Hover State**: Background darkens; text becomes brighter
- **Usage**: Secondary actions; lower-priority CTAs on light surfaces or alternating sections

#### Icon Button
- **Background**: `rgb(18, 18, 22)` (`{colors.primary}` — near-black)
- **Text Color**: `rgb(163, 163, 174)` (`{colors.on-primary}` — muted gray)
- **Padding**: `0px` (centered content)
- **Width / Height**: `49.94px` (square)
- **Font Size**: `16.65px`, weight `400`, line-height `28.3px`
- **Border**: `1px solid rgba(255, 255, 255, 0.14)` (faint white outline)
- **Border Radius**: `{rounded.full}` (`9999px` — circular)
- **Font Family**: Google Sans Flex
- **Hover State**: Border brightens to `rgba(255, 255, 255, 0.72)`; text becomes white
- **Usage**: Icon-only actions; navigation toggles, directional controls

#### Small Filled Accent
- **Background**: `rgb(124, 58, 237)` (`{colors.accent}` — vibrant purple)
- **Text Color**: `rgb(255, 255, 255)` white
- **Padding**: `8.32px 20.81px`
- **Height**: `16.63px`
- **Font Size**: `16.65px`, weight `500`, line-height `28.3px`
- **Border**: `0px` (no stroke)
- **Border Radius**: `{rounded.xs}` (`8px`)
- **Font Family**: Google Sans Flex
- **Hover State**: Background deepens or becomes more saturated
- **Usage**: Accent badges, secondary micro-CTAs, tag buttons

#### Outline (Large)
- **Background**: `rgb(0, 0, 0)` transparent black / canvas
- **Text Color**: `rgb(167, 139, 250)` light purple
- **Padding**: `0px 26px`
- **Height**: `50px`
- **Font Size**: `15px`, weight `500`, line-height `15px`
- **Border**: `1px solid rgba(167, 139, 250, 0.34)` (faint purple outline)
- **Border Radius**: `{rounded.full}` (pill — `9999px`)
- **Font Family**: Google Sans Flex
- **Hover State**: Border brightens to `rgba(167, 139, 250, 0.62)`; background tints purple `rgba(124, 58, 237, 0.1)`
- **Usage**: Alternative CTAs; accent-driven outline buttons on dark backgrounds

#### Outline Small
- **Background**: `rgba(0, 0, 0, 0)` transparent
- **Text Color**: `rgb(255, 255, 255)` white
- **Padding**: `0px 24.97px`
- **Height**: `41.61px`
- **Font Size**: `14.15px`, weight `500`, line-height `24.06px`
- **Border**: `1px solid rgba(255, 255, 255, 0.45)` (moderate white outline)
- **Border Radius**: `{rounded.xs}` (`8px`)
- **Font Family**: Google Sans Flex
- **Hover State**: Border becomes fully opaque white; background may tint slightly
- **Usage**: Secondary outline actions; smaller form buttons, alt navigation

### Navigation

#### Default Nav Link
- **Background**: transparent
- **Text Color**: `rgb(255, 255, 255)` white
- **Font Size**: `16.65px`, weight `400`, line-height `28.3px`
- **Border**: none
- **Border Radius**: `{rounded.none}` (`0px`)
- **Font Family**: Google Sans Flex
- **Hover State**: Text brightens or accent-tints; underline may appear; transform `translate()` possible
- **Padding**: typically `0px` (no internal padding)
- **Height**: `42.09px` (vertical rhythm)
- **Usage**: Primary navigation menu items; header links

### Badges & Labels

#### Text Badge
- **Background**: transparent
- **Text Color**: `rgb(91, 91, 102)` (`{colors.muted}` — muted gray)
- **Font Size**: `14.15px`, weight `300`, line-height `24.06px`
- **Border**: none
- **Border Radius**: `{rounded.full}` (pill shape — `9999px`)
- **Padding**: `0px` (text only, no visible container)
- **Font Family**: Google Sans Flex
- **Hover State**: Text becomes white; subtle border may appear `rgba(167, 139, 250, 0.42)`
- **Usage**: Category tags, metadata labels, secondary information

### Links

#### Default Link
- **Text Color**: `rgba(255, 255, 255, 0.72)` (slightly transparent white)
- **Font Size**: `14.98px`, weight `500`, line-height `25.47px`
- **Border**: none
- **Background**: transparent
- **Font Family**: Google Sans Flex
- **Hover State**: Color shifts to `var(--accent-bright)` or `var(--accent-mark)` (bright purple); may gain underline or border-bottom
- **Usage**: Inline text links; secondary hyperlinks within content

#### Small Link
- **Text Color**: `rgb(255, 255, 255)` white
- **Font Size**: `16.65px`, weight `400`, line-height `28.3px`
- **Border**: none
- **Background**: transparent
- **Font Family**: Google Sans Flex
- **Hover State**: May shift to accent color or gain underline
- **Usage**: Footer links, secondary navigation items

## 5. Layout Principles

### Spacing System
**Base unit**: `{spacing.xs}` = `8px`

**Full scale**:
- `{spacing.xxs}` = `4px` — micro-spacing between tightly grouped elements
- `{spacing.xs}` = `8px` — base unit; minimal gaps
- `{spacing.sm}` = `12px` — tight padding on components
- `{spacing.md}` = `16px` — standard component padding and gaps
- `{spacing.lg}` = `20px` — section-internal spacing
- `{spacing.xl}` = `24px` — larger gaps between related sections
- `{spacing.xxl}` = `28px` — spacious gaps; breathing room
- `{spacing.xxxl}` = `32px` — major section boundaries
- `{spacing.section}` = `36px` — between major content sections
- `{spacing.band}` = `40px` — largest section margin; full-width band transitions

**Usage context**: Button padding uses `{spacing.md}–{spacing.lg}`; section margins use `{spacing.section}` to `{spacing.band}`; header/footer padding scales with viewport.

### Grid & Container
**Max widths** (measured across breakpoints):
- 375px viewport: content column `345px` (section padding-x: `{spacing.lg}` — `20px`)
- 768px viewport: content column `707px` (section padding-x: `23px`)
- 1024px viewport: content column `942px` (section padding-x: `{spacing.xxxl}` — `31px`)
- 1280px viewport: content column `1178px` (section padding-x: `38px`)
- 1440px viewport: content column `1325px` (section padding-x: `{spacing.band}` — `43px`)

**Column layout**: 6-column grid system across all desktop breakpoints (1024px+); responsive reduction to narrower constraints on smaller viewports.

**Section patterns**: Full-width bands with black (`{colors.canvas}`) or white (`{colors.surface-alt}`) backgrounds; horizontal padding scales linearly with viewport width; hero sections feature background imagery with gradient overlays (linear-gradient color-blocking).

### Whitespace Philosophy
Orbtrix employs aggressive whitespace to create breathing room around content and visual hierarchy through isolation rather than crowding. Large vertical gaps between sections (`{spacing.section}` to `{spacing.band}`) signal distinct content zones. Horizontal padding increases with viewport size, ensuring text never feels compressed. This approach—minimal color variation paired with maximum spatial clarity—focuses attention and reinforces the precision-driven brand voice.

### Border Radius Scale
- `{rounded.none}` = `0px` — cards, images, buttons (secondary/outlined), sharp edges reinforce technical precision
- `{rounded.xs}` = `8px` — small components, secondary buttons, icon badge outlines; subtle softening
- `{rounded.full}` = `9999px` — primary buttons, icon buttons, pill-shaped navigation elements; maximum roundness for visual softness

**Component assignments**:
- Card: `{rounded.none}` (sharp)
- Badge: `{rounded.full}` (pill)
- Primary Button: `{rounded.full}` (pill)
- Secondary Button: `{rounded.xs}` (soft)
- Icon Button: `{rounded.full}` (circular)
- Image: `{rounded.none}` (sharp)

### Border Widths
- **Thin**: `1px` — button outlines, navigation underlines, subtle borders on interactive elements; primary stroke weight across the system

## 6. Depth & Elevation

### Elevation Philosophy
Orbtrix uses **color-blocking** rather than shadow layering for depth. The system relies on surface color changes—black (`{colors.canvas}`) to white (`{colors.surface-alt}`) and vice versa—to signal distinct layers. Horizontal gradient overlays (linear-gradient with opacity shifts) create subtle depth on hero sections without heavy shadows. This approach maintains the clean, technical aesthetic while preserving visual hierarchy.

**Key gradient overlays** (verbatim CSS):
- Hero fade-out (horizontal): `linear-gradient(to right, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.62) 38%, rgb(0, 0, 0) 74%)`
- Vertical vignette: `linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 78%, rgb(0, 0, 0) 100%)`
- Complex overlay: `linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.92) 30%, rgba(0, 0, 0, 0.55) 55%, rgba(0, 0, 0, 0.12) 80%, rgba(0, 0, 0, 0) 100%)`

**No box-shadow layers found**: The extraction did not measure traditional shadow elevations (e.g., `0 4px 12px rgba(0,0,0,0.1)`). Depth is achieved exclusively through background color shifts and gradient masks.

### Opacity Levels
- **85%** (`0.85`) — primary interactive hover; text or border brightens
- **75%** (`0.75`) — muted hover; reduced opacity for secondary elements
- **72%** (`0.72`) — text overlay opacity; used in navigation and link states
- **70%** (`0.70`) — secondary background tint; badge or accent background
- **55%** (`0.55`) — significant transparency; ghost overlay or focus ring
- **50%** (`0.50`) — half opacity; disabled states or placeholder text

### Z-index / Layering
- **Base** (`z-index: 0–10`) — default document flow; cards, buttons
- **Dropdown** (`z-index: 30–60`) — popovers and menu overlays; ranges from `30` to `60` depending on nesting depth
- **Sticky** (`z-index: 100`) — sticky headers, fixed navigation; always above content

## 7. Do's and Don'ts

### Do
- **Use the purple accent (`{colors.accent}` — `#7C3AED`) sparingly** — it signals advanced technology and must remain distinctive; overuse dilutes impact
- **Maintain sharp edges (`{rounded.none}`) on cards and images** — reinforces technical precision and contrasts with pill-shaped buttons
- **Scale section padding (`{spacing.lg}` to `{spacing.band}`) with viewport size** — ensures consistent breathing room and readability across devices
- **Leverage color-blocking (black ↔ white sections) for depth** — avoids shadow bloat and maintains the clean aesthetic
- **Use Google Sans Flex consistently** — it is the brand typeface; avoid mixing serif or other system fonts outside code blocks
- **Apply opacity values (`0.72`–`0.85`) to interactive hover states** — creates responsive feedback without adding saturation
- **Employ negative tracking on display text** — tight letter-spacing reinforces the premium, forward-looking voice
- **Wrap hero imagery with gradient overlays** — grounds visuals against the black canvas and ensures text legibility

### Don't
- **Avoid adding drop-shadows or multi-layer elevation** — the system uses color and gradient only; shadows break the clean aesthetic
- **Don't invent semantic colors (error red, success green)** — the brand does not expose status ramps; use accent or muted grays for feedback
- **Never round edges on secondary buttons or cards** — only primary buttons, badges, and icons use `{rounded.full}`
- **Don't exceed `{spacing.band}` (`40px`) for standard section gaps** — larger gaps dilute hierarchy
- **Avoid using the link color (`{colors.link}` — `#33333C`) as primary text** — it is intentionally low-contrast for understatement; use white or surface-alt for prominent text
- **Don't overuse `{colors.on-primary}` (`#A3A3AE`) in headlines** — it is body/label gray; headlines should be white or faint
- **Never inline new colors outside the measured palette** — it will conflict with the space-forward aesthetic
- **Avoid button widths smaller than `40px` or padding tighter than `8px`** — maintain touchability and visual stability

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Min Width | Max Width | Content Column | Grid Columns | Nav Links Visible | Section Padding X | Largest Heading | Body Font Size |
|---|---|---|---|---|---|---|---|---|
| Mobile | 320px | 767px | 345px | 3 | Yes (limited count) | `{spacing.lg}` (20px) | 44px | 16px |
| Tablet | 768px | 1023px | 707px | 6 | Yes (limited count) | 23px | 44px | 16px |
| Desktop | 1024px | 1279px | 942px | 6 | Yes (21 links) | `{spacing.xxxl}` (31px) | 55px | 16px |
| Large Desktop | 1280px | 1439px | 1178px | 6 | Yes (21 links) | 38px | 69px | 16px |
| Extra Large | 1440px+ | — | 1325px | 6 | Yes (21 links) | `{spacing.band}` (43px) | 78px | 17px |

**Key transitions**:
- Mobile-to-tablet: content column grows from `345px` to `707px`; heading remains 44px; padding increases from `20px` to `23px`
- Tablet-to-desktop: heading jumps to 55px; section padding increases to 31px; body font remains 16px
- Desktop-to-large: heading grows to 69px; padding increases to 38px
- Large-to-extra-large: heading reaches 78px; body font becomes 17px; full-width padding reaches `43px`

### Touch Targets
- **Minimum height**: `40px` for interactive elements (buttons, nav items, links)
- **Minimum width**: `40px–50px` for clickable regions (icon buttons, badges)
- **Padding reserve**: at least `{spacing.md}` (`16px`) between adjacent interactive elements on mobile
- **Icon buttons**: `49.94px` square (measured) ensures sufficient tap area

### Collapsing Strategy
- **Navigation menu**: Remains visible on all measured breakpoints; menu toggle present but items always accessible
- **Heading scale**: Progressive increase from `44px` (mobile) to `78px` (1440px); ensures readability and visual impact across devices
- **Section padding**: Scales linearly with viewport; tightest at mobile (`20px`), loosest at extra-large (`43px`)
- **Grid columns**: Maintain 6-column layout on all desktop sizes (1024px+); narrower viewports (375px–767px) use 3-column layout
- **Button width**: Primary buttons remain pill-shaped and full-width on mobile; desktop versions have fixed widths (`260px`, `286px`)

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA**: Accent (`{colors.accent}` — `#7C3AED`) for small filled buttons; Primary (`{colors.primary}` — `#121216`) for brand mark
- **Secondary CTA**: Surface Alt (`{colors.surface-alt}` — `#FFFFFF`) for outlined buttons on dark backgrounds
- **Background**: Canvas (`{colors.canvas}` — `#000000`) for default dark sections; Surface Alt (`#FFFFFF`) for alternating bands
- **Heading text**: Surface Alt (`{colors.surface-alt}` — `#FFFFFF`) for primary headlines; On Primary (`{colors.on-primary}` — `#A3A3AE`) for secondary
- **Body text**: On Primary (`{colors.on-primary}` — `#A3A3AE`) for main body; Muted (`{colors.muted}` — `#5B5B66`) for captions
- **Interactive hover**: Accent (`#7C3AED`) for accent highlights; Surface Alt (`#FFFFFF`) for text brightening
- **Decorative**: Accent 1 (`{colors.accent-1}` — `#A78BFA`) for gradient overlays and non-interactive accents

### Implementation Rules
1. **Start with the color-blocking foundation**: All sections alternate between `{colors.canvas}` (black) and `{colors.surface-alt}` (white); never mix additional background colors.
2. **Apply gradients to hero overlays only**: Use the four measured gradient patterns (verbatim) on hero imagery; do not create custom gradients.
3. **Button shape follows function**: Pill-shaped (`{rounded.full}`) for primary CTAs; sharp (`{rounded.xs}` or `{rounded.none}`) for secondary/outlined actions.
4. **Scale typography with viewport**: Display sizes grow from 44px (mobile) to 78px (1440px); body text remains 16px except at 1440px (17px).
5. **Maintain spacing proportions**: Section padding scales from `{spacing.lg}` (mobile) to `{spacing.band}` (extra-large); use the exact pixel values provided, not percentages.
6. **Opacity is the primary hover mechanic**: Interactive states shift opacity (0.72–0.85) or add accent color; never add shadows or blur.
7. **Monospace font is ui-monospace only**: For code or technical text; avoid system-ui sans-serif in code contexts.
8. **Z-index ranges**: Keep dropdown menus at 30–60; sticky elements at 100; never exceed 100 unless explicitly layering modals.
9. **Border is always 1px**: Use `{rounded.none}` for outlines; border-radius is never applied to strokes, only container edges.
10. **Test opacity stacking**: When combining opacity (e.g., 0.72 text on 0.62 overlay), verify final contrast meets WCAG AA for text.

## 10. Known Gaps

- **Interaction states not measured**: Extracted data includes `:hover`, `:focus`, and `:active` pseudo-classes, but explicit disabled, readonly, or loading states were not observed on the website and may not be fully specified.
- **No semantic status colors**: The site does not expose error (red), warning (yellow), or success (green) colors in its markup. No semantic ramp is available; use `{colors.accent}` for alerts or `{colors.muted}` for secondary feedback.
- **One unassigned accent color**: `{colors.accent-1}` (`#A78BFA`) has no measured interaction role and is described as decorative only; its canonical use (gradient overlays, non-interactive accents) was inferred from layout context.
- **No shadow elevation layer**: The extraction found no box-shadow values in the component data. All depth is achieved via color-blocking and gradients; if shadow-based elevation becomes necessary, it was not present in the measured site.
- **Single page analyzed**: Only the homepage (https://www.orbtrix.space/) was captured. Product pages, authentication surfaces, or dashboard interfaces (e.g., DISHA platform) were not visited and may have different styling.
- **Cross-origin stylesheet limitation**: Some CSS may be loaded from external domains and was not fully readable; component details in external libraries may be incomplete.
- **No animation timing data**: Transition durations, easing functions, and animation curves were not extracted; hover and interactive transforms (e.g., `translate()`, `scaleX()`) are present but without explicit timing specifications.
- **Focus ring styling unspecified**: Focus-visible state includes `outline: 2px solid var(--focus-ring)`, but the exact color value of `--focus-ring` was not resolved; assume it is a high-contrast outline (likely white or accent).
- **Breakpoint transition smoothness**: Exact behavior during responsive resizing (e.g., whether padding transitions smoothly or snaps) was not captured; assume snap-to-breakpoint at defined min-widths.
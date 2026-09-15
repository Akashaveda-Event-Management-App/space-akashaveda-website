---
version: 2.0.0
name: Akashaveda Orbtrix Cinematic Orbit Design System
description: A high-contrast, aerospace-grade design system replicating the Orbtrix.space aesthetic. Features an ultra-dark cinematic body canvas with violet accents and a signature high-contrast inverted white footer.
tokens:
  colors:
    dark:
      bg: "#000000"
      surface: "#08080A"
      surface-raised: "#121216"
      surface-hover: "rgba(255, 255, 255, 0.06)"
      text-primary: "#FFFFFF"
      text-muted: "#A3A3AE"
      accent: "#A78BFA"
      accent-mark: "#7C3AED"
      accent-soft: "#8B5CF6"
      accent-bright: "#C4B5FD"
      accent-deep: "#5B21B6"
      accent-wash: "rgba(124, 58, 237, 0.16)"
      border: "rgba(255, 255, 255, 0.12)"
      border-strong: "rgba(255, 255, 255, 0.24)"
      border-accent: "rgba(167, 139, 250, 0.40)"
      grid-line: "rgba(255, 255, 255, 0.05)"
    invert-footer:
      bg: "#FFFFFF"
      text-primary: "#0B0B0F"
      text-muted: "#5B5B66"
      link: "#33333C"
      link-hover: "#7C3AED"
      border: "rgba(11, 11, 15, 0.14)"
      accent-mark: "#7C3AED"
      button-border: "#0B0B0F"
  typography:
    font-sans: "'Google Sans Flex', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    font-mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    weights:
      light: 300
      regular: 400
      medium: 500
      semibold: 600
  radii:
    sm: "6px"
    md: "10px"
    lg: "14px"
    btn: "8px"
    pill: "9999px"
---

# Akashaveda Orbtrix Design System

Replication and translation of the **Orbtrix.space** design language for **Akashaveda Technologies**. Preserves 100% of Akashaveda's technical and brand content while adopting the exact aerospace visual hierarchy, color palette, typography, interactive states, and the signature high-contrast inverted white footer from the source website and provided screenshots.

---

## 1. Design Philosophy

- **Cinematic Deep Space Canvas**: Replaces previous navy/slate hues with absolute pitch-black (`#000000`) and near-black surfaces (`#08080A`), creating infinite contrast for typography and orbital graphics.
- **Precision Violet Accents**: Replaces electric cyan/blue with soft atmospheric violet (`#A78BFA`) and vibrant indicator violet (`#7C3AED`). Accents are restrained: micro-ticks, telemetry indicators, active borders, and mono tags.
- **Diamond Marker Micro-Syntax**: Characteristic 45°-rotated 5px–6px square ticks in `#7C3AED` marking lists, badges, and panel headers.
- **Signature Inverted White Footer**: Direct replication of Orbtrix's iconic footer architecture (as featured in the user screenshots):
  - Inverted pure-white canvas (`#FFFFFF`) with dark obsidian text (`#0B0B0F`)
  - Tracked-out uppercase mono badges in violet (`#7C3AED`)
  - Circular outline social pills with violet hover transition
  - Lower metadata grid containing `INCUBATED AT`, `REGISTERED OFFICE`, and `# MISSION_CONNECT` with clean bordered pill CTA button.

---

## 2. Color Palette & Token Hierarchy

### Dark Space Canvas (Main Body & Sections)
| Token | Hex / Value | Usage |
|---|---|---|
| `bg` | `#000000` | Global page canvas, section backgrounds |
| `surface` | `#08080A` | Standard card background, panel interiors |
| `surface-raised` | `#121216` | Elevated cards, dropdowns, telemetry wells |
| `surface-hover` | `rgba(255, 255, 255, 0.06)` | Row hover, interactive element highlights |
| `text-primary` | `#FFFFFF` | Display headlines, section titles, primary metrics |
| `text-muted` | `#A3A3AE` | Body copy, technical descriptions, secondary text |
| `accent` | `#A78BFA` | Section eyebrow labels, interactive highlights |
| `accent-mark` | `#7C3AED` | Diamond ticks, active indicator bars, primary CTA |
| `accent-soft` | `#8B5CF6` | Secondary violet glow / border transitions |
| `accent-wash` | `rgba(124, 58, 237, 0.14)`| Hover state fills on buttons and cards |
| `border` | `rgba(255, 255, 255, 0.12)`| Section dividers, quiet card perimeters |
| `border-strong` | `rgba(255, 255, 255, 0.24)`| Interactive outlines, buttons |
| `border-accent` | `rgba(167, 139, 250, 0.40)`| Card hover states, focused input outlines |

### Inverted High-Contrast Canvas (Footer)
| Token | Hex / Value | Usage |
|---|---|---|
| `ft-bg` | `#FFFFFF` | Footer main container background |
| `ft-text` | `#0B0B0F` | Footer headlines, brand name, office headings |
| `ft-muted` | `#5B5B66` | Footer descriptions, addresses, copyright text |
| `ft-link` | `#33333C` | Footer navigation items (hover: `#7C3AED`) |
| `ft-border` | `rgba(11, 11, 15, 0.14)` | Footer column and row dividing hairlines |
| `ft-accent` | `#7C3AED` | Mono micro-headers (`# MISSION_CONNECT`, `INCUBATED AT`) |
| `ft-cta-bg` | `#FFFFFF` | Bottom CTA button background (hover: `#7C3AED`) |
| `ft-cta-text` | `#0B0B0F` | Bottom CTA text (hover: `#FFFFFF`) |
| `ft-cta-border`| `#0B0B0F` | Bottom CTA solid border (hover: `#7C3AED`) |

---

## 3. Typography Hierarchy

Using `Google Sans Flex` as the primary sans-serif display font and `JetBrains Mono` for aerospace telemetry, labels, and micro-copy.

| Role | Font Family | Size | Weight | Tracking | Color |
|---|---|---|---|---|---|
| **Display Hero** | Google Sans Flex | 56px–80px | 500 | -0.04em | `#FFFFFF` |
| **Section Title** | Google Sans Flex | 32px–48px | 500 | -0.03em | `#FFFFFF` |
| **Card Title** | Google Sans Flex | 18px–22px | 500 | -0.02em | `#FFFFFF` |
| **Eyebrow / Badge** | JetBrains Mono | 11px–12px | 500 | +0.14em | `#A78BFA` |
| **Body Large** | Google Sans Flex | 16px–18px | 300 | +0.01em | `#A3A3AE` |
| **Body Regular** | Google Sans Flex | 14px–15px | 300 | 0 | `#A3A3AE` |
| **Mono Telemetry** | JetBrains Mono | 11px–13px | 400 | +0.05em | `#FFFFFF` / `#A3A3AE` |
| **Footer Micro** | JetBrains Mono | 10px–11px | 600 | +0.16em | `#7C3AED` |

---

## 4. Components

### A. Floating Navigation Bar
- Fixed pill pinned to top center with `max-w-[960px]`.
- Background: `#000000/80 backdrop-blur-xl border border-white/12`.
- Links: `#A3A3AE` transitioning to `#FFFFFF` on hover.
- Active Link Indicator: Slender 1px horizontal violet line (`#A78BFA`) beneath active item.
- Action Button: Clean pill button with `bg-white text-black font-medium hover:bg-[#F3F4F6]`.

### B. Cards & Aerospace Panels
- Background: `#08080A` with subtle 1px border `border-white/10`.
- Border Radius: `10px` (`var(--radius)`).
- Diamond Accent: `w-1.5 h-1.5 bg-[#7C3AED] rotate-45` accompanying section titles.
- Hover Effect: Border illuminates to `rgba(167, 139, 250, 0.40)` with a faint interior violet tint `rgba(124, 58, 237, 0.04)`.

### C. Buttons & Controls
- **Primary Dark CTA (`.cta-primary`)**:
  - Pill radius (`rounded-full`), height 50px, horizontal padding 26px.
  - Background `#000000`, border `border-[#A78BFA]/40`, text `#A78BFA`.
  - Hover: background `rgba(124, 58, 237, 0.14)`, border `border-[#A78BFA]`.
- **Secondary Dark CTA (`.cta-secondary`)**:
  - Pill radius, height 50px, horizontal padding 26px.
  - Transparent background, border `border-white/20`, text `#FFFFFF`.
  - Hover: border `#A78BFA`, text `#A78BFA`.
- **Inverted Footer CTA (`.ft-cta`)**:
  - Border radius 8px (`var(--radius-btn)`), padding `11px 20px`.
  - Solid 1px black border `border-[#0B0B0F]`, white background, black text.
  - Hover: background `#7C3AED`, border `#7C3AED`, text `#FFFFFF`. Arrow slides `translate-x-1`.

### D. The Signature Inverted Footer (Matching Provided Screenshot)
```html
<!-- White High-Contrast Footer Architecture -->
<footer className="w-full bg-[#FFFFFF] text-[#5B5B66] antialiased">
  <!-- Top Section: Brand + Navigation Columns -->
  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-6 gap-12">
    <!-- Brand Col -->
    <div className="md:col-span-2">
      <Logo in dark ink />
      <p className="mt-4 text-[13px] font-light text-[#5B5B66] leading-relaxed">
        {Akashaveda Mission Software Tagline}
      </p>
      <!-- Circular Social Pills -->
      <div className="flex items-center gap-2.5 mt-6">
        <a className="w-9 h-9 rounded-full border border-[rgba(11,11,15,0.14)] flex items-center justify-center text-[#0B0B0F] hover:border-[#7C3AED] hover:text-[#7C3AED]" />
      </div>
    </div>
    
    <!-- Nav Columns (DISHA / SERVICES, SOLUTIONS / PRODUCTS, COMPANY, CONTACT) -->
    <div className="space-y-3">
      <h4 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[#0B0B0F]">{Heading}</h4>
      <ul className="space-y-2.5 text-[13px] font-light text-[#33333C]">...</ul>
    </div>
  </div>

  <!-- Divider -->
  <div className="border-t border-[rgba(11,11,15,0.12)] max-w-7xl mx-auto" />

  <!-- Bottom Section (INCUBATED AT | REGISTERED OFFICE | # MISSION_CONNECT) -->
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-[#7C3AED]">INCUBATED AT</span>
      <p className="mt-2 text-[13px] font-medium text-[#0B0B0F]">Foundation for Science Innovation and Development (SID), Indian Institute of Science / Akashaveda Labs</p>
    </div>
    <div>
      <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-[#7C3AED]">REGISTERED OFFICE</span>
      <address className="mt-2 text-[13px] font-light not-italic text-[#5B5B66]">Bengaluru, Karnataka, India</address>
    </div>
    <div>
      <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-[#7C3AED]"># MISSION_CONNECT</span>
      <p className="mt-2 text-[15px] font-medium text-[#0B0B0F]">Building or flying a mission that needs autonomy?</p>
      <a href="#contact" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 border border-[#0B0B0F] rounded-lg text-sm font-medium text-[#0B0B0F] hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white transition-all">
        Get in touch &rarr;
      </a>
    </div>
  </div>

  <!-- Copyright & Policies -->
  <div className="border-t border-[rgba(11,11,15,0.08)] py-6">
    <div className="max-w-7xl mx-auto px-6 flex justify-between text-xs text-[#5B5B66]">
      <p>&copy; 2026 Akashaveda Technologies. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## 5. Summary of Edits to Execute

1. **Font & Meta (`index.html`)**: Add `Google Sans Flex` font import and set theme color to `#000000`.
2. **Tailwind Config (`tailwind.config.js`)**: Add `Google Sans Flex` to `font-sans`, update `space` and `violet` color tokens to exact Orbtrix values.
3. **Global Styles (`src/index.css`)**: Add Orbtrix CSS variables (`--bg: #000000`, `--surface: #08080A`, `--accent: #A78BFA`, `--accent-mark: #7C3AED`), `.card`, `.cta`, `.ft-*` utility classes.
4. **Layout & Background (`src/App.tsx`, `SpaceBackground.tsx`)**: Align background to pitch black `#000000` with subtle monochrome/violet stars.
5. **Navigation (`src/Navigation.tsx`)**: Refactor to Orbtrix minimalist floating pill with violet active underlines and clean pills.
6. **Hero (`src/Hero.tsx`)**: Redesign with Google Sans Flex display typography, refined violet accent text, Orbtrix-style CTA pills.
7. **Stats (`src/Stats.tsx`)**: Reformat to technical aerospace tabular metrics with subtle border cards and violet accents.
8. **Services & Features (`src/ServicesSection.tsx`, `src/Features.tsx`)**: Convert to Orbtrix 10px-radius flat dark panels with diamond markers and hairline borders.
9. **Contact (`src/Contact.tsx`)**: Clean dark form with 10px inputs and violet focus rings.
10. **Footer (`src/Footer.tsx`)**: Complete transformation to the signature high-contrast inverted white footer directly replicating the screenshot!

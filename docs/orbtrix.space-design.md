---
version: alpha
name: Orbtrix Dark Orbit
description: A cinematic, high-contrast space-tech system with restrained accents and minimal chrome.
colors:
  primary: "#FFFFFF"
  secondary: "#A78BFA"
  tertiary: "#FFFFFF61"
  neutral: "#000000"
  surface: "#0A0A0A"
  on-surface: "#FFFFFF"
  error: "#FF5A5F"
  border-subtle: "#FFFFFF24"
  border-strong: "#FFFFFF61"
typography:
  headline-display:
    fontFamily: "Google Sans Flex"
    fontSize: "95px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-1.9px"
  headline-lg:
    fontFamily: "Google Sans Flex"
    fontSize: "67px"
    fontWeight: 400
    lineHeight: 1.19
    letterSpacing: "-1.34px"
  headline-md:
    fontFamily: "Google Sans Flex"
    fontSize: "47px"
    fontWeight: 400
    lineHeight: 1.19
    letterSpacing: "-0.93px"
  headline-sm:
    fontFamily: "Google Sans Flex"
    fontSize: "33px"
    fontWeight: 400
    lineHeight: 1.21
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Google Sans Flex"
    fontSize: "23px"
    fontWeight: 300
    lineHeight: 1.63
    letterSpacing: "0.19px"
  body-md:
    fontFamily: "Google Sans Flex"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "0.1px"
  body-sm:
    fontFamily: "Google Sans Flex"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Google Sans Flex"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  label-md:
    fontFamily: "Google Sans Flex"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Google Sans Flex"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
  nav-md:
    fontFamily: "Google Sans Flex"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0px"
  nav-sm:
    fontFamily: "Google Sans Flex"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 8px
  md: 10px
  lg: 18px
  xl: 26px
  full: 9999px
spacing:
  xs: 10px
  sm: 18px
  md: 32px
  lg: 42px
  xl: 58px
components:
  button-primary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "18px 26px"
    height: "50px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "18px 26px"
    height: "50px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "37px"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "18px 26px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "10px 18px"
---

# Orbtrix Dark Orbit

## Overview
Orbtrix presents as a cinematic, aerospace-focused brand: precise, technical, and quietly dramatic. The UI leans into a dark, immersive canvas with bright white typography and subtle chrome, creating a premium but restrained tone for a sophisticated B2B audience. Spacious composition and large-scale headlines communicate confidence and depth rather than density or ornament.

## Colors
- **Primary (#FFFFFF):** Pure white used for key typography, logo treatment, and the strongest interactive contrast on the black field.
- **Secondary (#A78BFA):** A soft violet accent that can be used sparingly for emphasis, highlights, and strategic attention cues without breaking the dark mood.
- **Neutral (#000000):** The dominant background black, establishing the space-like environment and allowing the content to feel luminous.
- **Surface (#0A0A0A):** A near-black layer for elevated panels or secondary surfaces when separation is needed without visible contrast shifts.
- **On-surface (#FFFFFF):** The standard readable foreground color for text and icons across dark surfaces.
- **Tertiary (#FFFFFF61):** A translucent white used for subtle borders, dividers, and low-emphasis outlines on buttons and cards.
- **Border-subtle (#FFFFFF24):** Very faint outline color for cards and containers where the system should remain almost flat.
- **Border-strong (#FFFFFF61):** Stronger translucent white used for interactive outlines and button borders.
- **Error (#FF5A5F):** Reserved for validation or destructive states; it is not prominent in the source but provides a clear alert channel.

## Typography
The system uses Google Sans Flex throughout, which keeps the brand modern, geometric, and highly legible while still feeling polished. Headlines are large, light-to-medium weight, and tightly tracked, with the display level carrying the most weight and letterform compression for cinematic impact. Body text is notably generous in size and line height, reinforcing the premium editorial feel. Labels and navigation stay compact and semibold, with minimal uppercase treatment visible; the source relies more on spacing and contrast than on aggressive casing or decorative emphasis.

## Layout & Spacing
The layout is expansive and hero-led, with content anchored to a left-aligned text column over a full-bleed dark background. Vertical rhythm is loose and confident: the extracted spacing scale clusters around 10px, 18px, 32px, 42px, and 58px, which supports large visual gaps between navigation, headline, body copy, and CTA groups. Buttons and controls sit with comfortable breathing room, and card padding is substantial rather than compact. Use wide containers, generous top padding, and asymmetric hero composition to preserve the sense of open space.

## Elevation & Depth
The design is mostly flat, with depth created through tonal contrast instead of shadows. Borders are thin and translucent, while surfaces remain nearly black so that hierarchy comes from text size, opacity, and occasional accent glow rather than raised panels. This makes the experience feel technically precise and atmospheric, which suits a space-operations narrative. Avoid heavy shadows; if separation is needed, use subtle borders or slightly lighter surface tones.

## Shapes
The shape language is rounded but disciplined. Interactive elements use an elongated pill radius, while cards use a modest 10px corner radius for a more architectural feel. The overall impression is smooth and engineered rather than playful. Keep edges soft enough for modernity, but avoid overly bubbly geometry or extreme radius changes across the interface.

## Components
Buttons are bordered, dark-on-dark pills with white text and translucent white outlines. `button-primary` and `button-secondary` are visually similar in the source: both use black backgrounds, 1px borders, 26px radius, and 18px 26px padding, with a minimum height around 50px. Primary actions should feel slightly more assertive through placement or icon treatment rather than color changes, since the system is intentionally restrained. `button-tertiary` should remain text-only or minimally styled, used for links and low-emphasis actions.

Cards use a near-black background, faint border, and 10px radius, with generous internal padding. They should feel like quiet containers rather than elevated tiles. Inputs should follow the same dark outlined language as buttons, using pill or rounded-rectangle proportions, white text, and subtle borders for clarity in the dark environment. Chips and tags should be compact, rounded fully or near-fully, and low-contrast, with emphasis driven by spacing and typography rather than fill color. Navigation items should remain lightweight and unobtrusive, with small carets or disclosure indicators where needed.

## Do's and Don'ts
- Do keep the UI predominantly black with white foreground text for maximum contrast and brand consistency.
- Do use large, airy headlines and avoid compressed, dense information blocks.
- Do prefer translucent borders over shadows for separation and hierarchy.
- Do keep buttons pill-shaped with generous horizontal padding and modest heights.
- Don't introduce bright, saturated background fills that compete with the cinematic dark canvas.
- Don't use heavy drop shadows, bevels, or glossy effects.
- Don't overuse the violet accent; reserve it for selective emphasis only.
- Don't switch to playful rounded forms or chunky typography that breaks the aerospace tone.
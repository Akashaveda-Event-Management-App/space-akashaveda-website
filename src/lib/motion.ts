import type { Transition, Variants } from 'framer-motion';

export const ease = {
  out: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const spring = {
  snappy: { type: 'spring' as const, stiffness: 500, damping: 35 },
  bouncy: { type: 'spring' as const, stiffness: 400, damping: 17 },
  gentle: { type: 'spring' as const, stiffness: 200, damping: 25 },
  tab:    { type: 'spring' as const, stiffness: 500, damping: 30 },
};

export const transition: Record<string, Transition> = {
  fast:   { duration: 0.2,  ease: ease.out },
  base:   { duration: 0.35, ease: ease.out },
  slow:   { duration: 0.5,  ease: ease.out },
  smooth: { duration: 0.6,  ease: ease.smooth },
};

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: transition.base },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: transition.base },
};

export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: transition.base },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0,  transition: transition.base },
};

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0,  transition: transition.base },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren, delayChildren } },
});

export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: ease.out } },
};

export const viewport = { once: true, margin: '-56px 0px' } as const;

// Clip-path wipe reveal — for h2 headings (dramatic bottom-to-top slide out)
export const clipReveal: Variants = {
  hidden:  { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: { clipPath: 'inset(0% 0 0 0)',   opacity: 1, transition: { duration: 0.65, ease: ease.smooth } },
};

// Blur fade up — for body/paragraph text
export const blurFadeUp: Variants = {
  hidden:  { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.55, ease: ease.out } },
};

// Slide up big — for large display headings
export const slideUpBig: Variants = {
  hidden:  { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.75, ease: ease.smooth } },
};

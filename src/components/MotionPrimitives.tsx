import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ease, spring as springs, viewport } from '../lib/motion';

/* ── 1. Motion Fade In ───────────────────────────────── */
interface FadeInProps extends HTMLMotionProps<'div'> {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  viewportOnce?: boolean;
}

export const MotionFadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 24,
  viewportOnce = true,
  className = '',
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':    return { y: distance, x: 0 };
      case 'down':  return { y: -distance, x: 0 };
      case 'left':  return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      case 'none':  return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, margin: viewport.margin }}
      transition={{ duration, delay, ease: ease.out }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ── 2. Stagger Container ────────────────────────────── */
interface StaggerProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number;
  delayChildren?: number;
  viewportOnce?: boolean;
}

export const MotionStagger: React.FC<StaggerProps> = ({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  viewportOnce = true,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerItem: React.FC<HTMLMotionProps<'div'>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: ease.out },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ── 3. Interactive Motion Card ──────────────────────── */
interface MotionCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode;
  hoverY?: number;
  hoverScale?: number;
  glow?: boolean;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  hoverY = -4,
  hoverScale = 1.01,
  glow = false,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      whileHover={{
        y: hoverY,
        scale: hoverScale,
        transition: { duration: 0.25, ease: ease.out },
      }}
      whileTap={{ scale: 0.99 }}
      className={`relative group ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-slate-700/20 via-slate-800/15 to-slate-700/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
};

/* ── 4. Spring Motion Button ─────────────────────────── */
export const MotionButton: React.FC<HTMLMotionProps<'button'>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={springs.bouncy}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/* ── 5. Motion Number / Counter ──────────────────────── */
interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const MotionCounter: React.FC<CounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const duration = 1500; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(easeProgress * value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

/* ── 6. Motion Ambient Floating Orbs ─────────────────── */
export const MotionFloatingOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <motion.div
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-80 h-80 bg-[#0B1528]/70 rounded-full blur-[70px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 -right-32 w-96 h-96 bg-[#0E1B33]/60 rounded-full blur-[80px]"
      />
    </div>
  );
};

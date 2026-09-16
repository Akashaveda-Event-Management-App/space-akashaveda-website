import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSpaceEffects from './HeroSpaceEffects';
import { HeroConciseCard } from './HeroCards';
import Card3D from './Card3D';

export default function Hero() {
  const [pulse, setPulse] = useState(99.84);

  // Live signal telemetry simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setPulse((p) => +Math.min(100, Math.max(98, p + (Math.random() * 0.2 - 0.1))).toFixed(2));
    }, 2500);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero — AI-Powered Satellite Operations"
      className="relative min-h-screen w-full overflow-hidden bg-[#000000] text-white flex items-center"
    >
      {/* ── Background: Strictly High-Definition Space Videos (/bg1.mp4 & /bg2.mp4) ── */}
      <HeroSpaceEffects />

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Left Column: Headline, Subcopy & CTAs ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1"
          >
            {/* Eyebrow badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#080C16]/90 backdrop-blur-xl mb-6 max-w-full shadow-lg"
            >
              <span className="w-1.5 h-1.5 bg-[#47B2E4] rotate-45 flex-shrink-0 shadow-[0_0_8px_#47B2E4]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#47B2E4] truncate font-semibold">
                Cloud-Native Mission Control &amp; Constellation Autonomy
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#7CCCED] ml-0.5 flex-shrink-0" />
            </motion.div>

            {/* Headline */}
            <h1 className="text-[2.6rem] xs:text-[3.1rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-medium leading-[1.05] tracking-[-0.03em] mb-5 sm:mb-6 text-white font-display">
              Autonomous Mission<br />
              Control for{' '}
              <span className="text-[#47B2E4] drop-shadow-[0_0_24px_rgba(71,178,228,0.35)]">
                Modern Constellations.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-[15px] sm:text-base text-[#94A3B8] font-light max-w-xl mb-8 sm:mb-9 leading-[1.75]">
              End-to-end mission operations software with autonomous pass scheduling, AI telemetry anomaly detection, and unified ground station network orchestration.
            </p>

            {/* Action Buttons with akashaveda.com-design.md styling */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta cta-primary"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta cta-secondary"
              >
                <span>Request Mission Demo</span>
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] shadow-[0_0_6px_#47B2E4]" />
                <span>Sub-10ms Ingestion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                <span>Zero-Touch Pass Autonomy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CCCED] shadow-[0_0_6px_#7CCCED]" />
                <span>99.99% Cloud SLA</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Single Concise 3D Mission Control Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 w-full order-1 lg:order-2 flex justify-center"
          >
            <Card3D
              maxTilt={7}
              glareColor="rgba(71, 178, 228, 0.25)"
              className="w-full max-w-md rounded-2xl bg-[#080C16]/90 backdrop-blur-2xl border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden"
            >
              <HeroConciseCard pulse={pulse} />
            </Card3D>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
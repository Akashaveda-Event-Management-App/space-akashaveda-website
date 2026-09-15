import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionFloatingOrbs, MotionCounter } from './MotionPrimitives';
import { Orbit3DGlobe } from './Space3DElements';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const globeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgGlowY = useTransform(sectionProgress, [0, 1], ['-12%', '12%']);

  useEffect(() => {
    const el = globeRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, { y: -30, scrollTrigger: { trigger: el, scrub: 1 } });
    });
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 10,    prefix: '',  suffix: 'x',  decimals: 0, label: 'Constellation Scale per Operator' },
    { value: 10,    prefix: '<', suffix: 'ms', decimals: 0, label: 'Real-time Telemetry Ingestion' },
    { value: 24,    prefix: '',  suffix: '/7', decimals: 0, label: 'Automated Pass Execution' },
    { value: 99.99, prefix: '',  suffix: '%',  decimals: 2, label: 'Cloud Infrastructure SLA' },
  ];

  const pillars = [
    {
      tag: 'Why Autonomy & ML?',
      title: 'Breaking the Scalability Bottleneck',
      body: 'Traditional space operations rely on manual spreadsheet schedules, siloed ground stations, and human pass operators. As constellations scale to dozens of satellites, manual operations become physically impossible.',
    },
    {
      tag: 'Unified Architecture',
      title: 'API-Driven Mission Control',
      body: 'Consolidate telemetry ingestion, pass scheduling, ground station networking, and anomaly triaging into a single modern cloud-native workspace.',
    },
    {
      tag: 'Predictive Intelligence',
      title: 'Continuous Telemetry Monitoring',
      body: 'Statistical time-series models detect thermal runaways, battery degradation, and attitude control deviations days before subsystem failure.',
    },
    {
      tag: 'Constellation Operations',
      title: 'Dynamic Contact & Pass Scheduling',
      body: 'Resolve orbital mechanics conflicts, antenna contact windows, and downlinking queues autonomously across heterogeneous global ground networks.',
    },
  ];

  return (
    <section
      ref={sectionRef as any}
      id="about"
      aria-labelledby="about-heading"
      className="relative py-16 sm:py-24 bg-[#000000] border-t border-white/10 overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <MotionFloatingOrbs />

      {/* Cybernetic Dot Matrix Pattern Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:28px_28px] opacity-[0.03]" />
        <motion.div style={{ y: bgGlowY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_80%,rgba(124,58,237,0.06),transparent)]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + Globe */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="diamond-tick" />
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#A78BFA]">About Akashaveda</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
            <div className="lg:col-span-7">
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight mb-4 sm:mb-6"
              >
                Modernizing Mission{' '}
                <span className="text-[#A78BFA]">
                  Control for the Constellation Era
                </span>
              </h2>
              <p className="text-[#A3A3AE] text-base sm:text-lg font-light leading-[1.8] max-w-xl">
                As satellite constellations grow in scale and operational complexity, human-in-the-loop pass operations become a bottleneck. Akashaveda provides scalable, cloud-native mission autonomy and telemetry intelligence built for global satellite operators.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div ref={globeRef} className="relative p-2 sm:p-4 rounded-[12px] bg-[#08080A] border border-white/10 backdrop-blur-md max-w-full overflow-hidden flex items-center justify-center shadow-xl">
                <Orbit3DGlobe size={300} className="w-full max-w-[300px] sm:max-w-[340px]" />
                <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-center">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#A78BFA] bg-[#A78BFA]/10 px-3 py-1 rounded-full border border-[#A78BFA]/20">
                    Live LEO Orbit Simulation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-[10px] overflow-hidden mb-8 sm:mb-12 bg-[#08080A] border border-white/10 shadow-sm divide-x divide-y sm:divide-y-0 divide-white/10"
        >
          {stats.map((st, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="px-4 sm:px-8 py-6 sm:py-8 transition-colors duration-200 hover:bg-[#121216] cursor-default group"
            >
              <MotionCounter
                value={st.value}
                prefix={st.prefix}
                suffix={st.suffix}
                decimals={st.decimals}
                className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-1 block group-hover:text-[#A78BFA] transition-colors"
              />
              <div className="text-[11px] sm:text-[12px] text-[#A3A3AE] uppercase tracking-widest font-mono leading-tight group-hover:text-white transition-colors">
                {st.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6"
        >
          {pillars.map(({ tag, title, body }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative bg-[#08080A] rounded-[10px] p-6 sm:p-8 group hover:bg-[#121216] transition-all duration-300 border border-white/10 hover:border-[#A78BFA]/40 shadow-sm overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#A78BFA] group-hover:w-full transition-all duration-500" />

              <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#A78BFA] mb-3 flex items-center gap-2">
                <span className="diamond-tick" />
                {tag}
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2.5 leading-snug tracking-tight group-hover:text-[#A78BFA] transition-colors">
                {title}
              </h3>
              <p className="text-[#A3A3AE] text-xs sm:text-sm font-light leading-[1.8] group-hover:text-white/90 transition-colors">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <motion.div
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="relative overflow-hidden bg-[#08080A] rounded-[10px] p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 group hover:bg-[#121216] transition-all duration-300 border border-white/10 hover:border-[#A78BFA]/40 shadow-sm"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#A78BFA] group-hover:border-[#A78BFA]/40 transition-all duration-300">
              <svg className="w-5 h-5 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A78BFA] mb-1.5 flex items-center gap-1.5">
                <span className="diamond-tick" />
                Vision
              </div>
              <p className="text-white/95 text-sm sm:text-base font-light leading-[1.75] max-w-3xl">
                Leading the technological revolution that will define the next generation of autonomous
                satellite operations and unlock unprecedented operational efficiency.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

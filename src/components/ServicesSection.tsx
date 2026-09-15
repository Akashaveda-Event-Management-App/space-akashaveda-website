import { useRef, useState, useEffect } from 'react';
import {
  Compass,
  Globe,
  Cpu,
  Crosshair,
  Monitor,
  FileText,
  Terminal,
  Activity,
  ShieldCheck,
  Radio,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionFadeIn, MotionFloatingOrbs } from './MotionPrimitives';

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgGlowY = useTransform(sectionProgress, [0, 1], ['-10%', '10%']);
  const dotMatrixY = useTransform(sectionProgress, [0, 1], ['-6%', '6%']);

  // 10 Space Mission Engineering Capabilities
  const services = [
    {
      num: '01',
      icon: Compass,
      category: 'MISSION ARCHITECTURE',
      title: 'Satellite Mission Design &',
      accent: 'Conceptualization',
      desc: 'Comprehensive orbital analysis, delta-V budgeting, launch vehicle compatibility trade-offs, and mission lifetime assessments tailored for orbital payloads.',
      deliverables: [
        'Mission Architecture & SRD',
        'Delta-V & Propellant Sizing',
        'IADC Deorbit Compliance',
      ],
    },
    {
      num: '02',
      icon: Globe,
      category: 'ORBITAL MECHANICS',
      title: 'Orbit & Constellation',
      accent: 'Design & Realization',
      desc: 'Walker Delta and Star constellation geometries, ground-track revisit optimization, inter-satellite link (ISL) topology, and autonomous station-keeping.',
      deliverables: [
        'Walker Constellation Optimization',
        'Ground Pass Contact Maximization',
        'ISL Routing & Coverage GDOP',
      ],
    },
    {
      num: '03',
      icon: Cpu,
      category: 'HARDWARE & BUS',
      title: 'Sub-System',
      accent: 'Conceptualization',
      desc: 'Detailed subsystem sizing for EPS power, battery DoD, transient thermal modeling (TCS), RF link budgets, and COTS/rad-hard hardware trade-offs.',
      deliverables: [
        'EPS & Battery DoD Sizing',
        'Transient Thermal Modeling',
        'TT&C RF Link Budgets',
      ],
    },
    {
      num: '04',
      icon: Crosshair,
      category: 'GNC / AERO',
      title: 'Onboard Orbit, Attitude',
      accent: '& Control (AOCS / ADCS)',
      desc: 'Non-linear Extended Kalman Filtering (EKF), B-dot detumbling, sun-pointing, arcsecond payload target tracking, and momentum wheel desaturation.',
      deliverables: [
        'EKF Attitude Determination',
        'Arcsecond Payload Tracking',
        'Hardware-in-the-Loop (HIL) Testbed',
      ],
    },
    {
      num: '05',
      icon: Monitor,
      category: 'GROUND INFRASTRUCTURE',
      title: 'Satellite Control Center (SCC)',
      accent: 'Design & Operations',
      desc: 'Turnkey physical and cloud mission control center infrastructure, operator HUD video walls, low-jitter voice loops, and 24/7/365 flight operations.',
      deliverables: [
        'Operator Consoles & Video Walls',
        'Voice Loop & Real-Time Streaming',
        '24/7/365 Flight Operations',
      ],
    },
    {
      num: '06',
      icon: FileText,
      category: 'FLIGHT PROCEDURES',
      title: 'Mission Operations System',
      accent: '(MOS) Design & Ops',
      desc: 'Flight Operations Manuals (FOM), Fault Detection, Isolation & Recovery (FDIR) operational flowcharts, LEOP commissioning, and operator simulations.',
      deliverables: [
        'Flight Operations Manual (FOM)',
        'FDIR Contingency Flowcharts',
        'LEOP Commissioning & Drills',
      ],
    },
    {
      num: '07',
      icon: Terminal,
      category: 'COMMAND & CONTROL',
      title: 'Mission Control System',
      accent: '(MCS) Design & Ops',
      desc: 'Deployment and integration of VYUH-MCS for high-rate telemetry parsing, XTCE databases, automated command interlocks, and pass automation.',
      deliverables: [
        'VYUH-MCS C2 Platform Deployment',
        'XTCE / SEDS Telemetry Schemas',
        'Automated Command Stacking',
      ],
    },
    {
      num: '08',
      icon: Activity,
      category: 'ORBIT DETERMINATION',
      title: 'Flight Dynamics System',
      accent: '(FDS) Design & Ops',
      desc: 'Precise Orbit Determination (POD), ephemeris generation, station-keeping maneuvers, and automated conjunction assessment with CHAKRA-SSA.',
      deliverables: [
        'Precise Orbit Determination (POD)',
        'Station-Keeping Maneuver Plans',
        'CHAKRA-SSA Conjunction Triage',
      ],
    },
    {
      num: '09',
      icon: ShieldCheck,
      category: 'CYBERSECURITY',
      title: 'Computer Network Design &',
      accent: 'SCC Realisation',
      desc: 'Zero-trust network architecture, low-latency SD-WAN antenna bridges, Hardware Security Modules (HSMs) for command signing, and AES-256 archives.',
      deliverables: [
        'Zero-Trust Mission Network',
        'HSM for Uplink Command Signing',
        'Low-Latency SD-WAN GS Bridges',
      ],
    },
    {
      num: '10',
      icon: Radio,
      category: 'RF GROUND SEGMENT',
      title: 'TT&C & Payload (PL)',
      accent: 'Ground Stations',
      desc: 'Complete RF ground segment engineering for UHF, S, X, and Ka-band dishes with SDR basebands and automated 2+ Gbps high-rate payload downlinks.',
      deliverables: [
        'UHF / S / X / Ka-Band Dish Sizing',
        'Software-Defined Radio Basebands',
        '2+ Gbps High-Rate Downlinks',
      ],
    },
  ];

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollLeft } = el;
      const cardWidth = 380;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(services.length - 1, index)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [services.length]);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 390;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    scrollToCard(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToCard(Math.min(services.length - 1, activeIndex + 1));
  };

  return (
    <section
      ref={sectionRef as any}
      id="services"
      className="relative py-16 sm:py-24 bg-[#000000] border-t border-white/10 text-white scroll-mt-24 sm:scroll-mt-28 overflow-hidden"
    >
      <MotionFloatingOrbs />

      {/* Background Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <motion.div style={{ y: dotMatrixY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-[0.03]" />
        </motion.div>
        <motion.div style={{ y: bgGlowY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_30%,rgba(124,58,237,0.06),transparent)]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <MotionFadeIn direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="diamond-tick" />
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#A78BFA]">Our Services</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Built for Modern{' '}
              <span className="text-[#A78BFA]">
                Space Operations
              </span>
            </h2>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-[#A3A3AE]">
              <span className="text-white font-medium">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(services.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous service"
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] border border-white/10 flex items-center justify-center transition-all duration-200 active:scale-95 ${
                  activeIndex === 0
                    ? 'opacity-35 cursor-not-allowed bg-white/[0.02] text-[#A3A3AE]'
                    : 'bg-[#08080A] hover:bg-[#A78BFA]/10 hover:border-[#A78BFA]/40 text-white shadow-sm'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === services.length - 1}
                aria-label="Next service"
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] border border-white/10 flex items-center justify-center transition-all duration-200 active:scale-95 ${
                  activeIndex === services.length - 1
                    ? 'opacity-35 cursor-not-allowed bg-white/[0.02] text-[#A3A3AE]'
                    : 'bg-[#08080A] hover:bg-[#A78BFA]/10 hover:border-[#A78BFA]/40 text-white shadow-sm'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </MotionFadeIn>

        {/* ── Horizontal Scrollable Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
          >
            {services.map((svc, i) => {
              const SvcIcon = svc.icon;
              const isCurrent = i === activeIndex;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`
                    flex-shrink-0 w-[310px] sm:w-[360px] lg:w-[390px] snap-start
                    rounded-[10px] p-6 sm:p-8 flex flex-col justify-between
                    cursor-default relative group overflow-hidden
                    bg-[#08080A] border transition-all duration-300
                    min-h-[460px] sm:min-h-[490px]
                    ${
                      isCurrent
                        ? 'border-[#A78BFA]/40 shadow-sm'
                        : 'border-white/10 hover:border-[#A78BFA]/40 hover:bg-[#0B0B0E]'
                    }
                  `}
                >
                  {/* Top Subtle Accent Line */}
                  <div
                    className={`absolute top-0 left-0 h-[2px] bg-[#A78BFA] transition-all duration-500 ${
                      isCurrent ? 'w-full' : 'w-10 group-hover:w-full'
                    }`}
                  />

                  {/* Card Header: Icon Pod + Category & Stage Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#A78BFA] group-hover:scale-105 group-hover:border-[#A78BFA]/40 transition-all duration-300">
                        <SvcIcon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#A78BFA] block font-medium">
                          {svc.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#A3A3AE]/70 uppercase tracking-wider">
                          PHASE {svc.num}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10 text-white/50">
                      #{svc.num}
                    </span>
                  </div>

                  {/* Middle Content: Title + Accent + Description */}
                  <div className="my-auto py-2">
                    <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug mb-1 group-hover:text-[#A78BFA] transition-colors">
                      {svc.title}
                    </h3>
                    <span className="text-base sm:text-lg font-medium text-[#A78BFA] tracking-tight block mb-3">
                      {svc.accent}
                    </span>
                    <p className="text-[#A3A3AE] text-xs sm:text-sm font-light leading-relaxed group-hover:text-white/90 transition-colors">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Key Technical Deliverables Chips */}
                  <div className="pt-4 border-t border-white/10 space-y-2 mt-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#A3A3AE] mb-1.5 flex items-center gap-1.5">
                      <span className="diamond-tick" />
                      Key Technical Deliverables
                    </div>
                    {svc.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2.5 text-[11px] font-mono text-[#A3A3AE] bg-white/[0.02] border border-white/8 hover:border-[#A78BFA]/30 hover:text-white rounded-[6px] px-3 py-2 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#A78BFA] flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Interactive Progress Bar & Dots ── */}
        <div className="flex items-center justify-center gap-2 mt-3 mb-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 bg-[#A78BFA] shadow-[0_0_10px_rgba(167,139,250,0.6)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* ── Footer Subtext & Direct Action ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
          <p className="text-xs text-[#A3A3AE] font-mono">
            SWIPE OR USE ARROWS TO EXPLORE COMPLETE CAPABILITIES
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#A78BFA] hover:text-white transition-colors"
          >
            CUSTOM MISSION REQUIREMENTS
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}


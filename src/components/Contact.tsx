import { useState, useRef } from 'react';
import { MapPin, Send, Clock, ShieldCheck, CheckCircle2, Terminal, Satellite } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';
import Card3D from './Card3D';

const MISSION_CATEGORIES = [
  { id: 'vyuh', label: 'Fleet C2 (VYUH)', desc: 'Mission control & pass autonomy' },
  { id: 'chakra', label: 'Space Safety (CHAKRA)', desc: 'Conjunction & debris avoidance' },
  { id: 'ground', label: 'Ground Network GSaaS', desc: 'Antenna & teleport integration' },
  { id: 'flight', label: 'AOCS & Flight Software', desc: 'Propulsion & attitude control' },
];

const FLEET_SIZES = [
  '1–3 Sats',
  '4–24 Sats',
  '25+ Sats',
  'Ground Network',
];

export default function Contact() {
  const [selectedCategory, setSelectedCategory] = useState('vyuh');
  const [selectedFleet, setSelectedFleet] = useState('1–3 Sats');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // Strict TypeScript ref and delayed scroll detection
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputCls =
    'w-full bg-black/40 border border-white/10 focus:border-[#47B2E4] focus:bg-black/60 rounded-xl px-4 py-3 text-sm text-white placeholder-[#64748B] focus:outline-none transition-all duration-300 shadow-inner';
  const labelCls = 'block text-[10px] font-mono uppercase tracking-[0.1em] text-[#94A3B8] mb-2 flex items-center gap-2';

  // "Roll Paper" Unfurl Animation
  const unrollVariants: Variants = {
    hidden: { 
      clipPath: "inset(0% 0% 100% 0%)", 
      rotateX: -15, 
      transformOrigin: "top",
      y: -20,
      opacity: 0
    },
    visible: { 
      clipPath: "inset(-20% -20% -20% -20%)", // Negative inset prevents cutting off the drop shadows
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Smooth deceleration
      }
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#020408] text-white overflow-hidden scroll-mt-20 selection:bg-[#47B2E4]/30 selection:text-white"
    >
      {/* ── Minimal Background Grid & Glow ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/3 right-0 w-[800px] h-[600px] bg-[#47B2E4]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Header ── */}
        <div className="mb-12 sm:mb-16 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#47B2E4]/10 border border-[#47B2E4]/20 text-[10px] font-mono tracking-widest uppercase text-[#47B2E4] mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] animate-pulse shadow-[0_0_8px_#47B2E4]" />
            SECURE MISSION UPLINK // COMMS CH-01
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-end w-full">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] font-display">
                Orchestrate Your <br />
                <span className="text-[#47B2E4] drop-shadow-[0_0_24px_rgba(71,178,228,0.35)]">
                  Satellite Fleet.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold backdrop-blur-md">
                <Clock className="w-3.5 h-3.5" />
                FLIGHT DESK ONLINE · RESPONSE &lt; 24H
              </span>
            </div>
          </div>
        </div>

        {/* ── Unrolling Content Container ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={unrollVariants}
          className="relative"
        >
          {/* Glowing scanner line at the bottom of the unroll (waits for scroll) */}
          <motion.div 
            initial={{ top: "0%", opacity: 1 }}
            animate={isInView ? { top: "100%", opacity: 0 } : { top: "0%", opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute left-0 right-0 h-1 bg-[#47B2E4] blur-[2px] z-50 shadow-[0_0_20px_#47B2E4]"
            style={{ pointerEvents: 'none' }}
          />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* Left: Unrolling Dispatch Form (7 Cols) */}
            <div className="lg:col-span-7">
              <Card3D maxTilt={2} glareColor="rgba(71, 178, 228, 0.1)">
                <div className="rounded-3xl bg-gradient-to-b from-[#0A0D14] to-black/80 border border-white/10 p-6 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_25px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden">
                  
                  {/* Subtle top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#47B2E4]/40 to-transparent" />

                  <form action="https://formsubmit.co/contact@akashaveda.com" method="POST" className="space-y-8 relative z-10">
                    <input type="hidden" name="_subject" value="New Satellite Mission Inquiry - Akashaveda" />
                    <input type="hidden" name="mission_focus" value={selectedCategory} />
                    <input type="hidden" name="fleet_scale" value={selectedFleet} />

                    {/* Mission Focus */}
                    <div>
                      <label className={labelCls}>
                        <Terminal className="w-3.5 h-3.5 text-[#47B2E4]" />
                        1. Operational Focus
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        {MISSION_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-center ${
                              selectedCategory === cat.id
                                ? 'bg-gradient-to-br from-[#47B2E4]/20 to-[#47B2E4]/5 border-[#47B2E4]/60 text-white shadow-[0_0_15px_rgba(71,178,228,0.15)]'
                                : 'bg-white/[0.02] border-white/5 text-[#94A3B8] hover:bg-white/[0.04] hover:border-white/20 hover:text-white'
                            }`}
                          >
                            <div className="text-sm font-semibold mb-1 flex items-center justify-between">
                              {cat.label}
                              {selectedCategory === cat.id && <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] shadow-[0_0_6px_#47B2E4]" />}
                            </div>
                            <div className="text-[11px] font-mono text-[#6B7785]">{cat.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fleet Scale */}
                    <div>
                      <label className={labelCls}>
                        <Satellite className="w-3.5 h-3.5 text-[#47B2E4]" />
                        2. Constellation Scale
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                        {FLEET_SIZES.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedFleet(size)}
                            className={`py-3 px-2 rounded-xl border text-[11px] font-mono transition-all duration-300 ${
                              selectedFleet === size
                                ? 'bg-[#47B2E4] text-black font-bold border-[#47B2E4] shadow-[0_0_15px_rgba(71,178,228,0.3)]'
                                : 'bg-white/[0.02] border-white/5 text-[#94A3B8] hover:bg-white/[0.06] hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Input Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                      <div>
                        <label htmlFor="name" className={labelCls}>Full Name *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputCls} placeholder="Dr. Maya Raman" />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelCls}>Work Email *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputCls} placeholder="maya@aerospace.org" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className={labelCls}>Organization</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputCls} placeholder="NewSpace Earth Observation Inc." />
                    </div>

                    <div>
                      <label htmlFor="message" className={labelCls}>Mission Details *</label>
                      <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Tell us about your orbit, bands (UHF/S/X/Ka), or flight goals..." />
                    </div>

                    {/* Submit Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5">
                      <button
                        type="submit"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#47B2E4] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(71,178,228,0.4)] group"
                      >
                        Dispatch Inquiry
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-[#47B2E4]" />
                        <span>AES-256 Encrypted</span>
                      </div>
                    </div>
                  </form>
                </div>
              </Card3D>
            </div>

            {/* Right: Consolidated Contact Info (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <Card3D maxTilt={3} glareColor="transparent">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_15px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#47B2E4]/10 border border-[#47B2E4]/20 flex items-center justify-center shadow-inner">
                      <MapPin className="w-5 h-5 text-[#47B2E4]" />
                    </div>
                    <h3 className="text-xl font-medium text-white tracking-tight font-display">Mission Control Desk</h3>
                  </div>
                  
                  <div className="space-y-6 text-sm text-[#94A3B8]">
                    {/* Location */}
                    <div>
                      <p className="font-medium text-white mb-1.5 text-base">Foundation for Science Innovation (FSID)</p>
                      <p className="font-light leading-relaxed">Indian Institute of Science Campus<br />Bengaluru, Karnataka 560012, India</p>
                    </div>

                    {/* Email */}
                    <div className="border-t border-white/5 pt-6">
                      <p className="text-[10px] font-mono text-[#6B7785] uppercase tracking-widest mb-1.5">Direct Inquiries</p>
                      <a href="mailto:contact@akashaveda.com" className="text-[#47B2E4] font-medium text-base hover:text-white transition-colors">
                        contact@akashaveda.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card3D>

              {/* Network Compatibility Note */}
              <Card3D maxTilt={3} glareColor="transparent">
                <div className="p-8 rounded-3xl bg-[#05080E] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white mb-2">Network Agnostic Integration</h4>
                      <p className="text-xs text-[#6B7785] leading-[1.8] font-mono">
                        Native drop-in compatibility with AWS Ground Station, Leaf Space, KSATlite, Viasat RTE, and proprietary antenna arrays.
                      </p>
                    </div>
                  </div>
                </div>
              </Card3D>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
import { Mail, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, viewport } from '../lib/motion';
import { Radar3DSweep } from './Space3DElements';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@akashaveda.com', href: 'mailto:contact@akashaveda.com' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, Karnataka, India', href: undefined },
    { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9 AM – 6 PM', href: undefined },
  ];

  const inputCls =
    'w-full bg-transparent border-0 border-b border-white/10 focus:border-blue-400 py-3.5 text-sm text-white placeholder-[#5A687C] focus:outline-none transition-colors duration-200';
  const labelCls = 'block text-[11px] font-mono uppercase tracking-widest text-[#8A95A3] mb-1.5';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#070C1A] via-[#090e1c] to-[#070C1A] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Tactical Radar Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_1px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.15]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.6),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(11,21,40,0.5),transparent)]" />
        {/* Decorative orbit rings */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 480 480" fill="none" className="w-full h-full">
            <circle cx="240" cy="240" r="180" stroke="rgba(148,163,184,1)" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="240" cy="240" r="120" stroke="rgba(148,163,184,1)" strokeWidth="0.8" strokeDasharray="4 6" />
            <circle cx="240" cy="240" r="60" stroke="rgba(148,163,184,1)" strokeWidth="0.6" />
            <circle cx="240" cy="60" r="6" fill="rgba(148,163,184,0.8)" />
            <circle cx="420" cy="240" r="4" fill="rgba(148,163,184,0.5)" />
            <circle cx="100" cy="360" r="3" fill="rgba(148,163,184,0.4)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400 mb-4">Get In Touch</p>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-end mb-10 sm:mb-14">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
            >
              TRANSFORM YOUR{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SATELLITE<br className="hidden sm:block" /> OPERATIONS
              </span>
            </h2>
            <p className="text-[#C7CEDA] text-base sm:text-lg leading-[1.8] max-w-lg">
              Let's discuss how Akashaveda can revolutionize your mission control with AI-powered
              automation. Our team responds within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* ── Body ── */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Form — 3 cols (Border Removed) */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight} className="lg:col-span-3 bg-[#080d1a]/95 rounded-3xl p-7 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <form
              action="https://formsubmit.co/contact@akashaveda.com"
              method="POST"
              className="space-y-6 sm:space-y-7"
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission - Akashaveda" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelCls}>Full Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className={inputCls} placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email Address *</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className={inputCls} placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className={labelCls}>Company / Organization</label>
                <input
                  type="text" id="company" name="company"
                  value={formData.company} onChange={handleChange}
                  className={inputCls} placeholder="Aerospace Co."
                />
              </div>

              <div>
                <label htmlFor="interest" className={labelCls}>Area of Interest</label>
                <select
                  id="interest" name="interest" required
                  value={formData.interest} onChange={handleChange}
                  className={`${inputCls} appearance-none bg-transparent cursor-pointer`}
                >
                  <option value="general" className="bg-[#080d1a]">General Inquiry</option>
                  <option value="demo" className="bg-[#080d1a]">Schedule a Technical Demo</option>
                  <option value="pricing" className="bg-[#080d1a]">Pricing & Deployment</option>
                  <option value="partnership" className="bg-[#080d1a]">Ground Network / Hardware Integration</option>
                  <option value="support" className="bg-[#080d1a]">Mission Operations Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelCls}>Your Message *</label>
                <textarea
                  id="message" name="message" required rows={4}
                  value={formData.message} onChange={handleChange}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell us about your satellite mission and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-lg shadow-blue-500/20 w-full sm:w-auto"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact info — 2 cols with 3D Radar Widget */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} className="lg:col-span-2 flex flex-col gap-6 sm:gap-8 justify-between">
            <div className="space-y-4 sm:space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#080d1a]/95 border border-white/[0.05] hover:border-blue-500/20 hover:bg-[#0c1426] transition-all duration-300 backdrop-blur-sm shadow-md">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A95A3] mb-0.5 sm:mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-white text-xs sm:text-sm hover:text-blue-400 transition-colors break-all sm:break-normal font-medium">{value}</a>
                    ) : (
                      <span className="text-white text-xs sm:text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 3D Space Radar Sweep */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#080d1a]/95 border border-white/[0.05] shadow-md relative">
              <Radar3DSweep className="mb-2 sm:mb-3 max-w-full" />
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#C7CEDA] text-center">
                Ground Station Telemetry Signal: <span className="text-emerald-400 font-semibold">ONLINE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

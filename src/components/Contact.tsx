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
    'w-full bg-white/[0.03] border border-white/10 focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]/30 rounded-[8px] px-4 py-3 text-sm text-white placeholder-[#71717A] focus:outline-none transition-colors duration-200';
  const labelCls = 'block text-[11px] font-mono uppercase tracking-widest text-[#A3A3AE] mb-1.5';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 sm:py-20 bg-[#000000] overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Tactical Radar Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#18181b_1px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.12]" />
        {/* Decorative orbit rings */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 480 480" fill="none" className="w-full h-full">
            <circle cx="240" cy="240" r="180" stroke="rgba(167,139,250,1)" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="240" cy="240" r="120" stroke="rgba(167,139,250,1)" strokeWidth="0.8" strokeDasharray="4 6" />
            <circle cx="240" cy="240" r="60" stroke="rgba(167,139,250,1)" strokeWidth="0.6" />
            <circle cx="240" cy="60" r="6" fill="rgba(167,139,250,0.8)" />
            <circle cx="420" cy="240" r="4" fill="rgba(167,139,250,0.5)" />
            <circle cx="100" cy="360" r="3" fill="rgba(167,139,250,0.4)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#A78BFA] mb-4 flex items-center gap-2">
            <span className="diamond-tick">◆</span>
            Get In Touch
          </p>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-end mb-10 sm:mb-14">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
            >
              TRANSFORM YOUR{' '}
              <span className="text-[#A78BFA]">
                SATELLITE<br className="hidden sm:block" /> OPERATIONS
              </span>
            </h2>
            <p className="text-[#A3A3AE] text-base sm:text-lg leading-[1.8] max-w-lg">
              Let's discuss how Akashaveda can revolutionize your mission control with AI-powered
              automation. Our team responds within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* ── Body ── */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Form — 3 cols */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeRight} className="lg:col-span-3 bg-[#08080A] border border-white/10 rounded-[10px] p-7 sm:p-10 shadow-lg">
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
                  className={`${inputCls} cursor-pointer`}
                >
                  <option value="general" className="bg-[#08080A] text-white">General Inquiry</option>
                  <option value="demo" className="bg-[#08080A] text-white">Schedule a Technical Demo</option>
                  <option value="pricing" className="bg-[#08080A] text-white">Pricing & Deployment</option>
                  <option value="partnership" className="bg-[#08080A] text-white">Ground Network / Hardware Integration</option>
                  <option value="support" className="bg-[#08080A] text-white">Mission Operations Support</option>
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
                className="cta cta-primary text-sm font-medium px-8 py-3.5 rounded-full flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact info — 2 cols with 3D Radar Widget */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeLeft} className="lg:col-span-2 flex flex-col gap-6 sm:gap-8 justify-between">
            <div className="space-y-4 sm:space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-[10px] bg-[#08080A] border border-white/10 hover:border-[#A78BFA]/40 transition-all duration-200">
                  <div className="w-10 h-10 rounded-[8px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A78BFA] flex-shrink-0">
                    <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] mb-0.5 sm:mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-white text-xs sm:text-sm hover:text-[#A78BFA] transition-colors break-all sm:break-normal font-medium">{value}</a>
                    ) : (
                      <span className="text-white text-xs sm:text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 3D Space Radar Sweep */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-[10px] bg-[#08080A] border border-white/10 relative">
              <Radar3DSweep className="mb-2 sm:mb-3 max-w-full" />
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#A3A3AE] text-center">
                Ground Station Telemetry Signal: <span className="text-[#A78BFA] font-semibold">ONLINE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

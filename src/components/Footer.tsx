import { Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, spring, viewport } from '../lib/motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cols = [
    {
      heading: 'Engineering & Services',
      links: [
        { label: 'Mission Design & Feasibility', href: '#services', internal: false },
        { label: 'Constellation & Orbit Design', href: '#services', internal: false },
        { label: 'AOCS & Flight Algorithms', href: '#services', internal: false },
        { label: 'TT&C Ground Station Realization', href: '#services', internal: false },
      ],
    },
    {
      heading: 'Platform & Products',
      links: [
        { label: 'VYUH-MCS (Mission Control)', href: '#products', internal: false },
        { label: 'CHAKRA-SSA (Space Safety)', href: '#products', internal: false },
        { label: 'Cloud Mission Architecture', href: '#platform', internal: false },
        { label: 'Ground Network Integrations', href: '#integrations', internal: false },
      ],
    },
  ];

  const linkCls = 'text-[13px] text-[#8A95A3] hover:text-white transition-colors duration-150';

  return (
    <footer className="relative bg-gradient-to-b from-[#070C1A] via-[#0A1324] to-black border-t border-white/8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:40px_40px] opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.6),transparent_70%)] pointer-events-none" />
      </div>

      {/* ── Pre-footer CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400 mb-4">Mission Operations Modernized</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight text-white">
              Scale your satellite constellation<br /><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">with Akashaveda.</span>
            </h3>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={spring.bouncy}
            className="flex-shrink-0 group flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200"
          >
            Schedule Technical Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      <div className="border-t border-white/[0.06]" />

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08, 0.1)}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-12"
        >

          {/* Brand */}
          <motion.div variants={staggerItem} className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3.5 mb-5 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f4f5f7] border border-white/50 p-2 sm:p-2.5 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 flex-shrink-0">
                <img src="/logo.svg" alt="Akashaveda Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">Akashaveda</span>
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest">Technologies</span>
              </div>
            </Link>
            <p className="text-[13px] text-[#8A95A3] leading-[1.8] mb-6 max-w-xs">
              Next-generation cloud mission control and autonomous flight software for modern satellite fleets.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <a
                href="https://www.linkedin.com/company/akashaveda-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akashaveda LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0E192C] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-[#C7CEDA]" />
              </a>
            </div>
          </motion.div>

          {/* Nav columns */}
          {cols.map(({ heading, links }) => (
            <motion.div key={heading} variants={staggerItem}>
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8A95A3] mb-5">{heading}</p>
              <ul className="space-y-3">
                {links.map(({ label, href, internal }) => (
                  <li key={label}>
                    {internal && href.startsWith('/') ? (
                      <Link to={href} className={linkCls}>{label}</Link>
                    ) : (
                      <a href={href} className={linkCls}>{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8A95A3] mb-5">Contact</p>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:contact@akashaveda.com" className="flex items-center gap-2.5 text-xs text-[#C7CEDA] hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                  contact@akashaveda.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-xs text-[#C7CEDA]">
                  <MapPin className="w-3.5 h-3.5 text-white/60 flex-shrink-0 mt-0.5" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#8A95A3]">
            © {currentYear} Akashaveda Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[12px] text-[#8A95A3] hover:text-[#C7CEDA] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-[#8A95A3] hover:text-[#C7CEDA] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}

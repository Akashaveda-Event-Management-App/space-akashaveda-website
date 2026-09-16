import { useState, useEffect } from 'react';
import { Linkedin, ArrowRight, Twitter, Instagram, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [utcTime, setUtcTime] = useState('');

  // Live UTC timestamp simulation for aerospace mission operations
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const columns = [
    {
      heading: 'SERVICES',
      links: [
        { label: 'Mission Design & Feasibility', href: '#services' },
        { label: 'Constellation & Orbit Design', href: '#services' },
        { label: 'AOCS & Flight Algorithms', href: '#services' },
        { label: 'TT&C Ground Realization', href: '#services' },
        { label: 'All Services →', href: '#services' },
      ],
    },
    {
      heading: 'PRODUCTS',
      links: [
        { label: 'VYUH-MCS (Mission Control)', href: '#products' },
        { label: 'CHAKRA-SSA (Space Safety)', href: '#products' },
        { label: 'Cloud Mission Architecture', href: '#platform' },
        { label: 'Ground Network Integrations', href: '#integrations' },
        { label: 'All Products →', href: '#products' },
      ],
    },
    {
      heading: 'COMPANY',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Technology Stack', href: '#features' },
        { label: 'Flight Heritage', href: '#services' },
        { label: 'Careers', href: '#contact' },
        { label: 'Contact Team', href: '#contact' },
      ],
    },
    {
      heading: 'RESOURCES',
      links: [
        { label: 'Early Adopter Programme', href: '#contact' },
        { label: 'Telemetry & API Specs', href: '#platform' },
        { label: 'Mission Case Studies', href: '#features' },
        { label: 'Technical Documentation', href: '#products' },
      ],
    },
    {
      heading: 'CONTACT',
      isContact: true,
      email: 'contact@akashaveda.com',
      address: [
        'FSID, Innovation Centre,',
        'Indian Institute of Science (IISc),',
        'near Maramma Circle, Malleshwaram,',
        'Bengaluru, Karnataka 560012, India',
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#030509] text-[#94A3B8] antialiased border-t border-[#47B2E4]/20 selection:bg-[#47B2E4]/30 selection:text-white relative overflow-hidden">
      {/* Subtle Top Cyan Glow & Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#47B2E4]/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#47B2E4]/5 to-transparent blur-3xl pointer-events-none" />

      {/* ── Top Navigation & Brand Block ── */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Brand & Manifesto Column (Left) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-[#080C16] border border-[#47B2E4]/40 p-2 flex items-center justify-center shadow-[0_0_15px_rgba(71,178,228,0.25)] group-hover:scale-105 group-hover:border-[#47B2E4] transition-all duration-200 flex-shrink-0">
                <img src="/logo.svg" alt="Akashaveda" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="text-[22px] font-bold text-white tracking-tight leading-none font-display">
                AKASHAVEDA
              </span>
            </Link>

            {/* 3-line Aerospace Autonomy Manifesto */}
            <p className="mt-5 text-[14px] font-normal text-[#94A3B8] leading-[1.75] max-w-sm">
              AI-native mission operations software.
              <br />
              <span className="text-white font-medium">Ground autonomy today.</span>
              <br />
              <span className="text-[#47B2E4] font-medium">Full mission autonomy ahead.</span>
            </p>

            {/* IISc FSID Incubation Badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] animate-pulse" />
              <span>Incubated at FSID · IISc Bangalore</span>
            </div>

            {/* Circular Outline Social Buttons */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.linkedin.com/company/akashaveda-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akashaveda LinkedIn"
                className="w-9 h-9 rounded-full bg-[#080C16] border border-white/12 flex items-center justify-center text-[#94A3B8] hover:text-[#47B2E4] hover:border-[#47B2E4]/60 hover:bg-[#47B2E4]/10 transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/akashaveda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akashaveda Instagram"
                className="w-9 h-9 rounded-full bg-[#080C16] border border-white/12 flex items-center justify-center text-[#94A3B8] hover:text-[#47B2E4] hover:border-[#47B2E4]/60 hover:bg-[#47B2E4]/10 transition-all duration-200 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/akashaveda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akashaveda X"
                className="w-9 h-9 rounded-full bg-[#080C16] border border-white/12 flex items-center justify-center text-[#94A3B8] hover:text-[#47B2E4] hover:border-[#47B2E4]/60 hover:bg-[#47B2E4]/10 transition-all duration-200 shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns (Right 5 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-6">
            {columns.map((col) => (
              <div key={col.heading} className="space-y-4">
                <h4 className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-[#47B2E4] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#47B2E4]" />
                  {col.heading}
                </h4>

                {col.isContact ? (
                  <div className="space-y-3.5 text-[13px] text-[#94A3B8] leading-relaxed">
                    <a
                      href={`mailto:${col.email}`}
                      className="inline-flex items-center gap-1.5 text-white hover:text-[#47B2E4] font-medium transition-colors duration-200"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#47B2E4]" />
                      <span>{col.email}</span>
                    </a>
                    <div className="text-[12px] leading-relaxed text-[#94A3B8] flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#47B2E4] flex-shrink-0 mt-0.5" />
                      <div>
                        {col.address?.map((line, idx) => (
                          <span key={idx} className="block">{line}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2.5">
                    {col.links?.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className="text-[13px] font-normal text-[#94A3B8] hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-block leading-snug"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Mid Divider Hairline ── */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Bottom Section: Incubated At | Registered Office | Mission Connect ── */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Incubated At */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-xl bg-[#080C16]/80 border border-white/10 hover:border-[#47B2E4]/40 transition-all duration-300">
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-[#47B2E4] block flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#47B2E4]" />
              INCUBATED AT
            </span>
            <p className="mt-3 text-[14px] font-semibold text-white leading-snug">
              Foundation for Science Innovation and Development (FSID)
            </p>
            <p className="mt-1 text-[12.5px] text-[#94A3B8]">
              Indian Institute of Science (IISc), Bangalore
            </p>
          </div>

          {/* Card 2: Registered Office */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-xl bg-[#080C16]/80 border border-white/10 hover:border-[#47B2E4]/40 transition-all duration-300">
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-[#47B2E4] block flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#47B2E4]" />
              REGISTERED OFFICE
            </span>
            <p className="mt-3 text-[13px] font-normal text-[#94A3B8] leading-relaxed">
              No: 1190/1, Fourth Floor, Sector 3,
              <br />
              HSR Layout, Bengaluru, Karnataka 560102,
              <br />
              India
            </p>
          </div>

          {/* Card 3: Mission Connect CTA */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-xl bg-[#080C16]/80 border border-white/10 hover:border-[#47B2E4]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-[#47B2E4] block flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#47B2E4]" />
                # MISSION_CONNECT
              </span>
              <p className="mt-2.5 text-[15px] font-semibold text-white leading-snug">
                Building or flying a mission that needs autonomy?
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2381AE] to-[#47B2E4] text-[13px] font-semibold text-white hover:brightness-110 shadow-[0_0_15px_rgba(71,178,228,0.3)] transition-all duration-200 group w-fit"
            >
              <span>Connect with flight team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>

      {/* ── Massive Watermark Brand Signature ── */}
      <div className="max-w-[1440px] mx-auto px-4 pointer-events-none select-none overflow-hidden flex justify-center -mb-3 sm:-mb-5 opacity-20">
        <span className="text-[12vw] font-bold font-display tracking-[-0.04em] text-white/[0.04] whitespace-nowrap uppercase leading-none">
          AKASHAVEDA
        </span>
      </div>

      {/* ── Sub-bar: Copyright, Telemetry Timestamp & Policies ── */}
      <div className="border-t border-white/10 py-5 relative z-10 bg-[#020306]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-center md:text-left">
            <span>&copy; {currentYear} Akashaveda Technologies Private Limited. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span className="font-mono text-[10px] text-[#47B2E4] bg-[#47B2E4]/10 border border-[#47B2E4]/25 px-2.5 py-0.5 rounded-full font-medium inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {utcTime || 'UTC NOMINAL'}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[12px]">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-[#94A3B8] hover:text-[#47B2E4] transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="text-[#94A3B8] hover:text-[#47B2E4] transition-colors duration-150"
            >
              Terms of Service
            </a>
            <a
              href="#products"
              onClick={(e) => handleSmoothScroll(e, '#products')}
              className="text-[#94A3B8] hover:text-[#47B2E4] transition-colors duration-150 flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#47B2E4]" />
              Space Safety Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

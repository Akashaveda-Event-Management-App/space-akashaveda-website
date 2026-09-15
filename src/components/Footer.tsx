import { useState, useEffect } from 'react';
import { Linkedin, ArrowRight, Twitter, Instagram } from 'lucide-react';
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
        { label: 'Contact', href: '#contact' },
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
        'Indian Institute of Science,',
        'Innovation Centre, Campus,',
        'near Maramma Circle,',
        'near J.N. Tata Auditorium,',
        'Malleshwaram,',
        'Bengaluru, Karnataka 560012,',
        'India',
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#FFFFFF] text-[#5B5B66] antialiased border-t border-[#E5E5E8] selection:bg-[#7C3AED]/20 selection:text-[#0B0B0F] relative overflow-hidden">
      {/* ── Top Navigation & Brand Block (1:1 Orbtrix Layout) ── */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Brand & Manifesto Column (Left) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-[#0B0B0F] p-2 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                <img src="/logo.svg" alt="Akashaveda" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="text-[22px] font-bold text-[#0B0B0F] tracking-tight leading-none">
                AKASHAVEDA
              </span>
            </Link>

            {/* 3-line Aerospace Autonomy Manifesto */}
            <p className="mt-6 text-[14px] font-normal text-[#5B5B66] leading-[1.75] max-w-sm">
              AI-native mission operations software.
              <br />
              Ground autonomy today.
              <br />
              Full mission autonomy ahead.
            </p>

            {/* Circular Outline Social Buttons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://www.linkedin.com/company/akashaveda-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akashaveda LinkedIn"
                className="w-9 h-9 rounded-full border border-[#D9D9DE] flex items-center justify-center text-[#0B0B0F] hover:border-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/akashaveda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akashaveda Instagram"
                className="w-9 h-9 rounded-full border border-[#D9D9DE] flex items-center justify-center text-[#0B0B0F] hover:border-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white transition-all duration-200 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/akashaveda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Akashaveda X"
                className="w-9 h-9 rounded-full border border-[#D9D9DE] flex items-center justify-center text-[#0B0B0F] hover:border-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white transition-all duration-200 shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns (Right 5 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-6">
            {columns.map((col) => (
              <div key={col.heading} className="space-y-4">
                <h4 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[#0B0B0F]">
                  {col.heading}
                </h4>

                {col.isContact ? (
                  <div className="space-y-3.5 text-[13px] text-[#5B5B66] leading-relaxed">
                    <a
                      href={`mailto:${col.email}`}
                      className="block text-[#0B0B0F] hover:text-[#7C3AED] font-medium transition-colors duration-200"
                    >
                      {col.email}
                    </a>
                    <div className="text-[12px] leading-relaxed text-[#5B5B66]">
                      {col.address?.map((line, idx) => (
                        <span key={idx} className="block">{line}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2.5">
                    {col.links?.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className="text-[13.5px] font-normal text-[#33333C] hover:text-[#7C3AED] transition-colors duration-150 inline-block leading-snug"
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
        <div className="border-t border-[#E5E5E8]" />
      </div>

      {/* ── Bottom Section: Incubated At | Registered Office | Mission Connect ── */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Card 1: Incubated At */}
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-[#7C3AED] block">
              INCUBATED AT
            </span>
            <p className="mt-3 text-[15px] font-semibold text-[#0B0B0F] leading-snug max-w-sm">
              Foundation for Science Innovation and Development (Formerly SID), Indian Institute of Science
            </p>
          </div>

          {/* Card 2: Registered Office */}
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-[#7C3AED] block">
              REGISTERED OFFICE
            </span>
            <p className="mt-3 text-[13px] font-normal text-[#5B5B66] leading-relaxed max-w-sm">
              No: 1190/1, Fourth Floor,
              <br />
              Sector 3, HSR Layout,
              <br />
              Bengaluru, Karnataka 560102,
              <br />
              India
            </p>
          </div>

          {/* Card 3: Mission Connect CTA */}
          <div className="md:col-span-4 flex flex-col items-start">
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-[#7C3AED] block">
              # MISSION_CONNECT
            </span>
            <p className="mt-3 text-[16px] font-semibold text-[#0B0B0F] leading-snug max-w-sm">
              Building or flying a mission that needs autonomy?
            </p>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="inline-flex items-center gap-2.5 mt-5 px-6 py-2.5 border border-[#0B0B0F] rounded-[8px] bg-white text-[13px] font-medium text-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white transition-all duration-200 group shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>

      {/* ── Massive Watermark Brand Signature ── */}
      <div className="max-w-[1440px] mx-auto px-4 pointer-events-none select-none overflow-hidden flex justify-center -mb-4 sm:-mb-6 opacity-25">
        <span className="text-[12vw] font-bold font-display tracking-[-0.05em] text-[#E5E5E8] whitespace-nowrap uppercase leading-none">
          AKASHAVEDA
        </span>
      </div>

      {/* ── Sub-bar: Copyright, Telemetry Timestamp & Policies ── */}
      <div className="border-t border-[#EAEAEF] py-6 relative z-10 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#5B5B66]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-center md:text-left">
            <span>&copy; {currentYear} Akashaveda Technologies Private Limited. All rights reserved.</span>
            <span className="hidden sm:inline text-black/20">·</span>
            <span className="font-mono text-[10px] text-[#7C3AED] bg-[#7C3AED]/10 px-2 py-0.5 rounded-full font-medium">
              {utcTime || 'UTC NOMINAL'}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[12px]">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="hover:text-[#7C3AED] transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="hover:text-[#7C3AED] transition-colors duration-150"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hover:text-[#7C3AED] transition-colors duration-150"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

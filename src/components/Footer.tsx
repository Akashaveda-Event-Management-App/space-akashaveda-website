import { useState, useEffect } from 'react';
import { Mail, MapPin, ArrowUpRight, Shield, Radio, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#030610] text-[#94A3B8] border-t border-white/10 relative overflow-hidden">
      
      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Manifesto Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group focus:outline-none">
                <div className="w-8 h-8 rounded-[6px] bg-[#FFFFFF] border border-white/20 p-1 flex items-center justify-center shadow-sm">
                  <img src="/logo.svg" alt="Akashaveda" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-semibold text-white tracking-tight leading-none font-sans">
                  Akashaveda
                </span>
              </Link>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 max-w-sm">
                Integrated ground segment infrastructure for satellite operators, combining ground communications, mission operations, and space situational awareness into a unified system.
              </p>
            </div>

            {/* Live Operational Status */}
            <div className="p-3 rounded-[6px] bg-[#080C16] border border-white/10 text-xs font-mono">
              <div className="flex items-center justify-between text-[#64748B] mb-1">
                <span>SYSTEM DISPATCH</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="text-white font-medium">{utcTime}</div>
              <div className="text-[10px] text-[#64748B] mt-1">
                Cloud · On-Premise · Hybrid Ready
              </div>
            </div>
          </div>

          {/* Navigation Links (Platform & Core) (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase text-white font-medium tracking-wider mb-4">
              PLATFORM
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/chakravyuh" className="hover:text-white transition-colors">
                  Chakravyuh (Platform)
                </Link>
              </li>
              <li>
                <Link to="/chakra" className="hover:text-white transition-colors">
                  Chakra (SSA)
                </Link>
              </li>
              <li>
                <Link to="/vyuh" className="hover:text-white transition-colors">
                  Vyuh (MCS)
                </Link>
              </li>
              <li>
                <Link to="/ground-operations" className="hover:text-white transition-colors">
                  Ground Operations
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase text-white font-medium tracking-wider mb-4">
              COMPANY
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Resources &amp; Specs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact?type=demo" className="text-[#47B2E4] hover:underline flex items-center gap-1">
                  <span>Schedule Demo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contact (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="text-xs font-mono uppercase text-white font-medium tracking-wider mb-4">
              REGISTERED OFFICE
            </div>
            <div className="p-4 rounded-[6px] bg-[#080C16] border border-white/10 text-xs space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#47B2E4] flex-shrink-0 mt-0.5" />
                <div className="text-[#94A3B8] leading-relaxed">
                  FSID, Innovation Centre,<br />
                  Indian Institute of Science (IISc),<br />
                  near Maramma Circle, Malleshwaram,<br />
                  Bengaluru, Karnataka 560012, India
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
                <Mail className="w-3.5 h-3.5 text-[#47B2E4] flex-shrink-0" />
                <a href="mailto:contact@akashaveda.com" className="text-white hover:text-[#47B2E4] transition-colors font-mono">
                  contact@akashaveda.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Strip ── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div className="text-center sm:text-left">
            © {currentYear} Akashaveda Technologies Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-center sm:text-right text-[11px] sm:text-xs">
            <span>AEROSPACE-GRADE DETERMINISTIC ARCHITECTURE</span>
            <span className="text-emerald-400">HUMAN APPROVAL BOUNDED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { Mail, MapPin, Send, CheckCircle2, Building, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'demo';

  const [inquiryType, setInquiryType] = useState<'demo' | 'ground' | 'general'>('demo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    fleetSize: '1-5',
    frequencyBand: 'X-band',
    missionPhase: 'Development / Pre-Launch',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialType === 'demo') setInquiryType('demo');
    else if (initialType === 'ground') setInquiryType('ground');
    else setInquiryType('general');
  }, [initialType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Akashaveda | Schedule a Demonstration & Ground Station Access"
        description="Schedule a technical demonstration of Chakravyuh or explore ground station network access with Akashaveda flight operations engineers at IISc Bengaluru."
        canonical="/contact"
      />

      <div className="pt-24 pb-16 bg-[#030610] text-white min-h-screen">
        
        {/* ── 01. Hero ── */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E1626] border border-white/10 text-xs font-mono text-[#47B2E4] mb-4">
                <Mail className="w-3.5 h-3.5" />
                <span>FLIGHT OPERATIONS ENGAGEMENT</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 font-sans">
                Contact Our Mission Operations Team
              </h1>

              <p className="text-[17px] sm:text-[19px] text-[#94A3B8] font-normal leading-relaxed mb-8">
                Connect directly with our aerospace systems engineers to schedule a demonstration of Chakravyuh, evaluate ground station network access, or discuss custom flight dynamics integration.
              </p>
            </div>
          </div>
        </section>

        {/* ── 02. Contact & Inquiry Form Grid ── */}
        <section className="relative py-16 sm:py-20 bg-[#050811]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Office & Registered Location (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="p-6 rounded-[8px] bg-[#080C16] border border-white/15 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#47B2E4] uppercase tracking-wider mb-3">
                    <Building className="w-4 h-4" />
                    <span>HEADQUARTERS &amp; R&amp;D FACILITY</span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-3">
                    Indian Institute of Science (IISc)
                  </h3>

                  <div className="flex items-start gap-3 text-xs text-[#94A3B8] leading-relaxed mb-4">
                    <MapPin className="w-4 h-4 text-[#47B2E4] flex-shrink-0 mt-0.5" />
                    <div>
                      FSID, Innovation Centre,<br />
                      Indian Institute of Science (IISc),<br />
                      near Maramma Circle, Malleshwaram,<br />
                      Bengaluru, Karnataka 560012, India
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center gap-2.5 text-xs font-mono">
                    <Mail className="w-3.5 h-3.5 text-[#47B2E4]" />
                    <a href="mailto:contact@akashaveda.com" className="text-white hover:text-[#47B2E4] transition-colors">
                      contact@akashaveda.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-[8px] bg-[#080C16] border border-white/10 text-xs">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-2">
                    DIRECT ENGINEERING CONSULTATION
                  </div>
                  <p className="text-[#94A3B8] leading-relaxed mb-3">
                    Technical demonstrations include live telemetry replay sessions, pass contention resolution demos, and SSA conjunction probability walkthroughs with our systems engineering team.
                  </p>
                  <div className="text-[#64748B] font-mono">
                    CONFIDENTIALITY: NDA &amp; PROPRIETARY PROTOCOLS SUPPORTED
                  </div>
                </div>

              </div>

              {/* Right Column: Inquiry Form (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-[8px] bg-[#080C16] border border-white/15 shadow-xl">
                  
                  {/* Inquiry Type Tab Switcher */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1 rounded-[6px] bg-[#0B1220] border border-white/10 mb-6 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setInquiryType('demo')}
                      className={`flex-1 py-2 px-3 rounded-[4px] transition-colors text-center ${inquiryType === 'demo' ? 'bg-[#0E1626] text-white font-semibold border border-white/15' : 'text-[#94A3B8] hover:text-white'}`}
                    >
                      Schedule Demonstration
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('ground')}
                      className={`flex-1 py-2 px-3 rounded-[4px] transition-colors text-center ${inquiryType === 'ground' ? 'bg-[#0E1626] text-white font-semibold border border-white/15' : 'text-[#94A3B8] hover:text-white'}`}
                    >
                      Ground Station Access
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('general')}
                      className={`flex-1 py-2 px-3 rounded-[4px] transition-colors text-center ${inquiryType === 'general' ? 'bg-[#0E1626] text-white font-semibold border border-white/15' : 'text-[#94A3B8] hover:text-white'}`}
                    >
                      Technical Inquiry
                    </button>
                  </div>

                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-medium text-white font-sans">
                        Inquiry Dispatched Successfully
                      </h3>
                      <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. An Akashaveda flight operations engineer will review your mission parameters and respond within one business day.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-2 rounded-[6px] bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors"
                      >
                        SUBMIT ANOTHER REQUEST
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                            FULL NAME *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Flight Director Name"
                            className="w-full px-3 py-2 rounded-[6px] bg-[#0B1220] border border-white/10 text-white text-sm focus:border-[#47B2E4] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                            CORPORATE / AGENCY EMAIL *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="operator@organization.com"
                            className="w-full px-3 py-2 rounded-[6px] bg-[#0B1220] border border-white/10 text-white text-sm focus:border-[#47B2E4] outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                            ORGANIZATION / SATELLITE OPERATOR *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="Space Systems Ltd / Agency"
                            className="w-full px-3 py-2 rounded-[6px] bg-[#0B1220] border border-white/10 text-white text-sm focus:border-[#47B2E4] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                            FLEET SCALE / ASSET COUNT
                          </label>
                          <select
                            value={formData.fleetSize}
                            onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                            className="w-full px-3 py-2 rounded-[6px] bg-[#0B1220] border border-white/10 text-white text-sm focus:border-[#47B2E4] outline-none"
                          >
                            <option value="1-5">1 – 5 Spacecraft (Demonstration / Early Fleet)</option>
                            <option value="6-25">6 – 25 Spacecraft (Regional Constellation)</option>
                            <option value="26-100">26 – 100 Spacecraft (Commercial Fleet)</option>
                            <option value="100+">100+ Spacecraft (Mega-Constellation)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                            PRIMARY RF FREQUENCY BAND
                          </label>
                          <select
                            value={formData.frequencyBand}
                            onChange={(e) => setFormData({ ...formData, frequencyBand: e.target.value })}
                            className="w-full px-3 py-2 rounded-[6px] bg-[#0B1220] border border-white/10 text-white text-sm focus:border-[#47B2E4] outline-none"
                          >
                            <option value="X-band">X-Band (Payload Downlink)</option>
                            <option value="S-band">S-Band (TT&amp;C Operations)</option>
                            <option value="UHF/VHF">UHF / VHF (Telemetry)</option>
                            <option value="Ka-band">Ka-Band (High Throughput)</option>
                            <option value="Multi-band">Multi-Band Hybrid</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                            CURRENT MISSION PHASE
                          </label>
                          <select
                            value={formData.missionPhase}
                            onChange={(e) => setFormData({ ...formData, missionPhase: e.target.value })}
                            className="w-full px-3 py-2 rounded-[6px] bg-[#0B1220] border border-white/10 text-white text-sm focus:border-[#47B2E4] outline-none"
                          >
                            <option value="Development / Pre-Launch">Development / Pre-Launch Phase</option>
                            <option value="LEOP / Commissioning">Launch &amp; Early Orbit Phase (LEOP)</option>
                            <option value="Active On-Orbit">Active On-Orbit Operations</option>
                            <option value="Constellation Expansion">Constellation Expansion / Replenishment</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                          MISSION REQUIREMENTS &amp; TIMELINE
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please provide orbit parameters, ground station pass requirements, or preferred demonstration timeline..."
                          className="w-full px-3 py-2 rounded-[6px] bg-[#0B1220] border border-white/10 text-white text-sm focus:border-[#47B2E4] outline-none resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors shadow-sm"
                        >
                          <span>Dispatch Operational Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="pt-2 text-[10px] font-mono text-[#64748B]">
                        * All mission parameter communications are treated under strict confidentiality guidelines.
                      </div>

                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
}

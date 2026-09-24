import { useEffect, useState, useRef } from 'react';

export interface HeroSpaceEffectsProps {
  className?: string;
  onFeedChange?: (feedId: string) => void;
}

// Verified 100% text-free, unwatermarked photorealistic Earth orbital video
const FEEDS = [
  {
    id: 'cam1',
    src: '/bg2.mp4',
    label: 'PLANETARY OBSERVATION ORBIT',
    code: 'GLB-ECI // ROTATION',
    alt: '620.0 km',
    vel: '7.52 km/s',
    poster: '/images/satellite_in_orbit_clean.jpg',
  },
];

export default function HeroSpaceEffects({
  className = '',
}: HeroSpaceEffectsProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const current = FEEDS[0];

  return (
    <div
      className={`absolute inset-0 z-0 select-none overflow-hidden bg-[#030712] ${className}`}
    >
      {/* ── Looping HD Video (Verified 100% Text-Free) ── */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={current.poster}
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover lg:w-[65%] lg:object-left transition-opacity duration-1000 ease-in-out pointer-events-none ${
            videoLoaded ? 'opacity-95' : 'opacity-40'
          }`}
          src={current.src}
        />
      </div>

      {/* ── Seamless Left-to-Right Atmospheric Gradient ── */}
      {/* On desktop: Pure deep space on the left, softly blending into the Earth video on the right */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent w-[58%] pointer-events-none z-10" />
      {/* On mobile: Overall gentle contrast overlay */}
      <div className="lg:hidden absolute inset-0 bg-[#030712]/65 pointer-events-none z-10" />

      {/* Top & bottom atmospheric fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-transparent to-[#030712] pointer-events-none z-10" />

      {/* ── Tactical Telemetry Tag (Bottom-Right HUD) ── */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 pointer-events-auto">
        <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-[6px] bg-[#080C16]/90 border border-white/15 backdrop-blur-md text-[10px] font-mono text-[#94A3B8] shadow-xl">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE ORBITAL VIEW
          </span>
          <span className="text-white/20">|</span>
          <span>ALT: <strong className="text-white">{current.alt}</strong></span>
          <span className="text-white/20">|</span>
          <span>VEL: <strong className="text-[#47B2E4]">{current.vel}</strong></span>
          <span className="text-white/20">|</span>
          <span className="text-[#7CCCED]">{current.code}</span>
        </div>
      </div>
    </div>
  );
}
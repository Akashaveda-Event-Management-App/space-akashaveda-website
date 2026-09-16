import { useEffect, useState, useRef } from 'react';
import { Camera } from 'lucide-react';

export interface HeroSpaceEffectsProps {
  className?: string;
  onFeedChange?: (feedId: string) => void;
}

// Kept only the first two high-definition space feeds
const FEEDS = [
  { id: 'cam1', src: '/bg1.mp4', label: 'CAM 01: LEO CONSTELLATION', code: 'ORB-540', alt: '540.2 km', vel: '7.66 km/s' },
  { id: 'cam2', src: '/bg2.mp4', label: 'CAM 02: TERMINATOR DAWN', code: 'TRM-98°', alt: '580.4 km', vel: '7.58 km/s' },
];

export default function HeroSpaceEffects({
  className = '',
  onFeedChange,
}: HeroSpaceEffectsProps) {
  const [activeFeedIndex, setActiveFeedIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState<{ [key: number]: boolean }>({});

  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  // Auto-cycle through the 2 space videos every 18 seconds unless user picked one
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveFeedIndex((prev) => {
        const next = (prev + 1) % FEEDS.length;
        if (onFeedChange) onFeedChange(FEEDS[next].id);
        return next;
      });
    }, 18000); // 18 seconds interval

    return () => clearInterval(interval);
  }, [isUserInteracting, onFeedChange]);

  // Ensure all videos play smoothly in background
  useEffect(() => {
    videoRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.play().catch(() => {});
      }
    });
  }, []);

  const handleSelectFeed = (index: number) => {
    setActiveFeedIndex(index);
    setIsUserInteracting(true);
    if (onFeedChange) onFeedChange(FEEDS[index].id);
  };

  const current = FEEDS[activeFeedIndex];

  return (
    <div
      className={`absolute inset-0 z-0 select-none overflow-hidden bg-[#000000] ${className}`}
    >
      {/* ── Looping HD Space Videos with Seamless Crossfade ── */}
      {FEEDS.map((feed, idx) => {
        const isActive = activeFeedIndex === idx;
        return (
          <video
            key={feed.id}
            ref={videoRefs[idx]}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setVideosLoaded((prev) => ({ ...prev, [idx]: true }))}
            className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out pointer-events-none ${
              isActive && videosLoaded[idx] !== false ? 'opacity-70' : 'opacity-0'
            }`}
            src={feed.src}
          />
        );
      })}

      {/* ── Cinematic Aerospace Vignette (ensures text legibility & color pop) ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_35%,transparent_30%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      {/* ── Interactive Tactical Video Feed Switcher (Bottom-Right HUD) ── */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 pointer-events-auto flex flex-col items-end gap-2">
        {/* Real-time Telemetry HUD Tag */}
        <div className="hidden sm:flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#04060A]/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            REC
          </span>
          <span className="text-white/20">|</span>
          <span>ALT: <strong className="text-white">{current.alt}</strong></span>
          <span className="text-white/20">|</span>
          <span>VEL: <strong className="text-[#47B2E4]">{current.vel}</strong></span>
          <span className="text-white/20">|</span>
          <span className="text-[#7CCCED]">{current.code}</span>
        </div>

        {/* Camera Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/80 border border-white/15 backdrop-blur-xl shadow-2xl">
          <div className="px-2 py-1 flex items-center gap-1 text-[9px] font-mono text-[#64748B] uppercase border-r border-white/10 hidden xs:flex">
            <Camera className="w-3 h-3 text-[#47B2E4]" />
            <span>FEEDS</span>
          </div>

          {FEEDS.map((feed, idx) => {
            const isActive = activeFeedIndex === idx;
            return (
              <button
                key={feed.id}
                onClick={() => handleSelectFeed(idx)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2381AE] to-[#47B2E4] text-white font-bold shadow-[0_0_12px_rgba(71,178,228,0.4)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
                title={feed.label}
              >
                <span className={`w-1 h-1 rounded-full ${isActive ? 'bg-white' : 'bg-white/40'}`} />
                <span>0{idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SpaceCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [targetType, setTargetType] = useState<string>('ACQUIRED');
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(true);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer targeting reticle
  const springConfig = { damping: 26, stiffness: 320, mass: 0.45 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop mouse/fine-pointer devices
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsEnabled(false);
      return;
    }

    const saved = localStorage.getItem('space_cursor_enabled');
    if (saved !== null) {
      setIsEnabled(saved === 'true');
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      if (!isVisible) setIsVisible(true);

      // Inspect target element under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        if (interactiveEl) {
          setIsHovered(true);
          const tagName = interactiveEl.tagName.toLowerCase();
          if (tagName === 'button') setTargetType('CMD // EXEC');
          else if (tagName === 'a') setTargetType('NAV // ORBIT');
          else if (tagName === 'input' || tagName === 'textarea') setTargetType('DATA // INPUT');
          else setTargetType('SYS // INTERACT');
        } else {
          setIsHovered(false);
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const handleToggle = (e: CustomEvent) => {
      setIsEnabled(e.detail.enabled);
    };
    window.addEventListener('space-cursor-toggle' as any, handleToggle);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('space-cursor-toggle' as any, handleToggle);
    };
  }, [isVisible, mouseX, mouseY]);

  // Hide system default cursor when custom cursor is active
  useEffect(() => {
    if (isEnabled && isVisible) {
      document.documentElement.classList.add('custom-cursor-enabled');
    } else {
      document.documentElement.classList.remove('custom-cursor-enabled');
    }
    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* ── 1. Smooth Spring Reticle Follower (Tactical Aerospace HUD) ── */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute pointer-events-none"
      >
        <motion.div
          animate={{
            width: isClicking ? 22 : isHovered ? 48 : 32,
            height: isClicking ? 22 : isHovered ? 48 : 32,
            scale: isClicking ? 0.85 : 1,
          }}
          transition={{ type: 'spring', stiffness: 450, damping: 24 }}
          className="relative flex items-center justify-center filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
        >
          {/* 4 Precision Tactical Corner Brackets */}
          {/* Top-Left */}
          <span
            className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] transition-colors duration-200 ${
              isHovered ? 'border-[#C4B5FD]' : 'border-[#A78BFA]'
            }`}
          />
          {/* Top-Right */}
          <span
            className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] transition-colors duration-200 ${
              isHovered ? 'border-[#C4B5FD]' : 'border-[#A78BFA]'
            }`}
          />
          {/* Bottom-Left */}
          <span
            className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] transition-colors duration-200 ${
              isHovered ? 'border-[#C4B5FD]' : 'border-[#A78BFA]'
            }`}
          />
          {/* Bottom-Right */}
          <span
            className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] transition-colors duration-200 ${
              isHovered ? 'border-[#C4B5FD]' : 'border-[#A78BFA]'
            }`}
          />

          {/* Rotating Orbital Dashed Ring */}
          <svg
            viewBox="0 0 40 40"
            className={`absolute inset-0 w-full h-full animate-spin transition-opacity duration-300 pointer-events-none ${
              isHovered ? 'opacity-90 [animation-duration:6s]' : 'opacity-40 [animation-duration:14s]'
            }`}
          >
            <circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke={isHovered ? '#A78BFA' : '#7C3AED'}
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          </svg>

          {/* Crosshair micro tick marks on hover */}
          {isHovered && (
            <>
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[#C4B5FD]" />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[#C4B5FD]" />
              <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-[#C4B5FD]" />
              <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-[#C4B5FD]" />
            </>
          )}

          {/* Sonar Shockwave on Click */}
          {isClicking && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0.9 }}
              animate={{ scale: 2.6, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border border-[#C4B5FD] bg-[#7C3AED]/25"
            />
          )}
        </motion.div>
      </motion.div>

      {/* ── 2. Real-Time Laser Pinpoint Center Dot & HUD Flight Badge ── */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute pointer-events-none"
      >
        {/* Glowing Center Laser Dot */}
        <motion.div
          animate={{
            scale: isClicking ? 0.6 : isHovered ? 1.4 : 1,
            backgroundColor: isHovered ? '#FFFFFF' : '#A78BFA',
          }}
          transition={{ duration: 0.15 }}
          className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_#7C3AED,0_0_2px_#FFFFFF] border border-white/80"
        />

        {/* Floating Avionics HUD Telemetry Badge */}
        <div
          className={`absolute left-5 top-5 px-2.5 py-1 rounded-[6px] bg-[#08080A]/95 border border-white/15 text-[9px] font-mono text-[#A3A3AE] whitespace-nowrap backdrop-blur-md shadow-[0_4px_18px_rgba(0,0,0,0.85)] transition-all duration-200 flex items-center gap-2 ${
            isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-40 scale-95 translate-y-0.5'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-emerald-400 animate-pulse' : 'bg-[#A78BFA]'}`} />
          <span className="font-semibold tracking-wider text-white">
            {isHovered ? targetType : 'LEO-HUD'}
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[#C4B5FD] font-medium">
            {String(coords.x).padStart(4, '0')} · {String(coords.y).padStart(4, '0')}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

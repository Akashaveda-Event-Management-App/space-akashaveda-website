import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Compass, Radio, Play, Pause } from 'lucide-react';

export type BgEffectMode = 'orbital' | 'hyperspace' | 'radar';

interface HeroSpaceEffectsProps {
  currentMode: BgEffectMode;
  onModeChange: (mode: BgEffectMode) => void;
  autoCycle: boolean;
  onToggleAutoCycle: () => void;
}

/* ══════════════════════════════════════════════════════════════════
   EFFECT 1: ORBITAL TELEMETRY & CONSTELLATION MESH (Orbtrix DISHA)
   - Planetary horizon with Orbtrix elliptical mask & side veil
   - Atmospheric violet monitor bounce (--monitor-bounce)
   - Animated orbital rails with traveling telemetry signal packets (cns-signal)
   - Multi-satellite constellation downlinks and mutual crosslinks
   ══════════════════════════════════════════════════════════════════ */
function OrbitalEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Satellites orbiting along distinct orbital planes
    const satellites = [
      { a: 390, b: 140, angle: 0.2, speed: 0.007, tilt: -0.28, color: '#A78BFA', label: 'LEO-A104', alt: '542 KM', packets: [0, 0.45] },
      { a: 520, b: 185, angle: 2.4, speed: 0.0048, tilt: 0.22, color: '#C4B5FD', label: 'VYUH-MCS-01', alt: '680 KM', packets: [0.2, 0.7] },
      { a: 650, b: 230, angle: 4.1, speed: 0.0034, tilt: -0.14, color: '#7C3AED', label: 'CHAKRA-SSA', alt: '720 KM', packets: [0.1, 0.6] },
    ];

    // Simulated Ground Station node
    const groundStation = { x: 0, y: 0, label: 'GS-BLR-PRIMARY' };

    // Ambient twinkling constellation nodes
    const nodes = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.4 + 0.6,
      alpha: Math.random() * 0.5 + 0.25,
    }));

    let t = 0;
    const render = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.75;
      const cy = height * 0.48;

      groundStation.x = cx - 180;
      groundStation.y = cy + 120;

      // Draw planetary orbit trajectory ellipses with Orbtrix style
      satellites.forEach((sat) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(sat.tilt);

        ctx.beginPath();
        ctx.ellipse(0, 0, sat.a, sat.b, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(167, 139, 250, 0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();

        ctx.restore();
      });

      // Render Ground Station base node
      ctx.save();
      ctx.beginPath();
      ctx.arc(groundStation.x, groundStation.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#A78BFA';
      ctx.shadowColor = '#7C3AED';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Ground station pulse wave
      const gsPulse = 6 + (Math.sin(t * 0.05) + 1) * 8;
      ctx.beginPath();
      ctx.arc(groundStation.x, groundStation.y, gsPulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = '9px ui-monospace, monospace';
      ctx.fillStyle = 'rgba(167, 139, 250, 0.75)';
      ctx.fillText(`◆ ${groundStation.label}`, groundStation.x + 8, groundStation.y + 3);
      ctx.restore();

      const satCoords: { x: number; y: number; color: string }[] = [];

      // Update and draw satellites along orbits
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const cosAngle = Math.cos(sat.angle);
        const sinAngle = Math.sin(sat.angle);

        // Parametric coordinates with tilt
        const rawX = sat.a * cosAngle;
        const rawY = sat.b * sinAngle;
        const cosTilt = Math.cos(sat.tilt);
        const sinTilt = Math.sin(sat.tilt);

        const sx = cx + (rawX * cosTilt - rawY * sinTilt);
        const sy = cy + (rawX * sinTilt + rawY * cosTilt);

        satCoords.push({ x: sx, y: sy, color: sat.color });

        // Traveling telemetry signal packet (cns-signal effect)
        sat.packets.forEach((pOffset) => {
          const packetAngle = sat.angle - pOffset;
          const pxRaw = sat.a * Math.cos(packetAngle);
          const pyRaw = sat.b * Math.sin(packetAngle);
          const px = cx + (pxRaw * cosTilt - pyRaw * sinTilt);
          const py = cy + (pxRaw * sinTilt + pyRaw * cosTilt);

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = sat.color;
          ctx.shadowColor = sat.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // Downlink beam to Ground Station when in visible range
        const distToGS = Math.hypot(sx - groundStation.x, sy - groundStation.y);
        if (distToGS < 380) {
          const beamAlpha = (1 - distToGS / 380) * 0.22;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(groundStation.x, groundStation.y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${beamAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.setLineDash([3, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Orbital ping wave
        const pingRadius = 6 + (Math.sin(t * 0.08 + sat.speed * 100) + 1) * 7;
        ctx.beginPath();
        ctx.arc(sx, sy, pingRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `${sat.color}45`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Satellite Core (Diamond Tick / Dot)
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = sat.color;
        ctx.shadowBlur = 12;
        ctx.fillRect(-3, -3, 6, 6);
        ctx.shadowBlur = 0;
        ctx.restore();

        // Metadata tag
        ctx.font = '9px ui-monospace, monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText(`${sat.label}`, sx + 9, sy - 6);
        ctx.fillStyle = sat.color;
        ctx.fillText(`[${sat.alt} // PASS ACTIVE]`, sx + 9, sy + 6);
      });

      // Inter-satellite Crosslink lines
      for (let i = 0; i < satCoords.length; i++) {
        for (let j = i + 1; j < satCoords.length; j++) {
          const s1 = satCoords[i];
          const s2 = satCoords[j];
          const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);
          if (dist < 420) {
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${(1 - dist / 420) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Ambient constellation nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${n.alpha})`;
        ctx.fill();

        // Inter-node links
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - dist / 85) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">
      {/* ── Orbtrix Atmospheric Monitor Bounce Glow (--monitor-bounce) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 74% 50%, rgba(124, 58, 237, 0.20) 0%, rgba(124, 58, 237, 0.06) 42%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* ── Background Earth Video with Exact Orbtrix Elliptical Radial Mask ── */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
        <video
          src="/bg2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[840px] lg:h-[840px] xl:w-[980px] xl:h-[980px] object-cover opacity-60 brightness-90 contrast-110 translate-x-[15%]"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 62% 66% at 76% 50%, #000 26%, rgba(0, 0, 0, .62) 62%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 62% 66% at 76% 50%, #000 26%, rgba(0, 0, 0, .62) 62%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Orbtrix Signature .dsh-hero-veil Gradient Stack ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #000000 0%, rgba(0, 0, 0, .95) 30%, rgba(0, 0, 0, .66) 46%, rgba(0, 0, 0, .2) 62%, transparent 78%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 78%, rgb(0, 0, 0) 100%)',
        }}
      />

      {/* ── Canvas for Planetary Orbits and Constellation ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   EFFECT 2: HYPERSPACE VECTOR (Deep-Space Flight & Relativistic Stars)
   - 3D warp particle field with speed streaks
   - Real-time mouse parallax steering
   - Rotating concentric aerospace heading compass
   - Violet cosmic nebula horizon glow
   ══════════════════════════════════════════════════════════════════ */
function HyperspaceEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width * 0.5;
    let mouseY = height * 0.5;
    let targetX = width * 0.5;
    let targetY = height * 0.5;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // 3D Particles flying towards screen
    const count = 280;
    const stars = Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * 1000 + 1,
      pz: 1000,
      speed: Math.random() * 9 + 13,
      size: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.4 ? '#A78BFA' : '#FFFFFF',
    }));

    const render = () => {
      // Smooth tracking of warp focus with spring-like easing
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Dark fade trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
      ctx.fillRect(0, 0, width, height);

      const fov = 360;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.pz = s.z;
        s.z -= s.speed;

        // Reset if passed camera plane
        if (s.z <= 0) {
          s.z = 1000;
          s.pz = 1000;
          s.x = (Math.random() - 0.5) * width * 2;
          s.y = (Math.random() - 0.5) * height * 2;
        }

        const k = fov / s.z;
        const px = s.x * k + mouseX;
        const py = s.y * k + mouseY;

        const pk = fov / s.pz;
        const prevX = s.x * pk + mouseX;
        const prevY = s.y * pk + mouseY;

        // Skip if outside canvas
        if (px < 0 || px > width || py < 0 || py > height) continue;

        // Streak line
        const alpha = Math.min(1, (1000 - s.z) / 480);
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(px, py);
        ctx.strokeStyle = s.color === '#FFFFFF' ? `rgba(255, 255, 255, ${alpha})` : `rgba(167, 139, 250, ${alpha})`;
        ctx.lineWidth = Math.min(2.8, (1000 - s.z) / 380 * s.size);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 select-none pointer-events-none overflow-hidden bg-[#000000]">
      {/* ── Atmospheric Nebula Glow ── */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 62% 50%, rgba(124, 58, 237, 0.30) 0%, rgba(18, 18, 22, 0.5) 45%, #000000 75%)',
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* ── Cyber Vector Reticle Overlay with Degrees ── */}
      <div className="absolute right-8 sm:right-20 top-1/2 -translate-y-1/2 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] opacity-25 pointer-events-none">
        <svg viewBox="0 0 480 480" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <circle cx="240" cy="240" r="220" stroke="#A78BFA" strokeWidth="1" strokeDasharray="4 8" fill="none" />
          <circle cx="240" cy="240" r="170" stroke="#7C3AED" strokeWidth="0.8" strokeDasharray="8 12" fill="none" />
          <circle cx="240" cy="240" r="95" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />
          <line x1="20" y1="240" x2="460" y2="240" stroke="#A78BFA" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="240" y1="20" x2="240" y2="460" stroke="#A78BFA" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* ── Side Veil Gradient for Left Content Readability ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.75) 42%, transparent 100%)',
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   EFFECT 3: CYBER RADAR MATRIX (Tactical Aerospace Sensor Sweep)
   - 360° rotating radar beam with phosphor decay
   - Real-time target acquisitions that bloom on beam intercept
   - Range rings: 250km, 500km, 750km, 1000km
   - Tactical hex coordinate matrix
   ══════════════════════════════════════════════════════════════════ */
function RadarEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    let angle = 0;

    // Tactical target blips
    const targets = [
      { dist: 130, theta: 0.8, name: 'ISRO-LEO-01', type: 'ACTIVE_TELEMETRY' },
      { dist: 220, theta: 2.3, name: 'SSA-DEBRIS-88', type: 'COLLISION_MONITOR' },
      { dist: 310, theta: 4.1, name: 'GS-BLR-PRIMARY', type: 'CARRIER_LOCKED' },
      { dist: 270, theta: 5.4, name: 'VYUH-RELAY-02', type: 'OPTICAL_CROSSLINK' },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.74;
      const cy = height * 0.5;
      const maxRadius = Math.min(width * 0.42, 390);

      // Radar Concentric Range Rings
      const rings = [0.25, 0.5, 0.75, 1.0];
      rings.forEach((rRatio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, maxRadius * rRatio, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(167, 139, 250, 0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash(rRatio === 1.0 ? [] : [3, 6]);
        ctx.stroke();

        // Distance text in JetBrains Mono
        ctx.font = '9px ui-monospace, monospace';
        ctx.fillStyle = 'rgba(167, 139, 250, 0.5)';
        ctx.fillText(`${Math.round(rRatio * 1000)} KM`, cx + maxRadius * rRatio + 6, cy - 4);
      });

      // Cardinal crosshairs
      ctx.beginPath();
      ctx.moveTo(cx - maxRadius, cy);
      ctx.lineTo(cx + maxRadius, cy);
      ctx.moveTo(cx, cy - maxRadius);
      ctx.lineTo(cx, cy + maxRadius);
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rotating Sweep Beam
      angle += 0.022;
      const sweepAngle = 0.4;

      // Draw phosphor gradient arc
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, maxRadius);
      grad.addColorStop(0, 'rgba(124, 58, 237, 0.38)');
      grad.addColorStop(1, 'rgba(167, 139, 250, 0.02)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxRadius, angle - sweepAngle, angle);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Main sweep leading line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxRadius * Math.cos(angle), cy + maxRadius * Math.sin(angle));
      ctx.strokeStyle = 'rgba(196, 181, 253, 0.85)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Target blips on radar
      targets.forEach((tgt) => {
        const tx = cx + tgt.dist * Math.cos(tgt.theta);
        const ty = cy + tgt.dist * Math.sin(tgt.theta);

        // Calculate proximity of sweep beam to target
        const diff = (angle - tgt.theta + Math.PI * 2) % (Math.PI * 2);
        const intensity = diff < sweepAngle ? 1 - diff / sweepAngle : Math.max(0.15, 1 - diff / 4);

        // Target dot
        ctx.beginPath();
        ctx.arc(tx, ty, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${intensity})`;
        ctx.shadowColor = '#7C3AED';
        ctx.shadowBlur = intensity * 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Expanded target ring when scanned
        if (intensity > 0.4) {
          ctx.beginPath();
          ctx.arc(tx, ty, 8 * (1.8 - intensity), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(167, 139, 250, ${intensity * 0.6})`;
          ctx.stroke();

          ctx.font = '9px ui-monospace, monospace';
          ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
          ctx.fillText(`[${tgt.name}]`, tx + 9, ty - 2);
          ctx.fillStyle = `rgba(167, 139, 250, ${intensity * 0.8})`;
          ctx.fillText(`${tgt.type}`, tx + 9, ty + 8);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 select-none pointer-events-none overflow-hidden bg-[#000000]">
      {/* ── Tactical Hex Grid Background Pattern ── */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#121216_1px,transparent_1px)] [background-size:2.5rem_2.5rem] opacity-35" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* ── Orbtrix Side Veil Gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.85) 45%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, #000000 0%, transparent 60%)',
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   BACKGROUND RENDERER (Cleanly isolated, zero navbar overlap)
   ══════════════════════════════════════════════════════════════════ */
export default function HeroSpaceEffects({
  currentMode,
}: {
  currentMode: BgEffectMode;
}) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <AnimatePresence mode="wait">
        {currentMode === 'orbital' && (
          <motion.div
            key="orbital"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <OrbitalEffect />
          </motion.div>
        )}

        {currentMode === 'hyperspace' && (
          <motion.div
            key="hyperspace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <HyperspaceEffect />
          </motion.div>
        )}

        {currentMode === 'radar' && (
          <motion.div
            key="radar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <RadarEffect />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   VISUALIZER CONTROLS COMPONENT (Positioned right above HUD card)
   ══════════════════════════════════════════════════════════════════ */
export function HeroVisualizerControls({
  currentMode,
  onModeChange,
  autoCycle,
  onToggleAutoCycle,
}: HeroSpaceEffectsProps) {
  const modes: { id: BgEffectMode; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'orbital', label: '01 · ORBITAL', icon: Globe },
    { id: 'hyperspace', label: '02 · HYPERSPACE', icon: Compass },
    { id: 'radar', label: '03 · RADAR', icon: Radio },
  ];

  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <div className="flex items-center gap-1 p-1 bg-[#08080A]/95 border border-white/10 rounded-full backdrop-blur-xl shadow-lg">
        {modes.map((m) => {
          const Icon = m.icon;
          const isActive = currentMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onModeChange(m.id)}
              className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                isActive ? 'text-white' : 'text-[#A3A3AE] hover:text-white'
              }`}
              aria-pressed={isActive}
            >
              {isActive && (
                <motion.div
                  layoutId="activeHeroBgMode"
                  className="absolute inset-0 bg-[#7C3AED] rounded-full -z-10 shadow-[0_0_12px_rgba(124,58,237,0.4)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <Icon className="w-3 h-3" />
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onToggleAutoCycle}
        title={autoCycle ? 'Pause auto-cycle' : 'Enable auto-cycle'}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#08080A]/90 border border-white/10 text-[9px] font-mono text-[#A3A3AE] hover:text-[#A78BFA] transition-colors flex-shrink-0"
      >
        {autoCycle ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">CYCLE: ON</span>
            <Pause className="w-3 h-3 text-[#A78BFA]" />
          </>
        ) : (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="hidden sm:inline">PAUSED</span>
            <Play className="w-3 h-3 text-[#A3A3AE]" />
          </>
        )}
      </button>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/* ── 1. Interactive 3D Wireframe Orbit Globe ──────────── */
export const Orbit3DGlobe: React.FC<{ size?: number; className?: string }> = ({
  size = 280,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    let rotation = 0;

    // Generate 3D sphere dots (latitude & longitude)
    const points: { x: number; y: number; z: number }[] = [];
    const numLats = 14;
    const numLons = 24;
    const radius = size * 0.38;

    for (let i = 0; i < numLats; i++) {
      const lat = (Math.PI * (i + 1)) / (numLats + 1) - Math.PI / 2;
      for (let j = 0; j < numLons; j++) {
        const lon = (2 * Math.PI * j) / numLons;
        points.push({
          x: radius * Math.cos(lat) * Math.cos(lon),
          y: radius * Math.sin(lat),
          z: radius * Math.cos(lat) * Math.sin(lon),
        });
      }
    }

    // Orbiting satellites
    const satellites = Array.from({ length: 4 }).map((_, i) => ({
      angle: (i * Math.PI) / 2,
      speed: 0.015 + i * 0.005,
      tilt: (i * Math.PI) / 6 - Math.PI / 12,
      radius: radius * 1.35,
    }));

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;

      rotation += 0.008;

      // Draw atmosphere glow
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius * 1.4);
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      grad.addColorStop(0.7, 'rgba(6, 182, 212, 0.05)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Sort points by Z depth
      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);

      const projected = points.map((p) => {
        // Rotate around Y axis
        const x1 = p.x * cosR - p.z * sinR;
        const z1 = p.x * sinR + p.z * cosR;

        // Slight 3D tilt around X axis
        const tiltAngle = 0.35;
        const y2 = p.y * Math.cos(tiltAngle) - z1 * Math.sin(tiltAngle);
        const z2 = p.y * Math.sin(tiltAngle) + z1 * Math.cos(tiltAngle);

        const scale = 260 / (260 - z2);
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          z: z2,
          alpha: Math.max(0.1, (z2 + radius) / (2 * radius)),
        };
      });

      projected.sort((a, b) => a.z - b.z);

      // Draw 3D Globe dots
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.z > 0 ? 1.4 : 0.9, 0, Math.PI * 2);
        ctx.fillStyle = p.z > 0 ? `rgba(96, 165, 250, ${p.alpha * 0.85})` : `rgba(255, 255, 255, ${p.alpha * 0.25})`;
        ctx.fill();
      });

      // Draw Satellite Orbit Rings & Satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const sx = Math.cos(sat.angle) * sat.radius;
        const sz = Math.sin(sat.angle) * sat.radius;
        const sy = Math.sin(sat.angle * 2) * 15;

        const scale = 260 / (260 - sz);
        const spx = cx + sx * scale;
        const spy = cy + sy * scale;

        // Draw satellite dot with pulse ring
        ctx.beginPath();
        ctx.arc(spx, spy, 3, 0, Math.PI * 2);
        ctx.fillStyle = sz > 0 ? '#38BDF8' : 'rgba(56, 189, 248, 0.4)';
        ctx.fill();

        if (sz > 0) {
          ctx.beginPath();
          ctx.arc(spx, spy, 7, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

    };

    gsap.ticker.add(render);

    return () => gsap.ticker.remove(render);
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} width={size} height={size} />
    </div>
  );
};

/* ── 2. 3D Card Tilt Wrapper ──────────────────────────── */
interface Parallax3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export const Parallax3DCard: React.FC<Parallax3DCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

/* ── 3. 3D Tactical Radar Sweep Widget ───────────────── */
export const Radar3DSweep: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-48 h-48 rounded-full border border-blue-500/20 bg-black/40 backdrop-blur-md flex items-center justify-center overflow-hidden ${className}`}>
      {/* Concentric radar rings */}
      <div className="absolute w-36 h-36 rounded-full border border-blue-500/15" />
      <div className="absolute w-24 h-24 rounded-full border border-cyan-500/15" />
      <div className="absolute w-12 h-12 rounded-full border border-white/10" />

      {/* Crosshair grid lines */}
      <div className="absolute w-full h-[1px] bg-white/10" />
      <div className="absolute h-full w-[1px] bg-white/10" />

      {/* Rotating sweep laser gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 origin-center"
        style={{
          background: 'conic-gradient(from 0deg, rgba(56, 189, 248, 0.4) 0deg, rgba(56, 189, 248, 0) 60deg, transparent 360deg)',
        }}
      />

      {/* Blinking satellite targets */}
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute top-10 right-12 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38BDF8]"
      />
      <motion.div
        animate={{ opacity: [0.9, 0.3, 0.9] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-12 left-10 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]"
      />
    </div>
  );
};

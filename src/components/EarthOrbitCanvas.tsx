import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface EarthModelProps {
  mousePosition: { x: number; y: number };
}

function EarthModel({ mousePosition }: EarthModelProps) {
  const gltf = useGLTF('/earth_orbit/scene.gltf');
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0.15, y: 0 });

  // Clone scene so multiple instances don't conflict
  const scene = useMemo(() => gltf.scene.clone(), [gltf.scene]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Base continuous orbital rotation
    targetRotation.current.y += delta * 0.18;

    // Mouse parallax target
    const targetX = 0.15 + mousePosition.y * 0.35;
    const targetY = targetRotation.current.y + mousePosition.x * 0.45;

    // Smooth lerp for buttery parallax physics
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
  });

  return (
    <group ref={groupRef} scale={0.038} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the GLTF model so it loads instantly
useGLTF.preload('/earth_orbit/scene.gltf');

function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-2 border-blue-500/20 border-t-blue-400 rounded-full animate-spin" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
          INITIALIZING 3D ORBIT...
        </span>
      </div>
    </Html>
  );
}

// Background orbital star particles
function OrbitParticles({ count = 80 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#93C5FD"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

interface EarthOrbitCanvasProps {
  className?: string;
  height?: string | number;
}

export const EarthOrbitCanvas: React.FC<EarthOrbitCanvasProps> = ({
  className = '',
  height = '360px',
}) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ height }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-5, -2, -3]} intensity={0.3} color="#1e3a8a" />
        <pointLight position={[0, 0, 3]} intensity={0.4} color="#60a5fa" />

        <Suspense fallback={<CanvasLoader />}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <EarthModel mousePosition={mousePos} />
            <OrbitParticles count={90} />
          </Float>
        </Suspense>
      </Canvas>

      {/* Subtle overlay HUD badge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400/80 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          INTERACTIVE 3D LEO TELEMETRY MODEL
        </span>
      </div>
    </div>
  );
};

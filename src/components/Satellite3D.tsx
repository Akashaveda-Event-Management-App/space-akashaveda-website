import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Orbit, Compass, Zap } from 'lucide-react';

interface Satellite3DProps {
  className?: string;
}

export default function Satellite3D({ className = '' }: Satellite3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // ── Scene, Camera & WebGL Renderer ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // ── Lighting Architecture (Sunlight & Earth Albedo) ──
    // Key Sun Light (harsh specular space lighting)
    const sunLight = new THREE.DirectionalLight(0xffffff, 3.2);
    sunLight.position.set(6, 5, 4);
    scene.add(sunLight);

    // Earth Albedo Fill Light (cyan/blue atmospheric reflection from below)
    const earthAlbedo = new THREE.DirectionalLight(0x47b2e4, 1.2);
    earthAlbedo.position.set(-3, -5, 2);
    scene.add(earthAlbedo);

    // Rim Backlight for silhouette separation against space
    const rimLight = new THREE.DirectionalLight(0x7ccced, 0.8);
    rimLight.position.set(0, 3, -5);
    scene.add(rimLight);

    // Space Ambient
    const ambientLight = new THREE.AmbientLight(0x0e1626, 0.8);
    scene.add(ambientLight);

    // ── Satellite Model Construction ──
    const satelliteGroup = new THREE.Group();
    scene.add(satelliteGroup);

    // Initial slight angle
    satelliteGroup.rotation.x = 0.25;
    satelliteGroup.rotation.y = -0.55;

    // 1. Central Spacecraft Bus (Hexagonal Prism / Cubesat Bus)
    // Multi-Layer Insulation (MLI) Gold Foil Material
    const goldMliMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfa62a,
      metalness: 0.85,
      roughness: 0.25,
      bumpScale: 0.05,
    });

    const silverThermalMaterial = new THREE.MeshStandardMaterial({
      color: 0xdde6ed,
      metalness: 0.9,
      roughness: 0.2,
    });

    const darkAvionicsMaterial = new THREE.MeshStandardMaterial({
      color: 0x1b2430,
      metalness: 0.8,
      roughness: 0.3,
    });

    // Bus Main Body
    const busGeometry = new THREE.BoxGeometry(1.1, 1.3, 1.1);
    const busMesh = new THREE.Mesh(busGeometry, goldMliMaterial);
    satelliteGroup.add(busMesh);

    // Thermal Radiator Plates on sides
    const radiatorGeo = new THREE.BoxGeometry(1.12, 1.1, 0.05);
    const radiatorMesh1 = new THREE.Mesh(radiatorGeo, silverThermalMaterial);
    radiatorMesh1.position.z = 0.54;
    satelliteGroup.add(radiatorMesh1);

    const radiatorMesh2 = new THREE.Mesh(radiatorGeo, silverThermalMaterial);
    radiatorMesh2.position.z = -0.54;
    satelliteGroup.add(radiatorMesh2);

    // Avionics Top & Bottom Equipment Decks
    const deckGeo = new THREE.BoxGeometry(1.16, 0.06, 1.16);
    const topDeck = new THREE.Mesh(deckGeo, darkAvionicsMaterial);
    topDeck.position.y = 0.67;
    satelliteGroup.add(topDeck);

    const bottomDeck = new THREE.Mesh(deckGeo, darkAvionicsMaterial);
    bottomDeck.position.y = -0.67;
    satelliteGroup.add(bottomDeck);

    // 2. Solar Array Wings (Deployable Double-Wing System)
    const solarWingGroup = new THREE.Group();
    satelliteGroup.add(solarWingGroup);

    const solarCellMaterial = new THREE.MeshStandardMaterial({
      color: 0x092244,
      metalness: 0.8,
      roughness: 0.15,
      emissive: 0x071b30,
      emissiveIntensity: 0.3,
    });

    const panelFrameMaterial = new THREE.MeshStandardMaterial({
      color: 0x273549,
      metalness: 0.7,
      roughness: 0.4,
    });

    const boomMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.2,
    });

    // Function to create one articulated solar array wing
    const createSolarWing = (direction: 1 | -1) => {
      const wing = new THREE.Group();

      // Connector boom
      const boomGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.65, 12);
      const boom = new THREE.Mesh(boomGeo, boomMaterial);
      boom.rotation.z = Math.PI / 2;
      boom.position.x = direction * 0.85;
      wing.add(boom);

      // Panel Arrays (3 foldable segment cells per wing)
      const segments = 3;
      const segWidth = 0.62;
      const segHeight = 0.88;
      const segThickness = 0.025;

      for (let i = 0; i < segments; i++) {
        const segGroup = new THREE.Group();
        const posX = direction * (1.25 + i * 0.68);
        segGroup.position.x = posX;

        // Frame
        const frameGeo = new THREE.BoxGeometry(segWidth, segHeight, segThickness);
        const frame = new THREE.Mesh(frameGeo, panelFrameMaterial);
        segGroup.add(frame);

        // Front Solar Cells Face
        const cellGeo = new THREE.PlaneGeometry(segWidth * 0.92, segHeight * 0.92);
        const cells = new THREE.Mesh(cellGeo, solarCellMaterial);
        cells.position.z = segThickness / 2 + 0.002;
        segGroup.add(cells);

        // Back Gold/Kapton Foil Face
        const backCells = new THREE.Mesh(cellGeo, goldMliMaterial);
        backCells.rotation.y = Math.PI;
        backCells.position.z = -(segThickness / 2 + 0.002);
        segGroup.add(backCells);

        wing.add(segGroup);
      }

      return wing;
    };

    const leftWing = createSolarWing(1);
    const rightWing = createSolarWing(-1);
    solarWingGroup.add(leftWing);
    solarWingGroup.add(rightWing);

    // 3. High-Gain Communications Dish Antenna
    const dishGroup = new THREE.Group();
    dishGroup.position.set(0, 0.15, 0.7);
    dishGroup.rotation.x = 0.45;
    dishGroup.rotation.y = 0.35;
    satelliteGroup.add(dishGroup);

    // Dish Support Gimbal Arm
    const gimbalGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.4, 12);
    const gimbal = new THREE.Mesh(gimbalGeo, boomMaterial);
    gimbal.position.z = -0.15;
    gimbal.rotation.x = Math.PI / 2;
    dishGroup.add(gimbal);

    // Parabolic Reflector Dish (Lathe/Sphere geometry)
    const dishRadius = 0.68;
    const dishGeo = new THREE.SphereGeometry(
      dishRadius,
      32,
      16,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.32
    );

    const dishMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.3,
      roughness: 0.25,
      side: THREE.DoubleSide,
    });

    const dishMesh = new THREE.Mesh(dishGeo, dishMaterial);
    dishMesh.rotation.x = Math.PI;
    dishGroup.add(dishMesh);

    // Sub-reflector Feed Horn and Tripod Struts
    const feedHubGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.12, 16);
    const feedHub = new THREE.Mesh(feedHubGeo, goldMliMaterial);
    feedHub.position.z = 0.36;
    feedHub.rotation.x = Math.PI / 2;
    dishGroup.add(feedHub);

    // Tripod Struts
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const strutLength = 0.46;
      const strutGeo = new THREE.CylinderGeometry(0.012, 0.012, strutLength, 8);
      const strut = new THREE.Mesh(strutGeo, boomMaterial);
      strut.position.set(
        Math.cos(angle) * 0.22,
        Math.sin(angle) * 0.22,
        0.18
      );
      strut.rotation.z = angle + Math.PI / 2;
      strut.rotation.x = 0.6;
      dishGroup.add(strut);
    }

    // 4. Downlink Telemetry Signal Pulse Wave Rings
    const pulseRingCount = 3;
    const pulseRings: THREE.Mesh[] = [];
    const ringGeo = new THREE.RingGeometry(0.08, 0.12, 32);

    for (let i = 0; i < pulseRingCount; i++) {
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x47b2e4,
        transparent: true,
        opacity: 0.0,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.z = 0.45;
      dishGroup.add(ring);
      pulseRings.push(ring);
    }

    // 5. Attitude Control Thrusters (4 corners)
    const thrusterGeo = new THREE.ConeGeometry(0.06, 0.14, 12);
    const thrusterMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.9,
      roughness: 0.2,
    });

    const corners = [
      [-0.45, -0.68, -0.45],
      [0.45, -0.68, -0.45],
      [-0.45, -0.68, 0.45],
      [0.45, -0.68, 0.45],
    ];

    corners.forEach(([x, y, z]) => {
      const thruster = new THREE.Mesh(thrusterGeo, thrusterMat);
      thruster.position.set(x, y - 0.06, z);
      satelliteGroup.add(thruster);
    });

    // 6. Star Trackers & Optical Sensors
    const trackerGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.16, 16);
    const tracker1 = new THREE.Mesh(trackerGeo, darkAvionicsMaterial);
    tracker1.position.set(0.35, 0.72, 0.2);
    tracker1.rotation.x = 0.3;
    satelliteGroup.add(tracker1);

    const tracker2 = new THREE.Mesh(trackerGeo, darkAvionicsMaterial);
    tracker2.position.set(-0.35, 0.72, -0.2);
    tracker2.rotation.x = -0.3;
    satelliteGroup.add(tracker2);

    // ── Interactive Drag & Smooth Inertia Controls ──
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0.25;
    let targetRotationY = -0.55;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      rotationVelocityX = 0;
      rotationVelocityY = 0;
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      rotationVelocityY = deltaX * 0.005;
      rotationVelocityX = deltaY * 0.005;

      targetRotationY += rotationVelocityY;
      targetRotationX += rotationVelocityX;

      // Clamp X rotation to prevent flipping upside down
      targetRotationX = Math.max(-1.2, Math.min(1.2, targetRotationX));
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      setIsInteracting(false);
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        // Ignored
      }
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);

    // ── Animation Loop ──
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle auto-rotation when user is not dragging
      if (!isDragging) {
        targetRotationY += 0.0025;
      }

      // Smooth damping interpolation (lerp)
      satelliteGroup.rotation.y += (targetRotationY - satelliteGroup.rotation.y) * 0.08;
      satelliteGroup.rotation.x += (targetRotationX - satelliteGroup.rotation.x) * 0.08;

      // Gentle orbital micro-bobbing motion
      satelliteGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;

      // Animate downlink telemetry waves radiating from the dish
      pulseRings.forEach((ring, idx) => {
        const ringTime = (elapsedTime * 0.75 + idx / pulseRingCount) % 1;
        const scale = 1 + ringTime * 2.8;
        ring.scale.set(scale, scale, 1);
        ring.position.z = 0.45 + ringTime * 0.9;
        const mat = ring.material as THREE.MeshBasicMaterial;
        mat.opacity = (1 - ringTime) * 0.75;
      });

      renderer.render(scene, camera);
    };

    animate();

    // ── Responsive Resize Observer ──
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center select-none ${className}`}
    >
      {/* 3D WebGL Canvas (Borderless & Transparent) */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full touch-none ${
          isInteracting ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        title="Interactive 3D Spacecraft Bus - Click and drag to inspect"
      />

      {/* Subtle Aerospace Reticle Corner Accents */}
      <div className="absolute top-2 left-2 pointer-events-none text-white/30 text-[9px] font-mono flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#47B2E4] animate-pulse" />
        <span className="text-[#7CCCED]">LEO FLIGHT SEGMENT // 3D ASSET</span>
      </div>

      <div className="absolute bottom-2 inset-x-2 sm:inset-x-auto sm:right-2 pointer-events-none flex items-center justify-between sm:justify-end gap-3 text-[10px] font-mono text-[#94A3B8]">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#030610]/80 backdrop-blur-sm border border-white/10">
          <Compass className="w-3 h-3 text-[#47B2E4]" />
          <span>DRAG TO ROTATE</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#030610]/80 backdrop-blur-sm border border-white/10">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>DOWNLINK ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

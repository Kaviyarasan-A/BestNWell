"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function WireIco() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x += delta * 0.08;
  });
  return (
    <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.25;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.55, 2]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.4}
        metalness={0.95}
        roughness={0.1}
      />
    </mesh>
  );
}

function NodeCloud() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
  });

  const nodes = useMemo(() => {
    const arr: { pos: [number, number, number]; color: string }[] = [];
    const colors = ["#22d3ee", "#ec4899", "#34d399", "#a172ff", "#facc15"];
    const count = 20;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.1;
      arr.push({
        pos: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi),
        ],
        color: colors[i % colors.length],
      });
    }
    return arr;
  }, []);

  return (
    <group ref={ref}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={n.color} />
        </mesh>
      ))}
    </group>
  );
}

function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null);

  const { positions, indices } = useMemo(() => {
    const points: number[] = [];
    const idx: number[] = [];
    const nodeCount = 20;
    const positions3d: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 2.1;
      positions3d.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      );
    }
    positions3d.forEach((p) => points.push(p.x, p.y, p.z));
    for (let i = 0; i < nodeCount; i++) {
      const a = positions3d[i];
      let nearest = -1;
      let nearestDist = Infinity;
      for (let j = 0; j < nodeCount; j++) {
        if (i === j) continue;
        const d = a.distanceTo(positions3d[j]);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = j;
        }
      }
      if (nearest !== -1) {
        idx.push(i, nearest);
      }
    }
    return { positions: new Float32Array(points), indices: new Uint16Array(idx) };
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="index" args={[indices, 1]} />
      </bufferGeometry>
      <lineBasicMaterial color="#7c3aed" transparent opacity={0.4} />
    </lineSegments>
  );
}

export default function AboutScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#05060f"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#7c3aed" />
      <pointLight position={[-4, -4, 2]} intensity={1.5} color="#22d3ee" />

      <WireIco />
      <CoreSphere />
      <NodeCloud />
      <ConnectionLines />

      <Sparkles count={30} size={2} scale={[5, 5, 5]} color="#ffffff" speed={0.2} opacity={0.5} />
    </Canvas>
  );
}

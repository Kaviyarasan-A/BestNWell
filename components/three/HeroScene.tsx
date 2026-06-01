"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x += delta * 0.08;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.3, 6]} />
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.3}
          speed={2}
          roughness={0.15}
          metalness={0.9}
          emissive="#5a1fc7"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

function WireShell() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.12;
    ref.current.rotation.z += delta * 0.08;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.85, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function OrbitRing({
  radius,
  color,
  speed,
  tilt,
}: {
  radius: number;
  color: string;
  speed: number;
  tilt: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.008, 12, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.65} />
    </mesh>
  );
}

function FloatingDots() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
  });
  const positions = [
    { p: [2.4, 0.8, 0.2] as [number, number, number], c: "#22d3ee" },
    { p: [-2.5, -0.6, 0.4] as [number, number, number], c: "#ec4899" },
    { p: [2.3, -1.2, -0.5] as [number, number, number], c: "#34d399" },
    { p: [-2.2, 1.4, -0.3] as [number, number, number], c: "#facc15" },
    { p: [0, 2.3, -0.4] as [number, number, number], c: "#a172ff" },
    { p: [0, -2.3, 0.3] as [number, number, number], c: "#22d3ee" },
  ];
  return (
    <group ref={ref}>
      {positions.map((d, i) => (
        <Float key={i} speed={1.4} rotationIntensity={0.5} floatIntensity={0.7}>
          <mesh position={d.p}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={d.c} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#05060f"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2.5} color="#7c3aed" />
      <pointLight position={[-5, -5, 3]} intensity={2} color="#22d3ee" />
      <pointLight position={[0, 3, 4]} intensity={1} color="#ec4899" />

      <CoreOrb />
      <WireShell />
      <OrbitRing radius={2.4} color="#22d3ee" speed={0.4} tilt={[Math.PI / 2.4, 0, 0]} />
      <OrbitRing radius={2.7} color="#7c3aed" speed={-0.3} tilt={[Math.PI / 3, 0.6, 0]} />
      <OrbitRing radius={3.1} color="#ec4899" speed={0.2} tilt={[Math.PI / 2, 1.2, 0]} />

      <FloatingDots />

      <Sparkles count={50} size={2.5} scale={[7, 7, 7]} speed={0.3} color="#ffffff" opacity={0.6} />
    </Canvas>
  );
}

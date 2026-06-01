"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const techs = [
  "React",
  "Next.js",
  "Flutter",
  "Node",
  "AI",
  "AWS",
  "TS",
  "Mongo",
  "Cloud",
  "Docker",
  "GPT",
  "Stripe",
];

const colors = ["#7c3aed", "#22d3ee", "#ec4899", "#34d399", "#facc15", "#a172ff"];

function TechCube({
  position,
  label,
  color,
  speed,
}: {
  position: [number, number, number];
  label: string;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x += delta * speed * 0.7;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={ref} position={position}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.25}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh>
          <boxGeometry args={[0.62, 0.62, 0.62]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
        </mesh>
        <Text
          position={[0, 0, 0.32]}
          fontSize={0.13}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

function Cluster() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.1;
  });

  const cubes = useMemo(() => {
    return techs.map((t, i) => {
      const phi = Math.acos(-1 + (2 * i) / techs.length);
      const theta = Math.sqrt(techs.length * Math.PI) * phi;
      const r = 2.4;
      return {
        label: t,
        position: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi),
        ] as [number, number, number],
        color: colors[i % colors.length],
        speed: 0.4 + Math.random() * 0.6,
      };
    });
  }, []);

  return (
    <group ref={ref}>
      {cubes.map((c, i) => (
        <TechCube key={i} {...c} />
      ))}
    </group>
  );
}

export default function TechCloud() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 55 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.8} color="#7c3aed" />
      <pointLight position={[-5, -3, 5]} intensity={1.5} color="#22d3ee" />
      <Cluster />
      <Sparkles count={70} size={2} scale={[6, 6, 6]} color="#ffffff" />
    </Canvas>
  );
}

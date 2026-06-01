"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function WireGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 48, 48]} />
      <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function SolidGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.55, 64, 64]} />
      <meshStandardMaterial
        color="#0b0d1d"
        emissive="#1a0a4a"
        emissiveIntensity={0.4}
        metalness={0.9}
        roughness={0.3}
      />
    </mesh>
  );
}

function ConnectionPoints() {
  const ref = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const arr: { pos: [number, number, number]; color: string }[] = [];
    const colors = ["#22d3ee", "#ec4899", "#34d399", "#facc15", "#a172ff"];
    for (let i = 0; i < 25; i++) {
      const phi = Math.acos(-1 + (2 * i) / 25);
      const theta = Math.sqrt(25 * Math.PI) * phi;
      const r = 1.62;
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

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={ref}>
      {points.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[0.025, 12, 12]} />
          <meshBasicMaterial color={p.color} />
        </mesh>
      ))}
    </group>
  );
}

function Arc({
  from,
  to,
  color,
}: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  color: string;
}) {
  const curve = useMemo(() => {
    const mid = new THREE.Vector3()
      .addVectors(from, to)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(2.6);
    return new THREE.QuadraticBezierCurve3(from, mid, to);
  }, [from, to]);

  const geom = useMemo(() => {
    const points = curve.getPoints(40);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [curve]);

  return (
    <line>
      <primitive object={geom} attach="geometry" />
      <lineBasicMaterial color={color} transparent opacity={0.55} />
    </line>
  );
}

function Arcs() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.1;
  });
  const arcs = useMemo(() => {
    const items: { from: THREE.Vector3; to: THREE.Vector3; color: string }[] =
      [];
    const colors = ["#22d3ee", "#ec4899", "#a172ff", "#34d399"];
    const r = 1.62;
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = Math.random() * Math.PI * 2;
      const ay = Math.random() * Math.PI - Math.PI / 2;
      const by = Math.random() * Math.PI - Math.PI / 2;
      items.push({
        from: new THREE.Vector3(
          r * Math.cos(ay) * Math.cos(a),
          r * Math.sin(ay),
          r * Math.cos(ay) * Math.sin(a)
        ),
        to: new THREE.Vector3(
          r * Math.cos(by) * Math.cos(b),
          r * Math.sin(by),
          r * Math.cos(by) * Math.sin(b)
        ),
        color: colors[i % colors.length],
      });
    }
    return items;
  }, []);

  return (
    <group ref={ref}>
      {arcs.map((a, i) => (
        <Arc key={i} from={a.from} to={a.to} color={a.color} />
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 5]} intensity={2} color="#7c3aed" />
      <pointLight position={[-3, -3, 5]} intensity={2} color="#22d3ee" />

      <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.3}>
        <SolidGlobe />
        <WireGlobe />
        <ConnectionPoints />
        <Arcs />
      </Float>

      <Sparkles count={60} size={2} scale={[5, 5, 5]} color="#ffffff" speed={0.3} />
    </Canvas>
  );
}

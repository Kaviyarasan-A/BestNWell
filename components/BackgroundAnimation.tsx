"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Dot = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

type Glyph = {
  id: number;
  ch: string;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotate: number;
};

const SYMBOLS = ["{", "}", "<", ">", "/>", "()", "=>", "[]", ";", "//", "**", "&&", "||", "===", "...", "?:", "1010", "0x1F", "fn()", "λ"];

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);
  const [dots, setDots] = useState<Dot[]>([]);
  const [glyphs, setGlyphs] = useState<Glyph[]>([]);
  const [vh, setVh] = useState(900);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    setVh(window.innerHeight);

    setDots(
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 18 + Math.random() * 14,
        delay: Math.random() * 20,
        opacity: 0.12 + Math.random() * 0.2,
      }))
    );

    setGlyphs(
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        ch: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        left: Math.random() * 95,
        top: Math.random() * 100,
        size: 12 + Math.random() * 14,
        duration: 22 + Math.random() * 22,
        delay: Math.random() * 15,
        opacity: 0.08 + Math.random() * 0.1,
        rotate: -20 + Math.random() * 40,
      }))
    );

    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);

    let raf = 0;
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMouse);

    const tick = () => {
      setMouse((prev) => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.06,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.06,
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-fx fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base warm gradient wash */}
      <div className="absolute inset-0 bg-warm-glow" />

      {/* Antigravity-style morphing SVG mesh */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="meshA" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4633E" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#C4633E" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="meshB" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E89172" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#E89172" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="meshC" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4A276" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#D4A276" stopOpacity="0" />
          </radialGradient>
          <filter id="blurry">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>

        <motion.path
          fill="url(#meshA)"
          filter="url(#blurry)"
          animate={{
            d: [
              "M 300 200 C 500 100, 700 150, 900 300 C 1000 500, 800 700, 600 650 C 400 600, 200 500, 250 350 Z",
              "M 350 250 C 550 120, 750 200, 850 400 C 950 550, 750 750, 550 700 C 350 650, 150 450, 300 280 Z",
              "M 280 180 C 480 120, 720 130, 920 280 C 1020 480, 820 680, 620 620 C 420 580, 220 480, 270 330 Z",
              "M 300 200 C 500 100, 700 150, 900 300 C 1000 500, 800 700, 600 650 C 400 600, 200 500, 250 350 Z",
            ],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)` }}
        />

        <motion.path
          fill="url(#meshB)"
          filter="url(#blurry)"
          animate={{
            d: [
              "M 800 50 C 1000 0, 1200 100, 1200 300 C 1200 450, 1100 550, 950 500 C 800 450, 700 300, 750 150 Z",
              "M 850 100 C 1050 30, 1200 180, 1180 350 C 1160 500, 1080 580, 920 530 C 760 480, 680 320, 770 180 Z",
              "M 820 70 C 1020 10, 1210 130, 1210 320 C 1210 470, 1090 560, 940 520 C 790 480, 710 320, 760 160 Z",
              "M 800 50 C 1000 0, 1200 100, 1200 300 C 1200 450, 1100 550, 950 500 C 800 450, 700 300, 750 150 Z",
            ],
          }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ transform: `translate(${mouse.x * -20}px, ${mouse.y * 20}px)` }}
        />

        <motion.path
          fill="url(#meshC)"
          filter="url(#blurry)"
          animate={{
            d: [
              "M 0 500 C 200 450, 400 550, 450 700 C 470 800, 200 850, 50 800 C -50 750, -50 600, 0 500 Z",
              "M 0 520 C 220 470, 420 580, 470 720 C 490 810, 220 870, 40 820 C -60 760, -50 620, 10 510 Z",
              "M 0 490 C 180 440, 380 540, 440 690 C 460 800, 190 840, 60 790 C -40 740, -50 600, 0 490 Z",
              "M 0 500 C 200 450, 400 550, 450 700 C 470 800, 200 850, 50 800 C -50 750, -50 600, 0 500 Z",
            ],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          style={{ transform: `translate(${mouse.x * 15}px, ${mouse.y * -25}px)` }}
        />
      </svg>

      {/* Circuit-board SVG pattern (subtle tech feel) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit"
            patternUnits="userSpaceOnUse"
            width="160"
            height="160"
          >
            <path
              d="M 20 20 L 80 20 L 80 60 L 140 60 M 20 100 L 60 100 L 60 140 M 100 20 L 100 80 L 140 80"
              fill="none"
              stroke="#C4633E"
              strokeWidth="1"
            />
            <circle cx="20" cy="20" r="2.5" fill="#C4633E" />
            <circle cx="80" cy="60" r="2.5" fill="#C4633E" />
            <circle cx="140" cy="60" r="2.5" fill="#C4633E" />
            <circle cx="60" cy="100" r="2.5" fill="#C4633E" />
            <circle cx="60" cy="140" r="2.5" fill="#C4633E" />
            <circle cx="100" cy="80" r="2.5" fill="#C4633E" />
            <circle cx="140" cy="80" r="2.5" fill="#C4633E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Floating drifting code glyphs */}
      <div className="absolute inset-0 font-mono">
        {glyphs.map((g) => (
          <motion.div
            key={g.id}
            className="absolute font-bold text-brand-600 select-none"
            style={{
              left: `${g.left}%`,
              top: `${g.top}%`,
              fontSize: `${g.size}px`,
              opacity: g.opacity,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 15, 0, -15, 0],
              rotate: [g.rotate, g.rotate + 15, g.rotate - 5, g.rotate + 10, g.rotate],
              opacity: [g.opacity, g.opacity * 1.5, g.opacity, g.opacity * 1.5, g.opacity],
            }}
            transition={{
              duration: g.duration,
              repeat: Infinity,
              delay: g.delay,
              ease: "easeInOut",
            }}
          >
            {g.ch}
          </motion.div>
        ))}
      </div>

      {/* Antigravity flowing waves */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#C4633E" stopOpacity="0" />
            <stop offset="50%" stopColor="#C4633E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E89172" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M -100 ${300 + i * 80} Q 300 ${250 + i * 80}, 600 ${300 + i * 80} T 1300 ${300 + i * 80}`}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            animate={{
              d: [
                `M -100 ${300 + i * 80} Q 300 ${250 + i * 80}, 600 ${300 + i * 80} T 1300 ${300 + i * 80}`,
                `M -100 ${300 + i * 80} Q 300 ${350 + i * 80}, 600 ${280 + i * 80} T 1300 ${320 + i * 80}`,
                `M -100 ${300 + i * 80} Q 300 ${220 + i * 80}, 600 ${320 + i * 80} T 1300 ${280 + i * 80}`,
                `M -100 ${300 + i * 80} Q 300 ${250 + i * 80}, 600 ${300 + i * 80} T 1300 ${300 + i * 80}`,
              ],
            }}
            transition={{
              duration: 14 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </svg>

      {/* Animated horizontal scan-line (data flow vibe) */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(196,99,62,0.4), transparent)",
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated vertical scan-line */}
      <motion.div
        className="absolute top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(232,145,114,0.35), transparent)",
        }}
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
      />

      {/* Breathing dot grid */}
      <motion.div
        className="absolute inset-0 dotted-bg"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating rising dots */}
      <div className="absolute inset-0">
        {dots.map((d) => (
          <motion.div
            key={d.id}
            className="absolute rounded-full bg-brand-400"
            style={{
              left: `${d.left}%`,
              bottom: "-10px",
              width: `${d.size}px`,
              height: `${d.size}px`,
            }}
            animate={{
              y: [0, -(vh + 100)],
              opacity: [0, d.opacity, d.opacity, 0],
            }}
            transition={{
              duration: d.duration,
              repeat: Infinity,
              delay: d.delay,
              ease: "linear",
              times: [0, 0.1, 0.9, 1],
            }}
          />
        ))}
      </div>

      {/* Aurora ribbon at top */}
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] rounded-full"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 100%, transparent 0deg, rgba(196,99,62,0.18) 90deg, rgba(232,145,114,0.22) 180deg, rgba(196,99,62,0.15) 270deg, transparent 360deg)",
          filter: "blur(40px)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

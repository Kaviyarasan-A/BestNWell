"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  onComplete: () => void;
};

type Line = {
  text: string;
  delay: number;
  color: "emerald" | "white" | "brand" | "muted";
};

const BOOT: Line[] = [
  { text: "$ init bestnwell.portfolio --mode=cinematic", delay: 0, color: "white" },
  { text: "→ connecting to git repository", delay: 500, color: "muted" },
  { text: "✓ authenticated as best-n-well", delay: 700, color: "emerald" },
  { text: "→ fetching production projects", delay: 550, color: "muted" },
  { text: "✓ tripwithuz.com · production · live", delay: 700, color: "emerald" },
  { text: "✓ mobile apps · ios + android · 5 shipped", delay: 650, color: "emerald" },
  { text: "→ optimizing render pipeline", delay: 600, color: "muted" },
  { text: "✓ webgl context · ready", delay: 550, color: "emerald" },
  { text: "→ loading creative gallery", delay: 550, color: "muted" },
  { text: "✓ assets preloaded · 312 files", delay: 600, color: "emerald" },
  { text: "✓ render pipeline · synced", delay: 550, color: "emerald" },
  { text: "→ entering coding world", delay: 400, color: "brand" },
];

const RAIN_CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}<>=()/>$#*+-_λ".split("");

export default function PortfolioPortal({ open, onClose, onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"booting" | "entering" | "exiting">("booting");
  const [cursorOn, setCursorOn] = useState(true);

  // Stash the latest onComplete in a ref so the boot effect never re-fires when the parent re-renders
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Pause heavy page-wide background animations + lock body scroll while portal is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.classList.add("portal-open");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.classList.remove("portal-open");
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Cursor blink (only when portal is open, not always)
  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setCursorOn((c) => !c), 480);
    return () => clearInterval(id);
  }, [open]);

  // Boot sequence + progress + transition out — runs ONCE per open
  useEffect(() => {
    if (!open) {
      setLines([]);
      setProgress(0);
      setPhase("booting");
      return;
    }

    let cancelled = false;
    const timers: NodeJS.Timeout[] = [];
    let acc = 0;

    // Reset state at the start of each open
    setLines([]);
    setProgress(0);
    setPhase("booting");

    BOOT.forEach((line, idx) => {
      acc += line.delay;
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setLines((prev) => [...prev, line]);
          setProgress(((idx + 1) / BOOT.length) * 100);
        }, acc)
      );
    });

    // Show "ENTERING" big text (after boot finishes)
    timers.push(
      setTimeout(() => {
        if (cancelled) return;
        setPhase("entering");
      }, acc + 200)
    );

    // Start exit (entering stays visible for ~2.8s)
    timers.push(
      setTimeout(() => {
        if (cancelled) return;
        setPhase("exiting");
      }, acc + 3000)
    );

    // Trigger completion (~10s total from open)
    timers.push(
      setTimeout(() => {
        if (cancelled) return;
        onCompleteRef.current();
      }, acc + 3600)
    );

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [open]);

  // Matrix rain canvas — throttled to ~30fps and column-capped for perf
  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let lastDraw = 0;
    const FRAME_INTERVAL = 1000 / 30; // 30fps cap

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 18;
    const MAX_COLS = 90;
    let cols = Math.min(MAX_COLS, Math.floor(canvas.width / fontSize));
    let drops: number[] = Array(cols).fill(0).map(() => Math.random() * -50);

    ctx.font = `${fontSize}px JetBrains Mono, monospace`;

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw);
      if (time - lastDraw < FRAME_INTERVAL) return;
      lastDraw = time;

      ctx.fillStyle = "rgba(5, 6, 9, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      const newCols = Math.min(MAX_COLS, Math.floor(canvas.width / fontSize));
      if (newCols !== cols) {
        cols = newCols;
        drops = Array(cols).fill(0).map(() => Math.random() * -50);
      }

      const colSpacing = canvas.width / cols;

      for (let i = 0; i < cols; i++) {
        const ch = RAIN_CHARS[Math.floor(Math.random() * RAIN_CHARS.length)];
        const x = i * colSpacing;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "rgba(232,145,114,0.9)";
        ctx.fillText(ch, x, y);

        ctx.fillStyle = "rgba(196,99,62,0.45)";
        if (y > fontSize) ctx.fillText(ch, x, y - fontSize);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [open]);

  const colorMap: Record<Line["color"], string> = {
    emerald: "text-emerald-400",
    white: "text-white",
    brand: "text-brand-300",
    muted: "text-white/55",
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "circle(0% at 50% 100%)" }}
          animate={
            phase === "exiting"
              ? { clipPath: "circle(0% at 50% 50%)", scale: 1.3, opacity: 0 }
              : { clipPath: "circle(150% at 50% 100%)" }
          }
          transition={{
            duration: phase === "exiting" ? 0.7 : 0.8,
            ease: phase === "exiting" ? "easeIn" : "easeOut",
          }}
          className="fixed inset-0 z-[200] bg-black overflow-hidden"
        >
          {/* Matrix rain */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-50"
          />

          {/* Warm radial vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(196,99,62,0.2) 0%, transparent 50%), radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.85) 100%)",
            }}
          />

          {/* Animated scan lines */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(232,145,114,0.7), transparent)",
                boxShadow: "0 0 20px rgba(232,145,114,0.7)",
              }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Skip button */}
          <button
            onClick={onClose}
            aria-label="Skip animation"
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top corner labels */}
          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 text-[10px] font-mono text-brand-300 uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>best-n-well · portfolio</span>
            <span className="ml-2 inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400">live</span>
            </span>
          </div>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-[10px] font-mono text-white/40 uppercase tracking-widest">
            cinematic · entering coding world
          </div>

          {/* Center content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl">
              {/* Terminal block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="rounded-2xl border border-brand-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(196,99,62,0.25)]"
                style={{
                  backgroundColor: "rgba(10, 12, 18, 0.88)",
                  display: phase === "entering" ? "none" : "block",
                }}
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    sys.boot
                  </span>
                </div>

                <div className="font-mono text-sm space-y-1 min-h-[200px]">
                  {lines.map((l, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className={colorMap[l.color]}
                    >
                      {l.text}
                    </motion.div>
                  ))}
                  {lines.length > 0 && phase === "booting" && (
                    <span
                      className={`inline-block w-2 h-4 align-middle bg-brand-400 ${
                        cursorOn ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </div>

                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">
                    <span>loading</span>
                    <span className="text-brand-300">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full"
                      style={{
                        background:
                          "linear-gradient(to right, #C4633E, #E89172)",
                        boxShadow: "0 0 12px rgba(232,145,114,0.6)",
                      }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* ENTERING text */}
              <AnimatePresence>
                {phase === "entering" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                  >
                    <div className="text-[10px] font-mono text-brand-300 uppercase tracking-[0.4em] mb-4">
                      › access granted
                    </div>
                    <h2
                      className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                      style={{
                        background:
                          "linear-gradient(135deg, #E89172 0%, #C4633E 50%, #D4A276 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 80px rgba(196,99,62,0.4)",
                      }}
                    >
                      ENTERING <br /> CODING WORLD
                    </h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-6 h-px mx-auto w-32 bg-gradient-to-r from-transparent via-brand-400 to-transparent origin-center"
                    />
                    <p className="mt-4 text-xs font-mono text-white/40 uppercase tracking-widest">
                      rendering portfolio...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom HUD */}
          <div className="absolute bottom-5 left-5 z-10 text-[10px] font-mono text-white/40 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              <span>secure connection · 256-bit</span>
            </div>
          </div>
          <div className="absolute bottom-5 right-5 z-10 text-[10px] font-mono text-white/40 uppercase tracking-widest">
            v 2026.1 · build {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

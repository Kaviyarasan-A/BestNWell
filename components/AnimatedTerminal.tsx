"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

type Step =
  | { kind: "cmd"; text: string; typeSpeed?: number }
  | { kind: "out"; text: string; color?: string; delay?: number }
  | { kind: "done"; text: string; delay?: number };

const SCRIPT: Step[] = [
  { kind: "cmd", text: "npm create kaagam my-app" },
  { kind: "out", text: "→ Discovering scope...", delay: 300 },
  { kind: "done", text: "✓ Architecture designed", delay: 500 },
  { kind: "done", text: "✓ Modern UI built", delay: 500 },
  { kind: "done", text: "✓ AI integrated", delay: 500 },
  { kind: "done", text: "✓ Deployed to production", delay: 500 },
  {
    kind: "out",
    text: "→ Ready in 2.4s",
    color: "text-brand-300",
    delay: 600,
  },
];

export default function AnimatedTerminal() {
  const [items, setItems] = useState<{ text: string; color: string; type: string }[]>(
    []
  );
  const [currentCmd, setCurrentCmd] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    async function run() {
      // Wait between loops too
      while (!cancelled) {
        setItems([]);
        setCurrentCmd("");

        for (const step of SCRIPT) {
          if (cancelled) return;

          if (step.kind === "cmd") {
            for (let i = 0; i <= step.text.length; i++) {
              if (cancelled) return;
              setCurrentCmd(step.text.slice(0, i));
              await wait(28 + Math.random() * 30);
            }
            await wait(400);
            setItems((prev) => [
              ...prev,
              { text: `$ ${step.text}`, color: "text-white", type: "cmd" },
            ]);
            setCurrentCmd("");
          } else {
            await wait(step.delay ?? 300);
            setItems((prev) => [
              ...prev,
              {
                text: step.text,
                color:
                  step.kind === "done"
                    ? "text-emerald-400"
                    : step.color ?? "text-white/70",
                type: step.kind,
              },
            ]);
          }
        }

        await wait(2800);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="rounded-2xl overflow-hidden shadow-warm border border-line"
      style={{ background: "#0d1117" }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#161b22]">
        <div className="flex items-center gap-2 text-[11px] text-white/60 font-mono">
          <TerminalIcon className="w-3 h-3" />
          terminal
        </div>
        <div className="text-[10px] font-mono text-white/40">zsh</div>
      </div>

      <div className="font-mono text-[12px] leading-[1.7] p-4 min-h-[180px] max-h-[200px] overflow-hidden">
        {items.map((it, i) => (
          <div key={i} className={it.color}>
            {it.text}
          </div>
        ))}
        {currentCmd && (
          <div className="text-white">
            <span className="text-brand-400">$</span> {currentCmd}
            {showCursor && (
              <span className="inline-block w-[7px] h-[12px] -mb-0.5 ml-px bg-brand-400 align-middle" />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function wait(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}

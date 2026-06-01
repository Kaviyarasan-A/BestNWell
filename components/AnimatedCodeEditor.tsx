"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Token = { text: string; color?: string };
type Line = { tokens: Token[]; indent?: number };

const COLORS = {
  comment: "#7c8294",
  keyword: "#ff7b72",
  string: "#a5d6a8",
  func: "#d2a8ff",
  variable: "#79c0ff",
  number: "#ffa657",
  punct: "#c9d1d9",
  property: "#7ee787",
  base: "#e6edf3",
};

const PROGRAM: Line[] = [
  { tokens: [{ text: "// Best N Well · build pipeline", color: COLORS.comment }] },
  { tokens: [{ text: "" }] },
  {
    tokens: [
      { text: "import", color: COLORS.keyword },
      { text: " { ship } ", color: COLORS.base },
      { text: "from", color: COLORS.keyword },
      { text: " '", color: COLORS.string },
      { text: "@bestnwell/core", color: COLORS.string },
      { text: "'", color: COLORS.string },
    ],
  },
  { tokens: [{ text: "" }] },
  {
    tokens: [
      { text: "const", color: COLORS.keyword },
      { text: " ", color: COLORS.base },
      { text: "project", color: COLORS.variable },
      { text: " = ", color: COLORS.base },
      { text: "await", color: COLORS.keyword },
      { text: " ", color: COLORS.base },
      { text: "ship", color: COLORS.func },
      { text: "({", color: COLORS.punct },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "type", color: COLORS.property },
      { text: ": ", color: COLORS.base },
      { text: "'web'", color: COLORS.string },
      { text: ", ", color: COLORS.base },
      { text: "// or 'mobile' | 'ai'", color: COLORS.comment },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "stack", color: COLORS.property },
      { text: ": ", color: COLORS.base },
      { text: "'next + ai'", color: COLORS.string },
      { text: ",", color: COLORS.base },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "delivery", color: COLORS.property },
      { text: ": ", color: COLORS.base },
      { text: "'on-time'", color: COLORS.string },
      { text: ",", color: COLORS.base },
    ],
  },
  { tokens: [{ text: "})", color: COLORS.punct }] },
  { tokens: [{ text: "" }] },
  {
    tokens: [
      { text: "// ✓ Compiled successfully", color: COLORS.comment },
    ],
  },
  {
    tokens: [
      { text: "// ✓ Deployed to production", color: COLORS.comment },
    ],
  },
];

// Compute total character count for typing animation
function totalChars(lines: Line[]) {
  return lines.reduce((sum, l) => {
    const indentLen = (l.indent ?? 0) * 2;
    return sum + indentLen + l.tokens.reduce((s, t) => s + t.text.length, 0) + 1;
  }, 0);
}

// Slice lines based on how many characters are typed
function sliceLines(lines: Line[], chars: number): Line[] {
  const out: Line[] = [];
  let remaining = chars;
  for (const line of lines) {
    if (remaining <= 0) break;
    const indentLen = (line.indent ?? 0) * 2;
    const lineTokens: Token[] = [];
    // Treat indent as consumed
    if (remaining < indentLen) {
      out.push({ tokens: [], indent: line.indent });
      remaining = 0;
      break;
    }
    remaining -= indentLen;
    let lineDone = true;
    for (const t of line.tokens) {
      if (remaining <= 0) {
        lineDone = false;
        break;
      }
      if (remaining >= t.text.length) {
        lineTokens.push(t);
        remaining -= t.text.length;
      } else {
        lineTokens.push({ ...t, text: t.text.slice(0, remaining) });
        remaining = 0;
        lineDone = false;
        break;
      }
    }
    out.push({ tokens: lineTokens, indent: line.indent });
    if (lineDone) {
      remaining -= 1; // newline cost
    } else {
      break;
    }
  }
  return out;
}

export default function AnimatedCodeEditor() {
  const [charCount, setCharCount] = useState(0);
  const total = totalChars(PROGRAM);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let i = 0;

    const tick = () => {
      if (cancelled) return;
      i = i + 1;
      setCharCount(i);
      if (i >= total) {
        // restart after a pause
        setTimeout(() => {
          if (cancelled) return;
          i = 0;
          setCharCount(0);
          setTimeout(tick, 600);
        }, 3500);
      } else {
        setTimeout(tick, 22 + Math.random() * 30);
      }
    };

    const t = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [inView, total]);

  const visible = sliceLines(PROGRAM, charCount);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl overflow-hidden shadow-deep border border-line"
      style={{ background: "#0d1117" }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#161b22]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="text-[11px] font-mono text-white/50">
          build.ts — best-n-well
        </div>
        <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          live
        </div>
      </div>

      {/* Code area */}
      <div className="font-mono text-[12.5px] leading-[1.7] p-5 min-h-[290px]">
        {PROGRAM.map((line, i) => {
          const renderedLine = visible[i];
          const showCursor = i === visible.length - 1 && charCount < total;
          return (
            <div key={i} className="flex">
              <span className="text-white/25 w-7 select-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="whitespace-pre">
                {renderedLine ? (
                  <>
                    {"  ".repeat(renderedLine.indent ?? 0)}
                    {renderedLine.tokens.map((t, j) => (
                      <span
                        key={j}
                        style={{ color: t.color ?? COLORS.base }}
                      >
                        {t.text}
                      </span>
                    ))}
                    {showCursor && (
                      <span className="inline-block w-[7px] h-[14px] -mb-0.5 ml-px bg-brand-400 align-middle animate-pulse" />
                    )}
                  </>
                ) : null}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

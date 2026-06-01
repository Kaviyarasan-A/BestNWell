"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { CheckCircle2, Code2, Layers, Rocket, Users } from "lucide-react";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 25, stiffness: 80 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
    return () => unsub();
  }, [spring]);

  return (
    <span className="flex items-baseline">
      <span ref={ref}>0</span>
      <span className="text-brand-500">{suffix}</span>
    </span>
  );
}

const bullets = [
  "Senior-only engineers — no juniors on your project",
  "Weekly demos, transparent reporting, no surprises",
  "End-to-end ownership: design, build, ship, support",
  "AI integrated thoughtfully into every product",
];

const pillars = [
  { icon: Code2, label: "Engineering", color: "from-brand-500 to-accent-orange" },
  { icon: Layers, label: "Design", color: "from-accent-orange to-brand-400" },
  { icon: Rocket, label: "Launch", color: "from-brand-600 to-brand-500" },
  { icon: Users, label: "Support", color: "from-brand-400 to-accent-gold" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 section-cream">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        {/* Left: clean illustrated visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative h-[460px] rounded-3xl surface-card overflow-hidden">
            {/* Diagonal accent */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #C4633E 0%, #C4633E 45%, transparent 45%)",
                opacity: 0.95,
              }}
            />

            {/* Top content over diagonal */}
            <div className="absolute top-8 left-8 right-8 text-white max-w-[60%]">
              <div className="text-xs uppercase tracking-wider font-mono mb-3 text-white/70">
                // Kaagam Software Solutions · 2026
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                Engineering products that <br />
                <span className="text-accent-cream">ship and scale.</span>
              </div>
            </div>

            {/* Bottom-right white area with pillars */}
            <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-[55%]">
              <div className="grid grid-cols-2 gap-2.5">
                {pillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="bg-white border border-line rounded-xl p-3 flex items-center gap-2.5"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {p.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Decorative floating dot */}
            <div className="absolute top-1/2 right-12 w-3 h-3 rounded-full bg-white shadow-warm" />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-brand-200/40 blur-3xl -z-10" />
        </motion.div>

        {/* Right: content */}
        <div className="lg:col-span-7">
          <SectionHeader
            align="left"
            eyebrow="About Kaagam Software Solutions"
            title={
              <>
                A modern IT studio that turns ideas into{" "}
                <span className="gradient-text">production software.</span>
              </>
            }
            subtitle="We're a tight team of designers, engineers and growth specialists. Whether you need a single landing page or a multi-platform product, we own the entire lifecycle so you stay focused on your business."
          />

          <ul className="grid sm:grid-cols-2 gap-3">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 text-foreground"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="surface-card rounded-2xl p-5"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

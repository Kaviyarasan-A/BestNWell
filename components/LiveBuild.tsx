"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Activity,
  Zap,
  Clock,
  Boxes,
  Cpu,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import AnimatedCodeEditor from "./AnimatedCodeEditor";
import AnimatedTerminal from "./AnimatedTerminal";

const buildMetrics = [
  {
    icon: Clock,
    label: "Avg. Build Time",
    value: "2.4s",
    color: "from-brand-500 to-accent-orange",
  },
  {
    icon: GitBranch,
    label: "Commits / Week",
    value: "120+",
    color: "from-accent-orange to-brand-400",
  },
  {
    icon: Boxes,
    label: "Components Shipped",
    value: "350+",
    color: "from-brand-600 to-brand-500",
  },
  {
    icon: Cpu,
    label: "Test Coverage",
    value: "94%",
    color: "from-accent-gold to-brand-400",
  },
];

export default function LiveBuild() {
  return (
    <section className="relative py-24 lg:py-32 section-cream overflow-hidden">
      <div className="container-x relative">
        <SectionHeader
          eyebrow="Live Build Pipeline"
          title={
            <>
              Watch how we{" "}
              <span className="gradient-text">design, build & ship</span>
            </>
          }
          subtitle="Every project moves through our automated pipeline — from the first commit to a live, monitored production deployment."
        />

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: code editor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-brand-300" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                    Step 01
                  </div>
                  <div className="text-sm font-bold text-foreground">Code &amp; Commit</div>
                </div>
              </div>
              <div className="flex items-center gap-2 chip">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px]">main · live</span>
              </div>
            </div>
            <AnimatedCodeEditor />
          </motion.div>

          {/* Right: terminal + side metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-5"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                    <Activity className="w-4 h-4 text-brand-300" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                      Step 02
                    </div>
                    <div className="text-sm font-bold text-foreground">Build &amp; Ship</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 chip-warm">
                  <Zap className="w-3 h-3" />
                  <span className="font-mono text-[10px]">CI/CD</span>
                </div>
              </div>
              <AnimatedTerminal />
            </div>

            {/* Pipeline stages mini-tracker */}
            <div className="surface-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-muted font-semibold">
                  Pipeline Status
                </span>
                <span className="text-[10px] font-mono text-emerald-600">
                  ALL GREEN
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Lint", time: "0.3s", pct: 100 },
                  { label: "Tests", time: "1.2s", pct: 100 },
                  { label: "Build", time: "2.4s", pct: 100 },
                  { label: "Deploy", time: "1.8s", pct: 100 },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-16 text-xs font-mono text-muted">
                      {s.label}
                    </div>
                    <div className="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        className="h-full bg-gradient-to-r from-brand-500 to-accent-orange"
                      />
                    </div>
                    <div className="w-10 text-xs font-mono text-foreground text-right">
                      {s.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: build metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {buildMetrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="surface-card rounded-2xl p-5 relative overflow-hidden group"
              >
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity`}
                />
                <div className="relative flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-soft`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted font-mono">
                    live
                  </span>
                </div>
                <div className="font-display text-3xl font-bold text-foreground">
                  {m.value}
                </div>
                <div className="text-xs text-muted mt-1">{m.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

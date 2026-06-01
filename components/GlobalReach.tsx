"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Globe2, Users, Zap, Shield } from "lucide-react";

const items = [
  { icon: Globe2, label: "Clients in 15+ countries", color: "from-brand-500 to-accent-orange" },
  { icon: Users, label: "Remote-first team, 24/7 coverage", color: "from-accent-orange to-brand-400" },
  { icon: Zap, label: "Avg. response time: 2 hours", color: "from-brand-600 to-brand-500" },
  { icon: Shield, label: "Enterprise-grade SLAs", color: "from-accent-gold to-brand-400" },
];

const locations = [
  { city: "Chennai", country: "India", top: "60%", left: "70%" },
  { city: "Dubai", country: "UAE", top: "52%", left: "60%" },
  { city: "Singapore", country: "SG", top: "65%", left: "78%" },
  { city: "London", country: "UK", top: "32%", left: "47%" },
  { city: "New York", country: "US", top: "40%", left: "22%" },
  { city: "Sydney", country: "AU", top: "78%", left: "85%" },
];

export default function GlobalReach() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden section-cream">
      <div className="container-x">
        <SectionHeader
          eyebrow="Global Reach"
          title={
            <>
              One team. <span className="gradient-text">15+ countries.</span>{" "}
              <br /> Always online.
            </>
          }
          subtitle="From Tamil Nadu to Toronto, Dubai to Berlin — we deliver across timezones with the same level of care."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: world map illustration */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] rounded-3xl surface-card overflow-hidden p-6">
            <div className="absolute inset-0 dotted-bg opacity-50" />

            {/* Stylized map area */}
            <div className="relative w-full h-full">
              {/* Connection arcs (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {locations.slice(0, -1).map((loc, i) => {
                  const next = locations[i + 1];
                  const x1 = parseFloat(loc.left);
                  const y1 = parseFloat(loc.top);
                  const x2 = parseFloat(next.left);
                  const y2 = parseFloat(next.top);
                  return (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#C4633E"
                      strokeWidth="0.25"
                      strokeDasharray="1 1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.15 }}
                      opacity={0.5}
                    />
                  );
                })}
              </svg>

              {/* Locations */}
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <span className="relative">
                    <span className="absolute inset-0 rounded-full bg-brand-500/30 animate-ping" />
                    <span className="relative block w-2.5 h-2.5 rounded-full bg-brand-500" />
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-foreground bg-white/80 backdrop-blur px-2 py-0.5 rounded-md border border-line whitespace-nowrap">
                    {loc.city}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="absolute top-6 left-6 chip-warm pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live · Active Sessions
            </div>
            <div className="absolute bottom-6 right-6 surface-card rounded-2xl px-4 py-3 pointer-events-none">
              <div className="text-xs text-muted">Active users now</div>
              <div className="text-2xl font-bold gradient-text">12,847</div>
            </div>
          </div>

          {/* Right: feature list */}
          <div className="lg:col-span-5 space-y-4">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="surface-card rounded-2xl p-5 flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${it.color} flex items-center justify-center shrink-0 shadow-soft`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold text-foreground">{it.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

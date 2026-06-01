"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { getServiceSlug } from "@/lib/serviceSeo";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight, Check } from "lucide-react";

const warmColors = [
  "from-brand-500 to-accent-orange",
  "from-accent-orange to-brand-400",
  "from-brand-600 to-brand-500",
  "from-brand-400 to-accent-gold",
  "from-accent-gold to-brand-400",
  "from-brand-500 to-brand-700",
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 section-light">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="What We Do"
          title={
            <>
              End-to-end services to{" "}
              <span className="gradient-text">design, build & scale</span>{" "}
              your digital product
            </>
          }
          subtitle="From the first wireframe to 24/7 production monitoring — every capability you need under one roof, delivered by one team."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const colorClass = warmColors[i % warmColors.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl surface-card p-6 overflow-hidden"
              >
                <div
                  className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-soft`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="chip-warm">{s.tag}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {s.short}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {s.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/services/${getServiceSlug(s.title) ?? ""}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group/link"
                  >
                    Learn more
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

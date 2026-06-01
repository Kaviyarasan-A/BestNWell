"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 section-cream">
      <div className="container-x">
        <SectionHeader
          eyebrow="How We Work"
          title={
            <>
              A clear, proven{" "}
              <span className="gradient-text">5-step process</span>
            </>
          }
          subtitle="No black boxes. You see exactly what we're doing, when we're doing it, and what's next."
        />

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />

          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl surface-card flex items-center justify-center mb-4">
                  <span className="font-display text-2xl font-bold gradient-text">
                    {p.step}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

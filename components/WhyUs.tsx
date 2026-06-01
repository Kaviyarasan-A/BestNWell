"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { Sparkles } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 section-light">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why Best N Well"
          title={
            <>
              Reasons clients <span className="gradient-text">keep coming back</span>
            </>
          }
          subtitle="We&apos;re not the cheapest, and we&apos;re not the biggest. But we are the team you&apos;ll wish you hired first."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="relative rounded-2xl surface-card p-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-orange flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{w.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

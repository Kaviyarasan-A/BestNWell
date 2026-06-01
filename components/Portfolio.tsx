"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { ArrowUpRight, ExternalLink, Globe2 } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 section-cream">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Recent projects we&apos;re <span className="gradient-text">proud of</span>
            </>
          }
          subtitle="Honest portfolio — every project below is something we actually shipped or are actively delivering."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Wrapper = p.url ? "a" : "div";
            const wrapperProps = p.url
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden surface-card"
              >
                {/* @ts-expect-error union types */}
                <Wrapper {...wrapperProps} className="block">
                  <div
                    className="relative h-52 overflow-hidden"
                    style={{
                      background:
                        p.featured
                          ? "linear-gradient(135deg, #C4633E 0%, #E89172 100%)"
                          : "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
                    }}
                  >
                    <div className="absolute inset-0 grid-bg-light opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="font-display text-4xl font-bold text-white/15 group-hover:text-white/25 transition-colors text-center px-4">
                        {p.category}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur border border-white/20 text-white">
                        {p.category}
                      </span>
                      {p.live && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/30 backdrop-blur border border-emerald-300/40 text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                    {p.url && (
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 flex items-center gap-2 text-foreground">
                      {p.title}
                      {p.featured && (
                        <span className="text-[10px] uppercase tracking-wider text-brand-600 font-mono">
                          Featured
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="chip-warm text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.url && (
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 pt-2 border-t border-line mt-3">
                        <Globe2 className="w-3.5 h-3.5" />
                        <span className="truncate">{p.url.replace(/^https?:\/\//, "")}</span>
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </div>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-ghost">
            Have a project in mind? Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

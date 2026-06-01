"use client";

import { motion } from "framer-motion";
import { aiFeatures } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { Sparkles, Zap, ArrowUpRight } from "lucide-react";

const warmColors = [
  "from-brand-500 to-accent-orange",
  "from-accent-orange to-brand-400",
  "from-brand-600 to-brand-500",
  "from-brand-400 to-accent-gold",
  "from-accent-gold to-brand-400",
  "from-brand-500 to-brand-700",
];

export default function AISolutions() {
  return (
    <section id="ai" className="relative py-24 lg:py-32 overflow-hidden section-cream">
      <div className="absolute inset-0 dotted-bg opacity-40" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-orange/20 blur-3xl" />

      <div className="container-x relative">
        <SectionHeader
          eyebrow="AI-Powered Solutions"
          title={
            <>
              <span className="gradient-text">AI integrated</span> into everything we ship
            </>
          }
          subtitle="From customer-facing chatbots to predictive analytics — we make AI practical, useful and easy to add to your existing product."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {aiFeatures.map((f, i) => {
            const Icon = f.icon;
            const colorClass = warmColors[i % warmColors.length];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl surface-card p-6 overflow-hidden"
              >
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity`}
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-foreground text-white p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/30 blur-3xl rounded-full" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium mb-4">
                <Sparkles className="w-3 h-3 text-accent-gold" />
                Powered by best-in-class AI
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mb-4">
                We work with the <span className="gradient-text">world&apos;s leading AI models</span>
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Whether you need a smart chatbot, an internal AI assistant, an
                AI-powered search, or a generative content engine — we pick the right
                model for the job and integrate it cleanly into your product.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "OpenAI GPT-4",
                  "Anthropic Claude",
                  "Google Gemini",
                  "Llama 3",
                  "Mistral",
                  "Stable Diffusion",
                  "Whisper",
                  "Pinecone",
                  "LangChain",
                  "Hugging Face",
                ].map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-white/15 bg-white/5 text-white/85"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-3">
                {[
                  { label: "Chatbot Response Time", value: "<800ms" },
                  { label: "Content Generation", value: "10x faster" },
                  { label: "Support Ticket Reduction", value: "-65%" },
                  { label: "Customer Satisfaction", value: "+40%" },
                ].map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-xl bg-white/5 border border-white/10 backdrop-blur p-4 flex items-center justify-between"
                  >
                    <div className="text-sm text-white/75">{m.label}</div>
                    <div className="font-bold text-lg bg-gradient-to-r from-accent-gold to-accent-orange bg-clip-text text-transparent">
                      {m.value}
                    </div>
                  </motion.div>
                ))}
              </div>
              <a
                href="#estimator"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-foreground hover:bg-accent-cream transition-colors group"
              >
                <Zap className="w-4 h-4 text-brand-500" />
                <span className="font-semibold text-sm">Try our AI Project Estimator</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden section-light">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="Kind Words"
          title={
            <>
              What our clients <span className="gradient-text">say about us</span>
            </>
          }
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="relative rounded-3xl surface-card p-8 sm:p-12 overflow-hidden min-h-[280px]">
            <Quote className="absolute -top-4 -left-4 w-32 h-32 text-brand-50" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center gap-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xl sm:text-2xl leading-relaxed text-foreground mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-accent-orange flex items-center justify-center font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-11 h-11 rounded-full surface-card flex items-center justify-center text-foreground hover:bg-brand-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-gradient-to-r from-brand-500 to-accent-orange"
                      : "w-1.5 bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={next}
              className="w-11 h-11 rounded-full surface-card flex items-center justify-center text-foreground hover:bg-brand-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Star,
  Globe2,
  Smartphone,
  Brain,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import PortfolioPortal from "./PortfolioPortal";

const roles = [
  "Websites",
  "Mobile Apps",
  "E-commerce",
  "AI Solutions",
  "Cloud & DevOps",
  "SaaS Platforms",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const openPortal = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setPortalOpen(true);
  }, []);

  const closePortal = useCallback(() => setPortalOpen(false), []);

  const onPortalComplete = useCallback(() => {
    setPortalOpen(false);
    setTimeout(() => {
      document
        .getElementById("portfolio")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.06]"
        style={{
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
          background: "linear-gradient(135deg, #C4633E, #E89172)",
        }}
      />

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip-warm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Now accepting new projects · Tamil Nadu, India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            We build modern <br />
            <span className="gradient-text">{roles[index]}</span>
            <br />
            <span className="text-foreground">that drive growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
          >
            Kaagam Software Solutions is a full-stack IT studio designing, developing, publishing,
            monitoring and supporting digital products. From concept to launch — with
            AI integrated into everything we build.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#portfolio" onClick={openPortal} className="btn-ghost">
              <Play className="w-4 h-4" /> View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4.9</span>
              <span className="text-sm text-muted">·</span>
              <span className="text-sm text-muted">Trusted by clients</span>
            </div>
            <div className="h-6 w-px bg-line" />
            <div className="text-sm">
              <span className="font-semibold text-foreground">tripwithuz.com</span>
              <span className="text-muted ml-2">live now</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative">
          <HeroVisual />
        </div>
      </div>

      <PortfolioPortal
        open={portalOpen}
        onClose={closePortal}
        onComplete={onPortalComplete}
      />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-[460px] sm:h-[540px] lg:h-[600px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-brand-200/40 to-accent-orange/20 blur-3xl" />
      </div>

      {/* Big browser mockup card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-6 right-2 sm:right-8 w-[88%] max-w-[480px] surface-card rounded-2xl p-5 shadow-warm"
      >
        <div className="flex items-center gap-1.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="ml-3 flex-1 h-6 rounded-md bg-background border border-line flex items-center px-3">
            <span className="text-[10px] font-mono text-muted">kaagamsoftware.com</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-brand-500 to-accent-orange" />
          <div className="h-2 w-full rounded-full bg-line" />
          <div className="h-2 w-5/6 rounded-full bg-line" />

          <div className="grid grid-cols-3 gap-2 pt-3">
            {[Globe2, Smartphone, Brain].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="aspect-square rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 border border-line flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-brand-600" />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3">
            <div className="space-y-1.5">
              <div className="h-2 w-20 rounded-full bg-line" />
              <div className="h-2 w-14 rounded-full bg-line/60" />
            </div>
            <div className="h-8 px-4 rounded-full bg-foreground flex items-center">
              <span className="text-[10px] font-semibold text-white">Get Started</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating phone mockup */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 left-2 sm:left-8 w-44 surface-card rounded-3xl p-3 shadow-deep animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="rounded-2xl bg-foreground p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[9px] font-mono text-white/60">9:41</div>
            <div className="flex gap-1">
              <div className="w-3 h-1 rounded-sm bg-white/60" />
              <div className="w-3 h-1 rounded-sm bg-white/60" />
            </div>
          </div>
          <div className="text-white text-[10px] uppercase tracking-wider font-bold mb-1">
            Kaagam
          </div>
          <div className="text-white text-lg font-bold mb-3 leading-tight">
            AI-Powered <br /> Mobile App
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-orange/30 flex items-center justify-center"
              >
                <Sparkles className="w-3 h-3 text-brand-300" />
              </div>
            ))}
          </div>
          <div className="mt-3 h-7 rounded-full bg-gradient-to-r from-brand-500 to-accent-orange flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">Get Started</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Built with AI badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute top-2 left-2 sm:left-4 surface-card rounded-2xl px-4 py-3 shadow-warm animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-orange flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">Built with AI</div>
            <div className="text-[10px] text-muted">GPT-4 · Claude</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Lighthouse badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.15 }}
        className="absolute bottom-2 right-2 sm:right-6 surface-card rounded-2xl px-4 py-3 shadow-warm animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold gradient-text">98</div>
          <div>
            <div className="text-[10px] font-bold text-foreground">Lighthouse</div>
            <div className="text-[10px] text-muted">Performance</div>
          </div>
        </div>
      </motion.div>

      {/* Decorative dots */}
      <div className="absolute top-32 right-0 w-2 h-2 rounded-full bg-brand-500" />
      <div className="absolute bottom-20 left-0 w-3 h-3 rounded-full bg-accent-orange" />
      <div className="absolute top-1/2 right-12 w-1.5 h-1.5 rounded-full bg-brand-300" />
    </div>
  );
}

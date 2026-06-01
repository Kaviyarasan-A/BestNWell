"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Send,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { company } from "@/lib/data";

type Choice = { label: string; weight: number };
type Question = {
  id: string;
  title: string;
  subtitle: string;
  options: Choice[];
};

const questions: Question[] = [
  {
    id: "type",
    title: "What do you want to build?",
    subtitle: "Pick the type that fits best.",
    options: [
      { label: "Simple Website", weight: 35000 },
      { label: "Web Application / Dashboard", weight: 150000 },
      { label: "Mobile App (iOS + Android)", weight: 180000 },
      { label: "E-commerce Store", weight: 90000 },
      { label: "SaaS Platform", weight: 350000 },
      { label: "AI-Powered Product", weight: 250000 },
    ],
  },
  {
    id: "scope",
    title: "How big is the scope?",
    subtitle: "Rough sense of pages / features.",
    options: [
      { label: "Small (1-5 pages / screens)", weight: 1 },
      { label: "Medium (6-15 pages / screens)", weight: 1.6 },
      { label: "Large (16+ pages / screens)", weight: 2.4 },
      { label: "Enterprise (50+ screens, complex)", weight: 3.8 },
    ],
  },
  {
    id: "features",
    title: "Which features do you need?",
    subtitle: "We'll add cost for each.",
    options: [
      { label: "Basic CMS / Content updates", weight: 15000 },
      { label: "User accounts & auth", weight: 25000 },
      { label: "Payment integration", weight: 30000 },
      { label: "AI Chatbot / GPT integration", weight: 45000 },
      { label: "Real-time / Live data", weight: 35000 },
      { label: "Multi-language support", weight: 20000 },
    ],
  },
  {
    id: "timeline",
    title: "How fast do you need it?",
    subtitle: "Tighter timeline = bigger team.",
    options: [
      { label: "Flexible (recommended)", weight: 1 },
      { label: "Standard (8-12 weeks)", weight: 1.1 },
      { label: "Fast (4-8 weeks)", weight: 1.35 },
      { label: "Urgent (under 4 weeks)", weight: 1.7 },
    ],
  },
];

export default function AIEstimator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [extras, setExtras] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [calculating, setCalculating] = useState(false);

  const estimate = useMemo(() => {
    const base = answers["type"] ?? 0;
    const scope = answers["scope"] ?? 1;
    const timeline = answers["timeline"] ?? 1;
    const featureSum = extras.reduce((a, b) => a + b, 0);
    const low = Math.round((base * scope + featureSum) * timeline * 0.85);
    const high = Math.round((base * scope + featureSum) * timeline * 1.25);
    return { low, high };
  }, [answers, extras]);

  const q = questions[step];
  const isFeatures = q?.id === "features";

  function pick(opt: Choice) {
    if (isFeatures) {
      const exists = extras.includes(opt.weight);
      setExtras(exists ? extras.filter((e) => e !== opt.weight) : [...extras, opt.weight]);
    } else {
      setAnswers({ ...answers, [q.id]: opt.weight });
    }
  }

  function next() {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setCalculating(true);
      setTimeout(() => {
        setCalculating(false);
        setDone(true);
      }, 1300);
    }
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setExtras([]);
    setDone(false);
  }

  const canProceed = isFeatures
    ? extras.length > 0
    : answers[q?.id] !== undefined;

  const formatINR = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  const whatsappBudgetMsg = encodeURIComponent(
    `Hi Kaagam Software Solutions, I used your AI estimator and got an estimate of ${formatINR(
      estimate.low
    )} - ${formatINR(estimate.high)}. I'd like to discuss my project.`
  );

  return (
    <section id="estimator" className="relative py-24 lg:py-32 overflow-hidden section-light">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="AI Project Estimator"
          title={
            <>
              Get an instant <span className="gradient-text">price estimate</span>
            </>
          }
          subtitle="Answer 4 quick questions and our AI estimator will give you a ballpark range for your project — no email required."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl surface-card p-6 sm:p-10 overflow-hidden min-h-[500px]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-200/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-orange/15 blur-3xl rounded-full" />

            {!done && !calculating && (
              <div className="relative mb-8">
                <div className="flex items-center justify-between text-xs text-muted mb-2">
                  <span>
                    Step {step + 1} of {questions.length}
                  </span>
                  <span className="flex items-center gap-1 text-brand-600">
                    <Sparkles className="w-3 h-3" />
                    AI-Powered
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-line overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-gradient-to-r from-brand-500 to-accent-orange"
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {calculating && (
                <motion.div
                  key="calc"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-line" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-500 border-r-accent-orange animate-spin" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Analyzing your project…
                  </h3>
                  <p className="text-sm text-muted">
                    Running through our pricing engine
                  </p>
                </motion.div>
              )}

              {done && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-accent-orange mb-5 shadow-warm">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-muted uppercase tracking-wider mb-2">
                    Estimated Project Cost
                  </div>
                  <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2">
                    {formatINR(estimate.low)} – {formatINR(estimate.high)}
                  </div>
                  <p className="text-muted text-sm max-w-md mx-auto mb-8">
                    Ballpark only. Real quote depends on exact scope, design
                    complexity and integrations. Final price is always agreed
                    upfront with no surprises.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${whatsappBudgetMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Send className="w-4 h-4" />
                      Send to WhatsApp & Get Quote
                    </a>
                    <button onClick={reset} className="btn-ghost">
                      <RotateCcw className="w-4 h-4" /> Start over
                    </button>
                  </div>
                </motion.div>
              )}

              {!done && !calculating && q && (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                    {q.title}
                  </h3>
                  <p className="text-muted text-sm mb-6">{q.subtitle}</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {q.options.map((opt) => {
                      const active = isFeatures
                        ? extras.includes(opt.weight)
                        : answers[q.id] === opt.weight;
                      return (
                        <button
                          key={opt.label}
                          onClick={() => pick(opt)}
                          className={`text-left px-4 py-4 rounded-xl border transition-all relative ${
                            active
                              ? "border-brand-500 bg-brand-50 text-foreground"
                              : "border-line bg-white text-foreground hover:border-brand-300 hover:bg-brand-50/50"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-medium text-sm">{opt.label}</span>
                            {active && (
                              <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-line">
                    <button
                      onClick={back}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={next}
                      disabled={!canProceed}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {step === questions.length - 1 ? "Get Estimate" : "Next"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-center text-xs text-muted/70 mt-6">
            🔒 Your answers stay private. We don&apos;t store or share them.
          </p>
        </div>
      </div>
    </section>
  );
}

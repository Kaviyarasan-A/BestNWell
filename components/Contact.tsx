"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { company } from "@/lib/data";

const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const service = fd.get("service") as string;
    const message = fd.get("message") as string;

    const text = encodeURIComponent(
      `Hi Kaagam Software Solutions,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\n${message}`
    );

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(`https://wa.me/${company.whatsapp}?text=${text}`, "_blank");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4500);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden section-light">
      <div className="absolute inset-0 bg-warm-glow opacity-60" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="Get in Touch"
          title={
            <>
              Let&apos;s build something <span className="gradient-text">great together</span>
            </>
          }
          subtitle="Tell us about your project — we&apos;ll respond within a few hours with next steps and a free quote."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block surface-card rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-emerald-500/15 blur-3xl group-hover:bg-emerald-500/25 transition-colors" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(16,185,129,0.25)]">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.36.57-1 3.65 3.737-.979.484.281zm9.884-7.5c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-emerald-700 uppercase tracking-wider font-bold">
                    Fastest Response
                  </div>
                  <div className="font-bold text-lg text-foreground">Chat on WhatsApp</div>
                  <div className="text-sm text-muted mt-0.5">
                    {company.phone} · usually replies within minutes
                  </div>
                </div>
                <Send className="w-4 h-4 text-muted group-hover:text-brand-500 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </a>

            <div className="surface-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-orange flex items-center justify-center shrink-0 shadow-soft">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted uppercase tracking-wider">Email us</div>
                  <a
                    href={`mailto:${company.email}`}
                    className="block font-semibold text-foreground hover:text-brand-600 transition-colors break-all"
                  >
                    {company.email}
                  </a>
                  <a
                    href={`mailto:${company.emailSecondary}`}
                    className="block font-semibold text-foreground hover:text-brand-600 transition-colors break-all"
                  >
                    {company.emailSecondary}
                  </a>
                  <div className="text-sm text-muted mt-1">Avg. response in 2–4 hours</div>
                </div>
              </div>
            </div>

            <div className="surface-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange to-brand-400 flex items-center justify-center shrink-0 shadow-soft">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider">Call us</div>
                  <a
                    href={`tel:+${company.phoneRaw}`}
                    className="font-semibold text-foreground hover:text-brand-600 transition-colors"
                  >
                    {company.phone}
                  </a>
                  <div className="text-sm text-muted mt-1">Mon–Sat · 10am–8pm IST</div>
                </div>
              </div>
            </div>

            <div className="surface-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-brand-400 flex items-center justify-center shrink-0 shadow-soft">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider">Based in</div>
                  <div className="font-semibold text-foreground">{company.location}</div>
                  <div className="text-sm text-muted mt-1">Remote-first · serving clients globally</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={onSubmit} className="rounded-3xl surface-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-brand-500" />
                <span className="text-xs uppercase tracking-wider text-muted font-semibold">
                  Send via WhatsApp · instant delivery
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" type="text" name="name" placeholder="Karthik R." required />
                <Field label="Email" type="email" name="email" placeholder="you@email.com" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone / WhatsApp" type="tel" name="phone" placeholder="+91 9876543210" />
                <Select
                  label="Service interested in"
                  name="service"
                  options={[
                    "Website Development",
                    "Mobile App Development",
                    "E-commerce",
                    "AI / Generative AI",
                    "UI / UX Design",
                    "Cloud & DevOps",
                    "Publishing & Deployment",
                    "Monitoring & Support",
                    "Other",
                  ]}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Brief idea, target audience, budget range, timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-line focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 text-foreground placeholder-muted/60 transition"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-xs text-muted">
                  We&apos;ll get back within 4 hours. Your details stay private.
                </p>
                <button
                  type="submit"
                  disabled={loading || sent}
                  className="btn-primary disabled:opacity-70"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Opened WhatsApp
                    </>
                  ) : loading ? (
                    <>Preparing…</>
                  ) : (
                    <>
                      Send via WhatsApp <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <input
        {...rest}
        className="w-full px-4 py-3 rounded-xl bg-white border border-line focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 text-foreground placeholder-muted/60 transition"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full px-4 py-3 rounded-xl bg-white border border-line focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 text-foreground transition"
      >
        <option value="" disabled>
          Choose a service
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

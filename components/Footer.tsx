"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { company } from "@/lib/data";
import { Logo } from "./Logo";

const footerLinks = {
  Company: [
    { label: "About", href: "/#about" },
    { label: "All Services", href: "/services" },
    { label: "AI Solutions", href: "/#ai" },
    { label: "Process", href: "/#process" },
    { label: "Portfolio", href: "/#portfolio" },
  ],
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "E-commerce", href: "/services/ecommerce-development" },
    { label: "AI Development", href: "/services/ai-development" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "SEO & Marketing", href: "/services/seo-digital-marketing" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
    { label: "Get a Quote", href: "/#contact" },
  ],
};

const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.36.57-1 3.65 3.737-.979.484.281z" />
    </svg>
  );
}

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: WhatsAppIcon, href: whatsappUrl, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-line bg-foreground text-white">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-x relative">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #C4633E 0%, #E89172 100%)",
          }}
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/15 blur-3xl rounded-full" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
                Ready to start your <span className="text-accent-cream">next big thing?</span>
              </h3>
              <p className="text-white/85 mt-3">
                Free quote within 24 hours. No pressure, no spam.
              </p>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-white text-brand-600 hover:bg-accent-cream transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4 space-y-4">
            <a href="/" aria-label={`${company.name} — home`}>
              <Logo tone="dark" />
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              A modern IT studio designing, developing, publishing, monitoring and
              supporting digital products. Tamil Nadu, India.
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0" /> {company.email}
              </a>
              <a
                href={`mailto:${company.emailSecondary}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0" /> {company.emailSecondary}
              </a>
              <a
                href={`tel:+${company.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-300 transition-colors"
              >
                <Phone className="w-4 h-4" /> {company.phone}
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2 lg:col-span-2">
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/60 hover:text-brand-300 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-sm text-white/60 mb-3">
              Quarterly insights on tech, design & product. No spam.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-400 focus:outline-none text-sm text-white placeholder-white/40"
              />
              <button className="px-4 py-2.5 rounded-xl bg-gradient-to-br from-brand-500 to-accent-orange text-white text-sm font-semibold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>
            Crafted with <span className="text-brand-300">♥</span> in Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { serviceSeo } from "@/lib/serviceSeo";
import { services, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "IT & Software Development Services",
  description: `Explore the full range of ${company.name} services — website and mobile app development, e-commerce, AI, custom software, cloud, SEO and 24/7 support.`,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: `IT & Software Development Services — ${company.name}`,
    description: `Website and mobile app development, e-commerce, AI, custom software, cloud, SEO and support from ${company.name}.`,
  },
};

export default function ServicesIndexPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative pt-32 pb-14 section-cream overflow-hidden">
        <div className="absolute inset-0 bg-warm-glow opacity-60" />
        <div className="container-x relative">
          <div className="chip-warm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            What We Do
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
            IT &amp; Software Development <span className="gradient-text">Services</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl">
            Everything you need to design, build, launch and grow your digital product — delivered
            by one dependable team across Tamil Nadu and India.
          </p>
        </div>
      </section>

      <section className="relative py-16 lg:py-20 section-light">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceSeo.map((svc) => {
              const base = services.find((s) => s.title === svc.title);
              const Icon = base?.icon;
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group surface-card rounded-3xl p-6 flex flex-col"
                >
                  {Icon && (
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-orange flex items-center justify-center shadow-soft mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h2 className="font-display text-lg font-bold text-foreground group-hover:text-brand-600 transition-colors">
                    {svc.h1}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    {base?.short ?? svc.intro[0]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

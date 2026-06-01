import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { serviceSeo, getServiceSeo } from "@/lib/serviceSeo";
import { services, company } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.url;

export function generateStaticParams() {
  return serviceSeo.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceSeo(slug);
  if (!svc) return {};
  const url = `/services/${svc.slug}`;
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    keywords: svc.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: svc.metaTitle,
      description: svc.metaDescription,
    },
    twitter: { card: "summary_large_image", title: svc.h1, description: svc.metaDescription },
  };
}

const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getServiceSeo(slug);
  if (!svc) notFound();

  const base = services.find((s) => s.title === svc.title);
  const Icon = base?.icon;
  const features = base?.features ?? [];
  const others = serviceSeo.filter((s) => s.slug !== svc.slug).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/${svc.slug}#service`,
        name: svc.h1,
        serviceType: svc.title,
        description: svc.metaDescription,
        url: `${siteUrl}/services/${svc.slug}`,
        provider: { "@type": "Organization", name: company.name, url: siteUrl },
        areaServed: ["Tamil Nadu", "Coimbatore", "Palani", "India"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          {
            "@type": "ListItem",
            position: 3,
            name: svc.h1,
            item: `${siteUrl}/services/${svc.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-14 section-cream overflow-hidden">
        <div className="absolute inset-0 bg-warm-glow opacity-60" />
        <div className="container-x relative max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-600">Services</Link>
          </nav>

          {Icon && (
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-orange flex items-center justify-center shadow-warm mb-5">
              <Icon className="w-7 h-7 text-white" />
            </div>
          )}
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {svc.h1}
          </h1>
          <div className="mt-5 space-y-4">
            {svc.intro.map((p, i) => (
              <p key={i} className="text-lg text-foreground/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="w-4 h-4" /> Get a Free Quote
            </a>
            <Link href="/#contact" className="btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="relative py-16 lg:py-20 section-light">
        <div className="container-x max-w-4xl grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              What&apos;s included
            </h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground/85">
                  <span className="w-6 h-6 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-600" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              Why choose {company.name}
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{svc.why}</p>
            <div className="mt-6 surface-card rounded-2xl p-5">
              <p className="text-sm text-muted">
                Serving <strong className="text-foreground">Coimbatore, Palani, Dindigul,
                Madurai</strong> and businesses across Tamil Nadu &amp; India — remotely and on-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="relative py-16 section-cream">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Explore other services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group surface-card rounded-2xl p-5 flex items-center justify-between gap-3"
              >
                <span className="font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                  {s.title}
                </span>
                <ArrowRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-brand-600">
              <ArrowLeft className="w-4 h-4" /> All services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

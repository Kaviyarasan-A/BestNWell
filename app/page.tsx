import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import LiveBuild from "@/components/LiveBuild";
import AISolutions from "@/components/AISolutions";
import AIEstimator from "@/components/AIEstimator";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import GlobalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company, faqs, services } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.url;

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#services`,
      serviceType: "IT & Software Development Services",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Tamil Nadu", "Coimbatore", "Palani", "India"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software & IT Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.short },
        })),
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <LiveBuild />
      <AISolutions />
      <AIEstimator />
      <Process />
      <TechStack />
      <Portfolio />
      <WhyUs />
      <GlobalReach />
      <Testimonials />
      <section id="faq">
        <FAQ />
      </section>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

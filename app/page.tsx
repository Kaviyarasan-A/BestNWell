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

export default function HomePage() {
  return (
    <main className="relative">
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

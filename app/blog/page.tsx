import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllPosts, blogMeta } from "@/lib/blog";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: blogMeta.title,
  description: blogMeta.description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: `${blogMeta.title} — ${company.name}`,
    description: blogMeta.description,
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="relative">
      <Navbar />

      <section className="relative pt-32 pb-16 section-cream overflow-hidden">
        <div className="absolute inset-0 bg-warm-glow opacity-60" />
        <div className="container-x relative">
          <div className="chip-warm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            The {company.brand} Blog
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
            Insights on <span className="gradient-text">Software, Web, Mobile &amp; AI</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-2xl">
            {blogMeta.description}
          </p>
        </div>
      </section>

      <section className="relative py-16 lg:py-20 section-light">
        <div className="container-x">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block surface-card rounded-3xl overflow-hidden mb-12"
          >
            <div className="grid lg:grid-cols-2">
              <div
                className="relative h-56 lg:h-full min-h-[220px]"
                style={{ background: "linear-gradient(135deg, #C4633E 0%, #E89172 100%)" }}
              >
                <div className="absolute inset-0 grid-bg-light opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white/20 text-center">
                    {featured.category}
                  </span>
                </div>
                <span className="absolute top-4 left-4 chip bg-white/15 border-white/20 text-white backdrop-blur">
                  Featured
                </span>
              </div>
              <div className="p-7 sm:p-9 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="chip-warm">{featured.category}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" /> {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {featured.readingTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight group-hover:text-brand-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-600">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* Rest grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group surface-card rounded-3xl overflow-hidden flex flex-col"
              >
                <div
                  className="relative h-40"
                  style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)" }}
                >
                  <div className="absolute inset-0 grid-bg-light opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-white/15 text-center px-4">
                      {post.category}
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 chip bg-white/10 border-white/20 text-white backdrop-blur text-[11px]">
                    {post.category}
                  </span>
                  <ArrowUpRight className="absolute top-3 right-3 w-5 h-5 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[11px] text-muted mb-2">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" /> {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readingTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

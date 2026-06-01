import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Article from "@/components/blog/Article";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { company } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.url;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [company.name],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  company.whatsappMessage
)}`;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${siteUrl}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en",
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        image: `${siteUrl}/opengraph-image`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` },
        author: { "@type": "Organization", name: company.name, url: siteUrl },
        publisher: {
          "@type": "Organization",
          name: company.name,
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${siteUrl}/blog/${post.slug}`,
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

      <article className="relative pt-32 pb-16 section-light">
        <div className="absolute top-0 inset-x-0 h-64 bg-warm-glow opacity-50 pointer-events-none" />
        <div className="container-x relative max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          </nav>

          <span className="chip-warm">{post.category}</span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-4 text-sm text-muted border-b border-line pb-6">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readingTime}
            </span>
            <span className="ml-auto text-muted">By {company.name}</span>
          </div>

          <div className="mt-8">
            <Article body={post.body} />
          </div>

          {/* CTA */}
          <div
            className="mt-12 rounded-3xl p-7 sm:p-9 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #C4633E 0%, #E89172 100%)" }}
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/15 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Have a project in mind?
              </h2>
              <p className="text-white/85 mt-2 max-w-xl">
                {company.name} can design, build and support it end to end. Get a free quote within 24 hours.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-white text-brand-600 hover:bg-accent-cream transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-brand-600">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="relative py-16 section-cream">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Keep reading
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group surface-card rounded-2xl p-6 flex flex-col"
              >
                <span className="chip-warm mb-3 self-start">{p.category}</span>
                <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-brand-600 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2 flex-1">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
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

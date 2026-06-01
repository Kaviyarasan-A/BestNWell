import type { Metadata } from "next";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { company } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.url;
const title = `${company.name} — IT Company | Software, Web, Mobile & AI Development`;
const description = `${company.name} is a leading IT company and software development studio building high-performance websites, mobile apps, e-commerce platforms, custom software, AI integrations and cloud infrastructure. End-to-end design, development, deployment and 24/7 support for businesses worldwide.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${company.name}`,
  },
  description,
  applicationName: company.name,
  keywords: [
    "Kaagam Software Solutions",
    "Kaagam",
    "Kaagam software",
    "IT company",
    "software company",
    "software development company",
    "technology company",
    "website development company",
    "website design",
    "web development",
    "mobile app development",
    "custom software development",
    "e-commerce development",
    "AI development company",
    "generative AI",
    "cloud computing",
    "DevOps services",
    "UI UX design",
    "SEO services",
    "digital transformation",
    "IT services company India",
    "best IT company in Tamil Nadu",
    "best IT company in Coimbatore",
    "software solutions in Palani",
    "IT company in Palani",
    "software company Coimbatore",
  ],
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : {},
  },
};

const services = [
  "Website Development",
  "Mobile App Development",
  "E-commerce Solutions",
  "Custom Software Development",
  "AI & Generative AI",
  "UI/UX Design",
  "Cloud & DevOps",
  "SEO & Digital Marketing",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      alternateName: ["Kaagam", "Kaagam Software", "Kaagam Softwares"],
      legalName: company.name,
      description,
      slogan: company.tagline,
      url: siteUrl,
      email: [company.email, company.emailSecondary],
      telephone: `+${company.phoneRaw}`,
      image: `${siteUrl}/logo.png`,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
      foundingDate: "2024",
      areaServed: [
        "Tamil Nadu",
        "Coimbatore",
        "Palani",
        "Dindigul",
        "Madurai",
        "India",
        "Worldwide",
      ],
      knowsAbout: [
        "Software Development",
        "Web Development",
        "Mobile App Development",
        "Artificial Intelligence",
        "Cloud Computing",
        "DevOps",
        "E-commerce",
        "UI/UX Design",
        "SEO",
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: company.email,
        telephone: `+${company.phoneRaw}`,
        availableLanguage: ["English", "Tamil"],
      },
      sameAs: [`https://wa.me/${company.whatsapp}`],
      makesOffer: services.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export const metadata: Metadata = {
  title: "Best N Well — Modern IT Solutions, Web, Mobile & AI Development",
  description:
    "Best N Well builds high-performance websites, mobile apps, e-commerce platforms, AI integrations, cloud infrastructure, and provides end-to-end deployment, monitoring and support for ambitious businesses.",
  keywords: [
    "IT solutions",
    "Web development",
    "Mobile app development",
    "E-commerce development",
    "AI development",
    "Cloud solutions",
    "Best N Well",
    "Tamil Nadu IT company",
    "UI UX design",
    "DevOps",
    "App publishing",
    "24/7 IT support",
  ],
  authors: [{ name: "Best N Well" }],
  openGraph: {
    title: "Best N Well — Modern IT Solutions",
    description:
      "Web, Mobile, AI, E-commerce, Cloud, DevOps, Publishing, Monitoring & Support — all under one roof.",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}

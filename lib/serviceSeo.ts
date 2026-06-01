// SEO content for individual service landing pages (/services/[slug]).
// `title` matches the corresponding entry in `services` (lib/data.ts) so the
// page can reuse its icon, tag and feature list.

export type ServiceSeo = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  why: string;
  keywords: string[];
};

export const serviceSeo: ServiceSeo[] = [
  {
    slug: "web-development",
    title: "Website Development",
    h1: "Website Development Company",
    metaTitle: "Website Development Company | Custom Websites — Kaagam Software Solutions",
    metaDescription:
      "Professional website development company building fast, SEO-friendly, mobile-first websites for businesses. Custom design, Next.js & WordPress. Get a free quote.",
    intro: [
      "Your website is the first thing customers judge you by. We design and build fast, beautiful, mobile-first websites that load in milliseconds, rank on Google and turn visitors into enquiries.",
      "From a single landing page to a multi-page corporate site, every project is custom-built for your brand — no cookie-cutter templates — with SEO and performance baked in from day one.",
    ],
    why: "We pair clean, modern design with engineering that scores top marks on Core Web Vitals, so your site is both gorgeous and genuinely fast. You own the code and content, and we support you after launch.",
    keywords: [
      "website development company",
      "website design company",
      "custom website development",
      "business website development",
      "Next.js website development",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    h1: "Mobile App Development Company",
    metaTitle: "Mobile App Development Company | Android & iOS Apps — Kaagam Software Solutions",
    metaDescription:
      "Mobile app development company building native and cross-platform Android & iOS apps with Flutter and React Native. From idea to App Store. Get a free quote.",
    intro: [
      "We build mobile apps people keep on their home screen — fast, intuitive and reliable. Using Flutter and React Native, we ship a single high-quality codebase that runs beautifully on both Android and iOS.",
      "From your first MVP to a feature-rich product, we handle design, development, store submission and updates end to end.",
    ],
    why: "Cross-platform delivery means you reach every customer at a fraction of the cost of building twice — without compromising on a native, polished feel.",
    keywords: [
      "mobile app development company",
      "Android app development",
      "iOS app development",
      "Flutter app development",
      "React Native app development",
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Solutions",
    h1: "E-commerce Development Company",
    metaTitle: "E-commerce Development Company | Online Stores — Kaagam Software Solutions",
    metaDescription:
      "E-commerce development company building high-converting online stores on Shopify, WooCommerce and custom platforms — secure payments, inventory & more.",
    intro: [
      "Sell more online with a store built to convert. We create fast, secure e-commerce experiences — from single-product Shopify sites to large custom marketplaces — with smooth checkout and trustworthy payments.",
      "Inventory, orders, payment gateways and WhatsApp ordering all work together so running your store is effortless.",
    ],
    why: "Every store is optimised for mobile shoppers and search engines, with abandoned-cart recovery and analytics so you keep growing revenue after launch.",
    keywords: [
      "e-commerce development company",
      "online store development",
      "Shopify development",
      "WooCommerce development",
      "ecommerce website India",
    ],
  },
  {
    slug: "ai-development",
    title: "AI & Generative AI",
    h1: "AI Development Company",
    metaTitle: "AI Development Company | Chatbots & Generative AI — Kaagam Software Solutions",
    metaDescription:
      "AI development company integrating chatbots, generative AI, document intelligence and recommendation engines into your website, app or business workflow.",
    intro: [
      "Bring practical AI into your product. We integrate GPT and Claude-powered chatbots, generative content, smart search and recommendation engines that capture leads and save your team hours.",
      "We focus on use cases that pay for themselves — not hype — and keep a human in the loop where it matters.",
    ],
    why: "From a 24/7 support chatbot to document parsing and predictive analytics, we make AI useful and affordable for businesses of every size.",
    keywords: [
      "AI development company",
      "AI chatbot development",
      "generative AI services",
      "AI integration company",
      "machine learning development",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    h1: "UI/UX Design Services",
    metaTitle: "UI/UX Design Services | Product & App Design — Kaagam Software Solutions",
    metaDescription:
      "UI/UX design services that turn visitors into customers — user research, wireframes, Figma design systems, prototypes and brand design.",
    intro: [
      "Great design isn't decoration — it's how you turn first-time visitors into loyal customers. We run research-led, brand-aligned design from wireframes to polished, interactive prototypes.",
      "Designers and developers work in the same Figma file, so what we design is exactly what gets built.",
    ],
    why: "We design for clarity, conversion and accessibility, with usability testing to make sure real users love it before a line of production code is written.",
    keywords: [
      "UI UX design services",
      "product design company",
      "Figma design",
      "app design services",
      "website UX design",
    ],
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    h1: "Custom Web Application Development",
    metaTitle: "Custom Web Application Development | SaaS & Dashboards — Kaagam Software Solutions",
    metaDescription:
      "Custom web application development for SaaS dashboards, CRMs, ERPs and internal tools — built to your exact workflow with secure, scalable architecture.",
    intro: [
      "When off-the-shelf tools can't keep up, we build software around how you actually work. From SaaS dashboards and CRMs to ERPs and internal tools, we deliver web apps that remove bottlenecks and scale with you.",
      "Role-based access, real-time data and API-first architecture come as standard.",
    ],
    why: "We build maintainable, secure systems that grow with your business — so your custom platform becomes a competitive advantage, not technical debt.",
    keywords: [
      "custom web application development",
      "SaaS development company",
      "CRM development",
      "ERP development",
      "business software development",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    h1: "Cloud & DevOps Services",
    metaTitle: "Cloud & DevOps Services | AWS, Azure, GCP — Kaagam Software Solutions",
    metaDescription:
      "Cloud and DevOps services — production-grade infrastructure on AWS, Azure and GCP with Docker, Kubernetes, CI/CD pipelines and auto-scaling.",
    intro: [
      "Ship faster and sleep better with production-grade cloud infrastructure. We set up AWS, Azure or GCP environments with automated CI/CD, containerisation and auto-scaling so your product stays fast and reliable.",
      "We also optimise cloud costs so you only pay for what you actually use.",
    ],
    why: "Automated pipelines and infrastructure-as-code mean fewer outages, quicker releases and a system that scales smoothly as your traffic grows.",
    keywords: [
      "cloud and DevOps services",
      "AWS consulting",
      "DevOps company",
      "CI/CD pipeline setup",
      "Kubernetes Docker services",
    ],
  },
  {
    slug: "app-publishing-deployment",
    title: "App Publishing & Deployment",
    h1: "App Publishing & Deployment Services",
    metaTitle: "App Publishing & Deployment | App Store & Play Store — Kaagam Software Solutions",
    metaDescription:
      "End-to-end app publishing and deployment — App Store and Play Store submission, store compliance, hosting, domains and SSL setup.",
    intro: [
      "Getting published can be the hardest part. We handle the full App Store and Play Store submission process — screenshots, descriptions, store policy reviews and approvals — plus hosting, domains and SSL for web.",
      "If your app gets rejected, we know how to fix it and resubmit fast.",
    ],
    why: "We've navigated store reviews and deployment many times, so launches are smooth and you go live without the usual surprises.",
    keywords: [
      "app publishing services",
      "Play Store submission",
      "App Store submission",
      "app deployment services",
      "website hosting setup",
    ],
  },
  {
    slug: "monitoring-analytics",
    title: "Monitoring & Analytics",
    h1: "Monitoring & Analytics Services",
    metaTitle: "Monitoring & Analytics Services | Uptime & Insights — Kaagam Software Solutions",
    metaDescription:
      "Monitoring and analytics services — real-time uptime and performance monitoring, error tracking, Google Analytics 4 setup and custom dashboards.",
    intro: [
      "Know what's happening across your product at all times. We set up real-time uptime and performance monitoring, error tracking, and Google Analytics 4 so you catch issues before customers do.",
      "Custom dashboards turn raw data into the few numbers that actually matter for your business.",
    ],
    why: "With alerting via Slack or email and clear dashboards, you get visibility and peace of mind — and the insights to keep improving.",
    keywords: [
      "website monitoring services",
      "Google Analytics setup",
      "performance monitoring",
      "error tracking",
      "analytics dashboards",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & 24/7 Support",
    h1: "Website & App Maintenance and Support",
    metaTitle: "Website & App Maintenance and 24/7 Support — Kaagam Software Solutions",
    metaDescription:
      "Reliable website and app maintenance with 24/7 support — security patches, updates, backups, disaster recovery and feature enhancements under a clear SLA.",
    intro: [
      "Software needs care to stay secure and fast. Our dedicated support keeps your website or app updated, backed up and protected — with incident response when you need it.",
      "You get a clear SLA, monthly health reports and a team that treats your product like its own.",
    ],
    why: "Proactive maintenance prevents the expensive emergencies. We fix issues fast, ship improvements regularly, and keep your product growing.",
    keywords: [
      "website maintenance services",
      "app maintenance and support",
      "24/7 IT support",
      "website AMC",
      "software support company",
    ],
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    h1: "SEO & Digital Marketing Services",
    metaTitle: "SEO & Digital Marketing Services | Rank on Google — Kaagam Software Solutions",
    metaDescription:
      "SEO and digital marketing services to get found on Google — on-page & technical SEO, local SEO, Google & Meta Ads, content and conversion optimisation.",
    intro: [
      "Get found by the customers already searching for you. We combine technical and on-page SEO, local SEO, content strategy and paid ads to grow your traffic and turn it into real leads.",
      "Every campaign is measured, so you can see exactly what's working and what it's worth.",
    ],
    why: "We build SEO into everything we develop, then amplify it with data-driven content and ads — so your growth compounds month after month.",
    keywords: [
      "SEO services company",
      "digital marketing agency",
      "local SEO services",
      "Google Ads management",
      "search engine optimization India",
    ],
  },
  {
    slug: "cybersecurity-audits",
    title: "Cybersecurity & Audits",
    h1: "Cybersecurity & Security Audit Services",
    metaTitle: "Cybersecurity & Security Audit Services — Kaagam Software Solutions",
    metaDescription:
      "Cybersecurity and audit services — penetration testing, OWASP Top-10 audits, SSL/HTTPS hardening, secure code review and data compliance.",
    intro: [
      "Protect your business and your customers' data. We run penetration tests, vulnerability audits and secure code reviews, and harden your SSL/HTTPS setup so you can operate with confidence.",
      "We also help with GDPR and data-compliance basics for businesses handling sensitive information.",
    ],
    why: "Security isn't a one-time checkbox. We find and fix weaknesses before attackers do, and give you a clear report on exactly what was improved.",
    keywords: [
      "cybersecurity services",
      "penetration testing",
      "security audit company",
      "OWASP audit",
      "secure code review",
    ],
  },
];

export function getServiceSeo(slug: string): ServiceSeo | undefined {
  return serviceSeo.find((s) => s.slug === slug);
}

const titleToSlug = new Map(serviceSeo.map((s) => [s.title, s.slug]));

export function getServiceSlug(title: string): string | undefined {
  return titleToSlug.get(title);
}

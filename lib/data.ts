import {
  Globe,
  Smartphone,
  ShoppingBag,
  Brain,
  Cloud,
  Activity,
  Wrench,
  Search,
  PenTool,
  Server,
  Rocket,
  Shield,
  MessageSquare,
  Bot,
  Sparkles as SparklesIcon,
  FileText,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Best N Well",
  tagline: "Modern IT Solutions",
  email: "kaviyarasanaruchamy@gmail.com",
  phone: "+91 9585680636",
  phoneRaw: "919585680636",
  whatsapp: "919585680636",
  whatsappMessage:
    "Hi Best N Well, I'd like to discuss a project with your team.",
  location: "Tamil Nadu, India",
};

export type Service = {
  icon: LucideIcon;
  title: string;
  short: string;
  features: string[];
  tag: string;
  color: string;
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Website Development",
    short:
      "Lightning-fast, SEO-optimized corporate, portfolio and landing-page websites built with modern frameworks.",
    features: [
      "Custom responsive design",
      "Next.js, React, WordPress",
      "Blazing Core Web Vitals",
      "CMS & blog integration",
      "Multi-language support",
    ],
    tag: "Web",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    short:
      "Native iOS, Android and cross-platform apps using Flutter and React Native with pixel-perfect UI.",
    features: [
      "Flutter & React Native",
      "Native iOS / Android",
      "Offline-first architecture",
      "Push notifications & deep links",
      "App Store & Play Store publishing",
    ],
    tag: "Mobile",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    short:
      "Conversion-driven online stores — from single-product Shopify sites to large custom marketplaces.",
    features: [
      "Shopify, WooCommerce, Magento",
      "Custom marketplaces",
      "Payment gateway integration",
      "Inventory & order management",
      "Abandoned cart automation",
    ],
    tag: "E-commerce",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Brain,
    title: "AI & Generative AI",
    short:
      "AI chatbots, generative content, recommendation engines and ML-powered features embedded into your product.",
    features: [
      "GPT / Claude chatbot integration",
      "Image & content generation",
      "Recommendation systems",
      "OCR & document parsing",
      "Predictive analytics",
    ],
    tag: "AI",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    short:
      "Research-led, brand-aligned interfaces that turn first-time visitors into long-term customers.",
    features: [
      "User research & wireframes",
      "Figma design systems",
      "Interactive prototypes",
      "Usability testing",
      "Brand & logo design",
    ],
    tag: "Design",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Server,
    title: "Custom Web Applications",
    short:
      "SaaS dashboards, CRMs, ERPs and internal tools built to your exact workflow.",
    features: [
      "SaaS dashboards & portals",
      "CRM / ERP / HRMS",
      "Role-based access control",
      "Real-time data sync",
      "API-first architecture",
    ],
    tag: "Web Apps",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    short:
      "Production-grade cloud infrastructure on AWS, Azure and GCP with automated CI/CD pipelines.",
    features: [
      "AWS / Azure / GCP setup",
      "Docker & Kubernetes",
      "CI/CD with GitHub Actions",
      "Auto-scaling & load balancing",
      "Cost optimization",
    ],
    tag: "DevOps",
    color: "from-sky-400 to-indigo-500",
  },
  {
    icon: Rocket,
    title: "App Publishing & Deployment",
    short:
      "End-to-end publishing on App Store, Play Store and hosting platforms — including approvals and rejections handling.",
    features: [
      "App Store submission",
      "Play Store submission",
      "Domain & SSL setup",
      "Server provisioning",
      "Store policy compliance",
    ],
    tag: "Publishing",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Activity,
    title: "Monitoring & Analytics",
    short:
      "Real-time visibility into performance, uptime, errors and user behaviour across every platform.",
    features: [
      "Uptime & performance monitoring",
      "Error tracking (Sentry)",
      "Google Analytics 4 setup",
      "Custom dashboards",
      "Alerting via Slack / email",
    ],
    tag: "Monitoring",
    color: "from-teal-400 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Maintenance & 24/7 Support",
    short:
      "Dedicated support team to keep your product secure, updated and growing — without surprises.",
    features: [
      "24/7 incident response",
      "Security patches & updates",
      "Backup & disaster recovery",
      "Feature enhancements",
      "Monthly health reports",
    ],
    tag: "Support",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    short:
      "Get found on Google and convert traffic into customers with data-driven SEO and ad campaigns.",
    features: [
      "On-page & technical SEO",
      "Google Ads & Meta Ads",
      "Content & blog strategy",
      "Social media management",
      "Conversion-rate optimization",
    ],
    tag: "Marketing",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Audits",
    short:
      "Penetration tests, vulnerability audits and compliance setup so you can sleep at night.",
    features: [
      "Web & mobile pentests",
      "OWASP Top-10 audits",
      "SSL & HTTPS hardening",
      "GDPR / data compliance",
      "Secure code review",
    ],
    tag: "Security",
    color: "from-red-500 to-orange-500",
  },
];

export const aiFeatures = [
  {
    icon: Bot,
    title: "AI Chatbots",
    desc: "GPT-4 / Claude-powered conversational assistants embedded into your website or app — 24/7 support, lead capture, FAQ automation.",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    icon: SparklesIcon,
    title: "Generative Content",
    desc: "AI-powered content creation for blogs, product descriptions, social media, marketing copy and images.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    desc: "OCR, summarization, contract review, invoice parsing, and intelligent search across your documents.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    desc: "Forecast sales, detect anomalies, recommend products, and surface insights using machine learning.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: MessageSquare,
    title: "Voice & Speech AI",
    desc: "Speech-to-text transcription, voice assistants, multilingual translation, and audio analysis.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    desc: "Semantic search that understands intent — replace clunky keyword search with vector-based AI search.",
    color: "from-indigo-500 to-purple-500",
  },
];

export const stats = [
  { value: 1, suffix: "+", label: "Live Web Project" },
  { value: 5, suffix: "+", label: "Mobile Apps Built" },
  { value: 100, suffix: "%", label: "Client Focus" },
  { value: 24, suffix: "/7", label: "Support Coverage" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We kick off with a deep-dive into your goals, users, competitors and constraints to align on vision.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes, mockups and interactive prototypes — refined against your brand and business KPIs.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Agile sprints with weekly demos. You see progress every week, not at the end.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "We publish to stores, configure hosting, set up monitoring and hand over with documentation.",
  },
  {
    step: "05",
    title: "Support",
    desc: "Ongoing maintenance, performance tuning and feature rollouts under a clear SLA.",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "Flutter",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "Python",
  "Django",
  "Laravel",
  "WordPress",
  "Shopify",
  "AWS",
  "Azure",
  "Google Cloud",
  "Firebase",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Stripe",
  "Tailwind CSS",
  "OpenAI",
  "Figma",
  "GitHub Actions",
];

export const projects = [
  {
    title: "Trip With Uz",
    category: "Travel Web Platform",
    desc: "A complete travel booking and discovery platform with itinerary planning, destination guides and seamless booking experience.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-cyan-500/30 to-purple-500/30",
    url: "https://tripwithuz.com/",
    live: true,
    featured: true,
  },
  {
    title: "Custom Mobile Apps",
    category: "iOS + Android",
    desc: "Multiple cross-platform mobile applications delivered for clients across travel, healthcare and lifestyle domains.",
    tags: ["Flutter", "React Native", "Firebase"],
    gradient: "from-pink-500/30 to-purple-500/30",
    live: true,
    featured: false,
  },
  {
    title: "Your Project Could Be Next",
    category: "Coming Soon",
    desc: "We're actively building the next wave of websites, mobile apps and AI products. Get in touch to discuss your idea.",
    tags: ["Web", "Mobile", "AI"],
    gradient: "from-emerald-500/20 to-cyan-500/20",
    live: false,
    featured: false,
  },
];

export const whyUs = [
  {
    title: "Modern Tech Stack",
    desc: "We use only the latest, production-proven frameworks — never legacy code that haunts you later.",
  },
  {
    title: "Transparent Pricing",
    desc: "Fixed-scope quotes, no hidden costs. You always know exactly where your budget is going.",
  },
  {
    title: "Pixel-Perfect Design",
    desc: "Every screen reviewed against your brand guide. Designers and developers on the same Figma file.",
  },
  {
    title: "On-Time Delivery",
    desc: "We commit to milestones in writing and hit them. Our promise: ship when we say we will.",
  },
  {
    title: "Post-Launch Care",
    desc: "Bugs found within 90 days are fixed free. Optional SLAs from there for true peace of mind.",
  },
  {
    title: "Made in Tamil Nadu",
    desc: "Rooted in Tamil Nadu, India — building modern digital products for clients near and far.",
  },
];

export const testimonials = [
  {
    name: "Trip With Uz Team",
    role: "Travel Platform",
    quote:
      "Best N Well took our travel platform from concept to a live, production-ready product. Their attention to detail and modern stack choices set us up for serious scale.",
  },
  {
    name: "Mobile App Client",
    role: "Cross-platform App",
    quote:
      "The team delivered our mobile app with polish we didn't expect at this price point. Cross-platform feel, native performance, and easy publishing to both stores.",
  },
  {
    name: "Long-term Partner",
    role: "Ongoing Maintenance",
    quote:
      "They stay on after launch — bug fixes, feature requests, performance tuning. It feels like having a tech partner, not just a vendor.",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites take 3–6 weeks, mobile apps 8–14 weeks, and full SaaS platforms 3–6 months. We share a clear timeline before signing.",
  },
  {
    q: "How much does it cost to build a website or app?",
    a: "Websites start around ₹35,000 and mobile apps from ₹1,50,000. Final pricing depends on scope — message us on WhatsApp for a free quote within 24 hours.",
  },
  {
    q: "Do you sign an NDA before discussing my idea?",
    a: "Yes, absolutely. We're happy to sign a mutual NDA before any project details are shared.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. Every project includes 90 days of free post-launch support, with optional monthly SLAs after that.",
  },
  {
    q: "Can you publish my app to App Store and Play Store?",
    a: "Yes — we handle the full submission process, store policy reviews, screenshots, descriptions and approvals.",
  },
  {
    q: "Do you offer AI integration into existing products?",
    a: "Yes. We can add GPT/Claude chatbots, AI search, content generation and recommendation engines into any existing web or mobile product.",
  },
  {
    q: "Where are you based?",
    a: "Our team is based in Tamil Nadu, India. We work remotely with clients across India and globally.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#ai", label: "AI" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

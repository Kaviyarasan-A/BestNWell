# Best N Well — Portfolio Website

A modern, animated portfolio website for Best N Well IT Solutions.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
bestnwell/
├── app/
│   ├── layout.tsx          # Root layout + metadata + SEO
│   ├── page.tsx            # Main landing page (assembles all sections)
│   └── globals.css         # Global styles, theme, utilities
├── components/
│   ├── Navbar.tsx          # Sticky animated nav with mobile menu
│   ├── Hero.tsx            # Hero with rotating titles + floating cards
│   ├── About.tsx           # About + animated stats counters
│   ├── Services.tsx        # All 12 IT services with hover effects
│   ├── Process.tsx         # 5-step process timeline
│   ├── TechStack.tsx       # Marquee of technologies we use
│   ├── Portfolio.tsx       # Project case study cards
│   ├── WhyUs.tsx           # 6 reasons to choose us
│   ├── Testimonials.tsx    # Auto-rotating client quotes
│   ├── FAQ.tsx             # Accordion FAQs
│   ├── Contact.tsx         # Contact form + info cards
│   ├── Footer.tsx          # Footer with CTA, links, newsletter
│   └── SectionHeader.tsx   # Shared eyebrow + title component
├── lib/
│   └── data.ts             # All content data (services, projects, etc.)
└── tailwind.config.ts      # Tailwind theme — colors, animations
```

## Customization

- **All copy and content** lives in `lib/data.ts`. Edit there to update services, projects, testimonials, FAQs, stats, etc.
- **Colors and theme** are in `tailwind.config.ts`.
- **Animations** use Framer Motion — tweak `transition` props in each component.
- **Contact form** currently shows a success message locally. To make it real, hook the `onSubmit` in `components/Contact.tsx` to:
  - Resend / SendGrid / your own API route at `app/api/contact/route.ts`
  - Or a service like Formspree / Web3Forms (no backend needed)

## Deployment Options

- **Vercel** (recommended): `vercel deploy` — zero-config for Next.js
- **Netlify**: works out of the box with `npm run build`
- **Self-hosted**: `npm run build && npm run start` on any Node host
- **Static export**: add `output: "export"` to `next.config.js` if you want plain HTML for shared hosting (note: this disables some features like dynamic routes)

## Brand
- Name: **Best N Well**
- Email: info@catchuhealthcare.com
- Tagline: "We build modern websites, mobile apps, e-commerce & AI solutions that drive growth."

---

Built with Next.js + Framer Motion · Dark + Neon Gradient aesthetic.

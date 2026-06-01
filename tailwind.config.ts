import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light warm theme
        background: "#FBF7F2",      // warm cream
        surface: "#FFFFFF",          // pure white cards
        foreground: "#1A1A1A",       // near-black text
        muted: "#6B6B6B",            // gray text
        line: "#E8E2D8",             // subtle borders

        brand: {
          DEFAULT: "#C4633E",        // terracotta
          50: "#FBF2EC",
          100: "#F5E1D2",
          200: "#EBC2A5",
          300: "#E0A47B",
          400: "#D58455",
          500: "#C4633E",
          600: "#A04F30",
          700: "#7C3C24",
          800: "#5A2C1A",
          900: "#3D1D11",
        },
        accent: {
          orange: "#E89172",         // light terracotta
          deep: "#8E3E20",           // deep terracotta
          gold: "#D4A276",           // warm gold
          cream: "#F5E8D5",          // soft cream
          dark: "#1F1F1F",           // contrast dark
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "warm-glow":
          "radial-gradient(ellipse at top, rgba(196,99,62,0.10), transparent 60%), radial-gradient(ellipse at bottom right, rgba(232,145,114,0.08), transparent 60%)",
        "hero-warm":
          "linear-gradient(135deg, rgba(196,99,62,0.06) 0%, rgba(251,247,242,0) 50%, rgba(232,145,114,0.05) 100%)",
        "diagonal-warm":
          "linear-gradient(135deg, #C4633E 0%, #C4633E 50%, #FFFFFF 50%, #FFFFFF 100%)",
        "card-warm":
          "linear-gradient(135deg, rgba(196,99,62,0.04), rgba(232,145,114,0.02))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -20px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 30s linear infinite",
        blob: "blob 12s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(196,99,62,0.08)",
        warm: "0 8px 40px rgba(196,99,62,0.15)",
        deep: "0 20px 60px rgba(31,31,31,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

import Image from "next/image";
import { company } from "@/lib/data";

// Intrinsic size of /public/logo-mark.png (transparent bird + K emblem).
const MARK_W = 486;
const MARK_H = 500;
const ratio = MARK_W / MARK_H;

/**
 * Logo — the transparent Kaagam emblem paired with a large wordmark and
 * tagline (styled after the brand lockup). `tone` adapts colours for light
 * (navbar) vs. dark (footer) backgrounds; on dark the emblem is shown as a
 * bright silhouette so it stays legible without a solid box.
 */
export function Logo({
  tone = "light",
  height = 48,
  className = "",
}: {
  tone?: "light" | "dark";
  height?: number;
  className?: string;
}) {
  const isDark = tone === "dark";
  const word = isDark ? "text-white" : "text-foreground";
  const tagline = isDark ? "text-brand-300" : "text-brand-600";

  return (
    <span className={`inline-flex items-center gap-3 group ${className}`}>
      <span className="relative inline-flex items-center justify-center shrink-0">
        {isDark && (
          <span className="absolute inset-0 rounded-full bg-brand-500/30 blur-lg" />
        )}
        <Image
          src="/logo-mark.png"
          alt={`${company.name} logo`}
          width={Math.round(height * ratio)}
          height={height}
          priority
          className={`relative w-auto object-contain transition-transform group-hover:scale-105 ${
            isDark ? "[filter:brightness(0)_invert(1)]" : ""
          }`}
          style={{ height }}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-2xl sm:text-[26px] tracking-tight ${word}`}
        >
          {company.brand}
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.2em] mt-1.5 ${tagline}`}
        >
          {company.brandSuffix}
        </span>
      </span>
    </span>
  );
}

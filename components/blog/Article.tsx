import { Fragment, type ReactNode } from "react";
import type { BlogBlock } from "@/lib/blog";

/** Render a string with **bold** and *italic* markdown-style inline formatting. */
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function Article({ body }: { body: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {body.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-display text-2xl sm:text-3xl font-bold text-foreground pt-4 scroll-mt-24"
              >
                {renderInline(block.text)}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-foreground/80 leading-relaxed text-lg">
                {renderInline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-foreground/80 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span>{renderInline(it)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3 counter-reset">
                {block.items.map((it, j) => (
                  <li key={j} className="flex gap-3.5 text-foreground/80 leading-relaxed">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{renderInline(it)}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-brand-500 bg-brand-50/50 rounded-r-2xl px-6 py-5 text-lg font-display font-medium text-foreground/90 italic"
              >
                {renderInline(block.text)}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

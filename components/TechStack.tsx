"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function TechStack() {
  const looped = [...techStack, ...techStack];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden section-light">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Toolbox"
          title={
            <>
              Modern frameworks. <span className="gradient-text">Battle-tested in production.</span>
            </>
          }
          subtitle="We pick the right tool for the job — and only ship tech we trust at scale."
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee whitespace-nowrap py-3"
          style={{ width: "max-content" }}
        >
          {looped.map((tech, i) => (
            <motion.div
              key={`${tech}-${i}`}
              whileHover={{ scale: 1.08 }}
              className="mx-2 px-6 py-3 rounded-2xl surface-card text-foreground font-semibold text-sm whitespace-nowrap"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <div
          className="flex animate-marquee whitespace-nowrap py-3 mt-3"
          style={{
            width: "max-content",
            animationDirection: "reverse",
            animationDuration: "40s",
          }}
        >
          {looped
            .slice()
            .reverse()
            .map((tech, i) => (
              <motion.div
                key={`r-${tech}-${i}`}
                whileHover={{ scale: 1.08 }}
                className="mx-2 px-6 py-3 rounded-2xl warm-card text-foreground font-semibold text-sm whitespace-nowrap"
              >
                {tech}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

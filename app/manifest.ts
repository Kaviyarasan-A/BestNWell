import type { MetadataRoute } from "next";
import { company } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "Kaagam",
    description: `${company.name} — ${company.tagline}`,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F2",
    theme_color: "#7C3C24",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}

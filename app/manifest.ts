import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nameAm} · ${site.nameEn} — ${site.taglineEn}`,
    short_name: site.nameEn,
    description: site.seo.descriptionEn,
    lang: "am",
    start_url: "/",
    display: "standalone",
    background_color: "#f3ece1",
    theme_color: "#2b1b12",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}

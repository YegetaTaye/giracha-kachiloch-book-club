import type { Metadata } from "next";
import { site } from "@/content/site";

// Shared Open Graph fields. Next.js merges metadata shallowly, so a page that
// sets its own openGraph must repeat these or it loses them.
export const openGraphBase = {
  type: "website",
  siteName: `${site.nameAm} · ${site.nameEn}`,
  locale: "am_ET",
  alternateLocale: ["en_US"],
} satisfies Metadata["openGraph"];

/** Title, description, canonical URL and Open Graph tags for one route. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...openGraphBase, title, description, url: path },
  };
}

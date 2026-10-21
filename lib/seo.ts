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

// A route that sets openGraph no longer inherits app/opengraph-image.jpg, so
// child routes name it explicitly.
const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.nameAm} — ${site.nameEn}, ${site.taglineEn}: a reading house in ${site.location.town}, ${site.location.country}.`,
};

/** Title, description, canonical URL and share tags for one route. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...openGraphBase, title, description, url: path, images: [shareImage] },
    twitter: { card: "summary_large_image", title, description, images: [shareImage] },
  };
}

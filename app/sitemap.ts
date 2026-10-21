import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

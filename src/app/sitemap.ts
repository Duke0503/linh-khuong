import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/gioi-thieu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/san-pham`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/du-an`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/tin-tuc`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/lien-he`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}

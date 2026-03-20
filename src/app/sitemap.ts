import type { MetadataRoute } from "next";

const SITE_URL = "https://linh-khuong.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                        lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/ve-chung-toi`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}

import { siteUrl } from "@/lib/siteConfig";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

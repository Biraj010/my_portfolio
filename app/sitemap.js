import { siteUrl } from "@/lib/siteConfig";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/#about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/#work", changeFrequency: "monthly", priority: 0.8 },
    { path: "/#skills", changeFrequency: "monthly", priority: 0.7 },
    { path: "/#projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/#education", changeFrequency: "yearly", priority: 0.5 },
    { path: "/#contact", changeFrequency: "yearly", priority: 0.6 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

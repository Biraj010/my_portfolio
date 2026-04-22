import "./globals.css";
import { siteUrl } from "@/lib/siteConfig";

const title = "Biraj Regmi — Full Stack Developer | MERN Stack | Next.js";
const description =
  "Full-stack web developer with 3.5+ years of experience building responsive and scalable applications using React, Next.js, Node.js, Express, Prisma, PostgreSQL, and MongoDB. Experienced in REST APIs, Linux production servers, Nginx, Docker, and CI/CD.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Biraj Regmi",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Web Developer Nepal",
    "Kathmandu Developer",
  ],
  authors: [{ name: "Biraj Regmi", url: siteUrl }],
  creator: "Biraj Regmi",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName: "Biraj Regmi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

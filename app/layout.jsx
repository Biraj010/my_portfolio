import "./globals.css";
import { siteUrl } from "@/lib/siteConfig";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const title = "Biraj Regmi — Full Stack Developer | MERN Stack | Next.js";
const description =
  "Biraj Regmi — Full-stack developer in Kathmandu with 3.5+ yrs experience building scalable web apps with React, Next.js, Node.js, PostgreSQL, Docker & CI/CD.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Biraj Regmi",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  description:
    "Full-stack web developer with 3.5+ years of experience building responsive and scalable applications using React, Next.js, Node.js, Express, Prisma, PostgreSQL, and MongoDB.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Nginx",
    "CI/CD",
    "REST APIs",
    "MERN Stack",
  ],
  sameAs: [
    "https://github.com/Biraj010",
    "https://linkedin.com/in/birajregmi",
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | Biraj Regmi`,
  },
  description,
  keywords: [
    "Biraj Regmi",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "PostgreSQL Developer",
    "Prisma Developer",
    "MongoDB Developer",
    "Docker Developer",
    "Web Developer Nepal",
    "Kathmandu Developer",
    "Hire Full Stack Developer",
    "Freelance Web Developer Nepal",
    "Software Engineer Nepal",
    "Backend Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Biraj Regmi", url: siteUrl }],
  creator: "Biraj Regmi",
  publisher: "Biraj Regmi",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Biraj Regmi Portfolio",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Biraj Regmi — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

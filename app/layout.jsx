import "./globals.css";
import { siteUrl } from "@/lib/siteConfig";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ||
  "JONLQ8ls2QcbwewbSPvDKC_NJUV5fBAM0ShCSSfuFyA";

const title =
  "Biraj Regmi — Full Stack Developer | React, Next.js & Node.js";
const description =
  "Full Stack Developer with 3.5+ years building scalable React, Next.js & Node.js apps. Hire Biraj Regmi — MERN stack expert from Kathmandu, Nepal.";

const personSchema = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Biraj Regmi",
  alternateName: "Biraj",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer with 3.5+ years of experience building scalable web applications using React, Next.js, Node.js, Express, Prisma, PostgreSQL, and MongoDB.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati",
    addressCountry: "NP",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Nginx",
    "Linux",
    "CI/CD",
    "REST APIs",
    "MERN Stack",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
  sameAs: [
    "https://github.com/Biraj010",
    "https://linkedin.com/in/birajregmi",
  ],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Biraj Regmi — Full Stack Developer Portfolio",
  description:
    "Portfolio of Biraj Regmi, a Full Stack Developer specializing in React, Next.js, Node.js and the MERN stack.",
  inLanguage: "en-US",
  publisher: { "@id": `${siteUrl}/#person` },
  author: { "@id": `${siteUrl}/#person` },
};

const professionalServiceSchema = {
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: "Biraj Regmi — Full Stack Web Development Services",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  description:
    "Freelance and contract Full Stack Web Development services by Biraj Regmi — specializing in MERN stack, React, Next.js, Node.js, Express, Prisma, PostgreSQL, MongoDB, and production deployments on Linux, Nginx, and Docker.",
  provider: { "@id": `${siteUrl}/#person` },
  areaServed: [
    { "@type": "Country", name: "Nepal" },
    { "@type": "Place", name: "Worldwide (Remote)" },
  ],
  serviceType: [
    "Full Stack Web Development",
    "MERN Stack Development",
    "React and Next.js Development",
    "Node.js and Express API Development",
    "CMS and Admin Panel Development",
    "DevOps and Deployment (Linux, Nginx, Docker)",
  ],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati",
    addressCountry: "NP",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Biraj Regmi available for hire as a Full Stack Developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Biraj Regmi is available for full-time roles, freelance projects, and product collaborations — both remote and on-site in Kathmandu, Nepal.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack does Biraj Regmi specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biraj specializes in the MERN stack — React, Next.js, Node.js, Express, and MongoDB — along with PostgreSQL, Prisma ORM, Socket.IO for real-time features, JWT and NextAuth authentication, and production deployment on Linux, Nginx, and Docker.",
      },
    },
    {
      "@type": "Question",
      name: "How many years of experience does Biraj Regmi have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biraj has 3.5+ years of experience shipping production web applications, including e-commerce storefronts, CMS platforms, press-release distribution systems, and real-time chat applications.",
      },
    },
    {
      "@type": "Question",
      name: "Can Biraj Regmi work with international clients remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Biraj works with clients worldwide on a remote basis and has delivered freelance projects for companies across Nepal, Australia, and beyond.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema, professionalServiceSchema, faqSchema],
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
    "Full Stack Developer Nepal",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Hire Full Stack Developer",
    "Freelance Web Developer Nepal",
    "Web Developer Kathmandu",
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
  ...(googleVerification && {
    verification: {
      google: googleVerification,
    },
  }),
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
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

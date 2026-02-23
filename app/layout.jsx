import "./globals.css";

export const metadata = {
  title: "Biraj Regmi - Full Stack Developer | MERN Stack | Next.js",
  description:
    "Full-stack web developer with hands-on experience building responsive and scalable applications using React.js, Next.js, Node.js, Express, and MongoDB. Experienced in designing RESTful APIs, managing Linux-based production servers, configuring Nginx, and deploying applications to cloud environments and also in Blockchain and writing SmartContract in Ethereum Platform.",
  keywords: [
    "Biraj Regmi",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Blockchain Developer",
    "Solidity",
    "Web Developer Nepal",
    "Kathmandu Developer",
  ],
  authors: [{ name: "Biraj Regmi" }],
  creator: "Biraj Regmi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://birajregmi.dev",
    title: "Biraj Regmi - Full Stack Developer",
    description:
      "Full-stack web developer specializing in MERN stack, Next.js, and Blockchain development.",
    siteName: "Biraj Regmi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biraj Regmi - Full Stack Developer",
    description:
      "Full-stack web developer specializing in MERN stack, Next.js, and Blockchain development.",
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

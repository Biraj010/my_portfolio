const oppointment1 = "/assets/img/internship.png";
const oppointment2 = "/assets/img/internship2.png";
const oppointment3 = "/assets/img/card2.png";
const blood1 = "/assets/img/blood 1.png";
const blood2 = "/assets/img/blood 2.png";
const blood3 = "/assets/img/blood 3.png";
const blog1 = "/assets/img/blog 1.png";
const blog2 = "/assets/img/blog 2.png";
const blog3 = "/assets/img/blog 3.png";
const eCommerce1 = "/assets/img/e-commerce1.png";
const eCommerce2 = "/assets/img/e-commerce2.png";
const eCommerce3 = "/assets/img/e-commerce23.png";
const eCommerce4 = "/assets/img/e-commerce24.png";
const eCommerce5 = "/assets/img/e-commerce5.png";
const eCommerce6 = "/assets/img/e-commerce6.png";
const webloft1 = "/assets/img/webloft1.png";
const webloft2 = "/assets/img/webloft2.png";
const webloft3 = "/assets/img/webloft3.png";
const announceChainLegacy = "/assets/img/announce-chain.png";
const saSurgical1 = "/assets/img/sa-surgical-1.png";
const saSurgical2 = "/assets/img/sa-surgical-2.png";
const announceChain1 = "/assets/img/announce-chain-1.png";
const announceChain2 = "/assets/img/announce-chain-2.png";
const coinsea1 = "/assets/img/coinsea-1.png";
const coinsea2 = "/assets/img/coinsea-2.png";
const coinsea3 = "/assets/img/coinsea-3.png";

export const portfolioData = {
  header: {
    navLinks: [
      { href: "#about", text: "About" },
      { href: "#work", text: "Experience" },
      { href: "#skills", text: "Skills" },
      { href: "#projects", text: "Projects" },
      { href: "#education", text: "Education" },
      { href: "#contact", text: "Contact" },
    ],
  },
  hero: {
    name: "Biraj Regmi",
    role: "Full Stack Developer",
    location: "Kathmandu, Nepal",
    titles: [
      "Full-Stack Developer — React, Next.js, Node.js, Prisma",
      "Building secure MERN apps, CMS panels & real-time systems",
      "PostgreSQL, MongoDB, Socket.IO, JWT, NextAuth specialist",
      "Linux, Nginx, Docker, CI/CD deployments on DigitalOcean",
    ],
    description:
      "Full Stack Developer with 3.5+ years of experience building scalable products across React, Next.js, Node.js, Express, Prisma, PostgreSQL, and MongoDB. I deliver end-to-end systems covering frontend, backend APIs, CMS workflows, and production deployment — with a strong focus on maintainability, performance, and clean user experience.",
    badges: [
      "3.5+ years experience",
      "10+ projects shipped",
      "MERN + Next.js + Prisma",
      "Production deployments",
    ],
    stats: [
      { value: "3.5+", label: "Years Experience" },
      { value: "10+", label: "Projects Shipped" },
      { value: "4", label: "Production Roles" },
      { value: "100%", label: "Client Focus" },
    ],
  },
  about: {
    paragraph: `I am a Full Stack Developer based in Kathmandu, Nepal, delivering freelance and in-house systems end-to-end — covering frontend, backend APIs, CMS workflows, and production deployment. I have built secure authentication flows, e-commerce checkout and order systems, real-time chat, and admin panels with role-based access control.

My work combines strong product thinking with deep technical execution across React, Next.js, Node.js, Express, Prisma, PostgreSQL, and MongoDB. I take ownership from UI to deployment and ship products that are maintainable, performant, and pleasant to use.`,
    highlights: [
      "Ships production-ready apps with React, Next.js, and Vite",
      "Designs scalable APIs with Node.js, Express, and Prisma",
      "Models data in PostgreSQL, MongoDB with secure JWT flows",
      "Deploys and maintains Linux + Nginx + Docker stacks",
    ],
    personalInfo: {
      email: "regmibiraj.dev@gmail.com",
      phone: "+977 9846892218",
      address: "Kathmandu, Nepal",
      linkedin: "https://www.linkedin.com/in/biraj-regmi-007679183",
      github: "https://github.com/Biraj010",
      portfolio: "https://regmibiraj.com.np",
    },
    services: [
      {
        title: "Full-Stack Web Development",
        description:
          "End-to-end product delivery with Next.js, React, Node.js, Express, and Prisma.",
        icon: "bx-code-alt",
        color: "text-sky-300",
      },
      {
        title: "API & Backend Systems",
        description:
          "Secure REST APIs, JWT / NextAuth, role-based access, and real-time Socket.IO flows.",
        icon: "bx-server",
        color: "text-emerald-300",
      },
      {
        title: "CMS & Admin Panels",
        description:
          "Custom CMS architectures, dashboards, and admin operations with clean UX.",
        icon: "bx-layer",
        color: "text-violet-300",
      },
      {
        title: "DevOps & Deployment",
        description:
          "Linux servers, Nginx reverse proxy, Docker, CI/CD, and DigitalOcean hosting.",
        icon: "bx-cloud",
        color: "text-amber-300",
      },
    ],
  },
  work: {
    experiences: [
      {
        title: "MERN Full Stack Developer",
        company: "EasyPR – Press Release Distribution Agency",
        location: "Kathmandu, Nepal",
        start: "Nov 2025",
        end: "Present",
        type: "Full-Time",
        highlights: [
          "Engineered and maintained secure Node.js, Express, and MongoDB services for live production applications.",
          "Managed Linux server environments, release configuration, and process monitoring for stable deployments.",
          "Configured Nginx reverse proxy and routing layers to improve reliability and production traffic handling.",
          "Delivered end-to-end backend features from local development through deployment and maintenance.",
        ],
        tools: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
          { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
          { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        ],
      },
      {
        title: "React Developer",
        company: "EasyPR – Press Release Distribution Agency",
        location: "Kathmandu, Nepal",
        start: "Sep 2025",
        end: "Dec 2025",
        type: "Full-Time",
        highlights: [
          "Built responsive, SEO-aware interfaces with React.js and Next.js for production websites.",
          "Developed reusable components and API-connected page workflows using Redux and Axios.",
          "Handled global state and API integrations to support real-world content and marketing workflows.",
          "Improved frontend performance and maintainability with clean project structure and reusable UI.",
        ],
        tools: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
          { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
          { name: "Axios", icon: "https://axios-http.com/assets/logo.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        ],
      },
      {
        title: "Freelance Full Stack Developer",
        company: "Remote / Kathmandu, Nepal",
        location: "Kathmandu, Nepal",
        start: "Oct 2022",
        end: "Present",
        type: "Freelance",
        highlights: [
          "Core stack: React, Next.js, Vite, Tailwind, React Query, Node.js, Express, MongoDB, PostgreSQL, Prisma, JWT, NextAuth, Cloudinary, Socket.IO.",
          "Built S.A Surgical end-to-end: Next.js storefront, Express backend, and React+Vite CMS for product, order, user, and dashboard operations.",
          "Implemented secure auth with JWT refresh flows, NextAuth (credentials + Google OAuth), and protected admin/super-admin route guards.",
          "Designed PostgreSQL relational models via Prisma covering users, products, categories, orders, order-items, and messages.",
          "Added Socket.IO chat and Cloudinary signed-upload flows for real-time communication and CMS-driven media management.",
          "Delivered additional freelance products: Announce Chain and Blood Bank Management System.",
        ],
        tools: [
          { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        ],
      },
      {
        title: "Front-End React Developer Intern",
        company: "Amazing Info Sys",
        location: "Kathmandu, Nepal",
        start: "Dec 2024",
        end: "Mar 2025",
        type: "Internship",
        highlights: [
          "Developed responsive React.js interfaces and integrated REST APIs for internal and client-facing projects.",
          "Improved state architecture with Redux Toolkit and clean loading/error handling patterns.",
          "Collaborated with design and development teammates to improve UI quality and usability.",
        ],
        tools: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        ],
      },
    ],
    education: {
      school: "St. Xavier's College, Maitighar",
      location: "Kathmandu, Nepal",
      university: "Tribhuvan University",
      degree: "Bachelor in Information Management (Information Technology)",
      start: "2020",
      end: "2024",
    },
    certifications: [
      { name: "MERN Stack Developer Course", year: "2022" },
      { name: "Full-Stack Web Development Certification", year: "2022" },
    ],
  },
  skills: {
    Frontend: {
      icon: "bx-code",
      accent: "from-sky-500/20 to-blue-500/10",
      border: "border-sky-400/30",
      text: "text-sky-300",
      items: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      ],
    },
    Backend: {
      icon: "bx-server",
      accent: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-400/30",
      text: "text-emerald-300",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "CMS Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/contentful/contentful-original.svg" },
        { name: "JWT / API Key Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg" },
        { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
    },
    Databases: {
      icon: "bx-data",
      accent: "from-violet-500/20 to-fuchsia-500/10",
      border: "border-violet-400/30",
      text: "text-violet-300",
      items: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    DevOps: {
      icon: "bx-cloud",
      accent: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-400/30",
      text: "text-amber-300",
      items: [
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
        { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
        { name: "S3 Signed Upload", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      ],
    },
    "Soft Skills": {
      icon: "bx-bulb",
      accent: "from-rose-500/20 to-pink-500/10",
      border: "border-rose-400/30",
      text: "text-rose-300",
      items: [
        { name: "Agile Collaboration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
        { name: "Problem Solving", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stackoverflow/stackoverflow-original.svg" },
        { name: "Client Communication", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
        { name: "Ownership & Initiative", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      ],
    },
  },
  projects: [
    {
      title: "S.A Surgical — Medical Equipment E-Commerce",
      image: saSurgical1,
      gallery: [
        { src: saSurgical1 },
        { src: saSurgical2 },
        { src: eCommerce1 },
        { src: eCommerce2 },
        { src: eCommerce3 },
        { src: eCommerce4 },
        { src: eCommerce5 },
        { src: eCommerce6 },
      ],
      tag: "Freelance",
      description:
        "Medical equipment storefront for S.A Surgical covering 11+ clinical categories — Dental, Diagnostic Imaging, Hospital Equipment, ICU/Critical Care, Lab, Orthopedic & Rehabilitation, OT Equipment, and more. Features global product search, wishlist, cart, email/password auth with Google OAuth sign-in, secure checkout, and a React+Vite CMS for managing products, orders, users, and real-time customer chat. Powered by a Next.js storefront, Express API, and PostgreSQL + Prisma data layer with Cloudinary-signed media uploads.",
      stack: [
        "Next.js",
        "React + Vite",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Socket.IO",
        "JWT",
        "Google OAuth",
        "Cloudinary",
      ],
      githubUrl: "https://github.com/Biraj010/e-commerce",
      featured: true,
    },
    {
      title: "Announce Chain — Press Release Distribution",
      image: announceChain1,
      gallery: [
        { src: announceChain1 },
        { src: announceChain2 },
        { src: announceChainLegacy },
      ],
      tag: "Freelance",
      description:
        "Press release distribution platform trusted by 500+ businesses, publishing announcements to premium media outlets including Yahoo Finance, AP News, Benzinga, Business Insider, Bloomberg Terminal, and MSN. Features dynamic service and industry pages, Sanity CMS blog publishing, pricing and contact workflows, SEO-ready metadata pipelines, and automated sitemap generation with Nodemailer-driven lead notifications — delivering <24hr average publish time and 340% average reach boost.",
      stack: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "Sanity CMS",
        "Supabase",
        "Nodemailer",
      ],
      githubUrl: "https://github.com/Biraj010/Announce_Chain",
      liveUrl: "https://announcechain.com",
      featured: true,
    },
    {
      title: "Webloft — Digital Agency Platform",
      image: webloft1,
      gallery: [{ src: webloft1 }, { src: webloft2 }, { src: webloft3 }],
      tag: "Agency",
      description:
        "Three-app architecture (public Next.js frontend + React admin CMS + Express API) delivered for Webloft's Australian digital agency. Includes modular content domains for services, industries, portfolio, and blog, JWT-protected admin operations, dual-schema service rendering, and resilient media and contact pipelines.",
      stack: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Nginx",
      ],
      liveUrl: "https://webloft.com.au/",
    },
    {
      title: "CoinSea — Master CMS for 1000+ News Portals",
      image: coinsea1,
      gallery: [
        { src: coinsea1 },
        { src: coinsea2 },
        { src: coinsea3 },
        { src: blog1 },
        { src: blog2 },
        { src: blog3 },
      ],
      tag: "Platform",
      description:
        "Centralized master CMS that powers and controls 1000+ child crypto news portal sites from a single admin panel. Operators manage Articles, Publishers, Tags, Sites, Geo targeting, Contact Messages, and Users with live dashboard stats (Total Articles, Published This Week, Active Sites). Handles RSS ingestion from approved publishers (EasyPRwire, Live Bitcoin News, etc.), article moderation and publishing workflows, per-site API-key and domain validation, XLSX exports, and slug-based feed delivery to every child portal — all with role-protected publisher and contributor workflows.",
      stack: [
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "API Key Auth",
        "RSS",
        "Multi-Tenant",
      ],
      liveUrl: "https://coinsae.com",
      featured: true,
    },
    {
      title: "Blood Bank Management System",
      image: blood1,
      gallery: [{ src: blood1 }, { src: blood2 }, { src: blood3 }],
      tag: "Freelance",
      description:
        "Admin dashboard and REST API for donor records, blood group inventory, and donation request/status workflows. Built with React.js, Node.js, Express, and MongoDB, with JWT role-based access control for admins, hospitals, and donors.",
      stack: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      githubUrl:
        "https://github.com/Biraj010/Blood-Donation-management-system.git",
    },
    {
      title: "Hospital Appointment & Patient Portal",
      image: oppointment1,
      gallery: [
        { src: oppointment1 },
        { src: oppointment2 },
        { src: oppointment3 },
      ],
      tag: "Internship",
      description:
        "React-based patient appointment and record portal built during the Amazing Info Sys internship. Delivered responsive UI, Redux Toolkit state, REST API integration, loading/error handling, and reusable form components for internal and client-facing medical workflows.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "JavaScript",
        "Tailwind CSS",
        "REST API",
      ],
    },
  ],
  contact: {
    paragraph:
      "I'm open to full-time roles, freelance builds, and product collaborations. If you need a developer who can take ownership from UI to deployment, let's talk.",
    whatsappUrl: "https://wa.me/9779846892218",
  },
  footer: {
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Biraj010",
        icon: "bx bxl-github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/biraj-regmi-007679183",
        icon: "bx bxl-linkedin-square",
      },
      {
        name: "Portfolio",
        url: "https://regmibiraj.com.np",
        icon: "bx bx-globe",
      },
    ],
  },
};

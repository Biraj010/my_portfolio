const oppointment1 = "/assets/img/internship.png";
const oppointment2 = "/assets/img/internship2.png";
const oppointment3 = "/assets/img/card2.png";
const blood1 = "/assets/img/blood 1.png";
const blood2 = "/assets/img/blood 2.png";
const blood3 = "/assets/img/blood 3.png";
const blog1 = "/assets/img/blog 1.png";
const blog2 = "/assets/img/blog 2.png";
const blog3 = "/assets/img/blog 3.png";
const shopping1 = "/assets/img/one item.png";
const shopping2 = "/assets/img/Screenshot 2025-06-21 012735.png";
const eCommerce1 = "/assets/img/e-commerce1.png";
const eCommerce2 = "/assets/img/e-commerce2.png";
const eCommerce3 = "/assets/img/e-commerce23.png";
const eCommerce4 = "/assets/img/e-commerce24.png";
const eCommerce5 = "/assets/img/e-commerce5.png";
const eCommerce6 = "/assets/img/e-commerce6.png";
const webloft1 = "/assets/img/webloft1.png";
const webloft2 = "/assets/img/webloft2.png";
const webloft3 = "/assets/img/webloft3.png";
const announceChain = "/assets/img/announce-chain.png";

export const portfolioData = {
  header: {
    navLinks: [
      { href: "#about", text: "About" },
      { href: "#work", text: "Experience" },
      { href: "#skills", text: "Skills" },
      { href: "#projects", text: "Projects" },
      { href: "#contact", text: "Contact" },
    ],
  },
  hero: {
    name: "Biraj Regmi",
    titles: [
      "Full-Stack Developer focused on production-ready web apps",
      "Next.js, React, Node.js, MongoDB, and API architecture",
      "Linux, Nginx, deployment workflows, and backend systems",
      "Solidity, smart contracts, and blockchain product development",
    ],
    description:
      "I build modern web products that look sharp, load fast, and work reliably in production. My work spans frontend systems, backend APIs, CMS integrations, cloud deployment, and blockchain-based applications.",
    badges: [
      "2+ years building real projects",
      "MERN + Next.js",
      "SEO-ready product delivery",
    ],
    stats: [
      { value: "10+", label: "projects shipped" },
      { value: "3", label: "production roles" },
      { value: "100%", label: "focus on clean UX" },
    ],
  },
  about: {
    paragraph: `I am a full-stack developer based in Kathmandu, Nepal, with hands-on experience building responsive, scalable, and production-ready applications. I enjoy taking products from idea to deployment, working across UI, APIs, databases, CMS integrations, and server configuration.

Alongside web development, I also explore blockchain products and smart contract workflows, which helps me bring a broader systems mindset to every build.`,
    highlights: [
      "Builds fast, responsive interfaces with React and Next.js",
      "Designs APIs and backend workflows with Node.js and Express",
      "Deploys and maintains apps on Linux servers with Nginx",
    ],
    personalInfo: {
      email: "regmibiraj.dev@gmail.com",
      phone: "+977 9846892218",
      address: "Kathmandu, Nepal",
      linkedin: "https://www.linkedin.com/in/biraj-regmi-007679183",
    },
  },
  work: {
    experiences: [
      {
        title: "MERN Full Stack Developer",
        company: "EasyPR - Press Release Distribution Agency",
        location: "Kathmandu, Nepal",
        start: "Nov 2025",
        end: "Present",
        highlights: [
          "Built and maintained secure backend services with Node.js, Express, and MongoDB for live production applications.",
          "Managed Linux servers, environment configuration, process monitoring, and deployment workflows.",
          "Configured Nginx reverse proxy layers for performance, traffic routing, and production stability.",
          "Delivered end-to-end backend features from local development through deployment and maintenance.",
        ],
        tools: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Express",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          },
          {
            name: "Linux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          },
          {
            name: "Nginx",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
          },
          {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
        ],
      },
      {
        title: "React Developer",
        company: "EasyPR - Press Release Distribution Agency",
        location: "Kathmandu, Nepal",
        start: "Sep 2025",
        end: "Dec 2025",
        highlights: [
          "Built responsive, SEO-aware interfaces with React.js and Next.js for production websites.",
          "Created reusable frontend components and page flows using modern React patterns.",
          "Handled global state and API integrations to support real-world content and marketing workflows.",
          "Improved frontend performance and maintainability with clean project structure and reusable UI.",
        ],
        tools: [
          {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "Redux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          {
            name: "Tailwind",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          },
          { name: "Axios", icon: "https://axios-http.com/assets/logo.svg" },
        ],
      },
      {
        title: "Front-End React Developer Intern",
        company: "Amazing Info Sys",
        location: "Kathmandu, Nepal",
        start: "Dec 2024",
        end: "Mar 2025",
        highlights: [
          "Developed responsive frontend interfaces with React.js across multiple internal and client projects.",
          "Used Redux Toolkit to improve state handling and project scalability.",
          "Integrated REST APIs with Axios and handled loading, error, and data flow states cleanly.",
          "Collaborated with design and development teammates to improve UI quality and usability.",
        ],
        tools: [
          {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Redux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          },
          {
            name: "CSS3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          },
          {
            name: "Tailwind",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          },
        ],
      },
    ],
    education: {
      school: "St. Xavier's College, Maitighar",
      location: "Kathmandu, Nepal",
      degree: "Bachelor in Information Management (Information Technology)",
      start: "May 2021",
      end: "Mar 2025",
    },
    certifications: ["MERN Course", "Full-Stack Web Development Certification"],
  },
  skills: {
    Frontend: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Redux Toolkit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Solidity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Smart Contracts",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      },
    ],
    Database: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Mongoose",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "Schema Design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    "DevOps & Tools": [
      {
        name: "Linux Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
    "Additional Skills": [
      {
        name: "SEO Metadata",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        name: "CMS Integration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/contentful/contentful-original.svg",
      },
      {
        name: "Debugging",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
  projects: [
    {
      title: "Announce Chain",
      image: announceChain,
      gallery: [{ src: announceChain }],
      description:
        "A production-ready press release distribution platform with dynamic service and industry pages, blog publishing, SEO metadata utilities, Sanity CMS integration, sitemap generation, and a verify-team workflow.",
      stack: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "Sanity CMS",
        "Supabase",
        "Nodemailer",
        "SEO Metadata",
      ],
      githubUrl: "https://github.com/Biraj010/Announce_Chain",
      liveUrl: "https://announcechain.com",
      featured: true,
    },
    {
      title: "IT Agency Platform",
      image: webloft1,
      gallery: [{ src: webloft1 }, { src: webloft2 }, { src: webloft3 }],
      description:
        "A modern agency-style platform with polished UI, reusable sections, and scalable frontend structure for showcasing services and digital products.",
      stack: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Nginx",
      ],
      githubUrl: "https://github.com/Biraj010/e-commerce",
    },
    {
      title: "Blood Bank Management System",
      image: blood1,
      gallery: [{ src: blood1 }, { src: blood2 }, { src: blood3 }],
      description:
        "A dashboard-focused application for managing blood donation records, availability, and user workflows with clean API integration.",
      stack: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Auth",
        "Tailwind CSS",
      ],
      githubUrl:
        "https://github.com/Biraj010/Blood-Donation-management-system.git",
    },
    {
      title: "Doctors Nepal Appointment App",
      image: oppointment1,
      gallery: [{ src: oppointment1 }, { src: oppointment2 }, { src: oppointment3 }],
      description:
        "An appointment booking experience with doctor discovery, dynamic booking flows, and connected frontend screens for healthcare users.",
      stack: [
        "React.js",
        "Redux",
        "Axios",
        "Tailwind CSS",
        "React Router",
      ],
      githubUrl: "https://github.com/Biraj010/Appointment",
    },
    {
      title: "Personal Blog Website",
      image: blog1,
      gallery: [{ src: blog1 }, { src: blog2 }, { src: blog3 }],
      description:
        "A blogging interface with responsive layouts, content presentation, authentication-related flows, and clean form handling.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "Axios",
        "Tailwind CSS",
        "Postman",
      ],
      githubUrl: "https://github.com/Biraj010/Blog",
    },
    {
      title: "Online Shopping App",
      image: shopping1,
      gallery: [{ src: shopping1 }, { src: shopping2 }],
      description:
        "A shopping frontend featuring product discovery, cart state management, checkout flow, and reusable commerce UI patterns.",
      stack: [
        "React.js",
        "Redux",
        "Axios",
        "Tailwind CSS",
        "E-commerce UI",
      ],
      githubUrl: "https://github.com/Biraj010/Online-Shopping-react-redux",
    },
    {
      title: "E-commerce Experience",
      image: eCommerce1,
      gallery: [
        { src: eCommerce1 },
        { src: eCommerce2 },
        { src: eCommerce3 },
        { src: eCommerce4 },
        { src: eCommerce5 },
        { src: eCommerce6 },
      ],
      description:
        "A richer commerce interface focused on product browsing, detail views, and a more complete online store presentation.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Biraj010/e-commerce",
    },
  ],
  contact: {
    paragraph:
      "I'm open to full-time roles, freelance builds, and product collaborations. If you need a developer who can take ownership from UI to deployment, let's talk.",
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
    ],
  },
};

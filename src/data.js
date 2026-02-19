import oppointment1 from "./assets/img/internship.png";
import oppointment2 from "./assets/img/internship2.png";
import oppointment3 from "./assets/img/card2.png";
import blood1 from "./assets/img/blood 1.png";
import blood2 from "./assets/img/blood 2.png";
import blood3 from "./assets/img/blood 3.png";
import blog1 from "./assets/img/blog 1.png";
import blog2 from "./assets/img/blog 2.png";
import blog3 from "./assets/img/blog 3.png";
import shopping1 from "./assets/img/one item.png";
import shopping2 from "./assets/img/Screenshot 2025-06-21 012735.png";
import eCommerce1 from "./assets/img/e-commerce1.png";
import eCommerce2 from "./assets/img/e-commerce2.png";
import eCommerce3 from "./assets/img/e-commerce23.png";
import eCommerce4 from "./assets/img/e-commerce24.png";
import eCommerce5 from "./assets/img/e-commerce5.png";
import eCommerce6 from "./assets/img/e-commerce6.png";

export const portfolioData = {
  header: {
    navLinks: [
      { href: "#about", text: "About" },
      { href: "#work", text: "Experiences" },
      { href: "#skills", text: "Skills" },
      { href: "#projects", text: "Projects" },
      { href: "#contact", text: "Contact" },
    ],
  },
  hero: {
    name: "Biraj Regmi",
    titles: [
      "Full-Stack Web Developer (MERN)",
      "React.js • Next.js • Node.js • MongoDB",
      "Linux Server • Nginx • Production Deployments",
      "BlockChain • Solidity • Smart Contract • Ethereum",
    ],
    description:
      "Full-stack web developer with hands-on experience building responsive and scalable applications using React.js, Next.js, Node.js, Express, and MongoDB. Experienced in designing RESTful APIs, managing Linux-based production servers, configuring Nginx, and deploying applications to cloud environments and also in Blockchain and writing SmartContract in Ethrerum Platform",
  },
  about: {
    paragraph: `I’m a full-stack web developer focused on building responsive, production-ready web applications with React.js, Next.js, Node.js, Express, MongoDB and also decenteralized dapps in Blockchain.

I enjoy working across the stack—designing RESTful APIs, implementing state management, and supporting deployments with Linux server management and Nginx configuration`,
    personalInfo: {
      email: "regmibiraj.dev@gmail.com",
      phone: "+977 9846892218",
      address: "Kathmandu, Nepal",
      linkedin: "www.linkedin.com/in/biraj-regmi-007679183",
    },
  },
  work: {
    experiences: [
      {
        title: "MERN Full Stack Developer",
        company: "EasyPR – Press Release Distribution Agency",
        location: "Kathmandu, Nepal",
        start: "Nov 2025",
        end: "Present",
        highlights: [
          "Developed and maintained backend services using Node.js, Express, and MongoDB, delivering secure and scalable RESTful APIs for production applications",
          "Configured and managed Linux servers, including environment variable setup, process management, and application deployment",
          "Set up and optimized Nginx as a reverse proxy to improve performance, security, and traffic handling",
          "Handled end-to-end backend workflows from local development to live production deployment",
        ],
        tools: [
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
          { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        ],
      },
      {
        title: "React Developer",
        company: "EasyPR – Press Release Distribution Agency",
        location: "Kathmandu, Nepal",
        start: "Sep 2025",
        end: "Dec 2025",
        highlights: [
          "Built modern and responsive user interfaces using React.js and Next.js for real-world production projects",
          "Implemented client-side routing, reusable components, and application logic using React Hooks",
          "Managed global state using Redux and handled API integration with Axios",
          "Developed SEO-friendly frontend architecture using Next.js with performance-focused rendering",
        ],
        tools: [
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
          { name: "Axios", icon: "https://axios-http.com/assets/logo.svg" },
        ],
      },
      {
        title: "Front-End React Developer (Internship)",
        company: "Amazing Info Sys",
        location: "Kathmandu, Nepal",
        start: "Dec 2024",
        end: "Mar 2025",
        highlights: [
          "Developed responsive and interactive frontend interfaces using React.js across multiple projects",
          "Implemented Redux Toolkit for state management to improve scalability and maintainability",
          "Integrated REST APIs using Axios and handled data flow and error states effectively",
          "Collaborated with design and development teams to enhance UI/UX and overall application performance",
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
      school: "St. Xavier’s College, Maitighar",
      location: "Kathmandu, Nepal",
      degree: "Bachelor in Information Management (Information Technology)",
      start: "May 2021",
      end: "Mar 2025",
    },
    certifications: ["MERN Course", "Full-Stack Web Development Certification"],
  },
  skills: {
    Frontend: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    Backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Remix", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/remix/remix-original.svg" },
      { name: "Smart Contract", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    ],
    Database: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
      { name: "Schema Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    ],
    "DevOps & Tools": [
      { name: "Linux Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    "Additional Skills": [
      { name: "Agile Workflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Debugging", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    ],
  },
  projects: [
    {
      title: "E-commerce Website",
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
        "Developed a responsive and feature-rich e-commerce frontend using React.js, Redux, Tailwind CSS, and Axios, with role-based access, JWT authentication, and protected routes. Built dynamic user and admin interfaces including product listings, cart, order management, real-time chat, and a professional admin dashboard.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        // "JWT",
        // "Socket.io",
        // "Stripe",
        // "Paypal",
        // "Stripe",
        "Axios",
        "Postman",
        "Tailwind CSS",
        "React Router",
      ],
      githubUrl: "https://github.com/Biraj010/e-commerce",
    },
    {
      title: "Doctors Nepal - Online Appointment App",
      image: oppointment1,
      gallery: [
        {
          src: oppointment1,
        },
        { src: oppointment2 },
        { src: oppointment3 },
      ],
      description:
        "Developed an interactive doctor appointment platform with dynamic booking cards, RESTful API integration for data fetching and user auth, and seamless page navigation.",
      stack: ["React.js", "Redux", "Axios", "Tailwind CSS", "React Router"],
      githubUrl: "https://github.com/Biraj010/Appointment",
    },
    {
      title: "Personal Blog Website",
      image: blog1,
      gallery: [{ src: blog2 }, { src: blog3 }],
      description:
        "Built a responsive blogging platform with a dark/light mode switch. Features include data fetching, user authentication, and form submissions, with robust API testing using Postman.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "Axios",
        "Postman",
        "Tailwind CSS",
        "React Router",
      ],
      githubUrl: "https://github.com/Biraj010/Blog",
    },
    {
      title: "Blood Bank Management System",
      image: blood1,
      gallery: [{ src: blood1 }, { src: blood2 }, { src: blood3 }],
      description:
        "A React-based dashboard to track blood donations and availability. Integrated a REST API for real-time data and implemented role-based authentication for admins and users.",
      stack: [
        "React",
        "REST API",
        "Authentication",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "Redux",
      ],
      githubUrl:
        "https://github.com/Biraj010/Blood-Donation-management-system.git",
    },
    {
      title: "Online Shopping App",
      image: shopping1,
      gallery: [{ src: shopping1 }, { src: shopping2 }],
      description:
        "An e-commerce front-end with efficient state management using Redux. Features include API integration for product data and auth, shopping cart, and checkout functionality.",
      stack: [
        "React.js",
        "Redux",
        "Axios",
        "E-commerce",
        "Tailwind CSS",
        "React Router",
      ],
      githubUrl: "https://github.com/Biraj010/Online-Shopping-react-redux",
    },
  ],
  contact: {
    paragraph: `I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out. Let's build something amazing together!`,
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
        url: "https://linkedin.com/in/biraj-regmi",
        icon: "bx bxl-linkedin-square",
      },
    ],
  },
};

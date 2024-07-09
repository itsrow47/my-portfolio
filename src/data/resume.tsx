import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rohit Bajaj",
  initials: "RB",
  url: "https://example.io",
  location: "Melbourne, VIC, Australia",
  locationLink: "https://maps.app.goo.gl/GURYmPbDApDaYdjB9",
  description:
    "IT graduate (D) from Deakin University 🎓 Coding Instructor 🧑‍🏫 Freelance Web Developer 🧑🏼‍💻 150 level on 8 ball pool Mobile 🎱 Seeking Internship/graduate roles 👀 Let's chat 💬",
  summary:
    "After I graduated in Early 2024, I worked as a freelancer building websites for small companies before I had the opportunity to work as a programming instructor in the School of IT at Deakin University. I have been teaching programming languages like C++, C#,  HTML, CSS, JavaScript, SQL, and more. I have also been working on my own projects and have been learning new technologies like React, Next.js, Node.js, Express, MongoDB, and more. I am currently seeking internship/graduate roles in the field of IT.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Vue.js",
    "C++",
    "C#",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Git/GitHub",
    "...",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itsRohit47",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iamrohitbajaj/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rohitbajaj13@yahoo.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Deakin University",
      href: "https://www.deakin.edu.au",
      badges: [],
      location: "Remote",
      title: "Casual Academic",
      logoUrl: "/deakin.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Roles and responsibilities include: - Preparing and delivering tutorials and help sessions - Preparing and marking assessments - Providing feedback to students - Responding to student queries - Attending meetings and training sessions - Participating in unit development and review.",
    },
    {
      company: "DataBytes",
      badges: ["Final Year Capstone Project"],
      href: "https://github.com/DataBytes-Organisation",
      location: "Remote",
      title: "Cloud Engineer Intern",
      logoUrl: "/databytes.png",
      start: "Jul 2023",
      end: "Nov 2023",
      description:
        "Implemented a Kubernetes cluster on GCP to host 5+ components including frontend, backend, database, api, ML Engine. Written scripts in YAML and Python to automate the deployment of the Infrastructure. Learned about the DevOps culture and how to work in a team environment. Other responsibilities included managing budgets, monitoring the cluster, ensuring the security of the cluster, testing cloud services and more.",
    },
    {
      company: "DataBytes",
      badges: ["Final Year Capstone Project"],
      href: "https://github.com/DataBytes-Organisation",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/databytes.png",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "Contributed to the development of a web application using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and more. Worked on the backend to create RESTful APIs, and the frontend to create responsive web pages. Learned about the Agile methodology and how to work in a team environment. Other responsibilities included writing documentation, testing the application, ensuring the security of the application, and more.",
    },
    {
      company: "GTelecom",
      href: "https://gtelecom.com.au/index.html",
      badges: ["Industry Based Learning (IBL) Placement"],
      location: "Santa Clara, CA",
      title: "IT Support Intern",
      logoUrl: "/gtelecom.jpeg",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "Supported the IT team in the day-to-day operations of the company. Assisted in the installation, configuration, and maintenance of computer hardware, software, and networks. Provided technical support to employees and customers. Assisted in troubleshooting and resolving technical issues.",
    },
  ],
  education: [
    {
      school: "Deakin University",
      href: "https://deakin.edu.au/",
      degree: "Bachelor of Information Technology",
      logoUrl: "/deakin.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "DeveloperPortfol.io",
      href: "https://developer-portfol-io.vercel.app/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Currently i am working on the MVP for my first ever SAAS product called DeveloperPortfol.io. Its a platform that allows developers to create a portfolio website in minutes. All they have to do is fill out their information through a visual editor, pick a template and the website will be generated for them. The website will be hosted on DeveloperPortfol.io and the developers can share the link with potential employers. The website will have a custom domain, analytics, and more. The website will be built using Next.js, TypeScript, PostgreSQL, TailwindCSS, and more. Unlike other website builders, the intention of this product is to not only allow developers showcase thier projects but also to build a projects database, new developers can take inspirations from.",
      technologies: [
        "HTML",
        "CSS",
        "Next.js",
        "React",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Radix UI",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://developer-portfol-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dev.jpg",
      video: "",
    },
    {
      title: "Invoice Tracker",
      href: "https://invoice-by-rohit.vercel.app",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "I wanted to learn Next.js so i followed the official documentation and built a web based invoice tracking software using Next.js, TypeScript, PostgreSQL, TailwindCSS, and more. The software allows users to create, read, update, and delete invoices. Users can also filter invoices by status, date, and client.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://invoice-by-rohit.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/itsRohit47/Invoicy-full-stack-invoice-tracker-software",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Invoicy.png",
      video: "",
    },
    {
      title: "Project Echo",
      href: "https://invoice-by-rohit.vercel.app",
      dates: "Mar 2023 - Nov -2023",
      active: true,
      description:
        "Contributed as a Software/Cloud Engineer. ProjectEcho provides an innovative solution for conservationists and researchers that uses a network of microphone sensors and artificial intelligence to monitor, track, and analyze endangered animal movements in real time. The system is noninvasive, cost-effective, and works in low-light and cluttered environments, offering several advantages over traditional camera-based monitoring systems. The advanced technology behind ProjectEcho combines 5G networks, WiFi 6 mesh networking, satellite internet, and AI-driven sound classification to provide real-time data on animal movement and information on the geographical distribution of species. The data collected aims to increase species protection and support the long-term survival of endangered animals.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "FastAPI",
        "Python",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "AWS",
      ],
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7106206929890287616/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/itsRohit47/Invoicy-full-stack-invoice-tracker-software",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/echo.png",
      video: "",
    },
    {
      title: "2D Game",
      href: "https://www.youtube.com/watch?v=lTzqFgUMqic",
      dates: "Mar 2021",
      active: true,
      description:
        "Developed a 2D game similar to Mario Bros called Ninja Adventure using C++. The game has 2 levels and the player has to collect coins and avoid obstacles and monsters to reach the end of the level. The player can collect power-ups to increase their health and speed. The game has a main menu, game over menu, and win/lose menu.",
      technologies: ["C++", "Splashkit SDK"],
      links: [
        {
          type: "Youtube",
          href: "https://www.youtube.com/watch?v=lTzqFgUMqic",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/itsRohit47/2D-Game-Project-cpp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ninja.png",
      video: "",
    },
  ],
} as const;

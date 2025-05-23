import { Icons } from "../components/icons";
import {
  Briefcase,
  CodeIcon,
  HomeIcon,
  QuoteIcon,
  WrenchIcon,
  GraduationCapIcon,
  AwardIcon,
  InfoIcon,
  BadgeCheckIcon,
} from "lucide-react";

export const DATA = {
  name: "Rohit Bajaj",
  initials: "RB",
  location: "Based in Melbourne, Australia (Open to Relocation)",
  avatarUrl: "/me.jpeg",
  fskills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Next js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    ".NET Web API",
  ],
  pskills: [
    "C++",
    "C#",
    "Python",
    "GoLang*",
    "JavaScript",
    "TypeScript",
    "SQL",
    "NoSQL",
  ],
  cskills: [
    "Linux",
    "Computer Networks",
    "Scripting",
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Kubernetes",
    "Jenkins*",
    "Terraform*",
  ],
  categories: ["All", "Cloud", "Web", "Networking", "Cyber", "Others"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/education", icon: GraduationCapIcon, label: "Education" },
    { href: "/certs", icon: BadgeCheckIcon, label: "Certifications" },
    { href: "/skills", icon: WrenchIcon, label: "Skills" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/experience", icon: Briefcase, label: "Work Experience" },
    { href: "/awards", icon: AwardIcon, label: "Awards" },
    { href: "/testimonials", icon: QuoteIcon, label: "Testimonials" },
    { href: "/about", icon: InfoIcon, label: "About me" },
  ],
  projects: [
    {
      name: "Project Echo - Winner at the 2023 National AIIA Awards 🥇",
      description:
        "My final year project at Deakin University, a cloud-based a biodiversity conservation project that seeks to detect sounds of endangered species by converting audio to melspectograms and analysing them using Convolutional Neural Networks (CNNs) implemented using tensorflow. This project was aimed to support the Australian Government's initiative to protect endangered species located in the wild otways national park.",
      contribution:
        "I contributed to the project in multiple areas including the development of the web application, the cloud infrastructure, team management, and other ad-hoc tasks.",
      category: ["Cloud", "Web"],
      url: "project-echo",
      tags: [
        "AWS",
        "GCP",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Node.js",
        "Express.js",
        "Python",
        "Team Management",
        "Leadership",
        "Collaboration",
      ],
    },
    {
      name: "Terrraaaformmmmm 🚀",
      description:
        "Infrastructure as Code (IaC) is the future, so why not learn it?",
      contribution:
        "I learned the basic commands and terminology essential for IaC. I successfully deployed and deleted the following infrastructure components: VPC, Subnets, Internet Gateway, and a NAT Gateway.",
      category: ["Cloud"],
      url: "terraform",
      tags: ["Terraform", "Infrastructure as Code"],
    },
    {
      name: "CRUD Operations on AWS S3 📦",
      description: "coming soon",
      contribution: "",
      category: ["Cloud"],
      url: "s3",
      tags: ["AWS", "S3"],
    },
    {
      name: "Lambda Functions 🚀",
      description: "coming soon",
      contribution: "",
      category: ["Cloud"],
      url: "lambda",
      tags: ["AWS", "Lambda"],
    },
    {
      name: "Portfolio Website ✨",
      description: "This website you are currently viewing.",
      contribution:
        "Planned, designed, and developed the website from scratch using Next.js and Tailwind CSS, and includes the use of various technologies such as TypeScript, React, and MDX.",
      category: ["Web"],
      url: "portfolio-website",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "React",
        "MDX",
        "SEO",
        "Responsive Design",
        "Project Planning",
        "Web Design",
        "Web Development",
        "UI/UX",
        "Accessibility",
        "Initiative",
      ],
    },
    {
      name: "Customer Management System 🔥",
      description:
        "I used react before, but wanted to learn the angular/dotnet/sql stack, so i worked on this angular based CRUD application for managing customers. ",
      contribution:
        "Developed the front-end using Angular and the back-end using .NET Web API and MySQL and containerized the application using Docker and docker-compose to run the application in a containerized environment. Built mostly by reading the documentation and learning on the go.",
      category: ["Web"],
      url: "cms",
      tags: [
        "Angular",
        ".NET Web API",
        "MySQL",
        "Docker",
        "Containerization",
        "TypeScript",
        "Tailwind CSS",
        "Front-end Development",
        "Back-end Development",
        "Containerization",
        "CI/CD",
      ],
    },
    {
      name: "Invoice Management System 🧐",
      description:
        "Next.js, hmmm 😋, this is new, to learn more about it, i followed through the official documentation and built this invoice management system. I modified the design a bit to make it look more modern.",
      contribution:
        "Explored the nooks and corners of Next.js to build this project. In my openion, Next.js is a great framework for building modern web applications, and the demand will be high in the future as the the team is well invested in the project solving the modern web development problems.",
      category: ["Web"],
      url: "cms",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Server Side Rendering",
        "Authentication",
        "Pagination",
        "TypeScript",
        "Optimization",
        "Accessibility",
      ],
    },
    {
      name: "Mario Bros ❌  Ninja Adventures ✅",
      description:
        "Its 2021 June, nice weather, and lots of programming to do. Plus a cup of tea ☕️.",
      contribution:
        "This project forms the part of a unit called 'Introduction to Programming', after learning the basics of programming for few weeks, HD aiming students were asked to build 'something awesome', what's more awesome than a game, right? So, i built this game using C++ and Splashkit.",
      category: ["Others"],
      url: "game",
      tags: [
        "C++",
        "Splashkit",
        "Game Development",
        "Procedural/Sequential Progarmming",
        "Problem Solving",
      ],
    },
    {
      name: "Better than the big 4 banks 💯",
      description: "C#, i thought its a musical note 😅",
      contribution:
        "This project forms the part of a unit called 'Object Oriented Programming', to learn about the object oriented programming concepts, every week for 12 weeks, we iteratively built this bank management system using C#. It allows the user to create/delete an account, deposit, withdraw, and transfer money between accounts.",
      category: ["Others"],
      url: "bank",
      tags: [
        "C#",
        "Object Oriented Programming",
        "Problem Solving",
        "Iteraive Development",
      ],
    },
    {
      name: "I can see the hashed password and email 💀",
      description: "",
      contribution: "",
      category: ["Cyber"],
      url: "founder",
      tags: [
        "Ethical Hacking",
        "Incidient Response",
        "Documentation",
        "Security Analyst",
        "Cyber Security",
      ],
    },
    {
      name: "My Ping - My Rules 🚀",
      description: "I built my own ping tool, because why not?",
      contribution: "",
      category: ["Networking"],
      url: "ping",
      tags: ["Python", "Networking", "Scripting"],
    },
    {
      name: "My DNS Server ✨",
      description: "I built my own DNS server, because why not?",
      contribution: "",
      category: ["Networking"],
      url: "dns",
      tags: ["Python", "Networking", "Scripting"],
    },
    {
      name: "Cisco Packet Tracer - this is cool 😎",
      description: "I built a network using cisco packet tracer.",
      contribution: "",
      category: ["Networking"],
      url: "cisco",
      tags: ["Networking", "Cisco Packet Tracer"],
    },
  ],
} as const;

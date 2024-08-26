import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rohit Bajaj",
  initials: "RB",
  url: "https://example.io",
  location: "Melbourne, VIC, Australia",
  locationLink: "https://maps.app.goo.gl/GURYmPbDApDaYdjB9",
  description:
    "Software Engineer | Tutor @ Deakin University | 𝗢𝗽𝗲𝗻 𝘁𝗼 𝘄𝗼𝗿𝗸 𝗶𝗻 𝗩𝗜𝗖 𝗮𝗻𝗱 𝗡𝗦𝗪 [𝗰𝗹𝗼𝘂𝗱 𝗰𝗼𝗺𝗽𝘂𝘁𝗶𝗻𝗴 𝗮𝗻𝗱 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴]",
  summary:
    "I am a software engineer as per my job title, however, I am a builder and innovator at heart, and I love anything and everything about technology.",
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
    "Angular",
    ".NET Framework",
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
  testimonials: [
    {
      who: "Quentin Cooke (National Digital Development Lead at KBR)",
      des: "Rohit was an **invaluable member of the Project Echo leadership team** due to his niche skillset in cloud computing and **strong web development skills**. Rohit **leads by example**, approaching all tasks with genuine enthusiasm and his refreshing sense of optimism is not easily diminished. He actively **seeks out challenging problems** and opportunities to hone his skills, then **delivers intelligent solutions**. He can be relied on to keep a cool head when time is tight and will go above and beyond when needed to support the team. Mentoring Rohit this past year has been very rewarding as **I have seen him take feedback on board and apply it immediately**. Rohit is certainly one to watch because he will be doing big things in the devops space in the near future.",
    },
    {
      who: "Indiah Smith (Paralegal at Ashurst LLP)",
      des: "Rohit is an extremely competent and **reliable individual**. He is highly devoted to improving his IT skills and committed to achieving the best results. He took the time to assist me during my first year of university when I was struggling with certain units and **devoted time towards helping me understand the concepts, which is a real testament to his patience and character**. He is an excellent teacher with profound knowledge. He was able to troubleshoot and identify errors I was facing in addition to guiding me through ways to find a solution. **Anyone who gets to work with Rohit will value his dedication and commitment.**",
    },
    {
      who: "Jules McCallum (Team Leader, ICT Support at Department of Premier and Cabinet, Vic)",
      des: "Rohit was instrumental in helping me understand complex concepts during my programming subject with Deakin. **Rohit would take the task, break it down for me so I understood and help me to come to a solution. I would highly recommend him.**",
    },
  ],
  contact: {
    email: "rohitbajaj13@yahoo.com",
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
        "Roles and responsibilities include: Preparing and delivering tutorials and help sessions - Preparing and marking assessments - Providing feedback to students - Responding to student queries - Attending meetings and training sessions - Participating in unit development and review.",
    },
    {
      company: "Freelancer",
      badges: ["Self Employed"],
      href: "",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "",
      start: "Jan 2023",
      end: "Present",
      description:
        "I challenged myself to work with some real clients as a web developer and built websites for small companies. I used HTML, CSS, JavaScript, Node.js, Next.js, React, Headless CMS, and more. I learned how to communicate with clients, how to manage my time, how to work in a team, how to manage my finances, and more. I also learned how to market myself, how to find clients, how to negotiate prices, and more. I learned a lot about the business side of things and how to run a business. I also learned how to manage my own projects, how to manage my own time, how to manage my own finances, and more.",
    },
    {
      company: "DataBytes",
      badges:[],
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
      degree:
        "Bachelor of Information Technology (Distinction, 25% Scholarship)",
      logoUrl: "/deakin.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
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
      title: "Project Echo - Real-time wildlife monitoring system",
      href: "",
      dates: "Mar 2023 - Nov -2023",
      active: true,
      description:
        "Contributed as a Software/Cloud Engineer in the final year capstone project. ProjectEcho provides an innovative solution for conservationists and researchers that uses a network of microphone sensors and artificial intelligence to monitor, track, and analyze endangered animal movements in real time. The system is noninvasive, cost-effective, and works in low-light and cluttered environments, offering several advantages over traditional camera-based monitoring systems. The advanced technology behind ProjectEcho combines 5G networks, WiFi 6 mesh networking, satellite internet, and AI-driven sound classification to provide real-time data on animal movement and information on the geographical distribution of species. The data collected aims to increase species protection and support the long-term survival of endangered animals.",
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
        "Google Cloud Platform",
        "Google Kubernetes Engine"
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

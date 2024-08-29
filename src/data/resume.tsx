import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rohit Bajaj",
  initials: "RB",
  url: "https://rohitbajaj.vercel.app/",
  location: "Melbourne, VIC, Australia",
  locationLink: "",
  description:
    "Software Engineer | Tutor @ Deakin University | 𝗢𝗽𝗲𝗻 𝘁𝗼 𝘄𝗼𝗿𝗸 𝗶𝗻 𝗩𝗜𝗖 𝗮𝗻𝗱 𝗡𝗦𝗪 [𝗰𝗹𝗼𝘂𝗱 𝗰𝗼𝗺𝗽𝘂𝘁𝗶𝗻𝗴 𝗮𝗻𝗱 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴]",
  summary:
    "Software engineer (Job Title) and problem solver at heart, I love anything and everything about technology (and business)",
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
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
      company: "Sindy Labs",
      href: "https://www.sindy.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/sindy.gif",
      start: "Feb 2024",
      end: "Present",
      description:
        "Designed and developed the frontend using React and TailwindCSS. Worked closely with the development team to implement new features and fix bugs.",
    },
    {
      company: "Deakin University",
      href: "https://www.deakin.edu.au",
      badges: [],
      location: "Remote",
      title: "Tutor (School of IT)",
      logoUrl: "/deakin.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Mentor undergrads in the programming units, provide feedback on their work, and help them with their assignments. I also help the unit chair with the development of the unit, marking of assessments, and other administrative tasks.",
    },
    {
      company: "Freelancer",
      badges: ["Self Employed"],
      href: "",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "",
      start: "Dec 2023",
      end: "Unsure",
      description:
        "Designed and developed websites for small businesses and individuals. Work with clients to understand their requirements and deliver a website that meets their needs. Use HTML, CSS, JavaScript, and other technologies to create responsive and user-friendly websites.",
    },
    {
      company: "DataBytes",
      badges: [],
      href: "https://github.com/DataBytes-Organisation",
      location: "Remote",
      title: "Cloud Engineer",
      logoUrl: "/databytes.png",
      start: "Jul 2023",
      end: "Nov 2023",
      description:
        "Led the cloud team to design and implement a cloud infrastructure using Google Cloud Platform. Worked with the development team to deploy applications to the cloud. Managed the cloud infrastructure, monitored performance, and ensured security. Developed scripts to automate tasks and improve efficiency. Provided support to the development team and other teams in the organization.",
    },
    {
      company: "DataBytes",
      badges: [],
      href: "https://github.com/DataBytes-Organisation",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/databytes.png",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "Technical lead for the development of a real-time wildlife monitoring system to be used by conservationists. Contributed technically to the project by designing and developing the backend using Node.js and Express.js. Worked with the development team to implement new features and fix bugs. Provided support to the team and ensured that the project was delivered on time and within budget.",
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
} as const;

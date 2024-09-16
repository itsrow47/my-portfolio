import { Icons } from "@/components/icons";
import {
  Briefcase,
  CodeIcon,
  HomeIcon,
  SparklesIcon,
  WrenchIcon,
  GraduationCapIcon,
  AwardIcon,
  InfoIcon,
} from "lucide-react";

export const DATA = {
  name: "Rohit Bajaj",
  initials: "RB",
  location: "Based in Melbourne, Australia (Open to Relocation)",
  summary:
    "I am a 2023 Technology graduate from Deakin University, currently working as a Casual Academic in the School of IT at Deakin. I bring over 9 months of hands-on experience from internships in various tech roles, including IT Support, Web Development, and Cloud Engineering/Cloud Solutions Architecture, particularly within startup environments.",
  summary2:
    "I am actively seeking a full-time position in the tech industry to launch my career. I am open to relocation across Australia at my own expense, and I am eager to contribute my skills and expertise to a dynamic and innovative team.",
  avatarUrl: "/me.png",
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
  pskills: ["C++", "C#", "Python", "GoLang*", "JavaScript", "TypeScript", "SQL", "NoSQL"],
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/education", icon: GraduationCapIcon, label: "Education" },
    { href: "/skills", icon: WrenchIcon, label: "Skills" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/experience", icon: Briefcase, label: "Work Experience" },
    { href: "/awards", icon: AwardIcon, label: "Awards" },
    { href: "/testimonials", icon: SparklesIcon, label: "Testimonials" },
    { href: "/about", icon: InfoIcon, label: "About me" },
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
      company: "Sindy.ai",
      href: "https://www.sindy.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/sindy.gif",
      start: "Jun 2024",
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
      start: "Mar 2024",
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
      title: "Cloud Solutions Architect",
      logoUrl: "/databytes.png",
      start: "Jun 2023",
      end: "Nov 2023",
      description:
        "Led the cloud team to design and implement a cloud infrastructure using AWS and GCP. Worked with the development team to deploy applications to the cloud. Managed the cloud infrastructure, monitored performance, and ensured security. Developed scripts to automate tasks and improve efficiency. Provided support to the development team and other teams in the organization.",
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

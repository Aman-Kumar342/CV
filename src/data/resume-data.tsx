import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon, Code2Icon } from "lucide-react";

export const RESUME_DATA = {
  name: "Aman Kumar",
  initials: "AK",
  location: "Chennai, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/Chennai",
  about:
    "Electronics and Computer Engineering student at VIT with expertise in software development, data analytics, and VLSI design.",
  summary:
    "I am an Electronics and Computer Engineering student at VIT with a strong interest in software development, data analytics, and VLSI design. I have hands-on experience in backend development, full-stack projects, and research on low-power IC design for IoT applications. My projects span across real-time web applications, AI-driven systems, and data-driven insights, showcasing my ability to bridge hardware and software. I enjoy solving problems, building scalable solutions, and constantly exploring new technologies to create meaningful impact.",
  avatarUrl: "/aman.png", // Profile image
  personalWebsiteUrl: "https://github.com/Aman-Kumar342",

  contact: {
    email: "amanx.gitx@gmail.com",
    tel: "+91-7004877604",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Aman-Kumar342",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-kumar-0853b5256",
        icon: LinkedInIcon,
      },
      {
        name: "Portfolio",
        url: "https://codolio.com/profile/AmanSavarnya",
        icon: GlobeIcon
      },
      {
        name: "Codolio",
        url: "https://codolio.com/profile/AmanSavarnya",
        icon: Code2Icon
      }
    ],
  },
  education: [
    {
      school: "Vellore Institute of Technology",
      degree: "Electronics and Computer Engineering - 8.67/10",
      start: "2022",
      end: "Present",
    },
    {
      school: "Central Board of Secondary Education",
      degree: "Senior Secondary - 75.4%",
      start: "2021",
      end: "2021",
    },
    {
      school: "Central Board of Secondary Education",
      degree: "Secondary - 89.8%",
      start: "2019",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Centre of Nano Electronics and VLSI Design (CNVD), VIT Chennai",
      badges: ["Research", "Chennai"],
      title: "Research Intern",
      logo: ParabolLogo,
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Conducted extensive research on low-power IC design in subthreshold regions, focusing on standard cell libraries for IoT Application. Calculated Current Capacitor Ratio (CCR) for CMOS-based Various gates, optimizing PMOS and NMOS dimensions. Designed and simulated gate layouts to evaluate parameters such as power, propagation delay, and noise margins.",
    },
    {
      company: "Black Stone Media",
      badges: ["Remote", "Freelance"],
      title: "Backend Development Intern",
      logo: ClevertechLogo,
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Engineered robust backend solutions using Node.js and Express.js. Developed and deployed RESTful APIs to support dynamic web applications. Integrated third-party APIs, including payment gateways and analytics tools.",
    },
    {
      company: "ACM VIT Chennai",
      badges: ["Leadership"],
      title: "Treasurer",
      logo: JarockiMeLogo,
      start: "Apr 2024",
      end: "Apr 2025",
      description:
        "Managed chapter finances, including budgeting, expense tracking, and allocation of funds. Coordinated with sponsors and stakeholders to secure funding. Ensured transparent financial reporting and compliance with institutional guidelines.",
    }
  ],
  skills: [
    "C",
    "C++",
    "Java",
    "Python",
    "SQL",
    "JavaScript",
    "PHP",
    "React",
    "Node.js",
    "Next.js",
    "Express.js",
    "MongoDB",
    "FastAPI",
    "Matplotlib",
    "Git",
    "AWS",
    "Google Cloud Platform",
    "Excel",
    "Tableau"
  ],
  projects: [
    {
      title: "AttendEase – Smart Library Management System",
      category: "software",
      techStack: [
        "Node.js",
        "MongoDB",
        "JWT",
        "Full Stack"
      ],
      description: [
        "Developed a full-stack library seat booking and attendance management system with real-time analytics and QR code check-in/out",
        "Implemented Node.js, MongoDB, and JWT for backend logic, authentication, and secure data flow",
        "Features include dynamic seat reservation, time-slot based booking with conflict detection, QR-based attendance, and admin dashboard",
        "Added intelligent analytics: peak hour usage, occupancy tracking, and weekly/monthly utilization reports"
      ],
      logo: ParabolLogo,
      link: {
        label: "github.com/Aman-Kumar342/Attend_Ease",
        href: "https://github.com/Aman-Kumar342/Attend_Ease"
      }
    },
    {
      title: "OneTicket",
      category: "software",
      techStack: [
        "LangChain",
        "Next.js",
        "VercelAI SDK"
      ],
      description: [
        "Developed a multi-agent system to simplify museum ticket booking by enabling natural language input",
        "Ranked top 10 out of 600 participating teams in the Internal Smart India Hackathon",
        "Implemented with LangChain, Next.js, and the VercelAI SDK"
      ],
      logo: ConsultlyLogo,
    },
    {
      title: "E-Commerce Profitability Analysis",
      category: "software",
      techStack: [
        "SQL",
        "Python",
        "Pandas",
        "NumPy"
      ],
      description: [
        "Analyzed product data (pricing, revenue, ratings, reviews) to identify key profitability drivers for an online sports retailer",
        "Used SQL and Python (Pandas, NumPy) for data cleaning, pricing analysis, and performance evaluation",
        "Provided insights on price labeling, discount optimization, and sales strategy"
      ],
      logo: MonitoLogo,
      link: {
        label: "github.com/Aman-Kumar342/E-Commerce-Profitability",
        href: "https://github.com/Aman-Kumar342/5.-Maximizing-E-Commerce-Profitability-for-Sports-Retailers"
      },
    },
    {
      title: "CollabEditor — With Realtime Notifications",
      category: "software",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Clerk",
        "Sentry"
      ],
      description: [
        "Built a modern collaborative document editor supporting real-time editing, live notifications, comments, and user presence",
        "Integrated authentication (Clerk), error monitoring (Sentry), and rich text editing (Lexical, JSM Editor)",
        "Utilized Technologies: Next.js, React, Tailwind CSS, Liveblocks, Clerk, Sentry, TypeScript"
      ],
      logo: JarockiMeLogo,
      link: {
        label: "github.com/Aman-Kumar342/CollabEditor",
        href: "https://github.com/Aman-Kumar342/CollabEditor---With-realtime-notif"
      },
    },
    {
      title: "Multi-Modal Behavioral Analysis",
      category: "electronics",
      techStack: [
        "Python",
        "OpenCV",
        "Keras",
        "MediaPipe",
        "C++",
        "Arduino"
      ],
      description: [
        "Developed a holistic system to identify behavioral indicators of distress by integrating three real-time modules",
        "Engineered the solution using Python (Keras, OpenCV, MediaPipe) for computer vision and machine learning",
        "Correlated disparate data streams to create a comprehensive, non-invasive overview for potential early detection"
      ],
      logo: ParabolLogo,
      link: {
        label: "github.com/Aman-Kumar342/Comprehensive-Human-State-Analysis",
        href: "https://github.com/Aman-Kumar342/Comprehensive-Human-State-Analysis"
      },
    },
    {
      title: "Resource Allocation in Cloud Computing",
      category: "software",
      techStack: [
        "Game Theory",
        "Python",
        "Cloud Computing",
        "Optimization"
      ],
      description: [
        "Developed an innovative resource allocation system for cloud computing using game theory principles",
        "Implemented a Nash equilibrium-based algorithm to optimize resource distribution among multiple cloud users",
        "Achieved improved resource utilization and fair allocation through mathematical modeling and simulation"
      ],
      logo: TastyCloudLogo,
      link: {
        label: "github.com/Aman-Kumar342/Resource-Allocation",
        href: "https://github.com/Aman-Kumar342/Resource-Allocation"
      },
    },
    {
      title: "Low Power VLSI Design for IoT Applications",
      category: "electronics",
      techStack: [
        "VLSI",
        "Cadence",
        "Circuit Design",
        "Verilog",
        "Power Analysis"
      ],
      description: [
        "Designed and optimized low-power digital circuits for IoT applications",
        "Implemented power-efficient standard cell libraries using subthreshold operation",
        "Achieved significant power reduction while maintaining acceptable performance metrics"
      ],
      logo: ParabolLogo,
    },
    {
      title: "Smart Energy Monitoring System",
      category: "electronics",
      techStack: [
        "Arduino",
        "IoT",
        "PCB Design",
        "Sensors",
        "Energy Management"
      ],
      description: [
        "Developed a real-time energy monitoring system for residential applications",
        "Designed custom PCB for power measurement and data acquisition",
        "Implemented wireless communication for remote monitoring and control"
      ],
      logo: EvercastLogo,
    }
  ],
} as const;

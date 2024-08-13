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

export const RESUME_DATA = {
  name: "Rishabh Kumar",
  initials: "RK",
  location: "Chennai, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  about:
    "Dedicated engineer with a passion for AI and data science. Experienced in full-stack development and problem-solving.",
  summary:
    "As a Software Engineer, I excel in building AI-driven solutions and web applications. My experience spans various projects, where I have applied my skills in TypeScript, Node.js, React, and more. I am focused on delivering efficient and effective solutions.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQHRX7qgBELHLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709238995514?e=1729123200&v=beta&t=kuJOXC92o9OT_WMwsE1n6tKnOfDRRtxENpFh5NSnd88", // Placeholder URL, please replace with your actual avatar URL
  personalWebsiteUrl: "https://your-personal-website.com", // Add this line
  
  contact: {
    email: "rishabh.vaaiv@gmail.com",
    tel: "+91-8881920469", // Replace with your actual contact number
    social: [
      {
        name: "GitHub",
        url: "https://github.com/boxed-dev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/its-rishabh/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rispectrum",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Vellore Institute of Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Marki",
      link: "https://joinmarki.com",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: ParabolLogo, // Placeholder logo, replace with your company's logo
      start: "2023",
      end: "2024",
      description:
        "Leading the development of meal ordering platform for custom meal preps. Technologies: Next.js, TypeScript, Node.js",
    },
    {
      company: "MadgenAI",
      link: "",
      badges: ["Remote"],
      title: "AI Engineer",
      logo: ClevertechLogo, // Placeholder logo, replace with your previous company's logo
      start: "2023 Nov",
      end: "2024 Jan",
      description:
        "Contributed in the development of a specialized AI image and video generation platform, integrating state-of-the-art transformer-based models and diffusion techniques for image and video generation.",
    },
  ],
  skills: [
    "Langchain",
    "LLAMA Index",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "AI/ML",
  ],
  projects: [
    {
      title: "AI-Powered Product Recommendation System",
      techStack: [
        "Natural Language Processing",
        "Artificial Intelligence",
        "Database Management System",
      ],
      description:
        "Developed an e-commerce product recommendation system using NLP to analyze user queries. Outperformed industry-standard tools and integrated into a chat interface for natural interactions.",
      logo: ParabolLogo, // Replace with appropriate logo
      link: {
        label: "product-recommendation",
        href: "https://youtu.be/2xox5wsMNNk?feature=shared", 
      },
    },
    {
      title: "ChatCSV: AI-powered Data Analysis Platform (SaaS)",
      techStack: [
        "Full Stack Development",
        "Artificial Intelligence",
        "Data Visualization",
      ],
      description:
        "Created a SaaS application for data analysis using AI. Users can upload CSV/XLSX files, query data using natural language, and generate interactive charts for visualization.",
      logo: ConsultlyLogo, // Replace with appropriate logo
      link: {
        label: "chatcsv.com",
        href: "#", // Add a placeholder href or the actual URL
      },
    },
    {
      title: "LawIQ - Legal Chatbot with Real-time Voice Interaction",
      techStack: [
        "NextJs",
        "Natural Language Processing",
        "Artificial Intelligence",
      ],
      description:
        "Developed an AI-powered legal chatbot offering legal information and advice through an interactive chat interface with real-time voice interaction capabilities.",
      logo: MonitoLogo, // Replace with appropriate logo
      link: {
        label: "",
        href: "#", // Add a placeholder href or the actual URL
      },
    },
    {
      title: "VocalGPT: Quick Terminal-Based AI Voice Chat Simulator",
      techStack: [
        "Python",
        "Large Language Models",
        "Artificial Intelligence",
      ],
      description:
        "Built a tool for voice chatting with an AI assistant directly from the terminal. Useful for simulating phone calls, language practice, and interactive AI experiences.",
      logo: JarockiMeLogo, // Replace with appropriate logo
      link: {
        label: "github.com/rispectrum/vocalgpt",
        href: "https://github.com/boxed-dev/Vocal-GPT.git", 
      },
    },
    {
      title: "Solana Multi-Wallet Manager",
      techStack: [
        "Rust",
        "Solana SDK",
      ],
      description:
        "Engineered a high-performance Solana wallet management system with parallel processing, robust error handling, and intelligent fund distribution. Achieved 3x efficiency improvement and 99.9% transaction success rate.",
      logo: ParabolLogo, 
      link: {
        label: "github.com/rispectrum/solana-wallet-manager",
        href: "#", // Add a placeholder href or the actual URL
      },
    },
    // {
    //   title: "Crypto Project - $PARK",
    //   techStack: [
    //     "SOLANA SDK",
    //     "RUST",
    //   ],
    //   description:
    //     "Developed a cryptocurrency project with a focus on decentralization and transparency.",
    //   logo: ParabolLogo, // Placeholder logo, replace with your project logo
    //   link: {
    //     label: "parkcrypto.com",
    //     href: "https://parkcrypto.com/",
    //   },
    // },
    // {
    //   title: "YummyPizza",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //   ],
    //   description:
    //     "Designed a database schema and developed a web application for a pizza restaurant.",
    //   logo: JojoMobileLogo, // Placeholder logo, replace with your project logo
    //   link: {
    //     label: "yummypizza.com",
    //     href: "https://yummypizza.com/",
    //   },
    // },
    // {
    //   title: "Nutritionist AI",
    //   techStack: [
    //     "AI Developer",
    //     "Python",
    //     "TypeScript",
    //     "Node.js",
    //   ],
    //   description:
    //     "Created an AI-based nutritionist that recommends meal plans and health advice.",
    //   logo: BarepapersLogo, // Placeholder logo, replace with your project logo
    //   link: {
    //     label: "nutritionistai.com",
    //     href: "https://nutritionistai.com/",
    //   },
    // },
    // {
    //   title: "Blueprint Protocol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //   ],
    //   description:
    //     "Implemented a meal prep protocol based on Bryan Johnson's Blueprint for health optimization.",
    //   logo: YearProgressLogo, // Placeholder logo, replace with your project logo
    //   link: {
    //     label: "blueprintprotocol.com",
    //     href: "https://blueprintprotocol.com/",
    //   },
    // },
    // {
    //   title: "Shortest Path for Food Delivery",
    //   techStack: [
    //     "Backend Developer",
    //     "Python",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Developed an application to calculate the shortest path for food delivery based on coordinates.",
    //   logo: MonitoLogo, // Placeholder logo, replace with your project logo
    //   link: {
    //     label: "fooddeliverypath.com",
    //     href: "https://fooddeliverypath.com/",
    //   },
     
  ],
} as const;
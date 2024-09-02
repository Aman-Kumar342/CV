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
    "Dedicated engineer with a passion for AI and Deep Learning. Experienced in full-stack development and problem-solving.",
  summary:
    "As a Software Engineer, I excel in building AI-driven solutions and web applications. My experience spans various projects, where I have applied my skills in TypeScript, Node.js, React, and more. I am focused on delivering efficient and effective solutions.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQHRX7qgBELHLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709238995514?e=1729123200&v=beta&t=kuJOXC92o9OT_WMwsE1n6tKnOfDRRtxENpFh5NSnd88", // Placeholder URL, please replace with your actual avatar URL
  personalWebsiteUrl: "https://rishabh-cv.vercel.app", 
  
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
      degree: "Bachelor's Degree in Electronics and Computer Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Marki",
      link: "https://joinmarki.com",
      badges: ["Remote", "USA, LA"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2024 Jan",
      end: "2024 August",
      description: [
        "Led development of a meal ordering platform for custom meal preps.",
        "Utilized Next.js, TypeScript, and Node.js.",
        "Implemented key features to enhance user experience and streamline order processing.",
      ],
    },
    {
      company: "MadgenAI",
      badges: ["Remote", "USA, SF"],
      title: "AI Engineer",
      logo: ClevertechLogo,
      start: "2023 Nov",
      end: "2024 Jan",
      description: [
        "Contributed to the development of an AI image and video generation platform.",
        "Integrated transformer models and diffusion techniques.",
        "Enhanced platform capabilities in creating high-quality, AI-generated visual content.",
      ],
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
      description: [
        "Developed an e-commerce product recommendation system using NLP.",
        "Outperformed industry-standard tools.",
        "Integrated into a chat interface for natural interactions.",
      ],
      logo: ParabolLogo, 
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
      description: [
        "Created a SaaS application for data analysis using AI.",
        "Users can upload CSV/XLSX files, query data using natural language.",
        "Generate interactive charts for visualization.",
      ],
      logo: ConsultlyLogo, 
    },
    {
      title: "LawIQ - Legal Chatbot with Real-time Voice Interaction",
      techStack: [
        "NextJs",
        "Natural Language Processing",
        "Artificial Intelligence",
      ],
      description: [
        "Developed an AI-powered legal chatbot.",
        "Offers legal information and advice through an interactive chat interface.",
        "Includes real-time voice interaction capabilities.",
      ],
      logo: MonitoLogo, // Replace with appropriate logo
    },
    {
      title: "VocalGPT: Quick Terminal-Based AI Voice Chat Simulator",
      techStack: [
        "Python",
        "Large Language Models",
        "Artificial Intelligence",
      ],
      description: [
        "Built a tool for voice chatting with an AI assistant directly from the terminal.",
        "Useful for simulating phone calls, language practice, and interactive AI experiences.",
      ],
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
      description: [
        "Engineered a high-performance Solana wallet management system.",
        "Implemented parallel processing and robust error handling.",
        "Achieved 3x efficiency improvement and 99.9% transaction success rate.",
      ],
      logo: ParabolLogo, 
    },
  ],
} as const;
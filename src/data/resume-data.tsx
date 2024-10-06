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
    "Dedicated software engineer with a strong passion for AI, deep learning, and full-stack development. Experienced in solving real-world problems using cutting-edge technology.",
  summary:
    "Experienced in building AI-driven solutions and modern web applications. My expertise lies in developing efficient, scalable platforms using TypeScript, Node.js, React, and more. I focus on delivering impactful solutions that streamline processes and improve user experiences.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQHRX7qgBELHLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709238995514?e=1729123200&v=beta&t=kuJOXC92o9OT_WMwsE1n6tKnOfDRRtxENpFh5NSnd88", // Placeholder URL, replace with your actual avatar URL
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
      end: "2024 Aug",
      description: [
        "Led the development of a custom meal ordering platform, improving the user experience by streamlining order processing and customizing meal preps.",
        "Utilized Next.js, TypeScript, and Node.js to create scalable and maintainable solutions.",
        "Enhanced user engagement by implementing key features that personalized the customer journey.",
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
        "Developed AI-powered image and video generation platform, significantly improving the quality and efficiency of content creation.",
        "Integrated state-of-the-art transformer models and diffusion techniques, pushing the boundaries of generative AI.",
        "Collaborated with cross-functional teams to optimize the performance of the platform, meeting client expectations.",
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
    "React",
    "JavaScript",
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
        "Developed a robust e-commerce recommendation system that utilized natural language processing to improve the accuracy of product suggestions.",
        "Achieved better results compared to industry-standard recommendation tools.",
        "Integrated the solution into a user-friendly chat interface for seamless natural interactions with customers.",
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
        "Built an AI-driven SaaS platform for analyzing CSV/XLSX files using natural language queries.",
        "Designed a user-friendly interface that allows users to upload files and generate interactive data visualizations.",
        "Improved decision-making processes by enabling real-time data analysis and insights.",
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
        "Created a chatbot for legal assistance that provides real-time voice interaction and detailed legal information.",
        "Developed the chatbot using NLP to ensure it accurately understands and responds to user queries.",
        "Improved access to legal knowledge by automating routine queries through an intuitive interface.",
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
        "Engineered a terminal-based voice chat simulator that allows users to have real-time conversations with an AI assistant.",
        "Designed for phone call simulations and language practice, enhancing the user experience in interactive AI sessions.",
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
        "Developed a high-performance wallet management system for Solana blockchain users, with robust parallel processing features.",
        "Enhanced system reliability by achieving a 99.9% transaction success rate and improving overall efficiency by 3x.",
      ],
      logo: ParabolLogo,
    },
    {
      title: "OneTicket - AI-Powered Ticket Booking Chatbot",
      techStack: ["Natural Language Processing", "AI/ML", "Chatbot Development"],
      description: [
        "Developed a natural language processing-based chatbot that allows users to book tickets without complex UI interaction.",
        "Implemented a QR code system to streamline entry and reduce human intervention.",
        "<strong>Ranked 8th out of 600 teams in the Smart India Hackathon.</strong>"
      ],
      logo: TastyCloudLogo, // Replace with the appropriate logo if available
      link: {
        label: "OneTicket",
        href: "https://oneticket.vercel.app",
      },
    },
  ],
} as const;
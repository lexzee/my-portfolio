export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  link: string;
  github?: string;
  heroImage?: string;
  problem: string;
  solution: string;
  features: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "corpersafe",
    title: "CorperSafe",
    heroImage: "/images/corpersafe-1.png",
    description:
      "A real-time safety and tracking application designed specifically for NYSC members in Nigeria.",
    date: "November 2025",
    tags: ["React", "Node.js", "Geolocation API", "Real-time", "Supabase"],
    link: "https://corpersafe.vercel.app",
    github: "https://github.com/lexzee/corper-safe",
    problem:
      "NYSC members deployed to unfamiliar regions in Nigeria often face security challenges and lack a reliable, centralized way to alert authorities or kin during emergencies. Existing solutions lack real-time geolocation context specific to the NYSC service zones.",
    solution:
      "I built CorperSafe as a progressive web app (PWA) that provides one-tap SOS alerting. It utilizes the Geolocation API to track user movement in real-time (with consent) and identifies 'dead zones' where signal is lost. The backend handles high-concurrency websocket connections to broadcast alerts to nearby admins instantly.",
    features: [
      "Real-time Geolocation Tracking with privacy controls",
      "One-tap SOS Alert System with SMS fallbacks",
      "Dead Zone detection using Machine Learning",
      "Offline mode for low-connectivity areas",
    ],
    gallery: [
      "/images/corpersafe-1.png",
      "/images/corpersafe-2.png",
      "/images/corpersafe-3.png",
      "/images/corpersafe-4.png",
      "/images/corpersafe-5.png",
    ],
  },
  {
    slug: "store-jupiter",
    title: "Store Jupiter",
    heroImage: "/images/storejupiter-1.png",
    description:
      "A production-ready e-commerce starter. Features atomic inventory management, integrated Paystack and WhatsApp checkout, and a comprehensive Admin Dashboard with audit logs.",
    date: "January 2026",
    tags: ["Next.js 16", "Supabase", "Tailwind v4", "Shadcn UI", "PostgreSQL"],
    link: "https://etemp-storefront.vercel.app",
    github: "https://github.com/lexzee/ecommerce-template",
    problem:
      "Building robust e-commerce platforms requires handling complex state management and database concurrency issues. Developers often struggle with implementing race-condition-proof inventory systems and stitching together disparate services for authentication, payments, and transactional emails.",
    solution:
      "This monorepo template solves these infrastructure challenges out of the box. It utilizes Supabase RPC functions for atomic stock deduction to prevent overselling and includes a fully typed Next.js frontend. It integrates local payment gateways (Paystack) and communication channels (WhatsApp) specifically tailored for the Nigerian market.",
    features: [
      "Atomic stock management via Postgres functions",
      "Integrated Paystack & WhatsApp Checkout",
      "Admin Dashboard with order lifecycle management",
      "Automated Email Receipts via Nodemailer",
      "Dynamic 'Type-to-filter' location selection",
    ],
    gallery: [
      "/images/storejupiter-1.png",
      "/images/storejupiter-2.png",
      "/images/storejupiter-3.png",
      "/images/storejupiter-4.png",
      "/images/storejupiter-5.png",
    ],
  },
  {
    slug: "the-last-second",
    title: "The Last Second",
    heroImage: "/images/lastsecond-3.png",
    description:
      "A high-stakes arcade game built on Solana where players compete for the pot in real-time.",
    date: "December 2025",
    tags: ["Solana", "Rust", "Anchor", "Phaser.js", "Web3"],
    link: "https://last-second.vercel.app",
    github: "https://github.com/lexzee/last-second",
    problem:
      "Blockchain games often suffer from high latency and poor user experience, making them feel clunky compared to traditional web games. We needed a way to handle high-frequency interactions without waiting for block confirmations for every move.",
    solution:
      "The Last Second uses a hybrid architecture. The core gameplay loop runs on Phaser.js for 60fps performance, while critical state changes (entry fees, pot distribution) are settled on-chain via a custom Solana smart contract written in Rust/Anchor. This ensures fairness without sacrificing speed.",
    features: [
      "On-chain pot management using Solana Program Library",
      "Zero-latency gameplay via client-side prediction",
      "Phantom Wallet integration",
      // "Live leaderboard synced with blockchain state",
    ],
    gallery: [
      "/images/lastsecond-1.png",
      "/images/lastsecond-2.png",
      "/images/lastsecond-3.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

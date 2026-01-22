export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  link: string;
  github?: string;
  heroImage?: string; // Placeholder for future images
  problem: string;
  solution: string;
  features: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "corpersafe",
    title: "CorperSafe",
    description:
      "A real-time safety and tracking application designed specifically for NYSC members in Nigeria.",
    date: "November 2025",
    tags: ["React", "Node.js", "Geolocation API", "Real-time", "Supabase"],
    link: "https://corpersafe.vercel.app",
    github: "https://github.com/yourusername/corpersafe",
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
    gallery: [],
  },
  {
    slug: "store-jupiter",
    title: "Store Jupiter",
    description:
      "A production ready e-commerce starter. With integrated Paystack and Whatsapp Checkout, and an Admin Dashboard with audit logs and email receipts.",
    date: "January 2026",
    tags: ["Next.js", "Supabase", "Shadcn UI", "Gemini API", "Paystack"],
    link: "https://etemp-storefront.vercel.app",
    github: "https://github.com/yourusername/crypto-tax",
    problem:
      "With new tax regulations in Nigeria, crypto traders struggle to calculate liabilities accurately across multiple exchanges. Most global tools don't account for specific local naira conversion rates or regulatory nuances.",
    solution:
      "This platform aggregates transaction history from multiple exchanges (via CSV or API). It normalizes the data into a unified SQL schema using Prisma and uses the Gemini API to classify complex DeFi transactions automatically. It generates compliant PDF tax reports instantly.",
    features: [
      "Automated CSV parsing for Binance and Bybit",
      "Real-time NGN/USD rate fetching",
      "AI-powered transaction classification (Gemini API)",
      "PDF Report Generation",
    ],
    gallery: [
      "https://placehold.co/1920x1080/1e293b/FFF?text=Dashboard+View",
      "https://placehold.co/1920x1080/1e293b/FFF?text=Mobile+View",
      "https://placehold.co/1920x1080/1e293b/FFF?text=Settings+Page",
    ],
  },
  {
    slug: "the-last-second",
    title: "The Last Second",
    description:
      "A high-stakes arcade game built on Solana where players compete for the pot in real-time.",
    date: "December 2025",
    tags: ["Solana", "Rust", "Anchor", "Phaser.js", "Web3"],
    link: "https://last-second.vercel.app",
    github: "https://github.com/yourusername/the-last-second",
    problem:
      "Blockchain games often suffer from high latency and poor user experience, making them feel clunky compared to traditional web games. We needed a way to handle high-frequency interactions without waiting for block confirmations for every move.",
    solution:
      "The Last Second uses a hybrid architecture. The core gameplay loop runs on Phaser.js for 60fps performance, while critical state changes (entry fees, pot distribution) are settled on-chain via a custom Solana smart contract written in Rust/Anchor. This ensures fairness without sacrificing speed.",
    features: [
      "On-chain pot management using Solana Program Library",
      "Zero-latency gameplay via client-side prediction",
      "Phantom Wallet integration",
      "Live leaderboard synced with blockchain state",
    ],
    gallery: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

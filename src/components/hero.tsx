"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Terminal } from "lucide-react";

export function Hero() {
  // Animation variants for staggered entrance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 50 },
    },
  };

  return (
    <section className="relative w-full overflow-hidden border-b py-24 md:py-32 lg:py-40">
      {/* Background Pattern - Pure CSS Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <div className="container flex flex-col items-center text-center z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={item} className="flex justify-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Freelance & Contracts
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={item}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
              Building Scalable <br />
              Web3 & React Apps
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={item}>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              I'm a Full Stack Developer specializing in high-performance web
              applications. From{" "}
              <span className="text-foreground font-medium">Solana</span> smart
              contracts to pixel-perfect{" "}
              <span className="text-foreground font-medium">Next.js</span>{" "}
              interfaces.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base"
              disabled
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </motion.div>

          {/* Social / Tech Proof */}
          <motion.div
            variants={item}
            className="pt-8 flex items-center justify-center gap-6 text-muted-foreground"
          >
            <Link
              href="https://github.com/lexzee"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            {/* <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link> */}
            <Link
              href="https://x.com/devlexzee"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </Link>
            <div className="h-4 w-px bg-border" /> {/* Divider */}
            <span className="text-sm font-mono flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              Full Stack Engineer
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

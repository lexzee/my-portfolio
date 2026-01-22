// src/components/featured-projects.tsx
"use client";

import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = getAllProjects().slice(0, 3);

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

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="container mx-auto py-24 sm:py-32 space-y-12"
    >
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Work
        </h2>
        <p className="text-muted-foreground text-lg">
          A selection of recent projects focusing on Web3 innovation and
          real-world utility.
        </p>
      </div>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} variants={item} />
        ))}
      </motion.div>

      <div className="w-full items-center justify-center flex">
        <Button asChild size={"lg"}>
          <Link href="/projects">
            View All Projects <ArrowUpRight className="ml-0" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

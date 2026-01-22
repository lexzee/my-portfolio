// src/components/featured-projects.tsx
"use client";

import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";
import { motion } from "framer-motion";

const projects = getAllProjects();

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

export default function ProjectsHome() {
  return (
    <div className="container mx-auto py-4 sm:py-8 space-y-12">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg">
          A selection of projects showcasing my skills and experience.
        </p>
      </div>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} variants={item} />
        ))}
      </motion.div>
    </div>
  );
}

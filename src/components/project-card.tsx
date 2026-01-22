// src/components/project-card.tsx
"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  variants?: any;
}

export function ProjectCard({
  slug,
  title,
  description,
  tags,
  link,
  github,
  variants,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
      variants={variants}
    >
      <Card className="flex flex-col h-full overflow-hidden border-muted-foreground/20 hover:border-primary/50 transition-colors group">
        {/* Browser Mockup Window */}
        <div className="relative w-full h-48 bg-muted/20 border-b overflow-hidden">
          {/* LIVE PREVIEW IFRAME
           */}
          <div className="w-full h-full pt-6 relative bg-white dark:bg-zinc-950">
            <iframe
              src={link}
              title={`${title} preview`}
              loading="lazy"
              className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none border-none select-none"
              tabIndex={-1}
              scrolling="no"
            />

            {/* Overlay to prevent clicking inside the iframe (so card click works) */}
            <div className="absolute inset-0 bg-transparent z-20" />
          </div>
        </div>

        <CardHeader>
          <CardTitle className="flex items-center justify-between text-xl">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 mt-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-normal text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 pt-4 sm:flex-row">
          <Button
            asChild
            className="flex-1 w-full gap-2 sm:w-auto group-hover:bg-primary/90"
          >
            <Link href={`/projects/${slug}`}>
              Read Case Study <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>

          <div className="flex w-full gap-2 sm:w-auto">
            <Button
              className="flex-1 sm:px-3"
              variant={"outline"}
              asChild
              title="Visit Live Site"
            >
              <Link href={link} target="_blank">
                <span className="sm:hidden">Visit Site</span>
                <ExternalLink className="h-4 w-4 sm:ml-0" />
              </Link>
            </Button>

            {github && (
              <Button
                variant="outline"
                size="icon"
                className="flex-1 sm:px-3"
                asChild
                title="View Source"
              >
                <Link href={github} target="_blank">
                  <span className="sm:hidden">Github</span>
                  <Github className="h-4 w-4 sm:ml-0" />
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

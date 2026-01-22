// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProject, projects } from "@/lib/projects";
import { ProjectGallery } from "@/components/project-gallery";
import Image from "next/image";

interface ProjectPageProps {
  //   params: {
  //     slug: Promise<string>;
  //   };
  params: Promise<{ slug: string }>;
}

// 1. Generate Metadata for SEO (Browser Tab Title)
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const p = await params;
  const project = getProject(p.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

// 2. Generate Static Params (Make it blazing fast at build time)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 3. The Page Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  const p = await params;
  const project = getProject(p.slug);

  // If slug doesn't exist, show 404
  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen py-20 pb-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          asChild
          className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Header Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            {project.heroImage && (
              <Image
                src={project.heroImage}
                alt={`${project.title} Hero Image`}
                className="w-full h-auto rounded-lg"
                width={1200}
                height={600}
                priority
              />
            )}
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Meta Data Row */}
          <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>Full Stack Development</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2">
            <Button asChild size="lg">
              <Link href={project.link} target="_blank">
                Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {project.github && (
              <Button variant="outline" size="lg" asChild>
                <Link href={project.github} target="_blank">
                  View Source <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallery images={project.gallery} title={project.title} />
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          {/* Left Column: Story */}
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                The Solution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                Key Features
              </h2>
              <ul className="grid gap-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Tech Stack & Info */}
          <div className="space-y-8">
            <div className="rounded-xl border bg-muted/10 p-6 space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* You can add more sidebar widgets here later, like "Client" or "Role" */}
          </div>
        </div>
      </div>
    </article>
  );
}

// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPosts, getPost } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { components } from "@/components/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const options = {
    theme: "github-dark",
    keepBackground: false,
  };

  return (
    <article className="min-h-screen pb-24">
      {/* 1. HERO HEADER */}
      <div className="relative w-full border-b py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-primary/20 opacity-20 blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <Button
            variant="ghost"
            asChild
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {post.metadata.hero && (
            <div className="relative w-full h-96 rounded-xl overflow-clip">
              <Image
                src={post.metadata.hero}
                alt="post hero image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {post.metadata.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.metadata.publishedAt}>
                {new Date(post.metadata.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </time>
            </div>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.metadata.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto max-w-3xl py-12">
        <div
          className="prose prose-zinc dark:prose-invert max-w-none 
          prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-muted/50
        "
        >
          <MDXRemote
            source={post.content}
            components={components}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeSlug, [rehypePrettyCode, options]],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}

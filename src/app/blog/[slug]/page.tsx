import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPosts, getPost } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

  return (
    <article className="container mx-auto py-24 sm:py-32 max-w-3xl">
      <Button
        variant="ghost"
        asChild
        className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
      >
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="space-y-4 mb-12 text-center sm:text-left">
        <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
          <time dateTime={post.metadata.publishedAt}>
            {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{post.metadata.author}</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.metadata.title}
        </h1>
      </div>

      {/* The Article Body */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

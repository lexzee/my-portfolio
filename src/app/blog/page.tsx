import Link from "next/link";
import { Metadata } from "next";
import { formatDate } from "@/lib/utils"; // You might need to add a simple date helper or use standard JS
import { getBlogPosts } from "@/lib/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { log } from "console";

export const metadata: Metadata = {
  title: "Blog | Insights & Thoughts",
  description:
    "Read my latest articles on Web3, React, and Software Engineering.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="container mx-auto py-24 sm:py-32 max-w-3xl">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          Thoughts on software development, Web3, and my journey as a builder.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <article className="flex flex-col space-y-2 p-4 -mx-4 rounded-xl transition-colors hover:bg-muted/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={post.metadata.publishedAt}>
                    {new Date(post.metadata.publishedAt).toLocaleDateString()}
                  </time>
                </div>
                <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.metadata.summary}
                </p>
                <div className="pt-2 text-sm font-medium text-primary flex items-center">
                  Read Article →
                </div>
              </article>
            </Link>
            <Separator className="mt-8" />
          </div>
        ))}

        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts found yet.</p>
        )}
      </div>
    </section>
  );
}

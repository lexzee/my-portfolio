import Link from "next/link";
import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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
            <Link
              href={`/blog/${post.slug}`}
              className="grid grid-cols-4 gap-4 items-center justify-between rounded-xl transition-colors hover:bg-muted/50 p-4 -mx-4"
            >
              <div className="relative overflow-clip rounded-2xl aspect-square">
                {post.metadata.icon || post.metadata.hero ? (
                  <Image
                    src={post.metadata.icon! || post.metadata.hero!}
                    alt={post.metadata.title + "image"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-accent-foreground text-muted-foreground flex items-center justify-center">
                    <p>No Image</p>
                  </div>
                )}
              </div>
              <article className="col-span-3 flex flex-col space-y-2">
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

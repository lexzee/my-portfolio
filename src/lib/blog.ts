import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { metadata } from "@/app/layout";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    author?: string;
    image?: string;
  };
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data as BlogPost["metadata"],
      content,
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export function getPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

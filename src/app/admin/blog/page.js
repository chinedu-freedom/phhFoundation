import { prisma } from "@/lib/db";
import BlogManager from "./BlogManager";

export const metadata = {
  title: "Manage Blog Posts | PHH Admin",
};

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Convert Date objects to JSON-compatible types for the client component
  const formattedPosts = posts.map((post) => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Blog Articles
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Publish foundation updates, success stories, and press releases.
        </p>
      </div>

      <BlogManager initialPosts={formattedPosts} />
    </div>
  );
}

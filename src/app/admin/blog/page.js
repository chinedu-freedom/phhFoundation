import { prisma } from "@/lib/db";
import { Plus, BookOpen, Clock, User } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Manage Blog Posts | PHH Admin",
};

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            Blog Articles
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Publish foundation updates, success stories, and press releases.
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-teal-500/20 hover:bg-teal-700 transition-colors self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" /> Create Article
        </button>
      </div>

      {/* Articles list */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-950">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute top-4 left-4 rounded-full bg-zinc-950/70 backdrop-blur px-2.5 py-0.5 text-xxs font-bold text-white">
                {post.status}
              </div>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xxs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                  {post.category}
                </span>
                <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xxs text-zinc-400">
                <div className="flex items-center gap-1.5 font-semibold">
                  <User className="h-3.5 w-3.5" /> {post.authorName}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="col-span-full py-16 text-center text-sm text-zinc-400">
            No blog posts published yet.
          </p>
        )}
      </div>
    </div>
  );
}

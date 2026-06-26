import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Tag, Mail } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    return {
      title: "Post Not Found | PHH Foundation",
    };
  }

  return {
    title: `${post.title} | PHH Foundation Blog`,
    description: post.content.substring(0, 150),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-zinc-950/20 py-12">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to News & Blog
        </Link>

        {/* Categories / Tags */}
        <div className="flex items-center gap-2 text-xxs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Tag className="h-3.5 w-3.5" />
          <span>{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl font-poppins leading-tight">
          {post.title}
        </h1>

        {/* Author / Date Info */}
        <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 border-y border-zinc-200 dark:border-zinc-800 py-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>By {post.authorName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>{post.authorEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Feature Image */}
        <div className="relative mt-8 aspect-video w-full rounded-3xl overflow-hidden shadow-md bg-zinc-100 dark:bg-zinc-950">
          <Image
            src={post.image || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div className="mt-10 text-base leading-8 text-zinc-700 dark:text-zinc-300 whitespace-pre-line font-medium">
          {post.content}
        </div>
      </div>
    </article>
  );
}

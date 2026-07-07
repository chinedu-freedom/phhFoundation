import { prisma } from "@/lib/db";
import BlogList from "@/components/BlogList";
import Image from "next/image";

export const metadata = {
  title: "News & Blog Updates | HH Foundation",
  description: "Stay informed with the latest updates, field reports, success stories, and newsletters from the HH Foundation.",
};

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Serialize dates for Client Component safety
  const serializedPosts = posts.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  }));

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&auto=format&fit=crop&q=80"
            alt="News bulletin board background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Updates</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-poppins">
            News & Press Releases
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-blue-100">
            Read about our latest field outings, transparency reports, testimonials, and structural program updates.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <BlogList posts={serializedPosts} />
        </div>
      </section>
    </div>
  );
}


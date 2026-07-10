import { prisma } from "@/lib/db";
import BlogList from "@/components/BlogList";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "News & Blog Updates | HH Foundation",
  description: "Stay informed with the latest updates, field reports, success stories, and newsletters from the HH Foundation.",
};

export default async function BlogPage() {
  let serializedPosts = [];
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        status: "PUBLISHED",
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Serialize dates for Client Component safety
    serializedPosts = posts.map((p) => ({
      ...p,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Database fetch failed in blog page SSR:", error);
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-zinc-950/20">
      {/* Page Header */}
      <PageHeader
        subtitle="Updates"
        title="News & Press Releases"
        description="Read about our latest field outings, transparency reports, testimonials, and structural program updates."
        bgImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&auto=format&fit=crop&q=80"
        alt="News bulletin board background"
      />

      {/* Blog Cards Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <BlogList posts={serializedPosts} />
        </div>
      </section>
    </div>
  );
}


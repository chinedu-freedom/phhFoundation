"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, User, Clock, ChevronRight } from "lucide-react";

export default function BlogList({ posts = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories list
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post is the most recent one (if any)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const standardPosts = filteredPosts.slice(1);

  return (
    <div className="space-y-12">
      {/* Featured Post Card */}
      {featuredPost && searchQuery === "" && selectedCategory === "All" && (
        <div className="relative rounded-3xl overflow-hidden border border-slate-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 shadow-[0_15px_50px_rgba(0,0,0,0.035)] group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
            {/* Image */}
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto h-64 lg:h-96 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
              <Image
                src={featuredPost.image || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200"}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-[1.01] transition-transform duration-300"
                priority
              />
            </div>

            {/* Details */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xxs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-xxs font-bold text-zinc-400 uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-xl lg:text-2xl font-extrabold text-zinc-900 dark:text-white font-poppins group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400 line-clamp-4">
                  {featuredPost.content}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-850 flex items-center justify-between">
                <div className="flex items-center gap-6 text-xxs font-semibold text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> {featuredPost.authorName}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    {new Date(featuredPost.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  Read Article <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-zinc-200 dark:border-zinc-800 pb-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 order-2 md:order-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80 order-1 md:order-2">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search news & blog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-xl border border-zinc-200/50 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:bg-zinc-800"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(searchQuery !== "" || selectedCategory !== "All" ? filteredPosts : standardPosts).map((post) => (
          <article
            key={post.id}
            className="flex flex-col bg-white dark:bg-zinc-900 border border-slate-100/70 dark:border-zinc-800/80 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.025)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.04)] hover:-translate-y-0.5 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-950">
              <Image
                src={post.image || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-blue-600/90 backdrop-blur px-3 py-1 text-xxs font-bold text-white uppercase tracking-wider">
                {post.category}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3">
                  {post.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xxs font-semibold text-zinc-400">
                  <span className="flex items-center gap-1 shrink-0">
                    <User className="h-3 w-3 text-blue-600 shrink-0" /> {post.authorName}
                  </span>
                  <span className="flex items-center gap-1 shrink-0">
                    <Clock className="h-3 w-3 text-blue-600 shrink-0" />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 self-end sm:self-auto shrink-0"
                >
                  Read
                </Link>
              </div>
            </div>
          </article>
        ))}

        {filteredPosts.length === 0 && (
          <div className="col-span-full py-16 text-center">
            <p className="text-sm text-zinc-400">No blog posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

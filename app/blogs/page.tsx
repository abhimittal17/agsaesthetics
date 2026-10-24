"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blogs";

const CATEGORIES = [
  "All",
  "Skin Peels",
  "Skin Treatments",
  "Anti-Aging",
  "Laser & Hair",
  "Wellness & Care",
] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogs.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
          Clinical Insights &amp; Treatment Guides
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 max-w-3xl mx-auto leading-tight">
          Evidence-Based Aesthetic Care &amp; Skin Wellness
        </h1>

        {/* Search Input */}
        <div className="mt-8 max-w-md mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, treatments, ingredients..."
            className="w-full px-4 py-2.5 pl-10 text-xs sm:text-sm bg-white border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-800 placeholder-stone-400"
          />
          <svg
            className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0011.3 11.3z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition ${
                  isActive
                    ? "bg-stone-900 text-white"
                    : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-stone-200 transition-all duration-300 flex flex-col group "
              >
                <Link
                  href={`/blogs/${post.slug || post.id}`}
                  className="relative h-52 overflow-hidden bg-stone-100 block"
                >
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 text-stone-800 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <div className="flex items-center text-xs text-stone-400 mb-2 space-x-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-bold text-base text-stone-900 group-hover:text-stone-700 transition leading-snug">
                      <Link href={`/blogs/${post.slug || post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-stone-600 text-xs leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">
                      AG Aesthetics Team
                    </span>
                    <Link
                      href={`/blogs/${post.slug || post.id}`}
                      className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
                    >
                      Read guide &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
            <svg
              className="w-12 h-12 text-stone-400 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <h3 className="text-base font-semibold text-stone-800">
              No matching articles found
            </h3>
            <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or select another category above.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-full hover:bg-stone-800 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
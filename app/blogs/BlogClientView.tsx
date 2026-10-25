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

export function BlogClientView() {
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
    <div className="w-full text-stone-900">
      {/* Header & Filter Section */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-semibold mb-2 sm:mb-3">
          Clinical Insights &amp; Treatment Guides
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 max-w-3xl mx-auto leading-tight">
          Evidence-Based Aesthetic Care &amp; Skin Wellness
        </h1>

        {/* Search Input */}
        <div className="mt-6 sm:mt-8 max-w-md mx-auto relative px-1 sm:px-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, treatments, ingredients..."
            className="w-full px-4 py-2.5 sm:py-3 pl-10 sm:pl-11 pr-14 text-xs sm:text-sm bg-white border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-800 placeholder-stone-400 shadow-xs"
          />
          <svg
            className="w-4 h-4 text-stone-400 absolute left-4 sm:left-4.5 top-1/2 -translate-y-1/2 pointer-events-none"
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
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-semibold px-1 py-0.5"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition duration-150 ${
                  isActive
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-300 transition-all duration-300 flex flex-col group shadow-xs hover:shadow-md"
              >
                <Link
                  href={`/blogs/${post.slug || post.id}`}
                  className="relative aspect-16/10 sm:h-52 w-full overflow-hidden bg-stone-100 block"
                >
                  <Image
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6 flex flex-col grow justify-between">
                  <div>
                    <div className="flex items-center text-xs text-stone-500 mb-2 space-x-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-stone-900 group-hover:text-stone-700 transition leading-snug line-clamp-2">
                      <Link href={`/blogs/${post.slug || post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">
                      AG Aesthetics Team
                    </span>
                    <Link
                      href={`/blogs/${post.slug || post.id}`}
                      className="text-xs sm:text-sm font-semibold text-stone-800 hover:text-stone-950 underline underline-offset-4"
                    >
                      Read guide &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 px-4 bg-white rounded-2xl border border-stone-200">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-stone-400 mx-auto mb-3"
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
            <h3 className="text-sm sm:text-base font-semibold text-stone-800">
              No matching articles found
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
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
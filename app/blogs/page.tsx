"use client";

import { useState } from "react";
import Link from "next/link";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Skin Treatments" | "Anti-Aging" | "Laser & Hair" | "Wellness & Care";
  date: string;
  readTime: string;
  featuredImage: string;
  featured?: boolean;
}

const BLOG_POSTS: BlogPost[] = [

  {
    id: "2",
    slug: "pre-wedding-skincare-timeline",
    title: "The Ultimate 6-Month Pre-Wedding Clinical Skincare Timeline",
    excerpt:
      "Planning for your big day? From laser hair reduction to deep chemical peels and collagen stimulation, here is your stage-by-stage countdown to radiant bridal skin.",
    category: "Skin Treatments",
    date: "August 20, 2026",
    readTime: "6 min read",
    featuredImage:
      "https://images.unsplash.com/photo-1512290900672-1f023330ff25?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    slug: "chemical-peels-for-indian-skin",
    title: "Are Chemical Peels Safe for Indian Skin? Myths vs. Facts",
    excerpt:
      "Melanin-rich skin requires specialized peel formulations to treat hyperpigmentation and acne marks without risking post-inflammatory hyperpigmentation (PIH).",
    category: "Skin Treatments",
    date: "August 12, 2026",
    readTime: "4 min read",

    featuredImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    slug: "prp-therapy-hair-thinning-results",
    title: "PRP for Hair Loss: How Many Sessions Do You Really Need?",
    excerpt:
      "Platelet-Rich Plasma (PRP) uses your body’s own growth factors to awaken dormant hair follicles. Discover who is an ideal candidate and what timeline to expect.",
    category: "Laser & Hair",
    date: "July 30, 2026",
    readTime: "7 min read",
    featuredImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    slug: "anti-wrinkle-injections-preventative-botox",
    title: "Preventative Anti-Wrinkle Treatments: When Should You Start?",
    excerpt:
      "From dynamic expression lines to static creases, learn why 20s and 30s are becoming the most popular ages for targeted preventative muscle relaxation therapy.",
    category: "Anti-Aging",
    date: "July 18, 2026",
    readTime: "5 min read",
    featuredImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    slug: "post-treatment-aftercare-guide",
    title: "Essential Post-Laser & Peel Aftercare Rules Every Patient Must Follow",
    excerpt:
      "The clinical session is only half the journey. What you apply (and avoid) in the 72 hours after laser or microneedling dictates 80% of your healing and safety.",
    category: "Wellness & Care",
    date: "June 29, 2026",
    readTime: "4 min read",
    featuredImage:
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = [
  "All",
  "Skin Treatments",
  "Anti-Aging",
  "Laser & Hair",
  "Wellness & Care",
] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const regularPosts = filteredPosts.filter((post) =>
    selectedCategory === "All" && searchQuery === "" ? !post.featured : true
  );

  return (
    <div>
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
          Clinical Insights &amp; Treatment Guides
        </p>
        <h1 className="text-3xl tracking-tight text-stone-900 max-w-3xl mx-auto leading-tight">
          Evidence-Based Aesthetic Care &amp; Skin Wellness
        </h1>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition ${
                  isActive
                    ? "bg-stone-900 text-white"
                    : "bg-white border border-stone-100 text-stone-600"
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
     

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-stone-100  transition-all duration-300 flex flex-col group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative h-52 overflow-hidden bg-stone-100 block"
                >
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-stone-800 text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm ">
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

                    <h3 className="font-bold text-md text-stone-900 group-hover:text-stone-700 transition leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-2.5 text-stone-600 text-xs  leading-relaxed tracking-wider line-clamp-2">
                      {post.excerpt}
                    </p>
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
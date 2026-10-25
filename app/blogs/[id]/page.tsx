import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";

interface BlogPostProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogs.find((p) => p.id === id || p.slug === id);

  if (!post) {
    return {
      title: "Article Not Found | AG Aesthetics & Wellness Clinic",
      description: "The requested clinical guide or article could not be found.",
    };
  }

  const title = `${post.title} | AG Aesthetics & Wellness Clinic`;
  const description =
    post.subtitle ||
    post.excerpt ||
    `Read our clinical guide on ${post.title} from certified practitioners at AG Aesthetics & Wellness Clinic in Kharar, Punjab.`;
  const canonicalUrl = `/blogs/${post.slug || post.id}`;
  const ogImage = post.featuredImage || "/ctaimage2.webp";

  return {
    title,
    description,
    keywords: [
      post.category,
      "Skin Treatment Kharar",
      "Aesthetics Clinic Kharar",
      "AG Aesthetics & Wellness Clinic",
      post.title,
    ],
    metadataBase: new URL("https://agsaesthetics.com"),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "AG Aesthetics & Wellness Clinic",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      locale: "en_IN",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  const post = blogs.find((p) => p.id === id || p.slug === id);

  if (!post) return notFound();

  const faqs = post.faqs ?? [];
  const sections = post.content?.sections ?? [];

  // Filter related posts (same category preferred, excluding current post)
  const categoryPosts = blogs.filter(
    (b) => b.id !== post.id && b.category === post.category
  );
  const otherPosts = blogs.filter(
    (b) => b.id !== post.id && b.category !== post.category
  );
  const relatedPosts = [...categoryPosts, ...otherPosts].slice(0, 2);

  return (
    <article className="pb-16 sm:pb-20 md:pb-24 w-full">
      {/* Article Header & Hero */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-center space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="bg-[#586454] text-white text-[11px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            {post.category}
          </span>
          <span className="text-xs sm:text-sm text-stone-500 font-medium">
            {post.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-tight sm:leading-tight">
          {post.title}
        </h1>

        {post.subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed pt-1">
            {post.subtitle}
          </p>
        )}
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="rounded-2xl overflow-hidden border border-stone-200/80 aspect-16/10 sm:aspect-video md:aspect-21/9 bg-stone-100 relative">
          <Image
            fill
            src={post.featuredImage}
            alt={post.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Content: Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-stone-800 leading-relaxed space-y-6 sm:space-y-8">
          {/* Dynamic Content Sections */}
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 pt-2"
            >
              {section.heading && (
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-950 tracking-tight mb-3 sm:mb-4">
                  {section.heading}
                </h2>
              )}

              {/* Paragraphs */}
              {section.paragraphs?.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base leading-relaxed text-stone-700 mb-4 wrap-break-word"
                >
                  {paragraph}
                </p>
              ))}

              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-stone-700 my-4">
                  {section.bulletPoints.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <strong className="text-stone-900 font-semibold">
                        {item.label}{" "}
                      </strong>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {/* Responsive Tables */}
              {section.table && (
                <div className="my-6 overflow-hidden rounded-xl sm:rounded-2xl border border-stone-200/80 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-125 text-left text-xs sm:text-sm text-stone-700">
                      <thead className="bg-stone-100/80 text-stone-900 font-semibold border-b border-stone-200/80">
                        <tr>
                          {section.table.headers.map((header, idx) => (
                            <th key={idx} className="p-3 sm:p-4 whitespace-nowrap">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {section.table.rows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                            <td className="p-3 sm:p-4 font-semibold text-stone-900">
                              {row.parameter}
                            </td>
                            <td className="p-3 sm:p-4">{row.optionA}</td>
                            <td className="p-3 sm:p-4">{row.optionB}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Callout Card */}
              {section.callout && (
                <div className="bg-stone-50 border-l-4 border-[#586454] p-4 sm:p-5 rounded-r-xl my-5 text-stone-700 text-sm sm:text-base">
                  {section.callout.badge && (
                    <p className="font-semibold text-stone-950 mb-1">
                      {section.callout.badge}
                    </p>
                  )}
                  <p className="leading-relaxed">{section.callout.text}</p>
                </div>
              )}
            </section>
          ))}

          {/* Section: FAQs */}
          {faqs.length > 0 && (
            <section id="faqs" className="scroll-mt-24 pt-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-950 tracking-tight mb-4">
                {sections.length + 1}. Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <Accordion  className="w-full space-y-3">
                  {faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="overflow-hidden rounded-xl border border-stone-200/80 bg-white px-4 sm:px-5 transition-all data-[state=open]:border-stone-800/40"
                    >
                      <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-stone-900 hover:text-stone-950 hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm leading-relaxed text-stone-600 pb-4 pt-1">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-18 pt-10 sm:pt-12 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                Keep Reading
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-stone-950 mt-1">
                Related Treatment Guides
              </h3>
            </div>
            <Link
              href="/blogs"
              className="text-xs sm:text-sm font-semibold text-stone-800 hover:text-stone-950 underline underline-offset-4"
            >
              View All Guides &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug || relatedPost.id}
                href={`/blogs/${relatedPost.slug || relatedPost.id}`}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 hover:border-stone-300 transition-all  flex flex-col sm:flex-row gap-4 group"
              >
                <div className="w-full sm:w-36 h-36 sm:h-28 bg-stone-100 rounded-xl overflow-hidden shrink-0 relative">
                  <Image
                    src={relatedPost.featuredImage}
                    alt={relatedPost.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 150px"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col justify-between grow">
                  <div>
                    <span className="text-[11px] text-[#586454] font-semibold uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-stone-700 transition leading-snug mt-1 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                  </div>
                  <span className="text-xs text-stone-500 mt-3 font-medium">
                    {relatedPost.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
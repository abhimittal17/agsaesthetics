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
import { use } from "react";

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  
  // Find post by id or slug
  const post = blogs.find((p) => p.id === id || p.slug === id);
  if (!post) return notFound();

  const faqs = post.faqs ?? [];
  const sections = post.content?.sections ?? [];

  // Filter related posts (same category or excluding current post)
  const relatedPosts = blogs
    .filter((b) => b.id !== post.id)
    .slice(0, 2);

  return (
    <article className="pb-20">
      {/* Article Header & Hero */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 space-y-3">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-[#586454] text-white text-xs px-3 py-1 rounded-full uppercase font-medium">
            {post.category}
          </span>
          <span className="text-xs text-stone-500">{post.readTime}</span>
        </div>

        <h1 className="text-3xl text-center font-bold tracking-tight text-stone-900 leading-[1.2]">
          {post.title}
        </h1>

        {post.subtitle && (
          <p className="text-center text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            {post.subtitle}
          </p>
        )}

      
       
      </header>

      {/* Featured Cover Image */}
     
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
          <div className="rounded-2xl overflow-hidden border border-stone-200 aspect-video sm:aspect-21/9 bg-stone-100 relative">
            <Image
              fill
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      

      {/* Main Grid: Article Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-stone-800 leading-relaxed text-base sm:text-lg">
          <div className="prose prose-stone max-w-none space-y-8">
            
            {/* Dynamic Content Sections */}
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 pt-4"
              >
                {section.heading && (
                  <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                    {section.heading}
                  </h2>
                )}

                {/* Paragraphs */}
                {section.paragraphs?.map((paragraph, idx) => (
                  <p key={idx} className="text-sm leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                {/* Bullet Points */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 text-sm my-4">
                    {section.bulletPoints.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.label} </strong>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tables */}
                {section.table && (
                  <div className="overflow-x-auto border border-stone-100 rounded-xl my-6 bg-white">
                    <table className="w-full text-left text-sm text-stone-700">
                      <thead className="bg-stone-100 text-stone-900 font-semibold border-b border-stone-100">
                        <tr>
                          {section.table.headers.map((header, idx) => (
                            <th key={idx} className="p-3.5">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {section.table.rows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="p-3.5 font-medium text-stone-900">
                              {row.parameter}
                            </td>
                            <td className="p-3.5">{row.optionA}</td>
                            <td className="p-3.5">{row.optionB}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Callout Card */}
                {section.callout && (
                  <div className="bg-stone-50 border-l-4 border-[#586454] p-4 rounded-r-lg my-4 text-stone-700 text-sm">
                    {section.callout.badge && (
                      <p className="font-semibold text-md text-stone-900 mb-1">
                        {section.callout.badge}
                      </p>
                    )}
                    <p>{section.callout.text}</p>
                  </div>
                )}
              </section>
            ))}

            {/* Section: FAQs */}
            {faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-24 pt-4">
                <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                  {sections.length + 1}. Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <Accordion className="w-full space-y-3">
                    {faqs.map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="overflow-hidden rounded-xl border border-stone-200/70 px-5 transition-all data-[state=open]:border-stone-800/40"
                      >
                        <AccordionTrigger className="text-left text-sm font-medium text-stone-800 hover:text-stone-950 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-xs sm:text-sm leading-relaxed text-stone-500 pb-5 pt-1">
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
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 pt-12 border-t border-stone-100">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">Keep Reading</p>
              <h3 className="text-lg font-bold text-stone-900 mt-1">
                Related Treatment Guides
              </h3>
            </div>
            <Link
              href="/blogs"
              className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
            >
              View All Guides &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug || relatedPost.id}
                href={`/blogs/${relatedPost.slug || relatedPost.id}`}
                className="bg-white p-5 rounded-xl border border-stone-100 transition flex flex-col sm:flex-row gap-4 group"
              >
                <div className="w-full sm:w-36 h-28 bg-stone-100 rounded-lg overflow-hidden shrink-0 relative">
                  <Image
                    src={relatedPost.featuredImage}
                    alt={relatedPost.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-stone-700 transition leading-snug mt-1">
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
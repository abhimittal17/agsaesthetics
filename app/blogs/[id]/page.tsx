import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample Data Repository (can be moved to a lib/blogs.ts or CMS fetch)
interface PostData {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  reviewedBy: string;
  featuredImage: string;
  content: {
    toc: { id: string; title: string }[];
  };
}

const POSTS: Record<string, PostData> = {
  "hydrafacial-vs-carbon-laser-peel": {
    slug: "hydrafacial-vs-carbon-laser-peel",
    title: "HydraFacial vs. Carbon Laser Peel: Which Gives the Best Instant Glow?",
    subtitle:
      "A clinical comparison of pore congestion clearing, collagen stimulation, downtime, and long-term results for Indian skin types.",
    excerpt:
      "Looking for rapid skin rejuvenation without downtime? We break down the clinical differences, skin suitability, and long-term results between HydraFacials and Carbon Laser Peel treatments.",
    category: "Skin Treatments",
    date: "August 28, 2026",
    readTime: "5 min read",
    author: {
      name: "Dr. Ananya Gupta",
      role: "Lead Cosmetologist & Aesthetic Consultant",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    },
    reviewedBy: "Clinical Dermatology Board, AG Aesthetics & Wellness",
    featuredImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    content: {
      toc: [
        { id: "what-is-hydrafacial", title: "1. What is a Medical HydraFacial?" },
        { id: "what-is-carbon-laser", title: "2. How Does Carbon Laser Peel Work?" },
        { id: "clinical-comparison", title: "3. Direct Clinical Comparison" },
        { id: "which-is-right-for-you", title: "4. Which One Should You Choose?" },
        { id: "safety-and-aftercare", title: "5. Safety & Aftercare Advice" },
        { id: "faqs", title: "6. Frequently Asked Questions" },
      ],
    },
  },
};

const faqData = [
    {
      id: "faq-1",
      question: "Do I need a doctor's referral to book a consultation?",
      answer:
        "No, a prior doctor's referral is not required to visit AG Aesthetics & Wellness Clinic. You can book an appointment directly with our cosmetologists and wellness specialists. However, if you are undergoing active medical treatment or taking prescribed medications, please let us know during your initial consultation so we can tailor treatments safely.",
    },
    {
      id: "faq-2",
      question: "How is my personal and medical data protected?",
      answer:
        "We maintain strict medical confidentiality. All client health records, intake sheets, and clinical notes are stored securely in compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act. Your records and photographs are never shared without your explicit consent.",
    },
    {
      id: "faq-3",
      question: "Can I get treatment on the same day as my consultation?",
      answer:
        "In many cases, yes. Depending on the procedure and your individual skin assessment, minor treatments and basic aesthetic therapies can be performed on the same day following clinical evaluation. More extensive sessions or procedures requiring skin prepping may be scheduled for a follow-up visit.",
    },
    {
      id: "faq-4",
      question: "Are cosmetic and aesthetic treatments covered by health insurance?",
      answer:
        "In India, standard health insurance policies generally do not cover purely elective aesthetic, cosmetic, or anti-aging skin treatments. If a procedure is prescribed for a diagnosed medical condition, we recommend checking directly with your Third Party Administrator (TPA) or insurer regarding reimbursement eligibility.",
    },
    {
      id: "faq-5",
      question: "What is the policy for minors or first-time clients?",
      answer:
        "Clients under 18 years of age must be accompanied by a parent or legal guardian who must review and execute all clinical informed consent documentation. Treatments are always evaluated individually based on safety, age, skin condition, and clinical suitability.",
    },
  ];

// Generate Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = POSTS[params.slug] || POSTS["hydrafacial-vs-carbon-laser-peel"];

  if (!post) {
    return {
      title: "Article Not Found - AG Aesthetics & Wellness Clinic",
    };
  }

  return {
    title: `${post.title} | AG Aesthetics & Wellness Clinic`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://agsaesthetics.com/blog/${post.slug}`,
      images: [{ url: post.featuredImage }],
      type: "article",
    },
  };
}

export default function BlogPostDetail({
  params,
}: {
  params: { slug: string };
}) {
  // Fallback to sample article for demonstration if slug doesn't match
  const post = POSTS[params.slug] || POSTS["hydrafacial-vs-carbon-laser-peel"];

  if (!post) {
    notFound();
  }

  return (
    <article>

      {/* Article Header & Hero */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 space-y-3">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-[#586454] text-white text-xs px-3 py-1 rounded-full uppercase">
            {post.category}
          </span>
          <span className="text-xs text-stone-500">{post.readTime}</span>
        </div>

        <h1 className="text-3xl text-center  font-bold tracking-tight text-stone-900 leading-[1.2]">
          {post.title}
        </h1>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="rounded-2xl overflow-hidden  border border-stone-200 aspect-[16/9] sm:aspect-[21/9] bg-stone-100 relative">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Grid: Sticky Sidebar + Article Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6  gap-10">
       

        <main className="lg:col-span-8 text-stone-800 leading-relaxed text-base sm:text-lg">
          <div className="prose prose-stone max-w-none space-y-8">
            {/* Section 1 */}
            <section id="what-is-hydrafacial" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                1. What is a Medical-Grade HydraFacial?
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                A medical-grade HydraFacial is a non-invasive, multi-step treatment utilizing patented 
                Vortex-Fusion technology. Unlike manual facials that involve aggressive extraction by hand, 
                HydraFacial mechanically vacuums out sebum, blackheads, and dead cellular debris while simultaneously 
                saturating the dermal barrier with targeted antioxidant peptides and hyaluronic acid.
              </p>
              <p className="text-sm leading-relaxed">
                The procedure addresses surface dullness, dehydration lines, and open pores in roughly 45 to 60 minutes 
                with zero discomfort and zero recovery period, making it ideal for instant glow before events.
              </p>
            </section>

            {/* Section 2 */}
            <section id="what-is-carbon-laser" className="scroll-mt-24 pt-4">
              <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                2. How Does the Carbon Laser Peel (Hollywood Peel) Work?
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                The Carbon Laser Peel combines liquid medical-grade carbon with a high-intensity Q-Switched Nd:YAG laser. 
                A micro-fine carbon paste is first applied to the skin, penetrating deep into the pilosebaceous units (pores). 
                Once dry, the laser passes over the skin, causing the carbon particles to implode.
              </p>
              <p className="text-sm leading-relaxed">
                This photothermal effect vaporizes deep-seated impurities, stimulates immediate collagen production in 
                the dermis, and destroys acne-causing bacteria. It is clinically renowned for addressing stubborn oiliness, 
                enlarged pores, and epidermal pigmentation.
              </p>
            </section>

            {/* Section 3: Comparison Table */}
            <section id="clinical-comparison" className="scroll-mt-24 pt-4">
              <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                3. Direct Clinical Comparison
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Here is a quick snapshot of how both procedures stack up across clinical parameters:
              </p>

              <div className="overflow-x-auto border border-stone-100 rounded-xl my-6 bg-white ">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-stone-900 font-semibold border-b border-stone-100">
                    <tr>
                      <th className="p-3.5">Parameter</th>
                      <th className="p-3.5">HydraFacial</th>
                      <th className="p-3.5">Carbon Laser Peel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr>
                      <td className="p-3.5 font-medium text-stone-900">Primary Mechanism</td>
                      <td className="p-3.5">Hydradermabrasion + Infusion</td>
                      <td className="p-3.5">Q-Switched Laser + Liquid Carbon</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-stone-900">Best For</td>
                      <td className="p-3.5">Dryness, congestion, dull texture</td>
                      <td className="p-3.5">Active acne, severe oiliness, open pores</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-stone-900">Downtime</td>
                      <td className="p-3.5">None (instant glow)</td>
                      <td className="p-3.5">None (mild transient pinkness for 1 hr)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-medium text-stone-900">Session Frequency</td>
                      <td className="p-3.5">Every 3-4 weeks</td>
                      <td className="p-3.5">Every 2-3 weeks (in packages)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section id="which-is-right-for-you" className="scroll-mt-24 pt-4">
              <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                4. Which One Should You Choose for Indian Skin?
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Both treatments are thoroughly safe for Fitzpatrick skin types III to V when performed under regulated 
                clinical supervision. Your ideal choice depends on your primary skin complaint:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Opt for HydraFacial if:</strong> You have dehydrated skin, sensitive barrier issues, 
                  or need an immediate radiant glow 24 to 48 hours prior to a wedding, party, or public appearance.
                </li>
                <li>
                  <strong>Opt for Carbon Laser Peel if:</strong> You battle hyperactive sebaceous glands, recurrent 
                  breakouts, enlarged pores on the T-zone, or stubborn post-acne pigmentation.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="safety-and-aftercare" className="scroll-mt-24 pt-4">
              <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                5. Safety &amp; Crucial Aftercare Advice
              </h2>
              <div className="bg-stone-50 border-l-4 border-[#586454] p-4 rounded-r-lg my-4 text-stone-700 text-sm">
                <p className="font-semibold text-md text-stone-900 mb-1">Clinic Practitioner Note:</p>
                Strictly avoid active acids (Glycolic, Salicylic, Retinol) for 72 hours post-procedure. Apply a broad-spectrum 
                mineral or hybrid SPF 50+ every 3 hours if outdoors.
              </div>
            </section>

            {/* Section 6: FAQs */}
            <section id="faqs" className="scroll-mt-24 pt-4">
              <h2 className="text-lg font-bold text-stone-900 tracking-tight mb-4">
                6. Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                 <Accordion  className="w-full space-y-3">
                {faqData.map((faq) => (
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
          </div>

          {/* Author Bio Box */}
          <div className="mt-14 p-6 sm:p-8 bg-white border border-stone-100 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5 ">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border border-stone-200 shrink-0"
            />
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-stone-900 text-base">{post.author.name}</h4>
              <p className="text-xs text-stone-500 mb-2">{post.author.role}</p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Specializes in evidence-based non-surgical aesthetics, facial contouring, laser treatments, 
                and bespoke skincare protocols for sensitive and melanin-rich skin at AG Aesthetics &amp; Wellness Clinic.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Related Posts Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 pt-12 border-t border-stone-100">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest ">
              Keep Reading
            </p>
            <h3 className="text-lg font-bold text-stone-900 mt-1">
              Related Treatment Guides
            </h3>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
          >
            View All Guides &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/blog/chemical-peels-for-indian-skin"
            className="bg-white p-5 rounded-xl border border-stone-100  transition flex flex-col sm:flex-row gap-4 group"
          >
            <div className="w-full sm:w-36 h-28 bg-stone-100 rounded-lg overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80"
                alt="Chemical Peels"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-stone-500 uppercase">Skin Peels</span>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-stone-700 transition leading-snug mt-1">
                  Are Chemical Peels Safe for Indian Skin? Myths vs. Facts
                </h4>
              </div>
              <span className="text-xs text-stone-500 mt-3 font-medium">4 min read</span>
            </div>
          </Link>

          <Link
            href="/blog/prp-therapy-hair-thinning-results"
            className="bg-white p-5 rounded-xl border border-stone-100   transition flex flex-col sm:flex-row gap-4 group"
          >
            <div className="w-full sm:w-36 h-28 bg-stone-100 rounded-lg overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
                alt="PRP Hair Therapy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-stone-500 uppercase">Hair Care</span>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-stone-700 transition leading-snug mt-1">
                  PRP for Hair Loss: How Many Sessions Do You Really Need?
                </h4>
              </div>
              <span className="text-xs text-stone-500 mt-3 font-medium">7 min read</span>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
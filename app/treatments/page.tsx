import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { treatments } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Medical Treatments & Procedures | AG Aesthetics & Wellness Clinic Kharar",
  description:
    "Explore clinical aesthetic treatments, advanced laser therapies, medical facials, acne scar revisions, and hair restoration procedures at AG Aesthetics & Wellness Clinic in Kharar, Punjab.",
  keywords: [
    "Aesthetic Treatments Kharar",
    "Clinical Cosmetology Mohali",
    "Laser Skin Treatments Punjab",
    "Acne Scar Treatment Kharar",
    "HydraFacial Kharar",
    "Hair Loss Treatment PRP GFC",
    "Chemical Peels Kharar",
    "AG Aesthetics & Wellness Clinic",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/treatments",
  },
  openGraph: {
    title: "Medical Treatments & Procedures | AG Aesthetics & Wellness Clinic",
    description:
      "Explore clinical aesthetic treatments, advanced laser therapies, medical facials, acne scar revisions, and hair restoration procedures in Kharar, Punjab.",
    url: "/treatments",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/ctaimage2.webp",
        width: 1200,
        height: 630,
        alt: "Medical Treatments & Procedures at AG Aesthetics & Wellness Clinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Treatments & Procedures | AG Aesthetics & Wellness Clinic",
    description:
      "Explore clinical aesthetic treatments, advanced laser therapies, medical facials, and hair restoration procedures in Kharar, Punjab.",
    images: ["/ctaimage2.webp"],
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

export default function TreatmentsPage() {
  const filtered = treatments;
  return (
    <main className="min-h-screen bg-white pb-16 sm:pb-20 md:pb-28 w-full">
      {/* 1. Header & Dynamic Category Filters */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 max-w-7xl mx-auto">
        <div className="text-center pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium">
            Treatments
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-[#1E251D]">
            Medical Treatments &amp; Procedures
          </h1>
        </div>
      </section>

      {/* 2. Structured 3-Column Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filtered.map((item) => {
              // Extract quick metadata from stats array
              const durationStat = item.stats.find(
                (s) => s.label.toLowerCase().includes("duration")
              );
              const longevityStat = item.stats.find(
                (s) => s.label.toLowerCase().includes("longevity")
              );

              return (
                <article
                  key={item.id}
                  className="group flex flex-col bg-white border border-stone-200/80 rounded-2xl overflow-hidden hover:border-stone-300 transition-all duration-300 "
                >
                  {/* Image Container */}
                  <Link
                    href={`/treatments/${item.id}`}
                    className="relative aspect-16/10 w-full overflow-hidden bg-[#EFECE6] block"
                  >
                    <Image
                      src={item.gallery.heroMain}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {item.categoryTitle && (
                      <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                        <span className="px-2.5 py-1 rounded-md bg-[#FAFAF7]/95 backdrop-blur-xs text-[10px] tracking-wider uppercase font-semibold text-[#3A4638] border border-[#E0DDD5] ">
                          {item.categoryTitle}
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <Link href={`/treatments/${item.id}`}>
                        <h2 className="text-lg sm:text-xl font-semibold text-[#1E251D] tracking-tight leading-snug hover:text-[#586454] transition-colors">
                          {item.title}
                        </h2>
                      </Link>

                      {item.subtitle && (
                        <p className="text-xs sm:text-sm text-[#707F6D] mt-1.5 sm:mt-2 font-normal sm:font-medium leading-relaxed line-clamp-3">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="mt-5 sm:mt-6 pt-4 border-t border-[#F2EFE9] flex items-center justify-between text-xs text-[#6B7C68]">
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs">
                        {durationStat && (
                          <span className="flex items-center gap-1.5" title="Procedure Duration">
                            <Clock className="w-3.5 h-3.5 text-[#8A9A87] shrink-0" />
                            {durationStat.val}
                          </span>
                        )}
                        {longevityStat && (
                          <span className="flex items-center gap-1.5" title="Expected Longevity">
                            <Calendar className="w-3.5 h-3.5 text-[#8A9A87] shrink-0" />
                            {longevityStat.val}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(
                          item.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#2F382E] hover:underline cursor-pointer group/link shrink-0 ml-2"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 sm:py-20 text-[#6B7C68] text-xs sm:text-sm">
              No clinical treatments found matching this category.
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="mt-12 sm:mt-16 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#F0EFE9] border border-stone-200/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="max-w-xl text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1E251D]">
              Unsure which protocol fits your skin or hair concern?
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#5B6A58] leading-relaxed">
              Schedule an in-person diagnostic evaluation at our Kharar practice. Our physicians will review your dermatological history before proposing any procedure.
            </p>
          </div>
          <Link
            href="/appointments"
            className="w-full sm:w-auto text-center shrink-0 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#2F382E] text-[#F6F4EE] text-xs sm:text-sm font-semibold hover:bg-[#242C23] transition-colors active:scale-95"
          >
            Book Clinical Evaluation
          </Link>
        </div>
      </section>
    </main>
  );
}
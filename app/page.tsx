"use client";

import { useState, } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import { treatments } from "@/lib/treatments";
import { blogs } from "@/lib/blogs";

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);

  const trustHighlights = [
    "Doctor-Led Facial Vector Diagnostics",
    "Certified Medical Lasers",
    "Strict Single-Use Sterile Disposables",
    "Evidence-Backed Procedural Medicine",
  ];

  const patientReviews = [
    {
      id: 1,
      name: "Simran K.",
      treatment: "Acne Scar Subcision & Peel Protocol",
      text: "The clinical approach here is entirely different from typical beauty clinics. The doctor explained the exact depth of my tethered scars and designed a 4-session plan. Visible flattening in two months without hyperpigmentation.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh V.",
      treatment: "GFC Hair Follicle Restoration",
      text: "Very professional medical environment in Kharar. Everything from the blood draw centrifuge to micro-needle delivery was sterile and transparent. Excessive shedding stopped by the 3rd session.",
      rating: 5,
    },
    {
      id: 3,
      name: "Harleen M.",
      treatment: "Forehead Micro-Botox & HydraFacial",
      text: "I was terrified of having a frozen face. Dr. Gill practiced complete restraint — my forehead lines are soft, but my brows still move naturally. The clinic is clean, serene, and unrushed.",
      rating: 5,
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev === patientReviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? patientReviews.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <section className="bg-[#242C23] text-[#E5E9E2] py-6 border-b border-[#344032]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {trustHighlights.map((text, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3B89E] shrink-0" />
                <span className="font-medium tracking-tight text-[#E5E9E2]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

   <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Diagnostic Visual Card */}
        <div className="lg:col-span-5 relative aspect-4/5 rounded-3xl overflow-hidden bg-stone-200 border border-[#E2DFD6] shadow-xs">
          <Image
            src="/clinic.jpg"
            alt="Clinical consultation and diagnostic skin evaluation at AG Aesthetics & Wellness Clinic Kharar"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#242C23]/95 backdrop-blur-md text-white border border-[#3A4937] text-xs">
            <p className="font-semibold text-sm tracking-tight">Doctor-Led Baseline Diagnostics</p>
            <p className="text-[#A2B49E] text-[11px] mt-0.5 leading-relaxed">
              Assessing dermal thickness, vascular reactivity, and root etiology before prescribing any treatment protocol.
            </p>
          </div>
        </div>

        {/* Content & Clinical Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#6E806B] font-medium block">
            The AG Clinical Standard
          </span>

          <h2 className="text-3xl sm:text-4xl text-[#1E251D] leading-tight font-medium">
            Aesthetic Medicine &amp; Regenerative Wellness Rooted in Biological Science.
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#4E5E4C] leading-relaxed">
            <p>
              At AG Aesthetics &amp; Wellness Clinic in Kharar, we reject fast-paced commercial salon packages. Our practice bridges clinical dermatology, constitutional healing, and advanced facial aesthetics with hospital-grade sterility and ethical medical governance.
            </p>
            <p>
              Whether administering precise micro-aliquot injectables, calibrating multi-wavelength lasers for South Asian skin types, or treating persistent dermatological and hair thinning concerns from within, our treatments focus on cellular health, anatomical balance, and lasting natural outcomes.
            </p>
          </div>

          {/* Core Feature Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE7E0]">
            <div className="p-4 rounded-xl bg-white border border-[#E2DFD6] flex flex-col justify-between">
              <div>
                <Clock className="w-4 h-4 text-[#5D7A58] mb-2" />
                <p className="text-xs font-semibold text-[#1E251D]">Unrushed Consultations</p>
              </div>
              <p className="text-[11px] text-[#71826F] mt-1 leading-snug">
                One-on-one evaluations to identify root causes before initiating any procedure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD6] flex flex-col justify-between">
              <div>
                <Microscope className="w-4 h-4 text-[#5D7A58] mb-2" />
                <p className="text-xs font-semibold text-[#1E251D]">Calibrated Dosing</p>
              </div>
              <p className="text-[11px] text-[#71826F] mt-1 leading-snug">
                Zero product overload. Treatments are dialed strictly to your anatomical structure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD6] flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-4 h-4 text-[#5D7A58] mb-2" />
                <p className="text-xs font-semibold text-[#1E251D]">Ethical Monitoring</p>
              </div>
              <p className="text-[11px] text-[#71826F] mt-1 leading-snug">
                Structured post-treatment check-ins to monitor tissue healing, hair recovery, and symmetry.
              </p>
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-2">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242C23] border-b border-[#242C23] pb-1 hover:text-[#5F7859] hover:border-[#5F7859] transition-colors"
            >
              <span>Explore Our Practice Philosophy &amp; Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>

      <section className="py-20 bg-[#F3F2EB] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl  text-[#1E251D] mt-1">
                Popular Medical Procedures
              </h2>
            </div>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#242C23] hover:text-[#5F7859] transition-colors"
            >
              <span>View All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.slice(0, 4).map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white  rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-200">
                  <Image
                    src={item.gallery.heroMain}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#FAFAF7]/95 backdrop-blur-xs text-[10px]  uppercase tracking-wider text-[#354333] border border-[#E0DDD5]">
                      {item.categoryTitle}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-base  text-[#1E251D] tracking-tight group-hover:text-[#42533F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-medium text-[#71826F] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2EFE8] flex items-center justify-between">
                    <Link
                      href={`/treatments/${item.id}`}
                      className="text-xs font-medium text-[#242C23] hover:underline"
                    >
                      Explore More
                    </Link>
                    <a
                      href={`https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#546851] hover:text-[#1E251D] inline-flex items-center gap-1"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl  text-[#1E251D]">
              Evidence-Based Dermatology Articles
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#242C23] hover:text-[#5F7859] transition-colors"
          >
            <span>View All Clinical Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((article) => (
            <Link
              href={`/blogs/${article.id}`}
              key={article.id}
              className="group flex flex-col bg-white border border-[#E2DFD6] rounded-2xl overflow-hidden   transition-all"
            >
              <div className="relative aspect-16/10 w-full bg-stone-200 overflow-hidden">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#FAFAF7]/95 backdrop-blur-xs text-[10px]  uppercase tracking-wider text-[#354333] border border-[#E0DDD5]">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-[#71826F]  mb-2">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg  text-[#1E251D] tracking-tight group-hover:text-[#42533F] transition-colors leading-snug">
                    <Link href={`/blogs/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-2.5 text-xs text-[#526250] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
<section className="py-28 bg-[#F3F2EB]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

      <div className="lg:col-span-5 space-y-4">
        <h2 className="text-3xl sm:text-4xl text-[#1E251D]">
          Verified Patient Experiences
        </h2>
        <p className="text-xs sm:text-sm text-[#526250] leading-relaxed">
          Read how our measured, doctor-led approach helped patients in Kharar and Greater Mohali address acne scars, hair thinning, and facial volume loss.
        </p>

        <div className="pt-2 flex items-center gap-2">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#1E251D]">5.0 Star Average</span>
          <span className="text-xs text-[#71826F]">&bull; Google Verified Reviews</span>
        </div>

        {/* Navigation & View All Action */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prevReview}
              aria-label="Previous Review"
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#242C23] hover:bg-[#EFECE5] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next Review"
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#242C23] hover:bg-[#EFECE5] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-xs font-medium text-[#242C23]  hover:bg-[#EFECE5] hover:border-[#D5D0C5] transition-colors"
          >
            <span>Read All Testimonials</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5F7859]" />
          </Link>
        </div>
      </div>

      <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 relative">
        <blockquote className="text-sm sm:text-lg text-black leading-relaxed">
          &ldquo;{patientReviews[currentReview].text}&rdquo;
        </blockquote>
        <div className="mt-6 pt-5 border-t border-[#F2EFE8] flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#1E251D]">
              {patientReviews[currentReview].name}
            </p>
            <p className="text-[11px] text-[#71826F]">Kharar Practice Patient</p>
          </div>
          <div className="flex text-amber-500">
            {[...Array(patientReviews[currentReview].rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#242C23] text-white p-8 sm:p-14 border border-[#3A4937]">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
              src="/8.png"
              alt="AG Aesthetics Clinic Suite"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#242C23] via-[#242C23]/95 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-[10px]  tracking-[0.25em] uppercase text-[#A3B89E] block">
              Ethical Aesthetic Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl  tracking-tight text-[#F6F4EE]">
              Schedule Your Facial or Hair Evaluation
            </h2>
            <p className="text-xs sm:text-sm text-[#B4C6B1] leading-relaxed">
              We never recommend procedures you do not need. Meet with our clinical doctors in Kharar for an objective baseline assessment and realistic recovery timelines.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/appointments"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6F4EE] text-[#1E251D] text-xs font-semibold hover:bg-white transition-all  active:scale-95"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/treatments"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#485C45] text-[#E5E9E2] text-xs font-medium hover:bg-[#2C372B] transition-colors"
              >
                Browse Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
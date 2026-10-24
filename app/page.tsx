"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  PhoneCall,
  Microscope,
  Calendar,
  Award,
  BookOpen,
  MapPin
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const treatmentSliderRef = useRef<HTMLDivElement>(null);

  const trustHighlights = [
    "Doctor-Led Facial Vector Diagnostics",
    "US-FDA & CE Certified Medical Lasers",
    "Strict Single-Use Sterile Disposables",
    "Evidence-Backed Procedural Medicine",
  ];

  const featuredTreatments = [
    {
      id: "injectables",
      title: "Facial Injectables & Contouring",
      subtitle: "Neuromodulators & Dermal Architecture",
      description: "Targeted micro-dosing to soften persistent forehead creases and restore mid-face structure with zero loss of natural expression.",
      image: "https://images.unsplash.com/photo-1512290900672-1f023330ff25?auto=format&fit=crop&w=800&q=80",
      category: "Injectables",
      href: "/treatments/injectables",
    },
    {
      id: "skin-rejuvenation",
      title: "Medical HydraFacial & Peels",
      subtitle: "Vortex Vacuum Pore Evacuation",
      description: "Clinical deep cleansing to extract congested sebum followed by customized chemical peel acids formulated for South Asian skin.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      category: "Skin Revision",
      href: "/treatments/skin-rejuvenation",
    },
    {
      id: "acne-and-scars",
      title: "Clinical Acne & Scar Subcision",
      subtitle: "Multi-Modality Dermal Remodelling",
      description: "Targeted release of tethered rolling scars combined with fractional energy passes to stimulate long-term collagen synthesis.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      category: "Dermatology",
      href: "/treatments/acne-and-scars",
    },
    {
      id: "hair-rejuvenation",
      title: "Autologous PRP & GFC Therapy",
      subtitle: "Concentrated Growth Factor Scalp Delivery",
      description: "Direct application of your own blood plasma growth factors into miniaturized scalp zones to reactivate dormant hair follicles.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      category: "Trichology",
      href: "/treatments/hair-rejuvenation",
    },
  ];

  const clinicalArticles = [
    {
      id: "acne-scar-subcision-guide",
      title: "Understanding Tethered Acne Scars: Why Topical Serums Fall Short",
      excerpt: "Deep rolling and boxcar scars are anchored by fibrotic bands in the lower dermis. Learn why surgical subcision and fractional energy are required to release scar tissue.",
      date: "Oct 14, 2026",
      readTime: "4 min read",
      category: "Clinical Dermatology",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prp-vs-gfc-hair-loss",
      title: "PRP vs. GFC for Hair Thinning: The Science of Growth Factor Concentration",
      excerpt: "How autologous growth factor concentrates differ from standard platelet-rich plasma in follicle miniaturization, shedding control, and density restoration.",
      date: "Oct 02, 2026",
      readTime: "5 min read",
      category: "Trichology & Hair",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "preventing-hyperpigmentation-lasers",
      title: "Laser Safety in Indian Skin Types: Avoiding Post-Inflammatory Hyperpigmentation",
      excerpt: "Why melanin-dense skin types require calibrated wavelengths (such as Nd:YAG 1064nm) and advanced contact cooling to treat concerns without causing rebound pigment.",
      date: "Sep 21, 2026",
      readTime: "6 min read",
      category: "Laser Science",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    },
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
      {/* 1. HERO SECTION (Unchanged / Exact Double-Canvas Layout) */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24  bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-6">

              <h1 className="text-4xl sm:text-6xl  text-[#1E251D] tracking-tight leading-[1.12]">
                Evidence-Based Aesthetics. <br />
                <span className="italic font-normal text-[#546650]">Natural Proportions.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#566553] leading-relaxed max-w-xl">
                Advanced laser dermatology, facial contouring, and cellular trichology in Kharar. Guided by medical ethics, anatomical restraint, and zero pushy commercial sales.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20book%20a%20clinical%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#242C23] text-[#F6F4EE] text-xs font-semibold hover:bg-[#1E251D] transition-colors "
                >
                  <span>Book Doctor Evaluation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  href="/treatments"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#D5DCD2] text-[#242C23] text-xs font-semibold hover:bg-[#F3F2EB] transition-colors"
                >
                  Explore Medical Procedures
                </Link>
              </div>

              {/* Trust Signal Pillars */}
              <div className="pt-6 border-t border-[#F0ECE3] grid grid-cols-2 gap-3 text-xs text-[#465444]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5D7A58] shrink-0" />
                  <span>US-FDA Cleared Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5D7A58] shrink-0" />
                  <span>Strict Single-Use Disposables</span>
                </div>
              </div>
            </div>

            {/* Right Hero Double-Image Canvas */}
            <div className="lg:col-span-5 grid grid-cols-12 gap-3.5 items-center">
              <div className="col-span-8 relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-200  ">
                <img
                  src="https://images.unsplash.com/photo-1512290900672-1f023330ff25?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor facial mapping consultation"
                 
                  
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 35vw"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 text-[11px] font-medium text-[#1E251D] ">
                  Anatomical Vector Assessment &bull; Kharar OPD
                </div>
              </div>

              <div className="col-span-4 space-y-3.5">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-200  ">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                    alt="Clinical treatment suite"
                   
                    className="object-cover"
                    sizes="(max-width: 1024px) 30vw, 15vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200  ">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
                    alt="Medical laser technology"
                   
                    className="object-cover"
                    sizes="(max-width: 1024px) 30vw, 15vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REASSURANCE STRIP */}
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

      {/* 3. CLINICAL PHILOSOPHY / ABOUT TEASER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-200 border border-[#E2DFD6] ">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
              alt="Physician examining skin under diagnostic light"
             
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#242C23]/95 backdrop-blur-md text-white border border-[#3A4937] text-xs">
              <p className=" text-sm">30-Minute Baseline Diagnostic</p>
              <p className="text-[#A2B49E] text-[11px] mt-0.5">We assess dermal depth, barrier strength &amp; vascular tone before proposing any treatment.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs  uppercase tracking-[0.2em] text-[#6E806B]">
              The AG Standard
            </span>
            <h2 className="text-3xl sm:text-4xl  text-[#1E251D] leading-tight">
              Aesthetic Treatments Grounded in Real Biological Science.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#4E5E4C] leading-relaxed">
              <p>
                Too many clinics treat skin procedures as generic spa packages. At AG Aesthetics in Kharar, our procedures are delivered with the precision of hospital-grade dermatology.
              </p>
              <p>
                We carefully calibrate wavelengths, chemical concentrations, and needle entry vectors specifically for Indian skin types. Our goal is never to change how you look, but to restore cellular vitality, clear pigmentary tethering, and preserve youthful structural symmetry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE7E0]">
              <div className="p-4 rounded-xl bg-white border border-[#E2DFD6]">
                <Clock className="w-4 h-4 text-[#5D7A58] mb-2" />
                <p className="text-xs font-semibold text-[#1E251D]">Unrushed Visits</p>
                <p className="text-[11px] text-[#71826F] mt-1">Dedicated consultation before any procedure starts.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2DFD6]">
                <Microscope className="w-4 h-4 text-[#5D7A58] mb-2" />
                <p className="text-xs font-semibold text-[#1E251D]">Targeted Dosing</p>
                <p className="text-[11px] text-[#71826F] mt-1">Zero excess product. Only the units your anatomy needs.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2DFD6]">
                <Award className="w-4 h-4 text-[#5D7A58] mb-2" />
                <p className="text-xs font-semibold text-[#1E251D]">14-Day Review</p>
                <p className="text-[11px] text-[#71826F] mt-1">Planned follow-up to inspect tissue settling &amp; symmetry.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242C23] border-b border-[#242C23] pb-1 hover:text-[#5F7859] hover:border-[#5F7859] transition-colors"
              >
                <span>Read More About Our Clinic Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOUR-COLUMN FEATURED TREATMENTS */}
      <section className="py-20 bg-[#F3F2EB] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px]  uppercase tracking-[0.2em] text-[#6E806B]">
                Core Clinical Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl  text-[#1E251D] mt-1">
                Popular Medical Procedures
              </h2>
            </div>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#242C23] hover:text-[#5F7859] transition-colors"
            >
              <span>View All 15+ Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTreatments.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white border border-[#E2DFD6] rounded-2xl overflow-hidden  hover:border-[#C5CFC0] hover: transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#FAFAF7]/95 backdrop-blur-xs text-[10px]  uppercase tracking-wider text-[#354333] border border-[#E0DDD5]">
                      {item.category}
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
                    <p className="mt-2.5 text-xs text-[#526250] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2EFE8] flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-xs font-medium text-[#242C23] hover:underline"
                    >
                      Protocol Details
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

      {/* 5. CLINICAL BLOG & DERMATOLOGY INSIGHTS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px]  uppercase tracking-[0.2em] text-[#6E806B] block mb-1">
              Clinical Insights &bull; Education
            </span>
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
          {clinicalArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-white border border-[#E2DFD6] rounded-2xl overflow-hidden  hover:border-[#CAD4C6] transition-all"
            >
              <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
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

                <div className="pt-4 border-t border-[#F2EFE8]">
                  <Link
                    href={`/blogs/${article.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#242C23] group-hover:text-[#546851] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. PATIENT STORIES / CLINICAL REVIEWS */}
      <section className="py-20 bg-[#F3F2EB] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px]  uppercase tracking-[0.2em] text-[#6E806B]">
                Patient Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl  text-[#1E251D]">
                Verified Patient Experiences
              </h2>
              <p className="text-xs sm:text-sm text-[#526250] leading-relaxed">
                Read how our measured, doctor-led approach helped patients in Kharar and Greater Mohali address acne scars, hair thinning, and facial volume loss.
              </p>

              <div className="pt-2 flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#1E251D]">5.0 Star Average</span>
                <span className="text-xs text-[#71826F]">&bull; Google Verified Reviews</span>
              </div>

              <div className="flex gap-2.5 pt-4">
                <button
                  type="button"
                  onClick={prevReview}
                  aria-label="Previous Review"
                  className="w-10 h-10 rounded-xl bg-white border border-[#DDD9CE] flex items-center justify-center text-[#242C23] hover:bg-[#EFECE5] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next Review"
                  className="w-10 h-10 rounded-xl bg-white border border-[#DDD9CE] flex items-center justify-center text-[#242C23] hover:bg-[#EFECE5] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E2DFD6]  relative">
              <span className="text-[10px]  uppercase tracking-widest text-[#7D8F79] block mb-3">
                Protocol: {patientReviews[currentReview].treatment}
              </span>
              <blockquote className="text-base sm:text-lg text-[#1E251D]  leading-relaxed italic">
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
                    <Star key={i} className="w-3.5 h-3.5-current" />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

 

      {/* 8. EDITORIAL APPOINTMENT CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#242C23] text-white p-8 sm:p-14 border border-[#3A4937]">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80"
              alt="AG Aesthetics Clinic Suite"
             
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#242C23] via-[#242C23]/95 to-transparent" />
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
              <a
                href="https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20schedule%20an%20evaluation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6F4EE] text-[#1E251D] text-xs font-semibold hover:bg-white transition-all  active:scale-95"
              >
                <span>Book Slot via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

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
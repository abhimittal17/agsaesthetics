"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Plus,
  Minus,
  AlertCircle,
  PhoneCall,
  Sparkles,
  Clock,
  Calendar,
  Zap,
  Activity,
  Heart,
  LucideIcon,
} from "lucide-react";

// Client-side icon resolver mapping strings/labels to Lucide components
function getStatIcon(labelOrName: string = ""): LucideIcon {
  const normalized = labelOrName.toLowerCase();
  if (normalized.includes("duration") || normalized.includes("time")) return Clock;
  if (normalized.includes("longevity") || normalized.includes("session")) return Calendar;
  if (normalized.includes("downtime") || normalized.includes("recovery")) return Activity;
  if (normalized.includes("comfort") || normalized.includes("pain")) return Heart;
  if (normalized.includes("technology") || normalized.includes("energy")) return Zap;
  return Sparkles;
}

interface TreatmentPhase {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  takeaways?: string[];
  photo?: string;
}

interface TreatmentData {
  categoryTitle?: string;
  title: string;
  subtitle?: string;
  heroDesc?: string;
  stats?: { label: string; val: string; iconName?: string }[];
  gallery?: {
    heroMain?: string;
    heroSecondary?: string;
    microTexture?: string;
  };
  indications?: string[];
  phases?: TreatmentPhase[];
  faqs?: { q: string; a: string }[];
}

export default function TreatmentDetailClient({ data }: { data: TreatmentData }) {
  const [activeTab, setActiveTab] = useState<string>(data.phases?.[0]?.id ?? "");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activePhase =
    data.phases?.find((p: { id: string }) => p.id === activeTab) ||
    data.phases?.[0];

  return (
    <main className="min-h-screen w-full bg-white text-stone-900 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div>
              {data.categoryTitle && (
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#7E8F7B] font-semibold block mb-2">
                  {data.categoryTitle}
                </span>
              )}
              <h1 className="text-2xl sm:text-4xl  font-semibold text-black tracking-tight leading-tight">
                {data.title}
              </h1>
              {data.subtitle && (
                <p className="text-sm sm:text-base md:text-lg text-[#556552] font-medium mt-2.5 sm:mt-3 leading-relaxed">
                  {data.subtitle}
                </p>
              )}
            </div>

            {data.heroDesc && (
              <p className="text-xs sm:text-sm md:text-base text-[#465444] leading-relaxed wrap-break-word">
                {data.heroDesc}
              </p>
            )}

            {/* Metrics Ribbon */}
            {data.stats && data.stats.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 py-4">
                {data.stats.map((stat, i) => {
                    const IconComponent = getStatIcon(stat.iconName || stat.label);

                    return (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#586454] flex items-center justify-center shrink-0 ">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7E8F7B] font-medium block truncate">
                            {stat.label}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-black block truncate">
                            {stat.val}
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}

            {/* Direct Booking & Consultation CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#586454] text-white text-xs sm:text-sm font-semibold hover:bg-[#1E251D] transition-colors  active:scale-95"
              >
                <span>Book Doctor Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919653552999"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white border border-[#D5DCD2] text-[#242C23] text-xs sm:text-sm font-semibold hover:bg-[#F3F2EB] transition-colors "
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#60715D]" />
                <span>+91 96535 52999</span>
              </a>
            </div>
          </div>

          {/* Right Dual Photo Canvas */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-3 sm:gap-4 items-center">
            <div className="col-span-7 relative aspect-4/5 rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 border border-stone-200/80 ">
              {data.gallery?.heroMain && (
                <Image
                  fill
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 35vw, 400px"
                  src={data.gallery.heroMain}
                  alt={data.title}
                  priority
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 text-[10px] sm:text-[11px] text-[#242C23] font-medium ">
                Clinical Focus: Forehead &amp; Periorbital Contouring
              </div>
            </div>

            <div className="col-span-5 space-y-3 sm:space-y-4">
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/80 ">
                {data.gallery?.heroSecondary && (
                  <Image
                    fill
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 300px"
                    src={data.gallery.heroSecondary}
                    alt="Doctor consultation"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/80 ">
                {data.gallery?.microTexture && (
                  <Image
                    fill
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 300px"
                    src={data.gallery.microTexture}
                    alt="Skin histology close up"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Indications Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F3F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7E8F7B] font-semibold block">
                Assessment Criteria
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-black leading-tight">
                Anatomical Indications for this Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#50604E] leading-relaxed">
                Whether managing early kinetic expressions or structural mid-face contouring, every syringe is customized based on individual bone structure and soft-tissue envelope.
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-stone-200/60 space-y-1.5 text-xs text-stone-700 ">
                <div className="flex items-center gap-2 font-semibold text-black">
                  <AlertCircle className="w-4 h-4 text-[#586454] shrink-0" />
                  Pre-Treatment Clearance
                </div>
                <p className="text-[11px] sm:text-xs leading-relaxed text-stone-600">
                  Requires screening for neuromuscular conditions, pregnancy, or recent antibiotic courses. All allergies are recorded before opening product packaging.
                </p>
              </div>
            </div>

            {/* Indication Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {data.indications?.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/80  flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#5D7A58] shrink-0 mt-0.5" />
                  <span className="text-xs  text-[#2E3A2C] leading-snug font-medium wrap-break-word">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Phase Protocol */}
      {data.phases && data.phases.length > 0 && activePhase && (
        <section className="py-14 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left sm:text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7E8F7B] font-semibold block mb-2">
              Procedure Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
              What to Expect in Our Kharar Clinic
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C6E59] leading-relaxed">
              From diagnostic vector marking through to your complimentary 14-day touch-up review.
            </p>
          </div>

          {/* Phase Pill Buttons */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {data.phases.map((phase) => {
                const isSelected = phase.id === activeTab;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setActiveTab(phase.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs text-left font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#586454] text-white "
                        : "bg-white border border-[#E0DDD3] text-[#556453] hover:border-[#8E9F8B]"
                    }`}
                  >
                    {phase.tabLabel}
                  </button>
                );
              }
            )}
          </div>

          {/* Phase Content Box */}
          <div className="bg-white border border-stone-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center ">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7B8D78] font-semibold block">
                Step Overview
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
                {activePhase.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#50604E] leading-relaxed break-words">
                {activePhase.description}
              </p>

              {activePhase.takeaways && activePhase.takeaways.length > 0 && (
                <div className="pt-2 space-y-2 sm:space-y-2.5">
                  {activePhase.takeaways.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334031]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6E806B] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2 sm:pt-3">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#586454] px-3.5 sm:px-4 py-2 rounded-lg border border-[#E5E1D8] ">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span>Performed only by qualified clinical staff</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100 ">
              {activePhase.photo && (
                <Image
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  src={activePhase.photo}
                  alt={activePhase.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. Visual Clinical Proof */}
      <section className="py-12 sm:py-16 bg-[#F3F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#738470] font-semibold">
                Clean Practice Standards
              </span>
              <h2 className="text-xl sm:text-3xl font-semibold text-black mt-1">
                Inside the Clinical Suite
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#50604E] max-w-sm leading-relaxed">
              Single-use sterile surgical consumables, emergency reversal agents on hand, and US-FDA validated lot numbers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                img: "/safe.png",
                title: "Proven Safety Profile",
              },
              {
                img: "/vector.png",
                title: "Dynamic Wrinkle Reduction",
              },
              {
                img: "/volume.png",
                title: "Structural Volume Lift",
              },
              {
                img: "/face.png",
                title: "Natural Facial Symmetry",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative aspect-4/5 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/60 "
              >
                <Image
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent flex items-end p-3 sm:p-4">
                  <span className="text-white text-xs sm:text-sm font-medium leading-snug">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-14 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7E8F7B] font-semibold block mb-2">
              Questions &amp; Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {data.faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-stone-200/80 rounded-xl sm:rounded-2xl bg-white overflow-hidden transition-all "
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-black pr-2 leading-snug">
                      {item.q}
                    </span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F3F2EC] flex items-center justify-center shrink-0 text-[#4D5A4A]">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 break-words">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. Booking Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#242C23] text-white p-6 sm:p-10 md:p-14 border border-[#3A4937]">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              src="/8.png"
              alt="AG Aesthetics Kharar Treatment Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#242C23] via-[#242C23]/95 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#A3B89E] font-semibold block">
              In-Person Consultation
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Schedule Your Facial Assessment in Kharar
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#B4C6B1] leading-relaxed">
              Every procedure begins with high-resolution skin photography and a medical consultation with our lead doctor. Located at SCO 6, 1st Floor, SAI Street, Radiola Road.
            </p>

            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#F6F4EE] text-black text-xs sm:text-sm font-semibold hover:bg-white transition-all active:scale-95 "
              >
                <span>Book Slot via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-[#485C45] text-[#E5E9E2] text-xs sm:text-sm font-medium hover:bg-[#2C372B] transition-colors"
              >
                View Clinic Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Plus,
  Minus,
  AlertCircle,
  PhoneCall,
  Sparkles,
  LucideIcon
} from "lucide-react";

import { treatments } from "@/lib/treatments";


export default function TreatmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const data = Array.isArray(treatments)
    ? treatments.find((item) => item.id === id)
    : treatments[id];

  if (!data) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<string>(data.phases?.[0]?.id ?? "");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activePhase =
    data.phases?.find((p: { id: string }) => p.id === activeTab) || data.phases?.[0];

  return (
    <main className="min-h-screen">
      {/* 2. Hero Section: Editorial Copy & Double Photo Canvas */}
      <section className="pt-10 sm:pt-16 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl text-black tracking-tight leading-[1.12] mt-2">
                {data.title}
              </h1>
              <p className="text-sm sm:text-base text-[#556552] font-medium mt-3 leading-relaxed">
                {data.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#465444] leading-relaxed">
              {data.heroDesc}
            </p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-gray-100">
              {data.stats?.map(
                (stat: { icon?: LucideIcon; label: string; val: string }, i: number) => {
                  const IconComponent = stat.icon || Sparkles;

                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#586454] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#7E8F7B] block">
                          {stat.label}
                        </span>
                        <span className="text-xs font-semibold text-black">
                          {stat.val}
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            {/* Direct Booking & Consultation CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#586454] text-white text-xs font-semibold hover:bg-[#1E251D] transition-colors"
              >
                <span>Book Doctor Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919653552999"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#D5DCD2] text-[#242C23] text-xs font-semibold hover:bg-[#F3F2EB] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#60715D]" />
                <span>+91 96535 52999</span>
              </a>
            </div>
          </div>

          {/* Right Dual Asymmetric Photo Canvas */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 relative aspect-4/5 rounded-3xl overflow-hidden bg-stone-200">
              {data.gallery?.heroMain && (
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={data.gallery.heroMain}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 text-[11px] text-[#242C23] font-medium">
                Clinical Focus: Forehead &amp; Periorbital Contouring
              </div>
            </div>

            <div className="col-span-5 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-200">
                {data.gallery?.heroSecondary && (
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={data.gallery.heroSecondary}
                    alt="Doctor consultation"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-200">
                {data.gallery?.microTexture && (
                  <Image
                    fill
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

      {/* 3. Indications Section */}
      <section className="py-16 bg-[#F3F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-4xl text-black leading-tight">
                Anatomical Indications for this Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#50604E] leading-relaxed">
                Whether managing early kinetic expressions or structural mid-face contouring, every syringe is customized based on individual bone structure and soft-tissue envelope.
              </p>

              <div className="p-4 rounded-xl bg-white/80 space-y-2 text-[11px]">
                <div className="flex items-center gap-2 font-semibold text-black">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Pre-Treatment Clearance
                </div>
                <p>
                  Requires screening for neuromuscular conditions, pregnancy, or recent antibiotic courses. All allergies are recorded before opening product packaging.
                </p>
              </div>
            </div>

            {/* Indication Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.indications?.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#5D7A58] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#2E3A2C] leading-snug font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Phase Protocol */}
      {data.phases && data.phases.length > 0 && activePhase && (
        <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl text-black">
              What to Expect in Our Kharar Clinic
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C6E59]">
              From diagnostic vector marking through to your complimentary 14-day touch-up review.
            </p>
          </div>

          {/* Phase Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {data.phases.map(
              (phase: {
                id: string;
                tabLabel: string;
                title: string;
                description: string;
                takeaways?: string[];
                photo?: string;
              }) => {
                const isSelected = phase.id === activeTab;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setActiveTab(phase.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${isSelected
                      ? "bg-[#586454] text-white"
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
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[10px] uppercase tracking-widest text-[#7B8D78] block">
                Step Overview
              </span>
              <h3 className="text-2xl text-black">{activePhase.title}</h3>
              <p className="text-xs sm:text-sm text-[#50604E] leading-relaxed">
                {activePhase.description}
              </p>

              <div className="pt-2 space-y-2.5">
                {activePhase.takeaways?.map((point: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 text-xs text-[#334031]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E806B]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#586454] px-4 py-2 rounded-lg border border-[#E5E1D8]">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  Performed only by qualified clinical staff
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden shadow-inner bg-stone-100">
              {activePhase.photo && (
                <Image
                  fill
                  src={activePhase.photo}
                  alt={activePhase.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. Visual Clinical Proof */}
      <section className="py-12 bg-[#F3F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#738470]">
                Clean Practice Standards
              </span>
              <h2 className="text-2xl sm:text-3xl text-black mt-1">
                Inside the Clinical Suite
              </h2>
            </div>
            <p className="text-xs max-w-sm">
              Single-use sterile surgical consumables, emergency reversal agents on hand, and US-FDA validated lot numbers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="group relative aspect-4/5 rounded-2xl overflow-hidden bg-stone-200"
              >
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-medium leading-snug">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-black">Faqs</h2>
          </div>

          <div className="space-y-3">
            {data.faqs.map((item: { q: string; a: string }, idx: number) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-100 rounded-xl bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm text-black">{item.q}</span>
                    <div className="w-6 h-6 rounded-full bg-[#F3F2EC] flex items-center justify-center shrink-0 text-[#4D5A4A]">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] font-light text-black leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#242C23] text-white p-8 sm:p-14">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">

            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/8.png"
              alt="AG Aesthetics Kharar Treatment Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#242C23] via-[#242C23]/95 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A3B89E] block">
              In-Person Consultation
            </span>
            <h2 className="text-2xl sm:text-4xl tracking-tight text-white">
              Schedule Your Facial Assessment in Kharar
            </h2>
            <p className="text-xs sm:text-sm text-[#B4C6B1] leading-relaxed">
              Every procedure begins with high-resolution skin photography and a medical consultation with our lead doctor. Located at SCO 6, 1st Floor, SAI Street, Radiola Road.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6F4EE] text-black text-xs font-semibold hover:bg-white transition-all active:scale-95"
              >
                <span>Book Slot via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#485C45] text-[#E5E9E2] text-xs font-medium hover:bg-[#2C372B] transition-colors"
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
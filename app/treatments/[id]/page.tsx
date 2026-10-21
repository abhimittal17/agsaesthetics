"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Plus,
  Minus,
  AlertCircle,
  Activity,
  PhoneCall
} from "lucide-react";

// Procedural sample dataset matching AG Aesthetics clinical standards
const CLINICAL_DATA = {
  id: "anti-wrinkle-fillers",
  categoryTitle: "Facial Injectables & Contouring",
  title: "Precision Neuromodulators & Dermal Architecture",
  subtitle: "Micro-dose facial softening with strict natural vector retention.",
  heroDesc:
    "A physician-guided injectable protocol targeting dynamic expression creases and mid-face volume loss. Using micro-droplet delivery and anatomical ultrasound mapping, we restore youthful balance while completely avoiding the heavy, frozen look.",
  
  stats: [
    { label: "Procedure Duration", val: "30–45 Mins", icon: Clock },
    { label: "Clinical Downtime", val: "Near Zero", icon: Activity },
    { label: "Expected Longevity", val: "4–6 Months", icon: Calendar },
    { label: "Discomfort Scale", val: "Minimal (Topical Lidocaine)", icon: ShieldCheck },
  ],

  gallery: {
    heroMain: "https://images.unsplash.com/photo-1512290900672-1f023330ff25?auto=format&fit=crop&w=1200&q=80",
    heroSecondary: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    microTexture: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    consultSuite: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    deviceView: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    bannerCta: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80",
  },

  indications: [
    "Dynamic forehead furrows and frown creases (Glabella)",
    "Periorbital smile wrinkles & lateral eye crow's feet",
    "Hollow tear troughs creating fatigued shadow patterns",
    "Loss of mid-face zygomatic volume and cheek definition",
    "Masseter hypertrophy causing jaw clenching & wide lower facial contours",
    "Subtle philtral column and lip vermilion margin restoration",
  ],

  phases: [
    {
      id: "mapping",
      tabLabel: "1. Vector Mapping",
      title: "Facial Anatomy & Expression Diagnostics",
      description:
        "Every face animates uniquely. We begin by filming muscle contraction patterns under standardized cross-polarized lighting. The doctor physically marks the precise motor-point insertion angles to calculate exact unit counts.",
      photo: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80",
      takeaways: [
        "Patient-specific kinematic assessment",
        "Zero template formulas — dose calibrated per muscle mass",
        "Baseline calibrated digital photography records",
      ],
    },
    {
      id: "prep",
      tabLabel: "2. Cold-Numbing Prep",
      title: "Surface Sanitization & Dermal Analgesia",
      description:
        "Skin is sterilized with hospital-grade chlorhexidine, followed by a compounded pharmaceutical topical numbing formulation applied for 20 minutes. Continuous chilled airflow keeps the tissue desensitized.",
      photo: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      takeaways: [
        "Medical-grade sterile barrier isolation",
        "Topical anaesthetic gel for pain-free needle entry",
        "Minimizes vascular dilation and potential bruising",
      ],
    },
    {
      id: "administration",
      tabLabel: "3. Micro-Delivery",
      title: "Precision Micro-Droplet Placement",
      description:
        "Utilizing 32G ultra-fine needles or blunt-tip microcannulas, the doctor administers microscopic micro-aliquots into the target muscular planes or supraperiosteal levels, avoiding vascular structures.",
      photo: "https://images.unsplash.com/photo-1512290900672-1f023330ff25?auto=format&fit=crop&w=900&q=80",
      takeaways: [
        "32-gauge micro-needles leave tiny, temporary pinpoints",
        "Blunt micro-cannulas protect sensitive vessels",
        "Authentic US-FDA approved brand vials reconstituted tableside",
      ],
    },
    {
      id: "recovery",
      tabLabel: "4. Day 14 Review",
      title: "Complimentary Touch-Up & Stabilization",
      description:
        "Neuromodulators take 10 to 14 days to fully integrate with acetylcholine receptors. We schedule a formal follow-up to inspect symmetry at rest and during maximal smile/frown, adding balance units if needed.",
      photo: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      takeaways: [
        "Guaranteed 14-day touch-up review appointment",
        "Digital before/after comparison review",
        "Customized maintenance timeline plan provided",
      ],
    },
  ],

  faqs: [
    {
      q: "Will my face look frozen or unnatural?",
      a: "No. At AG Aesthetics, our philosophy is 'restraint over excess.' We practice micro-dosing to soften deep lines while leaving normal brow movement, eyelid expression, and natural laughter completely intact.",
    },
    {
      q: "When can I wear sunscreen and makeup again?",
      a: "You can apply gentle physical mineral sunscreen and clean makeup 4 hours after the procedure, once the micro-injection puncture points have naturally sealed.",
    },
    {
      q: "What should I avoid in the first 24 hours?",
      a: "Avoid vigorous exercise, saunas, hot showers, alcohol, and bending forward for long periods. Do not massage or press the treated areas so the product remains in the targeted muscle planes.",
    },
    {
      q: "Are the injectables authentic and safe?",
      a: "Yes. We exclusively use US-FDA approved brand formulations. Every vial is opened, batch-verified, and mixed directly in the treatment room in your presence.",
    },
  ],
};

export default function SubTreatmentPage({
  params,
}: {
  params: Promise<{ id: string; subid: string }>;
}) {
  const resolvedParams = use(params);
  const data = CLINICAL_DATA;

  const [activeTab, setActiveTab] = useState(data.phases[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activePhase = data.phases.find((p) => p.id === activeTab) || data.phases[0];

  return (
    <main className="min-h-screen  antialiased selection:bg-[#2F382E] selection:text-white">
      
  

      {/* 2. Hero Section: Editorial Copy & Double Photo Canvas */}
      <section className="pt-10 sm:pt-16 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl  text-black tracking-tight leading-[1.12] mt-2">
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
              {data.stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#586454] flex items-center justify-center shrink-0 text-[#465444]">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px]  uppercase tracking-wider text-[#7E8F7B] block">
                        {stat.label}
                      </span>
                      <span className="text-xs font-semibold text-black">
                        {stat.val}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Booking & Consultation CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(data.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#586454] text-white text-xs font-semibold hover:bg-[#1E251D] transition-colors "
              >
                <span>Book Doctor Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

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
            <div className="col-span-7 relative aspect-4/5 rounded-3xl overflow-hidden  bg-stone-200">
              <img
                src={data.gallery.heroMain}
                alt={data.title}
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 35vw"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 text-[11px] text-[#242C23] font-medium ">
                Clinical Focus: Forehead &amp; Periorbital Contouring
              </div>
            </div>

            <div className="col-span-5 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden  bg-stone-200">
                <img
                  src={data.gallery.heroSecondary}
                  alt="Doctor consultation"
                 
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 15vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden  bg-stone-200">
                <img
                  src={data.gallery.microTexture}
                  alt="Skin histology close up"
                 
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 15vw"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="py-16 bg-[#F3F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-4xl  text-black leading-tight">
                Anatomical Indications for this Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#50604E] leading-relaxed">
                Whether managing early kinetic expressions or structural mid-face contouring, every syringe is customized based on individual bone structure and soft-tissue envelope.
              </p>

              <div className="p-4 rounded-xl bg-white/80 space-y-2 text-[11px] ">
                <div className="flex items-center gap-2 font-semibold text-black">
                  <AlertCircle className="w-3.5 h-3.5 " />
                  Pre-Treatment Clearance
                </div>
                <p>
                  Requires screening for neuromuscular conditions, pregnancy, or recent antibiotic courses. All allergies are recorded before opening product packaging.
                </p>
              </div>
            </div>

            {/* 6-Item Indication Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.indications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white  flex items-start gap-3 "
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

      {/* 4. Interactive 4-Phase Protocol: Synced Copy + Image */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl  text-black">
            What to Expect in Our Kharar Clinic
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5C6E59]">
            From diagnostic vector marking through to your complimentary 14-day touch-up review.
          </p>
        </div>

        {/* Phase Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {data.phases.map((phase) => {
            const isSelected = phase.id === activeTab;
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActiveTab(phase.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#586454] text-white "
                    : "bg-white border border-[#E0DDD3] text-[#556453] hover:border-[#8E9F8B]"
                }`}
              >
                {phase.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Phase Content Box: Synced Image & Explanations */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10  grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px]  uppercase tracking-widest text-[#7B8D78] block">
              Step Overview
            </span>
            <h3 className="text-2xl  text-black">
              {activePhase.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#50604E] leading-relaxed">
              {activePhase.description}
            </p>

            <div className="pt-2 space-y-2.5 ">
              {activePhase.takeaways.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs text-[#334031]">
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

          <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden shadow-inner bg-white">
            <img
              src={activePhase.photo}
              alt={activePhase.title}
             
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* 5. Visual Clinical Proof: Multi-Image Photo Strip */}
      <section className="py-12 bg-[#F3F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px]  tracking-widest uppercase text-[#738470]">
                Clean Practice Standards
              </span>
              <h2 className="text-2xl sm:text-3xl  text-black mt-1">
                Inside the Clinical Suite
              </h2>
            </div>
            <p className="text-xs  max-w-sm">
              Single-use sterile surgical consumables, emergency reversal agents on hand, and US-FDA validated lot numbers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: data.gallery.consultSuite, title: "Diagnostic Mapping Suite" },
              { img: data.gallery.deviceView, title: "Medical Laser & Light Tech" },
              { img: data.gallery.microTexture, title: "Sterile Dispensary" },
              { img: data.gallery.heroSecondary, title: "Doctor Examination" },
            ].map((card, i) => (
              <div key={i} className="group relative aspect-4/5 rounded-2xl overflow-hidden bg-stone-200">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
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
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl  text-black">
            Common Treatment Questions
          </h2>
        </div>

        <div className="space-y-3">
          {data.faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-100 rounded-xl bg-white overflow-hidden transition-all "
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm  text-black">
                    {item.q}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#F3F2EC] flex items-center justify-center shrink-0 text-[#4D5A4A]">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] font-light text-black leading-relaxed ">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Bottom Editorial Call to Action Banner */}
      <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#242C23] text-white p-8 sm:p-14 ">
          {/* Subtle Ambient Background Image */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src={data.gallery.bannerCta}
              alt="AG Aesthetics Kharar Treatment Room"
             
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#242C23] via-[#242C23]/95 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-[10px]  tracking-[0.25em] uppercase text-[#A3B89E] block">
              In-Person Consultation
            </span>
            <h2 className="text-2xl sm:text-4xl  tracking-tight text-white">
              Schedule Your Facial Assessment in Kharar
            </h2>
            <p className="text-xs sm:text-sm text-[#B4C6B1] leading-relaxed">
              Every procedure begins with high-resolution skin photography and a medical consultation with our lead doctor. Located at SCO 6, 1st Floor, SAI Street, Radiola Road.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20reserve%20a%20slot%20for%20${encodeURIComponent(data.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6F4EE] text-black text-xs font-semibold hover:bg-white transition-all  active:scale-95"
              >
                <span>Book Slot via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

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
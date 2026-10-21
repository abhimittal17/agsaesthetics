"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";

interface Treatment {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  sessions: string;
  idealFor: string[];
  image: string;
  href: string;
}

const TREATMENTS: Treatment[] = [
  {
    id: "anti-wrinkle-fillers",
    category: "Injectables",
    title: "Facial Injectables & Contouring",
    subtitle: "Precision neuromodulators & hyaluronic fillers",
    description:
      "Targeted placement to gently soften persistent forehead lines, restore mid-face volume, and hydrate lip borders while keeping your natural expressions intact.",
    duration: "30–45 mins",
    sessions: "Every 4–6 months",
    idealFor: ["Forehead & frown lines", "Cheek & jaw contouring", "Lip hydration & symmetry"],
    image: "https://images.unsplash.com/photo-1512290900672-1f023330ff25?auto=format&fit=crop&w=900&q=80",
    href: "/treatments/injectables",
  },
  {
    id: "medical-hydrafacial",
    category: "Skin Rejuvenation",
    title: "Medical HydraFacial & Peels",
    subtitle: "Vortex vacuum pore extraction & acid infusions",
    description:
      "A clinical deep cleanse to clear sebum, blackheads, and dead skin, followed by customized clinical peels tailored specifically for Indian skin phototypes.",
    duration: "45–60 mins",
    sessions: "Monthly maintenance",
    idealFor: ["Congested pores & oiliness", "Sun tanning & dullness", "Rough skin texture"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    href: "/treatments/skin-rejuvenation",
  },
  {
    id: "acne-scar-revision",
    category: "Acne & Scars",
    title: "Clinical Acne & Scar Revision",
    subtitle: "Subcision, chemical peels & fractional passes",
    description:
      "A multi-modality approach to calm active cystic breakouts, release tethered acne scars, and stimulate dermal collagen remodelling over progressive sittings.",
    duration: "45–60 mins",
    sessions: "4–6 sessions spaced 4 weeks apart",
    idealFor: ["Rolling & boxcar scars", "Persistent post-acne marks", "Inflammatory breakouts"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
    href: "/treatments/acne-and-scars",
  },
  {
    id: "prp-gfc-hair",
    category: "Hair Restoration",
    title: "PRP & GFC Hair Restoration",
    subtitle: "Autologous concentrated growth factor therapy",
    description:
      "Your blood plasma is prepared in a clinical-grade centrifuge to isolate restorative growth factors, delivered precisely into thinning scalp zones to reactivate dormant follicles.",
    duration: "40–50 mins",
    sessions: "3–4 monthly initial visits",
    idealFor: ["Early crown thinning", "Excessive daily hair shed", "Hairline miniaturisation"],
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    href: "/treatments/hair-rejuvenation",
  },
  {
    id: "laser-tattoo-removal",
    category: "Laser Treatments",
    title: "Q-Switched Laser Tattoo Removal",
    subtitle: "Nanosecond targeted pigment fragmentation",
    description:
      "High-speed light pulses shatter deep ink particles without damaging surrounding skin tissue, allowing the body's lymphatic system to gradually eliminate pigment.",
    duration: "20–30 mins",
    sessions: "5–8 sessions on average",
    idealFor: ["Amateur & professional ink", "Microblading removal", "Fading prior to cover-ups"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    href: "/treatments/tattoo-removal",
  },
  {
    id: "laser-hair-reduction",
    category: "Laser Treatments",
    title: "Triple-Wavelength Laser Hair Removal",
    subtitle: "Integrated contact cooling for safe reduction",
    description:
      "Blends Alexandrite, Diode, and Nd:YAG wavelengths to safely target both fine and coarse facial and body hair while keeping the epidermal surface cool and protected.",
    duration: "15–60 mins",
    sessions: "6–8 sessions",
    idealFor: ["Upper lip & chin hair", "Ingrown hairs & razor bumps", "Full body reduction"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
    href: "/treatments/laser-hair-removal",
  },
];



export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState("All Treatments");

  const filtered =
    activeCategory === "All Treatments"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <main className="min-h-screen  bg-white pb-28">
      <section className="relative px-6 pb-12 max-w-7xl mx-auto">
        <div className="text-center pt-10 pb-12 space-y-2">
          <p className="text-sm uppercase tracking-widest text-stone-500 font-medium">
            Treatments
          </p>
          <h1 className=" text-2xl md:text-4xl md:leading-relaxed tracking-wider">
            Medical Treatments &amp; Procedures
          </h1>
        </div>

      </section>

      {/* 2. Structured 3-Column Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden   transition-all duration-300"
              >
                {/* Image Container with Native Next.js Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFECE6]">
                  <img
                    src={item.image}
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle category tag pinned over photo */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-md bg-[#FAFAF7]/95 backdrop-blur-xs text-[10px] font-mono tracking-wider uppercase text-[#3A4638] border border-[#E0DDD5]">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="text-xl  text-[#1E251D] tracking-tight leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-xs text-[#707F6D] mt-1 font-medium leading-relaxed">
                      {item.subtitle}
                    </p>

                    <p className="mt-3.5 text-xs sm:text-[13px] text-[#556352] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Suitability Pills */}
                    <div className="mt-4 pt-4 border-t border-[#F2EFE9]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A9A87] block mb-2">
                        Common indications
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.idealFor.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-[#F4F3ED] text-[#42503F]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Metadata & Booking Trigger */}
                  <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex items-center justify-between text-xs text-[#6B7C68]">
                    <div className="flex items-center gap-4 text-[11px]">
                      <span className="flex items-center gap-1.5" title="Treatment Duration">
                        <Clock className="w-3.5 h-3.5 text-[#8A9A87]" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1.5" title="Recommended Frequency">
                        <Calendar className="w-3.5 h-3.5 text-[#8A9A87]" />
                        {item.sessions.split(" ")[0]} sittings
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2F382E] hover:underline cursor-pointer group/link"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state safeguard */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#6B7C68] text-sm">
              No clinical treatments found matching this category.
            </div>
          )}
        </div>
      </section>

      {/* 3. Clinical Reassurance Strip before Page End */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F0EFE9]  flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-xl  text-[#1E251D]">
              Unsure which protocol fits your skin or hair concern?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#5B6A58] leading-relaxed">
              Schedule an in-person diagnostic evaluation at our Kharar practice. Our physicians will review your dermatological history before proposing any procedure.
            </p>
          </div>
          <a
            href="https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20book%20a%20skin/hair%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-[#2F382E] text-[#F6F4EE] text-xs font-medium hover:bg-[#242C23] transition-colors"
          >
            Book Clinical Evaluation
          </a>
        </div>
      </section>

    </main>
  );
}
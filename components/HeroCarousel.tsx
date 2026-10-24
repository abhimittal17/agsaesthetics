"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Clock } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "Aesthetic Medicine &bull; Facial Contouring",
    title: (
      <>
        Restoring Proportions, <br />
        <span className="italic font-normal text-[#D6E2D3]">Preserving Expression.</span>
      </>
    ),
    desc: "Doctor-led facial vector mapping, micro-aliquot neuromodulation, and hyaluronic dermal architecture tailored specifically to South Asian skin profiles.",
    img: "https://images.unsplash.com/photo-1512290900672-1f023330ff25?auto=format&fit=crop&w=1920&q=85",
    badge: "100% US-FDA Approved Vials",
  },
  {
    id: 2,
    tag: "Clinical Dermatology &bull; Laser Surgery",
    title: (
      <>
        Advanced Revision for <br />
        <span className="italic font-normal text-[#D6E2D3]">Acne &amp; Tethered Scars.</span>
      </>
    ),
    desc: "Targeted subcision, fractional laser passes, and clinical acid peels that release fibrotic scar bands and trigger deep collagen remodeling without rebound pigment.",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1920&q=85",
    badge: "Multi-Modality Remodeling",
  },
  {
    id: 3,
    tag: "Cellular Trichology &bull; Hair Regrowth",
    title: (
      <>
        Autologous GFC &amp; PRP <br />
        <span className="italic font-normal text-[#D6E2D3]">Follicle Reactivation.</span>
      </>
    ),
    desc: "Clinical-grade concentrated growth factor therapy delivered directly into miniaturized scalp regions to halt active shedding and restore natural hair density.",
    img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1920&q=85",
    badge: "Centrifuged Pure Growth Factors",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto switch slides every 7.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-2 sm:mx-4 my-2">
      <section className="relative h-[78vh] sm:h-[84vh] w-full overflow-hidden rounded-3xl bg-[#1C231B] ">
        
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Native Next.js Image with subtle Ken Burns effect */}
              <div
                className={`relative w-full h-full transition-transform duration-[8000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <img
                  src={slide.img}
                  alt="AG Aesthetics Medical Treatment"
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Multi-Stop Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D15]/80 via-transparent to-black/30" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-14 lg:px-24 max-w-4xl">
                <div
                  className={`transition-all duration-700 delay-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  

                  {/* Editorial Serif Heading */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl  font-normal text-white leading-[1.12] tracking-tight">
                    {slide.title}
                  </h1>

                  {/* Thin Accent Rule */}
                  <div className="mt-4 w-20 h-[2px] bg-[#9CB098]" />

                  {/* Body Description */}
                  <p className="mt-5 max-w-xl text-xs sm:text-sm md:text-base text-[#D4DDD2] leading-relaxed font-normal">
                    {slide.desc}
                  </p>

                  {/* CTAs */}
                  <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <a
                      href="https://wa.me/919653552999?text=Hello%20AG%20Aesthetics,%20I%20would%20like%20to%20schedule%20a%20clinical%20evaluation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6F4EE] text-[#1E251D] text-xs font-semibold hover:bg-white transition-all  active:scale-95"
                    >
                      <span>Book Diagnostic Consult</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <Link
                      href="/treatments"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-medium hover:bg-white/20 transition-all"
                    >
                      <span>View All Treatments</span>
                    </Link>

                 
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Indicators & Controls */}
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-12 z-30 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                  i === current
                    ? "w-8 bg-[#F6F4EE]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

      
      </section>
    </div>
  );
}
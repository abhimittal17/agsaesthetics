"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: (
      <>
        Chronic Skin &amp; Scalp Relief, <br className="hidden sm:inline" />
        <span className="italic font-normal text-[#D6E2D3]">Treated from Within.</span>
      </>
    ),
    desc: "Doctor-led constitutional homeopathy and holistic evaluation targeting stubborn dermatoses, chronic hair fall, and underlying inflammatory triggers at the root.",
    img: "/injectables/7.png",
  },
  {
    id: 2,
    title: (
      <>
        Smile Architecture &amp; <br className="hidden sm:inline" />
        <span className="italic font-normal text-[#D6E2D3]">Lower-Face Contouring.</span>
      </>
    ),
    desc: "Uniting dental implantology, smile designing, and non-surgical facial recontouring to achieve balanced lip support, jawline symmetry, and anatomical proportion.",
    img: "/skinrejuvenation/4.png",
  },
  {
    id: 3,
    title: (
      <>
        Targeted Laser Genesis &amp; <br className="hidden sm:inline" />
        <span className="italic font-normal text-[#D6E2D3]">Dermal Barrier Staging.</span>
      </>
    ),
    desc: "Triple-wavelength hair removal, carbon peels, and gentle pigment dispersion calibrated precisely for Indian skin phototypes to prevent post-treatment hyperpigmentation.",
    img: "/tattooremoval/5.png",
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
      <section className="relative min-h-[580px] h-[82vh] sm:h-[84vh] max-h-[850px] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black">
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
                className={`relative w-full h-full transition-transform duration-8000 ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  fill
                  priority={index === 0}
                  src={slide.img}
                  alt="AG Aesthetics Medical Treatment"
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Multi-Stop Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 sm:via-black/45 to-black/30 sm:to-black/10" />
              <div className="absolute inset-0 bg-linear-to-t from-[#161D15]/90 via-transparent to-black/30" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-5 sm:px-12 md:px-16 lg:px-24 max-w-4xl pb-16 sm:pb-0">
                <div
                  className={`transition-all duration-700 delay-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 sm:translate-y-8 opacity-0"
                  }`}
                >
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.18] sm:leading-[1.12] tracking-tight">
                    {slide.title}
                  </h1>

                  {/* Thin Accent Rule */}
                  <div className="mt-3.5 sm:mt-4 w-14 sm:w-20 h-0.5 bg-[#9CB098]" />

                  {/* Body Description */}
                  <p className="mt-4 sm:mt-5 max-w-xl text-xs sm:text-sm md:text-base text-[#D4DDD2] leading-relaxed font-normal">
                    {slide.desc}
                  </p>

                  {/* CTAs */}
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                    <Link
                      href="/appointments"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#F6F4EE] text-[#1E251D] text-xs sm:text-sm font-semibold hover:bg-white transition-all active:scale-95 shadow-xs"
                    >
                      <span>Book Diagnostic Consult</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/treatments"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-all active:scale-95"
                    >
                      <span>View All Treatments</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 sm:bottom-8 right-5 sm:right-12 z-30 flex items-center gap-4">
          <div className="flex gap-2 p-1.5 rounded-full bg-black/25 backdrop-blur-xs">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full h-1.5 sm:h-2 cursor-pointer ${
                  i === current
                    ? "w-7 sm:w-9 bg-[#F6F4EE]"
                    : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
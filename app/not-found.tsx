import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full fixed inset-0 z-99 flex flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        {/* Subtle Category Pill */}
        <span className="inline-block uppercase tracking-[0.25em] text-[10px] sm:text-[11px] font-semibold text-[#586454] bg-[#586454]/10 px-3.5 py-1.5 rounded-full mb-4 sm:mb-6">
          Oops..
        </span>

        {/* 404 Watermark + Headline */}
        <div className="relative mb-3 sm:mb-4 flex items-center justify-center">
          <span 
            aria-hidden="true" 
            className="select-none text-[90px] sm:text-[140px] md:text-[170px] leading-none font-bold text-[#586454]/15 tracking-tighter"
          >
            404
          </span>
          <h1 className="absolute text-2xl sm:text-4xl md:text-5xl text-[#586454] font-light tracking-normal leading-tight px-2">
            Lost Your Glow?
          </h1>
        </div>

        {/* Supporting Copy */}
        <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-md mx-auto px-4">
          The treatment or page you are looking for has either been moved, updated, or does not exist.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto w-full">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#586454] hover:bg-[#485345] text-white text-[11px] sm:text-xs font-medium tracking-wider uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-full active:scale-95 transition-all duration-200"
          >
            Return to Sanctuary
          </Link>
          <Link
            href="/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-stone-200 hover:border-[#586454] hover:text-[#586454] text-stone-700 text-[11px] sm:text-xs font-medium tracking-wider uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/80 backdrop-blur-xs active:scale-95 transition-all duration-200"
          >
            Explore Treatments
          </Link>
        </div>

        {/* Quick Links Footer */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-100">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 mb-3 font-medium">
            Popular Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-stone-500">
            <Link 
              href="/treatments" 
              className="hover:text-[#586454] underline-offset-4 hover:underline transition-colors"
            >
              All Treatments
            </Link>
            <span className="text-stone-300">•</span>
            <Link 
              href="/about" 
              className="hover:text-[#586454] underline-offset-4 hover:underline transition-colors"
            >
              Our Doctors
            </Link>
            <span className="text-stone-300">•</span>
            <Link 
              href="/appointments" 
              className="hover:text-[#586454] underline-offset-4 hover:underline transition-colors font-medium text-stone-700"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
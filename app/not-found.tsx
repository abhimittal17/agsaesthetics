import Link from "next/link";

export default function NotFound() {
  return (
<section className="fixed inset-0 z-99 flex flex-col min-h-screen items-center justify-center bg-white">
      <div className="relative z-10 mx-auto max-w-xl text-center">
        {/* Subtle Category Pill */}
        <span className="inline-block uppercase tracking-[0.25em] text-[11px] font-semibold text-[#586454]  px-3.5 py-1.5 rounded-full mb-6">
          Oops..
        </span>

        <div className="relative mb-4 flex items-center justify-center">
          <span 
            aria-hidden="true" 
            className="select-none  text-[110px] sm:text-[170px] leading-none text-[#586454]/15 tracking-tighter"
          >
            404
          </span>
          <h1 className="absolute  text-3xl sm:text-4xl md:text-5xl text-[#586454] font-light tracking-normal">
            Lost Your Glow?
          </h1>
        </div>

        {/* Supporting Copy */}
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light max-w-md mx-auto">
          The treatment or page you are looking for has either been moved, updated, or does not exist.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#586454] text-white text-xs sm:text-sm font-medium tracking-wide uppercase px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Return to Sanctuary
          </Link>
          <Link
            href="/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-slate-200 hover:border-[#586454] hover:text-[#586454] text-stone-700 text-xs sm:text-sm font-medium tracking-wide uppercase px-7 py-3.5 rounded-full bg-white/60 backdrop-blur-sm transition-all duration-200"
          >
            Explore Treatments
          </Link>
        </div>

        {/* Quick Links Footer */}
        <div className="mt-12 pt-8">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-medium">
            Popular Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-500">
            <Link href="/services/anti-wrinkle" className="hover:text-[#586454] underline-offset-4 hover:underline transition-colors">
              Injectables & Botox
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/services/dermal-fillers" className="hover:text-[#586454] underline-offset-4 hover:underline transition-colors">
              Dermal Fillers
            </Link>
            <span className="text-stone-300">•</span>
            <Link href="/book" className="hover:text-[#586454] underline-offset-4 hover:underline transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Clock,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const treatments = [
    { name: "Injectables", href: "/treatments/injectables" },
    { name: "Skin Rejuvenation", href: "/treatments/skin-rejuvenation" },
    { name: "Acne & Scars", href: "/treatments/acne-and-scars" },
    { name: "Hair Rejuvenation", href: "/treatments/hair-rejuvenation" },
    { name: "Laser Tattoo Removal", href: "/treatments/tattoo-removal" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Treatments", href: "/treatments" },
    { name: "Blogs", href: "/blogs" },
    { name: "Reviews", href: "/reviews" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <footer className="w-full bg-[#586454] text-white">
      {/* 1. Simple Trust Highlights */}
      <div className="bg-black/15 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-start sm:items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B8CBB4] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="text-sm font-medium text-white leading-snug">
                  Approved Equipment
                </p>
                <p className="text-xs text-[#CBD8C7] leading-relaxed">
                  Medical-grade lasers &amp; sterile disposables
                </p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3">
              <Award className="w-5 h-5 text-[#B8CBB4] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="text-sm font-medium text-white leading-snug">
                  Doctor-Led Consultations
                </p>
                <p className="text-xs text-[#CBD8C7] leading-relaxed">
                  Full facial and skin assessment before care
                </p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3 sm:col-span-2 lg:col-span-1">
              <Clock className="w-5 h-5 text-[#B8CBB4] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="text-sm font-medium text-white leading-snug">
                  Direct Recovery Care
                </p>
                <p className="text-xs text-[#CBD8C7] leading-relaxed">
                  Post-treatment support directly from our staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Practice Info */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/aglogo.png"
                alt="AG Aesthetics & Wellness Clinic"
                width={160}
                height={40}
                priority
                className="h-8 w-auto brightness-0 invert object-contain shrink-0"
              />
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest font-medium leading-tight text-white border-l pl-3 border-white/30">
                Aesthetics &amp;
                <br />
                Wellness Clinic
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#CBD8C7] leading-relaxed max-w-sm">
              Evidence-based aesthetic medicine, advanced laser dermatology, and
              hair restoration therapies. Dedicated to ethical treatment and
              natural outcomes in Kharar, Punjab.
            </p>

            {/* Direct WhatsApp Button */}
            <div className="pt-1">
              <a
                href="https://wa.me/919653552999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#2B3329] text-xs font-semibold hover:bg-[#F2F5F0] transition-colors shadow-xs active:scale-95"
              >
                <span>WhatsApp Clinical Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#CBD8C7] hover:text-white hover:bg-white/20 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#CBD8C7] hover:text-white hover:bg-white/20 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Treatments Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD8C7]">
              {treatments.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-150 inline-block leading-relaxed"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Clinic
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD8C7]">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-150 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Kharar Clinic
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#CBD8C7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8CBB4] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  1st Floor, SCO No. 6, SAI Street, Radiola Road, Kharar, Punjab
                  140301
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8CBB4] shrink-0" />
                <a
                  href="tel:+919653552999"
                  className="hover:text-white transition-colors text-white font-medium"
                >
                  +91 96535 52999
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8CBB4] shrink-0" />
                <a
                  href="mailto:info@agsaesthetics.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@agsaesthetics.com
                </a>
              </div>
            </div>

            {/* Timing Schedule */}
            <div className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-[#CBD8C7] space-y-1.5">
              <div className="flex justify-between items-center gap-2">
                <span>Mon – Sat:</span>
                <span className="text-white font-medium">10:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span>Sunday:</span>
                <span className="text-[#F1E4C3] font-medium">
                  By Appointment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal Strip */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD8C7] text-center sm:text-left">
          <p>&copy; {currentYear} AG Aesthetics &amp; Wellness Clinic.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/40">•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms of Care
            </Link>
            <span className="text-white/40">•</span>
            <Link
              href="/refund-policy"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
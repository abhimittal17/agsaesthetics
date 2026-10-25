import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | AG Aesthetics & Wellness Clinic",
  description:
    "Review the Refund, Cancellation, and Package policies for treatments, consultations, and skincare products at AG Aesthetics & Wellness Clinic in Kharar, Punjab.",
  keywords: [
    "Refund Policy",
    "Cancellation Policy",
    "AG Aesthetics & Wellness Clinic",
    "Treatment Refunds",
    "Booking Deposit Policy",
    "Package Policy",
    "Kharar Skin Clinic",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | AG Aesthetics & Wellness Clinic",
    description:
      "Review the Refund and Cancellation policies for treatments, appointments, and retail products at AG Aesthetics & Wellness Clinic.",
    url: "/refund-policy",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/7.png",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Cancellation & Refund Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation & Refund Policy | AG Aesthetics & Wellness Clinic",
    description:
      "Review the Refund and Cancellation policies for treatments, appointments, and retail products at AG Aesthetics & Wellness Clinic.",
    images: ["/7.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RefundPolicy() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900">
      {/* Header */}
      <div className="pt-8 sm:pt-12 md:pt-16 pb-6 text-left sm:text-center space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium">
          POLICIES
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-stone-950">
          Cancellation &amp; Refund Policy
        </h1>
      </div>

      <section className="pt-4 pb-14 sm:pb-20 md:pb-24">
        <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed text-stone-700">
          {/* 1. Policy Overview */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              1. Policy Overview
            </h2>
            <p className="mb-3 break-words">
              At <strong>AG Aesthetics &amp; Wellness Clinic</strong>, our priority is to deliver
              exceptional, safe, and professional clinical care. Because our services require reserved
              practitioner time, clinical room prep, and single-use sterile medical supplies, we operate
              under a clear and transparent cancellation and refund policy.
            </p>
            <p>
              By booking an appointment, paying an advance deposit, or purchasing a treatment package,
              you acknowledge and accept the terms detailed below.
            </p>
          </div>

          {/* 2. Clinical Consultations & Treatments */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              2. Completed Treatments &amp; Consultations
            </h2>
            <p className="mb-3">
              <strong>All clinical consultations and completed aesthetic or wellness procedures are strictly non-refundable.</strong>
            </p>
            <p className="mb-3">
              Aesthetic and dermatological results depend on personal anatomy, genetics, aftercare adherence,
              lifestyle, and individual biological healing. Consequently, we cannot offer refunds based on
              subjective dissatisfaction or personal expectations, provided the procedure was performed
              according to professional clinical standards.
            </p>
            <p>
              If you experience an unexpected healing reaction or complication following a treatment, you
              must contact the clinic immediately for a follow-up assessment and guidance by our clinical team.
            </p>
          </div>

          {/* 3. Appointment Cancellations & Rescheduling */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              3. Appointment Cancellations &amp; Booking Deposits
            </h2>
            <p className="mb-3">
              We reserve dedicated clinical time specifically for your appointment. If you need to cancel
              or reschedule, please give us advance notice:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <strong>Notice of 24 Hours or More:</strong> Your booking deposit or advance fee can be
                fully transferred to a rescheduled date or retained as a clinic credit toward future treatments.
              </li>
              <li>
                <strong>Notice of Less Than 24 Hours:</strong> Cancellations made with less than 24 hours&apos;
                notice may incur a cancellation fee or result in the forfeiture of your booking deposit.
              </li>
              <li>
                <strong>No-Shows:</strong> Failure to attend a scheduled session without any prior communication
                results in the forfeiture of the advance booking deposit or the deduction of one session from an active package.
              </li>
            </ul>
          </div>

          {/* 4. Treatment Packages & Bundles */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              4. Treatment Packages &amp; Multi-Session Bundles
            </h2>
            <p className="mb-3">
              Packages are offered at discounted rates to encourage sustained, multi-session clinical outcomes.
              The following rules apply to package purchases:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                Packages are non-refundable once the first session has been commenced or completed.
              </li>
              <li>
                In certified medical emergencies or proven medical contraindications preventing completion
                of the remaining sessions, cancellation requests will be evaluated on a case-by-case basis.
              </li>
              <li>
                Any approved refund for an incomplete package will be recalculated based on the
                <strong> standard single-session rate</strong> for sessions already availed (forfeiting the bundle discount),
                with an administrative fee deducted from the balance.
              </li>
              <li>
                Package sessions are non-transferable to another individual unless approved in writing by clinic management.
              </li>
            </ul>
          </div>

          {/* 5. Retail & Skincare Products */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              5. Retail Skincare &amp; Cosmeceutical Products
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <strong>Opened or Used Products:</strong> Due to hygiene, sterility, and safety regulations,
                we strictly do not accept returns or offer refunds on opened, unsealed, or used skincare,
                cosmetics, or nutritional supplements.
              </li>
              <li>
                <strong>Defective / Damaged Products:</strong> If an item purchased directly from our clinic is
                found to have a manufacturer defect or damaged packaging at the time of purchase, it must be reported
                with original receipt within <strong>48 hours</strong> of purchase for an exchange.
              </li>
            </ul>
          </div>

          {/* 6. Processing Approved Refunds */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              6. Refund Processing Timeline
            </h2>
            <p className="mb-3">
              Where a refund is approved by clinic management under exceptional circumstances:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                Refunds will be processed back to the original payment method (Bank Account, UPI, or Card).
              </li>
              <li>
                Approved bank transfers and digital payment reversals typically reflect within <strong>5 to 7 business days</strong>,
                depending on your banking institution or gateway processing times.
              </li>
              <li>
                Cash payments approved for refund will be issued via bank transfer / UPI for accounting transparency.
              </li>
            </ul>
          </div>

          {/* 7. How to Request Assistance */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              7. Contact for Cancellation or Refund Requests
            </h2>
            <p className="mb-3">
              All formal rescheduling, cancellation, or refund inquiries must be submitted in writing along with
              your booking details or payment receipt:
            </p>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:p-5 text-stone-800 space-y-1.5 break-words">
              <p className="font-semibold text-stone-900">AG Aesthetics &amp; Wellness Clinic</p>
              <p>1st Floor, Sco No. 6, SAI Street, Radiola Road Kharar, Kharar, Punjab, India</p>
              <p>
                Phone / WhatsApp:{" "}
                <a href="tel:+919653552999" className="text-stone-900 underline font-medium">
                  +91 96535 52999
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@agsaesthetics.com" className="text-stone-900 underline font-medium break-all">
                  info@agsaesthetics.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-stone-200 pt-6 mt-8">
            <p className="text-xs sm:text-sm text-stone-500">
              Last updated: September 2026
            </p>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-6 gap-5">
              <div className="text-xs sm:text-sm space-y-1 text-stone-600 break-words">
                <p className="font-semibold text-stone-900">
                  AG Aesthetics &amp; Wellness Clinic
                </p>
                <p>1st Floor, Sco No. 6, SAI Street, Radiola Road Kharar, Kharar, India</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-0.5">
                  <p>
                    Phone:{" "}
                    <a href="tel:+919653552999" className="text-stone-800 underline hover:text-stone-950">
                      +91 96535 52999
                    </a>
                  </p>
                  <span>•</span>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@agsaesthetics.com" className="text-stone-800 underline hover:text-stone-950 break-all">
                      info@agsaesthetics.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 shrink-0">
                <Link
                  href="/terms-and-conditions"
                  className="text-xs sm:text-sm text-stone-600 hover:text-stone-900 underline"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-xs sm:text-sm text-stone-600 hover:text-stone-900 underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/contact-us"
                  className="text-xs sm:text-sm text-stone-600 hover:text-stone-900 underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
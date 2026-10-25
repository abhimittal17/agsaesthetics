import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | AG Aesthetics & Wellness Clinic",
  description:
    "Read the Terms and Conditions for AG Aesthetics & Wellness Clinic, covering consultation policies, clinical procedures, booking deposits, cancellations, refunds, and clinic guidelines.",
  keywords: [
    "Terms and Conditions",
    "AG Aesthetics & Wellness Clinic",
    "Aesthetic Clinic Kharar",
    "Consultation Policies",
    "Cancellation Policy",
    "Skin Treatment Guidelines",
    "Refund Policy",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | AG Aesthetics & Wellness Clinic",
    description:
      "Read the Terms and Conditions for using AG Aesthetics & Wellness Clinic's website and aesthetic services.",
    url: "/terms-conditions",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/8.png",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Terms and Conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | AG Aesthetics & Wellness Clinic",
    description:
      "Read the Terms and Conditions for using AG Aesthetics & Wellness Clinic's website and aesthetic services.",
    images: ["/8.png"],
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

export default function TermsConditions() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900">
      {/* Header */}
      <div className="pt-8 sm:pt-12 md:pt-16 pb-6 text-left sm:text-center space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium">
          Terms
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-stone-950">
          Terms &amp; Conditions
        </h1>
      </div>

      <section className="pt-4 pb-14 sm:pb-20 md:pb-24">
        <div className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base leading-relaxed text-stone-700">
          {/* 1. Introduction */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              1. Introduction
            </h2>
            <p className="mb-3 break-words">
              Welcome to <strong>AG Aesthetics &amp; Wellness Clinic</strong>. These Terms
              and Conditions (&quot;Terms&quot;) govern your access to and use of our website (
              <a
                href="https://agsaesthetics.com"
                className="underline hover:text-stone-950 break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://agsaesthetics.com
              </a>
              ) as well as the aesthetic, dermatological, cosmetic, and wellness treatments
              provided at our physical facility.
            </p>
            <p>
              By accessing this website, scheduling an appointment, or undergoing treatments
              with us, you accept and agree to comply with these Terms. If you do not agree
              with any part of these Terms, please refrain from using our services or visiting
              our clinic.
            </p>
          </div>

          {/* 2. Definitions */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              2. Definitions
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <strong>Clinic / We / Us:</strong> Refers to AG Aesthetics &amp; Wellness
                Clinic, its licensed doctors, cosmetologists, aestheticians, and authorized staff.
              </li>
              <li>
                <strong>Client / Patient / You:</strong> Refers to any individual accessing our
                website, consulting with our specialists, purchasing skincare products, or undergoing procedures.
              </li>
              <li>
                <strong>Services:</strong> Refers to consultations, clinical treatments, aesthetic
                procedures, laser therapies, post-treatment care, and retail skincare products.
              </li>
              <li>
                <strong>Website:</strong> Refers to{" "}
                <span className="font-medium break-all">https://agsaesthetics.com</span> and associated web pages.
              </li>
            </ul>
          </div>

          {/* 3. Clinical & Aesthetic Disclaimer */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              3. Clinical &amp; Aesthetic Treatment Disclaimer
            </h2>
            <p className="mb-3">
              Aesthetic and cosmetic treatments are individual-specific. Healing responses, recovery times,
              and final visible results vary based on genetics, lifestyle, adherence to aftercare, age,
              and personal physiology. While our practitioners strive for optimal clinical outcomes,
              <strong> no guaranteed result or absolute outcome can be provided for any cosmetic or wellness procedure.</strong>
            </p>
            <p className="mb-3">
              Clients are required to provide complete, truthful, and accurate information regarding their medical
              history, allergies, existing prescriptions, and prior cosmetic interventions on intake forms.
              The Clinic cannot be held liable for adverse reactions or compromised outcomes resulting from omitted
              or inaccurate medical disclosures.
            </p>
            <p>
              The content published on our website is for informational and educational purposes only and should not
              be construed as a substitute for an in-person clinical diagnosis or individualized medical consultation.
            </p>
          </div>

          {/* 4. Patient Responsibilities & Consent */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              4. Patient Responsibilities &amp; Consent
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                Prior to undergoing any clinical or invasive procedure, clients will be provided with an
                Informed Consent Form detailing procedure steps, potential risks, and anticipated recovery.
                Treatment will only proceed upon signature of this consent.
              </li>
              <li>
                You must follow all pre-procedure instructions and post-procedure aftercare protocols
                advised by our specialists to prevent side effects or complications.
              </li>
              <li>
                Minors (under 18 years of age) must be accompanied by a parent or legal guardian who must
                execute all consent documents.
              </li>
              <li>
                Our practitioners reserve the right to decline, pause, or postpone any treatment if it is
                deemed clinically unsafe or contraindicative to the patient&apos;s health.
              </li>
            </ul>
          </div>

          {/* 5. Fees, Bookings & Payments */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              5. Fees, Bookings &amp; Payments
            </h2>
            <p className="mb-3">
              Consultation charges, package fees, and treatment costs will be explained prior to beginning
              any procedure. All prices are quoted in Indian Rupees (INR) and are inclusive of applicable
              Goods and Services Tax (GST) unless stated otherwise.
            </p>
            <p className="mb-3">
              An advance booking deposit may be required to confirm your scheduled appointment slot. This
              deposit will be adjusted against your treatment bill on the day of your appointment.
            </p>
            <p>
              Payments can be completed via cash, UPI, major credit/debit cards, or accredited payment
              gateways. Payments must be cleared upon completion of the service on the same day.
            </p>
          </div>

          {/* 6. Cancellation & Rescheduling */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              6. Appointments, Rescheduling &amp; Cancellations
            </h2>
            <p className="mb-3">
              We require at least <strong>24 to 48 hours’ prior notice</strong> for any rescheduling or
              cancellation of an appointment.
            </p>
            <p className="mb-3">
              Late cancellations or failure to attend an appointment (&quot;no-shows&quot;) without prior notice
              may result in the forfeiture of your booking deposit or an adjustment against future appointments.
            </p>
            <p>
              We request that you arrive 10–15 minutes before your scheduled slot. Late arrivals may result
              in a reduced treatment time so as not to inconvenience subsequent scheduled patients.
            </p>
          </div>

          {/* 7. Refund Policy */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              7. Refund &amp; Package Policy
            </h2>
            <p className="mb-3">
              Due to the nature of medical, aesthetic, and dermatological services,
              <strong> fees paid for completed consultations, performed treatments, and opened skincare or topical products are strictly non-refundable.</strong>
            </p>
            <p className="mb-3">
              For pre-paid treatment packages or multi-session plans, requests for cancellations or balance adjustments
              will be reviewed on a case-by-case basis at the clinic&apos;s discretion, subject to deductions for individual
              sessions already availed at non-discounted standard rates.
            </p>
            <p>
              All refund or billing inquiries must be submitted in writing to{" "}
              <a
                href="mailto:info@agsaesthetics.com"
                className="text-stone-900 underline hover:text-stone-700 font-medium break-all"
              >
                info@agsaesthetics.com
              </a>{" "}
              within 7 business days.
            </p>
          </div>

          {/* 8. Intellectual Property */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              8. Intellectual Property
            </h2>
            <p className="mb-3">
              All materials hosted on{" "}
              <span className="font-medium break-all">agsaesthetics.com</span>—including text, graphics, logos,
              branding, treatment descriptions, and photographs—are the intellectual property of AG Aesthetics &amp;
              Wellness Clinic and are protected by Indian and international copyright and trademark laws.
            </p>
            <p>
              Unauthorized copying, reproduction, distribution, or public display of any content from our
              website without prior written authorization is strictly prohibited.
            </p>
          </div>

          {/* 9. Limitation of Liability */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              9. Limitation of Liability
            </h2>
            <p className="mb-3">
              While our certified practitioners uphold high medical ethics and safety standards, the Clinic,
              its doctors, and affiliates shall not be liable for any indirect, incidental, or consequential
              damages resulting from non-compliance with provided aftercare guidelines or unforeseen physiological
              reactions.
            </p>
            <p>
              To the maximum extent permitted by applicable Indian laws, including the Consumer Protection Act, 2019,
              the total financial liability of the Clinic for any claim arising from a procedure shall not exceed the
              amount actually received from the client for that specific procedure.
            </p>
          </div>

          {/* 10. Privacy & Medical Records */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              10. Privacy &amp; Data Protection
            </h2>
            <p className="mb-3">
              We are dedicated to safeguarding your personal and medical information. All patient records and intake
              sheets are stored in adherence to the Information Technology Act, 2000 and the Digital Personal Data
              Protection (DPDP) standards.
            </p>
            <p>
              Clinical photographs (before-and-after imagery) remain confidential and will never be shared on
              marketing or social media channels without your explicit, written consent. Please review our{" "}
              <Link href="/privacy-policy" className="underline hover:text-stone-950 font-medium">
                Privacy Policy
              </Link>{" "}
              for complete details.
            </p>
          </div>

          {/* 11. Governing Law & Dispute Resolution */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              11. Governing Law &amp; Jurisdiction
            </h2>
            <p className="mb-3">
              These Terms and Conditions are governed by and construed in accordance with the laws of India.
            </p>
            <p>
              Any disputes, controversies, or claims arising out of or related to our website or clinical
              services shall be subject to the exclusive jurisdiction of the competent courts located in
              <strong> Kharar / SAS Nagar (Mohali), Punjab, India</strong>.
            </p>
          </div>

          {/* 12. Contact Information */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              12. Contact Information
            </h2>
            <p className="mb-3">
              For any questions, clarifications, or feedback regarding these Terms and Conditions, please contact us:
            </p>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:p-5 text-stone-800 space-y-1.5 break-words">
              <p className="font-semibold text-stone-900">AG Aesthetics &amp; Wellness Clinic</p>
              <p>1st Floor, Sco No. 6, SAI Street, Radiola Road Kharar, Kharar, Punjab, India</p>
              <p>
                Phone:{" "}
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
              Last updated:{" "}
              {new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
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

              <div className="flex items-center space-x-6 shrink-0">
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
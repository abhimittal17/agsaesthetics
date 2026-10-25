import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AG Aesthetics & Wellness Clinic",
  description:
    "Read the Privacy Policy of AG Aesthetics & Wellness Clinic. Learn how we collect, handle, safeguard, and process your personal and sensitive health data in accordance with applicable Indian laws.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "AG Aesthetics & Wellness Clinic",
    "Skin Clinic Kharar",
    "Confidentiality",
    "Patient Data Security",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | AG Aesthetics & Wellness Clinic",
    description:
      "Understand how AG Aesthetics & Wellness Clinic collects, uses, and protects your personal and medical information.",
    url: "/privacy-policy",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/6.webp",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AG Aesthetics & Wellness Clinic",
    description:
      "Understand how AG Aesthetics & Wellness Clinic collects, uses, and protects your personal and medical information.",
    images: ["/6.webp"],
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

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900">
      {/* Header */}
      <div className="pt-8 sm:pt-12 md:pt-16 pb-6 text-left sm:text-center space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium">
          PRIVACY &amp; DATA PROTECTION
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-stone-950">
          Privacy Policy
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
              Welcome to <strong>AG Aesthetics &amp; Wellness Clinic</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
              We are committed to protecting the privacy, personal details, and sensitive personal health 
              information of our clients and website visitors.
            </p>
            <p className="mb-3 break-words">
              This Privacy Policy explains how we collect, store, handle, disclose, and secure your personal 
              information when you visit our website (
              <a
                href="https://agsaesthetics.com"
                className="underline hover:text-stone-950 break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://agsaesthetics.com
              </a>
              ) or engage in our clinical consultations, aesthetic treatments, and wellness services.
            </p>
            <p>
              This policy is prepared in compliance with the Information Technology Act, 2000, the Information 
              Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) 
              Rules, 2011 (SPDI Rules), and applicable provisions of the Digital Personal Data Protection (DPDP) Act.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              Depending on how you interact with our clinic and website, we may collect the following categories of data:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <strong>Identity &amp; Contact Details:</strong> Full name, date of birth, age, gender, phone number, 
                email address, and physical address.
              </li>
              <li>
                <strong>Clinical &amp; Health Information:</strong> Detailed medical history, skin conditions, 
                allergies, past treatments or surgeries, ongoing medications, and consultation notes necessary to ensure 
                safe and customized aesthetic procedures.
              </li>
              <li>
                <strong>Clinical Photography:</strong> Pre- and post-treatment photographs recorded strictly for clinical 
                case assessment, progress tracking, and internal documentation (marketing usage requires explicit written consent).
              </li>
              <li>
                <strong>Transactional Data:</strong> Billing records, payment receipts, appointment bookings, and treatment history. 
                (Note: We do not directly store your credit/debit card numbers or UPI PINs; transactions are handled securely by accredited payment gateways).
              </li>
              <li>
                <strong>Digital &amp; Technical Usage Data:</strong> IP address, device type, browser settings, operating system, 
                and browsing behavior gathered through standard web server logs and cookies.
              </li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              We process your personal and clinical data for the following legitimate purposes:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>To evaluate clinical suitability and safely carry out aesthetic, skin, and wellness treatments.</li>
              <li>To schedule, confirm, manage, and follow up on your appointments and aftercare.</li>
              <li>To respond to your inquiries submitted through our website contact forms, WhatsApp, or phone calls.</li>
              <li>To maintain mandatory medical and clinical case records as governed by medical and health regulatory standards in India.</li>
              <li>To issue invoices, manage payments, and maintain accounting records.</li>
              <li>To send service updates, essential clinic notifications, or promotional messages (you may opt out of marketing communications at any time).</li>
            </ul>
          </div>

          {/* 4. Consent & Sensitive Data */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              4. Consent &amp; Sensitive Health Data
            </h2>
            <p className="mb-3">
              By consulting with our practitioners or sharing your health background, you provide informed consent for us to 
              collect and review your personal and sensitive health data for treatment planning.
            </p>
            <p>
              Before-and-after photographs are maintained as part of your confidential treatment file. We will never publish, 
              display, or distribute your photographs on social media or marketing collaterals without obtaining your prior 
              explicit, separate written consent.
            </p>
          </div>

          {/* 5. Sharing & Disclosure of Information */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              5. Sharing &amp; Disclosure of Information
            </h2>
            <p className="mb-3">
              We uphold strict medical confidentiality. We do not sell, rent, or trade your personal or health data to third parties. 
              Information is only disclosed under the following controlled circumstances:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>
                <strong>Authorized Clinical Team:</strong> Doctors, dermatologists, cosmetologists, and support staff bound by 
                professional confidentiality agreements.
              </li>
              <li>
                <strong>Service Providers:</strong> Trusted third-party vendors who assist with secure payment processing, CRM, SMS 
                reminders, and website hosting under confidentiality obligations.
              </li>
              <li>
                <strong>Legal &amp; Regulatory Obligations:</strong> When strictly mandated by Indian law, court summons, judicial order, 
                or government authorities.
              </li>
            </ul>
          </div>

          {/* 6. Data Security & Storage */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              6. Data Security &amp; Retention
            </h2>
            <p className="mb-3">
              We deploy strict physical, managerial, and electronic safety measures—including encryption, restricted access controls, 
              and secured digital databases—to safeguard your personal records against unauthorized access, loss, or misuse.
            </p>
            <p>
              Your personal and health information will be retained only as long as necessary to provide clinical services, fulfill 
              legal and medical compliance obligations, and resolve any disputes.
            </p>
          </div>

          {/* 7. Your Rights */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              7. Your Rights
            </h2>
            <p className="mb-3">Under Indian data privacy regulations, you have the right to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or updating of inaccurate or incomplete personal details.</li>
              <li>Withdraw your consent for voluntary marketing communications at any point.</li>
              <li>Request erasure of non-clinical personal data, subject to mandatory medical retention guidelines required by Indian law.</li>
            </ul>
          </div>

          {/* 8. Cookies & Tracking Technologies */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              8. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website uses basic cookies and analytics to enhance navigation, analyze site traffic, and optimize user experience. 
              You can instruct your web browser to refuse all cookies or notify you when a cookie is being set.
            </p>
          </div>

          {/* 9. Grievance Redressal & Contact Details */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-stone-900">
              9. Grievance Redressal &amp; Contact Details
            </h2>
            <p className="mb-3">
              In accordance with the Information Technology Act, 2000 and the Rules made thereunder, if you have any questions, 
              concerns, or grievances regarding the processing of your personal information, please contact:
            </p>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:p-5 text-stone-800 space-y-1.5 break-words">
              <p className="font-semibold text-stone-900">Grievance Officer / Privacy Desk</p>
              <p>AG Aesthetics &amp; Wellness Clinic</p>
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

          {/* Footer Navigation & Clinic Details */}
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

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 shrink-0">
                <Link
                  href="/terms-and-conditions"
                  className="text-xs sm:text-sm text-stone-600 hover:text-stone-900 underline"
                >
                  Terms &amp; Conditions
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
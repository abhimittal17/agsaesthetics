import type { Metadata } from "next";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AG Aesthetics & Wellness Clinic",
  description:
    "Find answers to frequently asked questions about our clinical skin treatments, aesthetic procedures, lasers, consultation process, and safety standards at AG Aesthetics & Wellness Clinic in Kharar.",
  keywords: [
    "FAQs",
    "Aesthetics Clinic Kharar",
    "Skin Treatments",
    "Laser Treatments",
    "Cosmetology FAQ",
    "Wellness Clinic",
    "AG Aesthetics & Wellness Clinic",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | AG Aesthetics & Wellness Clinic",
    description:
      "Find answers to frequently asked questions about our clinical skin treatments, aesthetic procedures, lasers, consultation process, and safety standards at AG Aesthetics & Wellness Clinic in Kharar.",
    url: "/faqs",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/6.png",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic FAQs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | AG Aesthetics & Wellness Clinic",
    description:
      "Find answers to frequently asked questions about our clinical skin treatments, aesthetic procedures, lasers, consultation process, and safety standards at AG Aesthetics & Wellness Clinic in Kharar.",
    images: ["/6.png"],
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

export default function Faqs() {
  const faqData = [
    {
      question: "What types of treatments and services do you offer?",
      answer:
        "We offer a comprehensive range of clinical and cosmetic treatments, including advanced Medi-Facials, chemical peels, acne and scar reduction therapies, laser skin rejuvenation, anti-aging solutions, hair restoration treatments (PRP/GFC), pigmentation correction, and personalized holistic wellness therapies.",
    },
    {
      question: "Are aesthetic and skin procedures safe?",
      answer:
        "Yes, absolutely. All procedures at AG Aesthetics & Wellness Clinic are performed or supervised by trained, certified practitioners using US FDA-approved technologies and strictly sterilized, single-use medical consumables. We conduct a patch test and thorough skin analysis whenever necessary to ensure safety and comfort.",
    },
    {
      question: "Do I need an initial consultation before booking a procedure?",
      answer:
        "Yes, we strongly recommend an initial consultation. Every individual's skin type, concerns, and healing responses are unique. Our specialists evaluate your skin, review your medical history, and curate a customized treatment plan tailored to your specific goals before initiating any procedure.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can easily book an appointment by contacting us directly via phone or WhatsApp at +91 96535 52999, emailing us at info@agsaesthetics.com, or booking directly through the appointment link on our website.",
    },
    {
      question: "Is there any downtime or recovery required after treatments?",
      answer:
        "Downtime depends entirely on the specific procedure. Most treatments like gentle chemical peels, hydra medi-facials, and laser toning have zero to minimal downtime, allowing you to return to work immediately. For deeper corrective procedures (such as fractional lasers or microneedling), mild redness or peeling may last 24 to 72 hours. Complete pre- and post-care guidance is always provided.",
    },
    {
      question: "How many sessions will I need to see visible results?",
      answer:
        "While several treatments provide an immediate radiant glow after a single session, long-term corrective outcomes (such as acne scar remodeling, pigmentation reduction, or hair regrowth) generally require a series of 3 to 6 sessions spaced a few weeks apart for optimal, sustained results.",
    },
    {
      question: "Can treatments be customized for sensitive or acne-prone skin?",
      answer:
        "Yes. We specialize in tailoring procedures according to delicate barrier conditions, active acne, or heightened skin sensitivity. Our clinicians select milder active formulations and calming technologies to restore skin health without causing unnecessary irritation.",
    },
    {
      question: "Where is the clinic located, and what are your operating hours?",
      answer:
        "Our clinic is located at 1st Floor, SCO No. 6, SAI Street, Radiola Road, Kharar, Punjab, India. For clinic operating hours or Sunday availability, please reach out to our reception desk at +91 96535 52999.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 pb-16 sm:pb-20 md:pb-24">
      {/* Header */}
      <div className="text-left sm:text-center pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium">
          FAQ
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-stone-950">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Accordion Section */}
      <section>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-stone-200/80 rounded-xl sm:rounded-2xl overflow-hidden bg-white  transition-colors"
              >
                <details className="group p-4 sm:p-5 md:p-6">
                  <summary className="list-none cursor-pointer flex justify-between items-center select-none gap-3">
                    <h2 className="text-sm sm:text-base font-medium text-stone-900 leading-snug">
                      {faq.question}
                    </h2>
                    <div className="shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-transform duration-200 group-open:rotate-45">
                        <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>
                    </div>
                  </summary>
                  <div className="mt-3 pt-3 border-t border-stone-100 text-stone-600 leading-relaxed text-xs sm:text-sm md:text-base break-words">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
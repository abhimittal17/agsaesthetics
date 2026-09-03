import { Plus } from "lucide-react";

export const metadata = {
  title: "FAQs - AG Aesthetics & Wellness Clinic",
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
  openGraph: {
    title: "FAQs - AG Aesthetics & Wellness Clinic",
    description:
      "Find answers to frequently asked questions about our clinical skin treatments, aesthetic procedures, lasers, consultation process, and safety standards at AG Aesthetics & Wellness Clinic in Kharar.",
    image: "/ctaimage2.webp",
    url: "https://agsaesthetics.com/faqs",
  },
  twitter: {
    title: "FAQs - AG Aesthetics & Wellness Clinic",
    description:
      "Find answers to frequently asked questions about our clinical skin treatments, aesthetic procedures, lasers, consultation process, and safety standards at AG Aesthetics & Wellness Clinic in Kharar.",
    image: "/ctaimage2.webp",
    card: "summary_large_image",
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
    <div className="max-w-7xl mx-auto text-stone-900 pb-16">
      <div className="text-center pt-10 pb-12 space-y-2">
        <p className="text-sm uppercase tracking-widest text-stone-500 font-medium">
          FAQ
        </p>
        <h1 className="font-bold text-2xl md:text-4xl md:leading-relaxed tracking-wider">
          Frequently Asked Questions
        </h1>
      </div>

      <section>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-stone-100 rounded-2xl overflow-hidden bg-white transition-colors "
              >
                <details className="group p-5">
                  <summary className="list-none cursor-pointer flex justify-between items-center select-none">
                    <h3 className="font-medium text-stone-900 text-base md:text-lg pr-4">
                      {faq.question}
                    </h3>
                    <div className="ml-4 shrink-0">
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-transform duration-200 group-open:rotate-45">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </summary>
                  <div className="mt-3 pt-3  text-stone-600 leading-relaxed text-sm ">
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
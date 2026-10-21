"use client";

import Cal from "@calcom/embed-react";
import { AlertCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AppointmentBooking() {
  const faqData = [
    {
      id: "faq-1",
      question: "Do I need a doctor's referral to book a consultation?",
      answer:
        "No, a prior doctor's referral is not required to visit AG Aesthetics & Wellness Clinic. You can book an appointment directly with our cosmetologists and wellness specialists. However, if you are undergoing active medical treatment or taking prescribed medications, please let us know during your initial consultation so we can tailor treatments safely.",
    },
    {
      id: "faq-2",
      question: "How is my personal and medical data protected?",
      answer:
        "We maintain strict medical confidentiality. All client health records, intake sheets, and clinical notes are stored securely in compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act. Your records and photographs are never shared without your explicit consent.",
    },
    {
      id: "faq-3",
      question: "Can I get treatment on the same day as my consultation?",
      answer:
        "In many cases, yes. Depending on the procedure and your individual skin assessment, minor treatments and basic aesthetic therapies can be performed on the same day following clinical evaluation. More extensive sessions or procedures requiring skin prepping may be scheduled for a follow-up visit.",
    },
    {
      id: "faq-4",
      question: "Are cosmetic and aesthetic treatments covered by health insurance?",
      answer:
        "In India, standard health insurance policies generally do not cover purely elective aesthetic, cosmetic, or anti-aging skin treatments. If a procedure is prescribed for a diagnosed medical condition, we recommend checking directly with your Third Party Administrator (TPA) or insurer regarding reimbursement eligibility.",
    },
    {
      id: "faq-5",
      question: "What is the policy for minors or first-time clients?",
      answer:
        "Clients under 18 years of age must be accompanied by a parent or legal guardian who must review and execute all clinical informed consent documentation. Treatments are always evaluated individually based on safety, age, skin condition, and clinical suitability.",
    },
  ];

  return (
    <main className="relative min-h-screen px-4 py-16 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-4xl leading-relaxed tracking-wider">
            Reserve your consultation
          </h1>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            Select a convenient date and time to begin your personalized skin, aesthetic, and wellness journey with AG Aesthetics &amp; Wellness Clinic in Kharar.
          </p>
        </section>

        {/* Cal.com Embed Container */}
        <section className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white/95 backdrop-blur-xs">
          <div className="min-h-175 w-full p-2 sm:p-4">
            <Cal
              namespace="agaesthetics"
              calLink="agaesthetics"
              style={{ width: "100%", height: "100%", minHeight: "700px" }}
              config={{ layout: "month_view", theme: "light" }}
              calOrigin="https://cal.com"
            />
          </div>

          {/* Clinical Policy Notice */}
          <div className="border-t border-stone-100 bg-stone-50/70 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <span className="shrink-0 rounded-full bg-stone-900/10 p-2 text-stone-900">
                <AlertCircle className="h-5 w-5" />
              </span>
              <div className="space-y-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <p className="font-semibold text-stone-900">
                  Clinical Assessment &amp; Consultation Policy
                </p>
                <p>
                  An initial consultation with{" "}
                  <span className="font-medium text-stone-800">
                    AG Aesthetics &amp; Wellness Clinic
                  </span>{" "}
                  is a comprehensive clinical evaluation and does not guarantee immediate eligibility for any specific procedure. Treatment suitability is determined solely after evaluating your medical background, skin condition, and contraindications. Completed consultation fees are non-refundable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-4">
          <div className="flex flex-col gap-12 items-center justify-center w-full">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight text-center">
                Frequently asked questions
              </h2>
              <p className="text-stone-500 max-w-3xl text-sm leading-relaxed text-center">
                Everything you need to know about our consultation process, appointment policies, and clinical safety standards.
              </p>
            </div>
            <div className="w-full max-w-4xl">
              <Accordion  className="w-full space-y-3">
                {faqData.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="overflow-hidden rounded-xl border border-stone-200/70 px-5 transition-all data-[state=open]:border-stone-800/40"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium text-stone-800 hover:text-stone-950 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm leading-relaxed text-stone-500 pb-5 pt-1">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
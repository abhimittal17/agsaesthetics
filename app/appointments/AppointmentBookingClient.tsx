"use client";

import Cal from "@calcom/embed-react";
import { AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AppointmentBookingClient() {
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
    <main className="relative min-h-screen w-full px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 text-stone-900 overflow-hidden">
      <div className="mx-auto max-w-6xl space-y-10 sm:space-y-14 md:space-y-16">
        {/* Header */}
        <section className="text-center space-y-2 sm:space-y-3 max-w-2xl mx-auto pt-2 sm:pt-4">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-semibold">
            Appointments
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight">
            Reserve Your Consultation
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed pt-1">
            Select a convenient date and time to begin your personalized skin, aesthetic, and wellness journey with AG Aesthetics &amp; Wellness Clinic in Kharar.
          </p>
        </section>

        {/* Cal.com Embed Container */}
        <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xs">
          <div className="w-full p-2 sm:p-4 min-h-[600px] sm:min-h-[700px]">
            <Cal
              namespace="agaesthetics"
              calLink="agaesthetics"
              style={{ width: "100%", height: "100%", minHeight: "600px" }}
              config={{ layout: "month_view", theme: "light" }}
              calOrigin="https://cal.com"
            />
          </div>

          {/* Clinical Policy Notice */}
          <div className="border-t border-stone-200/70 bg-stone-50/80 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <span className="shrink-0 rounded-full bg-stone-900/10 p-2 text-stone-900">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div className="space-y-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <p className="font-semibold text-stone-900">
                  Clinical Assessment &amp; Consultation Policy
                </p>
                <p className="break-words">
                  An initial consultation with{" "}
                  <span className="font-medium text-stone-900">
                    AG Aesthetics &amp; Wellness Clinic
                  </span>{" "}
                  is a comprehensive clinical evaluation and does not guarantee immediate eligibility for any specific procedure. Treatment suitability is determined solely after evaluating your medical background, skin condition, and contraindications. Completed consultation fees are non-refundable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-2 sm:pt-4">
          <div className="flex flex-col gap-6 sm:gap-10 items-center justify-center w-full">
            <div className="space-y-2 text-center max-w-2xl">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 font-semibold block">
                Booking Inquiries
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                Everything you need to know about our consultation process, appointment policies, and clinical safety standards.
              </p>
            </div>

            <div className="w-full max-w-3xl">
              <Accordion className="w-full space-y-3">
                {faqData.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="overflow-hidden rounded-xl border border-stone-200/80 bg-white px-4 sm:px-5 transition-all data-[state=open]:border-stone-800/40 "
                  >
                    <AccordionTrigger className="text-left text-xs sm:text-sm md:text-base font-medium text-stone-900 hover:text-stone-950 hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm leading-relaxed text-stone-600 pb-4 pt-1 break-words">
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
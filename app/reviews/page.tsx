import type { Metadata } from "next";
import { IoMdQuote } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | AG Aesthetics & Wellness Clinic",
  description:
    "Read genuine reviews and patient testimonials for skin treatments, HydraFacials, laser therapies, and anti-aging treatments at AG Aesthetics & Wellness Clinic in Kharar, Punjab.",
  keywords: [
    "Reviews",
    "Testimonials",
    "Patient Feedback",
    "AG Aesthetics & Wellness Clinic",
    "Skin Clinic Kharar",
    "Aesthetic Treatments",
    "HydraFacial Reviews",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Client Reviews & Testimonials | AG Aesthetics & Wellness Clinic",
    description:
      "Read genuine patient stories and reviews about our aesthetic, skin, and wellness treatments.",
    url: "/reviews",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/ctaimage2.webp",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Client Reviews & Testimonials",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Testimonials | AG Aesthetics & Wellness Clinic",
    description:
      "Read genuine patient stories and reviews about our aesthetic, skin, and wellness treatments.",
    images: ["/ctaimage2.webp"],
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

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Simran Kaur",
      treatment: "Hydra-Glow Facial & Skin Brightening",
      rating: 5,
      text: "The skin analysis before the facial was so detailed! My skin felt visibly hydrated and glowy for weeks without any irritation. Best aesthetic clinic in Kharar without a doubt.",
    },
    {
      id: 2,
      name: "Rohan Sharma",
      treatment: "Acne Scar Treatment",
      rating: 5,
      text: "I had stubborn acne scars for years. After three targeted sessions, the texture is remarkably smooth. The doctors are genuinely caring, transparent, and don’t push unnecessary packages.",
    },
    {
      id: 3,
      name: "Pooja Varma",
      treatment: "Laser Hair Reduction",
      rating: 5,
      text: "Virtually painless laser sessions! The clinic is spotless, ultra-hygienic, and the staff made sure I was comfortable the entire time. Visible hair reduction right after the second session.",
    },
    {
      id: 4,
      name: "Amanpreet Singh",
      treatment: "Scalp PRP / Hair Restoration",
      rating: 5,
      text: "Thorough consultation and realistic expectations set right at day one. My hair thinning noticeably slowed, and density is visibly improving. Truly a top-tier wellness clinic.",
    },
    {
      id: 5,
      name: "Neha Malhotra",
      treatment: "Anti-Aging & Fine Line Therapy",
      rating: 5,
      text: "I wanted subtle, natural refinement rather than anything overdone. The doctor has an incredible eye for aesthetics. Everyone says I look refreshed and rested without guessing why!",
    },
    {
      id: 6,
      name: "Kavita Gupta",
      treatment: "Pigmentation & Melasma Peels",
      rating: 4,
      text: "Visible lightening in my sun spots after 4 sessions. Very hygienic facility and clear aftercare guidance. Only slight downside was a 15-minute wait during a busy weekend slot.",
    },
    {
      id: 7,
      name: "Gurpreet Dhillon",
      treatment: "Carbon Laser Peel",
      rating: 5,
      text: "Got the Hollywood carbon peel before my sister's wedding. The instant pore tightening and radiant glow were unbelievable. Received endless compliments all evening!",
    },
    {
      id: 8,
      name: "Ananya Joshi",
      treatment: "Customized Medi-Facial",
      rating: 5,
      text: "Very comforting ambience, soft music, and personalized serum infusions tailored to my dry sensitive skin. A soothing, luxurious clinical experience that actually produces results.",
    },
    {
      id: 9,
      name: "Vikramjeet S.",
      treatment: "Skin Rejuvenation & Detox",
      rating: 5,
      text: "Professional, punctual, and genuine medical expertise. They take the time to answer every question and focus on long-term skin health rather than quick fixes. Highly recommended.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-stone-900 py-8 sm:py-12 md:py-16">
      {/* Header */}
      <div className="text-left sm:text-center pt-2 sm:pt-4 pb-8 sm:pb-12 space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium">
          Testimonials
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-stone-950">
          What Our Patients Say
        </h1>
      </div>

      {/* Reviews Grid */}
      <section
        aria-label="Client reviews"
        className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {reviews.map((r) => (
          <article
            key={r.id}
            className="rounded-2xl p-5 sm:p-6 md:p-7 min-h-[18rem] sm:min-h-80 md:min-h-96 justify-between border border-stone-200/80 bg-white  transition-colors  duration-200 flex flex-col"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <IoMdQuote className="text-2xl sm:text-3xl text-[#586454] shrink-0" />
                <div
                  className="flex text-amber-400 space-x-1 text-xs sm:text-sm"
                  aria-label={`${r.rating} out of 5 stars`}
                >
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="font-normal sm:font-medium leading-relaxed text-sm sm:text-base text-stone-800 break-words">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>

            <div className="pt-4 sm:pt-6 mt-4 border-t border-stone-100">
              <p className="font-semibold text-sm sm:text-base text-stone-900">
                {r.name}
              </p>
              <p className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
                {r.treatment}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
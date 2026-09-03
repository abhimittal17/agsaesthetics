import { IoMdQuote } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "Client Reviews & Testimonials - AG Aesthetics & Wellness Clinic",
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
  openGraph: {
    title: "Client Reviews & Testimonials - AG Aesthetics & Wellness Clinic",
    description:
      "Read genuine patient stories and reviews about our aesthetic, skin, and wellness treatments.",
    image: "/ctaimage2.webp",
    url: "https://agsaesthetics.com/reviews",
  },
  twitter: {
    title: "Client Reviews & Testimonials - AG Aesthetics & Wellness Clinic",
    description:
      "Read genuine patient stories and reviews about our aesthetic, skin, and wellness treatments.",
    image: "/ctaimage2.webp",
    card: "summary_large_image",
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
    <div className="max-w-7xl mx-auto text-stone-900 py-10 px-4">
      {/* Header & Hero Image Banner */}
      <div className="text-center md:py-10 space-y-3 mb-8">
        <div>
          <p className="text-sm uppercase tracking-widest text-stone-500 font-medium">
            Testimonials
          </p>
          <h1 className="font-bold text-2xl md:text-4xl md:leading-relaxed tracking-wide">
            What Our Patients Say
          </h1>
        </div>
      </div>

      {/* Reviews Grid */}
      <section
        aria-label="Client reviews"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {reviews.map((r) => (
          <article
            key={r.id}
            className="rounded-2xl p-7 min-h-96 justify-between  border border-stone-100  duration-200 flex flex-col"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <IoMdQuote className="text-3xl text-[#586454]" />
                <div className="flex text-amber-400 space-x-1 text-sm" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="font-medium leading-relaxed  md:text-sm text-stone-800">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>

            <div className="pt-6  mt-4">
              <p className="font-semibold text-sm text-stone-900">{r.name}</p>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                {r.treatment}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
import type { Metadata } from "next";
import {BlogClientView} from "./BlogClientView";

export const metadata: Metadata = {
  title: "Clinical Insights & Treatment Guides | AG Aesthetics & Wellness Clinic",
  description:
    "Explore evidence-based aesthetic guides, dermatological insights, skin peel advice, anti-aging therapies, and hair wellness tips from AG Aesthetics & Wellness Clinic in Kharar, Punjab.",
  keywords: [
    "Aesthetic Clinic Kharar",
    "Dermatology Blog",
    "Skin Peels Guide",
    "Chemical Peels Kharar",
    "Laser Hair Removal Tips",
    "Anti-Aging Treatments",
    "HydraFacial Insights",
    "AG Aesthetics & Wellness Clinic",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Clinical Insights & Treatment Guides | AG Aesthetics & Wellness Clinic",
    description:
      "Explore evidence-based aesthetic guides, dermatological insights, skin peel advice, and anti-aging therapies.",
    url: "/blogs",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/ctaimage2.webp",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Clinical Insights & Blogs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Insights & Treatment Guides | AG Aesthetics & Wellness Clinic",
    description:
      "Explore evidence-based aesthetic guides, dermatological insights, skin peel advice, and anti-aging therapies.",
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

export default function Page() {
  return <BlogClientView />;
}
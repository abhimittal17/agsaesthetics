import type { Metadata } from "next";
import HomeClientView from "@/components/HomeClientView";

export const metadata: Metadata = {
  title: "AG Aesthetics & Wellness Clinic | Doctor-Led Skin & Hair Clinic Kharar",
  description:
    "Doctor-led clinical cosmetology, advanced laser dermatology, acne scar revisions, and regenerative hair therapies in Kharar, Greater Mohali. Evidence-based care with hospital-grade sterility.",
  keywords: [
    "Aesthetic Clinic Kharar",
    "Skin Clinic Mohali",
    "Dermatologist Kharar",
    "Acne Scar Treatment Kharar",
    "GFC Hair Treatment Punjab",
    "Laser Hair Removal Kharar",
    "HydraFacial Kharar",
    "AG Aesthetics & Wellness Clinic",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AG Aesthetics & Wellness Clinic | Doctor-Led Skin & Hair Clinic Kharar",
    description:
      "Doctor-led clinical cosmetology, advanced laser dermatology, acne scar revisions, and regenerative hair therapies in Kharar, Greater Mohali.",
    url: "/",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/clinic.jpg",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Kharar Consultation Suite",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Aesthetics & Wellness Clinic | Doctor-Led Skin & Hair Clinic Kharar",
    description:
      "Doctor-led clinical cosmetology, advanced laser dermatology, acne scar revisions, and regenerative hair therapies in Kharar, Greater Mohali.",
    images: ["/clinic.jpg"],
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
  return <HomeClientView />;
}
import type { Metadata } from "next";
import ContactClientView from "./ContactClientView";

export const metadata: Metadata = {
  title: "Contact Us & Clinic Directions | AG Aesthetics & Wellness Clinic Kharar",
  description:
    "Connect with AG Aesthetics & Wellness Clinic in Kharar, Greater Mohali. Schedule physician-led consultations, ask about aesthetic skin & hair procedures, or find clinic directions.",
  keywords: [
    "Contact AG Aesthetics",
    "Aesthetic Clinic Kharar Contact",
    "Skin Clinic Radiola Road",
    "Dermatologist Kharar Phone",
    "AG Aesthetics Address",
    "Aesthetic Medicine Mohali",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us & Clinic Directions | AG Aesthetics & Wellness Clinic",
    description:
      "Schedule physician-led consultations or reach our clinic concierge desk in Kharar, Punjab.",
    url: "/contact-us",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/clinic.jpg",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Kharar Reception Desk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Clinic Directions | AG Aesthetics & Wellness Clinic",
    description:
      "Schedule physician-led consultations or reach our clinic concierge desk in Kharar, Punjab.",
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

export default function ContactPage() {
  return <ContactClientView />;
}
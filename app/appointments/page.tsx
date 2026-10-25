import type { Metadata } from "next";
import AppointmentBookingClient from "./AppointmentBookingClient";

export const metadata: Metadata = {
  title: "Book a Consultation | AG Aesthetics & Wellness Clinic Kharar",
  description:
    "Schedule your one-on-one clinical consultation with our certified doctors and cosmetologists at AG Aesthetics & Wellness Clinic in Kharar, Punjab. Select your preferred slot online.",
  keywords: [
    "Book Consultation Kharar",
    "Aesthetic Appointment Kharar",
    "Skin Doctor Booking Mohali",
    "Cosmetology Consultation Punjab",
    "AG Aesthetics Appointment",
    "Dermatology Slot Booking",
  ],
  metadataBase: new URL("https://agsaesthetics.com"),
  alternates: {
    canonical: "/appointments",
  },
  openGraph: {
    title: "Book a Consultation | AG Aesthetics & Wellness Clinic Kharar",
    description:
      "Schedule your one-on-one clinical consultation with our certified doctors and cosmetologists at AG Aesthetics & Wellness Clinic in Kharar, Punjab.",
    url: "/appointments",
    siteName: "AG Aesthetics & Wellness Clinic",
    images: [
      {
        url: "/ctaimage2.webp",
        width: 1200,
        height: 630,
        alt: "AG Aesthetics & Wellness Clinic Consultation Booking",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation | AG Aesthetics & Wellness Clinic Kharar",
    description:
      "Schedule your one-on-one clinical consultation with our certified doctors and cosmetologists at AG Aesthetics & Wellness Clinic in Kharar, Punjab.",
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

export default function AppointmentPage() {
  return <AppointmentBookingClient />;
}
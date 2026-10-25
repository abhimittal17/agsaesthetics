import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { treatments } from "@/lib/treatments";
import TreatmentDetailClient from "./TreatmentDetailClient";

interface TreatmentPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { id } = await params;

  const rawData = Array.isArray(treatments)
    ? treatments.find((item) => item.id === id)
    : treatments[id];

  if (!rawData) {
    return {
      title: "Treatment Not Found | AG Aesthetics & Wellness Clinic",
      description:
        "The requested clinical aesthetic treatment or procedure could not be found.",
    };
  }

  const title = `${rawData.title} in Kharar | AG Aesthetics & Wellness Clinic`;
  const description =
    rawData.subtitle ||
    rawData.heroDesc ||
    `Doctor-led ${rawData.title} protocol at AG Aesthetics & Wellness Clinic in Kharar, Punjab. US-FDA cleared technologies and individualized clinical aesthetics.`;
  const canonicalUrl = `/treatments/${id}`;
  const ogImage = rawData.gallery?.heroMain || "/ctaimage2.webp";

  return {
    title,
    description,
    keywords: [
      rawData.title,
      rawData.categoryTitle || "Skin Treatment Kharar",
      "Aesthetic Medicine Kharar",
      "AG Aesthetics & Wellness Clinic",
      "Skin Clinic Radiola Road",
      "Dermatology Kharar Mohali",
    ],
    metadataBase: new URL("https://agsaesthetics.com"),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "AG Aesthetics & Wellness Clinic",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: rawData.title,
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { id } = await params;

  const rawData = Array.isArray(treatments)
    ? treatments.find((item) => item.id === id)
    : treatments[id];

  if (!rawData) {
    notFound();
  }

  // Remove React icon functions from stats so the object serializes cleanly across the boundary
  const serializedData = {
    ...rawData,
    stats: rawData.stats?.map((stat) => ({
      label: stat.label,
      val: stat.val,
      // Pass the icon name or fallback to label for client-side resolution
      iconName: typeof stat.icon === "string" ? stat.icon : stat.label,
    })),
  };

  return <TreatmentDetailClient data={serializedData} />;
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type FormData = {
  fullname: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
};

const initialFormData: FormData = {
  fullname: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-3 text-sm text-stone-900 placeholder:text-stone-400 transition focus:border-[#586454] focus:outline-none focus:ring-2 focus:ring-[#586454]/40 sm:px-4";

const labelClass =
  "block text-[11px] font-semibold uppercase tracking-wider text-stone-700 sm:text-xs";

export default function ContactClientView() {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("idle");
    setErrorMessage("");
    setEmailWarning("");
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "loading") return;

    const cleanedData: FormData = {
      fullname: formData.fullname.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      serviceInterest: formData.serviceInterest,
      message: formData.message.trim(),
    };

    // Client-side checks for clearer feedback.
    if (
      cleanedData.fullname.length < 2 ||
      cleanedData.fullname.length > 100
    ) {
      setStatus("error");
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedData.email) ||
      cleanedData.email.length > 254
    ) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address, such as name@example.com.");
      return;
    }

    if (
      cleanedData.phone.length < 7 ||
      cleanedData.phone.length > 25
    ) {
      setStatus("error");
      setErrorMessage("Please enter a valid contact number.");
      return;
    }

    if (
      cleanedData.message.length < 5 ||
      cleanedData.message.length > 5000
    ) {
      setStatus("error");
      setErrorMessage("Please enter a message between 5 and 5000 characters.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    setEmailWarning("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const errors = data?.errors as
          | Record<string, string>
          | undefined;

        const firstFieldError = errors
          ? Object.values(errors).find(
              (value) => typeof value === "string"
            )
          : undefined;

        setErrorMessage(
          firstFieldError ||
            data?.message ||
            `Submission failed (HTTP ${response.status}). Please try again.`
        );

        setStatus("error");
        return;
      }

      setFormData({ ...initialFormData });
      setStatus("success");

      if (data.emailSent === false) {
        setEmailWarning(
          "Your enquiry has been saved, but the clinic notification email could not be sent. Please contact the clinic if your request is urgent."
        );
      }
    } catch (error) {
      console.error("Contact form request failed:", error);

      setStatus("error");
      setErrorMessage(
        "Unable to connect to the server. Please check your connection and try again."
      );
    }
  };

  const clinicInfo = [
    {
      icon: <Phone className="h-5 w-5 text-[#586454]" />,
      label: "Direct Inquiries",
      value: "+91 96535 52999",
      href: "tel:+919653552999",
    },
    {
      icon: <Mail className="h-5 w-5 text-[#586454]" />,
      label: "Concierge Email",
      value: "info@agsaesthetics.com",
      href: "mailto:info@agsaesthetics.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-[#586454]" />,
      label: "Consulting Hours",
      value: "10:00 AM – 6:00 PM, Mon – Sat",
      href: null,
    },
  ];

  return (
    <main className="w-full pb-16 text-stone-900 sm:pb-20 md:pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 pb-8 pt-10 text-center sm:pb-10 sm:pt-14 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 sm:text-sm">
            Contact Us
          </p>

          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-3xl md:text-4xl lg:text-5xl">
            Reach Out for a Personalized Consultation
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
            Our clinical team in Kharar is available to address questions
            about skin, laser, hair restoration, or custom treatment pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {clinicInfo.map((info) => {
            const content = (
              <div className="flex h-full items-center gap-4 rounded-2xl bg-[#586454] p-4 text-white transition hover:bg-[#4d5749] sm:p-5">
                <div className="shrink-0 rounded-xl bg-white p-2.5">
                  {info.icon}
                </div>

                <div className="min-w-0">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-[#D5E0D2] sm:text-[11px]">
                    {info.label}
                  </span>

                  <span className="mt-1 block truncate text-sm font-medium">
                    {info.value}
                  </span>
                </div>
              </div>
            );

            return info.href ? (
              <a key={info.label} href={info.href}>
                {content}
              </a>
            ) : (
              <div key={info.label}>{content}</div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100 sm:aspect-[3/4] sm:rounded-3xl">
              <Image
                src="/contact.png"
                alt="AG Aesthetics Clinical Atmosphere"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="space-y-1 rounded-2xl bg-stone-50 p-4 text-sm text-stone-700">
                  <p className="font-semibold text-stone-900">
                    Kharar Practice Location
                  </p>

                  <p className="leading-relaxed text-stone-600">
                    1st Floor, SCO No. 6, SAI Street, Radiola Road,
                    Kharar, Punjab 140301
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200/80 bg-white p-5 sm:rounded-3xl sm:p-8 md:p-10 lg:col-span-7">
            <div className="mb-6 border-b border-stone-100 pb-5 sm:mb-8 sm:pb-6">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#586454] sm:text-xs">
                Confidential Inquiry
              </span>

              <h2 className="mt-2 text-xl font-semibold text-stone-950 sm:text-2xl md:text-3xl">
                Request a Personalized Consultation
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                Share your concerns or preferred treatments and our clinic
                coordinator will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="space-y-2">
                  <label htmlFor="fullname" className={labelClass}>
                    Full Name *
                  </label>

                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Simran Kaur"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="simran@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="space-y-2">
                  <label htmlFor="phone" className={labelClass}>
                    Contact Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    minLength={7}
                    maxLength={25}
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="serviceInterest" className={labelClass}>
                    Treatment Interest
                  </label>

                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Treatment Category</option>
                    <option value="injectables">
                      Facial Sculpting &amp; Wrinkle Reduction
                    </option>
                    <option value="skin-rejuvenation">
                      Medical Peels &amp; Laser Rejuvenation
                    </option>
                    <option value="acne-scars">
                      Acne &amp; Tethered Scar Revision
                    </option>
                    <option value="hair-restoration">
                      GFC &amp; Hair Follicle Restoration
                    </option>
                    <option value="general-consultation">
                      Comprehensive Skin Diagnostics
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={labelClass}>
                  How May We Assist You? *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={5}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your aesthetic goals, concerns, or previous procedures..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#586454] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#485345] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? "Submitting..." : "Send Request"}

                {status === "loading" ? (
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </button>

              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                  <div>
                    <p>
                      Thank you. Your consultation enquiry has been received.
                      Our clinic team will reach out within 24 hours.
                    </p>

                    {emailWarning && (
                      <p className="mt-2 text-amber-800">{emailWarning}</p>
                    )}
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                  <p>{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}


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

type FormStatus = "idle" | "loading" | "success" | "error";

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
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

    if (status !== "loading") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          serviceInterest: formData.serviceInterest,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const fieldErrors = data?.errors as
          | Record<string, string>
          | undefined;

        const firstFieldError = fieldErrors
          ? Object.values(fieldErrors).find(
              (value) => typeof value === "string"
            )
          : undefined;

        setErrorMessage(
          firstFieldError ||
            data?.message ||
            `Unable to submit your enquiry (HTTP ${response.status}). Please try again.`
        );

        setStatus("error");
        return;
      }

      setFormData({ ...initialFormData });
      setStatus("success");

      if (data.emailSent === false) {
        setErrorMessage(
          "Your enquiry has been saved, but the clinic notification email could not be sent."
        );
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setErrorMessage(
        "Unable to connect to the server. Please check your internet connection and try again."
      );
      setStatus("error");
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
      {/* Page heading */}
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

        {/* Contact information */}
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
              <a
                key={info.label}
                href={info.href}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={info.label}>{content}</div>
            );
          })}
        </div>
      </section>

      {/* Image and enquiry form */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Clinic image */}
          <div className="space-y-6 lg:col-span-5">
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

          {/* Contact form */}
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

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate={false}
            >
              {/* Name and email */}
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

              {/* Phone and treatment */}
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
                  <label
                    htmlFor="serviceInterest"
                    className={labelClass}
                  >
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

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className={labelClass}>
                  How May We Assist You? *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={5}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your aesthetic goals, concerns, or previous procedures..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Submit button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#586454] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#485345] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading"
                    ? "Submitting..."
                    : "Send Request"}

                  {status === "loading" ? (
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Success message */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                  <p>
                    Thank you. Your consultation enquiry has been received.
                    Our clinic team will reach out to you within 24 hours.
                    {errorMessage && (
                      <span className="mt-2 block text-amber-800">
                        {errorMessage}
                      </span>
                    )}
                  </p>
                </div>
              )}

              {/* Error message */}
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

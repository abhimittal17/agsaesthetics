"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReCaptcha } from "next-recaptcha-v3";
import { Phone, Mail, Clock, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactClientView() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const { executeRecaptcha } = useReCaptcha() || {};

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (status !== "idle" && status !== "loading") {
            setStatus("idle");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            // Safe invocation of reCAPTCHA if configured
            let token: string | undefined = undefined;
            if (executeRecaptcha) {
                try {
                    token = await executeRecaptcha("ag_contact_form");
                } catch {
                    // Allow submission to continue if client-side recaptcha fails to boot
                    token = undefined;
                }
            }

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, token }),
            });

            const data = await res.json().catch(() => null);

            if (res.ok && data?.success) {
                setStatus("success");
                setFormData({
                    fullname: "",
                    email: "",
                    phone: "",
                    serviceInterest: "",
                    message: "",
                });
            } else {
                setStatus("error");
                setErrorMessage(data?.message || "Unable to send message at this time. Please call our clinic directly.");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
            setErrorMessage("Network error. Please try again or reach out on WhatsApp.");
        }
    };

    const clinicInfo = [
        {
            icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#586454]" />,
            label: "Direct Inquiries",
            value: "+91 96535 52999",
            href: "tel:+919653552999",
        },
        {
            icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#586454]" />,
            label: "Concierge Email",
            value: "info@agsaesthetics.com",
            href: "mailto:info@agsaesthetics.com",
        },
        {
            icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#586454]" />,
            label: "Consulting Hours",
            value: "10:00 AM – 6:00 PM, Mon – Sat",
            href: null,
        },
    ];

    return (
        <main className="w-full text-stone-900 pb-16 sm:pb-20 md:pb-24">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-10 space-y-2 sm:space-y-3">
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-semibold">
                        Contact Us
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-950 leading-tight">
                        Reach Out for a Personalized Consultation
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed pt-1">
                        Our clinical team in Kharar is available to address questions about skin, laser, hair restoration, or custom treatment pathways.
                    </p>
                </div>

                {/* Quick Contact Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
                    {clinicInfo.map((info, idx) => {
                        const Content = (
                            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#586454] text-white  transition hover:bg-[#4d5749]">
                                <div className="p-2 sm:p-2.5 rounded-xl bg-white shrink-0">
                                    {info.icon}
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D5E0D2] font-medium">
                                        {info.label}
                                    </span>
                                    <span className="text-xs sm:text-sm font-medium mt-0.5 block leading-snug truncate">
                                        {info.value}
                                    </span>
                                </div>
                            </div>
                        );

                        return info.href ? (
                            <a key={idx} href={info.href} className="block">
                                {Content}
                            </a>
                        ) : (
                            <div key={idx}>{Content}</div>
                        );
                    })}
                </div>
            </section>

            {/* Form & Visual Section */}
            <section className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 md:pt-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
                    {/* Visual Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-4/5 sm:aspect-3/4 bg-stone-100 border border-stone-200/80 ">
                            <Image
                                src="/contact.png"
                                alt="AG Aesthetics Clinical Atmosphere"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-stone-900/20 to-transparent" />
                            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 text-white space-y-1">
                                <div className="p-4 rounded-2xl bg-stone-50 text-xs sm:text-sm text-stone-700 space-y-1">
                                    <p className="font-semibold text-stone-900">Kharar Practice Location</p>
                                    <p className="leading-relaxed text-stone-600">
                                        1st Floor, SCO No. 6, SAI Street, Radiola Road, Kharar, Punjab 140301
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Address Badge */}

                    </div>

                    {/* Form Card */}
                    <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-stone-200/80 ">
                        <div className="border-b border-stone-100 pb-5 sm:pb-6 mb-6 sm:mb-8">
                            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#586454] font-semibold block">
                                Confidential Inquiry
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-950 mt-1.5">
                                Request a Personalized Consultation
                            </h2>
                            <p className="text-xs sm:text-sm text-stone-500 mt-1 leading-relaxed">
                                Share your concerns or preferred treatments and our clinic coordinator will contact you within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-700">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        required
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        placeholder="Simran Kaur"
                                        className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#586454]/40 focus:border-[#586454] transition"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-700">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="simran@example.com"
                                        className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#586454]/40 focus:border-[#586454] transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-700">
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#586454]/40 focus:border-[#586454] transition"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-700">
                                        Treatment Interest
                                    </label>
                                    <select
                                        name="serviceInterest"
                                        value={formData.serviceInterest}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#586454]/40 focus:border-[#586454] transition"
                                    >
                                        <option value="">Select Treatment Category</option>
                                        <option value="injectables">Facial Sculpting &amp; Wrinkle Reduction</option>
                                        <option value="skin-rejuvenation">Medical Peels &amp; Laser Rejuvenation</option>
                                        <option value="acne-scars">Acne &amp; Tethered Scar Revision</option>
                                        <option value="hair-restoration">GFC &amp; Hair Follicle Restoration</option>
                                        <option value="general-consultation">Comprehensive Skin Diagnostics</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-700">
                                    How May We Assist You? *
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your aesthetic goals, concerns, or previous procedures..."
                                    className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#586454]/40 focus:border-[#586454] transition"
                                />
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full sm:w-auto px-7 py-3 sm:py-3.5 bg-[#586454] hover:bg-[#485345] text-white rounded-xl text-xs sm:text-sm uppercase tracking-wider font-semibold transition active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2  cursor-pointer"
                                >
                                    {status === "loading" ? "Submitting..." : "Send Request"}
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>

                            {status === "success" && (
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs sm:text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <p>
                                        Thank you. Your consultation inquiry has been received. Our clinic team will reach out to you within 24 hours.
                                    </p>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 text-rose-900 border border-rose-200 text-xs sm:text-sm">
                                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
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
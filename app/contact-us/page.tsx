"use client";

import React, {useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useReCaptcha } from "next-recaptcha-v3";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  CalendarDays 
} from "lucide-react";


export default function AGAestheticsContact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { executeRecaptcha } = useReCaptcha();

  const heroImageRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const token = await executeRecaptcha?.("ag_contact_form");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ fullname: "", email: "", phone: "", serviceInterest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const clinicInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-stone-700" />,
      label: "Clinic Suite",
      value: "Level 2, 120 Collins St, Melbourne VIC 3000",
    },
    {
      icon: <Phone className="w-5 h-5 text-stone-700" />,
      label: "Direct Inquiries",
      value: "+61 (03) 9123 4567",
    },
    {
      icon: <Mail className="w-5 h-5 text-stone-700" />,
      label: "Concierge Email",
      value: "concierge@agaesthetics.com.au",
    },
    {
      icon: <Clock className="w-5 h-5 text-stone-700" />,
      label: "Consulting Hours",
      value: "Tue - Sat: 9:30 AM - 6:00 PM",
    },
  ];



  return (
    <>
      <Head>
        <title>Get In Touch | AG Aesthetics & Wellness Clinic</title>
        <meta
          name="description"
          content="Connect with AG Aesthetics & Wellness Clinic for bespoke medical aesthetic treatments and holistic skincare therapies."
        />
      </Head>

      <main  className=" text-stone-900 selection:bg-stone-300 selection:text-stone-900">
        {/* Hero Section */}
        <section className="relative px-6 pb-12 max-w-7xl mx-auto border-b border-stone-100/80">
         <div className="text-center pt-10 pb-12 space-y-2">
        <p className="text-sm uppercase tracking-widest text-stone-500 font-medium">
            Contact Us
        </p>
        <h1 className="text-2xl md:text-4xl md:leading-relaxed tracking-wider">
            Reach Out for a Personalized Consultation
        </h1>
      </div>
          {/* Quick Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-100">
            {clinicInfo.map((info, idx) => (
              <div
                key={idx}
                className="contact-pill flex items-start gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-stone-100"
              >
                <div className="p-2.5 rounded-lg bg-stone-100 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
                    {info.label}
                  </span>
                  <span className="text-sm font-normal text-stone-800 mt-0.5 block leading-snug">
                    {info.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form & Visual Section */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative overflow-hidden rounded-3xl aspect-3/4 bg-stone-100">
                <div ref={heroImageRef} className="absolute inset-0 w-full h-[120%] top-[-10%]">
                  <Image
                    src="/contact.webp"
                    alt="AG Aesthetics Clinical Atmosphere"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-stone-900/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-xs uppercase tracking-widest text-stone-300 font-medium">
                    Private Consultations
                  </span>
                  <h3 className="text-2xl font-light mt-1">Quiet luxury. Natural results.</h3>
                  <Link
                    href="/appointments"
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white/90 hover:text-white underline underline-offset-4"
                  >
                    Direct Online Booking <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              ref={formCardRef}
              className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12  border border-stone-100/60"
            >
              <div className="border-b border-stone-100 pb-6 mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium">
                  Confidential Inquiry
                </span>
                <h2 className="text-3xl font-light text-stone-900 mt-2">
                  Request a Personalized Consultation
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Share your concerns or preferred treatments and our clinic coordinator will contact you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-medium text-stone-600">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      required
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Eleanor Vance"
                      className="w-full bg-[#FAF9F6] border border-stone-100 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-medium text-stone-600">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="eleanor@example.com"
                      className="w-full bg-[#FAF9F6] border border-stone-100 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-medium text-stone-600">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+61 400 000 000"
                      className="w-full bg-[#FAF9F6] border border-stone-100 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-medium text-stone-600">
                      Treatment Interest
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full bg-[#FAF9F6] border border-stone-100 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition"
                    >
                      <option value="">Select Treatment Category</option>
                      <option value="facial-aesthetics">Facial Sculpting &amp; Wrinkle Reduction</option>
                      <option value="skin-rejuvenation">Medical Peels &amp; Laser Skin Therapy</option>
                      <option value="iv-wellness">IV Nutrient Infusions &amp; Vitality</option>
                      <option value="general-consultation">Comprehensive Skin Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-medium text-stone-600">
                    How May We Assist You?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your aesthetic goals or any treatment questions..."
                    className="w-full bg-[#FAF9F6] border border-stone-100 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 resize-none focus:outline-none focus:ring-1 focus:ring-stone-600 focus:border-stone-600 transition"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs uppercase tracking-[0.2em] font-medium transition duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? "Submitting..." : "Send Request"}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-stone-600 hover:text-stone-950 font-medium"
                  >
                    <CalendarDays className="w-4 h-4" /> Book Directly via Calendar
                  </Link>
                </div>

                {status === "success" && (
                  <p className="text-stone-800 bg-stone-100 p-4 rounded-xl text-sm border border-stone-100">
                    Thank you. Your consultation inquiry has been delivered. We will be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-rose-700 bg-rose-50 p-4 rounded-xl text-sm border border-rose-200">
                    Unable to send message at this time. Please call our clinic directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
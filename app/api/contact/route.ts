
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/app/prisma/db";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedTreatments = new Set([
  "injectables",
  "skin-rejuvenation",
  "acne-scars",
  "hair-restoration",
  "general-consultation",
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullname =
      typeof body.fullname === "string" ? body.fullname.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";
    const serviceInterest =
      typeof body.serviceInterest === "string"
        ? body.serviceInterest.trim()
        : "";

    if (
      fullname.length < 2 ||
      fullname.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      phone.length < 7 ||
      phone.length > 25 ||
      message.length < 5 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { success: false, message: "Please check your form details." },
        { status: 400 }
      );
    }

    if (
      serviceInterest &&
      !allowedTreatments.has(serviceInterest)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid treatment selection." },
        { status: 400 }
      );
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_TO_EMAIL ||
      !process.env.CONTACT_FROM_EMAIL
    ) {
      console.error("Contact email environment variables are missing.");
      return NextResponse.json(
        { success: false, message: "The contact service is not configured." },
        { status: 500 }
      );
    }

    // 1. Save the enquiry to PostgreSQL.
    // Prisma 8 uses direct model fields, not a Prisma 7 `data` wrapper.
    const inquiry = await db.orm.public.ContactInquiry.create({
      fullname,
      email,
      phone,
      serviceInterest: serviceInterest || null,
      message,
    });

    // 2. Send a notification email to the clinic.
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New consultation enquiry from ${fullname}`,
      text: [
        "New enquiry from the AG Aesthetics website",
        "",
        `Enquiry ID: ${inquiry.id}`,
        `Name: ${fullname}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Treatment: ${serviceInterest || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      // The enquiry is saved even if email delivery fails.
      console.error("Resend email error:", error);

      return NextResponse.json({
        success: true,
        emailSent: false,
        message: "Your enquiry was received and saved.",
      });
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      message: "Your enquiry was received successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

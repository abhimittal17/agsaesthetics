
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

    // Validate submitted fields.
    const errors: Record<string, string> = {};

    if (fullname.length < 2 || fullname.length > 100) {
      errors.fullname = "Name must be between 2 and 100 characters.";
    }

    if (
      email.length > 254 ||
      !/^[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      errors.email = "Please enter a valid email address.";
    }

    if (phone.length < 7 || phone.length > 25) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (message.length < 5 || message.length > 5000) {
      errors.message = "Message must be between 5 and 5000 characters.";
    }

    if (
      serviceInterest &&
      !allowedTreatments.has(serviceInterest)
    ) {
      errors.serviceInterest = "Invalid treatment selection.";
    }

    if (Object.keys(errors).length > 0) {
      console.error("Contact form validation failed:", errors);

      return NextResponse.json(
        {
          success: false,
          message: "Please check your form details.",
          errors,
        },
        { status: 400 }
      );
    }

    // Confirm email configuration.
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_TO_EMAIL ||
      !process.env.CONTACT_FROM_EMAIL
    ) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "The contact service is not configured.",
        },
        { status: 500 }
      );
    }

    // 1. Save the enquiry to Neon PostgreSQL.
    const inquiry = await db.orm.public.ContactInquiry.create({
      fullname,
      email,
      phone,
      serviceInterest: serviceInterest || null,
      message,
    });

    // 2. Send an email notification to the clinic.
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


import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/app/prisma/db";

export const runtime = "nodejs";

const allowedTreatments = new Set([
  "injectables",
  "skin-rejuvenation",
  "acne-scars",
  "hair-restoration",
  "general-consultation",
]);

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid form submission." },
        { status: 400 }
      );
    }

    const form = body as Record<string, unknown>;

    const fullname =
      typeof form.fullname === "string" ? form.fullname.trim() : "";

    const email =
      typeof form.email === "string" ? form.email.trim() : "";

    const phone =
      typeof form.phone === "string" ? form.phone.trim() : "";

    const message =
      typeof form.message === "string" ? form.message.trim() : "";

    const serviceInterest =
      typeof form.serviceInterest === "string"
        ? form.serviceInterest.trim()
        : "";

    // Validate fields.
    const errors: Record<string, string> = {};

    if (fullname.length < 2 || fullname.length > 100) {
      errors.fullname = "Name must be between 2 and 100 characters.";
    }

    // Correctly checks for text before @, a domain, and a dot.
    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
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
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form details.",
          errors,
        },
        { status: 400 }
      );
    }

    // Check configuration before saving the enquiry.
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing contact email environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "The contact service is not configured.",
        },
        { status: 500 }
      );
    }

    // Save the enquiry to Neon PostgreSQL.
    const inquiry = await db.orm.public.ContactInquiry.create({
      fullname,
      email,
      phone,
      serviceInterest: serviceInterest || null,
      message,
    });

    // Send notification to the clinic.
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
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
      // The enquiry has already been saved.
      console.error("Resend email error:", error);

      return NextResponse.json({
        success: true,
        emailSent: false,
        message:
          "Your enquiry was saved, but the notification email could not be sent.",
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

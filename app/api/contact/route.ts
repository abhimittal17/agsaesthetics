
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/app/prisma/db";

export const runtime = "nodejs";

const allowedTreatments: Record<string, string> = {
  injectables: "Facial Sculpting & Wrinkle Reduction",
  "skin-rejuvenation": "Medical Peels & Laser Rejuvenation",
  "acne-scars": "Acne & Scar Revision",
  "hair-restoration": "GFC & Hair Restoration",
  "general-consultation": "General Skin Consultation",
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

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

    const errors: Record<string, string> = {};

    if (fullname.length < 2 || fullname.length > 100) {
      errors.fullname = "Name must be between 2 and 100 characters.";
    }

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
      !Object.prototype.hasOwnProperty.call(
        allowedTreatments,
        serviceInterest
      )
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

    const treatment = serviceInterest
      ? allowedTreatments[serviceInterest]
      : "Not specified";

    // Save the enquiry first.
    const inquiry = await db.orm.public.ContactInquiry.create({
      fullname,
      email,
      phone,
      serviceInterest: serviceInterest || null,
      message,
    });

    const resend = new Resend(apiKey);

    // Escape all user-provided values before inserting them into HTML.
    const safeName = escapeHtml(fullname);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeTreatment = escapeHtml(treatment);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
    const safeId = escapeHtml(String(inquiry.id));
    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Consultation Enquiry | ${fullname}`,
      text: [
        "AG AESTHETICS & WELLNESS CLINIC",
        "New Website Consultation Enquiry",
        "",
        `Enquiry ID: ${inquiry.id}`,
        `Received: ${submittedAt}`,
        "",
        "PATIENT DETAILS",
        `Name: ${fullname}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Treatment Interest: ${treatment}`,
        "",
        "MESSAGE",
        message,
        "",
        "Reply directly to this email to respond to the enquiry.",
      ].join("\n"),
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f2;font-family:Arial,Helvetica,sans-serif;color:#292d27;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f5f2;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#ffffff;border:1px solid #e4e7e0;border-radius:14px;overflow:hidden;">

          <tr>
            <td style="background:#586454;padding:30px 32px;">
              <p style="margin:0 0 8px;color:#e1e7dc;font-size:11px;font-weight:bold;letter-spacing:2px;">
                AG AESTHETICS &amp; WELLNESS CLINIC
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:25px;line-height:1.35;font-weight:600;">
                New Consultation Enquiry
              </h1>
              <p style="margin:10px 0 0;color:#edf0ea;font-size:14px;line-height:1.6;">
                A new enquiry has been submitted through your website.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:26px 32px 10px;">
              <p style="margin:0 0 5px;color:#777d72;font-size:11px;font-weight:bold;letter-spacing:1.5px;">
                ENQUIRY REFERENCE
              </p>
              <p style="margin:0;color:#30372e;font-size:15px;font-weight:bold;">
                #${safeId}
              </p>
              <p style="margin:8px 0 0;color:#777d72;font-size:12px;">
                Received ${escapeHtml(submittedAt)} IST
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px;">
              <h2 style="margin:0 0 16px;color:#30372e;font-size:16px;font-weight:bold;">
                Contact Details
              </h2>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;color:#777d72;font-size:13px;width:38%;">
                    Full name
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;color:#30372e;font-size:14px;font-weight:bold;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;color:#777d72;font-size:13px;">
                    Email address
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;font-size:14px;word-break:break-word;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#586454;text-decoration:underline;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;color:#777d72;font-size:13px;">
                    Contact number
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;font-size:14px;">
                    <a href="tel:${escapeHtml(phone)}" style="color:#586454;text-decoration:none;">
                      ${safePhone}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;color:#777d72;font-size:13px;">
                    Treatment interest
                  </td>
                  <td style="padding:12px 0;border-bottom:1px solid #eceee9;color:#30372e;font-size:14px;font-weight:bold;">
                    ${safeTreatment}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:8px 32px 30px;">
              <h2 style="margin:0 0 12px;color:#30372e;font-size:16px;font-weight:bold;">
                Patient's Message
              </h2>
              <div style="padding:18px;background:#f6f7f4;border:1px solid #e7eae3;border-radius:9px;color:#454b41;font-size:14px;line-height:1.8;overflow-wrap:anywhere;">
                ${safeMessage}
              </div>
              <p style="margin:18px 0 0;color:#777d72;font-size:12px;line-height:1.7;">
                You can reply directly to this email to respond to the enquiry.
                The patient's email address is set as the reply-to address.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px;background:#f8f9f6;border-top:1px solid #e7eae3;">
              <p style="margin:0;color:#586454;font-size:12px;font-weight:bold;letter-spacing:1px;">
                AG AESTHETICS &amp; WELLNESS CLINIC
              </p>
              <p style="margin:7px 0 0;color:#777d72;font-size:11px;line-height:1.6;">
                Automated notification from your website contact form.
                Please handle enquiry details confidentially.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (error) {
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

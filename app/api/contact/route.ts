import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, phone, serviceInterest, message, token } = body;

    // Validate required fields
    if (!fullname || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Optional: Verify reCAPTCHA token if RECAPTCHA_SECRET_KEY is configured
    if (process.env.RECAPTCHA_SECRET_KEY && token) {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success || verifyData.score < 0.5) {
        return NextResponse.json(
          { success: false, message: "Security verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // Process the submission (e.g., forward to email provider or store in DB)
    // console.log("New clinic lead:", { fullname, email, phone, serviceInterest, message });

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
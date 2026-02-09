import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  console.log("[contact] ========== NEW CONTACT FORM SUBMISSION ==========");
  console.log("[contact] Timestamp:", new Date().toISOString());

  try {
    // 1. Parse request body
    const body = await request.json();
    const { name, email, message } = body;
    console.log("[contact] Received form data:", {
      name: name || "(missing)",
      email: email || "(missing)",
      messageLength: message?.length || 0
    });

    // 2. Validate required fields
    if (!name || !email || !message) {
      console.warn("[contact] Validation failed - missing fields:", {
        hasName: !!name,
        hasEmail: !!email,
        hasMessage: !!message,
      });
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 3. Check API key
    const apiKey = process.env.RESEND_API_KEY;
    console.log("[contact] RESEND_API_KEY check:", {
      exists: !!apiKey,
      length: apiKey?.length || 0,
      prefix: apiKey?.substring(0, 6) || "(none)",
      hasQuotes: apiKey?.startsWith('"') || apiKey?.endsWith('"') ? "YES - PROBLEM!" : "No",
    });

    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set in environment");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    // 4. Initialize Resend client
    console.log("[contact] Initializing Resend client...");
    const resend = new Resend(apiKey);
    console.log("[contact] Resend client initialized");

    // 5. Prepare email payload
    const emailPayload = {
      from: "Portfolio Contact <noreply@contact.merekapade.com>",
      to: "mandalam.karan@mileseducation.com",
      subject: `New Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };
    console.log("[contact] Email payload prepared:", {
      from: emailPayload.from,
      to: emailPayload.to,
      subject: emailPayload.subject,
      replyTo: emailPayload.replyTo,
      textLength: emailPayload.text.length,
    });

    // 6. Send email
    console.log("[contact] Calling resend.emails.send()...");
    const result = await resend.emails.send(emailPayload);
    console.log("[contact] Resend API response:", JSON.stringify(result, null, 2));

    // 7. Check for errors in response
    if (result.error) {
      console.error("[contact] Resend returned error:", {
        name: result.error.name,
        message: result.error.message,
      });
      return NextResponse.json(
        { error: "Failed to send email.", details: result.error.message },
        { status: 500 }
      );
    }

    // 8. Success
    console.log("[contact] ✅ Email sent successfully!", {
      emailId: result.data?.id,
      recipient: emailPayload.to,
      senderName: name,
      senderEmail: email,
    });

    return NextResponse.json({ ok: true, emailId: result.data?.id });
  } catch (err: unknown) {
    // 9. Catch-all error handling
    console.error("[contact] ❌ Exception caught:");
    console.error("[contact] Error type:", typeof err);
    console.error("[contact] Error name:", err instanceof Error ? err.name : "Unknown");
    console.error("[contact] Error message:", err instanceof Error ? err.message : String(err));
    console.error("[contact] Full error:", err);

    if (err instanceof Error && err.stack) {
      console.error("[contact] Stack trace:", err.stack);
    }

    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}


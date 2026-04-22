import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 160 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "One of the fields is too long." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } =
      process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          success: false,
          message: "Mail service is not configured. Please try again later.",
        },
        { status: 503 }
      );
    }

    const port = Number(SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${name.replace(/"/g, "'")}" <${SMTP_USER}>`,
      to: CONTACT_EMAIL || SMTP_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
        <hr/>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

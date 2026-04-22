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

    const smtpHost = SMTP_HOST.trim();
    const smtpUser = SMTP_USER.trim();
    const smtpPass =
      smtpHost.toLowerCase().includes("gmail")
        ? SMTP_PASS.replace(/\s+/g, "")
        : SMTP_PASS.trim();

    const port = Number(SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: port === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://regmibiraj.com.np";
    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "N/A");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
    const initials = name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("") || "?";

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>New Portfolio Contact</title>
  </head>
  <body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      New message from ${safeName} via your portfolio site.
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
            <tr>
              <td style="background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 50%,#ec4899 100%);padding:28px 32px;color:#ffffff;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">
                      regmibiraj.com.np
                    </td>
                    <td align="right" style="font-size:12px;opacity:0.85;">
                      Portfolio Contact Form
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-top:12px;">
                      <div style="font-size:24px;font-weight:700;line-height:1.3;">
                        New message from your portfolio
                      </div>
                      <div style="font-size:14px;opacity:0.9;margin-top:6px;">
                        Someone just reached out through <strong>regmibiraj.com.np</strong>.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 8px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="56" valign="top">
                      <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#ec4899);color:#ffffff;font-weight:700;font-size:18px;line-height:48px;text-align:center;">
                        ${escapeHtml(initials)}
                      </div>
                    </td>
                    <td valign="top" style="padding-left:14px;">
                      <div style="font-size:16px;font-weight:600;color:#0f172a;">${safeName}</div>
                      <div style="font-size:13px;color:#64748b;">${submittedAt}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 32px 0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                  <tr>
                    <td style="padding:14px 18px;background:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:600;">
                      Contact Details
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 18px;border-bottom:1px solid #e2e8f0;">
                      <div style="font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Email</div>
                      <a href="mailto:${safeEmail}" style="font-size:15px;color:#4f46e5;text-decoration:none;font-weight:500;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 18px;">
                      <div style="font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Phone</div>
                      <div style="font-size:15px;color:#0f172a;font-weight:500;">${safePhone}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px 8px 32px;">
                <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:600;margin-bottom:10px;">
                  Message
                </div>
                <div style="position:relative;padding:18px 20px;background:#f8fafc;border-left:4px solid #6366f1;border-radius:8px;font-size:15px;line-height:1.7;color:#1e293b;white-space:pre-wrap;">
                  ${safeMessage}
                </div>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding:24px 32px 8px 32px;">
                <a href="mailto:${safeEmail}?subject=Re:%20Your%20message%20on%20regmibiraj.com.np" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:999px;box-shadow:0 10px 24px rgba(99,102,241,0.35);">
                  Reply to ${safeName}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px 28px 32px;">
                <div style="border-top:1px dashed #e2e8f0;padding-top:16px;font-size:12px;color:#94a3b8;text-align:center;line-height:1.6;">
                  This message was sent from the contact form on
                  <a href="${siteUrl}" style="color:#6366f1;text-decoration:none;font-weight:600;">${siteUrl.replace(/^https?:\/\//, "")}</a>.<br/>
                  You are receiving it because you are the portfolio owner.
                </div>
              </td>
            </tr>
          </table>

          <div style="max-width:600px;width:100%;margin-top:16px;font-size:11px;color:#64748b;text-align:center;letter-spacing:0.5px;">
            &copy; ${new Date().getFullYear()} Biraj Regmi &middot; Portfolio
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    await transporter.sendMail({
      from: `"Portfolio Contact - ${name.replace(/"/g, "'")}" <${smtpUser}>`,
      to: (CONTACT_EMAIL || smtpUser).trim(),
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      headers: {
        "X-Source": "regmibiraj.com.np-contact-form",
        "X-Mailer": "regmibiraj-portfolio",
      },
      text:
        `New message from your portfolio (regmibiraj.com.np)\n` +
        `------------------------------------------------------\n` +
        `Name:    ${name}\n` +
        `Email:   ${email}\n` +
        `Phone:   ${phone || "N/A"}\n` +
        `When:    ${submittedAt}\n\n` +
        `Message:\n${message}\n`,
      html,
    });

    const ownerEmail = (CONTACT_EMAIL || smtpUser).trim();
    const firstName = name.split(/\s+/)[0] || name;
    const safeFirstName = escapeHtml(firstName);

    const autoReplyHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Thank you for contacting me</title>
  </head>
  <body style="margin:0;padding:0;background:#eef2ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      Thank you ${safeFirstName} - I'll be in touch soon.
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2ff;padding:40px 14px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 24px 60px rgba(79,70,229,0.18);">
            <tr>
              <td style="background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 45%,#ec4899 100%);padding:44px 32px 36px 32px;color:#ffffff;text-align:center;">
                <div style="display:inline-block;padding:8px 16px;background:rgba(255,255,255,0.15);border-radius:999px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">
                  regmibiraj.com.np
                </div>
                <div style="font-size:28px;font-weight:800;line-height:1.25;margin-top:18px;letter-spacing:-0.3px;">
                  Thank you for contacting me!
                </div>
                <div style="font-size:15px;opacity:0.92;margin-top:10px;max-width:420px;margin-left:auto;margin-right:auto;line-height:1.5;">
                  I appreciate you taking the time to reach out.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:34px 36px 8px 36px;font-size:15.5px;line-height:1.75;color:#334155;">
                <p style="margin:0 0 16px 0;font-size:17px;color:#0f172a;font-weight:600;">
                  Hi ${safeFirstName},
                </p>
                <p style="margin:0 0 16px 0;">
                  Thank you for contacting me through my portfolio! Your message has been received
                  and I truly appreciate you getting in touch.
                </p>
                <p style="margin:0 0 16px 0;">
                  I will review your message carefully and <strong style="color:#4f46e5;">get back to you within 24-48 hours</strong>.
                  Please keep an eye on your inbox - your next message from me will be a personal reply.
                </p>
                <p style="margin:0;">
                  Looking forward to connecting with you soon.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 36px 6px 36px;">
                <div style="padding:20px 22px;background:linear-gradient(135deg,#eef2ff,#fdf2f8);border-radius:14px;border-left:4px solid #6366f1;font-size:14.5px;line-height:1.7;color:#334155;">
                  <span style="font-weight:600;color:#4f46e5;">Tip:</span>
                  if you don't see my reply, please check your spam folder just in case.
                </div>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding:28px 36px 10px 36px;">
                <a href="${siteUrl}" style="display:inline-block;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:13px 26px;border-radius:999px;box-shadow:0 12px 26px rgba(79,70,229,0.4);letter-spacing:0.2px;">
                  Explore my portfolio
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 36px 8px 36px;font-size:14px;line-height:1.7;color:#475569;text-align:center;">
                Warm regards,<br/>
                <span style="font-weight:700;color:#0f172a;font-size:16px;">Biraj Regmi</span><br/>
                <a href="mailto:${escapeHtml(ownerEmail)}" style="color:#6366f1;text-decoration:none;font-weight:500;">${escapeHtml(ownerEmail)}</a>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 36px 32px 36px;">
                <div style="border-top:1px dashed #e2e8f0;padding-top:18px;font-size:12px;color:#94a3b8;text-align:center;line-height:1.65;">
                  This is an automated confirmation from
                  <a href="${siteUrl}" style="color:#6366f1;text-decoration:none;font-weight:600;">${siteUrl.replace(/^https?:\/\//, "")}</a>.<br/>
                  Please do not reply to this email - I'll reach out to you personally soon.
                </div>
              </td>
            </tr>
          </table>

          <div style="max-width:560px;width:100%;margin-top:18px;font-size:11px;color:#64748b;text-align:center;letter-spacing:0.5px;">
            &copy; ${new Date().getFullYear()} Biraj Regmi &middot; Portfolio
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    try {
      await transporter.sendMail({
        from: `"Biraj Regmi" <${smtpUser}>`,
        to: email,
        replyTo: ownerEmail,
        subject: `Thank you for contacting me, ${firstName}!`,
        headers: {
          "X-Source": "regmibiraj.com.np-contact-form",
          "X-Mailer": "regmibiraj-portfolio",
          "Auto-Submitted": "auto-replied",
        },
        text:
          `Hi ${firstName},\n\n` +
          `Thank you for contacting me through my portfolio! Your message has been received ` +
          `and I truly appreciate you getting in touch.\n\n` +
          `I will review your message carefully and get back to you within 24-48 hours. ` +
          `Please keep an eye on your inbox - your next message from me will be a personal reply.\n\n` +
          `Looking forward to connecting with you soon.\n\n` +
          `Warm regards,\nBiraj Regmi\n${siteUrl}\n`,
        html: autoReplyHtml,
      });
    } catch (autoReplyError) {
      if (process.env.NODE_ENV === "development") {
        console.error("Auto-reply failed:", autoReplyError);
      }
    }

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

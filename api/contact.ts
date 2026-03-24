import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, mobile, subject, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safeMobile = String(mobile || "").trim();
    const safeSubject = String(subject || "New Contact Form Submission").trim();
    const safeMessage = String(message).trim();

    const toEmail = process.env.CONTACT_TO_EMAIL || "loveandcare.welfare@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Love and Care <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: safeEmail,
      subject: `Contact Form: ${safeSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(safeMobile || "Not provided")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(safeMessage).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
      id: data?.id,
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
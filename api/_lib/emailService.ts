import dotenv from "dotenv";
import { createTransport, type Transporter } from "nodemailer";

dotenv.config();

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) {
    console.log("[email] Reusing existing transporter");
    return transporter;
  }

  const user = process.env.GMAIL_APP_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("[email] Missing SMTP credentials", {
      hasUser: Boolean(user),
      hasPass: Boolean(pass),
    });
    throw new Error(
      "Email credentials are not configured. Set GMAIL_APP_EMAIL and GMAIL_APP_PASSWORD.",
    );
  }

  transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user,
      pass,
    },
  });

  console.log("[email] Created new transporter instance");
  return transporter;
}

export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html: string,
) {
  const transport = getTransporter();

  const recipients = [
    to,
    "developer1@coolmarketing.com",
    "angel@smoothmd.com",
    "zach@coolmarketing.com",
  ];

  console.log("[email] Attempting to send mail", {
    subject,
    recipients,
  });

  try {
    await transport.verify();
    console.log("[email] Transport verified successfully");
    await transport.sendMail({
      from: process.env.GMAIL_APP_EMAIL!,
      to: recipients,
      subject,
      text,
      html,
    });
    console.log("[email] Mail sent successfully");
  } catch (error) {
    console.error("[email] Failed to send mail", {
      subject,
      recipients,
      error,
    });
    throw error;
  }
}

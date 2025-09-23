import dotenv from 'dotenv';
import {createTransport} from "nodemailer";
dotenv.config()
const transporter = createTransport({
  service: "gmail",
host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_APP_EMAIL!,
    pass: process.env.GMAIL_APP_PASSWORD!,
  },
});




export async function sendEmail(to: string, subject: string, text: string, html: string) {



    try {
    await transporter.verify();
    await transporter.sendMail({
      from: process.env.GMAIL_APP_EMAIL!,
      to: ['developer1@coolmarketing.com',
     "angel@smoothmd.com", "zach@coolmarketing.com",
      ],// or send to someone else
      subject,
      text,
      html,
    });
    return { success: true };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log('THIS IS ERR', err);
      console.error("Unexpected error:", err);
      throw new Error('Something Went Wrong');
    }
    // fallback for non‑Error throws
    console.error("Unexpected non‑Error thrown:", err);
          throw new Error('Something Went Wrong');

  }
}






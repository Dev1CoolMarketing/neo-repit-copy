import { sendEmail } from "../server/service/emailService";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().optional(),
  message: z.string().optional(),
  treatments: z.union([z.array(z.string()), z.string()]).optional(),
  consent: z.boolean(),
});

type RequestLike = { method?: string; body?: unknown };
type ResponseLike = {
  status: (code: number) => ResponseLike;
  json: (body: unknown) => ResponseLike;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: RequestLike, res: ResponseLike) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = typeof req.body === "string" ? safeJsonParse(req.body) : req.body;
  if (!body) {
    return res.status(400).json({ message: "Invalid JSON body" });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid form submission",
      errors: parsed.error.flatten(),
    });
  }

  const formData = parsed.data;
  const treatments = Array.isArray(formData.treatments)
    ? formData.treatments.join(", ")
    : formData.treatments ?? "N/A";

  const subject = `New contact form submission from ${formData.firstName} ${formData.lastName}`;
  const text = `You have received a new contact form submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location || "N/A"}
Treatments: ${treatments}
Consent: ${formData.consent ? "Yes" : "No"}
Message: ${formData.message || "N/A"}
`;

  const html = `<div>
  <p>You have received a new contact form submission:</p>
  <div>Name: ${formData.firstName} ${formData.lastName}</div>
  <div>Email: ${formData.email}</div>
  <div>Phone: ${formData.phone}</div>
  <div>Location: ${formData.location || "N/A"}</div>
  <div>Treatments: ${treatments}</div>
  <div>Consent: ${formData.consent ? "Yes" : "No"}</div>
  <div>Message: ${formData.message || "N/A"}</div>
</div>`;

  try {
    await sendEmail(
      process.env.CONTACT_EMAIL || "angel@smoothmd.com",
      subject,
      text,
      html,
    );

    return res.status(200).json({
      message: "Thank you for your submission! We'll contact you shortly.",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({
      message:
        "An error occurred while processing your request. Please try again later.",
    });
  }
}

function safeJsonParse<T>(payload: string): T | null {
  try {
    return JSON.parse(payload) as T;
  } catch {
    return null;
  }
}

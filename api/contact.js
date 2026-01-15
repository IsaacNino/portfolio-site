import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <hello@yourdomain.com>",
      to: "isaacdavidnino@gmail.com",
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/><br/>
        <strong>Message:</strong><br/>
        ${message.replace(/\n/g, "<br/>")}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
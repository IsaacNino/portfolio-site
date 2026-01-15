const { Resend } = require("resend");

module.exports = async function handler(req, res) {
  // Health check so curl GET never crashes
  if (req.method === "GET") {
    return res.status(200).send("ok");
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
    }

    const resend = new Resend(apiKey);

    // Vercel usually gives req.body already parsed, but we handle string too
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "Missing fields",
        missing: { name: !name, email: !email, message: !message },
      });
    }

    // Safe sender for testing (no domain verification needed yet)
    const from = "Portfolio Contact <onboarding@resend.dev>";
    const to = "isaacdavidnino@gmail.com";

    const subject = `Portfolio contact: ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const result = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    // Resend SDK sometimes returns { data, error }
    if (result?.error) {
      console.error("Resend error:", result.error);
      return res.status(500).json({
        ok: false,
        error: result.error.message || "Resend error",
      });
    }

    return res.status(200).json({ ok: true, id: result?.data?.id });
  } catch (err) {
    console.error("Contact API crash:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
};
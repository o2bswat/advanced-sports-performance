import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, website } = body ?? {};
    if (website) return NextResponse.json({ ok: true });
    if (![name, email, phone, message].every((v) => typeof v === "string" && v.trim()) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        [name, email, phone, subject, message].some((v) => typeof v === "string" && v.length > 5000)) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    const apiKey = process.env.ASP_Contact_Form;
    if (!apiKey) {
      console.error("ASP contact: missing API key");
      return NextResponse.json({ error: "Email unavailable" }, { status: 503 });
    }
    const sender = "advancedsportsmacomb@gmail.com";
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({
        sender: { name: "Advanced Sports Performance Website", email: sender },
        to: [{ email: sender }],
        replyTo: { email, name },
        subject: "ASP website inquiry: " + (typeof subject === "string" ? subject.slice(0, 100) : "General"),
        textContent: "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nTopic: " + (subject || "General") + "\n\n" + message,
      }),
    });
    if (!response.ok) {
      console.error("ASP contact: Brevo status", response.status);
      return NextResponse.json({ error: "Unable to deliver message" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

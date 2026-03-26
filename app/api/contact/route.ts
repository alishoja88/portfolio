import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as dns } from "dns";

/* ── Format check ── */
function isValidEmailFormat(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/* ── MX record check — verifies the domain actually receives email ── */
async function domainHasMX(email: string): Promise<boolean> {
  try {
    const domain = email.trim().split("@")[1];
    const records = await dns.resolveMx(domain);
    return records.length > 0;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  /* Check API key is configured */
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_your_api_key_here") {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 }
    );
  }

  // Create client lazily to avoid build-time crashes when env vars are missing
  const resend = new Resend(apiKey);

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message } = body;

  /* Server-side validation */
  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
  }
  if (!email || !isValidEmailFormat(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  /* MX check — verify the email domain can actually receive mail */
  const mxValid = await domainHasMX(email);
  if (!mxValid) {
    return NextResponse.json(
      { error: "The email domain doesn't appear to be valid. Please double-check your email address." },
      { status: 400 }
    );
  }
  if (!message || message.trim().length < 10) {
    return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
  }

  /* Send via Resend — returns { data, error } — does NOT throw */
  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "alishojaa88@gmail.com",
    replyTo: email.trim(),
    subject: `New message from ${name.trim()} — Portfolio`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;color:#1e1d1a;">
        <h2 style="font-size:20px;font-weight:600;margin-bottom:24px;">New contact form submission</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;color:#888;font-size:13px;width:80px;">Name</td>
            <td style="padding:10px 0;font-weight:600;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#888;font-size:13px;">Email</td>
            <td style="padding:10px 0;">
              <a href="mailto:${email.trim()}" style="color:#5a6b52;">${email.trim()}</a>
            </td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
        <p style="font-size:13px;color:#888;margin-bottom:8px;">Message</p>
        <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;">${message.trim()}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="font-size:12px;color:#aaa;">Sent via alishoja.dev portfolio contact form</p>
      </div>
    `,
  });

  /* Resend returned an error — email was NOT sent */
  if (error || !data) {
    console.error("[contact/route] Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email me directly." },
      { status: 500 }
    );
  }

  /* Confirmed delivered to Resend */
  return NextResponse.json({ success: true, id: data.id });
}

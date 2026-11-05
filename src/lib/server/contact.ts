const json = (body: object, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function handleContact(request: Request): Promise<Response> {
  if (request.headers.get("origin") !== new URL(request.url).origin)
    return json({ error: "Invalid origin." }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return json({ error: "Invalid request." }, 415);
  const text = await request.text();
  if (text.length > 16000) return json({ error: "Your enquiry is too long." }, 413);
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(text);
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data))
    return json({ error: "Invalid request." }, 400);
  if (data["website"]) return json({ ok: true });
  const { name, email, phone = "", message } = data;
  if (
    typeof name !== "string" ||
    !name.trim() ||
    name.length > 120 ||
    /[\r\n]/.test(name) ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof phone !== "string" ||
    phone.length > 50 ||
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 5000
  ) {
    return json({ error: "Please check your name, email and project details." }, 400);
  }
  const key = process.env["RESEND_API_KEY"];
  const from = process.env["CONTACT_FROM_EMAIL"];
  if (!key || !from)
    return json(
      {
        error:
          "We could not send your enquiry. Please email sales@1080solutions.co.uk or call 0800 772 0012.",
      },
      503,
    );
  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        from,
        to: ["sales@1080solutions.co.uk"],
        reply_to: email,
        subject: `Website enquiry — ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message.trim()}`,
      }),
    });
    if (!result.ok)
      return json(
        {
          error:
            "We could not send your enquiry. Please try again or email sales@1080solutions.co.uk.",
        },
        502,
      );
    return json({ ok: true });
  } catch {
    return json(
      {
        error:
          "We could not send your enquiry. Please try again or email sales@1080solutions.co.uk.",
      },
      502,
    );
  }
}

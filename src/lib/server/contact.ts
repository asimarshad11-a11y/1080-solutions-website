import nodemailer from "nodemailer";

type EnquiryMail = { from: string; to: string; replyTo: string; subject: string; text: string };

async function sendGmail(mail: EnquiryMail): Promise<boolean> {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: process.env["GMAIL_SMTP_USER"], pass: process.env["GMAIL_SMTP_APP_PASSWORD"] },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  try {
    const result = await transport.sendMail(mail);
    return result.accepted.some(
      (address: string | { address: string }) =>
        (typeof address === "string" ? address : address.address).toLowerCase() === mail.to,
    );
  } finally {
    transport.close();
  }
}

const json = (body: object, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

const maxBodyBytes = 24000;
const hasControlCharacters = (value: string) =>
  Array.from(value).some(
    (character) => character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127,
  );

async function readBody(request: Request): Promise<string | null> {
  if (Number(request.headers.get("content-length")) > maxBodyBytes) return null;
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
    return Buffer.concat(chunks).toString("utf8");
  } finally {
    reader.releaseLock();
  }
}

export async function handleContact(
  request: Request,
  send: (mail: EnquiryMail) => Promise<boolean> = sendGmail,
): Promise<Response> {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
  if (request.headers.get("origin") !== new URL(request.url).origin)
    return json({ error: "Invalid origin." }, 403);
  if (
    request.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase() !== "application/json"
  )
    return json({ error: "Invalid request." }, 415);
  let data: Record<string, unknown>;
  try {
    const text = await readBody(request);
    if (text === null) return json({ error: "Your enquiry is too long." }, 413);
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
    hasControlCharacters(name) ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]+$/.test(email) ||
    hasControlCharacters(email) ||
    typeof phone !== "string" ||
    phone.length > 50 ||
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 5000
  ) {
    return json({ error: "Please check your name, email and project details." }, 400);
  }
  const user = process.env["GMAIL_SMTP_USER"];
  const password = process.env["GMAIL_SMTP_APP_PASSWORD"];
  if (!user || !password)
    return json(
      {
        error:
          "We could not send your enquiry. Please email sales@1080solutions.co.uk or call 0800 772 0012.",
      },
      503,
    );
  try {
    const accepted = await send({
      from: `1080 Solutions Website <${user}>`,
      to: "sales@1080solutions.co.uk",
      replyTo: email,
      subject: `Website enquiry — ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n${message.trim()}`,
    });
    if (!accepted)
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

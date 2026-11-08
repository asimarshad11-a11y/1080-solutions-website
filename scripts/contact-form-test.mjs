import assert from "node:assert/strict";
import { handleContact } from "../src/lib/server/contact.ts";
const payload = {
  name: "Website test",
  email: "sales@1080solutions.co.uk",
  message: "Test enquiry",
};
const request = (data = payload, origin = "https://www.1080solutions.co.uk") =>
  new Request("https://www.1080solutions.co.uk/api/contact", {
    method: "POST",
    headers: { origin, "content-type": "application/json" },
    body: JSON.stringify(data),
  });
assert.equal((await handleContact(request(payload, "https://example.com"))).status, 403);
assert.equal((await handleContact(request({ ...payload, email: "invalid" }))).status, 400);
assert.equal((await handleContact(request({ ...payload, message: " " }))).status, 400);
assert.equal((await handleContact(request({ ...payload, message: "x".repeat(5001) }))).status, 400);
assert.equal((await handleContact(request({ ...payload, website: "spam" }))).status, 200);
delete process.env.GMAIL_SMTP_USER;
delete process.env.GMAIL_SMTP_APP_PASSWORD;
assert.equal((await handleContact(request())).status, 503);
process.env.GMAIL_SMTP_USER = "sales@1080solutions.co.uk";
process.env.GMAIL_SMTP_APP_PASSWORD = "test-placeholder";
let sent;
const accepted = async (mail) => {
  sent = mail;
  return true;
};
assert.deepEqual(await (await handleContact(request(), accepted)).json(), { ok: true });
assert.equal(sent.to, "sales@1080solutions.co.uk");
assert.equal(sent.replyTo, payload.email);
assert.equal(sent.from, "1080 Solutions Website <sales@1080solutions.co.uk>");
assert.equal((await handleContact(request(), async () => false)).status, 502);
assert.equal(
  (
    await handleContact(request(), async () => {
      throw new Error("timeout");
    })
  ).status,
  502,
);
console.log(
  "Contact tests passed: validation, origin, honeypot, configuration, Gmail acceptance and failure handling. No email sent.",
);

// Reject malformed inputs before invoking SMTP.
let deliveries = 0;
const track = async () => {
  deliveries++;
  return true;
};
for (const bad of [
  null,
  [],
  "string",
  {},
  { ...payload, name: "x\r\nBcc: victim@example.com" },
  { ...payload, email: "a@b.co,c@d.co" },
  { ...payload, email: "<a@b.co>" },
  { ...payload, phone: 123 },
  { ...payload, name: "x".repeat(121) },
]) {
  assert.equal((await handleContact(request(bad), track)).status, 400);
}
assert.equal(deliveries, 0);
assert.equal(
  (await handleContact(new Request("https://www.1080solutions.co.uk/api/contact"), track)).status,
  405,
);
assert.equal(
  (
    await handleContact(
      new Request("https://www.1080solutions.co.uk/api/contact", {
        method: "POST",
        headers: { origin: "https://www.1080solutions.co.uk", "content-type": "text/plain" },
        body: "{}",
      }),
      track,
    )
  ).status,
  415,
);
assert.equal(
  (await handleContact(request({ ...payload, message: "x".repeat(25000) }), track)).status,
  413,
);
const malformed = new Request("https://www.1080solutions.co.uk/api/contact", {
  method: "POST",
  headers: { origin: "https://www.1080solutions.co.uk", "content-type": "application/json" },
  body: "{",
});
assert.equal((await handleContact(malformed, track)).status, 400);
assert.equal(deliveries, 0);
assert.equal(
  (await handleContact(request({ ...payload, message: "界".repeat(5000) }), track)).status,
  200,
);
assert.equal(deliveries, 1);
console.log(
  "Contact hardening tests passed: header injection, malformed requests, body limits and Unicode.",
);

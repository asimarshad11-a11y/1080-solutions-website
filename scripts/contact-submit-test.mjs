import assert from "node:assert/strict";
import { submitContact } from "../src/lib/contact-submit.ts";
const data = { name: "Website test", email: "sales@1080solutions.co.uk", message: "Test" };
let calls = 0;
await submitContact(data, async (url, options) => {
  calls++;
  assert.equal(url, "/api/contact");
  assert.equal(options.method, "POST");
  assert.deepEqual(JSON.parse(options.body), data);
  assert.ok(options.signal instanceof AbortSignal);
  return Response.json({ ok: true });
});
assert.equal(calls, 1);
for (const response of [
  new Response("Bad Gateway", { status: 502 }),
  Response.json(null),
  Response.json({ ok: false }),
  Response.json({ ok: true }, { status: 500 }),
]) {
  await assert.rejects(
    submitContact(data, async () => response),
    /could not confirm/,
  );
}
await assert.rejects(
  submitContact(data, async () => new Response("rate limited", { status: 429 })),
  /Too many enquiries/,
);
await assert.rejects(
  submitContact(data, async () =>
    Response.json({ error: "Please check your details." }, { status: 400 }),
  ),
  /Please check your details/,
);
for (const error of [new TypeError("Failed to fetch"), new DOMException("Aborted", "AbortError")]) {
  calls = 0;
  await assert.rejects(
    submitContact(data, async () => {
      calls++;
      throw error;
    }),
    /could not confirm/,
  );
  assert.equal(calls, 1, "Must not retry uncertain submissions");
}
console.log(
  "Contact client tests passed: success, invalid responses, rate limiting and interrupted requests. No email sent.",
);

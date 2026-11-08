const fallback =
  "We could not confirm whether your enquiry was sent. Your details are still here. Please email sales@1080solutions.co.uk or call 0800 772 0012.";

// Do not retry automatically: a lost response does not mean the email was not sent.
export async function submitContact(
  data: Record<string, FormDataEntryValue>,
  send: typeof fetch = fetch,
): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await send("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    if (response.status === 429)
      throw new Error(
        "Too many enquiries have been submitted. Please wait a few minutes, or email sales@1080solutions.co.uk.",
      );
    const result: unknown = await response.json().catch(() => null);
    if (response.ok && result && typeof result === "object" && "ok" in result && result.ok === true)
      return;
    if (
      result &&
      typeof result === "object" &&
      "error" in result &&
      typeof result.error === "string" &&
      result.error.length > 0 &&
      result.error.length < 500
    )
      throw new Error(result.error);
    throw new Error(fallback);
  } catch (error) {
    if (error instanceof TypeError || (error instanceof Error && error.name === "AbortError"))
      throw new Error(fallback);
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

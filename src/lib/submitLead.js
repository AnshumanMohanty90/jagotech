// Sends a lead. When VITE_LEAD_ENDPOINT is set (self-hosted build on Cloudflare), the lead goes to
// that endpoint (a Google Apps Script web app that writes to a Google Sheet and emails the owner).
// Otherwise it goes to the Base44 saveLead function, so the Base44 app keeps working unchanged.
const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT;

export async function submitLead(payload) {
  if (LEAD_ENDPOINT) {
    // text/plain keeps this a simple request, so the browser sends it without a CORS preflight.
    const res = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, site: "jagotech" }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.ok !== true) throw new Error(data.error || "Lead not saved");
    return { data };
  }
  const { base44 } = await import("@/api/base44Client");
  return base44.functions.invoke("saveLead", payload);
}

// Marketplace agents. Facts here must match what the site already states.
export const AGENTS = [
  {
    id: "card-scanner",
    kind: "API + Widget",
    name: "Card Scanner Agent",
    desc: "Extract clean structured records from business cards and IDs straight into your CRM.",
    priceInr: 2.0,
    unit: "scan",
    units: "scans",
    extra: {
      q: "Where do the records go?",
      a: "Into your CRM as clean, structured records, so nobody types card details by hand.",
    },
  },
  {
    id: "document-analysis",
    kind: "API + Widget",
    name: "Document Analysis Agent",
    desc: "Pull clauses, liabilities and terms out of legal contracts, so your team does not review each page by hand.",
    priceInr: 5.0,
    unit: "page",
    units: "pages",
    extra: {
      q: "What does it pull out of a contract?",
      a: "Clauses, liabilities and terms from your legal contracts, returned as structured results.",
    },
  },
  {
    id: "email-parser",
    kind: "API + Widget",
    name: "Email Parser Agent",
    desc: "Turn inbound customer inquiries and purchase orders into ERP and CRM entries.",
    priceInr: 1.0,
    unit: "email",
    units: "emails",
    extra: {
      q: "Which emails does it handle?",
      a: "Inbound customer inquiries and purchase orders. It turns each one into an entry in your ERP or CRM.",
    },
  },
  {
    id: "voice-to-text",
    kind: "API",
    name: "Voice-to-Text Transcription",
    desc: "Transcribe local-language audio into structured summaries and action triggers.",
    priceInr: 3.0,
    unit: "minute",
    units: "minutes of audio",
    extra: {
      q: "What do I get back from the audio?",
      a: "A transcript of local-language audio, turned into a structured summary and action triggers your systems can use.",
    },
  },
  {
    id: "image-analysis",
    kind: "API",
    name: "Image Analysis Agent",
    desc: "Inspect store shelves, warehouse racks and field photos for quality compliance.",
    priceInr: 3.0,
    unit: "image",
    units: "images",
    extra: {
      q: "What photos does it check?",
      a: "Photos of store shelves, warehouse racks and field sites, checked for quality compliance.",
    },
  },
  {
    id: "jasper",
    kind: "Predict model, Zoho CRM native",
    name: "Jasper: Sales Predict Model",
    desc: "Ranks deals by value, chance and urgency, flags stalled pipelines and forecasts close rates.",
    pilot: true,
    extra: {
      q: "What does Jasper rank?",
      a: "Your deals, by value, chance of closing and urgency. It also flags stalled pipelines and forecasts close rates.",
    },
  },
];

export const findAgent = (name) => AGENTS.find((a) => a.name === name || a.id === name);

// FAQs built only from facts the site already states.
export function agentFaqs(agent, priceText) {
  const faqs = [{ q: `What does the ${agent.name.replace(/^Jasper: /, "")} do?`, a: agent.desc }];
  if (agent.pilot) {
    faqs.push({ q: "How is Jasper offered?", a: "As a pilot model for now. Request a pilot and we will set it up with you." });
    faqs.push({ q: "Where does it work?", a: "Inside Zoho CRM, so your sales team sees the ranking where they already work." });
  } else {
    faqs.push({
      q: "How much does it cost?",
      a: `${priceText} per ${agent.unit}. You pay only for the ${agent.units} you use. Prices show in rupees in India and in US dollars elsewhere.`,
    });
    faqs.push({
      q: "How do I add it?",
      a: agent.kind.includes("Widget")
        ? "Connect it to your own system through an API, or add it to your website as a widget."
        : "Connect it to your own system through an API.",
    });
  }
  faqs.push(agent.extra);
  faqs.push(
    agent.pilot
      ? { q: "How do I start?", a: "Select Request a pilot, tell us about your sales pipeline, and we will email you the next steps." }
      : { q: "How do I buy it?", a: `Select Buy, tell us roughly how many ${agent.units} you expect each month, and we will email you the next steps to start.` }
  );
  return faqs;
}

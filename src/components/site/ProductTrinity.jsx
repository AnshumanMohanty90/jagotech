import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Workflow, Radar, BarChart3, ArrowRight, Check } from "lucide-react";
import AskDemo from "@/components/site/AskDemo";
import SectionIntro from "@/components/site/SectionIntro";
import CopyEmphasis from "@/components/site/CopyEmphasis";

const PILLARS = [
  {
    id: "ask",
    label: "Ask",
    tag: "Doc and data retrieval",
    title: "Find answers in data, docs and images.",
    desc: "Search instantly across PDFs, scanned receipts, contracts, spreadsheets and databases. Precise citations, zero manual reading.",
    icon: MessageSquareText,
    accent: "primary",
    features: [
      "Grounded answers with citations, in any language",
      "Works inside WhatsApp, Zoho Cliq and Teams",
      "Reads scanned paper and images, not just clean text",
      "Connects documents, spreadsheets and SQL databases",
    ],
    prompt: "Verify vendor penalty terms against SAP invoice #992.",
    output: "2% late clause applied. Invoice valid (Contract Pg 14).",
    visual: "chat",
  },
  {
    id: "automate",
    label: "Automate",
    tag: "Action execution",
    title: "Execute zero-code actions.",
    desc: "Natural instructions become multi-step actions across Salesforce, Zoho, SAP and internal systems, with no code and a full audit trail.",
    icon: Workflow,
    accent: "violet",
    features: [
      "No-code workflow builder across your apps",
      "Triggers from any connected source",
      "Human review before consequential steps",
      "Replaces multiple automation licences at once",
    ],
    prompt: "Approve PO #441 and notify the vendor on WhatsApp.",
    output: "PO approved in SAP. Notification dispatched.",
    visual: "automate",
  },
  {
    id: "predict",
    label: "Predict",
    tag: "Risk and forecasting",
    title: "Flag risk before it lands.",
    desc: "Customer churn, stalled deals, inventory bottlenecks and budget variances surface automatically, before they cost you.",
    icon: Radar,
    accent: "amber",
    features: [
      "Churn and deal-slip prediction, out of the box",
      "Jasper ranks CRM deals by value, chance and urgency",
      "Inventory and budget variance alerts",
      "Radar alerts reach you on WhatsApp or Cliq",
    ],
    prompt: "Highlight stalled deals with a high risk of slipping this month.",
    output: "3 deals flagged (Jasper score below 0.35). Alert logged.",
    visual: "predict",
  },
  {
    id: "analyze",
    label: "Analyze",
    tag: "Conversational BI",
    title: "Conversational BI on your warehouses.",
    desc: "Query complex data warehouses in natural language. Text-to-SQL executes in milliseconds and charts render on the spot.",
    icon: BarChart3,
    accent: "emerald",
    features: [
      "Natural-language Text-to-SQL queries",
      "Charts and visual summaries generated automatically",
      "Call, document and transcript intelligence",
      "Exports to your existing dashboards",
    ],
    prompt: "Show regional sales performance against target for Q3.",
    output: "SQL executed in 0.04s. Chart created: North +18%, South -4%.",
    visual: "analyze",
  },
];

export default function ProductTrinity() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      const i = PILLARS.findIndex((p) => p.id === id);
      if (i !== -1) setActive(i);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);
  const pillar = PILLARS[active];

  return (
    <section id="ask" className="relative pt-8 sm:pt-12 pb-12 sm:pb-16">
      <div className="absolute inset-0 grid-bg-fine opacity-20 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="03 · Core capabilities"
          title={<>Four pillars. <span className="sm:whitespace-nowrap">One governed suite.</span></>}
        >
          Built for <strong className="copy-focus">non-technical teams</strong>: ask, act, see what is coming,
          and analyze everything, <em className="copy-aside">in plain language.</em>
        </SectionIntro>

        {/* Pillar selector */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {PILLARS.map((p, i) => {
            const PIcon = p.icon;
            const on = i === active;
            return (
              <button
                key={p.id}
                id={p.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`site-choice group relative text-left rounded-2xl border p-4 transition-all duration-300 ${
                  on
                    ? "border-primary/50 bg-card/80 backdrop-blur glow-cyan"
                    : "border-border bg-card/40 hover:border-border/80"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`grid place-items-center w-9 h-9 rounded-lg border transition-colors ${
                      on ? "border-primary/40 bg-primary/10" : "border-border bg-background/60"
                    }`}
                  >
                    <PIcon className={`w-5 h-5 ${on ? "text-primary" : "text-muted-foreground"}`} />
                  </span>
                  <span className={`font-heading text-base font-semibold ${on ? "text-foreground" : "text-muted-foreground"}`}>
                    {p.label}
                  </span>
                </div>
                <p className="mt-3 hidden sm:block text-sm text-muted-foreground leading-relaxed">
                  {p.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active pillar detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-6 grid lg:grid-cols-2 gap-6"
          >
            {/* copy */}
            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur p-7 sm:p-9">
              <span className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">{pillar.tag}</span>
              <h3 className="mt-4 font-heading text-2xl font-semibold leading-snug tracking-tight">{pillar.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                <CopyEmphasis text={pillar.desc} bold={["Precise citations", "multi-step actions", "surface automatically", "natural language"]} accent={["before they cost you"]} italic={["zero manual reading", "with no code"]} />
              </p>
              <ul className="mt-6 space-y-3">
                {pillar.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base leading-relaxed">
                    <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Prompt / output pair */}
              <div className="mt-6 rounded-xl border border-border bg-background/70 p-4 font-body text-sm leading-relaxed">
                <div className="text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">Employee prompt</div>
                <div className="mt-1 text-foreground/90">"{pillar.prompt}"</div>
                <div className="mt-3 text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">Jago output</div>
                <div className="mt-1 text-primary">{pillar.output}</div>
              </div>

              <a
                href="#contact"
                className="site-cta-secondary group mt-6 gap-2 px-4 py-2.5 rounded-xl text-sm"
              >
                Start your trial
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* visual */}
            <div className="relative rounded-3xl border border-border bg-card/40 backdrop-blur overflow-hidden min-h-[22rem]">
              <PillarVisual pillar={pillar} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PillarVisual({ pillar }) {
  if (pillar.visual === "chat") {
    return (
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-center gap-4 overflow-y-auto">
        <div className="absolute inset-0 grid-bg-fine opacity-20" />
        <div className="relative ml-auto max-w-[78%] rounded-2xl rounded-br-sm bg-secondary/70 border border-border px-4 py-3 text-base leading-relaxed">
          Verify the penalty terms on invoice #992 against the contract.
        </div>
        <div className="relative mr-auto max-w-[88%] rounded-2xl rounded-bl-sm bg-primary/10 border border-primary/30 px-4 py-3 text-base leading-relaxed">
          <span className="font-mono text-xs leading-relaxed text-primary block mb-1">jago · ask → sap + docs</span>
          2% late-delivery clause applies. Invoice valid. Cited from contract, page 14.
        </div>
        <div className="relative mt-1">
          <AskDemo placeholder="Reply in Hindi…" language="hi" />
        </div>
      </div>
    );
  }
  if (pillar.visual === "automate") {
    return (
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6ac3fb313d8c3f935e09f7df/c0c27cef2_generated_be24e300.jpg"
          alt="Translucent glass modules connecting via glowing energy threads"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs leading-relaxed text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" /> flow · running
          </div>
          <span className="font-mono text-xs leading-relaxed text-primary">3 steps · 0 code</span>
        </div>
      </div>
    );
  }
  if (pillar.visual === "predict") {
    return (
      <div className="absolute inset-0 p-6 flex flex-col justify-center gap-3">
        <div className="absolute inset-0 grid-bg-fine opacity-20" />
        <div className="relative rounded-2xl border border-red-400/30 bg-red-500/5 px-4 py-3">
          <div className="font-mono text-xs leading-relaxed uppercase tracking-wide text-red-400">Radar anomaly alert</div>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">
            Division West EBITDA margin down 3.2% over the last 7 days against baseline.
          </p>
        </div>
        <div className="relative ml-auto max-w-[78%] rounded-2xl rounded-br-sm bg-secondary/70 border border-border px-4 py-3 text-base leading-relaxed">
          Which contracts caused this drop?
        </div>
        <div className="relative mr-auto max-w-[88%] rounded-2xl rounded-bl-sm bg-primary/10 border border-primary/30 px-4 py-3 text-base leading-relaxed">
          <span className="font-mono text-xs leading-relaxed text-primary block mb-1">jago · predict → ask</span>
          Vendor Alpha resin price up 11%. Two fixed-price contracts not indexed to inflation.
          Renegotiate before the Q4 freeze.
        </div>
        <div className="relative inline-flex items-center gap-2 font-mono text-xs leading-relaxed text-emerald">
          <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" /> margin leak caught · profit protected
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0">
      <img
        src="https://media.base44.com/images/public/6ac3fb313d8c3f935e09f7df/6f1c7edfc_generated_aa8b4735.jpg"
        alt="Data refraction through a crystalline prism"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
        {[
          { l: "SQL time", v: "0.04s", c: "text-emerald" },
          { l: "North", v: "+18%", c: "text-primary" },
          { l: "South", v: "-4%", c: "text-red-400" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-card/70 backdrop-blur px-3 py-2.5">
            <div className="font-mono text-xs leading-relaxed text-muted-foreground">{s.l}</div>
            <div className={`font-heading text-lg font-semibold ${s.c}`}>{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
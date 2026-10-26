import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Accordion from "@/components/site/Accordion";
import AgentArt from "@/components/site/AgentArt";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useCurrency, formatPrice, CurrencyToggle } from "@/lib/currency";
import { AGENTS, agentFaqs } from "@/components/site/marketplaceData";

const buyHref = (a) => `/contact?intent=buy&agent=${encodeURIComponent(a.id)}`;
const buyLabel = (a) => (a.pilot ? "Request a pilot" : "Buy");

function BuyButton({ agent, className = "" }) {
  return (
    <Link to={buyHref(agent)} className={`site-cta-primary rounded-xl px-5 py-2.5 text-sm ${className}`}>
      {buyLabel(agent)}
    </Link>
  );
}

export default function Marketplace() {
  const { currency, rate } = useCurrency();
  const [panel, setPanel] = useState(null); // { agent, type: "video" | "faq" }
  const triggerRef = useRef(null);
  const openPanel = (e, agent, type) => {
    triggerRef.current = e.currentTarget;
    setPanel({ agent, type });
  };
  const priceText = (a) => (a.pilot ? "Pilot model" : formatPrice(a.priceInr, currency, rate, 2));
  const open = panel?.agent;

  return (
    <Reveal id="marketplace" className="relative site-section-alt">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="site-label">{AGENTS.length} agents, priced per use</p>
          <CurrencyToggle />
        </div>

        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((a) => (
            <li key={a.id} className="agent-card flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[16/9] w-full border-b border-border">
                <AgentArt id={a.id} />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm font-semibold text-primary">{a.kind}</p>
                <h2 className="mt-1.5 font-heading text-xl font-semibold leading-snug text-balance">{a.name}</h2>
                <p className="mt-2 text-base leading-relaxed text-pretty text-foreground/90">{a.desc}</p>
                <div className="mt-auto pt-5">
                  <p className="font-heading text-lg font-semibold">
                    {a.pilot ? "Pilot model" : <>{priceText(a)} <span className="whitespace-nowrap">per {a.unit}</span></>}
                  </p>
                  <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-2.5">
                    <BuyButton agent={a} className="col-span-2 w-full" />
                    <button
                      type="button"
                      onClick={(e) => openPanel(e, a, "video")}
                      className="site-cta-secondary min-w-0 justify-center gap-2 rounded-xl px-3 py-2.5 text-sm"
                    >
                      <Play aria-hidden="true" className="h-4 w-4 shrink-0" />
                      <span className="whitespace-nowrap">See how it works</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => openPanel(e, a, "faq")}
                      className="site-cta-secondary rounded-xl px-5 py-2.5 text-sm"
                    >
                      FAQs
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!panel} onOpenChange={(v) => !v && setPanel(null)}>
        <DialogContent
          onCloseAutoFocus={(e) => {
            if (triggerRef.current) {
              e.preventDefault();
              triggerRef.current.focus();
            }
          }}
          className="focus:outline-none max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border-border bg-card p-6 sm:p-8">
          {open && panel.type === "video" && (
            <>
              <DialogTitle className="pr-8 font-heading text-xl font-semibold leading-snug">
                {open.name}: how it works
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-foreground/90">
                A short explainer video for this agent is on its way.
              </DialogDescription>
              <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-xl border border-border">
                <AgentArt id={open.id} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/75">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/70 bg-background/80">
                    <Play aria-hidden="true" className="ml-0.5 h-6 w-6 text-primary" />
                  </span>
                  <span className="font-heading text-base font-semibold">Video coming soon</span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2.5">
                <BuyButton agent={open} />
                <button type="button" onClick={() => setPanel({ agent: open, type: "faq" })} className="site-cta-secondary rounded-xl px-4 py-2.5 text-sm">
                  Read the FAQs
                </button>
              </div>
            </>
          )}
          {open && panel.type === "faq" && (
            <>
              <DialogTitle className="pr-8 font-heading text-xl font-semibold leading-snug">
                {open.name}: FAQs
              </DialogTitle>
              <DialogDescription className="sr-only">Common questions about this agent</DialogDescription>
              <Accordion
                firstOpen
                items={agentFaqs(open, priceText(open)).map((f) => ({
                  key: f.q,
                  title: f.q,
                  body: <p className="text-base leading-relaxed text-pretty">{f.a}</p>,
                }))}
              />
              <div className="mt-2 flex flex-wrap gap-2.5">
                <BuyButton agent={open} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Reveal>
  );
}

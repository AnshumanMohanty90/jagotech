import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Search, X, LayoutGrid, List, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
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

// Catalogue facts for filtering, per agent. Images are the card artwork; Jasper uses an icon tile.
const META = {
  "card-scanner": { group: "Productivity", category: "Productivity", color: "#f5f7fa", image: "/marketplace/card-scanner.webp" },
  "document-analysis": { group: "Productivity", category: "Vision & Documents", color: "#00f2ff", image: "/marketplace/document-analysis.webp" },
  "email-parser": { group: "Productivity", category: "Email & Parsing", color: "#60a5fa", image: "/marketplace/email-parser.webp" },
  "voice-to-text": { group: "Productivity", category: "Voice & Audio", color: "#a78bfa", image: "/marketplace/voice-to-text.webp" },
  "image-analysis": { group: "Productivity", category: "Image & Visual", color: "#34d399", image: "/marketplace/image-analysis.webp" },
  jasper: { group: "Sales", category: "Sales & Prediction", color: "#f59e0b", image: null },
};
// Category headers in order; sub-categories sit under their header.
const GROUPS = ["Productivity", "Marketing", "Sales", "Customer service"];
const SUBS = { Productivity: ["Vision & Documents", "Email & Parsing", "Voice & Audio", "Image & Visual"] };

function CategoryFilter({ groups, cats, toggleGroup, toggleCat, counts }) {
  const [open, setOpen] = useState(true);
  const row = (label, checked, onChange, n, sub) => (
    <label
      key={label}
      className={`flex min-h-[30px] items-center gap-2 text-[13px] ${sub ? "pl-6" : "font-semibold text-foreground"} ${
        n ? "cursor-pointer" : "cursor-not-allowed opacity-50"
      } ${sub ? "text-[#c1cbd7]" : ""}`}
    >
      <input type="checkbox" checked={checked} onChange={onChange} disabled={!n} className="h-[18px] w-[18px] shrink-0 accent-[#00f2ff]" />
      <span className="site-line min-w-0 flex-1">{label}</span>
      <span className="text-xs font-normal text-[#c1cbd7]">{n}</span>
    </label>
  );
  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="site-choice flex h-8 w-full items-center justify-between font-ui text-[13px] font-semibold text-foreground"
      >
        Category
        {open ? <ChevronUp aria-hidden="true" className="h-4 w-4" /> : <ChevronDown aria-hidden="true" className="h-4 w-4" />}
      </button>
      {open &&
        GROUPS.map((g) => (
          <div key={g} className="flex flex-col">
            {row(g, groups.includes(g), () => toggleGroup(g), counts[g] || 0, false)}
            {(SUBS[g] || []).map((c) => row(c, groups.includes(g) || cats.includes(c), () => toggleCat(c, g), counts[c] || 0, true))}
          </div>
        ))}
    </div>
  );
}

const POPULAR = ["card scanner", "documents", "email parsing", "transcribe", "image analysis", "sales predict"];
const SORTS = [
  ["popular", "Most popular"],
  ["low", "Price: low to high"],
  ["high", "Price: high to low"],
  ["name", "Name: A to Z"],
];

const tagsOf = (a) => (a.pilot ? ["Predict model", "Zoho CRM"] : a.kind.split("+").map((t) => t.trim()));
const worksOf = (a) => {
  const w = [];
  if (a.kind.includes("API")) w.push("API");
  if (a.kind.includes("Widget")) w.push("Website widget");
  if (a.kind.includes("Zoho")) w.push("Zoho native");
  return w;
};
const statusOf = (a) => (a.pilot ? "Pilot" : "Live now");

function FilterGroup({ title, options, selected, toggle, counts }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="site-choice flex h-8 w-full items-center justify-between font-ui text-[13px] font-semibold text-foreground"
      >
        {title}
        {open ? <ChevronUp aria-hidden="true" className="h-4 w-4" /> : <ChevronDown aria-hidden="true" className="h-4 w-4" />}
      </button>
      {open &&
        options.map((o) => (
          <label key={o} className="flex min-h-[30px] cursor-pointer items-center gap-2 text-[13px] text-[#c1cbd7]">
            <input
              type="checkbox"
              checked={selected.includes(o)}
              onChange={() => toggle(o)}
              className="h-[18px] w-[18px] shrink-0 accent-[#00f2ff]"
            />
            <span className="site-line min-w-0 flex-1">{o}</span>
            <span className="text-xs">{counts[o] || 0}</span>
          </label>
        ))}
    </div>
  );
}

export default function Marketplace() {
  const { currency, rate } = useCurrency();
  const [panel, setPanel] = useState(null); // { agent, type: "video" | "faq" }
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState([]);
  const [groups, setGroups] = useState([]);
  const [works, setWorks] = useState([]);
  const [avail, setAvail] = useState([]);
  const [sort, setSort] = useState("popular");
  const [view, setView] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const triggerRef = useRef(null);
  const openPanel = (e, agent, type) => {
    triggerRef.current = e.currentTarget;
    setPanel({ agent, type });
  };
  const priceText = (a) => (a.pilot ? "Pilot model" : formatPrice(a.priceInr, currency, rate, 2));
  const open = panel?.agent;
  const toggle = (set) => (v) => set((cur) => (cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]));

  const counts = useMemo(() => {
    const c = {};
    AGENTS.forEach((a) => {
      [...new Set([META[a.id].group, META[a.id].category, ...worksOf(a), statusOf(a)])].forEach((k) => (c[k] = (c[k] || 0) + 1));
    });
    return c;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = AGENTS.filter((a) => {
      const meta = META[a.id];
      if ((cats.length || groups.length) && !groups.includes(meta.group) && !cats.includes(meta.category)) return false;
      if (works.length && !works.some((w) => worksOf(a).includes(w))) return false;
      if (avail.length && !avail.includes(statusOf(a))) return false;
      if (q && !`${a.name} ${a.desc} ${meta.group} ${meta.category} ${a.kind}`.toLowerCase().includes(q)) return false;
      return true;
    });
    if (sort === "low") list = [...list].sort((a, b) => (a.priceInr ?? Infinity) - (b.priceInr ?? Infinity));
    if (sort === "high") list = [...list].sort((a, b) => (b.priceInr ?? -1) - (a.priceInr ?? -1));
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, cats, groups, works, avail, sort]);

  const clearAll = () => {
    setQuery("");
    setCats([]);
    setGroups([]);
    setWorks([]);
    setAvail([]);
  };
  const shortcuts = [
    { label: "Productivity", group: true, color: "#00f2ff" },
    { label: "Email & Parsing", group: false, color: "#60a5fa" },
    { label: "Sales", group: true, color: "#f59e0b" },
  ];

  return (
    <Reveal id="marketplace" className="relative site-section-alt">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:gap-8">
        {/* Filters */}
        <aside aria-label="Filters" className="flex w-full shrink-0 flex-col gap-5 lg:w-[238px] lg:pr-5">
          <div className="flex min-h-[44px] items-center justify-between lg:min-h-[34px]">
            <p className="site-line font-ui text-base font-bold text-foreground">Filters</p>
            <div className="flex items-center gap-4">
              <button type="button" onClick={clearAll} className="site-choice text-[13px] text-primary">
                Clear all
              </button>
              <button
                type="button"
                onClick={() => setShowFilters((v) => !v)}
                aria-expanded={showFilters}
                className="site-choice text-[13px] text-[#c1cbd7] lg:hidden"
              >
                {showFilters ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className={`${showFilters ? "flex" : "hidden"} flex-col gap-5 lg:flex`}>
            <CategoryFilter groups={groups} cats={cats} toggleGroup={toggle(setGroups)} toggleCat={(c, g) => {
              if (groups.includes(g)) {
                setGroups((cur) => cur.filter((x) => x !== g));
                setCats((cur) => [...cur.filter((x) => !SUBS[g].includes(x)), ...SUBS[g].filter((x) => x !== c)]);
              } else toggle(setCats)(c);
            }} counts={counts} />
            <div className="h-px bg-[#2f3641]" />
            <FilterGroup title="Works with" options={["API", "Website widget", "Zoho native"]} selected={works} toggle={toggle(setWorks)} counts={counts} />
            <div className="h-px bg-[#2f3641]" />
            <FilterGroup title="Availability" options={["Live now", "Pilot"]} selected={avail} toggle={toggle(setAvail)} counts={counts} />
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-8">
          {/* Intro and search */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <p className="site-line font-ui text-[13px] font-semibold text-primary">Jago Marketplace</p>
              <h1 className="font-heading text-balance !text-[32px] sm:!text-[46px] !leading-[1.15]">
                Pick a single agent. Pay only as you use.
              </h1>
              <p className="site-line text-base leading-6 text-[#c1cbd7]">
                Add one agent to your website or system, pay per use, and expand when it proves its worth.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <form
                role="search"
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 rounded-xl border border-[#2f3641] bg-[#0f1318] p-1.5 focus-within:border-primary"
              >
                <Search aria-hidden="true" className="ml-3 h-5 w-5 shrink-0 text-[#c1cbd7]" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the Marketplace"
                  aria-label="Search the Marketplace"
                  className="h-12 min-w-0 flex-1 bg-transparent px-2 text-base text-foreground placeholder:text-[#565e5e] focus-visible:!outline-none"
                />
                {query && (
                  <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="site-choice p-2 text-[#c1cbd7]">
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button type="submit" className="h-11 rounded-[10px] bg-primary px-5 font-ui text-sm font-semibold text-primary-foreground">
                  Search
                </button>
              </form>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[13px] text-[#c1cbd7]">Popular:</span>
                {POPULAR.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setQuery(p)}
                    className="rounded-full border border-[#2f3641] bg-[#0f1318] px-3 py-1 font-ui text-sm font-semibold text-[#c1cbd7] hover:text-foreground"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {shortcuts.map(({ label: c, group, color }) => {
                const meta = { color };
                const n = counts[c] || 0;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setGroups(group ? [c] : []);
                      setCats(group ? [] : [c]);
                    }}
                    className="site-choice flex h-20 items-center gap-3.5 rounded-xl border bg-[#131b20] p-[18px] text-left"
                    style={{ borderColor: `${meta.color}33` }}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="site-line block font-ui text-[13px] font-semibold text-foreground">{c}</span>
                      <span className="block text-xs text-[#c1cbd7]">{n} agent{n === 1 ? "" : "s"}</span>
                    </span>
                    <span aria-hidden="true" style={{ color: meta.color }}>→</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results header */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h2 className="font-heading !text-[22px] !leading-[30px]">Explore AI agents</h2>
              <span className="text-[13px] text-[#c1cbd7]">{results.length} result{results.length === 1 ? "" : "s"}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <CurrencyToggle />
              <label className="flex items-center gap-2 text-[13px] text-[#c1cbd7]">
                Sort by
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-10 rounded-md border border-[#2f3641] bg-[#0f1318] px-3 text-sm text-foreground"
                >
                  {SORTS.map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </select>
              </label>
              <div className="flex gap-0.5 rounded-lg border border-[#2f3641] bg-[#0f1318] p-[3px]" role="group" aria-label="Layout">
                {[["grid", LayoutGrid, "Grid view"], ["list", List, "List view"]].map(([v, Icon, label]) => (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={view === v}
                    aria-label={label}
                    onClick={() => setView(v)}
                    className={`flex h-8 w-9 items-center justify-center rounded-md ${view === v ? "bg-[rgba(0,242,255,0.1)] text-primary" : "text-[#c1cbd7]"}`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Catalogue */}
          {results.length === 0 ? (
            <p className="site-line py-10 text-center text-base text-[#c1cbd7]">
              No agents match. <button type="button" onClick={clearAll} className="text-primary underline">Clear filters</button>
            </p>
          ) : (
            <ul className={view === "grid" ? "grid gap-5 sm:grid-cols-2 xl:grid-cols-3" : "flex flex-col gap-4"}>
              {results.map((a) => {
                const meta = META[a.id];
                const list = view === "list";
                return (
                  <li
                    key={a.id}
                    className={`agent-card flex min-w-0 overflow-hidden rounded-2xl border border-[#2f3641] bg-[#0f1318] ${list ? "flex-col sm:flex-row" : "flex-col"}`}
                  >
                    {a.pilot && !list && <div className="h-[3px] w-full bg-gradient-to-r from-[#00f2ff] to-[#60a5fa]" />}
                    <div className={`flex shrink-0 items-center justify-center overflow-hidden bg-[#131b20] ${list ? "h-[180px] sm:h-auto sm:w-[280px]" : "h-[200px] w-full"}`}>
                      {meta.image ? (
                        <img src={meta.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                      ) : (
                        <span className="flex h-20 w-20 items-center justify-center rounded-[20px] bg-[rgba(245,158,11,0.1)]">
                          <TrendingUp aria-hidden="true" className="h-10 w-10 text-[#f59e0b]" />
                        </span>
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-3 p-6">
                      <p className="site-line flex items-center gap-1.5 text-[11px]">
                        <span className="font-ui font-semibold" style={{ color: meta.color }}>{meta.category}</span>
                        <span className="text-[#2f3641]">·</span>
                        <span className="text-[#c1cbd7]">{a.pilot ? "Zoho CRM native" : "Live now"}</span>
                      </p>
                      <h3 className="!font-ui !text-lg !font-bold !leading-[1.375] text-balance text-foreground">{a.name}</h3>
                      <p className="site-line text-[13px] leading-5 text-[#c1cbd7] text-pretty">{a.desc}</p>
                      <div className="mt-auto flex flex-col gap-3 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {tagsOf(a).map((t) => (
                            <span
                              key={t}
                              className="rounded-full px-2 py-[3px] font-ui text-[11px] font-medium"
                              style={{ color: meta.color === "#f5f7fa" ? "#00f2ff" : meta.color, backgroundColor: "rgba(0,242,255,0.1)" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <p className="site-line whitespace-nowrap">
                            {a.pilot ? (
                              <span className="font-ui text-base font-bold text-[#f59e0b]">Pilot model</span>
                            ) : (
                              <>
                                <span className="font-heading text-[22px] font-bold text-foreground">{priceText(a)}</span>
                                <span className="text-[13px] text-[#c1cbd7]"> / {a.unit}</span>
                              </>
                            )}
                          </p>
                          <Link
                            to={buyHref(a)}
                            className={
                              a.pilot
                                ? "inline-flex h-9 items-center rounded-lg border border-primary px-4 font-ui text-[13px] font-semibold text-primary"
                                : "inline-flex h-9 items-center rounded-lg bg-primary px-4 font-ui text-[13px] font-semibold text-primary-foreground"
                            }
                          >
                            {a.pilot ? "Request a pilot" : "Buy now"}
                          </Link>
                        </div>
                        <div className="flex gap-4 text-[13px]">
                          <button type="button" onClick={(e) => openPanel(e, a, "video")} className="site-choice inline-flex min-h-[44px] items-center gap-1.5 text-[#c1cbd7] hover:text-primary sm:min-h-[28px]">
                            <Play aria-hidden="true" className="h-3.5 w-3.5" /> See how it works
                          </button>
                          <button type="button" onClick={(e) => openPanel(e, a, "faq")} className="site-choice inline-flex min-h-[44px] items-center text-[#c1cbd7] hover:text-primary sm:min-h-[28px]">
                            FAQs
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="text-center text-[13px] text-[#c1cbd7]">
            Showing {results.length === AGENTS.length ? `all ${AGENTS.length}` : `${results.length} of ${AGENTS.length}`} agents
          </p>
        </div>
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

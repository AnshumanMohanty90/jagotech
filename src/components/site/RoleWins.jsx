import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROLES, CATEGORIES } from "@/components/site/roleWinsData";
import Reveal from "@/components/site/Reveal";
import SectionIntro from "@/components/site/SectionIntro";

// "Ask · Predict · Analyze" -> "Uses Ask, Predict and Analyze"
const usesText = (modules) => {
  const mods = modules
    .split("·")
    .map((m) => m.trim())
    .filter(Boolean);
  if (mods.length === 0) return "";
  if (mods.length === 1) return `Uses ${mods[0]}`;
  return `Uses ${mods.slice(0, -1).join(", ")} and ${mods[mods.length - 1]}`;
};

export default function RoleWins({ withIntro = true, tinted = false }) {
  const [cat, setCat] = useState("all");
  const [activeId, setActiveId] = useState("ceo");

  const filtered = ROLES.filter((r) => cat === "all" || r.category === cat);
  const active = filtered.find((r) => r.id === activeId) || filtered[0];

  const pickCat = (id) => {
    setCat(id);
    const next = ROLES.filter((r) => id === "all" || r.category === id);
    if (!next.some((r) => r.id === activeId)) setActiveId(next[0].id);
  };

  return (
    <Reveal id="solutions" className={`relative ${tinted ? "site-section-alt" : ""}`}>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {withIntro && (
          <SectionIntro eyebrow="Jago in your role" title="How teams use Jago">
            <span className="text-sm">Examples of everyday use.</span>
          </SectionIntro>
        )}
        {!withIntro && <h2 className="sr-only">Everyday use by role</h2>}

        <div className={`${withIntro ? "mt-6 " : ""}flex flex-wrap gap-x-5 gap-y-2`}>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => pickCat(c.id)}
              aria-pressed={cat === c.id}
              className={`site-choice rounded-lg px-2 py-2 text-sm font-semibold min-h-[44px] transition-colors ${
                cat === c.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,260px),minmax(0,1fr)] lg:gap-12">
          {/* Role list */}
          <div className="min-w-0">
            <div className="flex flex-col max-h-[360px] overflow-y-auto pr-1" role="listbox" aria-label="Roles">
              {filtered.map((r) => {
                const on = r.id === active.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    role="option"
                    aria-selected={on}
                    onClick={() => setActiveId(r.id)}
                    className={`site-row site-choice flex items-center gap-3 rounded-lg px-3 py-2.5 text-left min-h-[44px] transition-colors ${
                      on ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-5 w-1 rounded-full shrink-0 transition-colors ${on ? "bg-primary" : "bg-transparent"}`}
                    />
                    <span className="text-sm sm:text-base font-medium leading-snug">{r.role}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Before and With Jago, shown together */}
          <div className="min-w-0 lg:pt-1.5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-heading text-2xl font-semibold leading-snug text-balance">{active.role}</h3>
              <span className="text-[16px] text-muted-foreground">{usesText(active.modules)}</span>
            </div>

            <div className="mt-5 space-y-6">
              <div>
                <p className="site-label">Before</p>
                <p className="mt-2 text-xl leading-relaxed text-pretty text-slate-400">{active.before}</p>
              </div>
              <div>
                <p className="site-label">With Jago</p>
                <p className="mt-2 text-xl leading-relaxed text-pretty text-foreground">{active.with}</p>
              </div>
            </div>

            <Link
              to="/contact?intent=trial"
              className="site-cta-primary mt-6 px-5 py-3 rounded-xl"
            >
              Try it free for a week
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
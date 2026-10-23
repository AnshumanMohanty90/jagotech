import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROLES, CATEGORIES } from "@/components/site/roleWinsData";
import SectionIntro from "@/components/site/SectionIntro";

export default function RoleWins() {
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
    <section id="solutions" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -left-32 top-1/3 w-[30rem] h-[30rem] rounded-full bg-emerald/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Jago in your role" title="How teams use Jago">
          <span className="text-sm">Examples of everyday use.</span>
        </SectionIntro>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => pickCat(c.id)}
              className={`site-choice px-3.5 py-2 rounded-full text-sm border transition-colors ${
                cat === c.id
                  ? "border-primary/50 bg-primary/10 text-foreground"
                  : "border-border bg-card/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filtered.map((r) => {
            const on = r.id === active.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveId(r.id)}
                className={`site-choice relative px-3.5 py-2 rounded-xl text-sm border transition-all ${
                  on
                    ? "border-primary/60 bg-card/80 text-foreground glow-cyan"
                    : "border-border bg-card/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {r.role}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-2xl font-semibold">{active.role}</h3>
                <span className="font-mono text-xs leading-relaxed text-muted-foreground">{active.modules}</span>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-background/60 p-4">
                  <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">Before</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{active.before}</p>
                </div>
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <p className="font-mono text-xs leading-relaxed uppercase tracking-wide text-primary">With Jago</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{active.with}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
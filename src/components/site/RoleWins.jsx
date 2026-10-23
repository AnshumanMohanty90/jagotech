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
    <section id="solutions" className="relative site-section">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro eyebrow="Jago in your role" title="How teams use Jago">
          <span className="text-sm">Examples of everyday use.</span>
        </SectionIntro>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => pickCat(c.id)}
              className={`site-choice pb-1 border-b-2 text-sm font-medium transition-colors ${
                cat === c.id
                  ? "text-primary border-primary"
                  : "text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {filtered.map((r) => {
            const on = r.id === active.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveId(r.id)}
                className={`site-choice pb-1 border-b-2 text-sm transition-colors ${
                  on
                    ? "text-foreground border-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
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
            <div className="border-t border-border pt-6 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-heading text-2xl font-semibold leading-snug text-balance">{active.role}</h3>
                <span className="font-mono text-xs leading-relaxed text-muted-foreground">{active.modules}</span>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="min-w-0">
                  <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">Before</p>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">{active.before}</p>
                </div>
                <div className="min-w-0 sm:border-l sm:border-border sm:pl-6">
                  <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-primary">With Jago</p>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/90 text-pretty">{active.with}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
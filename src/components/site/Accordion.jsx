import React, { useState } from "react";
import { Plus } from "lucide-react";

// Accessible accordion: one line visible, click to open the detail.
export default function Accordion({ items, firstOpen = true, className = "", variant = "list" }) {
  const card = variant === "card";
  const [open, setOpen] = useState(firstOpen ? 0 : -1);

  return (
    <div className={`${className} ${card ? "flex flex-col gap-3" : ""}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.key || i}
            id={item.anchorId}
            className={`min-w-0 scroll-mt-24 ${card ? "rounded-2xl border border-[#1f2937] bg-[#11161c] p-5" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`site-choice flex w-full items-center justify-between gap-4 rounded-lg text-left min-h-[44px] ${
                card ? "" : "site-row px-2 py-3.5"
              }`}
            >
              <span
                className={
                  card
                    ? "font-ui text-lg font-semibold leading-7 text-foreground"
                    : "font-heading text-lg sm:text-xl font-semibold leading-snug text-balance"
                }
              >
                {item.title}
              </span>
              <Plus
                aria-hidden="true"
                className={`w-5 h-5 shrink-0 text-primary transition-transform duration-150 ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            {isOpen && (
              <div className={`min-w-0 ${card ? "pt-3" : "px-2 pb-6 pt-1"}`}>{item.body}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
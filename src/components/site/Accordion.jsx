import React, { useState } from "react";
import { Plus } from "lucide-react";

// Accessible accordion: one line visible, click to open the detail.
export default function Accordion({ items, firstOpen = true, className = "" }) {
  const [open, setOpen] = useState(firstOpen ? 0 : -1);

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.key || i} id={item.anchorId} className="min-w-0 scroll-mt-24">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="site-row site-choice flex w-full items-center justify-between gap-4 rounded-lg px-2 py-3.5 text-left min-h-[44px]"
            >
              <span className="font-heading text-lg sm:text-xl font-semibold leading-snug text-balance">
                {item.title}
              </span>
              <Plus
                aria-hidden="true"
                className={`w-5 h-5 shrink-0 text-primary transition-transform duration-150 ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-2 pb-6 pt-1 min-w-0">{item.body}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
import React from "react";
import Logo from "@/components/site/Logo";

const COLS = [
  {
    title: "Products",
    links: [
      { label: "What Jago does", href: "/#how" },
      { label: "Solutions", href: "/#solutions" },
      { label: "Marketplace", href: "/#marketplace" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Solutions", href: "/#solutions" },
      { label: "Security", href: "/#trust" },
      { label: "Start the trial", href: "/#contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "/#solutions" },
      { label: "Banking and Insurance", href: "/#solutions" },
      { label: "Retail and E-commerce", href: "/#solutions" },
      { label: "Healthcare", href: "/#solutions" },
      { label: "Logistics", href: "/#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#how" },
      { label: "Contact", href: "/#contact" },
      { label: "Trust", href: "/#trust" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-block">
              <Logo className="h-9 w-auto" />
            </a>
            <p className="mt-4 text-base text-muted-foreground max-w-sm leading-relaxed">
              An <strong className="copy-focus">enterprise AI suite</strong> that asks, automates and analyzes across
              your data, <em className="copy-aside">documents, audio and video.</em>
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald/30 bg-emerald/5">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span className="font-mono text-xs leading-relaxed text-emerald">Systems nominal · AI ready</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            © {new Date().getFullYear()} Jago AI. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#trust" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
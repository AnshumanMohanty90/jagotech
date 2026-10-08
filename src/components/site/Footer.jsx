import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/site/Logo";

const COLS = [
  {
    title: "Products",
    links: [
      { label: "Marketplace", href: "/marketplace" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform#overview" },
      { label: "AI Agents", href: "/platform#agents" },
      { label: "Capabilities", href: "/platform#capabilities" },
      { label: "Integrations", href: "/platform#integrations" },
      { label: "Governance & Security", href: "/platform#security" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "By Industry", href: "/solutions#industries" },
      { label: "By Use Case", href: "/solutions#use-cases" },
      { label: "By User", href: "/solutions#by-user" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/resources#blogs" },
      { label: "Guides", href: "/resources#guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#how" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <Link to="/#top" className="inline-block">
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="mt-4 text-base text-muted-foreground max-w-sm leading-relaxed">
              An <strong className="copy-focus">enterprise AI suite</strong> that asks, automates and analyzes across
              your data, <em className="copy-aside">documents, audio and video.</em>
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                        {l.label}
                      </Link>
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
        </div>
      </div>
    </footer>
  );
}
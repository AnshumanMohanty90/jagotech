import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/site/Logo";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Ask", href: "/platform#ask" },
      { label: "Automate", href: "/platform#automate" },
      { label: "Analyze", href: "/platform#analyze" },
      { label: "Predict", href: "/platform#predict" },
      { label: "JShield", href: "https://jshield.ai", external: true },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "By industry", href: "/industries" },
      { label: "By role", href: "/role-wins" },
      { label: "By use case", href: "/solutions#use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Customers", href: "/customers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources#blogs" },
      { label: "Guides", href: "/resources#guides" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer({ logoVariant }) {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <Link to="/#top" className="inline-block">
              <Logo variant={logoVariant} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 text-base text-muted-foreground max-w-sm leading-relaxed">
              Jago AI helps Indian companies put AI to work safely:{" "}
              <strong className="copy-focus">ask, automate, analyze and predict</strong> across data,
              documents and voice, <em className="copy-aside">with data protection built in.</em>{" "}
              Bengaluru, India.
            </p>
            <a
              href="mailto:contact@jagoai.com"
              className="mt-3 inline-block text-sm text-primary hover:underline underline-offset-4 transition-colors"
            >
              contact@jagoai.com
            </a>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-xs leading-relaxed uppercase tracking-wide text-muted-foreground">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-foreground/80 hover:text-primary transition-colors"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link to={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            © 2026 Jago AI · Part of the Jago AI platform with{" "}
            <a
              href="https://jshield.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4 transition-colors"
            >
              JShield
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
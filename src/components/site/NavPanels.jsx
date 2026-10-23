import React from "react";
import { Link } from "react-router-dom";

const renderMenuLink = (l, closeMenu, compact = false) =>
  l.external ? (
    <a
      key={l.label}
      href={l.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeMenu}
      className="block rounded-lg px-2.5 py-2 hover:bg-secondary/60 transition-colors"
    >
      <span className="block text-sm font-medium text-foreground/90">{l.label}</span>
      {l.desc && (
        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground/80">{l.desc}</span>
      )}
    </a>
  ) : (
    <Link
      key={l.label}
      to={l.href}
      onClick={closeMenu}
      className={
        compact
          ? "block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 hover:bg-secondary/60 transition-colors"
          : "block rounded-lg px-2.5 py-2 hover:bg-secondary/60 transition-colors"
      }
    >
      {!compact && <span className="block text-sm font-medium text-foreground/90">{l.label}</span>}
      {compact ? (
        l.label
      ) : (
        l.desc && (
          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground/80">{l.desc}</span>
        )
      )}
    </Link>
  );

// Loaded on demand: the panels only exist once a menu is opened.
export default function NavPanel({ item, closeMenu }) {
  if (item.type === "mega") {
    return (
      <div className="grid grid-cols-3 gap-8 rounded-xl border border-border bg-card/95 backdrop-blur-xl p-6 shadow-2xl shadow-background/60">
        {item.columns.map((col) => (
          <div key={col.title} className="min-w-0">
            <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">
              {col.title}
            </p>
            <div className="mt-3 space-y-1">
              {col.links.map((l) => renderMenuLink(l, closeMenu))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-w-[15rem] rounded-xl border border-border bg-card/95 backdrop-blur-xl p-3 shadow-2xl shadow-background/60">
      {item.links.map((l) => renderMenuLink(l, closeMenu, true))}
    </div>
  );
}
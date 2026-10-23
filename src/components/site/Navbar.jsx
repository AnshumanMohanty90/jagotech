import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "@/components/site/Logo";
import { NAV_GROUPS, NAV_LINKS } from "@/components/site/navData";

export default function Navbar({ logoVariant }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/#top" className="flex items-center">
          <Logo variant={logoVariant} className="h-7 sm:h-8 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_GROUPS.map((g) => (
            <div
              key={g.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(g.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <Link
                to={g.href}
                className="flex items-center gap-1 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {g.label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openGroup === g.label ? "rotate-180" : ""}`}
                />
              </Link>

              <AnimatePresence>
                {openGroup === g.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full pt-2 z-50"
                  >
                    <div className="flex gap-8 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-5 shadow-2xl shadow-background/60 min-w-[19rem]">
                      {g.columns.map((col) => (
                        <div key={col.title} className="min-w-[12.5rem]">
                          <p className="font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">
                            {col.title}
                          </p>
                          <div className="mt-3 space-y-1">
                            {col.links.map((l) => (
                              <Link
                                key={`${l.label}-${l.href}`}
                                to={l.href}
                                onClick={() => setOpenGroup(null)}
                                className="block rounded-lg px-2.5 py-1.5 hover:bg-secondary/60 transition-colors"
                              >
                                <span className="block text-sm font-medium text-foreground/90">{l.label}</span>
                                {l.desc && (
                                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground/80">
                                    {l.desc}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {NAV_LINKS.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}

          <Link to="/#contact" className="site-cta-primary group gap-1.5 px-4 py-2 text-sm rounded-lg">
            Get your free 8-week plan
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-border bg-card/60"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {NAV_GROUPS.map((g) => (
                <div key={g.label} className="border-b border-border/60 last:border-0">
                  <button
                    onClick={() => setMobileGroup((m) => (m === g.label ? null : g.label))}
                    className="site-choice w-full flex items-center justify-between px-3 py-2.5 text-sm text-foreground/90"
                  >
                    {g.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileGroup === g.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileGroup === g.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 space-y-2">
                          {g.columns.map((col) => (
                            <div key={col.title}>
                              <p className="px-3 pt-1 font-mono text-xs leading-relaxed uppercase tracking-widest text-muted-foreground">
                                {col.title}
                              </p>
                              {col.links.map((l) => (
                                <Link
                                  key={`${l.label}-${l.href}`}
                                  to={l.href}
                                  onClick={() => setOpen(false)}
                                  className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary"
                                >
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                          <Link
                            to={g.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-1.5 text-sm font-semibold text-primary"
                          >
                            {g.label} overview
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {NAV_LINKS.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                )
              )}

              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="site-cta-primary mt-2 px-3 py-2.5 text-center text-sm rounded-lg"
              >
                Get your free 8-week plan
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
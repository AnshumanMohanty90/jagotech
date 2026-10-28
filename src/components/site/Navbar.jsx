import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/site/Logo";
import { NAV_ITEMS } from "@/components/site/navData";

// Menu panels load on demand, off the critical path.
const NavPanel = lazy(() => import("@/components/site/NavPanels"));

const OPEN_DELAY = 120;
const CLOSE_DELAY = 220;

export default function Navbar({ logoVariant }) {
  const { pathname } = useLocation();
  // Every page leads to booking the free trial.
  const cta = { to: "/contact?intent=trial", label: "Book a free trial" };
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const triggerRefs = useRef({});

  // Close the phone drawer when the screen grows to desktop width (for example a tablet rotating).
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setDrawerOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  }, []);

  // Close desktop menus on outside click
  useEffect(() => {
    if (!openMenu) return undefined;
    const onDown = (e) => {
      if (!e.target.closest("[data-nav-menu]")) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [openMenu]);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const openAfter = (label, delay) => {
    clearTimers();
    if (delay === 0) {
      setOpenMenu(label);
      return;
    }
    openTimer.current = window.setTimeout(() => setOpenMenu(label), delay);
  };

  const closeAfter = (delay) => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), delay);
  };

  const closeMenu = (label, refocus) => {
    clearTimers();
    setOpenMenu(null);
    if (refocus && label && triggerRefs.current[label]) triggerRefs.current[label].focus();
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setMobileGroup(null);
    if (menuButtonRef.current) menuButtonRef.current.focus();
  };

  // Drawer: lock scroll, trap focus, close on Escape
  useEffect(() => {
    if (!drawerOpen) return undefined;
    document.body.style.overflow = "hidden";
    const first = drawerRef.current?.querySelector("a[href], button:not([disabled])");
    if (first) first.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDrawer();
        return;
      }
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusables = Array.from(
        drawerRef.current.querySelectorAll("a[href], button:not([disabled])")
      );
      if (!focusables.length) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        drawerOpen ? "bg-background" : "bg-background/80 backdrop-blur-md backdrop-saturate-150"
      } ${
        scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.45)]" : ""
      }`}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <nav className="relative mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex min-h-[44px] items-center" aria-label="Jago AI home">
          <Logo variant={logoVariant} className="h-7 sm:h-8 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            const open = openMenu === item.label;
            return (
              <div
                key={item.label}
                data-nav-menu
                className={item.type === "mega" ? "" : "relative"}
                onMouseEnter={() => openAfter(item.label, OPEN_DELAY)}
                onMouseLeave={() => closeAfter(CLOSE_DELAY)}
              >
                <button
                  type="button"
                  ref={(el) => {
                    triggerRefs.current[item.label] = el;
                  }}
                  aria-haspopup="true"
                  aria-expanded={open}
                  aria-controls={`nav-panel-${item.label}`}
                  onClick={() => (open ? closeMenu(item.label, true) : openAfter(item.label, 0))}
                  onKeyDown={(e) => {
                    if (e.key === "Escape" && open) closeMenu(item.label, true);
                  }}
                  className={`inline-flex min-h-[44px] items-center text-sm font-normal transition-colors ${
                    open ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>

                {open && (
                  <div
                    id={`nav-panel-${item.label}`}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        e.preventDefault();
                        closeMenu(item.label, true);
                      }
                    }}
                    className={
                      item.type === "mega"
                        ? "absolute inset-x-0 top-full pt-3 z-50"
                        : "absolute left-0 top-full pt-3 z-50"
                    }
                  >
                    <Suspense fallback={null}>
                      <NavPanel item={item} closeMenu={() => closeMenu()} />
                    </Suspense>
                  </div>
                )}
              </div>
            );
          })}

          <Link to={cta.to} className="site-cta-primary px-4 py-2 text-sm rounded-lg">
            {cta.label}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          ref={menuButtonRef}
          onClick={() => setDrawerOpen(true)}
          aria-expanded={drawerOpen}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex min-h-[44px] items-center px-3 rounded-lg border border-border bg-card/60 text-sm font-medium"
        >
          Menu
        </button>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={closeDrawer} />
          <div
            ref={drawerRef}
            id="mobile-menu"
            className="absolute inset-y-0 right-0 w-full max-w-sm bg-background border-l border-border flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-border shrink-0">
              <Logo variant={logoVariant} className="h-7 w-auto" />
              <button
                type="button"
                onClick={closeDrawer}
                className="inline-flex min-h-[44px] items-center px-3 text-sm font-medium"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-3">
              {NAV_ITEMS.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={closeDrawer}
                      className="flex min-h-[44px] items-center px-3 py-2.5 text-sm font-medium text-foreground/90 border-b border-border/60"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const groupOpen = mobileGroup === item.label;
                return (
                  <div key={item.label} className="border-b border-border/60">
                    <button
                      type="button"
                      onClick={() => setMobileGroup((m) => (m === item.label ? null : item.label))}
                      aria-expanded={groupOpen}
                      className="site-choice w-full flex min-h-[44px] items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground/90"
                    >
                      {item.label}
                      <span aria-hidden="true" className="font-mono text-muted-foreground">
                        {groupOpen ? "−" : "+"}
                      </span>
                    </button>
                    {groupOpen && (
                      <div className="pb-3 space-y-4">
                        {item.type === "mega"
                          ? item.columns.map((col) => (
                              <div key={col.title}>
                                <p className="px-3 text-xs font-semibold leading-relaxed text-muted-foreground">
                                  {col.title}
                                </p>
                                <div className="mt-1">
                                  {col.links.map((l) =>
                                    l.external ? (
                                      <a
                                        key={l.label}
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeDrawer}
                                        className="flex min-h-[44px] items-center px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                                      >
                                        {l.label}
                                      </a>
                                    ) : (
                                      <Link
                                        key={l.label}
                                        to={l.href}
                                        onClick={closeDrawer}
                                        className="flex min-h-[44px] items-center px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                                      >
                                        {l.label}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            ))
                          : item.links.map((l) => (
                              <Link
                                key={l.label}
                                to={l.href}
                                onClick={closeDrawer}
                                className="flex min-h-[44px] items-center px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                              >
                                {l.label}
                              </Link>
                            ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="shrink-0 border-t border-border p-5">
              <Link
                to={cta.to}
                onClick={closeDrawer}
                className="site-cta-primary w-full px-4 py-3 text-sm rounded-lg"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

// Phone-only call to action that appears once the hero has scrolled away, hides near the
// closing call to action and the footer, and can be dismissed for the visit.
export default function StickyCta() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const end = document.querySelector("#contact, footer");
      const nearEnd = end ? end.getBoundingClientRect().top < window.innerHeight : false;
      // Step aside while an interactive section that needs the bottom of the screen is in view.
      const busy = [...document.querySelectorAll("[data-hide-sticky]")].some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      });
      const on = window.scrollY > 640 && !nearEnd && !busy;
      setShow(on);
      document.documentElement.classList.toggle("sticky-on", on);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (closed || /^\/(contact|marketplace|login|register|forgot|reset|oauth)/.test(pathname)) document.documentElement.classList.remove("sticky-on");
  }, [closed, pathname]);

  if (closed || /^\/(contact|marketplace|login|register|forgot|reset|oauth)/.test(pathname)) return null;

  return (
    <div
      className={`sticky-cta md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3">
        <Link to="/contact?intent=trial" tabIndex={show ? 0 : -1} className="site-cta-primary flex-1 justify-center px-4 py-3 rounded-xl text-center">
          Try Jago free for a week
        </Link>
        <button
          type="button"
          onClick={() => {
            setClosed(true);
            document.documentElement.classList.remove("sticky-on");
          }}
          tabIndex={show ? 0 : -1}
          aria-label="Hide this bar"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-foreground/70 hover:text-foreground"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

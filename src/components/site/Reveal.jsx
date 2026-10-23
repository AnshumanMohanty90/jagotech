import React, { useEffect, useRef, useState } from "react";

// A section that fades up 12px over 300ms, once, when it enters the viewport.
// Use only below the first screen. With reduced motion the content shows instantly.
export default function Reveal({ children, className = "", id, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    let done = false;
    let io = null;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
      if (io) io.disconnect();
    };
    // Reveal any section already passed or in view, not only ones currently
    // intersecting, so jumps and fast scrolling never leave a section hidden.
    io = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top < window.innerHeight) show();
      }
    );
    io.observe(el);
    // Fallbacks: reveal everything after 1.5s, and on anchor or scroll-restore jumps.
    const fallback = window.setTimeout(show, 1500);
    const onJump = () => show();
    window.addEventListener("hashchange", onJump);
    window.addEventListener("popstate", onJump);
    return () => {
      if (io) io.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("hashchange", onJump);
      window.removeEventListener("popstate", onJump);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal site-section ${shown ? "reveal-shown" : "reveal-init"} ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
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
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -64px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
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
import React, { useEffect, useState } from "react";
import useInView from "@/hooks/useInView";

// Counts up to `value` once, when the number scrolls into view. The final figure is laid out
// invisibly underneath, so the space is reserved and nothing shifts while digits change, and the
// figure keeps the font's normal (proportional) digits.
export default function CountUp({ value, duration = 800, className = "" }) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);
  const final = value.toLocaleString("en-IN");

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(value * (1 - (1 - p) * (1 - p))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={`countup ${className}`}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true" className="countup-final">{final}</span>
      <span aria-hidden="true" className="countup-live">{n.toLocaleString("en-IN")}</span>
    </span>
  );
}

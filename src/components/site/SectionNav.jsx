import React, { useEffect, useState } from "react";

// In-page section navigation for long pages. It slides in under the header once the
// visitor scrolls past the first screen and marks the section in view.
export default function SectionNav({ items, showAfter = "top" }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const first = document.getElementById(showAfter);
    const onScroll = () => {
      const limit = first ? first.offsetTop + first.offsetHeight - 80 : 480;
      setVisible(window.scrollY > limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [items, showAfter]);

  return (
    <nav
      aria-label="On this page"
      className={`section-nav fixed inset-x-0 top-16 z-40 transition-all duration-200 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it) => {
            const on = active === it.id;
            return (
              <li key={it.id} className="shrink-0">
                <a
                  href={`#${it.id}`}
                  aria-current={on ? "true" : undefined}
                  tabIndex={visible ? 0 : -1}
                  className={`site-choice inline-flex min-h-[36px] items-center rounded-full px-3.5 text-sm font-medium transition-colors ${
                    on ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

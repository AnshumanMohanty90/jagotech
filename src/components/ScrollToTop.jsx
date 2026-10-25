import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const getHashId = (hash) => {
  const rawId = hash.slice(1);

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const firstLoad = useRef(true);

  useEffect(() => {
    const isFirst = firstLoad.current;
    firstLoad.current = false;
    if (navigationType === "POP" && !(isFirst && hash)) return;

    if (hash) {
      const id = getHashId(hash);
      let tries = 0;
      const timer = window.setInterval(() => {
        const el = document.getElementById(id);
        tries += 1;
        if (el) {
          el.scrollIntoView({ behavior: isFirst ? "auto" : "smooth" });
          window.clearInterval(timer);
        } else if (tries > 40) {
          window.clearInterval(timer);
        }
      }, 50);
      return () => window.clearInterval(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}

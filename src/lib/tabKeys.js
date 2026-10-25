// Arrow-key support for tab lists (Left, Right, Home, End), as in the WAI-ARIA tabs pattern.
export function tabKeys(e, count, index, select) {
  const next =
    e.key === "ArrowRight" || e.key === "ArrowDown" ? (index + 1) % count
    : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (index - 1 + count) % count
    : e.key === "Home" ? 0
    : e.key === "End" ? count - 1
    : -1;
  if (next < 0) return;
  e.preventDefault();
  select(next);
  const list = e.currentTarget.parentElement;
  list?.children[next]?.focus();
}

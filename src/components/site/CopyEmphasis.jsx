import React from "react";

export default function CopyEmphasis({ text, bold = [], accent = [], italic = [] }) {
  const phrases = [
    ...bold.map((value) => ({ value, kind: "bold" })),
    ...accent.map((value) => ({ value, kind: "accent" })),
    ...italic.map((value) => ({ value, kind: "italic" })),
  ].filter(({ value }) => value);
  const parts = [];
  let cursor = 0;
  while (cursor < text.length) {
    const match = phrases.map((phrase) => ({ ...phrase, index: text.indexOf(phrase.value, cursor) }))
      .filter(({ index }) => index !== -1).sort((a, b) => a.index - b.index || b.value.length - a.value.length)[0];
    if (!match) { parts.push(text.slice(cursor)); break; }
    parts.push(text.slice(cursor, match.index));
    const key = `${match.index}-${match.value}`;
    parts.push(match.kind === "italic"
      ? <em key={key} className="copy-aside">{match.value}</em>
      : <strong key={key} className={match.kind === "accent" ? "copy-accent" : "copy-focus"}>{match.value}</strong>);
    cursor = match.index + match.value.length;
  }
  return <>{parts}</>;
}
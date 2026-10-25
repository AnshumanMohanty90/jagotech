import React from "react";

export default function AnswerBox({ language, text, children }) {
  return (
    <div className="mt-2 rounded-xl border border-primary/25 bg-background/80 px-4 py-3">
      <span className="text-sm leading-relaxed text-primary">jago · answer</span>
      <p lang={language} className="mt-2 font-body text-base leading-relaxed text-foreground/90 whitespace-pre-line break-words">
        {text}
      </p>
      {children}
    </div>
  );
}
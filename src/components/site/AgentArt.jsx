import React from "react";

// One original illustration per marketplace agent: what goes in, and what comes out.
const C = "hsl(var(--primary))";
const W = "#F5F7FA";
const S = "rgba(245,247,250,0.35)";
const F = "rgba(245,247,250,0.06)";

function Frame({ children, label }) {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label={label} className="block h-full w-full">
      <defs>
        <linearGradient id="agentBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="hsl(218 18% 11%)" />
          <stop offset="1" stopColor="hsl(220 14% 6%)" />
        </linearGradient>
        <radialGradient id="agentGlow" cx="0.75" cy="0.2" r="0.7">
          <stop offset="0" stopColor="hsl(183 100% 50% / 0.18)" />
          <stop offset="1" stopColor="hsl(183 100% 50% / 0)" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="url(#agentBg)" />
      <rect width="320" height="180" fill="url(#agentGlow)" />
      {children}
    </svg>
  );
}

const Arrow = ({ x = 150, y = 90 }) => (
  <g stroke={C} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d={`M${x} ${y}h22`} />
    <path d={`M${x + 15} ${y - 7}l7 7-7 7`} />
  </g>
);

const Rows = ({ x, y, n = 4, w = 96 }) => (
  <g>
    {Array.from({ length: n }).map((_, i) => (
      <g key={i}>
        <rect x={x} y={y + i * 22} width="30" height="8" rx="4" fill={S} />
        <rect x={x + 38} y={y + i * 22} width={w - 38 - (i % 2) * 14} height="8" rx="4" fill={i === 0 ? C : W} opacity={i === 0 ? 1 : 0.85} />
      </g>
    ))}
  </g>
);

function CardScanner() {
  return (
    <Frame label="A business card becomes a structured CRM record">
      <g transform="rotate(-6 80 90)">
        <rect x="28" y="52" width="110" height="68" rx="8" fill={F} stroke={W} strokeWidth="1.5" />
        <circle cx="50" cy="74" r="9" fill={S} />
        <rect x="66" y="68" width="56" height="7" rx="3.5" fill={W} />
        <rect x="66" y="80" width="38" height="5" rx="2.5" fill={S} />
        <rect x="40" y="96" width="80" height="5" rx="2.5" fill={S} />
        <rect x="40" y="106" width="60" height="5" rx="2.5" fill={S} />
        <rect x="24" y="84" width="118" height="2" fill={C} opacity="0.9" />
      </g>
      <Arrow />
      <rect x="186" y="44" width="112" height="96" rx="10" fill={F} stroke={S} strokeWidth="1.2" />
      <Rows x={198} y={58} n={4} w={88} />
    </Frame>
  );
}

function DocumentAnalysis() {
  return (
    <Frame label="A contract with clauses and terms pulled out">
      <rect x="34" y="28" width="96" height="124" rx="8" fill={F} stroke={W} strokeWidth="1.5" />
      {[44, 56, 68, 92, 104, 128, 140].map((y, i) => (
        <rect key={y} x="46" y={y} width={i % 3 === 2 ? 52 : 72} height="5" rx="2.5" fill={S} />
      ))}
      <rect x="42" y="78" width="80" height="10" rx="3" fill={C} opacity="0.28" />
      <rect x="46" y="80.5" width="64" height="5" rx="2.5" fill={C} />
      <rect x="42" y="114" width="80" height="10" rx="3" fill={C} opacity="0.28" />
      <rect x="46" y="116.5" width="56" height="5" rx="2.5" fill={C} />
      <Arrow />
      {[
        ["Clause", 40],
        ["Liability", 80],
        ["Term", 120],
      ].map(([t, y]) => (
        <g key={t}>
          <rect x="186" y={y} width="112" height="28" rx="8" fill={F} stroke={S} strokeWidth="1.2" />
          <circle cx="200" cy={y + 14} r="4" fill={C} />
          <text x="212" y={y + 18} fill={W} fontSize="12" fontFamily="var(--font-heading)" fontWeight="600">{t}</text>
        </g>
      ))}
    </Frame>
  );
}

function EmailParser() {
  return (
    <Frame label="An inbound email becomes an ERP and CRM entry">
      <rect x="30" y="50" width="110" height="80" rx="8" fill={F} stroke={W} strokeWidth="1.5" />
      <path d="M30 58l55 38 55-38" fill="none" stroke={W} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="44" y="108" width="40" height="6" rx="3" fill={C} />
      <Arrow />
      <rect x="186" y="40" width="112" height="44" rx="8" fill={F} stroke={S} strokeWidth="1.2" />
      <text x="198" y="58" fill={C} fontSize="11" fontFamily="var(--font-heading)" fontWeight="600">CRM</text>
      <rect x="198" y="66" width="84" height="6" rx="3" fill={W} opacity="0.85" />
      <rect x="186" y="96" width="112" height="44" rx="8" fill={F} stroke={S} strokeWidth="1.2" />
      <text x="198" y="114" fill={C} fontSize="11" fontFamily="var(--font-heading)" fontWeight="600">ERP</text>
      <rect x="198" y="122" width="70" height="6" rx="3" fill={W} opacity="0.85" />
    </Frame>
  );
}

function VoiceToText() {
  const bars = [10, 22, 34, 18, 40, 28, 14, 30, 44, 24, 12, 20, 36, 16];
  return (
    <Frame label="Local-language audio becomes a summary with actions">
      {bars.map((h, i) => (
        <rect key={i} x={30 + i * 8} y={90 - h / 2} width="4" height={h} rx="2" fill={i > 3 && i < 10 ? C : W} opacity={i > 3 && i < 10 ? 1 : 0.7} />
      ))}
      <Arrow />
      <rect x="186" y="36" width="112" height="108" rx="10" fill={F} stroke={S} strokeWidth="1.2" />
      <text x="198" y="56" fill={C} fontSize="11" fontFamily="var(--font-heading)" fontWeight="600">Summary</text>
      <rect x="198" y="64" width="86" height="5" rx="2.5" fill={W} opacity="0.85" />
      <rect x="198" y="74" width="70" height="5" rx="2.5" fill={W} opacity="0.85" />
      <text x="198" y="100" fill={C} fontSize="11" fontFamily="var(--font-heading)" fontWeight="600">Actions</text>
      {[108, 122].map((y) => (
        <g key={y}>
          <rect x="198" y={y} width="9" height="9" rx="2" fill="none" stroke={C} strokeWidth="1.5" />
          <rect x="213" y={y + 2} width="62" height="5" rx="2.5" fill={S} />
        </g>
      ))}
    </Frame>
  );
}

function ImageAnalysis() {
  return (
    <Frame label="A shelf photo checked for quality compliance">
      <rect x="28" y="34" width="116" height="112" rx="8" fill={F} stroke={W} strokeWidth="1.5" />
      {[58, 92, 126].map((y) => (
        <rect key={y} x="36" y={y} width="100" height="3" fill={S} />
      ))}
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect key={`${r}${c}`} x={42 + c * 24} y={40 + r * 34} width="16" height="16" rx="2" fill={r === 1 && c === 2 ? "none" : W} opacity={0.75} stroke={r === 1 && c === 2 ? C : "none"} strokeDasharray="3 2" />
        ))
      )}
      <rect x="86" y="70" width="28" height="24" rx="3" fill="none" stroke={C} strokeWidth="2" />
      <Arrow x={152} />
      <rect x="186" y="44" width="112" height="92" rx="10" fill={F} stroke={S} strokeWidth="1.2" />
      {[
        [62, true],
        [86, true],
        [110, false],
      ].map(([y, ok]) => (
        <g key={y}>
          <circle cx="202" cy={y} r="7" fill={ok ? C : "none"} stroke={C} strokeWidth="1.5" />
          {ok && <path d={`M198.5 ${y}l2.5 2.5 4.5-5`} stroke="hsl(220 14% 4%)" strokeWidth="1.8" fill="none" strokeLinecap="round" />}
          <rect x="216" y={y - 3} width={ok ? 66 : 54} height="6" rx="3" fill={ok ? W : S} opacity="0.85" />
        </g>
      ))}
    </Frame>
  );
}

function Jasper() {
  const deals = [78, 64, 52, 38, 24];
  return (
    <Frame label="Deals ranked by value, chance and urgency">
      <text x="30" y="40" fill={C} fontSize="11" fontFamily="var(--font-heading)" fontWeight="600">Deals, ranked</text>
      {deals.map((w, i) => (
        <g key={i}>
          <text x="30" y={64 + i * 22} fill={W} fontSize="11" fontFamily="var(--font-heading)" fontWeight="600" opacity="0.85">{i + 1}</text>
          <rect x="46" y={56 + i * 22} width="150" height="10" rx="5" fill={F} />
          <rect x="46" y={56 + i * 22} width={w * 1.9} height="10" rx="5" fill={i === 0 ? C : W} opacity={i === 0 ? 1 : 0.55 - i * 0.07} />
        </g>
      ))}
      <rect x="220" y="52" width="78" height="84" rx="10" fill={F} stroke={S} strokeWidth="1.2" />
      <path d="M232 120l14-16 12 8 14-22 14 6" fill="none" stroke={C} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="232" y="72" fill={W} fontSize="11" fontFamily="var(--font-heading)" fontWeight="600">Close rate</text>
    </Frame>
  );
}

const ART = {
  "card-scanner": CardScanner,
  "document-analysis": DocumentAnalysis,
  "email-parser": EmailParser,
  "voice-to-text": VoiceToText,
  "image-analysis": ImageAnalysis,
  jasper: Jasper,
};

export default function AgentArt({ id }) {
  const Art = ART[id] || CardScanner;
  return <Art />;
}

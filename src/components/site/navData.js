export const NAV_ITEMS = [
  {
    type: "mega",
    label: "Product",
    columns: [
      {
        title: "Modules",
        links: [
          { label: "Ask", href: "/platform#ask", desc: "Get answers from your data in plain words" },
          { label: "Analyze", href: "/platform#analyze", desc: "See why a number moved" },
          { label: "Predict", href: "/platform#predict", desc: "Get a warning before a problem shows" },
          { label: "Automate", href: "/platform#automate", desc: "Hand routine updates to Jago" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "JShield", href: "https://jshield.ai", desc: "Meet India's data protection law", external: true },
          { label: "Marketplace", href: "/marketplace", desc: "Single AI agents, pay per use" },
        ],
      },
      {
        title: "Trust",
        links: [
          { label: "Security", href: "/security", desc: "How we protect your data" },
          { label: "How Jago works", href: "/platform", desc: "Live in 8 weeks" },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    label: "Solutions",
    links: [
      { label: "By role", href: "/role-wins" },
      { label: "By industry", href: "/industries" },
      { label: "By use case", href: "/solutions" },
    ],
  },
  { type: "link", label: "Customers", href: "/customers" },
  { type: "link", label: "Pricing", href: "/pricing" },
];
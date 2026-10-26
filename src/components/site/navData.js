export const NAV_ITEMS = [
  {
    type: "mega",
    label: "Product",
    columns: [
      {
        title: "Modules",
        links: [
          { label: "Ask", href: "/platform#ask", desc: "One answer from every team's data" },
          { label: "Analyze", href: "/platform#analyze", desc: "Test why a number moved" },
          { label: "Predict", href: "/platform#predict", desc: "See what will slip, and why" },
          { label: "Automate", href: "/platform#automate", desc: "Build agents in plain words" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "JShield", href: "https://jshield.ai", desc: "Meet India's data protection law", external: true },
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
  { type: "link", label: "Marketplace", href: "/marketplace" },
  { type: "link", label: "Customers", href: "/customers" },
  { type: "link", label: "Pricing", href: "/pricing" },
];
export const NAV_ITEMS = [
  {
    type: "group",
    label: "Platform",
    href: "/platform",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Platform Overview", href: "/platform", desc: "Connect systems, give agents context, let them act" },
          { label: "Security Controls", href: "/security", desc: "Who sees what, approvals and audit records" },
        ],
      },
    ],
  },
  {
    type: "group",
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "How Jago Works", href: "/how-jago-works", desc: "Ask, Automate, Analyze and Predict in detail" },
          { label: "Role Wins", href: "/role-wins", desc: "What changes in each role's day" },
          { label: "Industries", href: "/industries", desc: "Ready-made workflows for your sector" },
        ],
      },
    ],
  },
  { type: "link", label: "Marketplace", href: "/marketplace" },
  {
    type: "group",
    label: "Pricing",
    href: "/pricing",
    columns: [
      {
        title: "Pricing",
        links: [
          { label: "Plans", href: "/pricing", desc: "Clear prices in rupees" },
          { label: "ROI Calculator", href: "/pricing#roi", desc: "Estimate your savings" },
        ],
      },
    ],
  },
  { type: "link", label: "JShield", href: "https://jshield.ai", external: true },
  { type: "link", label: "Customers", href: "/customers" },
];
import ServiceLayout from "../../components/ServiceLayout";

const APIIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const features = [
  "Accept payments without dealing with banking complexity",
  "Connect to the tools you already use",
  "Sync data across your entire business automatically",
  "Deploy anywhere and sleep soundly",
  "Automations that handle tedious work for you",
  "Data stays in sync, always fresh, always accurate",
  "Let systems talk to each other without manual work",
  "Breathe new life into old systems",
];

const techStack = [
  "REST APIs",
  "GraphQL",
  "AWS",
  "Twilio",
  "Stripe",
  "Agora",
  "Whereby",
  "Web3",
  "Appwrite",
  "OAuth 2.0",
  "Zapier",
];

const process = [
  {
    title: "Map Your World",
    description:
      "We study how your systems talk (or don't talk). Identify friction points and design the connections that matter.",
  },
  {
    title: "Build Secure Bridges",
    description:
      "Design integrations that are fast, secure, and handle problems gracefully. No data loss, no surprises.",
  },
  {
    title: "Make Them Real",
    description:
      "Build APIs, webhooks, and automations that work. Test everything. Make sure your systems actually trust each other.",
  },
  {
    title: "Watch & Support",
    description:
      "Monitor everything to catch issues before they become problems. We're here when you need us.",
  },
];

const capabilities = [
  {
    title: "Connect Your Communications",
    description:
      "SMS alerts, video calls, emails—all working together. Customers reach you however they want. You respond on one platform.",
  },
  {
    title: "Blockchain Integration",
    description:
      "Plug Web3 into your app. Smart contracts, digital wallets, decentralized logic. Transparent and trustworthy.",
  },
  {
    title: "AI Models in Production",
    description:
      "Your ML models meet the real world. We handle API endpoints, versioning, and scaling so they work reliably at any load.",
  },
  {
    title: "Money Flows Smoothly",
    description:
      "Connect to payment systems, manage subscriptions, handle invoicing. Your revenue engine stays running 24/7.",
  },
  {
    title: "Cloud Powers Your Growth",
    description:
      "AWS, databases, CI/CD pipelines. Infrastructure that scales with you. Deploy with confidence.",
  },
  {
    title: "APIs That Fit You",
    description:
      "REST, GraphQL, webhooks—whatever your systems need. Secure, well-documented, and built to last.",
  },
];

export default function APIIntegration() {
  return (
    <ServiceLayout
      title="API & Platform Integration"
      subtitle="Make your tools work together"
      description="Stop wrestling with disconnected systems. We integrate everything seamlessly so your tools work together like they were built for each other. Less manual work, more automation."
      icon={<APIIcon />}
      gradient="from-green-500 to-emerald-500"
      features={features}
      techStack={techStack}
      process={process}
      projects={capabilities}
    />
  );
}

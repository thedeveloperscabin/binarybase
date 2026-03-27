import ServiceLayout from "../../components/ServiceLayout";

const MVPIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const features = [
  "Get to market fast without cutting corners",
  "Test your idea with real users in weeks, not months",
  "Users trust your platform with their data",
  "Your app grows when your business grows",
  "Sign up, log in, payment—all handled seamlessly",
  "Connect with tools your customers already use",
  "Deploy anywhere with confidence",
  "Learn from real users, iterate based on feedback",
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Appwrite",
  "Twilio",
  "Whereby",
  "Agora",
  "Solidity",
  "Web3",
  "Ganache",
  "Node.js",
  "PostgreSQL",
];

const process = [
  {
    title: "Validate Your Idea",
    description:
      "Let's make sure we're building something people actually want. We define the core features that matter most.",
  },
  {
    title: "Quick & Dirty Proof",
    description:
      "Build something fast to test with real users. Get feedback. Realize what works and what doesn't.",
  },
  {
    title: "Build for Launch",
    description:
      "Now we polish. Clean UI, solid backend, everything production-ready. Your MVP becomes the platform you're proud to launch.",
  },
  {
    title: "Ship & Scale",
    description:
      "Launch to the world and listen to your users. We stick with you to handle growth, bugs, and new ideas.",
  },
];

const capabilities = [
  {
    title: "Medical Booking That Works",
    description:
      "Patients book appointments, get SMS reminders, and video call doctors. All in one place. Healthcare gets simpler.",
  },
  {
    title: "Stores That Sell",
    description:
      "Everything you need to sell online. Products, carts, payments, inventory. Focus on your business, not the tech.",
  },
  {
    title: "Blockchain Done Right",
    description:
      "Build Web3 apps with smart contracts that actually matter. Transparent, secure, and accessible to your users.",
  },
  {
    title: "Spaces Where Teams Connect",
    description:
      "Real-time collaboration tools where your team communicates, shares, and works together seamlessly.",
  },
  {
    title: "Mobile First, Always",
    description:
      "Apps that feel native on phones. Fast, smooth, and work even when internet's spotty.",
  },
  {
    title: "Software People Subscribe To",
    description:
      "SaaS platforms with accounts, subscriptions, and permissions. The infrastructure to scale from 10 users to 10,000.",
  },
];

export default function MVPDevelopment() {
  return (
    <ServiceLayout
      title="MVP & App Development"
      subtitle="Bring your idea to life in weeks"
      description="From idea to launch-ready product. We build MVPs that validate your concept, attract users, and generate real traction. Focus on your vision, we'll handle the building."
      icon={<MVPIcon />}
      gradient="from-amber-500 to-orange-500"
      features={features}
      techStack={techStack}
      process={process}
      projects={capabilities}
    />
  );
}

import ServiceLayout from "../../components/ServiceLayout";

const WebDevelopmentIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const features = [
  "Works flawlessly on phones, tablets, and desktops",
  "Beautiful interfaces that users actually enjoy using",
  "See your data come alive with real-time dashboards",
  "Fast loading speeds that keep users engaged",
  "Everything's organized in an intuitive control center",
  "Your platform grows with your business",
  "Looks great everywhere, every time",
  "Know what's working and what needs improvement",
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "HTML5/CSS3",
  "UI/UX Design",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

const process = [
  {
    title: "Understand Your Vision",
    description:
      "We listen to your goals, your users, and your unique challenges to create a roadmap that actually matters to your business.",
  },
  {
    title: "Design with Purpose",
    description:
      "Every pixel is intentional. We create beautiful, intuitive designs that help your users accomplish what they came to do.",
  },
  {
    title: "Build with Excellence",
    description:
      "Clean code, best practices, and a focus on performance ensure your platform is fast, reliable, and ready for growth.",
  },
  {
    title: "Launch & Thrive",
    description:
      "We don't just hand it off. We make sure everything runs smoothly and provide support as you grow and evolve.",
  },
];

const capabilities = [
  {
    title: "Apps That Work Everywhere",
    description:
      "Progressive web apps that work offline, load in a blink, and feel like native apps. Your users don't need to download anything.",
  },
  {
    title: "Dashboards That Tell Your Story",
    description:
      "Stop drowning in spreadsheets. Transform your data into beautiful, interactive dashboards that everyone can understand at a glance.",
  },
  {
    title: "Power Apps for Different Roles",
    description:
      "Create separate experiences for admins and users. Users see what they need, admins see the bigger picture. Everyone's happy.",
  },
  {
    title: "Instant Communication",
    description:
      "Build chat rooms, messaging, and notifications that keep your team or community connected in real-time, no delays, no confusion.",
  },
  {
    title: "AI That Actually Works",
    description:
      "Integrate machine learning to detect patterns, identify issues, and make smart decisions automatically while you focus on what matters.",
  },
  {
    title: "Smart Recognition Technology",
    description:
      "Automate people counting, security tracking, or attendance without the headache of manual processes. Works accurately, works reliably.",
  },
];

export default function WebDevelopment() {
  return (
    <ServiceLayout
      title="Custom Web Development"
      subtitle="Beautiful, fast websites that actually convert"
      description="We build digital experiences that users love. From stunning marketing sites to powerful business dashboards, we create platforms that solve real problems and drive real results."
      icon={<WebDevelopmentIcon />}
      gradient="from-blue-500 to-cyan-500"
      features={features}
      techStack={techStack}
      process={process}
      projects={capabilities}
    />
  );
}

import ServiceLayout from "../../components/ServiceLayout";

const LLMIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const features = [
  "Train custom AI on your unique business knowledge",
  "Your data stays private—we keep it secure on your servers",
  "Add smart search that understands what users really mean",
  "Work with databases that remember and learn",
  "Chat with your business the way you'd chat with a person",
  "Transform messy documents into actionable insights",
  "Handle text, images, and audio—all in one system",
  "Connect AI to your existing tools and workflows",
];

const techStack = [
  "Ollama",
  "LangChain",
  "ChromaDB",
  "FAISS",
  "Python",
  "Hugging Face",
  "Vector Databases",
  "RAG",
  "Transformers",
  "PyTorch",
  "FastAPI",
];

const process = [
  {
    title: "Learn What You Need",
    description:
      "We dig deep to understand your industry, your data, and what you're really trying to accomplish with AI.",
  },
  {
    title: "Prepare Your Knowledge",
    description:
      "We organize and refine your data so the AI can learn from your best practices and domain expertise.",
  },
  {
    title: "Build Your AI Brain",
    description:
      "Custom training, knowledge bases, and smart retrieval systems that make your AI answer like an expert would.",
  },
  {
    title: "Deploy & Keep Improving",
    description:
      "Launch your AI into production and continuously refine it based on real usage and feedback.",
  },
];

const capabilities = [
  {
    title: "AI That Understands Law",
    description:
      "Cut through legal jargon. Your AI reads contracts, finds compliance issues, and explains them in plain English. Save money on consultants.",
  },
  {
    title: "Voice Commands, Zero Friction",
    description:
      "Control your software with your voice. Natural language, no weird command structures. Feel like the future.",
  },
  {
    title: "Ask Your Knowledge Base",
    description:
      "Employees and customers ask questions in natural language. Your AI finds answers from your documentation instantly.",
  },
  {
    title: "Read Between the Lines",
    description:
      "Extract insights from PDFs, images, and documents without manual work. Classify, summarize, and organize automatically.",
  },
  {
    title: "Your Personal Expert",
    description:
      "A chatbot trained on your knowledge that answers customer questions 24/7, handles common issues, and escalates when needed.",
  },
  {
    title: "Smart Test Generation",
    description:
      "Spend less time writing test cases. Your AI generates scenarios based on your product specs, keeping sensitive data completely offline.",
  },
];

export default function LLMDevelopment() {
  return (
    <ServiceLayout
      title="Customized LLM API Development"
      subtitle="AI that understands your business"
      description="We build intelligent AI systems trained on your knowledge. Private, secure, and designed specifically for how you work. Your competitive advantage wrapped in natural language."
      icon={<LLMIcon />}
      gradient="from-purple-500 to-pink-500"
      features={features}
      techStack={techStack}
      process={process}
      projects={capabilities}
    />
  );
}

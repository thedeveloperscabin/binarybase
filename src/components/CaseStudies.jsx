import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlowCard from "./GlowCard";
import { AnimatedLine } from "./AnimatedText";

const projects = [
  {
    title: "AI-Based Video and Audio Verification System",
    problem:
      "Organizations needed a reliable way to identify manipulated or AI-generated audio and video content.",
    solution:
      "Developed a machine learning system capable of detecting synthetic audio / video patterns that is reliable and efficient in real-world scenarios.",
    impact:
      "Improved detection reliability and reduced risk of misinformation exposure.",
    tech: ["Python", "Machine Learning", "TensorFlow"],
    gradient: "from-blue-500 to-cyan-500",
    link: null,
  },
  {
    title: "Automated Large Scale Test Case Generator for Aerospace Manufacturing",
    problem:
      "Online exposure of sensitive aerospace data and lack of personalization in test case generation.",
    solution:
      "Created an offline, AI-driven test case generator that produces personalized test scenarios based on specific aerospace component data.",
    impact:
      "Enhanced security by keeping data offline and improved testing efficiency with tailored test cases.",
    tech: ["Ollama", "RAG", "Python"],
    gradient: "from-purple-500 to-pink-500",
    link: "https://airbot-production-3f51.up.railway.app/",
  },
  {
    title: "AI-Assisted Law Bot",
    problem:
      "Individuals and small businesses found it difficult to understand legal documents without consulting a lawyer.",
    solution:
      "Built an AI-powered legal assistant that interprets and summarizes legal documents.",
    impact:
      "Improved accessibility to legal information and reduced reliance on expensive consultations.",
    tech: ["Python", "ChromaDB", "Ollama"],
    gradient: "from-amber-500 to-orange-500",
    link: null,
  },
];

export default function CaseStudies() {
  return (
    <SectionWrapper>
      <section
        id="work"
        className="py-20 md:py-32 px-6 bg-gray-50/80 dark:bg-neutral-950/80 transition-colors relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4"
            >
              Case Studies
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white"
            >
              What We've{" "}
              <span className="gradient-text">Built</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Real solutions for real problems. Here are some projects that showcase our approach.
            </motion.p>

            <AnimatedLine className="max-w-xs mx-auto mt-8" delay={0.4} />
          </div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlowCard>
                  <div className="p-8 lg:p-10 glass-card rounded-2xl group">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                      {/* Project number */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4">
                          <h3 className="text-2xl font-semibold text-black dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {project.title}
                          </h3>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                            >
                              <span>Live Demo</span>
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>

                        <div className="mt-6 grid md:grid-cols-3 gap-6">
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                              Problem
                            </span>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                              Solution
                            </span>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {project.solution}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400">
                              Impact
                            </span>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {project.impact}
                            </p>
                          </div>
                        </div>

                        {/* Tech stack */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { AnimatedLine } from "./AnimatedText";

const steps = [
  {
    step: "01",
    title: "Understanding Your Vision",
    description:
      "We begin by listening — your goals, constraints, expectations, and long-term vision. Every strong product starts with clarity.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    step: "02",
    title: "Planning & System Design",
    description:
      "Before writing code, we design the structure. We define architecture, performance strategy, and scalability to avoid future rewrites.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    step: "03",
    title: "Focused Development",
    description:
      "Clean implementation with regular updates. You'll always know what's happening and where your project stands.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "We test for stability, performance, and real-world usage. No rushed deployments.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    step: "05",
    title: "Launch & Ongoing Support",
    description:
      "After deployment, we stay involved. Improvements, fixes, and enhancements don't stop at launch.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.95]);

  return (
    <SectionWrapper>
      <section
        ref={containerRef}
        className="py-16 md:py-32 px-4 sm:px-6 bg-white/80 dark:bg-black/80 transition-colors relative overflow-hidden"
      >
        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          style={{ opacity, scale }}
        >
          {/* Section header */}
          <div className="text-center mb-12 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4"
            >
              How We Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white"
            >
              Our{" "}
              <span className="gradient-text">Process</span>
            </motion.h2>

            <AnimatedLine className="max-w-xs mx-auto mt-6 md:mt-8" delay={0.4} />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-neutral-800 -translate-x-1/2">
              <motion.div
                className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"
                style={{ height: lineHeight }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-8 md:space-y-24">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile: Icon and content in a card */}
                  <div className="md:hidden w-full p-5 rounded-2xl glass-card">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </motion.div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400">
                          Step {item.step}
                        </span>
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Desktop: Step number and icon */}
                  <div className={`hidden md:block flex-shrink-0 relative z-10 ${index % 2 === 0 ? "md:text-right md:flex-1" : "md:flex-1"}`}>
                    <div className={`inline-flex ${index % 2 === 0 ? "md:float-right" : ""}`}>
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Desktop: Content */}
                  <div className={`hidden md:block flex-1 pb-8 ${index % 2 === 0 ? "" : "md:text-right md:ml-auto"}`}>
                    <span className="text-5xl font-bold text-gray-100 dark:text-neutral-900">
                      {item.step}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className={`mt-4 text-gray-600 dark:text-gray-400 max-w-md leading-relaxed ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </SectionWrapper>
  );
}

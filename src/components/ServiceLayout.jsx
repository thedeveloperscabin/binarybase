import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GlowCard from "./GlowCard";
import { AnimatedLine } from "./AnimatedText";

export default function ServiceLayout({
  title,
  subtitle,
  description,
  icon,
  gradient,
  features,
  projects,
  techStack,
  process,
}) {
  return (
    <main className="relative pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 md:py-20 bg-gray-50/80 dark:bg-neutral-950/80 transition-colors relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to Services</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6`}
              >
                {icon}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 font-medium"
              >
                {subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8"
              >
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlowCard>
                <div className="p-6 sm:p-8 glass-card rounded-2xl">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-6">
                    The Essentials
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mt-0.5`}>
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 sm:px-6 py-16 md:py-24 bg-white dark:bg-black transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
              Built with <span className="gradient-text">Tools You Trust</span>
            </h2>
            <AnimatedLine className="max-w-xs mx-auto mt-6" delay={0.2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 py-16 md:py-24 bg-gray-50/80 dark:bg-neutral-950/80 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
              How We Work <span className="gradient-text">Together</span>
            </h2>
            <AnimatedLine className="max-w-xs mx-auto mt-6" delay={0.2} />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GlowCard className="h-full">
                  <div className="p-6 glass-card rounded-2xl h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Do Section */}
      <section className="px-4 sm:px-6 py-16 md:py-24 bg-white dark:bg-black transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
              Here's What's <span className="gradient-text">Possible</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These are the kinds of solutions we build. Not seeing exactly what you need? Reach out. We've probably built something similar, or we'll build something new.
            </p>
            <AnimatedLine className="max-w-xs mx-auto mt-6" delay={0.2} />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GlowCard className="h-full">
                  <div className="p-6 sm:p-8 glass-card rounded-2xl h-full hover:scale-105 transition-transform duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 md:py-24 bg-gray-50/80 dark:bg-neutral-950/80 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white"
          >
            Ready to Build Something <span className="gradient-text">Great?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let's talk about your vision. Share your idea, challenge, or dream project.
            We'll figure out how to make it real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              <span>Contact Us</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

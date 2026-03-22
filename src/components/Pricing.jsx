import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import GlowCard from "./GlowCard";
import MagneticButton from "./MagneticButton";
import { AnimatedLine } from "./AnimatedText";

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    description: "Perfect for small businesses and personal projects",
    features: [
      "Business Website (Up to 5 pages)",
      "Responsive Design",
      "Basic SEO Setup",
      "Deployment Support",
      "1 Month Support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "₹60,000",
    description: "Ideal for growing businesses with custom needs",
    features: [
      "Custom Web Application",
      "API Integration",
      "Authentication System",
      "Performance Optimization",
      "Deployment + 3 Months Support",
      "Analytics Dashboard",
    ],
    featured: true,
  },
  {
    name: "Advanced",
    price: "₹1,00,000",
    description: "Enterprise solutions for large-scale applications",
    features: [
      "Full-Scale Application",
      "Architecture Planning",
      "Advanced Integrations",
      "Scalable Backend",
      "6 Months Technical Support",
      "Priority Response",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper>
      <section
        className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-gray-50/80 dark:bg-neutral-950/80 transition-colors relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-600/15 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 mb-4"
            >
              Transparent Pricing
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white px-2"
            >
              Simple{" "}
              <span className="gradient-text">Pricing</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto px-2"
            >
              Choose the plan that fits your needs. All plans include our commitment to quality
              and timely delivery.
            </motion.p>

            <AnimatedLine className="max-w-xs mx-auto mt-6 md:mt-8" delay={0.4} />
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className={plan.featured ? "md:-mt-4 md:mb-4" : ""}
              >
                <GlowCard className="h-full">
                  <div
                    className={`p-6 sm:p-8 lg:p-10 h-full rounded-2xl flex flex-col relative overflow-hidden
                    ${plan.featured
                      ? "bg-gradient-to-b from-indigo-600 to-purple-700 text-white"
                      : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    }`}
                  >
                    {/* Featured badge */}
                    {plan.featured && (
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <span className="px-2.5 sm:px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Plan name */}
                    <h3 className={`text-lg sm:text-xl font-semibold ${plan.featured ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-4">
                      <span className={`text-3xl sm:text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900 dark:text-white"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xs sm:text-sm ml-1 ${plan.featured ? "text-white/70" : "text-gray-600 dark:text-gray-500"}`}>
                        starting*
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`mt-3 text-xs sm:text-sm ${plan.featured ? "text-white/85" : "text-gray-700 dark:text-gray-400"}`}>
                      {plan.description}
                    </p>

                    {/* Divider */}
                    <div className={`my-5 sm:my-6 h-[1px] ${plan.featured ? "bg-white/20" : "bg-gray-300 dark:bg-gray-700"}`} />

                    {/* Features */}
                    <ul className="space-y-3 sm:space-y-4 flex-grow">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                          className={`flex items-start gap-2 sm:gap-3 text-xs sm:text-sm ${plan.featured ? "text-white/90" : "text-gray-700 dark:text-gray-400"}`}
                        >
                          <svg
                            className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${plan.featured ? "text-white" : "text-indigo-600 dark:text-indigo-400"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-6 sm:mt-8">
                      {plan.featured ? (
                        <MagneticButton
                          href="#contact"
                          variant="secondary"
                          className="w-full justify-center !bg-white !text-indigo-600 font-semibold hover:!bg-gray-100 active:!scale-95 text-sm sm:text-base"
                        >
                          Get Started
                        </MagneticButton>
                      ) : (
                        <MagneticButton
                          href="#contact"
                          variant="outline"
                          className="w-full justify-center !border-gray-800 dark:!border-gray-600 !text-gray-800 dark:!text-gray-200 hover:!bg-gray-800 hover:!text-white dark:hover:!bg-gray-100 dark:hover:!text-black font-semibold active:!scale-95 text-sm sm:text-base"
                        >
                          Get Started
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-500 px-2"
          >
            * Final pricing varies based on project scope, integrations, performance requirements, and delivery timeline.
          </motion.p>
        </div>
      </section>
    </SectionWrapper>
  );
}

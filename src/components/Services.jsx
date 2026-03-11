import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const services = [
  {
    title: "Custom Web Development",
    description:
      "High-performance business websites and dashboards built with scalability and clean architecture in mind.",
  },
  {
    title: "Customized LLM API Development",
    description:
      "Personalised and privacy focused LLM API development for unique business needs, with a focus on data security and performance.",
  },
  {
    title: "MVP & App Development",
    description:
      "Rapid MVP builds for startups — from idea to launch-ready product with clean UI and backend integration.",
  },
  {
    title: "API & Platform Integration",
    description:
      "Seamless integrations with payment gateways, CRMs, third-party APIs, and automation systems.",
  },
];

export default function Services() {
  return (
    <SectionWrapper>
        <section
        id="services"
        className="min-h-screen flex flex-col justify-center px-6 py-16 md:py-24 bg-gray-50 dark:bg-neutral-950 transition-colors"
        >
        <div className="max-w-6xl mx-auto w-full">

            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center tracking-tight text-black dark:text-white"
            >
            Our Services
            </motion.h2>

            <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
            We help businesses build, optimize, and scale digital products with
            precision and speed.
            </motion.p>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-md hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-indigo-500/30 transition duration-300"
                >
                <h3 className="text-xl font-semibold text-black dark:text-white">
                    {service.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {service.description}
                </p>
                </motion.div>
            ))}
            </div>

        </div>
        </section>
    </SectionWrapper>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleField from "./components/ParticleField";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Loading screen component
function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/favicon.svg"
            alt="Logo"
            className="w-12 h-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-3xl font-bold text-white">
            Binary<span className="gradient-text">Base</span>
          </span>
        </motion.div>

        <motion.div
          className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-black transition-colors duration-500 relative"
      >
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Particle Field Background */}
        <ParticleField />

        {/* Mesh Gradient Background */}
        <div className="fixed inset-0 -z-20 mesh-gradient opacity-50 pointer-events-none" />

        {/* Animated Background Orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-[5%] w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-indigo-500/10 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-[5%] w-72 h-72 md:w-[600px] md:h-[600px] rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, -30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[700px] md:h-[700px] rounded-full bg-pink-500/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Noise texture overlay */}
        <div className="fixed inset-0 -z-5 pointer-events-none opacity-[0.015] dark:opacity-[0.03]">
          <div className="absolute inset-0 noise-overlay" />
        </div>

        {/* Main content */}
        <Navbar />
        <main className="relative">
          <Hero />
          <Services />
          <WhyChoose />
          <Pricing />
          <Process />
          <CaseStudies />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

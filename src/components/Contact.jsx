import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import MagneticButton from "./MagneticButton";
import { AnimatedLine } from "./AnimatedText";
import SectionWrapper from "./SectionWrapper";

// Floating label input component
function FloatingInput({ type = "text", name, label, value, onChange, required = false, multiline = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isActive = isFocused || hasValue;

  const inputClasses = `
    w-full px-4 pt-6 pb-2 rounded-xl
    bg-white/50 dark:bg-neutral-900/50
    backdrop-blur-sm
    border-2 border-gray-200 dark:border-neutral-800
    text-black dark:text-white
    outline-none transition-all duration-300
    focus:border-indigo-500 dark:focus:border-indigo-400
    focus:shadow-lg focus:shadow-indigo-500/10
    hover:border-gray-300 dark:hover:border-neutral-700
  `;

  const labelClasses = `
    absolute left-4 transition-all duration-300 pointer-events-none
    ${isActive
      ? "top-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium"
      : "top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
    }
  `;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={inputClasses}
        />
      )}
      <label className={multiline && isActive ? "absolute left-4 top-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium transition-all duration-300 pointer-events-none" : labelClasses}>
        {label}
      </label>

      {/* Focus glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setStatus({
        message: "Message sent successfully! We'll get back to you soon.",
        type: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed:", error);
      setStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper>
      <section
        ref={containerRef}
        id="contact"
        className="py-20 md:py-32 px-6 bg-gray-50/80 dark:bg-neutral-950/80 transition-colors relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-indigo-500/10 to-transparent blur-3xl" />
        </div>

        <motion.div
          className="max-w-2xl mx-auto relative z-10"
          style={{ opacity, scale }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white"
            >
              Let's{" "}
              <span className="gradient-text">Work Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
            >
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </motion.p>

            <AnimatedLine className="max-w-xs mx-auto mt-8" delay={0.4} />
          </div>

          {/* Contact form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <FloatingInput
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FloatingInput
                type="email"
                name="email"
                label="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <FloatingInput
              name="message"
              label="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              multiline
            />

            {/* Submit button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <MagneticButton
                type="submit"
                variant="primary"
                size="large"
                className="w-full justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Push to BinaryBase
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </MagneticButton>
            </motion.div>

            {/* Status message */}
            <AnimatePresence>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl text-center font-medium ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {status.type === "success" ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    {status.message}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </section>
    </SectionWrapper>
  );
}

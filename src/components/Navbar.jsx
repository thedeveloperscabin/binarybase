import { useTheme } from "../context/ThemeContext";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Magnetic link component
function MagneticLink({ href, children, onClick }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.2,
      y: (e.clientY - centerY) * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      className="relative px-1 py-2 text-black dark:text-white transition-colors group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["services", "work", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled
        ? "py-3 bg-white/80 dark:bg-black/80 shadow-lg shadow-black/5 dark:shadow-white/5 backdrop-blur-xl border-b border-gray-200/20 dark:border-white/10"
        : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.img
            src="/favicon.svg"
            alt="BinaryBase Logo"
            className="w-8 h-8"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-black dark:text-white">Binary</span>
            <span className="gradient-text ml-1">Base</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <MagneticLink key={link.href} href={link.href}>
              <span className={activeSection === link.href.slice(1) ? "gradient-text font-medium" : ""}>
                {link.label}
              </span>
            </MagneticLink>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
          {/* Hamburger (Mobile Only) */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-black dark:bg-white rounded-full origin-left"
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-black dark:bg-white rounded-full"
                animate={menuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-black dark:bg-white rounded-full origin-left"
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>

          {/* Binary Toggle */}
          <motion.div
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-16 h-8 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors overflow-hidden">
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
                animate={{ opacity: darkMode ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.div
              className="absolute top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
              animate={{
                left: darkMode ? "4px" : "calc(100% - 28px)",
                backgroundColor: darkMode ? "#ffffff" : "#000000",
                color: darkMode ? "#000000" : "#ffffff",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {darkMode ? "1" : "0"}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              className="bg-white/95 dark:bg-black/95 backdrop-blur-xl px-6 pb-6 pt-4 space-y-1 border-t border-gray-200/20 dark:border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

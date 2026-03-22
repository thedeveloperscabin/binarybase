import { motion } from "framer-motion";

// Split text into individual characters or words for animation
export function AnimatedText({
  text,
  className = "",
  once = true,
  animation = "fadeUp", // fadeUp, slideIn, typewriter, gradient
  delay = 0,
  stagger = 0.03,
  tag = "div",
}) {
  const MotionTag = motion[tag] || motion.div;

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: delay + i * stagger, duration: 0.5, ease: "easeOut" },
      }),
    },
    slideIn: {
      hidden: { opacity: 0, x: -20 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: delay + i * stagger, duration: 0.4, ease: "easeOut" },
      }),
    },
    typewriter: {
      hidden: { opacity: 0, y: 10 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: delay + i * 0.05, duration: 0.1 },
      }),
    },
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;
  const characters = text.split("");

  return (
    <MotionTag className={`inline-flex flex-wrap ${className}`}>
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          variants={selectedAnimation}
          className={char === " " ? "w-[0.3em]" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionTag>
  );
}

// Animated heading with word-by-word reveal
export function AnimatedHeading({
  children,
  className = "",
  once = true,
  delay = 0,
  gradient = false,
}) {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={`perspective-1000 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${gradient ? "gradient-text-animate" : ""}`}
          variants={child}
          style={{ transformOrigin: "center bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// Counter animation for numbers
export function AnimatedCounter({ value, duration = 2, className = "" }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
    </motion.span>
  );
}

// Line reveal animation
export function AnimatedLine({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${className}`}
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    />
  );
}

export default AnimatedText;

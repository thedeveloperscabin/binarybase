import { useEffect, useRef, useCallback } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  const createParticle = useCallback((canvas, isInitial = false) => {
    return {
      x: Math.random() * canvas.width,
      y: isInitial ? Math.random() * canvas.height : canvas.height + 10,
      size: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: 0,
      maxOpacity: Math.random() * 0.5 + 0.1,
      fadeIn: true,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.02 + 0.01,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = particlesRef.current;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas, true));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get theme
      const isDark = document.documentElement.classList.contains("dark");
      const particleColor = isDark ? "139, 92, 246" : "99, 102, 241"; // purple/indigo

      particles.forEach((p, index) => {
        // Update wobble
        p.wobble += p.wobbleSpeed;

        // Move particle
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.wobble) * 0.2;

        // Mouse interaction - gentle push
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x -= (dx / dist) * force * 0.5;
          p.y -= (dy / dist) * force * 0.5;
        }

        // Fade in/out logic
        if (p.fadeIn && p.opacity < p.maxOpacity) {
          p.opacity += 0.005;
        }
        if (p.y < canvas.height * 0.2) {
          p.opacity -= 0.008;
        }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();

        // Add subtle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity * 0.3})`;
        ctx.fill();

        // Reset particle if it's off screen or faded
        if (p.y < -10 || p.opacity <= 0) {
          particles[index] = createParticle(canvas, false);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ opacity: 1 }}
    />
  );
}

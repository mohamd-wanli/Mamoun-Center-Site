import { useEffect, useRef } from "react";
import "./FloatingParticles.css";

/**
 * Floating particle effect inspired by KAMUI cherry-blossom petals.
 * Renders SVG shapes that drift across the hero.
 */
export default function FloatingParticles({ count = 18, color = "var(--color-accent)" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // clear previous particles
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("span");
      particle.className = "floating-particle";

      // Randomise properties
      const size = 4 + Math.random() * 10;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const duration = 12 + Math.random() * 20;
      const delay = Math.random() * duration;
      const opacity = 0.15 + Math.random() * 0.35;
      const drift = -30 + Math.random() * 60;
      const shape = Math.random() > 0.5 ? "50%" : `${2 + Math.random() * 4}px`;

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}%;
        top: ${startY}%;
        opacity: ${opacity};
        background: ${color};
        border-radius: ${shape};
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
        --drift: ${drift}px;
      `;

      container.appendChild(particle);
    }
  }, [count, color]);

  return (
    <div
      ref={containerRef}
      className="floating-particles-container"
      aria-hidden="true"
    />
  );
}

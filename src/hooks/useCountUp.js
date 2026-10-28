import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `end` once the element is in view.
 * Returns [ref, displayValue].
 */
export default function useCountUp(end, duration = 2000) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.unobserve(el);

          const numericEnd =
            typeof end === "string" ? parseInt(end.replace(/[^0-9]/g, ""), 10) : end;
          if (isNaN(numericEnd)) {
            setValue(end);
            return;
          }

          const startTime = performance.now();
          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * numericEnd));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setValue(numericEnd);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return [ref, value];
}

import { useEffect, useRef, useState } from "react";

/**
 * Hook that returns a ref + boolean indicating visibility.
 * Attach `ref` to the element you want to observe.
 * `isVisible` flips to `true` once it enters the viewport (one-shot).
 */
export default function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

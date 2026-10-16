import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
}) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    let animationFrame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.disconnect();

        const startTime = performance.now();

        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease-out cubic animation
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(value * eased));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        }

        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <span ref={counterRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
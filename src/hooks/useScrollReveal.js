import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsap/gsapSetup';

/**
 * useScrollReveal hook creates hardware-accelerated ScrollTrigger entrance animations
 * with automatic cleanup when unmounted or when reduced motion is preferred.
 */
export const useScrollReveal = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const {
      selector = '.reveal-item',
      y = 30,
      opacity = 0,
      duration = 0.8,
      stagger = 0.12,
      start = 'top 85%',
      ease = 'power2.out'
    } = options;

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll(selector);
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity, y },
          {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease,
            scrollTrigger: {
              trigger: containerRef.current,
              start,
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [options]);

  return containerRef;
};

export default useScrollReveal;

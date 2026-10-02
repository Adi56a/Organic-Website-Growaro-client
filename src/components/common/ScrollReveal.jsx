import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../animations/gsap/gsapSetup';

/**
 * ScrollReveal component smoothly animates its children when scrolled into view.
 * Variants: 'fade-up', 'fade-in', 'stagger', 'scale-up'
 */
export const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  className = '',
  style = {}
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !elRef.current) return;

    let fromVars = { opacity: 0 };
    if (variant === 'fade-up') fromVars.y = 32;
    if (variant === 'scale-up') {
      fromVars.scale = 0.94;
      fromVars.y = 16;
    }

    const ctx = gsap.context(() => {
      if (variant === 'stagger') {
        const childrenElements = elRef.current.children;
        gsap.fromTo(
          childrenElements,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      } else {
        gsap.fromTo(
          elRef.current,
          fromVars,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, elRef);

    return () => ctx.revert();
  }, [variant, delay, duration, stagger]);

  return (
    <div ref={elRef} className={`scroll-reveal-box ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ScrollReveal;

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set default GSAP easing and duration
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8
  });
}

export { gsap, ScrollTrigger };

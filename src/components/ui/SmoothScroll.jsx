import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenisInstance = null; // ✅ global reference

export const getLenis = () => lenisInstance;

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Disable Lenis on mobile/tablet devices (under 1024px) to prevent scrolling issues
    const isMobileOrTablet = window.innerWidth < 1024;
    
    if (isMobileOrTablet) {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      lenisInstance = null;
      return;
    }

    // Initialize Lenis only on desktop
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisInstance = lenis; // ✅ store instance

    function raf(time) {
      if (lenisInstance) {
        lenisInstance.raf(time);
      }
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Handle window resize
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        // Switch to mobile, destroy Lenis
        if (lenisInstance) {
          lenisInstance.destroy();
          lenisInstance = null;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
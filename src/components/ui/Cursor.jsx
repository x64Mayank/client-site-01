import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth trail physics - subtle lag for premium feel
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Reusable hover check logic
  const checkHover = useCallback((x, y) => {
    const element = document.elementFromPoint(x, y);
    if (!element) return;
    
    const isInteractive = 
      element.closest('a') || 
      element.closest('button') || 
      element.closest('.px1-cursor') ||
      element.closest('[role="button"]') ||
      window.getComputedStyle(element).cursor === 'pointer';
    
    setIsHovered(!!isInteractive);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      
      const x = e.clientX;
      const y = e.clientY;
      lastMousePos.current = { x, y };
      
      mouseX.set(x);
      mouseY.set(y);
      checkHover(x, y);
    };

    // Re-evaluate hover state on scroll even if mouse is stationary
    const handleScroll = () => {
      if (!isVisible) return;
      checkHover(lastMousePos.current.x, lastMousePos.current.y);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, checkHover]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Trailing Outer Ring - Minimal & Fixed X-Ray Lens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: isHovered ? 1.5 : 1,
              width: 20,
              height: 20,
              backgroundColor: isHovered ? "rgba(255, 255, 255, 0.01)" : "rgba(255, 255, 255, 0)",
              borderWidth: isHovered ? "1px" : "1.2px",
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed top-0 left-0 rounded-full border border-white/40 z-[9999] pointer-events-none hidden md:block"
            style={{
              x: shouldReduceMotion ? mouseX : smoothX,
              y: shouldReduceMotion ? mouseY : smoothY,
              translateX: "-50%",
              translateY: "-50%",
              backdropFilter: isHovered ? "invert(100%)" : "none",
              WebkitBackdropFilter: isHovered ? "invert(100%)" : "none",
              willChange: 'transform, backdrop-filter, contents'
            }}
            transition={{ 
              type: "spring", 
              stiffness: 250, 
              damping: 25,
              mass: 0.5
            }}
          />
          
          {/* Precision Dot - Simple & Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1,
              scale: isHovered ? 0 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full z-[10000] pointer-events-none hidden md:block"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Cursor;

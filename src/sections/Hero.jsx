import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const HERO_IMAGES = [
  "/hero-1.webp",
  "/hero-2.webp",
  "/hero-3.webp"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Preload subsequent images to avoid transition flicker
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-82px)] lg:min-h-[calc(100vh-152px)] flex items-start md:items-center overflow-hidden bg-brand-dark pt-16 sm:pt-32 pb-20 md:py-28 xl:py-32">
      {/* Background Slideshow with Parallax & Ken Burns effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-brand-dark/45 z-10 pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 8, ease: "linear" }}
              className="w-full h-full"
            >
              <img 
                src={HERO_IMAGES[currentIndex]} 
                alt="Alfa Facade - Premium Architecture" 
                className="w-full h-full object-cover"
                fetchPriority={currentIndex === 0 ? "high" : "auto"}
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content Container - Centered and Scale-Optimized */}
      <div className="w-full pl-6 md:pl-10 lg:pl-10 pr-6 md:pr-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl xl:max-w-4xl"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl xl:text-7xl font-display font-medium leading-[1.1] mb-6 md:mb-8 tracking-tight px1-cursor">
            Welcome to the world of Shri Shyam G Group.
          </h1>
          
          <p className="text-white/85 text-base md:text-lg lg:text-xl font-body max-w-xl md:max-w-2xl mb-8 md:mb-12 leading-relaxed tracking-wide px1-cursor">
            For over a decade since 2012, our passion and dedication have allowed us to transform the face of residential and commercial projects across Uttar Pradesh, Bihar, and Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <Button 
              variant="primary" 
              icon={ArrowUpRight} 
              rotateOnHover
              href="/services"
              className="w-full sm:w-fit xl:w-[303px]"
            >
              View All Services
            </Button>

            <Button 
              variant="primary" 
              icon={ArrowUpRight} 
              rotateOnHover
              href="/projects"
              className="w-full sm:w-fit xl:w-[273px]"
            >
              Our Projects
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Adjusted for better visibility */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-6 md:bottom-12 left-6 md:left-12 flex flex-col items-start gap-3 md:gap-4 px1-cursor"
      >
        <span className="text-white/40 text-[9px] md:text-xs uppercase tracking-[0.4em] font-display">Scroll To Discover</span>
        <div className="w-[80px] md:w-[120px] h-[1px] bg-gradient-to-r from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
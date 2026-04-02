import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  "/hero-2.jpg",
  "/hero-3.jpg"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Slideshow with Parallax & Ken Burns effect */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-brand-dark/40 z-10 pointer-events-none" />
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
                alt="Premium Architecture" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-[162px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-brand-accent font-display font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            Pioneering Precision in Glass & Aluminum
          </motion.span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
            Excellence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">
              Facade Engineering
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-body max-w-2xl mb-10 leading-relaxed">
            Delivering cutting-edge facade solutions that blend innovative design with uncompromising structural integrity for the world's most iconic buildings.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button variant="primary" size="lg" className="px-10 py-5 text-lg">
              Explore Our Projects
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-5 text-lg !text-white !border-white hover:!bg-white/10">
              Our Expertise
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest font-display">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

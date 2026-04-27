import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FacadeSection from './components/Hero/FacadeSection';
import SmoothScroll from './components/ui/SmoothScroll';

import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';

import Cursor from './components/ui/Cursor';

import About from './sections/About';
import Partners from './sections/Partners';
import HowWeWork from './sections/HowWeWork';
import Sustainability from './sections/Sustainability';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-dark overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FacadeSection />
          <HowWeWork />
          <Sustainability />
          <Partners />
          
          {/* Site Under Construction Section */}
          <section className="h-[80vh] flex flex-col items-center justify-center bg-brand-dark relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center relative z-10 px-6"
            >
              <Construction size={48} className="text-brand-accent mx-auto mb-6 px1-cursor" />
              <h2 className="text-white text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight uppercase px1-cursor">Coming Soon</h2>
              <p className="text-white/60 text-base md:text-lg font-body max-w-xl mx-auto leading-relaxed">
                Our full site is currently under construction. 
                <br/>This component is made to test smooth scrolling behaviour.
              </p>
            </motion.div>
          </section>

          <div className="h-screen bg-brand-secondary/10" />
          <div className="h-screen bg-brand-primary/10" />
        </main>
        {/* Cursor placed inside the inner-most scroll wrapper for best blending */}
        <Cursor />
      </div>
    </SmoothScroll>
  );
}

export default App;

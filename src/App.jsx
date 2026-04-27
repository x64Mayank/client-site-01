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
import Projects from './sections/Projects';

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
          <Projects />
        </main>
        {/* Cursor placed inside the inner-most scroll wrapper for best blending */}
        <Cursor />
      </div>
    </SmoothScroll>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import SmoothScroll from './components/ui/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-dark">
        <Navbar />
        <main>
          <Hero />
          {/* Multiple sections to test smooth scroll */}
          <div className="h-screen bg-brand-primary/10" />
          <div className="h-screen bg-brand-secondary/10" />
          <div className="h-screen bg-brand-primary/10" />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;

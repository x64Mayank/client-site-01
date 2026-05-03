import React from 'react';
import Legacy from '../sections/Legacy';
import Hero from '../sections/Hero';
import StatsSection from '../components/Hero/StatsSection';
import About from '../sections/About';
import FeaturesBar from '../sections/Features';

const AboutPage = () => {
  return (
    <main>
      <Hero />  
      <Legacy />
      <StatsSection />
      <About compact={true} />
      <FeaturesBar />
    </main>
  );
};

export default AboutPage;
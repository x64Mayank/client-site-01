import React from 'react';
import Legacy from '../sections/Legacy';
import Hero from '../sections/Hero';
import StatsSection from '../components/Hero/StatsSection';
import About from '../sections/About';
import FeaturesBar from '../sections/Features';
import Certifications from '../sections/Certifications';
import TeamGrid from '../sections/TeamGrid';

const AboutPage = () => {
  return (
    <main>
      <Hero />  
      <Legacy />
      <StatsSection />
      <About compact={true} />
      <FeaturesBar />
      <Certifications />
      <TeamGrid />
    </main>
  );
};

export default AboutPage;
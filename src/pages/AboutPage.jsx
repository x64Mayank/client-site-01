import React from 'react';
import Legacy from '../sections/Legacy';
import StatsSection from '../components/Hero/StatsSection';
import About from '../sections/About';
import FeaturesBar from '../sections/Features';
import Certifications from '../sections/Certifications';
import TeamGrid from '../sections/TeamGrid';
import WorkWithUs from '../sections/WorkWithUs';
import Partners from '../sections/Partners';
import Footer from '../sections/Footer';
import AboutHero from '../sections/AboutHero';

const AboutPage = () => {
  return (
    <main>
      <AboutHero />   
      <Legacy />
      <StatsSection />
      <About compact={true} />
      <FeaturesBar />
      <Certifications />
      <TeamGrid />
      <WorkWithUs />
      <Partners />
      <Footer />
    </main>
  );
};

export default AboutPage;
import React from 'react';
import PageHero from '../components/PageHero';
import Legacy from '../sections/Legacy';
import StatsSection from '../components/Hero/StatsSection';
import About from '../sections/About';
import FeaturesBar from '../sections/Features';
import TeamGrid from '../sections/TeamGrid';
import WorkWithUs from '../sections/WorkWithUs';
import Partners from '../sections/Partners';
import Footer from '../sections/Footer';

const AboutPage = () => {
  return (
    <main>
      <PageHero
        backgroundImage="/hero-2.webp"
        label="ABOUT US"
        heading="About Shri Shyam G Group"
        breadcrumbLabel="ABOUT US"
      />
      <Legacy />
      <StatsSection />
      <About compact={true} />
      <FeaturesBar />
      <TeamGrid />
      <WorkWithUs />
      <Partners />
      <Footer />
    </main>
  );
};

export default AboutPage;
import React from 'react';
import PageHero from '../components/PageHero';
import QualityEngineering from '../sections/QualityEngineering';
import Footer from '../sections/Footer';
import StatsSection from '../components/Hero/StatsSection';
import LargeArrowDown from '../components/LargeArrowDown';
import CoreSpecializations from '../sections/CoreSpecializations';
import ServicesProcess from '../sections/ServicesProcess';
import WorkWithUs from '../sections/WorkWithUs';
import Partners from '../sections/Partners';
import CoreValues from '../sections/CoreValues';
import HowWeWork from '../sections/HowWeWork';

const ServicesPage = () => {
  return (
    <main>
      <PageHero
        backgroundImage="/hero-3.webp"
        label="OUR SERVICES"
        heading="Shri Shyam G Group"
        breadcrumbLabel="OUR SERVICES"
      />
      <QualityEngineering />
      <StatsSection />
      <LargeArrowDown />
      <CoreSpecializations />
      <CoreValues />
      <HowWeWork heading="Why Choose Us?" showCTA={false} />
      <WorkWithUs />
      <Partners />
      <Footer />
    </main>
  );
};

export default ServicesPage;

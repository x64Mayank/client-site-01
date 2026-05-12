import React from 'react';
import PageHero from '../components/PageHero';
import QualityEngineering from '../sections/QualityEngineering';
import Footer from '../sections/Footer';
import StatsSection from '../components/Hero/StatsSection';
import LargeArrowDown from '../components/LargeArrowDown';
import CoreSpecializations from '../sections/CoreSpecializations';
import ServicesProcess from '../sections/ServicesProcess';
import CoreValues from '../sections/CoreValues';

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
      <ServicesProcess />
      <CoreValues />
      <Footer />
    </main>
  );
};

export default ServicesPage;

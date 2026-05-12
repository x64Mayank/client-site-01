import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../sections/Footer';

const ServicesPage = () => {
  return (
    <main>
      <PageHero
        backgroundImage="/hero-3.webp"
        label="OUR SERVICES"
        heading="Shri Shyam G Group"
        breadcrumbLabel="OUR SERVICES"
      />
      {/* Service sections will be added here */}
      <Footer />
    </main>
  );
};

export default ServicesPage;

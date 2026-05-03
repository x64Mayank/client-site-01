import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import FacadeSection from '../components/Hero/FacadeSection';
import HowWeWork from '../sections/HowWeWork';
import Sustainability from '../sections/Sustainability';
import Partners from '../sections/Partners';
import Projects from '../sections/Projects';
import Leadership from '../sections/Leadership';
import Testimonials from '../sections/Testimonials';
import ContactUs from '../sections/ContactUs';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <FacadeSection />
      <HowWeWork />
      <Sustainability />
      <Partners />
      <Projects />
      <Leadership />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
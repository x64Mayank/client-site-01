import React from 'react';
import PageHero from '../components/PageHero';
import ContactMap from '../sections/ContactMap';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';

const ContactPage = () => {
  return (
    <main>
      <PageHero
        backgroundImage="/hero-2.webp"
        label="CONTACT US"
        heading={
          <>
            We Are Always Ready To Help <br className="hidden md:block" />
            You And Answer Your Questions
          </>
        }
        breadcrumbLabel="CONTACT US"
      />
      <ContactMap />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default ContactPage;

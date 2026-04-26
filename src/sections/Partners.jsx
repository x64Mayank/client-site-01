import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { id: 1, src: '/images/logos/placeholderpartner1.png', alt: 'Partner 1' },
  { id: 2, src: '/images/logos/placeholderpartner2.png', alt: 'Partner 2' },
  { id: 3, src: '/images/logos/placeholderpartner3.png', alt: 'Partner 3' },
  { id: 4, src: '/images/logos/placeholderpartner4.png', alt: 'Partner 4' },
  { id: 5, src: '/images/logos/placeholderpartner5.png', alt: 'Partner 5' },
  { id: 6, src: '/images/logos/placeholderpartner6.png', alt: 'Partner 6' },
];

// Duplicate logos for seamless loop
const duplicatedLogos = [...logos, ...logos, ...logos];

const Partners = () => {
  return (
    <section className="w-full bg-white py-[60px] overflow-hidden border-b border-black/5">
      <div className="max-w-full">
        <div className="relative flex items-center">
          {/* Slideshow Container */}
          <motion.div
            className="flex items-center gap-x-12 md:gap-x-24 lg:gap-x-32 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ transition: { duration: 60 } }} // Slows down on hover
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center min-w-fit px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[36px] md:h-[48px] lg:h-[54px] w-auto object-contain brightness-100 contrast-100"
                />
              </div>
            ))}
          </motion.div>

          {/* Fade overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Partners;

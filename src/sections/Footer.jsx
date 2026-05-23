import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FacebookIcon = ({ size = 20, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FCE399] pt-16 lg:pt-24 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[83px]">
        
        {/* TOP SECTION: Logo, Brand, Description, Socials */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-[48px] mb-16 lg:mb-24 text-center lg:text-left">
          
          {/* Logo & Brand Name Group - Centered Row on mobile, Left Aligned on desktop */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-[28px] shrink-0 lg:h-[128px]">
            <div className="w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] lg:w-[128px] lg:h-[128px] rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm shrink-0">
              <img 
                src="/images/logos/brand-logo.png" 
                alt="Shri Shyam G Group Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="font-display text-[24px] sm:text-[32px] lg:text-[56px] font-bold text-[#C9050B] leading-tight lg:leading-[58px] uppercase tracking-[3.57%] m-0 p-0 text-left">
              Shri <br className="lg:hidden" /> Shyam <br /> G Group
            </h2>
          </div>

          {/* Description & Socials Group - Centered on mobile, Left Aligned on desktop */}
          <div className="flex flex-col items-center lg:items-end justify-between gap-6 w-full lg:flex-1 lg:min-h-[128px]">
            <p className="font-body text-[15px] lg:text-[18.3px] text-[#121315] leading-relaxed lg:leading-[32.4px] font-normal m-0 p-0 lg:max-w-[640px] text-center lg:text-left">
              From aluminium window installers in the 1970s to India's premier facade specialists, 
              Alfa Facade Systems delivers world-class ACP cladding, structural glazing, and architectural solutions.
            </p>

            {/* Social Icons Container */}
            <div className="flex flex-row justify-center lg:justify-end items-center gap-[10px]">
              <a 
                href="#" 
                className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] bg-[#E31E24] text-white flex items-center justify-center hover:bg-[#C9050B] transition-colors duration-300 rounded-[2px]"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="#" 
                className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] bg-[#E31E24] text-white flex items-center justify-center hover:bg-[#C9050B] transition-colors duration-300 rounded-[2px]"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] mb-16 lg:mb-24 gap-x-10 gap-y-12 lg:gap-x-12">
          
          {/* Column 1: Call Us + Mail Us */}
          <div>
            <h3 className="font-display text-[20px] lg:text-[20.3px] font-semibold text-[#1A1A1A] mb-6">Call Us</h3>
            <ul className="flex flex-col gap-4 mb-10">
              {['+91 6306178578', '+91 75458 90012', '+91 98076 90771'].map((num) => (
                <li key={num} className="flex items-center gap-3 font-body text-[13px] sm:text-[15px] lg:text-[16px] text-[#1A1A1A]">
                  <div className="w-[4px] h-[4px] bg-[#1A1A1A] shrink-0" />
                  <a href={`tel:${num.replace(/\s/g, '')}`} className="hover:text-[#C9050B] transition-colors">{num}</a>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-[20px] lg:text-[20.3px] font-semibold text-[#1A1A1A] mb-6">Mail Us</h3>
            <ul className="flex flex-col gap-4">
              {['info@shrishyamggroup.com', 'sales@shrishyamggroup.com'].map((email) => (
                <li key={email} className="flex items-center gap-3 font-body text-[13px] sm:text-[15px] lg:text-[16px] text-[#1A1A1A]">
                  <div className="w-[4px] h-[4px] bg-[#1A1A1A] shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-[#C9050B] transition-colors break-all">{email}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Separator 1 (Desktop only) */}
          <div className="hidden lg:block w-[1.5px] bg-[#1A1A1A]/20 my-2" />

          {/* Column 2: Quick Links + Meet Us */}
          <div>
            <h3 className="font-display text-[20px] lg:text-[20.3px] font-semibold text-[#1A1A1A] mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Our Projects', path: '/projects' },
                { name: 'Leadership', path: '/about#director-message' },
              ].map((link) => (
                <li key={link.name} className="flex items-center gap-3 group">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-1" />
                  <Link
                    to={link.path}
                    className="font-display text-[13px] sm:text-[15px] lg:text-[16px] text-[#1A1A1A] hover:text-[#C9050B] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-[20px] lg:text-[20.3px] font-semibold text-[#1A1A1A] mb-6">Meet Us</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3 font-body text-[13px] sm:text-[15px] lg:text-[16px] text-[#1A1A1A] leading-[1.6]">
                <div className="w-[4px] h-[4px] bg-[#1A1A1A] shrink-0 mt-2.5" />
                <span>LGF 001, Beside Saroj Institute <br /> Arjunganj, Sultanpur Road, <br /> Lucknow 226002</span>
              </li>
              <li className="flex items-center gap-3 font-body text-[13px] sm:text-[15px] lg:text-[16px] text-[#1A1A1A]">
                <div className="w-[4px] h-[4px] bg-[#1A1A1A] shrink-0" />
                <span>Mon - Sat: 7.30am - 6.30pm</span>
              </li>
            </ul>
          </div>

          {/* Separator 2 (Desktop only) */}
          <div className="hidden lg:block w-[1.5px] bg-[#1A1A1A]/20 my-2" />

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-display text-[20px] lg:text-[20.3px] font-semibold text-[#1A1A1A] mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4">
              {[
                'Spider Glazing Systems',
                'Glass Glazing Systems',
                'ACP Facade Cladding',
                'uPVC Windows and Doors',
                'Aluminum Windows, Doors & roof',
                'Interior Design Solutions',
                'GRC/FRC/WPC Work',
                'Aluminum/Steel/MS/Glass Railing',
                'False Ceiling Work',
              ].map((service) => (
                <li key={service} className="flex items-center gap-3 group">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="font-display text-[13px] sm:text-[15px] lg:text-[16px] text-[#1A1A1A]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Attribution - Full Width row on mobile */}
        <div className="pt-8 border-t border-[#1A1A1A]/30 flex flex-row items-center justify-center gap-2">
          <p className="font-body text-[11px] sm:text-[14px] text-[#1A1A1A]/80 font-medium">
            Copyright © {currentYear} Shri Shyam Group Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
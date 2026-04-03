import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScroll from '../hooks/useScroll';
import Button from './ui/Button';
import { Phone, Mail, MapPin, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const isScrolled = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const contactInfo = [
    { 
      id: 'call',
      icon: <Phone size={21} className="text-white" />, 
      label: 'Call Us', 
      value: '+91 20 26932918',
    },
    { 
      id: 'email',
      icon: <Mail size={21} className="text-white" />, 
      label: 'Email Us', 
      value: 'info@alfafacades.com',
    },
    { 
      id: 'find',
      icon: <MapPin size={21} className="text-white" />, 
      label: 'Find Us', 
      value: <>Sr. No. 27/9/1A/2, Burhani Industrial Estate,<br />411048</>,
    },
  ];

  return (
    <nav className="relative w-full z-50 flex flex-col items-center">
      {/* Row 1: Top Bar */}
      <div className="w-full bg-[#075942] h-[87.94px] border-b border-white/10 hidden lg:flex items-center justify-center">
        <div className="w-full h-full flex items-center px-0 max-w-[1920px] flex-nowrap">

          {/* Logo */}
          <div className="flex-shrink-0 w-[16%] h-full flex items-center px-6 xl:px-10 border-r border-white/10">
            <div
              className="w-[180px] xl:w-[220px] h-[58.94px] bg-contain bg-no-repeat bg-center opacity-90"
              style={{ backgroundImage: 'url("/logo.png")' }}
            >
              {!window.logoExists && (
                <span className="text-white font-display font-bold text-xl leading-tight uppercase">
                  ALFA FACADE
                </span>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center h-full flex-grow">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className={`h-full flex items-center px-4 xl:px-5 border-r border-white/10 group hover:bg-white/5 transition-colors cursor-pointer ${
                  info.id === 'find'
                    ? 'flex w-[calc(44%/84%*100%)]'
                    : info.id === 'call'
                    ? 'flex w-[calc(20%/84%*100%)]'
                    : 'flex w-[calc(20%/84%*100%)]'
                }`}
              >
                {info.id === 'find' ? (
                  <div className="flex items-center w-full justify-between">
                    
                    {/* Left side */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-3 xl:mr-4 w-[41px] h-[41px] bg-[#09402C] flex items-center justify-center rounded-sm transition-transform duration-700 group-hover:scale-110">
                        {info.icon}
                      </div>

                      <div className="flex flex-col">
                        <span className="font-display font-normal text-[14px] xl:text-[16px] leading-tight text-white uppercase whitespace-nowrap">
                          {info.label}
                        </span>

                        <span className="font-body font-normal text-[14px] xl:text-[16px] leading-tight text-[#C2C2C2] mt-1 whitespace-normal">
                          {info.value}
                        </span>
                      </div>
                    </div>

                    {/* Search Icon */}
                    <button className="p-2 text-white hover:scale-110 transition-transform duration-700 mr-10">
                      <Search size={28} strokeWidth={1.5} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center h-[43.5px] w-full">
                    <div className="flex-shrink-0 mr-3 xl:mr-4 w-[41px] h-[41px] bg-[#09402C] flex items-center justify-center rounded-sm transition-transform duration-700 group-hover:scale-110">
                      {info.icon}
                    </div>

                    <div className="flex flex-col">
                      <span className="font-display font-normal text-[14px] xl:text-[16px] leading-tight text-white uppercase whitespace-nowrap">
                        {info.label}
                      </span>

                      <span className="font-body font-normal text-[14px] xl:text-[16px] leading-tight text-[#C2C2C2] mt-1 whitespace-nowrap">
                        {info.value}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Row 2: Main Navbar */}
      <div
        className={`w-full h-[87.94px] bg-[#075942] transition-all duration-[1200ms] ease-in-out flex items-center justify-center border-b border-black/5 lg:border-none ${
          isScrolled ? 'h-[70px] bg-[#075942]/95 backdrop-blur-md' : ''
        }`}
      >
        <div className="w-full flex items-center h-full px-[0px] max-w-[1920px] flex-nowrap">

          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center h-full flex-grow">
            <div
              className="w-[120px] h-[40px] bg-contain bg-no-repeat bg-left opacity-90"
              style={{ backgroundImage: 'url("/logo.png")' }}
            >
              {!window.logoExists && (
                <span className="text-white font-display font-bold text-lg leading-tight">
                  ALFA FACADE
                </span>
              )}
            </div>
          </div>

          {/* Tagline */}
          <div className="hidden lg:flex w-[16%] h-full bg-[#075942] items-center px-4 border-r border-white/10 flex-shrink-0">
            <span className="font-display font-bold text-[14px] xl:text-[16px] leading-loose tracking-[1px] xl:tracking-[2px] text-[#E5F2DF] uppercase">
              CREATE.<br />INNOVATE.
            </span>
          </div>

          {/* Nav Links */}
          <div className="w-[64%] h-full bg-[#075942] hidden lg:flex items-center px-4 xl:px-6 2xl:px-[25px] overflow-hidden flex-shrink-0">
            <div className="flex items-center flex-nowrap gap-4 xl:gap-6 2xl:gap-[36.7px] px-2 min-w-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display font-medium text-[13px] xl:text-[14px] tracking-[1px] text-white uppercase hover:text-[#E5F2DF] transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Request Button */}
          <div className="flex-1 h-full bg-[#09402C] hidden lg:flex items-center justify-center group overflow-hidden relative flex-shrink-0">
            <button className="relative z-10 w-full h-full font-display font-medium text-[14px] xl:text-[16px] tracking-[1px] text-white uppercase transition-all duration-700 whitespace-nowrap px-4">
              REQUEST A QUOTE
            </button>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms]" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden ml-auto p-4 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 lg:hidden bg-brand-dark flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-white uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="primary" className="mt-8 w-full">
                REQUEST A QUOTE
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
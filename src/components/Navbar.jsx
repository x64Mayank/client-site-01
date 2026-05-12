import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from './ui/Button';
import SearchOverlay from './ui/Search';
import { PhoneIncoming, Send, MapPin, Search, Menu, X, ChevronDown, Construction } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedLinks, setExpandedLinks] = useState({});

  // Smart Sticky Logic
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Don't hide if mobile menu is open
    if (isMobileMenuOpen) {
      setIsVisible(true);
      return;
    }

    // 1. Sticky logic: Row 1 visible only at actual navbar position (152px = Row1 + Row2)
    if (latest > 152) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    // 2. Visible logic: hide when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about', hasDropdown: true },
    { name: 'SERVICES', path: '/services', hasDropdown: true },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const contactInfo = [
    { 
      id: 'call',
      icon: <PhoneIncoming size={21} className="text-white" />, 
      label: 'Call Us', 
      value: '+91 63061 78578',
    },
    { 
      id: 'email',
      icon: <Send size={21} className="text-white" />, 
      label: 'Email Us', 
      value: 'info@shrishyamggroup.com',
    },
    { 
      id: 'find',
      icon: <MapPin size={21} className="text-white" />, 
      label: 'Find Us', 
      value: 'LGF 001, Arjunganj,Sultanpur Road, Lucknow 226002',
    },
  ];

  const toggleExpanded = (name) => {
    setExpandedLinks((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {/* Dynamic Spacer — occupies the space of the fixed navbar */}
      <div 
        className={`w-full pointer-events-none transition-[height] duration-500 ease-in-out ${
          isSticky ? 'h-[75px]' : 'h-[82px] lg:h-[152px]'
        }`} 
      />
      
      <nav 
        className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isSticky ? 'shadow-xl' : ''
        }`}
      >
        {/* Row 1: Top Bar (Hide when sticky for a cleaner look) */}
        <div 
          className={`w-full bg-brand-primary border-brand-dark hidden lg:flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
            isSticky ? 'h-0 opacity-0 border-b-0' : 'h-[70px] opacity-100 border-b'
          }`}
        >
              <div className="w-full h-full flex items-center px-0 max-w-[1920px] flex-nowrap">

                {/* Rebranded Logo */}
                <div className="flex-shrink-0 lg:w-[240px] xl:w-[300px] h-full flex items-center justify-center px-4 border-r border-brand-dark px1-cursor group relative overflow-hidden">
                  <div className="flex flex-row items-center justify-center gap-[12px] transition-transform duration-700 group-hover:scale-105">
                    <img src={logo} alt="Shri Shyam G Group Logo" className="w-[42px] h-[42px] object-contain flex-shrink-0" />
                    <span className="text-brand-accent font-display font-bold text-[13px] xl:text-[14.6px] leading-[25.92px] uppercase tracking-[0.137em] text-center whitespace-normal">
                      Shri Shyam G Group
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-center h-full flex-grow">
                  {contactInfo.map((info) => (
                    <div
                      key={info.id}
                      className={`h-full flex items-center px-1 xl:px-3.5 2xl:px-6 group hover:bg-white/5 transition-colors cursor-pointer flex-grow min-w-0 ${
                        info.id === 'find' ? 'border-none' : 'border-r border-brand-dark'
                      }`}
                    >
                      <div className="flex items-center gap-2 xl:gap-3 w-full">
                        <div className="flex-shrink-0 w-[41px] h-[41px] bg-brand-secondary flex items-center justify-center rounded-sm transition-transform duration-700 group-hover:scale-110">
                          {info.icon}
                        </div>

                        <div className="flex flex-col min-w-0">
                          <span className="font-display font-normal text-[12px] xl:text-[14px] leading-[17.6px] text-white whitespace-nowrap">
                            {info.label}
                          </span>

                          <span
                            className={`font-body font-normal text-[11px] xl:text-[14px] 2xl:text-[16px] leading-[17.6px] text-brand-light mt-1 ${
                              info.id === 'find'
                                ? 'whitespace-normal line-clamp-2'
                                : 'whitespace-nowrap'
                            }`}
                          >
                            {info.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Search */}
                  <div className="flex-shrink-0 flex items-center px-4 xl:px-10 h-full px1-cursor">
                    <button 
                      onClick={() => setIsSearchOpen(true)} 
                      className="p-3 text-white hover:scale-110 transition-transform duration-700 hover:text-white group relative"
                    >
                      <Search size={26} strokeWidth={1.5} />
                      <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                    </button>
                  </div>
                </div>

              </div>
        </div>

        <div
          className={`w-full h-[82px] bg-brand-primary transition-all duration-[800ms] ease-in-out flex items-center justify-center border-b border-black/5 lg:border-none ${
            isSticky ? 'h-[75px] bg-brand-primary/95 backdrop-blur-lg border-b border-white/10' : ''
          }`}
        >
          <div className="w-full flex items-center h-full px-[0px] max-w-[1920px] flex-nowrap">

            <div className="flex lg:hidden items-center h-full flex-grow px-4 px1-cursor">
              <div className="flex flex-row items-center gap-[12px]">
                <img src={logo} alt="Shri Shyam G Group Logo" className="w-[40px] h-[40px] object-contain flex-shrink-0" />
                <span className="text-brand-accent font-display font-bold text-[13px] sm:text-[14.6px] leading-[25.92px] uppercase tracking-[0.137em] whitespace-normal">
                  Shri Shyam G Group
                </span>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-[240px] xl:w-[300px] h-full bg-brand-primary items-center justify-center px-4 border-r border-brand-dark flex-shrink-0 px1-cursor">
              <span className="text-brand-accent font-display font-medium text-[12px] xl:text-[14px] 2xl:text-[15px] leading-[25.92px] tracking-[0.1133em] uppercase text-center whitespace-nowrap">
                YOUR DELIGHT,OUR VICTORY.
              </span>
            </div>

            <div className="flex-grow h-full bg-brand-primary hidden lg:flex items-center px-4 xl:px-6 2xl:px-[25px] overflow-hidden">
              <div className="flex items-center flex-nowrap gap-4 xl:gap-6 2xl:gap-[36.7px] px-2 min-w-0">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex items-center gap-2 xl:gap-3">
                    {link.hasDropdown && <div className="w-[3px] h-[10px] bg-brand-secondary flex-shrink-0" />}
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[220px] xl:w-[252px] h-full bg-brand-secondary hidden lg:flex items-center justify-center group overflow-hidden relative flex-shrink-0">
              <button className="relative z-10 w-full h-full font-display font-medium text-[13px] xl:text-[14.5px] tracking-[0.069em] text-white uppercase transition-all duration-700 whitespace-nowrap px-4">
                REQUEST A QUOTE
              </button>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms]" />
            </div>

            <button
              className="lg:hidden ml-auto p-4 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <><span className="sm:hidden">{isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}</span><span className="hidden sm:inline"><Menu size={32} /></span></>
            </button>
          </div>
        </div>
      </nav>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-[70] bg-white flex flex-col w-full sm:max-w-[400px] shadow-2xl"
            >
              {/* Menu Header: Logo + Close */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 h-[82px] shrink-0">
                <div className="flex flex-row items-center gap-[12px] min-w-0">
                  <img src={logo} alt="Shri Shyam G Group Logo" className="w-[40px] h-[40px] object-contain flex-shrink-0" />
                  <span className="text-brand-primary font-display font-bold text-[14px] sm:text-[16px] leading-[1.2] uppercase tracking-[0.1em] whitespace-nowrap overflow-hidden text-ellipsis">
                    Shri Shyam G Group
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 p-2 shrink-0"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="px-5 py-4 border-b border-gray-200 shrink-0">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="flex-grow text-sm text-gray-600 outline-none bg-transparent"
                  />
                  <Search size={18} className="text-gray-400 flex-shrink-0" />
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col overflow-y-auto flex-grow">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-100">
                    <div className="flex items-center justify-between px-5 py-4">
                      {link.path ? (
                          <Link
                            to={link.path}
                            className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                          >
                            {link.name}
                          </a>
                        )}
                      {link.hasDropdown && (
                        <button
                          onClick={() => toggleExpanded(link.name)}
                          className="text-brand-primary p-2"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${expandedLinks[link.name] ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
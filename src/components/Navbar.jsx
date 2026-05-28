import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from './ui/Button';
import ContactForm from '../sections/ContactForm';
import { PhoneIncoming, Send, MapPin, Menu, X, ChevronDown, Construction } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
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

  const handleServiceClick = (index) => {
    const width = window.innerWidth;

    let columns = 1;

    if (width >= 1024) {
      columns = 3;
    } else if (width >= 768) {
      columns = 2;
    }

    const rowStartIndex = Math.floor(index / columns) * columns;

    navigate("/services");
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const target = document.getElementById(`service-${rowStartIndex}`);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    {
      name: 'ABOUT US',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About SSG Groups', path: '/about#about-us', isHashLink: true },
        { name: 'Director Message', path: '/about#director-message', isHashLink: true },
      ],
    },
    { name: 'SERVICES', path: '/services', hasDropdown: true,
        dropdownItems: [
        { name: 'Spider Glazing System', isHashLink: true },
        { name: 'Glass Glazing Systems', isHashLink: true },
        { name: 'ACP Facade Cladding', isHashLink: true },
        { name: 'uPVC Windows & Doors', isHashLink: true },
        { name: 'Aluminum Windows, Doors & roof', isHashLink: true },
        { name: 'Interior Design Solutions', isHashLink: true },
        { name: 'GRC/FRC/WPC Work', isHashLink: true },
        { name: 'Aluminum/Steel/MS/Glass Railing', isHashLink: true },
        { name: 'False Ceiling Work', isHashLink: true },
      ],
    },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT US', path: '/contact' },
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

  const renderDropdownItem = (link, item, index) => {
    if (link.name === 'SERVICES') {
      return (
        <button
          key={item.name}
          type="button"
          onClick={() => handleServiceClick(index)}
          className="block w-full text-left px-5 py-3 border-b border-black/10 last:border-b-0 font-display font-medium text-[12px] tracking-[0.18em] text-[#C9050B] uppercase hover:bg-black/5 transition-colors duration-300"
        >
          {item.name}
        </button>
      );
    }

    return item.isHashLink ? (
      <HashLink
        key={item.name}
        smooth
        to={item.path}
        className="block px-5 py-3 border-b border-black/10 last:border-b-0 font-display font-medium text-[12px] tracking-[0.18em] text-[#C9050B] uppercase hover:bg-black/5 transition-colors duration-300"
      >
        {item.name}
      </HashLink>
    ) : (
      <Link
        key={item.name}
        to={item.path}
        className="block px-5 py-3 border-b border-black/10 last:border-b-0 font-display font-medium text-[12px] tracking-[0.18em] text-[#C9050B] uppercase hover:bg-black/5 transition-colors duration-300"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Spacer — occupies space of the Sticky Navbar when at the top */}
      <div className="w-full pointer-events-none h-[82px] lg:hidden" />
      
      {/* ----------------------------- */}
      {/* MAIN NAVBAR (Normal document flow, Desktop only) */}
      {/* ----------------------------- */}
      <nav className="hidden lg:flex relative w-full z-[80] flex-col items-center">
        {/* Row 1: Top Bar */}
        <div className="w-full bg-brand-primary border-brand-dark hidden lg:flex items-center justify-center h-[70px] border-b">
          <div className="w-full h-full flex items-center px-0 max-w-[1920px] flex-nowrap">
            {/* Rebranded Logo */}
            <div className="flex-shrink-0 lg:w-[240px] xl:w-[300px] h-full flex items-center justify-center px-4 border-r border-brand-dark px1-cursor group relative overflow-hidden">
              <Link to="/" className="flex flex-row items-center justify-center gap-[12px] transition-transform duration-700 group-hover:scale-105">
                <img src={logo} alt="Shri Shyam G Group Logo" className="w-[58px] h-[58px] object-contain flex-shrink-0" />
                <span className="text-brand-accent font-display font-bold text-[13px] xl:text-[14.6px] leading-[25.92px] uppercase tracking-[0.137em] text-center whitespace-normal">
                  Shri Shyam G Group
                </span>
              </Link>
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
                          info.id === 'find' ? 'whitespace-normal line-clamp-2' : 'whitespace-nowrap'
                        }`}
                      >
                        {info.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Main Navigation (Slogan version) */}
        <div className="w-full h-[82px] bg-brand-primary flex items-center justify-center border-b border-black/5 lg:border-none">
          <div className="w-full flex items-center h-full px-[0px] max-w-[1920px] flex-nowrap">
            <div className="flex lg:hidden items-center h-full flex-grow px-4 px1-cursor">
              <Link to="/" className="flex flex-row items-center gap-[12px]">
                <img src={logo} alt="Shri Shyam G Group Logo" className="w-[58px] h-[58px] object-contain flex-shrink-0" />
                <span className="text-brand-accent font-display font-bold text-[13px] sm:text-[14.6px] leading-[25.92px] uppercase tracking-[0.137em] whitespace-normal">
                  Shri Shyam G Group
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:w-[240px] xl:w-[300px] h-full bg-brand-primary items-center justify-center px-4 border-r border-brand-dark flex-shrink-0 px1-cursor">
              <span className="text-brand-accent font-display font-medium text-[12px] xl:text-[14px] 2xl:text-[15px] leading-[25.92px] tracking-[0.1133em] uppercase text-center whitespace-nowrap">
                YOUR DELIGHT, OUR VICTORY.
              </span>
            </div>

            <div className="flex-grow h-full bg-brand-primary hidden lg:flex items-center px-4 xl:px-6 2xl:px-[25px] overflow-visible">
              <div className="flex items-center flex-nowrap gap-4 xl:gap-6 2xl:gap-[36.7px] px-2 min-w-0">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group flex items-center gap-2 xl:gap-3">
                    {link.hasDropdown && <div className="w-[3px] h-[10px] bg-brand-secondary flex-shrink-0" />}
                    {link.path ? (
                      <Link to={link.path} className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0">
                        {link.name}
                      </a>
                    )}

                    {link.dropdownItems && (
                      <div className="absolute top-full left-0 pt-7 opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out z-[80]">
                        <div className={`${link.name === 'SERVICES' ? 'w-[280px]' : 'w-[200px]'} bg-white shadow-lg border border-black/10`}>
                          {link.dropdownItems.map((item, index) => renderDropdownItem(link, item, index))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[220px] xl:w-[252px] h-full bg-brand-secondary hidden lg:flex items-center justify-center group overflow-hidden relative flex-shrink-0">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="relative z-10 w-full h-full font-display font-medium text-[13px] xl:text-[14.5px] tracking-[0.069em] text-white uppercase transition-all duration-700 whitespace-nowrap px-4"
              >
                REQUEST A QUOTE
              </button>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms]" />
            </div>

            <button className="lg:hidden ml-auto p-4 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <><span className="sm:hidden">{isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}</span><span className="hidden sm:inline"><Menu size={32} /></span></>
            </button>
          </div>
        </div>
      </nav>

      {/* ----------------------------- */}
      {/* STICKY NAVBAR (Slides down on reverse scroll, unified for Mobile) */}
      {/* ----------------------------- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[90] flex flex-col items-center transition-transform duration-[600ms] ease-in-out ${
          isSticky ? 'shadow-xl' : ''
        } ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isSticky && isVisible ? 'lg:translate-y-0' : 'lg:-translate-y-full'
        }`}
      >
        <div className={`w-full flex items-center justify-center transition-colors duration-500 h-[82px] lg:h-[75px] ${
          isSticky ? 'bg-brand-primary/95 backdrop-blur-lg border-b border-white/10' : 'bg-brand-primary border-b border-black/5'
        }`}>
          <div className="w-full flex items-center h-full px-[0px] max-w-[1920px] flex-nowrap">
            <div className="flex lg:hidden items-center h-full flex-grow px-4 px1-cursor">
              <Link to="/" className="flex flex-row items-center gap-[12px]">
                <img src={logo} alt="Shri Shyam G Group Logo" className="w-[58px] h-[58px] object-contain flex-shrink-0" />
                <span className="text-brand-accent font-display font-bold text-[13px] sm:text-[14.6px] leading-[25.92px] uppercase tracking-[0.137em] whitespace-normal">
                  Shri Shyam G Group
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:w-[240px] xl:w-[300px] h-full items-center justify-center px-4 border-r border-white/10 flex-shrink-0 px1-cursor">
              <Link to="/" className="flex flex-row items-center justify-center gap-[12px] transition-transform duration-700 hover:scale-105">
                <img src={logo} alt="Shri Shyam G Group Logo" className="w-[58px] h-[58px] object-contain flex-shrink-0" />
                <span className="text-brand-accent font-display font-bold text-[13px] xl:text-[14.6px] leading-[25.92px] uppercase tracking-[0.137em] text-center whitespace-normal">
                  Shri Shyam G Group
                </span>
              </Link>
            </div>

            <div className="flex-grow h-full hidden lg:flex items-center px-4 xl:px-6 2xl:px-[25px] overflow-visible">
              <div className="flex items-center flex-nowrap gap-4 xl:gap-6 2xl:gap-[36.7px] px-2 min-w-0">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group flex items-center gap-2 xl:gap-3">
                    {link.hasDropdown && <div className="w-[3px] h-[10px] bg-brand-secondary flex-shrink-0" />}
                    {link.path ? (
                      <Link to={link.path} className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0">
                        {link.name}
                      </a>
                    )}

                    {link.dropdownItems && (
                      <div className="absolute top-full left-0 pt-6.5 opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out z-[80]">
                        <div className={`${link.name === 'SERVICES' ? 'w-[280px]' : 'w-[200px]'} bg-white shadow-lg border border-black/10`}>
                          {link.dropdownItems.map((item, index) => renderDropdownItem(link, item, index))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[220px] xl:w-[252px] h-full bg-brand-secondary hidden lg:flex items-center justify-center group overflow-hidden relative flex-shrink-0">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="relative z-10 w-full h-full font-display font-medium text-[13px] xl:text-[14.5px] tracking-[0.069em] text-white uppercase transition-all duration-700 whitespace-nowrap px-4"
              >
                REQUEST A QUOTE
              </button>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms]" />
            </div>

            <button className="lg:hidden ml-auto p-4 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <><span className="sm:hidden">{isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}</span><span className="hidden sm:inline"><Menu size={32} /></span></>
            </button>
          </div>
        </div>
      </nav>

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
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-row items-center gap-[12px] min-w-0"
                >
                  <img src={logo} alt="Shri Shyam G Group Logo" className="w-[58px] h-[58px] object-contain flex-shrink-0" />
                  <span className="text-brand-primary font-display font-bold text-[14px] sm:text-[16px] leading-[1.2] uppercase tracking-[0.1em] whitespace-nowrap overflow-hidden text-ellipsis">
                    Shri Shyam G Group
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 p-2 shrink-0"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col overflow-y-auto flex-grow">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-100">
                    <div className="flex items-center justify-between px-5 py-4">
                      {link.path ? (
                          <Link
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-brand-primary uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-brand-primary uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0"
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

                    {link.dropdownItems && expandedLinks[link.name] && (
                      <div className="flex flex-col bg-gray-50">
                        {link.dropdownItems.map((item, index) => (
                          link.name === 'SERVICES' ? (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => handleServiceClick(index)}
                              className="block w-full text-left px-8 py-3 border-t border-gray-100 font-display font-medium text-[12px] tracking-[0.12em] text-[#C9050B] uppercase"
                            >
                              {item.name}
                            </button>
                          ) : (
                            <HashLink
                              key={item.name}
                              smooth
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-8 py-3 border-t border-gray-100 font-display font-medium text-[12px] tracking-[0.12em] text-[#C9050B] uppercase"
                            >
                              {item.name}
                            </HashLink>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quote Popup */}
      <AnimatePresence>
        {isQuoteOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/60"
              onClick={() => setIsQuoteOpen(false)}
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[100] bg-white overflow-y-auto"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsQuoteOpen(false)}
                className="fixed top-5 right-5 z-[110] w-10 h-10 rounded-full bg-[#7D0000] text-white flex items-center justify-center hover:bg-[#C9050B] transition-colors duration-300"
              >
                <X size={22} />
              </button>

              <ContactForm isPopup />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScroll from '../hooks/useScroll';
import Button from './ui/Button';
import SearchOverlay from './ui/Search';
import { PhoneIncoming, Send, MapPin, Search, Menu, X, ChevronDown, Construction } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const isScrolled = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedLinks, setExpandedLinks] = useState({});

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '#about', hasDropdown: true },
    { name: 'SERVICES', href: '#services', hasDropdown: true },
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
    <nav className="relative w-full z-50 flex flex-col items-center">
      {/* Row 1: Top Bar */}
      <div className="w-full bg-brand-primary h-[70px] border-b border-brand-dark hidden lg:flex items-center justify-center">
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
                className={`h-full flex items-center px-1 xl:px-6 2xl:px-8 group hover:bg-white/5 transition-colors cursor-pointer flex-grow min-w-0 ${
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
                      className={`font-body font-normal text-[11px] xl:text-[13px] 2xl:text-[16px] leading-[17.6px] text-brand-light mt-1 ${
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

      {/* (No changes below this line) */}

      <div
        className={`w-full h-[82px] bg-brand-primary transition-all duration-[1200ms] ease-in-out flex items-center justify-center border-b border-black/5 lg:border-none ${
          isScrolled ? 'h-[70px] bg-brand-primary/95 backdrop-blur-md' : ''
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
                  <a
                    href={link.href}
                    className="font-display font-medium text-[12px] xl:text-[13px] 2xl:text-[14.6px] leading-[25.92px] tracking-[0.137em] text-white uppercase hover:text-brand-accent transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                  >
                    {link.name}
                  </a>
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

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
};

export default Navbar;
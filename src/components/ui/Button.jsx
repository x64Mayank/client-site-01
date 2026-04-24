import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon: Icon, hoverIcon, rotateOnHover, className = '', href, ...props }) => {
  const baseStyles = 'group flex items-center justify-center rounded-[5px] transition-colors duration-500 ease-out cursor-pointer h-[56px] md:h-[64px] xl:h-[74px] pl-[24px] md:pl-[28px] xl:pl-[34px] pr-[20px] md:pr-[24px] xl:pr-[29px] relative overflow-hidden';
  
  const variants = {
    primary: 'bg-brand-secondary text-white shadow-2xl',
    outline: 'bg-black/40 border border-white/20 backdrop-blur-md text-white shadow-xl',
    dark: 'bg-brand-dark text-white',
    ghost: 'bg-transparent text-white',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`${baseStyles} gap-[40px] md:gap-[55px] xl:gap-[75px] ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-[#0D0D0D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.19,1,0.22,1)]" />
      
      <span className="relative z-10 font-display font-medium text-[11px] md:text-[12px] xl:text-[13px] tracking-[0.0615em] uppercase whitespace-nowrap">
        {children}
      </span>
      {Icon && (
        <div className="relative z-10 flex items-center">
          <Icon 
            size={18} 
            strokeWidth={2.5} 
            className={`transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center ${rotateOnHover ? 'group-hover:rotate-45' : ''}`} 
          />
        </div>
      )}
    </Component>
  );
};

export default Button;

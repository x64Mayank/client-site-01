import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'lg', icon: Icon, hoverIcon, rotateOnHover, className = '', href, ...props }) => {
  const baseStyles = 'group flex items-center justify-center transition-colors duration-500 ease-out cursor-pointer relative overflow-hidden';
  
  const variants = {
    primary: 'rounded-[5px] bg-brand-secondary text-white shadow-2xl',
    outline: 'rounded-[5px] bg-black/40 border border-white/20 backdrop-blur-md text-white shadow-xl',
    'outline-dark': 'border border-[#D9D9D9] text-black hover:border-[#1A1A1A] bg-transparent',
    dark: 'rounded-[5px] bg-brand-dark text-white',
    ghost: 'rounded-[5px] bg-transparent text-white',
  };

  const sizes = {
    md: 'h-[48px] md:h-[52px] xl:h-[55px]',
    lg: 'h-[56px] md:h-[64px] xl:h-[74px]',
  };

  const isSplit = variant === 'outline-dark';
  
  // Padding and gap are different if it's a split button
  const paddingClasses = isSplit 
    ? 'pl-[20px] md:pl-[30px] xl:pl-[37px] pr-[50px] md:pr-[61px] xl:pr-[61px]' // extra pr for absolute icon box
    : size === 'md' 
      ? 'pl-[20px] md:pl-[24px] xl:pl-[30px] pr-[16px] md:pr-[20px] xl:pr-[25px] gap-[30px] md:gap-[45px] xl:gap-[60px]'
      : 'pl-[24px] md:pl-[28px] xl:pl-[34px] pr-[20px] md:pr-[24px] xl:pr-[29px] gap-[40px] md:gap-[55px] xl:gap-[75px]';

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`${baseStyles} ${sizes[size] || sizes.lg} ${paddingClasses} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {!isSplit && (
        <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.19,1,0.22,1)] bg-[#0D0D0D]`} />
      )}
      
      <span className={`relative z-10 font-display font-medium text-[11px] md:text-[12px] xl:text-[13px] tracking-[0.0775em] uppercase whitespace-nowrap ${isSplit ? 'w-full text-center' : ''}`}>
        {children}
      </span>

      {Icon && (
        <div 
          className={`z-10 flex items-center justify-center transition-transform duration-500 
            ${isSplit ? 'absolute right-0 top-0 bottom-0 w-[50px] md:w-[61px] bg-brand-secondary text-white border-l border-[#D9D9D9] group-hover:bg-[#1A1A1A]' : 'relative'}
          `}
        >
          <Icon 
            size={18} 
            strokeWidth={isSplit ? 1.5 : 2.5} 
            className={`transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center ${rotateOnHover ? 'group-hover:rotate-45' : ''}`} 
          />
        </div>
      )}
    </Component>
  );
};

export default Button;

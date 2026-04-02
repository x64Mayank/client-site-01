import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon: Icon, className = '', ...props }) => {
  const baseStyles = 'px-8 py-4 rounded-[2px] font-display font-semibold transition-all duration-500 inline-flex items-center justify-center gap-3 uppercase tracking-[0.1em] text-sm md:text-base cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-xl overflow-hidden relative group',
    outline: 'border border-white/60 text-white hover:bg-white/10 transition-colors',
    dark: 'bg-brand-dark text-white hover:bg-black',
    ghost: 'bg-transparent text-white hover:bg-white/5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {Icon && (
        <motion.span 
          initial={{ x: -2, opacity: 0.5 }}
          whileHover={{ x: 2, opacity: 1 }}
          className="relative z-10"
        >
          <Icon size={18} strokeWidth={2.5} />
        </motion.span>
      )}
      
      {/* Hover background slide effect for premium feel */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      )}
    </motion.button>
  );
};

export default Button;

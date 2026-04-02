import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-brand-sm font-body font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-secondary shadow-brand',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    dark: 'bg-brand-dark text-white hover:bg-black',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

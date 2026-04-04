import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon: Icon, hoverIcon, rotateOnHover, className = '', ...props }) => {
  const baseStyles = 'px-8 py-4 rounded-[2px] font-display font-semibold transition-all duration-500 inline-flex items-center justify-center gap-3 uppercase tracking-[0.1em] text-sm md:text-base cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-xl overflow-hidden relative group',
    outline: 'border border-white/60 text-white hover:bg-white/10 transition-colors',
    dark: 'bg-brand-dark text-white hover:bg-black',
    ghost: 'bg-transparent text-white hover:bg-white/5',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {Icon && (
        <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ x: -2, opacity: 0.5 }}
            animate={{ 
              x: isHovered ? 2 : -2, 
              opacity: isHovered ? 1 : 0.5,
              rotate: (rotateOnHover && isHovered) ? 45 : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center origin-center"
          >
            {/* If hoverIcon is provided, we use the swap logic, otherwise we can just rotate */}
            {!hoverIcon ? (
              <Icon size={18} strokeWidth={2.5} />
            ) : (
              <div className="relative">
                <span className="inline-block transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0 group-hover:scale-0">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                <span className="absolute inset-0 inline-block transition-all duration-500 transform translate-y-full opacity-0 scale-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100">
                  {React.createElement(hoverIcon, { size: 18, strokeWidth: 2.5 })}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      )}
      
      {/* Hover background slide effect for premium feel */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      )}
    </motion.button>
  );
};

export default Button;

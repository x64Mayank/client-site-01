import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel — slides down from top, covers 60% of screen height */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-[110] bg-white flex flex-col items-center justify-center"
            style={{ height: '55vh' }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-[10vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
            >
              <X size={18} strokeWidth={1.8} />
            </button>

            {/* Search Input Area */}
            <div className="w-full max-w-3xl px-8 mt-12">
              <div className="relative flex items-center pb-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search here..."
                  className="flex-grow text-[#075942] text-xl font-display bg-transparent outline-none placeholder-[#075942]/60 tracking-wide"
                />
                <button className="ml-4 text-gray-400 hover:text-[#075942] transition-colors duration-200 flex-shrink-0">
                  <Search size={24} strokeWidth={2.5} />
                </button>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  style={{ originX: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-500"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
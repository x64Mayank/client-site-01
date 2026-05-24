import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Download, ChevronLeft, ChevronRight, Grid2x2 } from 'lucide-react';

const ProjectModal = ({ project, allProjects, onClose, onNavigate }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  // Safe index calculation
  const currentIndex = project ? allProjects.findIndex(p => p.id === project.id) : -1;

  useEffect(() => {
    if (project) setCurrentImgIndex(0);
  }, [project?.id]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : allProjects.length - 1;
      onNavigate(allProjects[prevIndex]);
    }
    if (e.key === 'ArrowRight') {
      const nextIndex = currentIndex < allProjects.length - 1 ? currentIndex + 1 : 0;
      onNavigate(allProjects[nextIndex]);
    }
  }, [currentIndex, allProjects, onClose, onNavigate]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const prevProject = currentIndex >= 0 ? allProjects[currentIndex > 0 ? currentIndex - 1 : allProjects.length - 1] : null;
  const nextProject = currentIndex >= 0 ? allProjects[currentIndex < allProjects.length - 1 ? currentIndex + 1 : 0] : null;

  const images = project?.images || (project?.img ? [project.img] : []);
  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
  };
  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const modalContent = (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 lg:p-8"
            onClick={onClose}
          >
            <div
              className="bg-white w-full max-w-[1300px] h-full sm:h-[94vh] lg:h-[90vh] flex flex-col relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={onClose} className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[100] w-9 h-9 sm:w-10 sm:h-10 btn-brand-solid clip-corner">
                <X size={20} />
              </button>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col md:flex-row min-h-full">
                  
                  {/* PROJECT CONTENT */}
                  <div className="flex-1 p-5 sm:p-8 lg:p-10 flex flex-col min-h-0 bg-white">
                    <div className="mb-6 lg:mb-8 shrink-0">
                      <span className="text-brand-label text-brand-maroon block mb-2">{project.category}</span>
                      <h2 className="font-display text-[26px] sm:text-[32px] lg:text-[42px] font-bold text-brand-dark leading-tight">{project.title}</h2>
                      <div className="w-[60px] lg:w-[80px] h-[3px] bg-brand-maroon mt-4" />
                    </div>

                    <div className="relative w-full aspect-video md:aspect-auto md:flex-1 min-h-[220px] bg-[#f0f0f0] overflow-hidden group mb-6 lg:mb-8 shadow-sm">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${project.id}-${currentImgIndex}`}
                          src={images[currentImgIndex]}
                          alt={project.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      {images.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          {images.map((_, i) => (
                            <button 
                              key={i}
                              onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(i); }}
                              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentImgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
                            />
                          ))}
                        </div>
                      )}

                      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                        <button onClick={handlePrevImage} className="w-10 h-10 btn-brand-solid clip-corner bg-brand-maroon/90">
                          <ChevronLeft size={20} />
                        </button>
                        <button onClick={handleNextImage} className="w-10 h-10 btn-brand-solid clip-corner bg-brand-maroon/90">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <div className="flex flex-wrap items-center gap-x-12 gap-y-4 pt-6 border-t border-black/10">
                        {[
                          { label: 'Location', value: project.location },
                          { label: 'Completion Year', value: project.year },
                          { label: 'Project Category', value: project.category }
                        ].map((spec, i) => spec.value && (
                          <div key={i} className="flex flex-col gap-1.5">
                            <span className="text-brand-label text-black/40">{spec.label}</span>
                            <span className="font-display text-[14px] lg:text-[15px] font-semibold text-brand-dark">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SIDEBAR */}
                  <div className="w-full md:w-[280px] lg:w-[320px] bg-[#F8F8F8] flex flex-col md:border-r border-black/5 shrink-0 md:order-first">
                    <div className="p-5 lg:p-7 flex flex-col gap-6">
                      
                      <div className="bg-white border border-black/10 overflow-hidden clip-corner-lg shadow-sm">
                        <div className="bg-brand-maroon px-5 py-4 clip-corner-lg">
                          <h4 className="font-display text-[15px] font-medium text-white tracking-wide">Company Profile</h4>
                        </div>
                        <div className="px-5 py-4">
                          <p className="font-body text-[12px] text-black/60 mb-4 leading-relaxed">Download our profile to see how we work.</p>
                          <button className="w-full btn-brand-solid py-3 text-[11px] tracking-[0.15em] uppercase flex items-center justify-between group px-4">
                            <span>PROFILE.PDF</span>
                            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>

                      <div className="bg-brand-maroon text-white flex flex-col clip-corner-lg shadow-md overflow-hidden">
                        <div className="p-5 lg:p-6 pb-2">
                          <h4 className="text-brand-label text-white/70 mb-3">Start Work Together</h4>
                          <p className="font-display text-[18px] lg:text-[20px] font-semibold tracking-tight mb-4">+91 6306178578</p>
                          <div className="w-full h-[1px] bg-white/20 mb-4" />
                          <div className="text-[12px] font-body text-white/80 space-y-2">
                            <p className="leading-snug">LGF 001, Beside Saroj Institute,<br />Arjunganj, Sultanpur Road,<br />Lucknow 226002</p>
                            <p>info@shrishyamggroup.com</p>
                          </div>
                        </div>
                        <button className="w-full bg-white/5 border-t border-white/20 text-white px-5 py-4 text-brand-label hover:bg-brand-primary transition-colors duration-300 active:scale-[0.98]">
                          GET YOUR QUOTE
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* STICKY BOTTOM NAV */}
              <div className="shrink-0 border-t border-black/10 px-6 sm:px-8 lg:px-12 py-4 lg:py-5 flex items-center justify-between bg-white z-[110]">
                <button onClick={() => onNavigate(prevProject)} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 btn-brand-solid clip-corner">
                    <ArrowLeft size={20} />
                  </div>
                  <span className="text-brand-label text-brand-dark group-hover:text-brand-primary transition-colors hidden sm:block whitespace-nowrap">Previous Project</span>
                </button>

                <button onClick={onClose} className="cursor-pointer hover:scale-110 active:scale-90 transition-all p-2 bg-[#F8F8F8] hover:bg-brand-maroon/5 rounded-full text-brand-maroon">
                  <Grid2x2 size={24} />
                </button>

                <button onClick={() => onNavigate(nextProject)} className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-brand-label text-brand-dark group-hover:text-brand-primary transition-colors hidden sm:block whitespace-nowrap">Next Project</span>
                  <div className="w-10 h-10 btn-brand-solid clip-corner">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;

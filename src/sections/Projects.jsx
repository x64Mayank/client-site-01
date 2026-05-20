import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, ArrowUpRight, Plus } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';
import { PROJECTS, CATEGORIES } from '../data/projectsData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const filteredProjects = activeCategory === "ALL PROJECTS" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.fullCategory === activeCategory);

  const handleProjectNavigate = (project) => {
    setSelectedProject(project);
  };

  // Track touch for mobile scrolling vs clicking
  const handleTouchStart = (e) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const dx = Math.abs(e.touches[0].clientX - touchStart.x);
    const dy = Math.abs(e.touches[0].clientY - touchStart.y);
    
    // If vertical movement > horizontal movement, it's a scroll not a drag
    if (dy > dx && dy > 10) {
      setIsDragging(false);
    } else if (dx > 10) {
      setIsDragging(true);
    }
  };

  const handleProjectClick = (project) => {
    // Only open modal on desktop or if not dragging on mobile
    if (!isDragging) {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="w-full bg-white relative">
      {/* HEADER SECTION */}
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center bg-white border-b border-gray-50">
        <div className="bg-[#C9050B] w-full xl:w-[464px] h-[160px] lg:h-[252.5px] relative shrink-0 transition-all duration-300 project-title-box">
          <div className="absolute inset-0 flex items-center px-10 lg:pl-[43px] lg:pr-[50px]">
            <h2 className="text-white text-4xl lg:text-[52px] font-medium leading-[1.16] font-display">
              Our Projects.
            </h2>
          </div>
        </div>

        <div className="flex-1 flex flex-row items-center py-4 xl:py-0">
          <div className="flex-1 px-10 lg:pl-[79px] lg:pr-[72px]">
            <p className="text-[#0F0F0F] text-base lg:text-[17px] leading-[29.92px] max-w-[800px] font-body text-left opacity-90">
              With expertise in Glass Glazing Systems, ACP Facade Cladding, uPVC Windows and Doors, and Aluminum Architectural Systems, we create spaces that are elegant, energy-efficient, and built to last.
            </p>
          </div>

          <div className="hidden md:flex shrink-0 px-6 lg:px-0 lg:pr-[43px]">
            <div className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
              <ArrowUpRight size={100} className="lg:hidden text-[#F8B901]" strokeWidth={3} />
              <ArrowUpRight size={200} className="hidden lg:block text-[#F8B901]" strokeWidth={4} />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col xl:flex-row relative">
        {/* TABS */}
        <div className="w-full xl:w-[464px] flex flex-row xl:flex-col flex-wrap items-center xl:items-start justify-center xl:justify-start py-6 xl:py-16 px-6 xl:pl-[43px] xl:pr-10 shrink-0 gap-x-4 gap-y-2 xl:gap-0">
          {CATEGORIES.map((cat, index) => (
            <React.Fragment key={cat}>
              <button
                onClick={() => {
                  setActiveCategory(cat);
                  if (containerRef.current) containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-4 py-3 xl:py-4 group transition-all duration-300 ${
                  activeCategory === cat ? "text-[#C9050B]" : "text-[#313131]/40 hover:text-[#313131]/60"
                }`}
              >
                <div className={`hidden xl:block w-[2px] h-6 bg-[#C9050B] transition-all duration-300 ${
                  activeCategory === cat ? "opacity-100" : "opacity-0"
                }`} />
                <span className={`text-[11px] lg:text-[13px] font-display font-medium tracking-[0.15em] text-center lg:text-left uppercase whitespace-nowrap`}>
                  {cat}
                </span>
              </button>
              {index < CATEGORIES.length - 1 && (
                <span className="xl:hidden text-[#313131]/20 font-light text-xs">|</span>
              )}
            </React.Fragment>
          ))}
          
          {/* VIEW ALL PROJECTS BUTTON (Desktop) */}
          <div className="hidden xl:block mt-auto pt-8">
            <button 
              onClick={() => window.location.href = '/projects'}
              className="group flex items-center gap-3 px-8 py-4 bg-brand-maroon text-white font-display text-[12px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand-primary clip-corner shadow-lg cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* IMAGES + NAV GROUP */}
        <div className="w-full xl:flex-1 flex flex-row overflow-hidden h-[450px] md:h-[500px] lg:h-[600px]" style={{ touchAction: 'pan-y', overscrollBehavior: 'contain' }}>
          <div 
            ref={containerRef}
            className="flex-1 flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory carousel-scroll"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none', touchAction: 'pan-y', overscrollBehavior: 'contain' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={`${project.id}`}
                  layout
                  initial="initial"
                  whileHover="hover"
                  className="w-full sm:w-1/2 lg:w-1/3 h-full relative group overflow-hidden shrink-0 snap-start cursor-pointer border-r border-white/5"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Base Image */}
                  <motion.img 
                    src={project.img} 
                    alt={project.title}
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Dark Overlay */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0.2 },
                      hover: { opacity: 0.4 }
                    }}
                    className="absolute inset-0 bg-black z-10 pointer-events-none" 
                  />

                  {/* SLIDING HOVER CARD */}
                  <motion.div 
                    variants={{
                      initial: { y: '100%' },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 right-0 h-[85%] md:h-[80%] bg-brand-maroon p-6 sm:p-8 lg:p-10 flex flex-col shadow-2xl z-20 pointer-events-none"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
                  >
                    <span className="text-[10px] lg:text-[11px] tracking-[0.2em] uppercase font-display text-white/60 mb-3 lg:mb-4 font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-bold text-white leading-tight mb-3 lg:mb-4 uppercase tracking-wider">
                      {project.title}
                    </h3>
                    <div className="w-[50px] lg:w-[60px] h-[1px] bg-white/20 mb-4 lg:mb-6" />
                    <p className="font-body text-[13px] lg:text-[14px] xl:text-[15px] leading-relaxed text-white/80 mb-6 lg:mb-8 line-clamp-3 sm:line-clamp-4">
                      {project.description}
                    </p>
                    {/* Bottom Arrow */}
                    <div className="mt-auto flex justify-end pb-1 sm:pb-2">
                      <ArrowRight size={24} className="xl:hidden text-white opacity-80" />
                      <ArrowRight size={32} strokeWidth={1.5} className="hidden xl:block text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="hidden xl:flex flex-col w-[80px] h-[600px] bg-[#C9050B] shrink-0">
            <button 
              onClick={() => containerRef.current?.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' })}
              className="flex-1 flex items-center justify-center border-b border-white/20 hover:bg-black/10 transition-colors"
            >
              <ArrowRight className="text-white" size={28} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => containerRef.current?.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' })}
              className="flex-1 flex items-center justify-center hover:bg-black/10 transition-colors"
            >
              <ArrowLeft className="text-white" size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE CONTENT (Arrows + Button) */}
      <div className="xl:hidden bg-white pb-16">
        <div className="flex justify-center gap-4 py-8">
          <button 
            onClick={() => containerRef.current?.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' })}
            className="w-14 h-14 bg-[#C9050B] text-white flex items-center justify-center transition-transform active:scale-95"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={() => containerRef.current?.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' })}
            className="w-14 h-14 bg-[#C9050B] text-white flex items-center justify-center transition-transform active:scale-95"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center px-6">
          <button 
            onClick={() => window.location.href = '/projects'}
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-brand-maroon text-white font-display text-[12px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand-primary clip-corner shadow-lg cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleProjectNavigate}
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .project-title-box {
          clip-path: none;
        }
        @media (min-width: 1280px) {
          .project-title-box {
            clip-path: polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

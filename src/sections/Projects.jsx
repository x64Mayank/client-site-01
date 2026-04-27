import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  "RESIDENTIAL PROJECTS",
  "COMMERCIAL COMPLEXES",
  "CORPORATE OFFICES",
  "HOTELS & HOSPITALITY",
  "HOSPITALS & INSTITUTIONS",
  "RETAIL & SHOPPING CENTERS"
];

const PROJECTS = [
  {
    id: 1,
    title: "Lodha Bellisimo",
    category: "Residential",
    fullCategory: "RESIDENTIAL PROJECTS",
    desc: "Facade project featuring performance windows, delivering a crisp contemporary envelope and durable performance for this development in Mumbai.",
    img: "/images/projects/project-1.png",
  },
  {
    id: 2,
    title: "American Embassy",
    category: "Commercial",
    fullCategory: "COMMERCIAL COMPLEXES",
    desc: "Facade project featuring glazing, cladding, stone cladding and strong wall, delivering a crisp contemporary envelope and durable performance for this development.",
    img: "/images/projects/project-2.png",
  },
  {
    id: 3,
    title: "Avighna House",
    category: "Residential",
    fullCategory: "RESIDENTIAL PROJECTS",
    desc: "Premium residential facade solution with high-performance glass and precision-engineered frames for maximum comfort and aesthetics.",
    img: "/images/projects/project-3.png",
  },
  {
    id: 4,
    title: "Satguru Residency",
    category: "Residential",
    fullCategory: "RESIDENTIAL PROJECTS",
    desc: "Facade project featuring windows, delivering a crisp contemporary envelope and durable performance for this development in Mumbai.",
    img: "/images/projects/project-4.png",
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const containerRef = useRef(null);

  const filteredProjects = PROJECTS.filter(p => p.fullCategory === activeCategory);
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : PROJECTS;

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'next' ? 400 : -400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="bg-white overflow-hidden w-full">
      {/* HEADER SECTION - FULL WIDTH (Responsive Layout) */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center bg-white border-b border-gray-50">
        {/* OUR PROJECTS TITLE BAR - Full width on mobile/tablet, 464px on Desktop */}
        <div 
          className="bg-[#C9050B] w-full lg:w-[464px] h-[160px] lg:h-[252.5px] relative shrink-0 transition-all duration-300 project-title-box"
        >
          <div className="absolute inset-0 flex items-center px-10 lg:pl-[83px] lg:pr-[50px]">
            <h2 className="text-white text-4xl lg:text-[52px] font-medium leading-[1.16] font-display">
              Our Projects.
            </h2>
          </div>
        </div>


        {/* DESCRIPTION + ARROW ROW (Tablet/Mobile structure) */}
        <div className="flex-1 flex flex-row items-center py-10 lg:py-0">
          {/* DESCRIPTION TEXT */}
          <div className="flex-1 px-10 lg:pl-[79px] lg:pr-[72px]">
            <p className="text-[#0F0F0F] text-base md:text-[17px] leading-[1.76] max-w-[620px] font-light text-left font-display">
              From bustling IT corridors to serene educational campuses, Alfa Facade Systems has left its mark on India’s most prestigious developments. Explore how we’ve transformed architectural visions into reality.
            </p>
          </div>

          {/* YELLOW ARROW - Anchored to the right */}
          <div className="shrink-0 px-6 lg:px-0 lg:pr-[43px]">
            <div className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
              <ArrowUpRight size={100} className="lg:hidden text-[#F8B901]" strokeWidth={3} />
              <ArrowUpRight size={200} className="hidden lg:block text-[#F8B901]" strokeWidth={4} />
            </div>
          </div>
        </div>
      </div>






      {/* CONTENT SECTION - FULL WIDTH */}
      <div className="flex flex-col lg:flex-row relative">
        {/* TABS (LEFT/CENTERED) - WIDTH MATCHES RED BOX (464px) ON DESKTOP */}
        <div className="w-full lg:w-[464px] flex flex-row lg:flex-col flex-wrap justify-center lg:justify-start pt-12 lg:pt-20 pb-12 lg:pb-20 px-6 lg:pl-[83px] lg:pr-10 shrink-0 gap-2 lg:gap-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                if (containerRef.current) containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-4 py-3 lg:py-4 group transition-all duration-300 ${
                activeCategory === cat ? "text-[#C9050B]" : "text-[#313131]/40 hover:text-[#313131]/60"
              }`}
            >
              <div className={`hidden lg:block w-[2px] h-6 bg-[#C9050B] transition-all duration-300 ${
                activeCategory === cat ? "opacity-100" : "opacity-0"
              }`} />
              <span className={`text-[11px] lg:text-[13px] font-medium tracking-[0.15em] text-center lg:text-left uppercase`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* SIDEWAYS IMAGE SCROLL AREA */}
        <div 
          ref={containerRef}
          className="flex-1 flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {displayProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="w-full sm:w-1/2 lg:w-1/3 h-[500px] lg:h-[600px] relative group overflow-hidden shrink-0 snap-start"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              {/* TEXT OVERLAY */}
              <div className="absolute top-12 left-0 w-full px-10 z-20">
                <h4 className="text-white text-2xl lg:text-3xl font-display uppercase tracking-widest leading-tight opacity-90 group-hover:opacity-100 transition-opacity whitespace-pre-line drop-shadow-2xl">
                  {project.title.split(' ').join('\n')}
                </h4>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors z-10" />
            </div>
          ))}
        </div>

        {/* RED NAVIGATION BOX (FAR RIGHT - STACKED ARROWS) */}
        <div className="hidden lg:flex flex-col w-[80px] h-[600px] bg-[#C9050B] shrink-0">
          <button 
            onClick={() => containerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="flex-1 flex items-center justify-center border-b border-white/10 hover:bg-black/10 transition-colors"
          >
            <ArrowRight className="text-white" size={24} />
          </button>
          <button 
            onClick={() => containerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="flex-1 flex items-center justify-center hover:bg-black/10 transition-colors"
          >
            <ArrowLeft className="text-white" size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE NAV ARROWS - BELOW IMAGES */}
      <div className="flex lg:hidden justify-center gap-4 py-8 border-t border-gray-50">
        <button 
          onClick={() => containerRef.current?.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })}
          className="w-14 h-14 bg-[#C9050B] text-white flex items-center justify-center transition-transform active:scale-95"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={() => containerRef.current?.scrollBy({ left: window.innerWidth, behavior: 'smooth' })}
          className="w-14 h-14 bg-[#C9050B] text-white flex items-center justify-center transition-transform active:scale-95"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      
      {/* CSS for responsive elements */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .project-title-box {
          clip-path: none;
        }
        @media (min-width: 1024px) {
          .project-title-box {
            clip-path: polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;


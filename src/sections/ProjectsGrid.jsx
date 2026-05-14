import React, { useState, useCallback } from 'react';
import { ArrowRight, ArrowDown, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectModal from '../components/ProjectModal';

import { PROJECTS, CATEGORIES } from '../data/projectsData';

const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "ALL PROJECTS" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.fullCategory === activeCategory);

  const displayProjects = filteredProjects.slice(0, visibleCount);

  const handleNavigate = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  return (
    <section className="w-full bg-brand-background py-[118px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px]">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-[60px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`font-display font-medium text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                activeCategory === cat ? 'text-brand-maroon' : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[74px]">
          {displayProjects.map((project, idx) => (
            <div 
              key={`${project.id}-${idx}`}
              onClick={() => setSelectedProject(project)}
              className="relative group w-full h-[468px] overflow-hidden cursor-pointer"
            >
              {/* Image Container with Top-Right Cut */}
              <div className="w-full h-full relative overflow-hidden [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)]">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              </div>

              {/* Text Box with Top-Right Cut */}
              <div className="absolute -bottom-[100px] group-hover:bottom-0 left-0 bg-brand-maroon px-[30px] pt-[40px] pb-[35px] w-[85%] transition-all duration-500 z-20 flex flex-col [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)]">
                <span className="font-display font-medium text-[11px] tracking-[0.1em] text-white/60 uppercase block mb-[10px]">
                  {project.category}
                </span>
                
                <h3 className="font-display font-medium text-[22px] lg:text-[24px] leading-[1.2] text-white uppercase mb-5 relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-[86px] after:h-[2px] after:bg-white/20">
                  {project.title}
                </h3>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-[15px]">
                  <p className="font-body text-[15px] leading-[26px] text-[#C2C2C2] line-clamp-3 mb-[15px]">
                    {project.description || "Outstanding project delivered with precision and excellence."}
                  </p>
                  
                  <div className="flex justify-end w-full">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="flex items-stretch group cursor-pointer"
            >
              <div className="border border-brand-border bg-white px-[38px] py-[15px] font-display font-medium text-[13px] tracking-[0.15em] text-brand-maroon uppercase flex items-center justify-center transition-colors group-hover:border-brand-maroon">
                VIEW MORE PROJECTS
              </div>
              <div className="w-[50px] bg-brand-maroon flex items-center justify-center ml-[5px] transition-transform group-hover:translate-y-1">
                <ArrowDown size={20} className="text-white" strokeWidth={1.5} />
              </div>
            </button>
          </div>
        )}

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          allProjects={filteredProjects}
          onClose={() => setSelectedProject(null)}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
};

export default ProjectsGrid;


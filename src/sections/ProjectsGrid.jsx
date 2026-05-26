import React, { useState, useCallback } from 'react';
import { ArrowRight, ArrowDown, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectModal from '../components/ProjectModal';

import { useProjects } from '../context/ProjectContext';

const ProjectsGrid = () => {
  const { projects: PROJECTS } = useProjects();
  const STATUS_FILTERS = ["ALL PROJECTS", "COMPLETED", "ON-GOING"];
  const [activeStatus, setActiveStatus] = useState("ALL PROJECTS");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeStatus === "ALL PROJECTS" 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        const status = p.status || "Completed";
        // Normalize "On-Going" to "ON-GOING" and "Completed" to "COMPLETED"
        return status.replace('-', '').toUpperCase() === activeStatus.replace('-', '').toUpperCase();
      });

  const displayProjects = filteredProjects.slice(0, visibleCount);

  const handleNavigate = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  return (
    <section className="w-full bg-brand-background py-[118px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px]">
        
        {/* Status Filters */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-[60px]">
          {STATUS_FILTERS.map((status) => (
            <button
              key={status}
              onClick={() => {
                setActiveStatus(status);
                setVisibleCount(6);
              }}
              className={`font-display font-medium text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                activeStatus === status ? 'text-brand-maroon' : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] auto-rows-max mb-[74px]">
          {displayProjects.map((project, idx) => (
            <div 
              key={`${project.id}-${idx}`}
              onClick={() => setSelectedProject(project)}
              className="relative group w-full overflow-hidden cursor-pointer aspect-square"
            >
              {/* Image Container with Top-Right Cut */}
              <div className="w-full h-full relative overflow-hidden [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)]">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3 py-1 font-display font-medium text-[9px] tracking-[0.1em] text-white uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] border border-white/5">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    (project.status || 'Completed').toUpperCase() === 'COMPLETED' ? 'bg-emerald-400' : 'bg-amber-400'
                  }`} />
                  {project.status || 'Completed'}
                </div>
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              </div>

              {/* Text Box with Top-Right Cut */}
              <div className="absolute -bottom-[55px] group-hover:bottom-0 left-0 bg-brand-maroon px-[30px] pt-[28px] pb-[24px] w-[85%] h-[165px] transition-all duration-500 z-20 flex flex-col [clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)]">
                <span className="font-display font-medium text-[11px] tracking-[0.1em] text-white/60 uppercase block mb-[10px]">
                  {project.category}
                </span>
                
                <h3 className="font-display font-medium text-[12px] lg:text-[14px] leading-[1.2] text-white uppercase mb-5 relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-[86px] after:h-[2px] after:bg-white/20">
                  {project.title}
                </h3>

                <div className="absolute bottom-[24px] right-[30px]">
                  <ArrowRight size={24} className="text-white" />
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
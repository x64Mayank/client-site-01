import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import { useProjects } from "../context/ProjectContext";
import ProjectModal from "../components/ProjectModal";

const Hero = () => {
  const heroSlides = [
    {
      img: "/images/projects/project-3/project-image-4.webp",
      projectId: 3,
    },
    {
      img: "/images/projects/project-1/project-image-2.webp",
      projectId: 1,
    },
    {
      img: "/images/projects/project-4/project-image-1.webp",
      projectId: 4,
    },
    {
      img: "/images/projects/project-8/project-image-1.webp",
      projectId: 8,
    },
    {
      img: "/images/projects/project-9/project-image-1.webp",
      projectId: 9,
    },
    {
      img: "/images/projects/project-10/project-image-1.webp",
      projectId: 10,
    },
  ];

  const fallbackSlidesData = {
    3: {
      title: "Dr. KNS Memorial Institute of Medical Sciences",
      category: "Residential",
      location: "Barabanki, Uttar Pradesh",
      status: "Completed",
      img: "/images/projects/project-3/project-image-4.webp"
    },
    1: {
      title: "Cine Royale Multiplex",
      category: "Residential",
      location: "NepalGunj, Nepal",
      status: "Completed",
      img: "/images/projects/project-1/project-image-2.webp"
    },
    4: {
      title: "King George's Medical University (KGMU)",
      category: "Residential",
      location: "Chowk, Lucknow, UP",
      status: "Completed",
      img: "/images/projects/project-4/project-image-1.webp"
    },
    8: {
      title: "Nalanda University Library",
      category: "Institution",
      location: "Nalanda, Bihar",
      status: "Completed",
      img: "/images/projects/project-8/project-image-1.webp"
    },
    9: {
      title: "Motorola Office",
      category: "Retail",
      location: "Lucknow, Uttar Pradesh",
      status: "Completed",
      img: "/images/projects/project-9/project-image-1.webp"
    },
    10: {
      title: "BCC Greens & Heights",
      category: "Residential",
      location: "Lucknow, Uttar Pradesh",
      status: "Completed",
      img: "/images/projects/project-10/project-image-1.webp"
    }
  };

  const { projects } = useProjects();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Preload subsequent images to avoid transition flicker
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentIndex];
  const dynamicProject = projects?.find((p) => String(p.id) === String(currentSlide.projectId));
  const currentProject = dynamicProject || fallbackSlidesData[currentSlide.projectId];

  return (
    <section className="relative min-h-[calc(100vh-82px)] lg:min-h-[calc(100vh-152px)] flex items-start md:items-center overflow-hidden bg-brand-dark pt-16 sm:pt-32 pb-24 md:py-28 xl:py-32">
      {/* Background Slideshow with Parallax & Ken Burns effect */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/45 z-10 pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src={currentSlide.img}
                alt="Shri Shyam G Group - Premium Architecture"
                className="w-full h-full object-cover"
                fetchPriority={currentIndex === 0 ? "high" : "auto"}
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content Container - Centered and Scale-Optimized */}
      <div className="w-full pl-6 md:pl-10 lg:pl-10 pr-6 md:pr-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl xl:max-w-4xl"
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl xl:text-7xl font-display font-medium leading-[1.1] mb-6 md:mb-8 tracking-tight px1-cursor">
            Welcome to the world of Shri Shyam G Group.
          </h1>

          <p className="text-white/85 text-base md:text-lg lg:text-xl font-body max-w-xl md:max-w-2xl mb-8 md:mb-12 leading-relaxed tracking-wide px1-cursor">
            For over a decade since 2012, our passion and dedication have
            allowed us to transform the face of residential and commercial
            projects across Uttar Pradesh, Bihar, and Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <Button
              variant="primary"
              icon={ArrowUpRight}
              rotateOnHover
              href="/services"
              className="w-full sm:w-fit xl:w-[303px]"
            >
              View All Services
            </Button>

            <Button
              variant="primary"
              icon={ArrowUpRight}
              rotateOnHover
              href="/projects"
              className="w-full sm:w-fit xl:w-[273px]"
            >
              Our Projects
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Featured Project Floating Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-24 left-6 right-6 md:bottom-12 md:right-12 md:left-auto z-30 max-w-[calc(100%-48px)] md:max-w-md w-auto md:w-[420px] bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 flex gap-4 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group"
          onClick={() => {
            setSelectedProject(currentProject);
          }}
        >
          {/* Left: Project Image Thumbnail */}
          <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden border border-black/5 bg-gray-100">
            <img
              src={currentProject.img || currentSlide.img}
              alt={currentProject.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Right: Project Info */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Category & Status Badges */}
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-[10px] uppercase font-display tracking-widest text-[#C9050B] font-bold bg-[#C9050B]/10 px-2 py-0.5 rounded">
                  {currentProject.category}
                </span>
                <span className="text-[10px] uppercase font-display tracking-widest text-black/60 bg-black/5 px-2 py-0.5 rounded font-medium">
                  {currentProject.status || "Completed"}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-sm md:text-base font-display font-bold text-brand-dark line-clamp-2 leading-tight">
                {currentProject.title}
              </h3>
            </div>

            {/* Location & Navigation Shortcut */}
            <div className="flex items-center justify-between border-t border-black/5 pt-2 mt-2">
              <span className="text-[11px] text-black/50 font-body flex items-center gap-1 truncate max-w-[70%]">
                📍 {currentProject.location}
              </span>
              <span className="text-[10px] font-display font-semibold text-[#C9050B] uppercase tracking-wide flex items-center gap-0.5">
                Details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Scroll Indicator - Adjusted for better visibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-6 md:bottom-12 left-6 md:left-12 flex flex-col items-start gap-3 md:gap-4 px1-cursor"
      >
        <span className="text-white/40 text-[9px] md:text-xs uppercase tracking-[0.4em] font-display">
          Scroll To Discover
        </span>
        <div className="w-[80px] md:w-[120px] h-[1px] bg-gradient-to-r from-brand-primary to-transparent" />
      </motion.div>
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          allProjects={projects && projects.length > 0 ? projects : Object.values(fallbackSlidesData)}
          onClose={() => setSelectedProject(null)}
          onNavigate={(proj) => setSelectedProject(proj)}
        />
      )}
    </section>
  );
};

export default Hero;


import React, { useRef } from 'react';
import { HashLink } from "react-router-hash-link";
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Leadership = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to horizontal movement (e.g., -5% to 5%)
  const xRaw = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  
  // Add physics-based smoothing (Spring) for buttery performance
  const xTransform = useSpring(xRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      id="leadership" 
      ref={sectionRef}
      className="w-full mt-5 lg:mt-10 relative flex flex-col lg:flex-row lg:items-stretch lg:justify-end overflow-hidden"
    >
      {/* BACKGROUND IMAGE / TOP IMAGE ON MOBILE - With Smooth Parallax */}
      <div className="relative lg:absolute lg:inset-0 z-0 h-[400px] lg:h-auto w-full overflow-hidden">
        <motion.img 
          src="/images/leadership/leadership-bg.png" 
          alt="Alfa Facade Leadership" 
          style={{ x: xTransform, willChange: "transform" }}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/10 lg:bg-black/20" />
      </div>


      {/* CONTENT BOX (RED) - Stacks on mobile, Overlays on desktop */}
      <div className="relative z-10 w-full lg:w-[45%] bg-[#C9050B] flex items-center justify-center px-8 lg:px-20 py-16 lg:py-0 leadership-box min-h-[500px] lg:min-h-[700px]">
        <div className="max-w-[480px]">
          {/* TITLE WITH ACCENT */}
          <div className="relative mb-10 pb-6 border-b border-white/20">
            <h2 className="text-white text-4xl lg:text-[52px] font-medium leading-tight font-display uppercase">
              Our Leadership.
            </h2>
            {/* WHITE ACCENT LINE */}
            <div className="absolute bottom-0 right-0 w-[86px] h-[3px] bg-white translate-y-[1.5px]" />
          </div>

          {/* DESCRIPTION */}
          <p className="text-white text-base lg:text-[16px] leading-[1.8] font-body mb-6 opacity-90">
            At SSG Group, we are dedicated to building long-term relationships and making a positive impact in the lives of those we serve. I am proud to lead a team of talented professionals who share my commitment to excellence and customer satisfaction.
          </p>

          <p className="text-white text-base lg:text-[16px] leading-[1.8] font-body mb-12 opacity-90">
            Thank you for entrusting us with your business. We look forward to exceeding your expectations and creating a brighter future together.
          </p>

          {/* BRAND BUTTON (Clean version - no fill animation) */}
          <HashLink
            to="/about#team-grid"
            className="inline-flex flex-row items-center group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            {/* Text column */}
            <div className="relative flex flex-col items-center justify-center w-[220px] lg:w-[260px] h-[52.5px] bg-white border border-[#D9D9D9] px-4">
              {/* Text */}
              <span className="relative z-10 font-display text-[11px] lg:text-[13px] font-medium uppercase tracking-[0.077em] text-black leading-[53px] whitespace-nowrap">
                meet our leadership team
              </span>
            </div>
            {/* Icon wrapper */}
            <div className="pl-[6px]">
              {/* Icon box */}
              <div className="bg-[#7D0000] w-[55px] h-[55px] flex items-center justify-center">
                <ArrowUpRight className="text-white w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center group-hover:rotate-45" />
              </div>
            </div>
          </HashLink>

        </div>
      </div>

      <style>{`
        .leadership-box {
          clip-path: none;
        }
        @media (min-width: 1024px) {
          .leadership-box {
            clip-path: polygon(80px 0, 100% 0, 100% 100%, 0 100%, 0 80px);
          }
        }
      `}</style>
    </section>

  );
};

export default Leadership;

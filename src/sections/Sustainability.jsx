import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SustainabilityTabs from "../components/SustainabilityTabs";

const SustainabilitySection = () => {
  return (
    <>
    <section className="w-full bg-[#FACE4D] px-6 lg:px-16 py-14 relative">
      
      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <h2 className="text-[#C9050B] text-[32px] lg:text-[48px] font-semibold leading-tight max-w-[600px]">
          We Are Committed To Environmental
          <br />
          And Social Sustainability
        </h2>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 max-w-[520px]">
          <p className="text-[14px] text-black/70 leading-relaxed">
            At Alfa Facade Systems, sustainability isn’t an afterthought—it’s
            integral to how we engineer, source, and install. We’re committed
            to reducing environmental impact while delivering facades that
            improve building energy efficiency and occupant comfort.
          </p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center"
          >
            <a href="#projects" className="inline-flex flex-row items-center group">
              
              {/* Text box */}
              <div className="relative flex flex-col items-center justify-center w-[160px] md:w-[180px] xl:w-[193px] px-[28px] md:px-[34px] xl:px-[37px]">
                
                {/* Border + hover fill */}
                <div className="absolute left-0 top-[0.5px] w-full h-[44px] md:h-[50px] xl:h-[52.5px] bg-white border border-black/20 overflow-hidden group-hover:border-[#C9050B] transition-colors duration-500">
                  
                  {/* Fill animation */}
                  <div className="absolute inset-0 bg-[#C9050B] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </div>

                {/* Text */}
                <span className="relative z-10 text-[11px] md:text-[12px] xl:text-[13px] font-medium uppercase tracking-[0.08em] text-black leading-[44px] md:leading-[50px] xl:leading-[53px] transition-colors duration-500 group-hover:text-white whitespace-nowrap">
                  VIEW PROJECTS
                </span>
              </div>

              {/* Icon */}
              <div className="pl-[4px] md:pl-[5px] xl:pl-[6px]">
                <div className="bg-[#C9050B] w-[40px] h-[40px] md:w-[48px] md:h-[48px] xl:w-[55px] xl:h-[55px] flex items-center justify-center">
                  <ArrowUpRight className="text-white w-[14px] h-[14px] md:w-[17px] md:h-[17px] xl:w-5 xl:h-5 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:rotate-45" />
                </div>
              </div>

            </a>
          </motion.div>
        </div>

      </div>
    </section>
    <SustainabilityTabs />
    </>
  );
};

export default SustainabilitySection;
import React, { useState, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const points = [
  {
    title: "Proven Longevity",
    cardTitle: "50+ Years Strong",
    description:
      "50+ years of facade installations still performing flawlessly across India. Our systems outlast ordinary cladding by decades.",
    img: "/images/WhyChooseUs/WhyChooseUs1.png",
  },
  {
    title: "Technical Superiority",
    cardTitle: "Millimetre Accuracy",
    description:
      "Factory-engineered precision eliminates site variability. Every panel, joint, and bracket.",
    img: "/images/WhyChooseUs/WhyChooseUs2.jpg",
  },
  {
    title: "Nationwide Capability",
    cardTitle: "25+ States Covered",
    description:
      "00+ projects across 25+ states prove our ability to execute anywhere in India, from Himalayan heights to coastal extremes.",
    img: "/images/WhyChooseUs/WhyChooseUs3.jpg",
  },
  {
    title: "End-to-End Accountability",
    cardTitle: "Single Responsibility",
    description:
      "Single-point responsibility from design through 25-year warranty. No finger-pointing between trades or suppliers.",
    img: "/images/WhyChooseUs/WhyChooseUs4.jpg",
  },
];

const WhyChooseUs = () => {
  const [active, setActive] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const handleSetActive = useCallback((index) => {
    setActive(prev => {
      if (prev !== index) {
        setSlideKey(k => k + 1);
        return index;
      }
      return prev;
    });
  }, []);

  const current = points[active];

  return (
    <section className="w-full px-6 lg:px-8 py-12 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-20 xl:gap-20 items-center">

        {/* LEFT IMAGE + CARD */}
        <div className="relative w-full max-w-full h-[530px] md:max-w-[500px] md:h-[630px]">

          {/* IMAGE */}
          <div className="relative overflow-hidden w-full h-full rounded-none bg-[#E6353A]/10">
            {/* Preload hidden images to prevent Vercel delay */}
            <div className="absolute w-0 h-0 opacity-0 pointer-events-none overflow-hidden">
              {points.map((item, index) => (
                <img key={`preload-${index}`} src={item.img} alt="" decoding="async" fetchpriority="high" />
              ))}
            </div>

            <AnimatePresence initial={false}>
              <motion.img
                key={slideKey}
                src={current.img}
                alt="building"
                initial={{ x: "-100%", zIndex: 10, opacity: 1 }}
                animate={{ x: "0%", zIndex: 10, opacity: 1 }}
                exit={{ x: "0%", zIndex: 0, opacity: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
              />
            </AnimatePresence>

            {/* CUT CORNER */}
            <div
              className="absolute -top-[1px] -left-[1px] w-[62px] h-[62px] bg-white z-10
              [clip-path:polygon(0_0,100%_0,0_100%)]"
            />
          </div>

          {/* RED CARD */}
          <div
            className="absolute z-20
            bottom-[8%]
            left-[30%] md:left-[51%]

            bg-[#E6353A] text-white

            p-[5%]
            w-[73%]
            h-[50%]
            md:w-[66%]
            md:h-[56%]

            shadow-lg transition-all duration-500"
          >

            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-4">
              {current.cardTitle}
            </h3>

            <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-relaxed text-white/90">
              {current.description}
            </p>

            {/* ARROW */}
            <div className="absolute bottom-[10%] right-[10%]">
              <ArrowUpRight className="w-6 h-6 lg:w-10 lg:h-10" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:pl-[15px]">
          <h2 className="text-[#7D0000] text-[28px] lg:text-[36px] font-semibold mb-4">
            Why Choose SSG Groups?
          </h2>

          <p className="text-[16px] text-black/60 leading-relaxed max-w-[550px] mb-6">
            Five decades of facade mastery distilled into competitive advantages that deliver superior value, performance, and peace of mind for architects, developers, and building owners.
          </p>

          {/* LIST */}
          <div className="border border-black/10">
            {points.map((item, index) => {
              const isActive = index === active;

              return (
                <div
                  key={index}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) {
                      handleSetActive(index);
                    }
                  }}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      handleSetActive(index);
                    }
                  }}
                  className="relative flex items-center justify-between px-5 py-3 cursor-pointer border-b border-black/10 overflow-hidden"
                >
                  {/* Base layer - maroon text (always visible underneath) */}
                  <span className="text-lg opacity-0 text-[#7D0000]">▪</span>
                  <span className="flex-1 overflow-hidden flex">
                    <span className="text-[16px] font-medium whitespace-nowrap ml-3 text-[#7D0000]">
                      {item.title}
                    </span>
                  </span>

                  {/* Animated fill overlay with white text - wipes left to right */}
                  <div
                    className={`absolute inset-0 bg-[#7D0000] flex items-center px-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "translate-x-0" : "-translate-x-full"
                    }`}
                  >
                    <span
                      className={`text-lg text-white transition-[opacity,transform] duration-500 ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                    >
                      ▪
                    </span>
                    <span className="flex-1 overflow-hidden flex">
                      <span
                        className={`text-[16px] font-medium whitespace-nowrap text-white transition-[margin] duration-500 ease-in-out ${
                          isActive ? "ml-auto pr-2" : "ml-3"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
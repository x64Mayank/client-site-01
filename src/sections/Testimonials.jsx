import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonialsData = [
  {
    title: "Candor TechSpace",
    role: "Development Team",
    text: "Alfa Facade Systems delivered exceptional quality on our Candor Tech Park project. Their attention to detail and adherence to timelines made them an invaluable partner in creating Noida's landmark IT destination.",
  },
  {
    title: "Samudra Institute of Maritime Studies",
    role: "Engineering Team",
    text: "The glazing and cladding solutions provided by Team Alfa for our maritime institute have withstood extreme weather conditions beautifully. Their engineering expertise is truly world-class.",
  },
  {
    title: "Mahamana Hospital Administration",
    role: "Operations Team",
    text: "As a healthcare facility, safety and hygiene were paramount. Alfa understood our unique requirements and delivered facade solutions that support our healing environment perfectly.",
  },
  {
    title: "ABC Infra Ltd",
    role: "Project Team",
    text: "Outstanding execution and timely delivery made Alfa a trusted partner...",
  },
  {
    title: "XYZ Developers",
    role: "Architecture Team",
    text: "Their innovative facade solutions elevated our building design...",
  },
];

// ✅ FIX: clone BOTH sides
const extendedData = [
  ...testimonialsData.slice(-3),
  ...testimonialsData,
  ...testimonialsData.slice(0, 3),
];

const Testimonials = () => {
  // ✅ FIX: start from real first slide
  const [index, setIndex] = useState(3);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  // ✅ FIX: proper reset logic
  useEffect(() => {
    if (index === testimonialsData.length + 3) {
      setTimeout(() => {
        setTransition(false);
        setIndex(3);
      }, 500);
    }

    if (index === 2) {
      setTimeout(() => {
        setTransition(false);
        setIndex(testimonialsData.length + 2);
      }, 500);
    }
  }, [index]);

  // 👉 re-enable transition after reset
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <section className="w-full h-[600px] bg-[#F5F5F5] relative overflow-hidden">
      
      {/* TOP AREA */}
      <div className="h-[223px] flex items-end relative px-16">
        <div className="absolute left-32 top-0 flex gap-4">
          <div className="w-[108px] h-[215px] bg-[#C9050B] [clip-path:polygon(0_0,100%_0,100%_70%,60%_100%,0_100%)]"></div>
          <div className="w-[108px] h-[215px] bg-[#C9050B] [clip-path:polygon(0_0,100%_0,100%_70%,60%_100%,0_100%)]"></div>
        </div>

        <h2 className="text-[48px] lg:text-[82px] max-w-[722px] ml-[200px] lg:ml-[450px] font-semibold">
          Testimonials
        </h2>
      </div>

      {/* BOTTOM AREA */}
      <div className="h-[377px] flex relative">
        
        {/* LEFT ARROW */}
        <div 
          onClick={handlePrev}
          className="w-[80px] bg-[#C9050B] flex items-center justify-center cursor-pointer"
        >
          <ArrowLeft className="text-white" />
        </div>

        {/* SLIDER */}
        <div className="flex-1 overflow-hidden">
          
          <div
            ref={sliderRef}
            className={`flex h-full ${transition ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${index * 33.333}%)`,
            }}
          >
            {extendedData.map((item, i) => (
              <div
                key={i}
                className="flex-[0_0_33.333%] p-8 border-r border-black/10"
              >
                <h4 className="text-lg text-[#C9050B] font-medium">
                  {item.title}
                </h4>

                <p className="text-lg text-black/50 mb-6">
                  {item.role}
                </p>

                <div className="h-[1px] bg-black/10 mb-16"></div>

                <p className="text-[18px] text-black/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT ARROW */}
        <div 
          onClick={handleNext}
          className="w-[80px] bg-[#C9050B] flex items-center justify-center cursor-pointer"
        >
          <ArrowRight className="text-white" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
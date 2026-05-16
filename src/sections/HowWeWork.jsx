import React, { useState } from "react";
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const steps = [
  {
    id: 1,
    title: "Proven Track Record",
    heading: "Proven Track Record of Excellence",
    description:
      "Our portfolio showcases a history of successful projects and delighted clients. From iconic skyscrapers to intricate interior facades, our work speaks for itself. We’ve consistently delivered on our promises, meeting deadlines and exceeding expectations. Our clients trust us to bring their visions to life and we take that responsibility seriously.",
    img: "/images/HowWeWork1.png",
  },
  {
    id: 2,
    title: "Collaborative Mindset",
    heading: "True Collaboration for Extraordinary Results",
    description: "We believe the best results come from true collaboration. From the earliest design stages to final installation, we work closely with architects, contractors, and clients to ensure every detail is perfect. Our team listens, adapts, and innovates together with you, making sure your vision is realized while also bringing our expertise to the table. We’re not just a vendor; we’re your partner in creating something extraordinary.",
    img: "/images/HowWeWork1.png",
  },
  {
    id: 3,
    title: "Continuous Improvement",
    heading: "Relentless Pursuit of Perfection",
    description: "We never settle for good enough. Every project is an opportunity to learn, grow, and push the boundaries of what’s possible. We analyze every aspect of our work, from design to installation, to identify areas for improvement. This commitment to continuous improvement drives us to innovate and refine our processes, ensuring that we deliver the highest quality results on every project.",
    img: "/images/HowWeWork1.png",
  },
  {
    id: 4,
    title: "Transparency and Honesty",
    heading: "Transparency and Honesty at Every Step",
    description: "We believe in building trust through transparency and honesty. From project timelines to budget discussions, we communicate openly and clearly with our clients. We want you to feel confident and informed throughout the entire process. If challenges arise, we address them head-on with integrity and a commitment to finding solutions that work for everyone.",
    img: "/images/HowWeWork4.png",
  },
  {
    id: 5,
    title: "Passion for Excellence",
    heading: "Passion for Excellence in Everything We Do",
    description: "Our team is driven by a deep passion for excellence. We are committed to delivering outstanding results that exceed expectations and create lasting value for our clients. This passion fuels our innovation and ensures that every project we undertake is a testament to our dedication and expertise.",
    img: "/images/HowWeWork1.png",
  },
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(1);
  const current = steps.find((s) => s.id === activeStep);

  return (
    <section className="w-full bg-[#f5f5f5] px-6 lg:px-16 py-16">
      
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          <h2 className="text-[32px] lg:text-[40px] font-display font-semibold text-black">
            How We Work
          </h2>

          <p className="text-[14px] text-black/60 max-w-[500px] font-body">
            Our proven 4-step framework ensures every facade project meets the highest standards of safety, aesthetics, and structural integrity.
          </p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black/10 mb-6"></div>

      <div className="relative max-w-[1400px] mx-auto">
        
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2.6fr_1.7fr] gap-10 items-stretch">
          
          {/* LEFT - STEPS */}
          <div className="flex flex-col h-full">
            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex items-center gap-4 px-5 cursor-pointer flex-1 min-h-[80px]
                    border-r border-black/10
                    ${step.id !== steps.length ? "border-b border-black/10" : ""}
                    ${isActive ? "bg-white" : "opacity-60"}
                  `}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C9050B]" />
                  )}

                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C9050B]" />
                  )}

                  {/* Mask extra vertical line only for last active */}
                  {step.id === steps.length && isActive && (
                    <div className="absolute right-0 bottom-0 w-[1px] h-[6px] bg-white z-10"></div>
                  )}

                  <span
                    className={`font-display font-semibold text-[20px] lg:text-[22px] ${
                      isActive ? "text-[#C9050B]" : "text-[#7D0000]"
                    }`}
                  >
                    {String(step.id).padStart(2, "0")}.
                  </span>

                  <p
                    className={`text-[15px] lg:text-[16px] font-body font-medium ${
                      isActive ? "text-[#7D0000]" : "text-black/50"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CENTER */}
          <div className="flex flex-col justify-start pt-6 lg:pt-22 px-4 lg:px-8">
            <img
                src="/images/ticks.png"
                alt="icon"
                className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] object-contain mb-5"
            />

            <h3 className="text-[35px] font-display font-medium mb-4 lg:mt-4">
              {current.heading}
            </h3>

            <p className="text-[16px] text-black/70 leading-relaxed font-body">
              {current.description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="mt-10 lg:mt-0">
            <div className="flex flex-col gap-10">
              <img
                src={current.img}
                alt=""
                className="w-full h-[500px] object-cover"
              />

              <Button 
                variant="primary" 
                icon={ArrowUpRight} 
                rotateOnHover
                href="/contact"
                className="w-full"
              >
                Let's Work Together
              </Button>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-2 text-[15px] tracking-wide text-black/50 font-display">
        READY TO START YOUR PROJECT WITH A PROVEN PROCESS?
      </div>
    </section>
  );
};

export default HowWeWork;
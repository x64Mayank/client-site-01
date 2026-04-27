import React, { useState } from "react";
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const steps = [
  {
    id: 1,
    title: "Site Assessment & Consultation",
    heading: "Understanding Your Vision",
    description:
      "We begin every project with a comprehensive site visit and stakeholder consultation. Our technical team evaluates structural conditions, wind load requirements, aesthetic goals and budget parameters. This collaborative discovery phase ensures our proposal are tailored precisely to your building's unique needs and your project's timeline.",
    img: "/images/HowWeWork1.png",
  },
  {
    id: 2,
    title: "Engineering & Design Development",
    heading: "Precision Planning & Technical Documentation",
    description: "Our engineering team turns your ideas into detailed drawings, 3D visuals, and precise material specifications. We run thorough structural and thermal analysis, and verify every design against required building standards. All technical details are reviewed and approved before anything goes into production — so there are no surprises once work begins on site.",
    img: "/images/HowWeWork1.png",
  },
  {
    id: 3,
    title: "Fabrication & Quality Assurance",
    heading: "Controlled Manufacturing Excellence",
    description: "Every component is fabricated in our facility under controlled conditions, delivering a level of consistency that on-site work simply can’t match. Each piece goes through multiple quality checks — covering dimensions, surface finish, hardware function, and seal performance. Materials only leave our facility once they’ve passed every inspection, arriving at your site ready for a smooth installation.",
    img: "/images/HowWeWork1.png",
  },
  {
    id: 4,
    title: "Installation & Post-Completion Support",
    heading: "Expert Installation & Lasting Commitment",
    description: "ur certified installation teams carry out the work with care, following strict safety protocols and keeping to your project timeline. Once installation is complete, we run thorough checks — including water tightness testing, alignment verification, and operational inspections. We don’t just finish the job and walk away; we provide maintenance guidance and stay available long after handover, so your facade continues to perform for years to come.",
    img: "/images/HowWeWork4.png",
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
          
          <h2 className="text-[32px] lg:text-[40px] font-semibold text-black">
            How We Work
          </h2>

          <p className="text-[14px] text-black/60 max-w-[500px]">
            Our proven 4-step framework ensures every facade project meets the highest standards of safety, aesthetics, and structural integrity.
          </p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black/10 mb-6"></div>

      <div className="relative max-w-[1400px] mx-auto">
        
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2.6fr_1.7fr] gap-10">
          
          {/* LEFT - STEPS */}
          <div className="flex flex-col">
            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex items-center gap-4 px-5 py-8 lg:py-10 cursor-pointer 
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
                    className={`font-semibold text-[20px] lg:text-[22px] ${
                      isActive ? "text-[#C9050B]" : "text-[#7D0000]"
                    }`}
                  >
                    {String(step.id).padStart(2, "0")}.
                  </span>

                  <p
                    className={`text-[15px] lg:text-[16px] font-medium ${
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
          <div className="flex flex-col justify-start pt-6 lg:pt-13 px-4 lg:px-8">
            <img
                src="/images/ticks.png"
                alt="icon"
                className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] object-contain mb-5"
            />

            <h3 className="text-[35px] font-semibold mb-4">
              {current.heading}
            </h3>

            <p className="text-[16px] text-black/70 leading-relaxed">
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
                href="#services"
                className="w-full"
              >
                Let's Work Together
              </Button>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-2 text-[15px] tracking-wide text-black/50">
        READY TO START YOUR PROJECT WITH A PROVEN PROCESS?
      </div>
    </section>
  );
};

export default HowWeWork;
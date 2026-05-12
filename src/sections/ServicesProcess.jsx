import React from 'react';
import { MoveRight } from 'lucide-react';

const processData = [
  {
    number: "1.",
    title: "Site Assessment",
    description: "Technical analysis of structural loads, climate conditions, and aesthetic requirements to ensure optimal facade performance.",
  },
  {
    number: "2.",
    title: "Precision Engineering",
    description: "Detailed technical drawings and structural calculations, fully compliant with all applicable building codes and international standards.",
  },
  {
    number: "3.",
    title: "Factory Fabrication",
    description: "Controlled manufacturing environment ensuring dimensional accuracy, finish quality, and zero defects.",
  },
  {
    number: "4.",
    title: "Expert Installation",
    description: "Certified teams execute with precision, followed by rigorous water-tightness and alignment testing.",
  }
];

const ServicesProcess = () => {
  return (
    <section className="w-full py-16 lg:py-[55px] bg-[#EDEFED]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[18px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {processData.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center text-center px-6 lg:px-10 py-10 lg:py-[46px] group cursor-pointer
                ${index !== 0 ? 'lg:border-l border-brand-border' : ''}
                ${(index === 1 || index === 3) ? 'md:border-l border-brand-border' : ''}
                ${index < 2 ? 'md:border-b lg:border-b-0 border-brand-border' : ''}
                ${index !== 3 ? 'border-b md:border-b-0 border-brand-border' : ''}
              `}
            >
              {/* Arrow on left border (hidden on mobile, shown on desktop) */}
              {index > 0 && (
                <div className="hidden lg:flex absolute top-[150px] -left-[16px] w-[32px] h-[32px] items-center justify-center bg-[#EDEFED] text-brand-maroon z-10">
                  <MoveRight strokeWidth={1.5} size={30} />
                </div>
              )}

              {/* Number */}
              <div className="font-display font-normal text-[75px] leading-none text-brand-maroon mb-[26px] group-hover:-translate-y-2 transition-transform duration-300">
                {step.number}
              </div>

              {/* Title */}
              <div className="h-[28px] flex items-center justify-center mb-[18px]">
                <h3 className="font-body font-medium text-[21px] leading-[27.6px] text-brand-text">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-[16px] leading-[25.92px] text-brand-muted mb-[24px] flex-grow max-w-[270px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;

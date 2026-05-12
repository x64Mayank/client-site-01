import React from 'react';
import { HeartHandshake, ShieldCheck, Award, Leaf } from 'lucide-react';

const valuesData = [
  {
    title: "Ethical Practices",
    icon: HeartHandshake,
    description: "Fair labor practices and transparent supply chains supporting local communities.",
  },
  {
    title: "Health & Safety",
    icon: ShieldCheck,
    description: "Fire-rated materials and safety glass systems that meet and exceed all applicable fire safety standards and regulations.",
  },
  {
    title: "Quality Excellence",
    icon: Award,
    description: "10-year structural warranty backed by rigorous factory quality control processes.",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    description: "Advanced ventilated facades and Low-E glazing reduce building energy consumption by up to 30%.",
  }
];

const CoreValues = () => {
  return (
    <section className="w-full pb-[50px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[75px]">
        
        <div className="border border-brand-border flex flex-col lg:flex-row w-full">
          {valuesData.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center px-6 py-12 lg:py-16 w-full lg:w-1/4
                  ${index !== 3 ? 'border-b lg:border-b-0 lg:border-r border-brand-border' : ''}
                `}
              >
                {/* Title */}
                <h3 className="font-display font-medium text-[23px] leading-[27.5px] text-brand-maroon mb-6">
                  {value.title}
                </h3>

                {/* Icon */}
                <div className="text-brand-maroon mb-8 flex items-center justify-center h-[63px] w-[63px]">
                  <IconComponent strokeWidth={1.5} size={48} />
                </div>

                {/* Description */}
                <p className="font-body text-[16px] leading-[25.92px] text-brand-muted max-w-[254px]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;

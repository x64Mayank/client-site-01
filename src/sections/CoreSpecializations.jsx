import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  {
    title: "Spider Glazing System",
    description: "Modern architecture embraces transparency and minimalism with spider glazing systems. Our solutions deliver seamless structural integrity, stunning aesthetics, and superior safety.",
    image: "/images/services/service1.png"
  },
  {
    title: "Glass Glazing Systems",
    description: "Modern architecture heavily relies on glass to create open, bright, and sophisticated environments. Our glazing solutions provide beauty along with safety and performance.",
    image: "/images/services/service2.png"
  },
  {
    title: "ACP Facade Cladding",
    description: "Modern architecture heavily relies on glass to create open, bright, and sophisticated environments. Our glazing solutions provide beauty along with safety and performance.",
    image: "/images/services/service3.png"
  },
  {
    title: "uPVC Windows & Doors",
    description: "Modern architecture strives on sleek functionality with aluminium windows, doors, and glass roofs. Our offerings ensure energy efficiency, robust security, and expansive natural light.",
    image: "/images/services/service4.png"
  },
  {
    title: "Aluminum Windows, Doors & roof",
    description: "Modern architecture thrives on sleek functionality with aluminium windows, doors, and glass roofs. Our offerings ensure energy efficiency, robust security, and expansive natural light.",
    image: "/images/services/service5.png"
  },
  {
    title: "Interior Design Solutions",
    description: "Interior design is the art of creating spaces that are both functional and visually inspiring.",
    image: "/images/services/service6.png"
  },
  {
    title: "GRC/FRC/WPC Work",
    description: "Modern architecture innovates with GRC, FRC, and WPC for versatile and durable facades. Our custom solutions deliver unique aesthetics, structural strength, and long-lasting performance.",
    image: "/images/services/service7.png"
  },
  {
    title: "Aluminum/Steel/MS/Glass Railing",
    description: "Railing is the art of creating spaces that are both functional and visually inspiring.",
    image: "/images/services/service8.png"
  },
  {
    title: "False Ceiling Work",
    description: "Modern architecture elevates interiors with custom false ceilings. Our solutions integrate lighting, acoustic control, and seamless aesthetics.",
    image: "/images/services/service9.png"
  }
];

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="group relative h-full hover:drop-shadow-2xl transition-all duration-500 cursor-pointer">
      
      {/* Outer border layer (Grey) with clip-path */}
      <div className="absolute inset-0 bg-brand-border group-hover:bg-brand-maroon transition-colors duration-500 [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%)]">
        {/* Inner background layer (White) offset by 1px to create the border */}
        <div className="absolute inset-[1px] bg-white [clip-path:polygon(0_0,100%_0,100%_calc(100%-29px),calc(100%-29px)_100%,0_100%)]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative flex flex-col h-full z-10 p-[18px]">
        <div className="w-full h-[240px] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
        <div className="px-[17px] pt-[29px] pb-[30px] flex flex-col flex-grow">
          
          {/* Title area with borders */}
          <div className="relative pb-[16px] border-b border-brand-border">
            <h3 className="text-brand-maroon font-body font-medium text-[21px] leading-[27.6px] pr-4">
              {title}
            </h3>
            <div className="absolute bottom-[-1px] left-0 w-[53px] group-hover:w-full transition-all duration-500 ease-in-out h-[3px] bg-brand-maroon"></div>
          </div>

          {/* Description */}
          <p className="text-brand-muted font-body text-[16px] leading-[25.92px] mt-[17px] flex-grow">
            {description}
          </p>

          {/* Arrow */}
          <div className="flex justify-end mt-[8px]">
            <div className="text-brand-maroon transition-transform duration-300 origin-center group-hover:rotate-45">
              <ArrowUpRight strokeWidth={2} size={44} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const CoreSpecializations = () => {
  return (
    <section className="w-full pt-10 pb-16 lg:pt-[43px] lg:pb-[60px] bg-brand-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[75px]">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
          <h2 className="font-display font-medium text-[50px] md:text-[80px] lg:text-[118px] leading-[1.1] text-brand-text tracking-tight mb-6">
            Our Core
            <br />
            Specializations
          </h2>
          <p className="font-body text-brand-muted text-[16px] md:text-[18px] leading-[1.6]">
            Seven specialized divisions working in perfect harmony.
            <br className="hidden md:block" />
            Every facade challenge, expertly solved.
          </p>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              image={service.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSpecializations;

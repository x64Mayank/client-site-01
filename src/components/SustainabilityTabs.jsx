import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Energy-Efficient",
    number: "01.",
    img: "/images/sustainability1.png",
  },
  {
    id: 2,
    title: "Recyclable & Low-Impact Materials",
    number: "02.",
    img: "/images/sustainability2.jpg",
  },
  {
    id: 3,
    title: "Waste Reduction & Safe Practices",
    number: "03.",
    img: "/images/sustainability3.jpg",
  },
];

const SustainabilityTabs = () => {
  const [activeTab, setActiveTab] = useState(2);

  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section className="w-full">
      
      {/* TOP TABS */}
      <div className="bg-[#C9050B]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row w-full">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;

            return (
              <div
                key={tab.id}
                onMouseEnter={() => setActiveTab(tab.id)}
                className={`w-full lg:flex-1 cursor-pointer px-4 md:px-6 py-5 md:py-7 flex items-center justify-between transition-all duration-300 
                  ${isActive ? "bg-[#FFFFFF] text-[#7D0000]" : "bg-[#C9050B] text-[#FFFFFF]"}
                  ${index !== tabs.length - 1 ? "border-b lg:border-b-0 lg:border-r border-white/20" : ""}
                `}
              >
                
                {/* LEFT SIDE (line + title) */}
                <div className="flex items-center gap-3">
                  
                  {/* VERTICAL LINE */}
                  <div
                    className={`w-[2px] h-[16px] md:h-[18px] ${
                      isActive ? "bg-[#7D0000]" : "bg-[#FFFFFF]/70"
                    }`}
                  />

                  {/* TITLE */}
                  <span className="text-[15px] md:text-[18px] font-medium leading-tight">
                    {tab.title}
                  </span>
                </div>

                {/* NUMBER */}
                <span className={`text-[15px] md:text-[18px] ml-4 ${
                  isActive ? "text-[#7D0000]" : "text-[#FFFFFF]"
                }`}>
                  {tab.number}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full h-[350px] md:h-[450px] lg:h-auto lg:aspect-[21/9] xl:aspect-[25/9] 2xl:max-h-[800px] overflow-hidden">
        <img
          src={current.img}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

    </section>
  );
};

export default SustainabilityTabs;
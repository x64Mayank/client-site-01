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
      <div className="flex flex-wrap w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              onMouseEnter={() => setActiveTab(tab.id)}
              className={`w-full md:w-1/2 lg:flex-1 cursor-pointer px-6 py-7 flex items-center justify-between transition-all duration-300 
                ${isActive ? "bg-[#FFFFFF] text-[#7D0000]" : "bg-[#C9050B] text-[#FFFFFF]"}
                ${tab.id !== tabs.length ? "border-r border-white/30" : ""}
              `}
            >
              
              {/* LEFT SIDE (line + title) */}
              <div className="flex items-center gap-3">
                
                {/* VERTICAL LINE */}
                <div
                  className={`w-[2px] h-[18px] ${
                    isActive ? "bg-[#7D0000]" : "bg-[#FFFFFF]/70"
                  }`}
                />

                {/* TITLE */}
                <span className="text-[18px] font-medium">
                  {tab.title}
                </span>
              </div>

              {/* NUMBER */}
              <span className={`text-[18px] ${
                isActive ? "text-[#7D0000]" : "text-[#FFFFFF]"
              }`}>
                {tab.number}
              </span>
            </div>
          );
        })}
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full h-[400px] lg:h-[500px] overflow-hidden">
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
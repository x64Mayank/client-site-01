import React from "react";

const stats = [
  {
    label: "PROJECTS COMPLETED",
    value: "500+",
  },
  {
    label: "YEARS EXPERIENCE",
    value: "14+",
  },
  {
    label: "TEAM MEMBER",
    value: "150+",
  },
  {
    label: "BRANCH OFFICES",
    value: "2+",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full border-y border-black/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`
                px-6 py-10 text-center relative
                ${index !== stats.length - 1 ? "border-b border-black/10 sm:border-b-0" : ""}
                ${index % 2 !== 1 ? "sm:border-r border-black/10" : ""}
                ${index < 2 ? "sm:border-b border-black/10" : ""}
                ${index !== stats.length - 1 ? "lg:border-r border-black/10" : ""}
            `}
          >
            <p className="text-[11px] tracking-[2px] text-black/60 uppercase font-medium">
              {item.label}
            </p>

            <div className="w-8 h-[2px] bg-[#C9050B] mx-auto mt-2 mb-6"></div>

            <h3 className="text-[40px] lg:text-[48px] font-semibold text-[#C9050B]">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
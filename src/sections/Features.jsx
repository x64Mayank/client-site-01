import React from "react";
import { Check } from "lucide-react";

const features = [
  "Diverse Applications",
  "Cost-Effectiveness",
  "Proven Durability",
  "Guaranteed Solution",
  "Eco-Friendly Material",
];

const FeaturesBar = () => {
  return (
    <section className="w-full bg-[#E6353A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="
              flex items-center justify-center gap-2 text-white text-sm md:text-base lg:text-lg
              py-4 px-6 flex-1
              border-b md:border-b-0
              md:border-r
              border-white/50
              last:border-none
            "
          >
            <Check size={18} />
            <span>{item}</span>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesBar;
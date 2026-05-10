import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/hero-2.webp"
        alt="About Shri Shyam G Group"
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8 lg:px-10 text-white">
        
        {/* SMALL LABEL */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[3px] h-[14px] bg-[#09402C]" />
          <span className="text-sm tracking-wide">ABOUT US</span>
        </div>

        {/* HEADING */}
        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-medium">
          About Shri Shyam G Group
        </h1>
      </div>

      {/* BREADCRUMB */}
      <div className="absolute bottom-0 right-0">
        <div className="bg-white px-6 py-3 md:py-4 lg:py-5 min-w-[250px] text-sm text-black flex items-center justify-center text-center gap-3 w-full
                [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]">
          <Link to="/" className="text-black/60 hover:text-[#7D0000] transition">
            HOME
          </Link>
          <span className="text-[#09402C]">•</span>
          <span className="text-[#7D0000] font-medium">ABOUT US</span>
        </div>
      </div>

    </section>
  );
};

export default AboutHero;
import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ backgroundImage, label, heading, breadcrumbLabel }) => {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={backgroundImage}
        alt={heading}
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8 lg:px-10 text-white">

        {/* SMALL LABEL */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[3px] h-[14px] bg-brand-maroon" />
          <span className="font-display text-sm tracking-wide">{label}</span>
        </div>

        {/* HEADING */}
        <h1 className="font-display text-[24px] md:text-[32px] lg:text-[40px] font-medium">
          {heading}
        </h1>
      </div>

      {/* BREADCRUMB */}
      <div className="absolute bottom-0 right-0">
        <div className="bg-white px-6 py-3 md:py-4 lg:py-5 min-w-[250px] text-sm text-black flex items-center justify-center text-center gap-3 w-full
                [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]">
          <Link to="/" className="font-display text-black/60 hover:text-brand-maroon transition">
            HOME
          </Link>
          <span className="text-brand-maroon">•</span>
          <span className="font-display text-brand-maroon font-medium">{breadcrumbLabel}</span>
        </div>
      </div>

    </section>
  );
};

export default PageHero;

import React from "react";

const QualityEngineering = () => {
  return (
    <section className="w-full border-t border-brand-border">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="flex-1 px-6 md:px-10 lg:px-[84px] py-12 lg:py-[91px] flex flex-col justify-center">

          {/* LABEL */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[4px] h-[14px] bg-brand-maroon" />
            <span className="font-display text-[14px] font-medium text-[#666666] uppercase tracking-[0.05em]">
              Expert Services
            </span>
          </div>

          {/* HEADING */}
          <h2 className="font-display text-[28px] md:text-[32px] lg:text-[37px] font-medium text-brand-text leading-[48px] mb-6">
            Quality Engineering
          </h2>

          {/* BODY TEXT */}
          <div className="font-body text-[16px] lg:text-[18px] text-[#666666] leading-[1.4] space-y-6 max-w-[688px]">
            <p>
              We Simplify and standardize designs to reduce material waste and fabrication time &amp; Choose materials that offer the best balance of cost, quality, and performance Implement lean manufacturing techniques to minimize waste and maximize productivity.
            </p>
            <p>
              Develop strategic partnerships with suppliers to reduce costs and lead times, Encourage innovation and experimentation to develop new products and processes.
            </p>
            <p>
              Implement rigorous quality control measures to minimize errors and rework, Regularly assess and improve processes, products, and services, Identify and eliminate unnecessary costs without compromising quality.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[44%] min-h-[350px] lg:min-h-[568px] flex-shrink-0 px-0 lg:pr-[41px] lg:py-[38px]">
          <img
            src="/images/services/quality-engineering-bg-7820f9.png"
            alt="Quality Engineering - Welding"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default QualityEngineering;

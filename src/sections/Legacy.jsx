import React from "react";

const Legacy = () => {
  return (
    <section
      className="w-full mt-[66px] h-auto md:h-[380px] bg-[#E6353A] flex items-center px-6 md:px-10 lg:px-16 py-10 md:py-0"
      style={{
        clipPath: "polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)",
      }}
    >
      <div
        className="
          max-w-7xl mx-auto w-full flex items-center gap-10
          flex-col
          md:flex-row
        "
      >
        
        {/* LEFT SIDE */}
        <div className="flex items-center md:items-start w-full md:w-auto">
          
          {/* Red Box */}
          <div
            className="
              bg-[#C9050B] text-white p-6 flex flex-col justify-between
              w-full h-[220px]
              md:w-[220px] md:h-[280px]
              lg:w-[240px] lg:h-[280px]
            "
            style={{
              clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
            }}
          >
            <p className="text-[18px] md:text-[20px] lg:text-[26px] tracking-widest leading-6 font-medium py-[8px]">
              BUILDING THE FUTURE SINCE
            </p>
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-semibold">
              2012
            </h2>
          </div>

        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="text-white text-[15px] md:text-[17px] lg:text-[18px] leading-7 w-full">
          <p>
            SSG Groups was established in 2012 in Lucknow City, Uttar Pradesh. Our company is one of the prime suppliers of structural glazing, toughened glass work, and UPVC windows and doors, which find applications in commercial and corporate buildings as well as the construction industry. With a commitment to quality craftsmanship, innovation, and customer satisfaction, we have established ourselves as a leader in the construction industry. Our extensive experience, dedicated team, and focus on sustainable practices enable us to deliver exceptional results across a wide range of projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
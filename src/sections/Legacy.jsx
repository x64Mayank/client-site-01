import React from "react";

const Legacy = () => {
  return (
    <section
      className="w-full mt-[66px] h-auto md:h-[520px] bg-[#E6353A] flex items-center px-6 md:px-10 lg:px-16 py-10 md:py-0"
      style={{
        clipPath: "polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)",
      }}
    >
      <div
        className="
          max-w-7xl mx-auto w-full flex items-center gap-10
          flex-col
          min-[500px]:max-[800px]:flex-col
          md:flex-row
        "
      >
        
        {/* LEFT SIDE */}
        <div
          className="
            flex items-center gap-4 md:gap-5 lg:gap-6 w-full md:w-auto
            flex-col
            min-[500px]:max-[800px]:flex-row        
            min-[500px]:max-[800px]:justify-center  
            md:flex-row
          "
        >
          
          {/* Red Box */}
          <div
            className="
              bg-[#C9050B] text-white p-6 flex flex-col justify-between
              w-full h-[220px]
              min-[500px]:max-[800px]:w-[200px]
              md:w-[220px] md:h-[280px]
              lg:w-[266px] lg:h-[336px]
            "
            style={{
              clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
            }}
          >
            <p className="text-[18px] md:text-[20px] lg:text-[26px] tracking-widest leading-6 font-medium py-[8px]">
              BUILDING THE FUTURE SINCE
            </p>
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-semibold">
              1976
            </h2>
          </div>

          {/* Image */}
          <div
            className="
              overflow-hidden
              w-full h-[220px]
              min-[500px]:max-[800px]:w-[200px]
              md:w-[220px] md:h-[260px]
              lg:w-[266px] lg:h-[320px]
            "
          >
            <img
              src="/images/OurJourney.png"
              alt="Legacy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div
          className="
            text-white max-w-xl text-[16px] md:text-[18px] lg:text-[23px] leading-7 w-full md:w-auto
            min-[500px]:max-[800px]:w-full
          "
        >
          <p>
            Guided by a vision that sees every building as a lasting legacy.
          </p>
          <p>
            A vision that’s committed to providing differentiating, profitable
            and sustainable facade solutions to our customers. A vision that knows true transformation must go beyond cladding—we
            must work to deliver what’s best for the architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const certifications = [
  {
    title: "ISO 45001:2018",
    img: "/images/Certificate1.png",
    desc: "Design, Manufacture, Sales And Installation Of Aluminium Facade Systems, Doors And Windows",
  },
  {
    title: "ISO 9001:2015",
    img: "/images/Certificate1.png",
    desc: "Design, Manufacture, Sales And Installation Of Aluminium Facade Systems, Doors And Windows",
  },
  {
    title: "ISO 9001:2019",
    img: "/images/Certificate1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Certifications = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else {
        setVisibleCards(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < certifications.length - visibleCards) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full bg-[#edefed] mt-12 relative overflow-hidden">
      
      {/* HEADING */}
      <div className="text-center py-10">
        <h2 className="text-[48px] md:text-[72px] font-semibold leading-[1.1]">
          Certifications
        </h2>
      </div>
      
      {/* CONTENT */}
      <div className="relative">

        {/* TOP LINE */}
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-black/5 z-0" />

        <div className="flex items-stretch">

          {/* LEFT ARROW (ONLY DESKTOP) */}
          <div
            onClick={prev}
            className="hidden lg:flex w-[80px] bg-[#E6353A] items-center justify-center cursor-pointer"
          >
            <ArrowLeft className="text-white" />
          </div>

          {/* SLIDER */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleCards)}%)`,
              }}
            >
              {certifications.map((item, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%]"
                >
                  <div className="flex flex-col justify-center px-6 lg:px-10 py-10 border-r border-black/10">
                    
                    <div className="flex items-center justify-between w-full mb-6">
                      <h3 className="text-[22px] font-medium">
                        {item.title}
                      </h3>

                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-[120px] h-auto"
                      />
                    </div>

                    <p className="text-sm text-black/60 max-w-[400px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW (ONLY DESKTOP) */}
          <div
            onClick={next}
            className="hidden lg:flex w-[80px] bg-[#E6353A] items-center justify-center cursor-pointer"
          >
            <ArrowRight className="text-white" />
          </div>

        </div>
      </div>

      {/* MOBILE + TABLET ARROWS */}
      <div className="flex lg:hidden w-full mt-6">
        <button
            onClick={prev}
            className="flex-1 bg-[#E6353A] text-white flex items-center justify-center py-4"
        >
            <ArrowLeft size={28} />
        </button>

        <button
            onClick={next}
            className="flex-1 bg-[#E6353A] text-white flex items-center justify-center py-4"
        >
            <ArrowRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Certifications;
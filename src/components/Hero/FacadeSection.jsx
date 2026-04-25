import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import StatsSection from "./StatsSection";

const FacadeSection = () => {
  const cards = [
    {
      title: "Value Engineering",
      img: "/images/facade1.png",
    },
    {
      title: "Design",
      img: "/images/facade1.png",
    },
    {
      title: "Glazing & Facade",
      img: "/images/facade1.png",
    },
    {
      title: "Steel & Glass Railing",
      img: "/images/facade1.png",
    },
    {
      title: "System Aluminium & Doors & Windows",
      img: "/images/facade1.png",
    },
    {
      title: "Rainscreen Cladding",
      img: "/images/facade1.png",
    },
    {
      title: "UPVC Window & Door",
      img: "/images/facade1.png",
    },
    {
      title: "Installation",
      img: "/images/facade1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < cards.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full bg-white relative">

      <div className="mb-3 lg:mb-5">
        <StatsSection />
      </div>
      {/* TOP SECTION */}
      <div className="bg-[#FACE4D] w-full py-16 px-6 lg:px-16 relative">
        <div className="max-w-[1200px] mx-auto flex justify-center relative">
          <div className="max-w-[700px] flex gap-6 mx-auto">
            <div className="w-[3px] bg-red-500 mt-2" />
            <div>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-tight text-black">
                Comprehensive Facade & <br />
                Architectural Solutions
              </h2>
              <p className="mt-4 text-[14px] text-black/80 leading-relaxed">
                From concept to completion, Alfa Facade Systems offers end-to-end building envelope solutions. 
                Whether you're constructing a new landmark or revitalizing an aging structure, our seven specialized 
                service divisions deliver precision engineering and aesthetic perfection. Every facade challenge has a 
                solution—and we've likely solved it before.
              </p>
            </div>
          </div>
          <div className="hidden lg:block absolute right-4 top-[25%] -translate-y-1/2">
            <ArrowUpRight size={200} className="text-red-600" strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="relative bg-[#f5f5f5] py-0">
        {/* VIEWPORT */}
        <div className="overflow-hidden pl-0 lg:pr-[80px] pr-0">
          {/* SLIDER */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.3333%] flex flex-col px-4 py-6 relative z-10"
              >
                {/* MOVING SEPARATOR LINE */}
                {index !== 0 && (
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-black/20 z-0" />
                )}

                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[260px] object-cover mb-1"
                />

                <div className="p-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600"></span>
                  <h3 className="text-[16px] font-medium text-black">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDE ARROWS (DESKTOP) */}
        <div className="hidden lg:flex flex-col absolute right-0 top-0 h-full w-[60px] gap-[3px] bg-[#f5f5f5]">
          <button
            onClick={handleNext}
            className="flex-1 bg-red-600 text-white flex items-center justify-center"
          >
            <ArrowRight size={22} />
          </button>

          <button
            onClick={handlePrev}
            className="flex-1 bg-red-600 text-white flex items-center justify-center"
          >
            <ArrowLeft size={22} />
          </button>
        </div>
        
        <div className="block lg:hidden w-full h-[1px] bg-black/20 mt-1"></div>

        {/* BOTTOM ARROWS (TABLET & MOBILE) */}
        <div className="flex lg:hidden justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="bg-red-600 text-white p-3 flex items-center justify-center"
          >
            <ArrowLeft size={30} />
          </button>

          <button
            onClick={handleNext}
            className="bg-red-600 text-white p-3 flex items-center justify-center"
          >
            <ArrowRight size={30} />
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black/20"></div>
    </section>
  );
};

export default FacadeSection;
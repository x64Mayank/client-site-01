import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const points = [
  {
    title: "Proven Longevity",
    cardTitle: "50+ Years Strong",
    description:
      "50+ years of facade installations still performing flawlessly across India. Our systems outlast ordinary cladding by decades.",
    img: "/images/WhyChooseUs/WhyChooseUs1.png",
  },
  {
    title: "Technical Superiority",
    cardTitle: "Millimetre Accuracy",
    description:
      "Factory-engineered precision eliminates site variability. Every panel, joint, and bracket.",
    img: "/images/WhyChooseUs/WhyChooseUs2.jpg",
  },
  {
    title: "Nationwide Capability",
    cardTitle: "25+ States Covered",
    description:
      "00+ projects across 25+ states prove our ability to execute anywhere in India, from Himalayan heights to coastal extremes.",
    img: "/images/WhyChooseUs/WhyChooseUs3.jpg",
  },
  {
    title: "End-to-End Accountability",
    cardTitle: "Single Responsibility",
    description:
      "Single-point responsibility from design through 25-year warranty. No finger-pointing between trades or suppliers.",
    img: "/images/WhyChooseUs/WhyChooseUs4.jpg",
  },
];

const WhyChooseUs = () => {
  const [active, setActive] = useState(0);

  const current = points[active];

  return (
    <section className="w-full px-6 lg:px-8 py-12 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-20 xl:gap-20 items-center">

        {/* LEFT IMAGE + CARD */}
        <div className="relative w-full max-w-full h-[530px] md:max-w-[500px] md:h-[630px]">

          {/* IMAGE */}
          <div className="relative overflow-hidden w-full h-full rounded-none">
            <img
              src={current.img}
              alt="building"
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* CUT CORNER */}
            <div
              className="absolute -top-[1px] -left-[1px] w-[62px] h-[62px] bg-white z-10
              [clip-path:polygon(0_0,100%_0,0_100%)]"
            />
          </div>

          {/* RED CARD */}
          <div
            className="absolute
            bottom-[8%]
            left-[30%] md:left-[51%]

            bg-[#E6353A] text-white

            p-[5%]
            w-[73%]
            h-[50%]
            md:w-[66%]
            md:h-[56%]

            shadow-lg transition-all duration-500"
          >

            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-4">
              {current.cardTitle}
            </h3>

            <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-relaxed text-white/90">
              {current.description}
            </p>

            {/* ARROW */}
            <div className="absolute bottom-[10%] right-[10%]">
              <ArrowUpRight className="w-6 h-6 lg:w-10 lg:h-10" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:pl-[15px]">
          <h2 className="text-[#7D0000] text-[28px] lg:text-[36px] font-semibold mb-4">
            Why Choose SSG Groups?
          </h2>

          <p className="text-[16px] text-black/60 leading-relaxed max-w-[550px] mb-6">
            Five decades of facade mastery distilled into competitive advantages that deliver superior value, performance, and peace of mind for architects, developers, and building owners.
          </p>

          {/* LIST */}
          <div className="border border-black/10">
            {points.map((item, index) => {
              const isActive = index === active;

              return (
                <div
                  key={index}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) {
                      setActive(index);
                    }
                  }}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setActive(index);
                    }
                  }}
                  className={`flex items-center justify-between px-5 py-3 cursor-pointer border-b border-black/10
                    transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "bg-[#7D0000] text-white"
                        : "bg-white text-[#7D0000]"
                    }
                  `}
                >
                  {/* LEFT DOT */}
                  <span
                    className={`text-lg transition-all duration-500
                      ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }
                    `}
                  >
                    ▪
                  </span>

                  {/* TEXT */}
                  <span className="flex-1 overflow-hidden flex">
                    <span
                      className={`text-[16px] font-medium whitespace-nowrap
                        transition-all duration-500 ease-in-out
                        ${
                          isActive
                            ? "ml-auto pr-2"
                            : "ml-3"
                        }
                      `}
                    >
                      {item.title}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
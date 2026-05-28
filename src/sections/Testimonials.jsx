import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { client } from "../lib/sanity";

const testimonialsData = [
  {
    title: "Candor TechSpace",
    role: "Development Team",
    text: "Shri Shyam G Group Systems delivered exceptional quality on our Candor Tech Park project. Their attention to detail and adherence to timelines made them an invaluable partner in creating Noida's landmark IT destination.",
  },
  {
    title: "Samudra Institute of Maritime Studies",
    role: "Engineering Team",
    text: "The glazing and cladding solutions provided by Team Shri Shyam G Group for our maritime institute have withstood extreme weather conditions beautifully. Their engineering expertise is truly world-class.",
  },
  {
    title: "Mahamana Hospital Administration",
    role: "Operations Team",
    text: "As a healthcare facility, safety and hygiene were paramount. Shri Shyam G Group understood our unique requirements and delivered facade solutions that support our healing environment perfectly.",
  },
  {
    title: "ABC Infra Ltd",
    role: "Project Team",
    text: "Outstanding execution and timely delivery made Shri Shyam G Group a trusted partner...",
  },
  {
    title: "XYZ Developers",
    role: "Architecture Team",
    text: "Their innovative facade solutions elevated our building design...",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [index, setIndex] = useState(3);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const query = `*[_type == "testimonial"] | order(_createdAt asc) {
          _id,
          title,
          role,
          text,
          logo
        }`;
        const sanityTestimonials = await client.fetch(query);
        if (sanityTestimonials && sanityTestimonials.length > 0) {
          setTestimonials(sanityTestimonials);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials from Sanity, using fallback data:", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Pad testimonials array to at least 5 items by repeating so the infinite sliding carousel remains 100% stable and glitch-free regardless of count
  const paddedTestimonials = React.useMemo(() => {
    const list = [...testimonials];
    if (list.length > 0) {
      while (list.length < 5) {
        list.push(...testimonials);
      }
    }
    return list;
  }, [testimonials]);

  useEffect(() => {
    if (index === paddedTestimonials.length + 3) {
      setTimeout(() => {
        setTransition(false);
        setIndex(3);
      }, 500);
    }

    if (index === 2) {
      setTimeout(() => {
        setTransition(false);
        setIndex(paddedTestimonials.length + 2);
      }, 500);
    }
  }, [index, paddedTestimonials.length]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  const extendedData = [
    ...paddedTestimonials.slice(-3),
    ...paddedTestimonials,
    ...paddedTestimonials.slice(0, 3),
  ];

  const getTranslateValue = () => {
    if (typeof window === "undefined") return 100 / 3;

    if (window.innerWidth >= 1024) return 100 / 3;
    if (window.innerWidth >= 768) return 100 / 2;
    return 100;
  };

  const isSlider = testimonials.length >= 3;

  if (!isSlider) {
    return (
      <section className="w-full min-h-[500px] bg-[#F5F5F5] relative overflow-hidden pb-16">
        {/* TOP AREA */}
        <div className="min-h-[160px] md:min-h-[223px] flex items-center md:items-end justify-center relative px-4 overflow-visible pt-12 md:pt-0">
          {/* SHAPES (FIXED) */}
          <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-full md:max-w-[800px] lg:max-w-[1140px] pointer-events-none">
            <div className="flex gap-4">
              <div className="w-[108px] h-[215px] bg-[#C9050B] [clip-path:polygon(0_0,100%_0,100%_70%,60%_100%,0_100%)]"></div>
              <div className="w-[108px] h-[215px] bg-[#C9050B] [clip-path:polygon(0_0,100%_0,100%_70%,60%_100%,0_100%)]"></div>
            </div>
          </div>

          {/* CENTERED CONTAINER */}
          <div className="w-full md:max-w-[800px] lg:max-w-[1140px] flex items-end gap-16 mx-auto">
            {/* HEADING */}
            <h2 className="text-[36px] md:text-[48px] lg:text-[82px] max-w-[722px] mx-auto md:ml-80 text-center md:text-right lg:text-left lg:ml-100 font-display font-semibold">
              Testimonials
            </h2>
          </div>
        </div>

        {/* BOTTOM AREA (Centred columns) */}
        <div className="max-w-[1140px] mx-auto px-6 mt-12 flex flex-col md:flex-row justify-center items-stretch gap-8">
          {testimonials.map((item, i) => (
            <div
              key={item._id || i}
              className="bg-white p-8 md:p-10 shadow-sm border-t-4 border-[#C9050B] flex-1 max-w-[420px] transition-transform duration-300 hover:-translate-y-1 relative"
              style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)' }}
            >
              {/* Giant Red Quote Mark as a subtle, premium backdrop watermark */}
              <div className="absolute top-4 right-6 font-serif text-[120px] text-[#C9050B]/5 select-none pointer-events-none leading-none">
                “
              </div>
              
              <h4 className="text-[17px] text-[#C9050B] font-display font-semibold uppercase tracking-wide mb-1">
                {item.title}
              </h4>

              <p className="text-[12px] text-black/40 mb-6 font-body uppercase tracking-[0.05em]">
                {item.role}
              </p>

              <div className="h-[1px] bg-black/5 mb-8"></div>

              <p className="text-[15px] text-black/70 font-body leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-[600px] bg-[#F5F5F5] relative overflow-hidden pb-12 lg:pb-0">
      {/* TOP AREA */}
      <div className="min-h-[160px] md:min-h-[223px] flex items-center md:items-end justify-center relative px-4 overflow-visible pt-12 md:pt-0">
        {/* SHAPES (FIXED) */}
        <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-full md:max-w-[800px] lg:max-w-[1140px] pointer-events-none">
          <div className="flex gap-4">
            <div className="w-[108px] h-[215px] bg-[#C9050B] [clip-path:polygon(0_0,100%_0,100%_70%,60%_100%,0_100%)]"></div>
            <div className="w-[108px] h-[215px] bg-[#C9050B] [clip-path:polygon(0_0,100%_0,100%_70%,60%_100%,0_100%)]"></div>
          </div>
        </div>

        {/* CENTERED CONTAINER */}
        <div className="w-full md:max-w-[800px] lg:max-w-[1140px] flex items-end gap-16 mx-auto">
          {/* HEADING */}
          <h2 className="text-[36px] md:text-[48px] lg:text-[82px] max-w-[722px] mx-auto md:ml-80 text-center md:text-right lg:text-left lg:ml-100 font-display font-semibold">
            Testimonials
          </h2>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className="min-h-[377px] flex flex-col lg:flex-row relative">
        {/* LEFT ARROW (desktop only) */}
        <div
          onClick={handlePrev}
          className="hidden lg:flex w-[80px] bg-[#C9050B] items-center justify-center cursor-pointer"
        >
          <ArrowLeft className="text-white" />
        </div>

        {/* SLIDER */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={sliderRef}
            className={`flex h-full ${transition ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${index * getTranslateValue()}%)`,
            }}
          >
            {extendedData.map((item, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-8 border-r border-black/10"
              >
                <h4 className="text-[16px] text-[#C9050B] font-display font-medium">
                  {item.title}
                </h4>

                <p className="text-[14px] text-black/50 mb-6 font-body">
                  {item.role}
                </p>

                <div className="h-[1px] bg-black/10 mb-16"></div>

                <p className="text-[16px] text-black/70 font-body leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW (desktop only) */}
        <div
          onClick={handleNext}
          className="hidden lg:flex w-[80px] bg-[#C9050B] items-center justify-center cursor-pointer"
        >
          <ArrowRight className="text-white" />
        </div>

        {/* MOBILE + TABLET ARROWS (below) */}
        <div className="flex lg:hidden justify-center gap-6 mt-4">
          <button
            onClick={handlePrev}
            className="bg-[#C9050B] w-[50px] h-[50px] flex items-center justify-center"
          >
            <ArrowLeft className="text-white" />
          </button>

          <button
            onClick={handleNext}
            className="bg-[#C9050B] w-[50px] h-[50px] flex items-center justify-center"
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

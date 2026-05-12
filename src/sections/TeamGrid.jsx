import React from "react";

const leaders = [
  {
    name: "Abhishek Tiwari",
    role: "Director",
    img: "/images/Team/Leader1.png",
    sign: "/images/Team/Sign1.png",
  },
  {
    name: "Shivanand shukla",
    role: "Director",
    img: "/images/Team/Leader2.png",
    sign: "/images/Team/Sign2.png",
  },
  {
    name: "Anchal Tiwari",
    role: "Director",
    img: "/images/Team/Leader3.png",
    sign: "/images/Team/Sign3.png",
  },
  {
    name: "Abhinav Tiwari",
    role: "Founder & Chairman",
    img: "/images/Team/Leader4.png",
    sign: "/images/Team/Sign4.png",
  },
];

const TeamGrid = () => {
  return (
    <section className="w-full">

      {/* LEADERSHIP MESSAGE */}
      <div className="py-14 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">

          <h2 className="text-[32px] md:text-[40px] font-medium text-black">
            Our Leadership’s Message.
          </h2>

          {/* LINE */}
          <div className="relative w-full h-[2px] mt-3 mb-6">
            <div className="absolute left-0 top-0 h-full w-full bg-black/10" />
            <div className="absolute left-0 top-0 h-full w-[140px] bg-red-600" />
          </div>

          {/* TEXT */}
          <div className="text-[15px] md:text-[16px] text-black leading-7 space-y-6">
            <p>
              As the Director of SSG Group, I am committed to delivering exceptional results and unparalleled service.
              Our company's mission is to provide innovative solutions and exceed expectations in every project we
              undertake. I promise that we will: Listen attentively to your needs and concerns. Approach each project
              with creativity, passion, and expertise. Foster a culture of collaboration, integrity, and respect.
              Strive for excellence and continuous improvement. Deliver high-quality work on time and within budget.
            </p>

            <p>
              At SSG Group, we are dedicated to building long-term relationships and making a positive impact in the
              lives of those we serve. I am proud to lead a team of talented professionals who share my commitment to
              excellence and customer satisfaction.
            </p>

            <p>
              Thank you for entrusting us with your business. We look forward to exceeding your expectations and
              creating a brighter future together.
            </p>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="pb-16 px-6 lg:px-16">
        
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-medium text-black">
            Our Leadership.
          </h2>

          <div className="relative w-full h-[2px] mt-3">
            <div className="absolute left-0 top-0 h-full w-full bg-black/10" />
            <div className="absolute left-0 top-0 h-full w-[120px] bg-red-600" />
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="max-w-[1200px] mx-auto mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          
          {leaders.map((person, index) => (
            <div key={index} className="flex flex-col items-center">
              
              <img
                src={person.img}
                alt={person.name}
                className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] object-contain"
              />

              <h3 className="mt-4 text-[14px] md:text-[16px] font-medium text-red-600">
                {person.name}
              </h3>

              <p className="text-[12px] md:text-[13px] text-black/60 mt-1">
                {person.role}
              </p>

              <img
                src={person.sign}
                alt="signature"
                className="mt-3 h-[40px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TeamGrid;
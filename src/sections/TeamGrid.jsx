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
    <section className="w-full py-16 px-6 lg:px-16">
      
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
            
            {/* IMAGE */}
              <img
                src={person.img}
                alt={person.name}
                className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] object-contain"
              />

            {/* NAME */}
            <h3 className="mt-4 text-[14px] md:text-[16px] font-medium text-red-600">
              {person.name}
            </h3>

            {/* ROLE */}
            <p className="text-[12px] md:text-[13px] text-black/60 mt-1">
              {person.role}
            </p>

            {/* SIGNATURE */}
            <img
              src={person.sign}
              alt="signature"
              className="mt-3 h-[40px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const WorkWithUs = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <section className="w-full">

      {/* DESKTOP HEADER */}
      <div className="relative lg:w-[26.4%] ml-auto hidden lg:block">
        <div className="bg-[#E6353A] text-white text-center py-5 text-[22px] font-semibold relative z-10
                        [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_20px)]">
          Let’s Work Together
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[36.8%_36.8%_1fr] min-h-[500px]">

        {/* TABLET HEADER */}
        <div className="relative md:col-span-2 block lg:hidden">
          <div className="bg-[#E6353A] text-white text-center py-5 text-[22px] font-semibold relative z-10 w-full
                          [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_20px)]">
            Let’s Work Together
          </div>
        </div>

        {/* LEFT IMAGE */}
        <div className="block md:block lg:block">
          <img
            src="/images/contact-building.png"
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* MIDDLE INFO */}
        <div className="bg-[#edefed] px-8 py-12 flex flex-col justify-center">
          <h2 className="text-[22px] md:text-[28px] font-medium text-black">
            Alfa Facade Systems Pvt Ltd
          </h2>

          {/* 🔥 UPDATED PLUS + SOCIAL */}
          <div
            className="relative mt-4 w-fit"
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
            onClick={() => setShowIcons((prev) => !prev)} // mobile/tablet
          >
            {/* PLUS */}
            <div className="w-[36px] h-[36px] bg-[#E6353A] flex items-center justify-center text-white text-xl cursor-pointer">
              +
            </div>

            {/* SOCIAL ICONS */}
            <div
              className={`
                absolute left-full top-1/2 -translate-y-1/2 flex gap-2 ml-2
                transition-all duration-300
                ${showIcons ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
              `}
            >
              <div className="w-[36px] h-[36px] bg-[#E6353A] flex items-center justify-center text-white cursor-pointer">
                <FaFacebookF size={14} />
              </div>

              <div className="w-[36px] h-[36px] bg-[#E6353A] flex items-center justify-center text-white cursor-pointer">
                <FaInstagram size={14} />
              </div>
            </div>
          </div>

          <div className="mt-6 text-[16px] text-black/70 leading-7">
            <p>Sr. No. 27/9/1A/2, Burhani Industrial Estate, 411048</p>
            <p>+91 20 26932918 / 20</p>
            <p>info@alfafacades.com</p>
            <p>Mon — Sat: 7.30am — 6.30pm / Sun: Closed</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#ffffff] md:col-span-2 lg:col-span-1">
          <div className="px-8 py-8">

            <p className="text-[16px] text-[#7D0000] text-center mb-6">
              By contacting us, we will advise and quote you on Alfa Facade Systems best facade... solutions.
            </p>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] placeholder:text-black/80"
              />

              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] placeholder:text-black/80"
              />

              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] placeholder:text-black/80"
              />

              <select
                defaultValue=""
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] text-black/60 focus:text-black"
              >
                <option value="" disabled hidden>
                  Select Your Facade Service Need
                </option>

                <option>ACP Cladding & Wall Facades</option>
                <option>Glass Facade Systems</option>
                <option>Structural Glazing</option>
                <option>Aluminium Doors & Windows</option>
                <option>Railing Systems</option>
              </select>
            </div>

            <div className="mt-8 text-center">
              <button className="text-[15px] tracking-widest border-b border-black pb-1 hover:text-[#E6353A] transition">
                SUBMIT REQUEST
              </button>
            </div>
          </div>
        </div>

      </div>
      {/* FULL WIDTH BOTTOM LINE */}
      <div className="w-full border-t border-black/20" />
    </section>
  );
};

export default WorkWithUs;
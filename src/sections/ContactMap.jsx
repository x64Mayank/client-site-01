import React, { useState } from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const ContactMap = () => {
  const [mapInteractive, setMapInteractive] = useState(false);

  return (
    <section className="w-full">

      {/* MAP */}
      <div
        className="w-full h-[300px] md:h-[420px] relative"
        onClick={() => setMapInteractive(true)}
        onMouseLeave={() => setMapInteractive(false)}
      >
        <iframe
          title="SSG Location"
          src="https://maps.google.com/maps?q=SHRI%20SHYAM%20G%20GROUP%20Lucknow&t=&z=17&ie=UTF8&iwloc=B&output=embed"
          className={`w-full h-full border-0 ${
            mapInteractive
              ? "pointer-events-auto"
              : "pointer-events-none"
          }`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {!mapInteractive && (
          <div className="absolute inset-0 z-10 cursor-pointer" />
        )}
      </div>

      {/* CONTACT INFO */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.9fr] gap-y-6 md:gap-y-6 lg:gap-y-0 sm:gap-x-16 md:gap-x-20 xl:gap-x-32 justify-between">

          {/* ADDRESS */}
          <div className="w-full">

            {/* HEADING */}
            <h3 className="text-[#7D0000] text-[18px] font-semibold mb-3 ml-[62px]">
              Address
            </h3>

            {/* ICON + CONTENT */}
            <div className="flex items-start gap-5">

              {/* ICON */}
              <div className="w-[38px] h-[38px] rounded-full bg-[#C9050B] flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-white fill-white" />
              </div>

              {/* CONTENT */}
              <p className="text-[16px] leading-[32px] text-black">
                LGF 001, Beside Saroj Institute Arjunganj, Sultanpur Road, Lucknow 226002
              </p>

            </div>
          </div>

          {/* EMAIL */}
          <div className="w-full">

            {/* HEADING */}
            <h3 className="text-[#7D0000] text-[18px] font-semibold mb-3 ml-[62px]">
              Email
            </h3>

            {/* ICON + CONTENT */}
            <div className="flex items-start gap-5">

              {/* ICON */}
              <div className="w-[38px] h-[38px] rounded-full bg-[#C9050B] flex items-center justify-center flex-shrink-0 mt-1">
                <MessageCircle className="w-4 h-4 text-white fill-white" />
              </div>

              {/* CONTENT */}
              <p className="text-[16px] leading-[32px] text-black">
                info@shrishyamggroup.com
                <br />
                sales@shrishyamggroup.com
              </p>

            </div>
          </div>

          {/* PHONE */}
          <div className="w-full sm:col-span-2 lg:col-span-1 lg:w-full">

            {/* HEADING */}
            <h3 className="text-[#7D0000] text-[18px] font-semibold mb-3 ml-[62px]">
              Phone
            </h3>

            {/* ICON + CONTENT */}
            <div className="flex items-start gap-5">

              {/* ICON */}
              <div className="w-[38px] h-[38px] rounded-full bg-[#C9050B] flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="w-4 h-4 text-white fill-white" />
              </div>

              {/* CONTENT */}
              <p className="text-[16px] leading-[32px] text-black">
                +91 6306178578 /
                <span className="hidden lg:inline">
                  <br />
                </span>
                +91 75458 90012 /
                <br />
                +91 98076 90771
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;
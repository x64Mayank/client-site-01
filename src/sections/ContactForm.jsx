import React from "react";
import Button from "../components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const ContactForm = ({ isPopup = false }) => {
  return (
    <section className={`w-full ${isPopup ? "py-0 px-0" : "py-8 px-6 lg:px-8"}`}>

      <div className="max-w-[1400px] mx-auto border border-black/10 bg-white">

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT IMAGE */}
          <div className="w-full h-[350px] md:h-[500px] lg:h-full">
            <img
              src="/images/ContactForm.png"
              alt="Facade Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="px-6 md:px-10 lg:px-14 py-10 lg:py-14">

            {/* HEADING */}
            <h2 className="text-[32px] md:text-[42px] font-semibold text-black mb-3">
              Connect With Us
            </h2>

            <p className="text-[15px] text-black/55 mb-10">
              Send us a message to have all your questions answered about our services
            </p>

            {/* FORM */}
            <form className="border border-black/10">

              {/* TOP INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Your Name*"
                  className="h-[64px] px-3 border-b md:border-r border-black/10 outline-none text-[15px]"
                />

                <input
                  type="email"
                  placeholder="Email Address*"
                  className="h-[64px] px-3 border-b border-black/10 outline-none text-[15px]"
                />

                <input
                  type="text"
                  placeholder="Phone number*"
                  className="h-[64px] px-3 md:border-r border-black/10 outline-none text-[15px]"
                />

                <select
                  className="h-[64px] px-3 border-t md:border-t-0 border-black/10 outline-none text-[15px] text-black/60"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Your Facade Service Need
                  </option>

                  <option>ACP Cladding</option>
                  <option>Structural Glazing</option>
                  <option>Spider Glazing</option>
                  <option>Glass Facade</option>
                </select>
              </div>

              {/* MESSAGE */}
              <textarea
                placeholder="Message..."
                className="w-full h-[170px] p-3 border-t border-black/10 outline-none resize-none text-[15px]"
              />

              {/* BOTTOM */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-black/10">

                {/* CHECKBOX */}
                <label className="flex items-center gap-3 px-3 py-5 text-[14px] text-[#7D0000] cursor-pointer">
                  <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 rounded-full border border-[#C9050B] bg-white checked:bg-[#C9050B] checked:border-[#C9050B] cursor-pointer relative"
                  />

                  Accept Terms And Conditions
                </label>

                {/* BUTTON */}
                <div className="md:ml-auto">
                  <Button
                    type="submit"
                    variant="primary"
                    icon={ArrowUpRight}
                    rotateOnHover
                    className="w-full md:w-auto h-[72px] px-10"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
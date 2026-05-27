import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const WorkWithUs = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("service", formData.service);

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
      } else {
        setSubmitStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      setSubmitStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="bg-[#edefed] px-8 md:px-8 py-12 flex flex-col justify-center">
          <div className="max-w-[430px] mx-auto w-full">
            <div className="relative w-fit mb-5">
              <img
                src="/images/about/shri-shyam.svg"
                alt="Shri Shyam G Group Logo"
                className="w-[72px] h-[72px] object-contain"
              />

              <span className="absolute -top-1 -right-5 text-[12px] font-semibold text-black leading-none">
                TM
              </span>
            </div>
            
            <h2 className="text-[22px] md:text-[28px] font-medium text-black mb-5">
              Shri Shyam G group
            </h2>

            <div className="text-[15px] text-black leading-7 space-y-5">
              <p>
                LGF 001, Beside Saroj Institute Arjunganj,Sultanpur
                Road, Lucknow 226002
              </p>

              <p>
                +91 6306178578 / +91 75458 90012 / +91 98076 90771
              </p>

              <p>
                info@shrishyamggroup.com
              </p>

              <p>
                Mon – Sat: 7.30am – 6.30pm / Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#ffffff] md:col-span-2 lg:col-span-1 h-full">
          <form onSubmit={handleSubmit} className="px-8 py-8 lg:py-14 h-full flex flex-col justify-between">

            <p className="text-[16px] text-[#7D0000] text-center mb-6 lg:mb-4">
              By contacting us, we will advise and quote you on SSG Group's best facade solutions.
            </p>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] placeholder:text-black/80"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] placeholder:text-black/80"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] placeholder:text-black/80"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border-b border-black/20 bg-transparent outline-none py-2 text-[14px] text-black/60 focus:text-black"
              >
                <option value="" disabled hidden>
                  Select Your Facade Service Need
                </option>

                <option>Spider Glazing System</option>
                <option>Glass Glazing Systems</option>
                <option>ACP Facade Cladding</option>
                <option>uPVC Windows & Doors</option>
                <option>Aluminum Windows, Doors & roof</option>
                <option>Interior Design Solutions</option>
                <option>GRC/FRC/WPC Work</option>
                <option>Aluminum/Steel/MS/Glass Railing</option>
                <option>False Ceiling Work</option>
              </select>
            </div>

            {submitStatus && (
              <p className="mt-5 text-center text-[14px] text-[#7D0000]">
                {submitStatus}
              </p>
            )}

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-[15px] tracking-widest border-b border-black pb-1 hover:text-[#E6353A] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SUBMIT REQUEST"}
              </button>
            </div>
          </form>
        </div>

      </div>
      {/* FULL WIDTH BOTTOM LINE */}
      <div className="w-full border-t border-black/20" />
    </section>
  );
};

export default WorkWithUs;
import React, { useState } from "react";
import Button from "../components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const ContactForm = ({ isPopup = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
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

    if (!isChecked) {
      setSubmitStatus("Please accept terms and conditions.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("service", formData.service);
    data.append("message", formData.message);

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
          message: "",
        });
        setIsChecked(false);
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
    <section className={`w-full ${isPopup ? "py-0 px-0" : "py-8 px-6 lg:px-8"}`}>

      <div className="max-w-[1400px] mx-auto border border-black/10 bg-white">

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT IMAGE */}
          <div className="w-full h-[350px] md:h-[500px] lg:h-[650px]">
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
            <form onSubmit={handleSubmit} className="border border-black/10">

              {/* TOP INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  required
                  className="h-[64px] px-3 border-b md:border-r border-black/10 outline-none text-[15px]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  required
                  className="h-[64px] px-3 border-b border-black/10 outline-none text-[15px]"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number*"
                  required
                  className="h-[64px] px-3 md:border-r border-black/10 outline-none text-[15px]"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-[64px] px-3 border-t md:border-t-0 border-black/10 outline-none text-[15px] text-black/60"
                >
                  <option value="" disabled>
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

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
                className="w-full h-[170px] p-3 border-t border-black/10 outline-none resize-none text-[15px]"
              />

              {submitStatus && (
                <p className="px-3 py-3 text-[14px] text-[#7D0000] border-t border-black/10">
                  {submitStatus}
                </p>
              )}

              {/* BOTTOM */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-black/10">

                {/* CHECKBOX */}
                <label className="flex items-center gap-3 px-3 py-5 text-[14px] text-[#7D0000] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
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
                    disabled={!isChecked || isSubmitting}
                    className="w-full md:w-auto h-[72px] px-10 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
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
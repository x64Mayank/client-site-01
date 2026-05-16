import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const CONTACT_INFO = [
  {
    id: 'address',
    label: 'Address',
    icon: MapPin,
    content: ['LGF 001, Beside Saroj Institute Arjunganj, Sultanpur Road, Lucknow 226002'],
  },
  {
    id: 'call',
    label: 'Call Us',
    icon: Phone,
    content: ['+91 6306178578', '+91 75458 90012', '+91 98076 90771'],
  },
  {
    id: 'email',
    label: 'Email Us',
    icon: Mail,
    content: ['info@shrishyamggroup.com', 'sales@shrishyamggroup.com'],
  },
  {
    id: 'hours',
    label: 'Business Hours',
    icon: Clock,
    content: ['Mon - Sat: 7.30am - 6.30pm'],
  },
];

const ContactUs = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax for background image
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yBgSpring = useSpring(yBg, { stiffness: 100, damping: 30 });

  return (
    <section id="contact" ref={sectionRef} className="w-full bg-white">
      {/* TOP PARALLAX SECTION - FULL WIDTH */}
      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: yBgSpring, height: '120%' }}
            className="absolute top-[-10%] left-0 w-full"
          >
            <img 
              src="/images/contact/contact-bg.png" 
              alt="Contact Background" 
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay - Reduced from 60% to 30% */}
            <div className="absolute inset-0 bg-[#0F0F0F]/30" />
          </motion.div>
        </div>

        {/* Content Container - No side padding here to allow full-width line and edge button */}
        <div className="relative z-10 w-full h-full flex flex-col justify-end">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col w-full"
          >
            {/* Main Heading - Inside padded container */}
            <div className="px-6 lg:px-[83px]">
              <h2 className="font-display text-[45px] md:text-[80px] xl:text-[120px] text-white font-medium tracking-tight leading-[0.8] mb-1">
                Have a Project?
              </h2>
            </div>

            {/* SEPARATOR LINE - Truly Full Width (no padding) */}
            <div className="w-full h-[1px] bg-white/20 mb-0" />

            {/* ACTION ROW: Sub-text + Button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-0 md:gap-0">
              
              {/* Sub-text - Tightened vertical spacing */}
              <div className="flex items-center gap-3 py-5 md:h-[130px] pl-6 lg:pl-[83px] pr-0">
                {/* Red Square Bullet */}
                <div className="w-[6px] h-[6px] bg-[#C9050B] shrink-0" />
                <p className="font-body text-[14px] md:text-[17px] text-white font-light">
                  Work with the team that's clad 150+ projects across countries.
                </p>
              </div>

              {/* CONTACT US BUTTON - Touching the Right Side */}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="
                  w-[calc(100%-24px)] ml-auto md:ml-0 md:w-[350px] 
                  h-[80px] md:h-[130px] bg-[#C9050B] 
                  flex items-center justify-center gap-6 group hover:bg-[#A00408] 
                  transition-colors duration-300 contact-btn-clip cursor-pointer z-30
                "
              >
                <span className="font-display text-[14px] lg:text-[16px] font-medium text-white uppercase tracking-[0.1em]">
                  Contact Us
                </span>
                <ArrowUpRight className="text-white w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-500 group-hover:rotate-45" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* INFO GRID SECTION - FULL WIDTH WITH BOXED BORDERS */}
      <div className="w-full border-t-[1.5px] border-[#29A9E1] bg-white">
        <div className="w-full flex flex-wrap">
          {CONTACT_INFO.map((item, index) => (
            <div 
              key={item.id}
              className={`
                w-full md:w-1/2 xl:w-1/4 p-10 lg:p-[45px_30px_45px_65px] 
                border-brand-border border-b border-l
              `}
            >
              <div className="flex flex-col gap-5">
                <h3 className="font-display text-[18px] lg:text-[22px] font-medium text-[#C9050B]">
                  {item.label}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {item.content.map((line, idx) => (
                    <p key={idx} className="font-body text-[15px] lg:text-[16px] leading-[1.6] text-[#666666]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .contact-btn-clip {
          clip-path: polygon(25px 0, 100% 0, 100% 100%, 0 100%, 0 25px);
        }
        @media (min-width: 1024px) {
          .contact-btn-clip {
            clip-path: polygon(35px 0, 100% 0, 100% 100%, 0 100%, 0 35px);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;

import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "./contact.css";

const ContactSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-grow w-full overflow-hidden wrapper">
      {/* Left Side Image */}
      <motion.div
        className="w-1/2 h-full ml-5 flex flex-col justify-center items-center div-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full h-138 flex flex-col justify-center items-end image-container-contact"
          initial={{ scale: 0.8 }}
          animate={{ scale: animate ? 1 : 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="z-3 bottom-0 w-140 h-130 image-contact"
            src="/ashley2.png"
            alt="Contact Visual"
          />
        </motion.div>
      </motion.div>

      {/* Right Side Contact Info */}
      <motion.div
        className="w-1/2 h-full mr-5 flex flex-col justify-center items-center div-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full h-130 flex flex-col justify-center items-start image-container-contact-right">
          <div className="h-138 pt-0 md:pt-10">
            <motion.h1
              className="text-xl md:text-3xl my-6 md:my-10 font-bold text-[#6a5acd]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Me
            </motion.h1>

            <div className="contacts pl-3 flex flex-col gap-5 md:gap-7">
              {[
                {
                  icon: (
                    <Mail className="w-6 h-6 md:w-10 md:h-10 text-red-500 mr-3 md:mr-5" />
                  ),
                  text: "ashleykhatereyes27@gmail.com",
                },
                {
                  icon: (
                    <FaInstagram className="w-6 h-6 md:w-10 md:h-10 text-pink-500 mr-3 md:mr-5" />
                  ),
                  text: "__asleee",
                },
                {
                  icon: (
                    <Phone className="w-6 h-6 md:w-10 md:h-10 text-green-500 mr-3 md:mr-5" />
                  ),
                  text: "+63 9452744973",
                },
              ].map((item, index) => (
                <motion.p
                  key={index}
                  className="flex items-center text-base md:text-2xl whitespace-nowrap"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  {item.icon}
                  {item.text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;

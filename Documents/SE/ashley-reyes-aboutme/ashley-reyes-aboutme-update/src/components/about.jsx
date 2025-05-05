import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Use effect to track window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define mobile screen size threshold
    };

    // Call the function on initial render and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-grow w-full overflow-hidden justify-center items-center">
      {/* Background */}
      <div className="fixed w-screen h-screen z-0 bg-[#31245c] top-0 left-0"></div>

      {/* Content Section */}
      <div className="container z-1 flex flex-col md:flex-row items-center justify-center h-screen md:h-auto">
        {/* Image Section */}
        {!isMobile && (
          <motion.div
            className="w-1/2 flex items-center justify-end pr-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-120 bg-[#F5F5DC] overflow-hidden rounded-xl">
              <img className="scale-[1.4]" src="/ashley.png" alt="Ashley" />
            </div>
          </motion.div>
        )}

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-4 h-full md:h-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h1
            className="text-white font-bold text-3xl mt-15 w-full md:text-left text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-white text-lg leading-relaxed text-justify mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            I’m an intermediate layout artist and graphic designer. During my
            college days, I served as the project manager and creatives
            committee head, designing unique content such as pubmats and
            promotional materials. I'm passionate about consistently advancing
            my knowledge and skills in visual design.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;

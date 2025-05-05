import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./hero.css";

const HeroSection = () => {
  return (
    <div className="flex flex-grow w-full overflow-hidden hero-container">
      {/* Left Section (Text) */}
      <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-start pl-15 hero-text-container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 80 }}
        >
          <h1 className="text-3xl mt-30 text-[#6a5acd] text-left hero-heading">
            Hello Everyone, I Am
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 80,
            delay: 0.1,
          }}
        >
          <p className="pt-2 text-7xl text-[#6a5acd] text-left hero-name">
            Ashley Khate Reyes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col items-start pt-5 button-container"
        >
          <motion.div
            className="px-4 py-2 text-lg text-white rounded-sm bg-[#6a5acd] text-left hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Layout Artist & Graphics Designer
          </motion.div>

          <NavLink to="/about" className="no-underline">
            <motion.button
              className="mt-5 px-4 py-2 text-lg text-white rounded-sm bg-[#6a5acd] hover:bg-[#9a8ff0] hover:text-black cursor-pointer hero-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              View More
            </motion.button>
          </NavLink>
        </motion.div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full sm:w-1/2 h-full mr-5 flex items-center justify-center relative hero-image-container">
        <motion.div
          className="w-full h-138 z-5 relative image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background shapes (square and circle) */}
          <div className="absolute w-95 h-100 bottom-0 left-71 z-1 bg-violet-900 hero-square-circle"></div>
          <div className="absolute w-100 h-100 rounded-full bottom-30 left-20 z-2 bg-[#6a5acd] hero-square-circle"></div>

          {/* Image */}
          <motion.img
            className="absolute z-3 bottom-0 w-140 h-130 hero-image"
            src="/ashley2.png"
            alt="Ashley Khate Reyes"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

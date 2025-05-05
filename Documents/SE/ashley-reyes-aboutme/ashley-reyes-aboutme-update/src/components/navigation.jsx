import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; 

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLightThemePage = ["/about", "/experience"].includes(location.pathname);
  const mobileMenuBackgroundColor = isLightThemePage ? "#31245c" : "white";
  const mobileMenuBottomBorderColor = isLightThemePage ? "#6a5acd" : "black";

  const getLinkClass = ({ isActive }) => {
    if (isLightThemePage) {
      return `transition-colors duration-200 ${isActive ? "text-violet-300 underline" : "text-white"}`;
    }

    return `transition-colors duration-200 ${isActive ? "text-purple-900 underline" : "text-[#6a5acd]"} hover:text-violet-900`;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <div className="relative border-b-2 border-[#6a5acd] mx-5 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-end items-center p-4 px-5"
      >

        <div className="hidden md:flex gap-6 text-lg font-bold">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <NavLink to="/projects" className={getLinkClass}>Projects</NavLink>
          <NavLink to="/workExperience" className={getLinkClass}>Experience</NavLink>
          <NavLink to="/experience" className={getLinkClass}>Blogs</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>

        <div className="md:hidden" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? (
            <FaTimes size={30} className="text-[#6a5acd]" />
          ) : (
            <FaBars size={30} className="text-[#6a5acd]" />
          )}
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 p-4 z-40 flex flex-col gap-4 text-lg font-bold"
          style={{ 
            backgroundColor: mobileMenuBackgroundColor,
            borderBottom: `2px solid ${mobileMenuBottomBorderColor}`,
          }}
        >
          <NavLink to="/" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/workExperience" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Experience</NavLink>
          <NavLink to="/experience" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
        </motion.div>
      )}
    </div>
  );
};

export default NavigationBar;

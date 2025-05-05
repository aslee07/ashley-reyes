import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./projects.css";

const projects = [
  
  {
    id: 1,
    title: "To-Do-List",
    images: ["/todo list.png"],
    description: "Weekly project in IT142 is the To-Do-List with CRUD integration. the to-do-list was designed to help users manage daily tasks wherein users could add new tasks, view their current list, edit existing tasks, and remove tasks once completed. these core functions were chosen to demonstrate how essential it is in many real-world sotware system.",
    github: "https://github.com/aslee07/to-do-list", // Added example link
    live: "", // No Added example link
  },
  {
    id: 2,
    title: "Pokemon Battle",
    images: ["pokemon logo.png", "pokemon.png", "pokemon 1.png", "pokemon 2.png"],
    description: "With this project it includes learning and play. It also served as an engaging way to practice strategic thinking and introduced game design principles in a simplified form. Overall there's so much to learn in making this project. ",
    github: "https://github.com/aslee07/pokemon-battle", // Added example link
    live: "", // No Added example link
  },
  
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setItemsToShow(1); // For very small screens, show only 1 card
      } else if (window.innerWidth < 800) {
        setItemsToShow(2); // For mobile, show 2 cards
      } else if (window.innerWidth < 1080) {
        setItemsToShow(3); // For tablet, show 3 cards
      } else {
        setItemsToShow(4); // For desktop, show 4 cards
      }
    };

    handleResize(); // Set the initial number of cards
    window.addEventListener("resize", handleResize); // Event listener for resizing
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < projects.length
        ? prevIndex + itemsToShow
        : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : 0
    );
  };

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track current image
  // Function to go to the next image
  const handleNextImage = () => {
    if (selectedProject.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 < selectedProject.images.length ? prevIndex + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : selectedProject.images.length - 1
      );
    }
  };

  return (
    <div className="flex w-full justify-center items-center overflow-hidden flex-grow">
      <div className="w-full flex flex-col z-10 items-center bg-gradient-to-b from-white via-white to-purple-900 pb-12 px-4 relative">
        {/* Animated Heading */}
        <motion.h2
          className="text-xl sm:text-5xl font-bold text-purple-700 mb-8 tracking-wide text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : -50 }}
          transition={{ duration: 0.4 }}
        >
          PROJECTS
        </motion.h2>

        <div className="relative w-full max-w-6xl">
          {/* Left Arrow Button */}
          <motion.button
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-11 bg-white rounded-full p-2 shadow-lg border border-purple-200"
            onClick={handlePrev}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasAnimated ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <ArrowLeft />
          </motion.button>

          {/* Animated Project Cards */}
          <motion.div
            className="flex gap-6 justify-center overflow-hidden px-6 py-4 scrollbar-hide z-10
    sm:flex-wrap sm:overflow-visible sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: hasAnimated ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {projects
              .slice(currentIndex, currentIndex + itemsToShow) // Display cards based on `itemsToShow`
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  className="flex flex-col items-center bg-white rounded-[25px] border-2 z-10 border-purple-300 shadow-lg
        w-60 sm:w-60 flex-shrink-0" // Ensure this class fits within the responsive design
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: hasAnimated ? 1 : 0,
                    y: hasAnimated ? 0 : 50,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {/* Display only the first image */}
                  <motion.img
                    src={project.images[0]} // Get the first image in the array
                    alt={project.title}
                    className="w-full h-60 object-cover rounded-t-[25px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hasAnimated ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                  <div className="p-4 text-center">
                    <p className="text-sm font-semibold text-gray-800">
                      {project.title}
                    </p>
                    <motion.button
                      className="mt-3 px-5 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: hasAnimated ? 1 : 0.8 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openModal(project)}
                    >
                      View
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Right Arrow Button */}
          <motion.button
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-purple-200"
            onClick={handleNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: hasAnimated ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <ArrowRight />
          </motion.button>
        </div>
        <div className="flex w-full justify-center items-center overflow-hidden flex-grow">
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b">
                  <h3 className="text-xl font-bold text-purple-700">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex flex-col md:flex-row flex-1 overflow-auto">
                  {/* Image Gallery */}
                  <div className="relative p-4 flex-1 flex flex-col items-center">
                    <div className="relative w-full max-w-lg">
                      <img
                        className="w-full h-auto max-h-[50vh] object-contain rounded-lg"
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                      />

                      {/* Navigation Arrows (outside image) */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                          >
                            <FaChevronLeft className="text-purple-600 text-xl" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                          >
                            <FaChevronRight className="text-purple-600 text-xl" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Image Indicators */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex gap-2 mt-4">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              currentImageIndex === index
                                ? "bg-purple-600"
                                : "bg-gray-300"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 border-t md:border-t-0 md:border-l flex-1 max-w-md overflow-auto">
                    <div className="whitespace-pre-line text-gray-700 mb-6">
                      {selectedProject.description}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Now at the bottom */}
                <div className="border-t p-4 bg-gray-50 rounded-b-xl">
                  <div className="flex gap-4 justify-center">
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        selectedProject.github
                          ? "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      } transition-colors`}
                    >
                      <FaGithub />
                      <span>
                        {selectedProject.github ? (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            View Code
                          </a>
                        ) : (
                          "No repository"
                        )}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        selectedProject.live
                          ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      } transition-colors`}
                    >
                      <FaExternalLinkAlt />
                      <span>
                        {selectedProject.live ? (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Live View
                          </a>
                        ) : (
                          "No live view"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          <div className="fixed bottom-0 left-0 right-0 h-60 bg-purple-900 rounded-t-[100px]"></div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 h-60 bg-purple-900 rounded-t-[100px]"></div>
      </div>
    </div>
  );
};

const ArrowLeft = () => (
  <svg
    className="w-6 h-6 text-purple-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg
    className="w-6 h-6 text-purple-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default ProjectsSection;

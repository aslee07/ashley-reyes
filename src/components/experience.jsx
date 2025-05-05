import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './experience.css'

const experience = [
  {
    id: 1,
    title: "DAY 1 - Kicking Off the Tour with History and Fun",
    images: ["/shrine.jpg", "/flag.jpg", "/fort.jpg", "/fort 1.jpg", "/cute.jpg", "/moa.jpg"],
    description:
      "Our first day on the educational tour was a great mix of learning and good vibes! We started at Rizal Park, where we got to visit the monument of Dr. José Rizal and learn more about his life and sacrifice for the country.\n\n After that, we explored Fort Santiago, one of the most historic spots in Manila. Walking through the old fortress and seeing where Rizal spent his final days was both powerful and interesting.\n\nTo wrap up the day, we were given some free time at MOA (Mall of Asia) perfect for grabbing snacks, shopping, or just chilling by the bay. A solid first day filled with history, bonding, and a bit of fun!",
  },
  {
    id: 2,
    title: "Subic Bay Day 2 - Art, Port vessel Adventures, and Duty-Free Shopping",
    images: [
      "/subic.jpeg",
      "/SBECC.jpg",
      "/mural 1.jpg",
      "/mural 2.jpg",
      "/mural 3.jpg",
      "/mural 4.jpg",
      "/bay.jpg",
      "/port.jpg",
      "/vessel.jpg",
      "/tower.jpg",
      "/duty free.jpg",
      "/CCTV.jpg",    
    ],
    description: "Our second day in Subic offered a perfect blend of cultural, educational, and recreational activities. The contrast between the artistic murals, the structured environment of law enforcement facilities, the maritime adventure of vessel tours, and the modern convenience of duty-free shopping showcased the diverse attractions this former naval base has to offer.\n\nAs we headed back to our accommodation, tired but fulfilled, I found myself already looking forward to what day three would bring in this fascinating destination.",
  },
  {
    id: 3,
    title: "Day 3 – leisure time with a Dose of Culture",
    images: [
      "/leisure.jpg",
      "/museum.jpg",
      "/trio.jpg",
      "/selfie 1.jpg",
      "/bird.jpg",
      "/butterfly.jpg",
      "/bugs.jpg",
      "/preserve.jpg",
      "/crocs.jpg",
      "/museo.jpg",
      "/history.jpg",
      "/cars.jpg",
      "/sky.jpg",
      "/group-pic.jpeg",
    ],
    description: "Since it was a holiday, Day 3 of our tour was all about taking it easy while still soaking up some culture. We had the chance to visit the National Museum, where we saw amazing art, artifacts, and exhibits that gave us a deeper appreciation for Filipino history and creativity. After that, we headed to the Museo ni Manuel Quezon, where we learned more about the life and legacy of the former president.",
  },
  {
    id: 4,
    title: "DAY 4 - A day of Discovery",
    images: [
      "/Hytech.jpg",
      "/robotics.jpg",
      "/sample.jpg",
      "/BSP.jpg",
      "/coin.jpg", 
    ],
    description: "Day 4 was packed with eye-opening experiences! We started our day with a visit to the Bangko Sentral ng Pilipinas (BSP), where we got to see how our banknotes is made—from the design process to the actual printing. It was super interesting to learn about the security features and the effort that goes into making our currency. After that, we headed to HyTech in Novaliches, where we explored different types of technology that could shape our future. From smart systems to advanced machines, it gave us a glimpse of how innovation plays a huge role in different industries. it was definitely a day full of learning and inspiration!",
  },
  {
    id: 5,
    title: "DAY 5 - MMDA and LRT",
    images: [
      "/logo.jpg",
      "/mmda 1.jpg",
      "/lrt 1.jpg",
      "/train.jpg",
      "/LRT.jpg",

    ],
    description: "Our fifth day was packed with insightful and hands-on experiences that gave us a deeper understanding of urban transportation management. We started the day at the MMDA Traffic Engineering Center, where we got an exclusive look at how the agency monitors and manages traffic flow across Metro Manila. The staff demonstrated the operation of their CCTV systems, giving us a glimpse into the real-time surveillance technology they use and the impressive quality of the footage.\n\n After our visit to MMDA, we headed to the LRT facility for another eye-opening experience. Upon arrival, we suited up in proper safety gear and toured the site, learning about the critical safety measures and technical aspects involved in running the train system. One of the highlights was getting to ride the train ourselves, while the team explained its various features and how it contributes to easing urban congestion. This day gave us a newfound appreciation for the complexity and coordination involved in keeping the city's transportation systems running smoothly.",
  },
  {
    id: 6,
    title: "DAY 6 - Exploring the Charm of Baguio",
    images: [
      "/groupie.jpeg",
      "/the mansion.jpeg",
      "/PMA.jpeg",
      "/strawberry.jpg",
      "/horse.jpg",
      "/church.jpg",
      "/me.jpeg",
      "/group pic.jpg", // More images can be added
    ],
    description: "Our adventure continued with a late-night journey at 1 AM, we set off for the cool and scenic city of Baguio. After the long ride, we wasted no time and headed straight to explore the city's famous tourist spots. One of the highlights was visiting the Strawberry Farm in La Trinidad, where we saw firsthand how fresh and vibrant the strawberries are. The experience of walking through the fields and seeing the harvest up close was both refreshing and memorable.\n\n We spent the rest of our time discovering Baguio’s beautiful landmarks and indulging in the wide variety of delicious local foods the city has to offer.",
  },
  {
    id: 7,
    title: "DAY 7 - last day in Baguio",
    images: [
      "/biking.jpg",
      "/keychains.jpg",
      "/jaz&ash.jpg", // More images can be added
    ],
    description: "In our last day, they gave us time to enjoy and buy souvenir on our own thou we have limited time but we we're able to enjoy. Neverthless, baguio is a truly one of a kind place to visit. ",
  },
];

const ExperienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
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
      prevIndex + itemsToShow < experience.length
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

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track current image
  // Function to go to the next image
  const handleNextImage = () => {
    if (selectedExperience.images && selectedExperience.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 < selectedExperience.images.length ? prevIndex + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedExperience.images && selectedExperience.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : selectedExperience.images.length - 1
      );
    }
  };

  return (
    <div className="flex w-full justify-center items-center overflow-hidden flex-grow">
      <div className="fixed w-screen h-screen z-0 bg-[#31245c] top-0 left-0"></div>

      <div className="w-full flex flex-col z-10 items-center pb-12 px-4 relative">
        {/* Animated Heading */}
        <motion.h2
          className="text-xl sm:text-5xl font-bold text-white mb-8 tracking-wide text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : -50 }}
          transition={{ duration: 0.4 }}
        >
          IVET EXPERIENCE
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

          {/* Animated Experience Cards */}
          <motion.div
            className="flex gap-6 justify-center overflow-x-auto px-6 py-4 scrollbar-hide z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: hasAnimated ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {experience
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="flex flex-col items-center bg-white rounded-[25px] border-2 z-10 border-purple-300 shadow-lg w-60 flex-shrink-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: hasAnimated ? 1 : 0,
                    y: hasAnimated ? 0 : 50,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <motion.img
                    src={experience.images[0]} // Display first image
                    alt={experience.title}
                    className="w-full h-60 object-cover rounded-t-[25px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hasAnimated ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                  <div className="p-4 text-center">
                    <p className="text-sm font-semibold text-purple-700">
                      {experience.title}
                    </p>
                    <motion.button
                      className="mt-3 px-5 py-1 bg-purple-700 text-white text-sm rounded-md hover:bg-purple-900"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: hasAnimated ? 1 : 0.8 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openModal(experience)}
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

        {/* Modal */}
        {isModalOpen && selectedExperience && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="w-full px-5 w-screen h-screen pb-5 fixed top-15 left-0 flex flex-col z-101 items-center bg-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)} // This should close the modal
              className="absolute top-4 z-15 right-20 scale-[1.4] text-xl text-gray-600 hover:text-gray-900 close-button-experience"
            >
              <FaTimes />
            </button>

            <div className="overflow-y-scroll pb-15 flex flex-col items-center">
              {/* Image Container */}
              {/* Image Container with Arrows Positioned Over Image */}
              {selectedExperience.images.length > 0 && (
                <div className="relative h-100 max-w-2xl mx-auto mt-5 image-size-experience">
                  <img
                    className="w-full h-100 object-contain rounded-lg image-size-experience"
                    src={selectedExperience.images[currentImageIndex]}
                    alt={selectedExperience.title}
                  />

                  {/* Image Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button
                      onClick={handlePrevImage}
                      className="text-2xl text-white bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition duration-300"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="text-2xl text-white bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition duration-300"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              )}

              {/* Experience Title */}
              <div className="mt-5">
                <div className="text-3xl font-bold text-purple-700 text-center">
                  {selectedExperience.title}
                </div>
              </div>

              {/* Experience Description */}
              <div className="mt-5 px-10 description-experience">
                <div className="text-lg text-gray-700">
                  {selectedExperience.description}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="fixed bottom-0 left-0 right-0 h-60 bg-[#6a5acd] rounded-t-[100px]"></div>
      </div>
    </div>
  );
};

// Arrow Icons
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

export default ExperienceSection;

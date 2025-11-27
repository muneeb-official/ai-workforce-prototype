import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title:
        "AI Agents thats generates leads, create content, and manage tasks.",
    },
    {
      title: "AI Workforce Built to Scale Your Business",
    },
    {
      title: "Automate Everything That Slows You Down",
    },
  ];

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollX > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full min-h-full bg-white relative flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200/70 via-blue-100/50 to-blue-200/70"></div>
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-300/40 to-blue-300/60 rounded-full blur-3xl"></div>
      </div>

      {/* MAIN TITLE (unchanged) */}

      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="mt-4 max-w-xl md:max-w-6xl mx-auto px-2"
      >
        <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold text-black leading-[1] tracking-tight px-2">
          {slides[currentSlide].title}
        </h1>
      </motion.div>

      {/* Subtitle */}
      {/* <div className="mt-6 mb-4 px-2">
  <p className="text-xl sm:text-1xl md:text-[2rem] font-bold text-transparent 
    bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]">
    Scaling Quality, Not Just Access
  </p>
</div> */}

      {/* BUTTON (unchanged) */}
      <div className="mt-8 sm:mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="
      
       border 
      hover:bg-blue-500
      hover:text-white
      flex items-center justify-center space-x-0 mx-auto
      rounded-full 
      text-bold
      
      /* Responsive padding */
      px-5 py-3
      sm:px-7 sm:py-2.5
      md:px-8 md:py-4
      
      /* Responsive text */
      text-sm
      sm:text-[10px]
      md:text-lg
      
      transition-all duration-200
    "
          style={{ fontFamily: "DM Sans" }}
        >
          <span>Sign Up to get Early Access</span>

          <svg
            className="w-4 h-4 sm:w-7 sm:h-5 md:w-9 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 17L17 7M10 7h7v7"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

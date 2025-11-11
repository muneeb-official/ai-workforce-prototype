import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <section className="w-full h-full bg-white relative flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200/70 via-blue-100/50 to-blue-200/70"></div>
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-300/40 to-blue-300/60 rounded-full blur-3xl"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 md:mt-32 max-w-7xl mx-auto relative z-10"
      >
        <h1 className="text-[2.8rem] md:text-[5rem] font-bold text-black leading-[0.95] tracking-tight">
          Always–On, Data–Driven{" "}
          <span className="italic text-black">AI Agents</span>
          <br />
          <span className="text-black">Built to Scale Your Business</span>
        </h1>

        <div className="mt-8 mb-6">
          <p className="text-[2rem] md:text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]">
            100% Custom Coded
          </p>
        </div>

        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-3xl mx-auto font-medium">
          Our AI agents operate 24/7 to supercharge your
        </p>

        <div className="mt-10">
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2 mx-auto"
            style={{ fontFamily: 'DM Sans' }}
          >
            <span>Get Early Access</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
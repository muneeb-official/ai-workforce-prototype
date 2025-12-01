// ProfessionalFooter.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const ProfessionalFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const footerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookEarlyAccess = () => {
    if (location.pathname === "/") {
      // Already on homepage, just scroll to contact
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage first, then scroll to contact
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const footerLinks = {
    UsefulLinks: [
      { name: "Terms Of Use", path: "/terms" },
      { name: "Privacy Policies", path: "/privacy" },
      { name: "Cookies Policies", path: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ai-workforce-uk",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/people/AI-Workforce/61584346469942/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  const contactInfo = [
    {
      label: "EMAIL",
      text: "team@aiworkforce.com",
      href: "mailto:team@aiworkforce.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "ADDRESS",
      text: "71-75 Shelton Street, London",
      href: null,
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "PHONE",
      text: "+44 20 3372 4223",
      href: "tel:+442033724223",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = () => {
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{ fontFamily: "DM Sans" }}
    >
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div
          className={`bg-white relative overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #7770FF 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 w-full bg-[#EAEAFF] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 sm:px-6 py-2 md:py-3 rounded-lg bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8">
                Newsletter
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-600 text-sm md:text-lg mb-8 text-center md:text-left leading-relaxed max-w-4xl">
                  Get exclusive insights, AI workforce updates, and industry
                  trends delivered straight to your inbox. Join 10,000+
                  innovators already transforming their operations.
                </p>
              </div>

              {/* Email input */}
              <div className="max-w-3xl mt-6 md:mt-10">
                {/* Mobile: Stacked layout */}
                <div className="flex flex-col md:hidden gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 rounded-xl text-gray-900 bg-white border border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-base"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="w-auto self-start bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>

                {/* Desktop: Inline layout */}
                <div className="hidden md:block relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 pr-36 rounded-2xl text-gray-900 bg-white border-2 border-blue-500 focus:border-blue-600 focus:outline-none transition-all duration-300 text-base"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-2xl font-semibold transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20 w-full px-4 sm:px-6 lg:px-12 py-12 md:py-20">
          {/* LEFT SIDE — Logo */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <Link to="/" className="flex items-center gap-3 mb-2">
              <img
                src={logo}
                alt="AI Workforce Logo"
                className="h-13 md:h-20"
              />
            </Link>
          </div>

          {/* RIGHT SIDE — Useful Links + Contact */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24 text-left">
            {/* USEFUL LINKS */}
            <div
              className={`transition-all duration-700 text-left ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">
                Useful Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.UsefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[#7770FF] transition-all duration-300 text-sm md:text-base font-medium text-left"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {/* Book for Early Access - separate button */}
                <li>
                  <button
                    onClick={handleBookEarlyAccess}
                    className="text-gray-600 hover:text-[#7770FF] transition-all duration-300 text-sm md:text-base font-medium text-left"
                  >
                    Book for Early Access
                  </button>
                </li>
              </ul>
            </div>

            {/* CONTACT COLUMN */}
            <div
              className={`space-y-4 flex flex-col items-start text-left transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-sm md:text-md text-gray-700 max-w-xs mb-2">
                Transforming businesses with intelligent automation worldwide.
              </p>
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-indigo-500 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-800 hover:text-[#7770FF] transition-colors duration-300 font-medium text-sm"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-gray-800 font-medium text-sm">
                        {contact.text}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-gray-200 bg-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-600 text-center md:text-left">
                <p className="font-semibold text-gray-800 text-sm md:text-base">
                  © 2025 AI Workforce Ltd. All rights reserved.
                </p>
                <p className="text-xs md:text-sm mt-1 text-gray-500">
                  Transforming businesses with intelligent automation worldwide.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 md:space-x-6">
                <span className="text-gray-600 font-semibold text-xs md:text-sm">
                  Follow us:
                </span>
                <div className="flex space-x-2 md:space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white bg-indigo-500 hover:shadow-2xl transition-all duration-300 group overflow-hidden transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;

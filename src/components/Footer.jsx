// ProfessionalFooter.jsx
import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";

const ProfessionalFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const footerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    UsefulLinks: [
      { name: "Terms Of Use", action: () => scrollToSection("agents") },
      { name: "Privacy Policies", action: () => scrollToSection("agents") },
      { name: "Cookies Policies", action: () => scrollToSection("agents") },
      {
        name: "Book for Early Access",
        action: () => scrollToSection("contact"),
      },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
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
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M19.615 3.184A2.997 2.997 0 0017.5 2.26C15.38 2 12 2 12 2s-3.38 0-5.5.26a2.997 2.997 0 00-2.115.924C3.34 3.64 3 5.257 3 8.003v3.994c0 2.746.34 4.363 1.385 5.52.58.613 1.357.943 2.115.923C8.62 18 12 18 12 18s3.38 0 5.5-.26c.758.02 1.535-.31 2.115-.923C20.66 16.36 21 14.743 21 11.997V8.003c0-2.746-.34-4.363-1.385-5.52zM10 14.5v-7l6 3.5-6 3.5z"
            clipRule="evenodd"
          />
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
            <div className="flex items-center gap-3 mb-2">
              <img
                src={logo}
                alt="AI Workforce Logo"
                className="h-13 md:h-20"
              />
            </div>
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
                    <button
                      onClick={link.action}
                      className="text-gray-600 hover:text-[#7770FF] transition-all duration-300 text-sm md:text-base font-medium text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
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

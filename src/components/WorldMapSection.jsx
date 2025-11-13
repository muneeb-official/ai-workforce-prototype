import React, { useState, useEffect } from "react";
import image from '../assets/world-map.png';
import { AlignLeft } from "lucide-react";

const WorldMapSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [counters, setCounters] = useState({
    sales: 0,
    finance: 0,
    technology: 0,
    health: 0,
    other: 0,
  });

  const regionData = [
    { name: "North America", percentage: 80, x: 280, y: 365, color: "#3b82f6" },
    { name: "Europe", percentage: 70, x: 675, y: 290, color: "#6366f1" },
    { name: "Asia", percentage: 50, x: 880, y: 410, color: "#8b5cf6" },
    { name: "Africa", percentage: 30, x: 650, y: 505, color: "#ec4899" },
    { name: "South America", percentage: 65, x: 350, y: 580, color: "#10b981" },
    { name: "Oceania", percentage: 70, x: 980, y: 600, color: "#06b6d4" },
  ];

  const industryStats = [
    { industry: "Sales", percentage: 85, key: "sales" },
    { industry: "Finance", percentage: 78, key: "finance" },
    { industry: "Technology", percentage: 92, key: "technology" },
    { industry: "Health", percentage: 65, key: "health" },
    { industry: "Other", percentage: 58, key: "other" },
  ];

  const features = [
    { text: "Hourly Data Updates", icon: "⚡" },
    { text: "CCPA & GDPR Compliant", icon: "🔒" },
    { text: "Triple Verified 99% Confidence", icon: "✓" },
  ];

  const stats = [
    { value: "700M+", label: "Global Records", gradient: "from-blue-500 to-blue-600" },
    { value: "180+", label: "Countries", gradient: "from-indigo-500 to-indigo-600" },
    { value: "99%", label: "Accuracy Rate", gradient: "from-purple-500 to-purple-600" },
    { value: "24/7", label: "Data Updates", gradient: "from-cyan-500 to-cyan-600" },
  ];

// Animate counters smoothly
const animateCounters = () => {
  const duration = 2000; // 2 seconds total animation
  const fps = 60;
  const totalFrames = (duration / 1000) * fps;
  let frame = 0;

  const animate = () => {
    frame++;
    const progress = frame / totalFrames;
    
    // Easing function for smooth animation (ease-out)
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    
    const newCounters = {};
    industryStats.forEach((stat) => {
      newCounters[stat.key] = Math.floor(stat.percentage * easeProgress);
    });
    
    setCounters(newCounters);
    
    if (frame < totalFrames) {
      requestAnimationFrame(animate);
    } else {
      // Set final values
      const finalCounters = {};
      industryStats.forEach((stat) => {
        finalCounters[stat.key] = stat.percentage;
      });
      setCounters(finalCounters);
    }
  };
  
  requestAnimationFrame(animate);
};

// Intersection observer for scroll trigger
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !animationTriggered) {
        setAnimationTriggered(true);
        // Small delay for better visual effect
        setTimeout(animateCounters, 300);
      }
    },
    { threshold: 0.3 } // Trigger earlier for smoother experience
  );

  const element = document.getElementById("world-map-section");
  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element);
  };
}, [animationTriggered]);

  // Generate dotted map
  const generateDots = () => {
    const dots = [];
    const dotSize = 1;
    const spacing = 8;
    const continents = [
      { startX: 180, endX: 380, startY: 280, endY: 450, density: 0.8 },
      { startX: 280, endX: 420, startY: 480, endY: 650, density: 0.65 },
      { startX: 580, endX: 720, startY: 220, endY: 360, density: 0.7 },
      { startX: 580, endX: 720, startY: 380, endY: 580, density: 0.3 },
      { startX: 740, endX: 1080, startY: 180, endY: 480, density: 0.5 },
      { startX: 920, endX: 1060, startY: 520, endY: 640, density: 0.7 },
    ];

    continents.forEach((continent) => {
      for (let x = continent.startX; x < continent.endX; x += spacing) {
        for (let y = continent.startY; y < continent.endY; y += spacing) {
          if (Math.random() < continent.density) {
            dots.push(
              <circle
                key={`dot-${x}-${y}`}
                cx={x}
                cy={y}
                r={dotSize}
                fill="#94a3b8"
                className={`transition-all duration-1000 ${animationTriggered ? "opacity-60" : "opacity-0"
                  }`}
                style={{ transitionDelay: `${Math.random() * 1500}ms` }}
              />
            );
          }
        }
      }
    });
    return dots;
  };

  return (
    <section
      id="world-map-section"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-400 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">

          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight px-4 transition-all duration-700 ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
            Where Our Leads <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Come From</span>
          </h2>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 transition-all duration-700 ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            Access verified data from <span className="font-semibold text-blue-600">700M+ global records</span> across all major industries and regions
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-30 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Left Column - Map */}
          <div className={`transition-all duration-1000 ${animationTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl  border border-gray-100 p-4 sm:p-6 lg:p-8 h-full mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-10 ">Regional Coverage</h3>
              <div className="relative w-full">
                {/* Background Image */}
                <img
                  src={image}
                  alt="World Map"
                  className="w-full h-full"
                />

                {/* SVG Overlay */}
                <svg
                  viewBox="0 0 1200 700"
                  className="absolute -top-5 -left-3 w-full h-full pointer-events-none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {generateDots()}

                  {regionData.map((region, index) => (
                    <g key={region.name}>
                      {/* Outer glowing circle */}
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r="45"
                        fill={region.color}
                        filter="url(#glow)"
                        className={`transition-all duration-1000 ${animationTriggered ? "opacity-90 scale-100" : "opacity-0 scale-0"
                          }`}
                        style={{ transitionDelay: `${index * 200 + 600}ms` }}
                      />

                      {/* Inner white highlight */}
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r="38"
                        fill="white"
                        className={`transition-all duration-1000 ${animationTriggered ? "opacity-20 scale-100" : "opacity-0 scale-0"
                          }`}
                        style={{ transitionDelay: `${index * 200 + 700}ms` }}
                      />

                      {/* Region Name */}
                      <text
                        x={region.x}
                        y={region.y - 65}
                        textAnchor="middle"
                        className={`fill-gray-800 font-bold text-[16px] sm:text-[18px] lg:text-[20px] transition-all ${animationTriggered ? "opacity-100" : "opacity-0"
                          }`}
                        style={{ transitionDelay: `${index * 200 + 800}ms` }}
                      >
                        {region.name}
                      </text>

                      {/* Percentage */}
                      <text
                        x={region.x}
                        y={region.y + 8}
                        textAnchor="middle"
                        className={`fill-white font-bold text-[24px] sm:text-[28px] transition-all drop-shadow-lg ${animationTriggered ? "opacity-100" : "opacity-0"
                          }`}
                        style={{ transitionDelay: `${index * 200 + 900}ms` }}
                      >
                        {region.percentage}%
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Features below map */}
              <div className="grid grid-cols-1 gap-3 mt-20 -mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 text-white bg-gradient-to-br from-blue-500 to-indigo-600 px-4 py-3 rounded-xl border border-blue-100 transition-all duration-700 ${animationTriggered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                      }`}
                    style={{ transitionDelay: `${index * 150 + 1200}ms` }}
                  >
                    <span className="text-sm sm:text-base text-gradient-to-r from-blue-500 to-indigo-600 font-semibold">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Industry Stats & Info */}
          <div className={`transition-all duration-700 ${animationTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl  border border-gray-100 p-4 sm:p-6 lg:p-8 h-full flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Industry Coverage</h3>

              {/* Industry Stats */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-4 sm:mb-6 md:mb-8 flex-grow">
                {industryStats.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-100 ${animationTriggered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                      }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-700">
                        {item.industry}
                      </span>
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                        {counters[item.key]}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animationTriggered ? `${counters[item.key]}%` : '0%',
                          transitionDelay: `${index * 100 + 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info Card */}
              <div className={`bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-white transition-all duration-700 ${animationTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '1400ms' }}>
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Why Choose Our Data?</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>Real-time updates every hour ensure fresh, actionable leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>Triple-verified accuracy with 99% confidence rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>Full CCPA & GDPR compliance for legal peace of mind</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center bg-white/70  rounded-xl sm:rounded-2xl hover:shadow-2xl border border-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-700 hover:scale-105 ${animationTriggered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 150 + 1600}ms` }}
            >
              <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
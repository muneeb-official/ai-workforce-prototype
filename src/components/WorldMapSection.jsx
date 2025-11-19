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
    { name: "North America", percentage: 80, x: 23, y: 52, color: "#3b82f6" },
    { name: "Europe", percentage: 70, x: 56, y: 41, color: "#6366f1" },
    { name: "Asia", percentage: 50, x: 73, y: 59, color: "#8b5cf6" },
    { name: "Africa", percentage: 30, x: 54, y: 72, color: "#ec4899" },
    { name: "South America", percentage: 65, x: 29, y: 83, color: "#10b981" },
    { name: "Oceania", percentage: 70, x: 82, y: 86, color: "#06b6d4" },
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
    { value: "700M+", label: "Global Records" },
    { value: "180+", label: "Countries" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "24/7", label: "Data Updates" },
  ];

  // Optimized animation with RAF
  const animateCounters = () => {
    const duration = 1500; // Reduced from 2000ms
    const fps = 30; // Reduced from 60fps for better performance
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 2); // Simpler easing

      const newCounters = {};
      industryStats.forEach((stat) => {
        newCounters[stat.key] = Math.floor(stat.percentage * easeProgress);
      });

      setCounters(newCounters);

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        const finalCounters = {};
        industryStats.forEach((stat) => {
          finalCounters[stat.key] = stat.percentage;
        });
        setCounters(finalCounters);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
          setTimeout(animateCounters, 100); // Reduced delay
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("world-map-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [animationTriggered]);

  // Optimized dot generation - fewer dots for better performance
  const generateDots = () => {
    const dots = [];
    const dotSize = 0.1; // Percentage based
    const spacing = 0.5; // Percentage based
    const continents = [
      { startX: 15, endX: 32, startY: 40, endY: 64, density: 0.6 },
      { startX: 23, endX: 35, startY: 69, endY: 93, density: 0.5 },
      { startX: 48, endX: 60, startY: 31, endY: 51, density: 0.5 },
      { startX: 48, endX: 60, startY: 54, endY: 83, density: 0.25 },
      { startX: 62, endX: 90, startY: 26, endY: 69, density: 0.4 },
      { startX: 77, endX: 88, startY: 74, endY: 91, density: 0.5 },
    ];

    continents.forEach((continent) => {
      for (let x = continent.startX; x < continent.endX; x += spacing) {
        for (let y = continent.startY; y < continent.endY; y += spacing) {
          if (Math.random() < continent.density) {
            dots.push(
              <circle
                key={`dot-${x}-${y}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r={`${dotSize}%`}
                fill="#94a3b8"
                className="opacity-60"
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
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#F9F9FB] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Services
          </div>
          <h2 className={`text-[2rem] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 sm:mb-4 leading-tight transition-all duration-500 ${
            animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Where Our <span className="text-blue-600">Leads</span> Come From
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-500 delay-100 ${
            animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Access verified data from <span className="font-semibold text-blue-600">700M+ global records</span> across all major industries and regions
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-8 lg:mb-12">
          {/* Left Column - Map */}
          <div className={`transition-all duration-700 delay-200 ${
            animationTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-4 sm:p-6 h-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Regional Coverage</h3>
              <div className="relative w-full aspect-[16/10]">
                <img
                  src={image}
                  alt="World Map"
                  className="w-full h-full object-contain"
                />
                
                <svg
                  viewBox="0 0 600 400"
                  className="absolute inset-0 text-black w-full h-full pointer-events-none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {animationTriggered && generateDots()}

                  {regionData.map((region, index) => (
                    <g key={region.name}>
                      <circle
                        cx={`${region.x}%`}
                        cy={`${region.y}%`}
                        r="4.5%"
                        fill={region.color}
                        filter="url(#glow)"
                        className={`transition-all duration-500 ${
                          animationTriggered ? "opacity-90 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${index * 100 + 300}ms` }}
                      />

                      <circle
                        cx={`${region.x}%`}
                        cy={`${region.y}%`}
                        r="4%"
                        fill="white"
                        className={`transition-all duration-500 ${
                          animationTriggered ? "opacity-20 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${index * 100 + 350}ms` }}
                      />

                      <text
                        x={`${region.x}%`}
                        y={`${region.y - 7}%`}
                        textAnchor="middle"
                        className={`fill-gray-800 font-bold transition-all ${
                          animationTriggered ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ 
                          fontSize: 'clamp(15px, 1.5vw, 20px)',
                          transitionDelay: `${index * 100 + 400}ms` 
                        }}
                      >
                        {region.name}
                      </text>

                      <text
                        x={`${region.x}%`}
                        y={`${region.y + 1}%`}
                        textAnchor="middle"
                        className={`fill-white font-bold transition-all drop-shadow-lg ${
                          animationTriggered ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ 
                          fontSize: 'clamp(14px, 2vw, 20px)',
                          transitionDelay: `${index * 100 + 450}ms` 
                        }}
                      >
                        {region.percentage}%
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Features below map */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3 mt-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 sm:gap-3 bg-[#F5F5FF] px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-500 ${
                      animationTriggered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Industry Stats */}
          <div className={`transition-all duration-700 delay-200 ${
            animationTriggered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-4 sm:p-6 h-full flex flex-col">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Industry Coverage</h3>

              <div className="space-y-3 sm:space-y-4 mb-6 flex-grow">
                {industryStats.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      animationTriggered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 75 + 250}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-700">
                        {item.industry}
                      </span>
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">
                        {counters[item.key]}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: animationTriggered ? `${counters[item.key]}%` : '0%',
                          transitionDelay: `${index * 75 + 50}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={`bg-[#F5F5FF] text-left rounded-xl p-4 sm:p-5 transition-all duration-500 ${
                animationTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`} style={{ transitionDelay: '700ms' }}>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">Why Choose Our Data?</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>Real-time updates every hour ensure fresh, actionable leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>Triple-verified accuracy with 99% confidence rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>Full CCPA & GDPR compliance for legal peace of mind</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Bottom Stats Grid */}
        <div className="bg-[#E9EAFF]  p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-[#6364F2] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-lg text-gray-800 font-bold">
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
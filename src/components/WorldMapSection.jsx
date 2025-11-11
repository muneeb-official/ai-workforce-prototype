import React, { useState, useEffect } from 'react';

const WorldMapSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [counters, setCounters] = useState({
    sales: 0,
    finance: 0,
    technology: 0,
    health: 0,
    other: 0
  });

  // Regional data with exact percentages from your image
  const regionData = [
    { name: 'North America', percentage: 80, x: 280, y: 365, color: '#3b82f6' },
    { name: 'Europe', percentage: 70, x: 675, y: 290, color: '#6366f1' },
    { name: 'Asia', percentage: 50, x: 880, y: 410, color: '#8b5cf6' },
    { name: 'Africa', percentage: 30, x: 650, y: 505, color: '#ec4899' },
    { name: 'South America', percentage: 65, x: 350, y: 580, color: '#10b981' },
    { name: 'Oceania', percentage: 70, x: 980, y: 600, color: '#06b6d4' }
  ];

  const industryStats = [
    { industry: 'Sales', percentage: 85, key: 'sales' },
    { industry: 'Finance', percentage: 78, key: 'finance' },
    { industry: 'Technology', percentage: 92, key: 'technology' },
    { industry: 'Health', percentage: 65, key: 'health' },
    { industry: 'Other Industries', percentage: 58, key: 'other' }
  ];

  const features = [
    'Hourly data Updates',
    'CCPA & GDPR Compliant',
    'Triple Verified with 99% confidence'
  ];

  // Counter animation function
  const animateCounters = () => {
    industryStats.forEach((stat) => {
      let current = 0;
      const increment = stat.percentage / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.percentage) {
          current = stat.percentage;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, 30);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
          setTimeout(animateCounters, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('world-map-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [animationTriggered]);

  // Generate dotted world map pattern
  const generateDots = () => {
    const dots = [];
    const dotSize = 1;
    const spacing = 6;

    // World map outline coordinates (simplified)
    const continents = [
      // North America
      { startX: 180, endX: 380, startY: 280, endY: 450, density: 0.8 },
      // South America  
      { startX: 280, endX: 420, startY: 480, endY: 650, density: 0.65 },
      // Europe
      { startX: 580, endX: 720, startY: 220, endY: 360, density: 0.7 },
      // Africa
      { startX: 580, endX: 720, startY: 380, endY: 580, density: 0.3 },
      // Asia
      { startX: 740, endX: 1080, startY: 180, endY: 480, density: 0.5 },
      // Oceania
      { startX: 920, endX: 1060, startY: 520, endY: 640, density: 0.7 }
    ];

    continents.forEach((continent, continentIndex) => {
      for (let x = continent.startX; x < continent.endX; x += spacing) {
        for (let y = continent.startY; y < continent.endY; y += spacing) {
          if (Math.random() < continent.density) {
            const isLand = isInsideContinent(x, y, continentIndex);
            if (isLand) {
              dots.push(
                <circle
                  key={`dot-${x}-${y}`}
                  cx={x}
                  cy={y}
                  r={dotSize}
                  fill="#cbd5e1"
                  className={`transition-all duration-1000 ${animationTriggered ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{
                    transitionDelay: `${Math.random() * 2000}ms`
                  }}
                />
              );
            }
          }
        }
      }
    });

    return dots;
  };

  // Simple function to determine if a point is inside a continent
  const isInsideContinent = (x, y, continentIndex) => {
    switch (continentIndex) {
      case 0: // North America
        return (x - 280) * (x - 280) + (y - 365) * (y - 365) < 10000;
      case 1: // South America  
        return (x - 350) * (x - 350) + (y - 580) * (y - 580) < 8000;
      case 2: // Europe
        return (x - 650) * (x - 650) + (y - 290) * (y - 290) < 6000;
      case 3: // Africa
        return (x - 650) * (x - 650) + (y - 505) * (y - 505) < 9000;
      case 4: // Asia
        return (x - 880) * (x - 880) + (y - 350) * (y - 350) < 15000;
      case 5: // Oceania
        return (x - 980) * (x - 980) + (y - 600) * (y - 600) < 4000;
      default:
        return false;
    }
  };

  return (
    <section id="world-map-section" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Where Our Leads Come From
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            Global Data Coverage, <span className="text-blue-600">across most industries</span>
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100 transition-all duration-700 ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* World Map Visualization */}
        <div className="mb-20 flex justify-center">
          <div className="relative w-full max-w-5xl">
            <div className="relative bg-gradient-to-br from-gray-50 to-slate-100 rounded-3xl p-12 shadow-2xl border border-gray-200">

              {/* Background Map Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 rounded-3xl"
                style={{
                  backgroundImage: "url('/src/assets/world-map.png')",
                  marginTop: '50px'
                }}
              ></div>

              {/* SVG World Map */}
              <svg viewBox="0 0 1200 700" className="w-full h-auto mb-15">

                {/* Generate dotted continents */}
                {generateDots()}

                {/* Regional percentage markers */}
                {regionData.map((region, index) => (
                  <g key={region.name}>
                    {/* Animated circle */}
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r="8"
                      fill={region.color}
                      className={`transition-all duration-1000 ${animationTriggered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                      style={{
                        transitionDelay: `${index * 300 + 1000}ms`
                      }}
                    />

                    {/* Region label */}
                    <text
                      x={region.x}
                      y={region.y - 80}
                      textAnchor="middle"
                      className={`fill-gray-700 font-semibold text-[23px] transition-all duration-1000 ${animationTriggered ? 'opacity-100' : 'opacity-0'
                        }`}
                      style={{
                        transitionDelay: `${index * 300 + 1200}ms`
                      }}
                    >
                      {region.name}
                    </text>

                    {/* Percentage text */}
                    <text
                      x={region.x}
                      y={region.y - 30}
                      textAnchor="middle"
                      className={`fill-black font-bold text-[27px] transition-all duration-1000 ${animationTriggered ? 'opacity-100' : 'opacity-0'
                        }`}
                      style={{
                        transitionDelay: `${index * 300 + 1400}ms`
                      }}
                    >
                      {region.percentage}%
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>



        {/* Industry Statistics */}
        <div className="text-center my-26">
          
          <p className="text-4xl font-extrabold text-gray-700 mb-18">
            Global Data Coverage, <span className="text-blue-600">across most industries</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-15 max-w-4xl mx-auto">
            {industryStats.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 150 + 2000}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                  {counters[item.key]}%
                </div>
                <div className="text-gray-600 font-medium">
                  {item.industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Hourly', subtitle: 'data Updates', bg: 'from-blue-50 to-blue-100', text: 'text-blue-600' },
            { title: 'CCPA & GDPR', subtitle: 'Compliant', bg: 'from-green-50 to-green-100', text: 'text-green-600' },
            { title: 'Triple Verified', subtitle: '99% confidence', bg: 'from-purple-50 to-purple-100', text: 'text-purple-600' },
            { title: '700M+', subtitle: 'People Data', bg: 'from-orange-50 to-orange-100', text: 'text-orange-600' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center bg-gradient-to-br ${stat.bg} p-8 rounded-2xl shadow-lg border border-white/50 transition-all duration-700 hover:scale-105 ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 200 + 2500}ms` }}
            >
              <div className={`text-2xl sm:text-3xl font-bold ${stat.text} mb-2`}>
                {stat.title}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
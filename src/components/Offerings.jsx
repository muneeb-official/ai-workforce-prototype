import React, { useState, useEffect, useRef } from "react";
import { Monitor, Users, UserCheck, FileText, MessageCircle, Headphones } from "lucide-react";

const offeringsData = [
  {
    id: 1,
    icon: Monitor,
    title: "Monitoring Company Stats",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "#5B93FF"
  },
  {
    id: 2,
    icon: Users,
    title: "Fundraise",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "#5B93FF"
  },
  {
    id: 3,
    icon: UserCheck,
    title: "Hire Advisors",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "#5B93FF"
  },
  {
    id: 4,
    icon: FileText,
    title: "Secure Document Storage",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "#5B93FF"
  },
  {
    id: 5,
    icon: MessageCircle,
    title: "Talk To Investor",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "#5B93FF"
  },
  {
    id: 6,
    icon: Headphones,
    title: "Trendscout 24×7 Support",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "#5B93FF"
  }
];

const OfferingCard = ({ offering, index, isVisible }) => {
  const IconComponent = offering.icon;
  
  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div className="flex flex-col items-start text-left">
        {/* Icon and Title */}
        <div className="flex items-center gap-0 mb-3 -ml-3">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            // style={{ backgroundColor: `${offering.color}20` }}
          >
            <IconComponent 
              size={24} 
              style={{ color: offering.color }}
              strokeWidth={2}
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {offering.title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {offering.description}
        </p>
      </div>
    </div>
  );
};

const OtherOfferings = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            offeringsData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            Services
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
            Our offerings
          </h2>
        </div>

        {/* Offerings Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
          {offeringsData.map((offering, index) => (
            <OfferingCard
              key={offering.id}
              offering={offering}
              index={index}
              isVisible={visibleCards.includes(index)}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center pt-12 border-t border-gray-200">
          <p className="text-gray-600 text-base">
            Listen to what our consumers says?
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherOfferings;
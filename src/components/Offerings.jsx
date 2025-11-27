import React, { useState, useEffect, useRef } from "react";
import {
  Monitor,
  Users,
  UserCheck,
  FileText,
  MessageCircle,
  Headphones,
} from "lucide-react";

const offeringsData = [
  {
    id: 1,
    icon: Monitor,
    title: "Dedicated Account Manager Assigned",
    description:
      "Every user receives a dedicated account manager who provides guidance, answers questions, and ensures smooth onboarding and growth.",
    color: "#5B93FF",
  },
  {
    id: 2,
    icon: Users,
    title: "Custom-Coded AI Agents",
    description:
      "All our agents are built from custom code with no third-party tools or frameworks, giving you faster performance and complete reliability.",
    color: "#5B93FF",
  },
  {
    id: 3,
    icon: UserCheck,
    title: "UK & Europe Data Intelligence",
    description:
      "Our platform uses strong UK and Europe datasets trusted by major firms, ensuring accurate results and consistent data quality throughout.",
    color: "#5B93FF",
  },
  {
    id: 4,
    icon: FileText,
    title: "Lead Generation & Outreach Automation",
    description:
      "The platform finds, enriches, and contacts new leads automatically, handling research, messaging, and follow-ups to keep engagement steady and consistent.",
    color: "#5B93FF",
  },
  {
    id: 5,
    icon: MessageCircle,
    title: "Content & Engagement Automation",
    description:
      "The system helps agents produce blogs, posts, and brochures, ensuring your brand stays active and consistent across every channel.",
    color: "#5B93FF",
  },
  {
    id: 6,
    icon: Headphones,
    title: "Assistant & Meeting Support Agents",
    description:
      "Our agents manage emails, tasks, calls, and meeting notes, helping organise your day, capture key points, and keep your workflow running smoothly.",
    color: "#5B93FF",
  },
];

const OfferingCard = ({ offering, index, isVisible }) => {
  const IconComponent = offering.icon;

  return (
    <div
      className={`bg-[#FAFAFa] p-5 rounded-[0.5rem] transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div className="flex flex-col items-start text-left">
        {/* Icon */}
        <div className="mb-4">
          <IconComponent
            size={30}
            style={{ color: "#155DFC" }}
            strokeWidth={2}
          />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
          {offering.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
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
      { threshold: 0.1, rootMargin: "50px" }
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
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Services
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight px-4 transition-all duration-700 `}
            style={{ transitionDelay: "100ms" }}
          >
            Our
            <span className="bg-blue-600 mx-1 md:mx-3  bg-clip-text text-transparent">
              Offerings
            </span>
          </h2>
        </div>

        {/* Offerings Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 sm:gap-x-6  gap-y-5 md:gap-y-8 mb-0 md:mb-10 mx-2 md:mx-0">
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
        {/* <div className="text-center pt-12 border-t border-gray-200">
          <p className="text-gray-600 text-base">
            Listen to what our consumers says?
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default OtherOfferings;

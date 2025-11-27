import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import agent images
import Agent1 from "../assets/Agent 1.svg";
import Agent2 from "../assets/Agent 2.svg";
import Agent3 from "../assets/Agent 3.svg";
import Agent4 from "../assets/Agent 4.svg";
import Agent5 from "../assets/Agent 5.svg";
import Agent6 from "../assets/Agent 6.svg";
import Agent7 from "../assets/Agent 7.svg";
import Agent8 from "../assets/Agent 8.svg";
import Agent9 from "../assets/Agent 9.svg";

const agentImages = [
  Agent1,
  Agent2,
  Agent3,
  Agent4,
  Agent5,
  Agent6,
  Agent7,
  Agent8,
  Agent9,
];

const agentsData = [
  {
    id: "b2c-lead-builder",
    title: "B2C Lead Builder Agent",
    subtitle: "Consumer Lead Generation",
    briefDescription:
      "Access a database of 800M+ verified consumer profiles worldwide. Create detailed customer personas and instantly find matching real users. Search using filters like name, location, role, skills, experience, or industry.",
    features: [
      {
        title: "Enriched Contact",
        description: "Access to verified emails and phone numbers.",
      },
      {
        title: "Contact Details",
        description: "Getting contact details just by name or LinkedIn URL.",
      },
      {
        title: "Outreach Potential Leads",
        description:
          "Ideal for both large-scale outreach and highly targeted prospecting.",
      },
      {
        title: "Powered by AI",
        description: "Build smarter, reach faster, and grow effortlessly.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "b2b-lead-builder",
    title: "B2B Lead Builder Agent",
    subtitle: "Business Lead Generation",
    briefDescription:
      "The B2B Lead Builder Agent identifies target companies and key decision-makers using verified data and enriched contacts. It streamlines outreach and strengthens your pipeline with precise, targeted prospecting.",
    features: [
      {
        title: "Identify Right Companies",
        description: "Find target verified businesses, reliable data sources.",
      },
      {
        title: "Get Key Decision-Makers",
        description:
          "Access enriched profiles to reach the people who matter most.",
      },
      {
        title: "Streamline Your Outreach",
        description:
          "Use accurate insights to contact prospects more efficiently.",
      },
      {
        title: "Strengthen Sales Pipeline",
        description:
          "Boost conversions with precise, targeted prospecting at scale.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "organic-lead-builder",
    title: "Organic Lead Builder Agent",
    subtitle: "Passive Lead Generation",
    briefDescription:
      "The Organic Lead Builder Agent builds a steady prospect pipeline automatically and delivers daily or weekly reports, ensuring at least 150 organic leads each month—effortlessly, even while you sleep.",
    features: [
      {
        title: "Automated Lead Generation",
        description:
          "Continuously builds a steady pipeline without manual effort.",
      },
      {
        title: "Smart Target Matching",
        description: "Finds prospects that exactly match your ideal profile.",
      },
      {
        title: "Scheduled Lead Reports",
        description:
          "Delivers daily or weekly lead summaries straight to your inbox.",
      },
      {
        title: "Guaranteed Monthly Growth",
        description:
          "Provides at least 150 organic leads every month effortlessly.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "cold-inbound",
    title: "Cold Inbound Agent",
    subtitle: "Email & Messaging Automation",
    briefDescription:
      "The Cold Inbound Agent builds effective multi-channel workflows with high deliverability, using added domains, templates, and Email, Telegram, or WhatsApp to streamline bulk outreach and strengthen your touchpoint strategy.",
    features: [
      {
        title: "Multi-Channel Outreach Made Easy",
        description:
          "Streamline campaigns across Email, Telegram, and WhatsApp effortlessly.",
      },
      {
        title: "High Deliverability Guaranteed",
        description:
          "Optimised settings and extra domains keep messages out of spam.",
      },
      {
        title: "Ready-to-Use Templates",
        description:
          "Access preset templates or customize your own in minutes.",
      },
      {
        title: "Stronger Touchpoint Strategy",
        description:
          "Build consistent, effective outreach flows that boost engagement.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "call-outreach",
    title: "Call Outreach Agent",
    subtitle: "AI Voice Outreach",
    briefDescription:
      "The Call Outreach Agent uses voice AI to turn leads into natural conversations, book meetings automatically, and keep your pipeline active 24/7 with personal, professional interactions.",
    features: [
      {
        title: "AI-Powered Calling",
        description:
          "Turns lead lists into natural, human-like conversations instantly.",
      },
      {
        title: "Automated Meeting Booking",
        description:
          "Schedules calls and meetings directly into your calendar.",
      },
      {
        title: "24/7 Pipeline Activation",
        description:
          "Keeps your outreach running round-the-clock without manual effort.",
      },
      {
        title: "Personal & Professional Interactions",
        description:
          "Ensures every call feels tailored, timely, and high-quality.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "brochure-creation",
    title: "Brochure Creation Agent",
    subtitle: "Design & Content Creation",
    briefDescription:
      "The Brochure Creation Agent creates professional, data-rich brochures in minutes, using real-time insights and tailored branding to produce pitch decks, eBooks, and presentations—no design team needed.",
    features: [
      {
        title: "Instant Professional Brochures",
        description: "Create polished, data-rich brochures in just minutes.",
      },
      {
        title: "Real-Time Market Insights",
        description:
          "Use fresh industry data to craft more compelling content.",
      },
      {
        title: "Tailored Brand Styling",
        description:
          "Generate brochures that match your brand’s visual identity.",
      },
      {
        title: "Versatile Content Formats",
        description:
          "Produce pitch decks, eBooks, and presentations without a design team.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "seo-blog-engine",
    title: "SEO Blog & Content Engine Agent",
    subtitle: "SEO & Content Automation",
    briefDescription:
      "The Blog & Content Engine Agent turns your ideas into SEO-optimized content, analyzes top blogs, and writes in your brand’s voice. It also plans and auto-schedules LinkedIn posts, giving you a full week of content from one prompt.",
    features: [
      {
        title: "SEO-Optimized Content Creation",
        description:
          "Produces high-performing, search-ready content tailored to your brand’s voice.",
      },
      {
        title: "Smart Blog Analysis",
        description:
          "Scans top-ranking blogs to replicate what drives real organic results.",
      },
      {
        title: "Automated LinkedIn Scheduling",
        description:
          "Plans and auto-uploads your weekly posts at peak engagement times.",
      },
      {
        title: "One Prompt, Full Week of Content",
        description:
          "Generates and schedules an entire week of posts from a single input.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "personal-assistant",
    title: "Personal Assistant Agent",
    subtitle: "Automation & Productivity",
    briefDescription:
      "The Personal Assistant Agent manages your emails, schedule, calls, and inquiries, mirroring your tone and sending smart reminders. It handles tasks, prepares meeting insights, and keeps everything organised across web and Telegram so you can stay focused.",
    features: [
      {
        title: "Smart Email & Schedule Management",
        description:
          "Keeps your inbox, meetings, and tasks organised automatically.",
      },
      {
        title: "Tone-Matched Communication",
        description:
          "Drafts replies in your style to maintain consistent communication.",
      },
      {
        title: "Intelligent Meeting Preparation",
        description:
          "Provides insights and summaries so you're always ready and informed.",
      },
      {
        title: "Seamless Multi-Platform Workflow",
        description:
          "Manages your work across web and Telegram, helping you stay focused.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },

  {
    id: "meeting-note-taker",
    title: "Meeting Note Taker / Summariser Agent",
    subtitle: "AI Meeting Automation",
    briefDescription:
      "The Meeting Note Taker Agent captures every meeting in real time, delivering clear summaries, action items, and saved recordings—keeping you organised and eliminating manual note-taking.",
    features: [
      {
        title: "Real-Time Meeting Capture",
        description:
          "Records discussions instantly so nothing important is ever missed.",
      },
      {
        title: "Clear, Structured Summaries",
        description:
          "Delivers concise insights and action items right after every meeting.",
      },
      {
        title: "Automatic Recording Storage",
        description:
          "Saves all raw recordings securely for easy future reference.",
      },
      {
        title: "Zero Manual Note-Taking",
        description:
          "Keeps you organised by handling all notes so you can stay focused.",
      },
    ],
    bgColor: "#F8F9FC",
    customColor: "#1A1F36",
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const AgentCard = ({ agent, index, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isImageLeft = index % 2 === 1;

  const featureBoxes = agent.features;

  return (
    <div style={{ fontFamily: "DM Sans", height: "100%" }}>
      <div className="relative rounded-2xl overflow-hidden bg-[#F4F4F6] h-auto md:h-130 mx-2 md:mx-0">
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden">
          {/* Image Section - Smaller when expanded */}
          <div
            className="relative flex items-center justify-center overflow-hidden rounded-t-2xl"
            style={{
              background: `linear-gradient(135deg, ${agent.customColor}15, ${agent.customColor}30)`,
            }}
          >
            <img
              src={image}
              alt={agent.title}
              className={`w-full object-contain transition-all duration-300 ${
                isExpanded ? "max-h-[140px]" : "max-h-[200px]"
              }`}
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col text-left">
            <h3 className="text-[1.1rem] font-bold text-gray-900 mb-2 leading-tight">
              {agent.title}
            </h3>

            <p
              className={`text-[0.8rem] text-gray-600 leading-relaxed mb-3 ${
                isExpanded ? "line-clamp-2" : "line-clamp-4"
              }`}
            >
              {agent.briefDescription}
            </p>

            {/* Features Grid - Only when expanded */}
            {isExpanded && (
              <div className="grid grid-cols-2 gap-2 mb-3 animate-fadeIn">
                {featureBoxes.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-2.5 border-l-2 border-blue-500"
                  >
                    <h4 className="text-[0.7rem] font-bold text-gray-900 mb-0.5 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[0.6rem] text-gray-600 leading-snug">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Read More / Read Less button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-blue-600 font-semibold text-xs mb-3 self-start"
            >
              <span className="underline">
                {isExpanded ? "Read Less" : "Read More"}
              </span>
              <ArrowUpRight
                size={12}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Get this Agent button - Always at bottom */}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-full py-2.5 text-gray-800 font-semibold text-xs hover:bg-gray-50 transition-all duration-300 shadow-sm mt-auto"
            >
              Get this Agent
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-0 h-full">
          {isImageLeft ? (
            <>
              {/* Image Section */}
              <div
                className="relative flex items-center justify-center overflow-hidden order-1 rounded-l-2xl"
                style={
                  {
                    // background: `linear-gradient(135deg, ${agent.customColor}15, ${agent.customColor}30)`,
                  }
                }
              >
                <img
                  src={image}
                  alt={agent.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content Section */}
              <div className="order-2 p-4 lg:p-12 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-[1.6rem] font-bold text-gray-900 mb-5 leading-tight">
                    {agent.title}
                  </h3>
                  <p className="text-[0.95rem] text-gray-700 leading-relaxed mb-8">
                    {agent.briefDescription}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {featureBoxes.map((feature, idx) => (
                      <div key={idx} className="bg-white rounded p-3">
                        <h4 className="text-sm font-bold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="flex items-center gap-2 text-blue-600 font-medium text-md hover:gap-3 hover:underline transition-all duration-300"
                  >
                    Get this Agent
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content Section */}
              <div className="order-1 p-4 lg:p-12 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-[1.6rem] font-bold text-gray-900 mb-5 leading-tight">
                    {agent.title}
                  </h3>
                  <p className="text-[0.95rem] text-gray-700 leading-relaxed mb-8">
                    {agent.briefDescription}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {featureBoxes.map((feature, idx) => (
                      <div key={idx} className="bg-white rounded p-3">
                        <h4 className="text-sm font-bold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="flex items-center gap-2 text-blue-600 font-medium text-md hover:gap-3 hover:underline transition-all duration-300"
                  >
                    Get this Agent
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              {/* Image Section */}
              <div
                className="relative flex items-center justify-center overflow-hidden order-2 rounded-r-2xl"
                style={
                  {
                    // background: `linear-gradient(135deg, ${agent.customColor}15, ${agent.customColor}30)`,
                  }
                }
              >
                <img src={image} alt={agent.title} className="w-full h-full " />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const UpdateAgentsNetwork = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative "
      style={{
        fontFamily: "DM Sans",
        height: `${(agentsData.length + 2) * 170}vh`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="sticky top-10 bottom-10 h-screen overflow-hidden">
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-11">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Meet your AI Workforce
            </div>
            <p className="text-[1.3rem] md:text-[2.5rem] font-bold text-gray-900 mb-5 leading-tight">
              Recruit enterprise-grade AI agents today{" "}
              <span className="text-blue-600">fully customisable</span>
            </p>
          </div>

          <div className="relative mx-auto w-full h-[800px]">
            {agentsData.map((agent, index) => {
              const cardHeight = 100;
              const startScroll =
                (index * cardHeight) / (agentsData.length * 100);
              const peakScroll =
                ((index + 0.5) * cardHeight) / (agentsData.length * 100);
              const endScroll =
                ((index + 2.5) * cardHeight) / (agentsData.length * 100);

              const y = useTransform(
                scrollYProgress,
                [
                  Math.max(0, startScroll - 0.1),
                  startScroll,
                  peakScroll,
                  peakScroll + 0.1,
                  endScroll,
                  Math.min(1, endScroll + 0.1),
                ],
                [
                  window.innerHeight,
                  window.innerHeight * 0.3,
                  0,
                  -50,
                  -50,
                  -150,
                ]
              );

              const scale = useTransform(
                scrollYProgress,
                [
                  Math.max(0, startScroll - 0.05),
                  peakScroll - 0.05,
                  peakScroll,
                  peakScroll + 0.05,
                  endScroll,
                  Math.min(1, endScroll + 0.1),
                ],
                [0.85, 0.95, 1, 0.95, 0.85, 0.75]
              );

              const scaleY = useTransform(
                scrollYProgress,
                [
                  peakScroll,
                  peakScroll + 0.05,
                  endScroll,
                  Math.min(1, endScroll + 0.1),
                ],
                [1, 0.9, 0.7, 0.5]
              );

              const opacity = useTransform(
                scrollYProgress,
                [
                  Math.max(0, startScroll - 0.1),
                  startScroll,
                  peakScroll - 0.02,
                  peakScroll + 0.02,
                  endScroll,
                  Math.min(1, endScroll + 0.1),
                ],
                [1, 1, 1, 1, 1, 1]
              );

              const zIndex = useTransform(
                scrollYProgress,
                [startScroll - 0.1, startScroll, peakScroll, endScroll],
                [
                  1000 - index * 10,
                  1000 - index * 10,
                  1000 - index * 10,
                  10 + index,
                ]
              );

              const rotateX = useTransform(
                scrollYProgress,
                [
                  Math.max(0, startScroll - 0.1),
                  peakScroll,
                  Math.min(1, endScroll + 0.1),
                ],
                [-5, 0, 0]
              );

              return (
                <motion.div
                  key={agent.id}
                  style={{
                    position: "absolute",
                    width: "100%",
                    y,
                    scale,
                    scaleY,
                    opacity,
                    zIndex,
                    rotateX,
                    perspective: 1000,
                  }}
                  className="px-1"
                >
                  <AgentCard
                    agent={agent}
                    index={index}
                    image={agentImages[index]}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateAgentsNetwork;

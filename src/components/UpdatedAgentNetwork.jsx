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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#E3EDF8",
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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#9A80D2",
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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#ECF3FF",
  },
  {
    id: "cold-inbound",
    title: "Call Outreach Agent",
    subtitle: "Email & Messaging Automation",
    briefDescription:
      "The Call Outreach Agent builds effective multi-channel workflows with high deliverability, using added domains, templates, and Email, Telegram, or WhatsApp to streamline bulk outreach and strengthen your touchpoint strategy.",
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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#ECF1FF",
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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#587DFE",
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
          "Generate brochures that match your brand's visual identity.",
      },
      {
        title: "Versatile Content Formats",
        description:
          "Produce pitch decks, eBooks, and presentations without a design team.",
      },
    ],
    cardBgColor: "#F4F4F6",
    imageBgColor: "#ECF3FF",
  },
  {
    id: "seo-blog-engine",
    title: "SEO Blog & Content Engine Agent",
    subtitle: "SEO & Content Automation",
    briefDescription:
      "The Blog & Content Engine Agent turns your ideas into SEO-optimized content, analyzes top blogs, and writes in your brand's voice. It also plans and auto-schedules LinkedIn posts, giving you a full week of content from one prompt.",
    features: [
      {
        title: "SEO-Optimized Content Creation",
        description:
          "Produces high-performing, search-ready content tailored to your brand's voice.",
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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#ECF3FF",
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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#FFF6EC",
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
    cardBgColor: "#F4F4F6",
    imageBgColor: "#ECEDFC",
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

// Mobile Card Component - Static with expandable content
const MobileAgentCard = ({ agent, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden mx-4"
      style={{
        fontFamily: "DM Sans",
        backgroundColor: agent.cardBgColor || "#F4F4F6",
      }}
    >
      {/* Image Section */}
      <div
        className="relative w-full flex items-center justify-center p-4"
        style={{
          backgroundColor: agent.imageBgColor || "#E3EDF8",
          minHeight: "120px",
        }}
      >
        <img
          src={image}
          alt={agent.title}
          className="w-auto h-auto  object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-left">
        <h3 className="text-[1.3rem] font-bold text-gray-900 mb-1 leading-tight">
          {agent.title}
        </h3>

        <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-1">
          {agent.briefDescription}
        </p>

        {/* Features Grid - Expandable (NO blue border) */}
        <div
          className={`grid grid-cols-1 gap-1.5 text-left overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
        >
          {agent.features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg p-3">
              <h4 className="text-[0.9rem] font-bold text-gray-900 mb-1 leading-tight">
                {feature.title}
              </h4>
              <p className="text-[0.75rem] text-gray-600 leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Read More / Read Less button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm mb-4"
        >
          <span className="underline">
            {isExpanded ? "Read Less" : "Read More"}
          </span>
          <ArrowUpRight
            size={14}
            strokeWidth={2.5}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>

        {/* Get this Agent button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-full py-3 text-gray-800 font-semibold text-sm hover:bg-gray-50 transition-all duration-300 shadow-sm"
        >
          Get this Agent
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

// Desktop Card Component - With animation
const DesktopAgentCard = ({ agent, index, image }) => {
  const isImageLeft = index % 2 === 1;

  const ContentSection = () => (
    <div className="p-8 xl:p-10 flex flex-col text-left justify-center w-full h-[35rem]">
      <h3 className="text-[1.85rem] font-bold text-gray-900 mb-3 leading-tight">
        {agent.title}
      </h3>
      <p className="text-[1rem] text-gray-600 leading-relaxed mb-6">
        {agent.briefDescription}
      </p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {agent.features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-lg p-3.5">
            <h4 className="text-[0.95rem] font-bold text-gray-900 mb-1">
              {feature.title}
            </h4>
            <p className="text-[0.85rem] text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => scrollToSection("contact")}
        className="inline-flex items-center gap-2 text-blue-600 font-medium text-base hover:gap-3 hover:underline transition-all duration-300 w-fit"
      >
        Get this Agent
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </button>
    </div>
  );

  const ImageSection = () => (
    <div
      className="relative flex items-center justify-center h-full w-full p-6"
      style={{ backgroundColor: agent.imageBgColor || "#E3EDF8" }}
    >
      <img
        src={image}
        alt={agent.title}
        className="w-full h-full  object-contain"
      />
    </div>
  );

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        fontFamily: "DM Sans",
        backgroundColor: agent.cardBgColor || "#F4F4F6",
        height: "550px",
      }}
    >
      <div className="grid grid-cols-2 h-full">
        {isImageLeft ? (
          <>
            <ImageSection />
            <ContentSection />
          </>
        ) : (
          <>
            <ContentSection />
            <ImageSection />
          </>
        )}
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
      className="relative"
      style={{ fontFamily: "DM Sans" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Version - Static scroll (NO animation) */}
      <div className="lg:hidden py-12">
        <div className="text-center mb-8 px-4">
          <div className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium mb-4">
            Meet your AI Workforce
          </div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">
            Recruit enterprise-grade AI agents today{" "}
            <span className="text-blue-600">fully customisable</span>
          </h2>
        </div>

        <div className="space-y-6">
          {agentsData.map((agent, index) => (
            <MobileAgentCard
              key={agent.id}
              agent={agent}
              image={agentImages[index]}
            />
          ))}
        </div>
      </div>

      {/* Desktop Version - With scroll animation */}
      {/* <div
        className="hidden lg:block relative"
        // style={{ height: `${(agentsData.length + 2) * 170}vh` }}
      >
        <div className="sticky top-10 h-screen overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mt-8">
              <div className="inline-block px-6 py-3 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium mb-5">
                Meet your AI Workforce
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Recruit enterprise-grade AI agents today{" "}
                <span className="text-blue-600">fully customisable</span>
              </p>
            </div>

            <div className="relative mx-auto w-full h-[520px]">
              {agentsData.map((agent, index) => (
                <div
                  key={agent.id}
                  style={{
                    position: "absolute",
                    width: "100%",
                  }}
                >
                  <DesktopAgentCard
                    agent={agent}
                    index={index}
                    image={agentImages[index]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* Desktop Version - Static layout */}
      <div className="hidden lg:block relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium mb-5">
              Meet your AI Workforce
            </div>
            <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Recruit enterprise-grade AI agents today{" "}
              <span className="text-blue-600">fully customisable</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-15 h-full w-full">
            {agentsData.map((agent, index) => (
              <div key={agent.id}>
                <DesktopAgentCard
                  agent={agent}
                  index={index}
                  image={agentImages[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateAgentsNetwork;

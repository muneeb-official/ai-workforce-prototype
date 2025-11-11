import React, { useState, useEffect, useRef } from "react";

// Enhanced Agent Data with your specific colors
const agentsData = [
  {
    id: "b2c-lead-builder",
    title: "B2C Lead Builder Agent",
    subtitle: "Consumer Lead Generation",
    icon: "📊",
    briefDescription: "Turn data into opportunity with access to 800M+ verified consumer profiles worldwide. Build ideal personas and discover real people instantly.",
    detailedDescription: "Turn data into opportunity with the B2C Lead Builder Agent — your gateway to over 800 million verified consumer profiles worldwide. Build your perfect customer persona and instantly discover real people who match it. Search by name, location, role, skills, experience, or industry, and watch as the agent delivers enriched contact lists complete with verified emails and phone numbers. Whether you're scaling outreach or targeting specific individuals, simply enter a name and LinkedIn URL to uncover direct contact details in seconds. Build smarter, reach faster, and grow your customer base effortlessly — all powered by AI precision.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: ["800M+ verified profiles", "Real-time data enrichment", "Global coverage", "Instant contact discovery"],
    bgColor: "from-[#7770FF] to-[#B09CFF]",
    iconBg: "bg-[#7770FF]",
    customColor: "#7770FF"
  },
  {
    id: "b2b-lead-builder",
    title: "B2B Lead Builder Agent",
    subtitle: "Business Lead Generation",
    icon: "🏢",
    briefDescription: "Find and connect with key decision-makers using verified business data and AI-powered targeting.",
    detailedDescription: "Find and connect with the businesses that matter most using the B2B Lead Builder Agent. This intelligent tool searches verified data sources to identify companies in your target industry and location, revealing the key decision-makers behind them. It enriches profiles with accurate contact details wherever available, helping your team focus on genuine prospects — not guesswork. Build stronger pipelines, speed up outreach, and give your sales team the advantage of precision-powered targeting.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: ["Decision-maker identification", "Company intelligence", "Verified contact data", "Industry targeting"],
    bgColor: "from-[#B09CFF] to-[#E6CBFF]",
    iconBg: "bg-[#B09CFF]",
    customColor: "#B09CFF"
  },
  {
    id: "organic-lead-builder",
    title: "Organic Lead Builder Agent",
    subtitle: "Passive Lead Generation",
    icon: "🌱",
    briefDescription: "Generate leads passively with automated workflows that deliver verified prospects daily or weekly.",
    detailedDescription: "Generate leads passively with the Organic Lead Builder Agent. With our unique workflow, it builds a consistent pipeline of prospects and gathers contact details ready for outreach — all while you focus on other tasks. Simply create your target profile by name, location, role, skills, experience, or industry, and let the agent do the rest. Receive daily or weekly lead reports directly in your inbox, and watch your network grow organically — even while you sleep. Expect a minimum of 150 new leads per month, delivered effortlessly.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: ["Automated workflows", "150+ leads per month", "Daily/weekly reports", "Passive generation"],
    bgColor: "from-[#7770FF] to-[#E6CBFF]",
    iconBg: "bg-[#7770FF]",
    customColor: "#7770FF"
  },
  {
    id: "cold-outreach",
    title: "Cold Outreach Agent",
    subtitle: "Email & Messaging Automation",
    icon: "📧",
    briefDescription: "Automate outreach workflows across email, Telegram, and WhatsApp with built-in spam avoidance.",
    detailedDescription: "The Cold Outreach Agent takes the pipelines and projects you've built with our Lead Builder Agents — or allows you to import your own list — to build workflow campaigns and templates for effective prospect outreach. It helps create a touchpoint strategy to reach out to bulk prospects efficiently. Our parameters are designed to avoid spam filters. This agent also comes with two additional email domains, increasing your sending capacity. You can build workflows via Email, Telegram, or WhatsApp, and use preset templates we've created or design your own. Whatever touchpoint strategy works for you, this agent makes it easy to execute.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: ["Multi-channel outreach", "Spam filter avoidance", "Custom templates", "Bulk processing"],
    bgColor: "from-[#B09CFF] to-[#7770FF]",
    iconBg: "bg-[#B09CFF]",
    customColor: "#B09CFF"
  },
  {
    id: "call-outreach",
    title: "Call Outreach Agent",
    subtitle: "AI Voice Outreach",
    icon: "📞",
    briefDescription: "Convert leads into conversations with voice AI that books meetings and engages 24/7.",
    detailedDescription: "The Call Outreach Agent turns every lead list into live conversations that drive results. Using advanced voice AI, it takes the pipelines you've built with our Lead Builder Agents or your own imported lists and creates dynamic calling campaigns that do the hard work for you. The agent makes intelligent outbound calls, warms up leads with natural, human-like conversations, and books meetings directly into your calendar. With built-in pacing controls and smart scheduling, it ensures every call feels personal and professional. Keep your pipeline moving, your prospects engaged, and your sales team focused on closing while your AI handles the outreach — 24/7.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: ["Voice AI technology", "Meeting booking", "Natural conversations", "24/7 operation"],
    bgColor: "from-[#E6CBFF] to-[#B09CFF]",
    iconBg: "bg-[#E6CBFF]",
    customColor: "#E6CBFF"
  },
  {
    id: "brochure-creation",
    title: "Brochure Creation Agent",
    subtitle: "Design & Content Creation",
    icon: "📄",
    briefDescription: "Create professional brochures, pitch decks, and presentations enriched with market data.",
    detailedDescription: "Bring your ideas to life with the Brochure Creation Agent — your on-demand designer that creates stunning, data-rich brochures in just minutes. From pitch decks and business plans to eBooks and branded presentations, it crafts professional materials tailored to your brand and audience. Enriched with real-time market data, local insights, and eye-catching visuals, every brochure is built to impress, inform, and convert — all without the need for a design team.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: ["Professional design", "Market data integration", "Brand customization", "Multiple formats"],
    bgColor: "from-[#7770FF] to-[#B09CFF]",
    iconBg: "bg-[#7770FF]",
    customColor: "#7770FF"
  },
  {
    id: "seo-blog-engine",
    title: "SEO Blog & Content Engine Agent",
    subtitle: "Content Creation & SEO",
    icon: "⚙️",
    briefDescription: "Transform ideas into SEO-optimized posts and social content tailored to your brand's voice.",
    detailedDescription: "Turn your ideas into traffic-driving content with the Blog & Content Engine Agent. It scans top-ranking blogs, analyzes what performs best, and creates SEO-optimized posts in your brand's voice to attract organic leads. You can also plan and schedule LinkedIn posts for the week ahead — with auto-upload at optimal times to boost engagement. One simple prompt, a week of content, fully automated.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: ["SEO optimization", "Brand voice matching", "Auto-scheduling", "Content analysis"],
    bgColor: "from-[#B09CFF] to-[#E6CBFF]",
    iconBg: "bg-[#B09CFF]",
    customColor: "#B09CFF"
  },
  {
    id: "personal-assistant",
    title: "Personal Assistant Agent",
    subtitle: "Automation & Productivity",
    icon: "🤖",
    briefDescription: "Manage emails, meetings, reminders, and communications with an AI that works like you.",
    detailedDescription: "Your AI-powered executive assistant that manages your emails, schedules, calls, and inquiries — drafting replies in your tone, organizing your day, and sending smart reminders through Telegram so you stay focused on high-value work. The Personal Assistant Agent features a project tracking dashboard that monitors communications and meetings in real time, displaying clear status updates and progress overviews. It mirrors your tone, categorizes messages by importance, drafts replies ready for review, and can respond automatically when you're unavailable. It also handles inbound inquiries, books meetings, sends updates, and delivers personalized summaries before each call. Fully customizable across web and Telegram, it keeps your operations organized, your communication seamless, and your time free for meaningful work.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: ["Email management", "Schedule optimization", "Project tracking", "Smart reminders"],
    bgColor: "from-[#E6CBFF] to-[#7770FF]",
    iconBg: "bg-[#E6CBFF]",
    customColor: "#E6CBFF"
  },
  {
    id: "meeting-note-taker",
    title: "Meeting Note Taker Agent",
    subtitle: "AI Meeting Assistant",
    icon: "📝",
    briefDescription: "Automatically capture, summarize, and organize meeting insights across all platforms.",
    detailedDescription: "Never miss a detail again with the Meeting Note Taker Agent — your always-on meeting companion. It joins your Zoom, Teams, or Google Meet sessions, or listens in via Telegram for in-person meetings, capturing every discussion in real time. After each meeting, it delivers a clear, structured summary with key decisions, insights, and action items, automatically syncing them to your calendar or task manager. All raw meeting recordings are securely saved to your drive, giving you full access to every conversation whenever you need it. Stay organized, save hours on note-taking, and keep every project moving forward effortlessly.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: ["Real-time transcription", "Auto-summarization", "Action item extraction", "Multi-platform support"],
    bgColor: "from-[#7770FF] to-[#E6CBFF]",
    iconBg: "bg-[#7770FF]",
    customColor: "#7770FF"
  }
];

// Modal Component for detailed view
const AgentModal = ({ agent, isOpen, onClose }) => {
  if (!isOpen || !agent) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999]">
        <div 
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-500 scale-100"
          style={{ fontFamily: 'DM Sans' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Avatar */}
          <div className={`bg-gradient-to-br ${agent.bgColor} p-0 rounded-t-3xl relative overflow-hidden`}>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-lg"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <img
                src={agent.avatar}
                alt={agent.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-2">{agent.title}</h2>
              <p className="text-white/90 text-lg">{agent.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Brief Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{agent.briefDescription}</p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {agent.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: agent.customColor }}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Description</h3>
              <p className="text-gray-600 leading-relaxed text-justify">{agent.detailedDescription}</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button 
                className="text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: agent.customColor }}
                onClick={() => {
                  onClose();
                }}
              >
                Get Started with {agent.title.split(' ')[0]} Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Individual Agent Card Component - Grid layout
const AgentCard = ({ agent, index, isVisible, onOpenModal }) => {
  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        fontFamily: 'DM Sans'
      }}
    >
      <div 
        className="relative h-full rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 group overflow-hidden bg-white flex flex-col"
        onClick={() => onOpenModal(agent)}
      >
        {/* Avatar Header - Compact with gradient overlay */}
        <div className={`relative h-32 bg-gradient-to-br ${agent.bgColor} overflow-hidden`}>
          <img
            src={agent.avatar}
            alt={agent.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95"></div>
          
          {/* Decorative AI glow effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${agent.customColor}40, transparent 70%)`
            }}
          ></div>
          
          {/* Premium AI badge */}
          {/* <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
            <span className="text-xs font-bold bg-gradient-to-r from-[#7770FF] to-[#B09CFF] bg-clip-text text-transparent">
              AI POWERED
            </span>
          </div> */}
        </div>

        {/* Content Section */}
        <div className="p-6 pb-0 relative flex flex-col flex-grow">
          {/* Title with gradient accent */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors duration-300">
              {agent.title}
            </h3>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#7770FF] to-[#B09CFF]"></div>
          </div>
          
          <p className="text-gray-600 text-sm font-medium mb-4">
            {agent.subtitle}
          </p>
          
          <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
            {agent.briefDescription}
          </p>

          {/* Features preview with premium styling */}
          <div className="flex flex-wrap gap-2 mb-6">
            {agent.features.slice(0, 2).map((feature, featureIndex) => (
              <span 
                key={featureIndex} 
                className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${agent.customColor}15`,
                  borderColor: `${agent.customColor}30`,
                  color: agent.customColor
                }}
              >
                {feature}
              </span>
            ))}
            {agent.features.length > 2 && (
              <span 
                className="px-3 py-1.5 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: `${agent.customColor}10`,
                  borderColor: `${agent.customColor}20`,
                  color: agent.customColor
                }}
              >
                +{agent.features.length - 2} more
              </span>
            )}
          </div>

          {/* Learn More Button - Fixed height footer with colored background */}
          <div 
            className="flex items-center justify-between pt-4 pb-4 px-6 -mx-6 -mb-0 mt-auto rounded-b-3xl"
            style={{ 
              backgroundColor: index % 3 === 1 ? '#B09CFF' : '#7770FF',
              minHeight: '72px'
            }}
          >
            <span className="text-white text-sm font-semibold">Learn more</span>
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md bg-white/20"
            >
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="white" 
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Premium corner accent */}
        <div 
          className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at top right, ${agent.customColor}, transparent 70%)`
          }}
        ></div>
      </div>
    </div>
  );
};

// Main Component
const ModernAgentCards = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            agentsData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 200);
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

  const handleOpenModal = (agent) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAgent(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
        style={{ fontFamily: 'DM Sans' }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center ml-0">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 backdrop-blur-sm border border-blue-200/50 px-8 py-4 rounded-full text-white text-sm font-bold mb-8 shadow-lg">
              ✨ Meet Your AI Workforce
            </div>
            <p className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Recruit enterprise-grade AI agents today - fully customizable
            </p>
          </div>

          {/* Agent Cards - Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-25">
            {agentsData.map((agent, index) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                index={index}
                isVisible={visibleCards.includes(index)}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AgentModal
        agent={selectedAgent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ModernAgentCards;
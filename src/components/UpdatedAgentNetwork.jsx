import React, { useState, useEffect, useRef } from "react";

// Enhanced Agent Data with your specific colors
const agentsData = [
  {
    id: "b2c-lead-builder",
    title: "B2C Lead Builder Agent",
    subtitle: "Consumer Lead Generation",
    briefDescription: "Turn data into opportunity with access to 800M+ verified consumer profiles worldwide. Build ideal personas and discover real people instantly.",
    detailedDescription: "Turn data into opportunity with the B2C Lead Builder Agent — your gateway to over 800 million verified consumer profiles worldwide. Build your perfect customer persona and instantly discover real people who match it. Search by name, location, role, skills, experience, or industry, and watch as the agent delivers enriched contact lists complete with verified emails and phone numbers. Whether you're scaling outreach or targeting specific individuals, simply enter a name and LinkedIn URL to uncover direct contact details in seconds. Build smarter, reach faster, and grow your customer base effortlessly — all powered by AI precision.",
   
    features: [
      "800M+ verified profiles",
      "Real-time data enrichment",
      "Global coverage",
      "Instant contact discovery",
      "LinkedIn URL lookup",
      "Verified emails & phone numbers"
    ],
    bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "b2b-lead-builder",
    title: "B2B Lead Builder Agent",
    subtitle: "Business Lead Generation",
    icon: "🏢",
    briefDescription: "Find and connect with key decision-makers using verified business data and AI-powered targeting.",
    detailedDescription: "Find and connect with the businesses that matter most using the B2B Lead Builder Agent. This intelligent tool searches verified data sources to identify companies in your target industry and location, revealing the key decision-makers behind them. It enriches profiles with accurate contact details wherever available, helping your team focus on genuine prospects — not guesswork. Build stronger pipelines, speed up outreach, and give your sales team the advantage of precision-powered targeting.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: [
      "Decision-maker identification",
      "Company intelligence",
      "Verified contact data",
      "Industry targeting",
      "Location-based search",
      "Pipeline building"
    ],
     bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "organic-lead-builder",
    title: "Organic Lead Builder Agent",
    subtitle: "Passive Lead Generation",
    icon: "🌱",
    briefDescription: "Generate leads passively with automated workflows that deliver verified prospects daily or weekly.",
    detailedDescription: "Generate leads passively with the Organic Lead Builder Agent. With our unique workflow, it builds a consistent pipeline of prospects and gathers contact details ready for outreach — all while you focus on other tasks. Simply create your target profile by name, location, role, skills, experience, or industry, and let the agent do the rest. Receive daily or weekly lead reports directly in your inbox, and watch your network grow organically — even while you sleep. Expect a minimum of 150 new leads per month, delivered effortlessly.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: [
      "Automated workflows",
      "150+ leads per month",
      "Daily/weekly reports",
      "Passive generation",
      "Email delivery",
      "Profile matching"
    ],
     bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "cold-outreach",
    title: "Cold Outreach Agent",
    subtitle: "Email & Messaging Automation",
    icon: "📧",
    briefDescription: "Automate outreach workflows across email, Telegram, and WhatsApp with built-in spam avoidance.",
    detailedDescription: "The Cold Outreach Agent takes the pipelines and projects you've built with our Lead Builder Agents — or allows you to import your own list — to build workflow campaigns and templates for effective prospect outreach. It helps create a touchpoint strategy to reach out to bulk prospects efficiently. Our parameters are designed to avoid spam filters. This agent also comes with two additional email domains, increasing your sending capacity. You can build workflows via Email, Telegram, or WhatsApp, and use preset templates we've created or design your own. Whatever touchpoint strategy works for you, this agent makes it easy to execute.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: [
      "Multi-channel outreach",
      "Spam filter avoidance",
      "Custom templates",
      "Bulk processing",
      "Two additional domains",
      "Email, Telegram & WhatsApp"
    ],
   bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "call-outreach",
    title: "Call Outreach Agent",
    subtitle: "AI Voice Outreach",
    icon: "📞",
    briefDescription: "Convert leads into conversations with voice AI that books meetings and engages 24/7.",
    detailedDescription: "The Call Outreach Agent turns every lead list into live conversations that drive results. Using advanced voice AI, it takes the pipelines you've built with our Lead Builder Agents or your own imported lists and creates dynamic calling campaigns that do the hard work for you. The agent makes intelligent outbound calls, warms up leads with natural, human-like conversations, and books meetings directly into your calendar. With built-in pacing controls and smart scheduling, it ensures every call feels personal and professional. Keep your pipeline moving, your prospects engaged, and your sales team focused on closing while your AI handles the outreach — 24/7.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: [
      "Voice AI technology",
      "Meeting booking",
      "Natural conversations",
      "24/7 operation",
      "Calendar integration",
      "Smart scheduling"
    ],
    bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "brochure-creation",
    title: "Brochure Creation Agent",
    subtitle: "Design & Content Creation",
    icon: "📄",
    briefDescription: "Create professional brochures, pitch decks, and presentations enriched with market data.",
    detailedDescription: "Bring your ideas to life with the Brochure Creation Agent — your on-demand designer that creates stunning, data-rich brochures in just minutes. From pitch decks and business plans to eBooks and branded presentations, it crafts professional materials tailored to your brand and audience. Enriched with real-time market data, local insights, and eye-catching visuals, every brochure is built to impress, inform, and convert — all without the need for a design team.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: [
      "Professional design",
      "Market data integration",
      "Brand customization",
      "Multiple formats",
      "Pitch decks & eBooks",
      "Real-time insights"
    ],
     bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "seo-blog-engine",
    title: "SEO Blog & Content Engine Agent",
    subtitle: "Content Creation & SEO",
    icon: "⚙️",
    briefDescription: "Transform ideas into SEO-optimized posts and social content tailored to your brand's voice.",
    detailedDescription: "Turn your ideas into traffic-driving content with the Blog & Content Engine Agent. It scans top-ranking blogs, analyzes what performs best, and creates SEO-optimized posts in your brand's voice to attract organic leads. You can also plan and schedule LinkedIn posts for the week ahead — with auto-upload at optimal times to boost engagement. One simple prompt, a week of content, fully automated.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: [
      "SEO optimization",
      "Brand voice matching",
      "Auto-scheduling",
      "Content analysis",
      "LinkedIn integration",
      "Weekly planning"
    ],
  bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "personal-assistant",
    title: "Personal Assistant Agent",
    subtitle: "Automation & Productivity",
    icon: "🤖",
    briefDescription: "Manage emails, meetings, reminders, and communications with an AI that works like you.",
    detailedDescription: "Your AI-powered executive assistant that manages your emails, schedules, calls, and inquiries — drafting replies in your tone, organizing your day, and sending smart reminders through Telegram so you stay focused on high-value work. The Personal Assistant Agent features a project tracking dashboard that monitors communications and meetings in real time, displaying clear status updates and progress overviews. It mirrors your tone, categorizes messages by importance, drafts replies ready for review, and can respond automatically when you're unavailable. It also handles inbound inquiries, books meetings, sends updates, and delivers personalized summaries before each call. Fully customizable across web and Telegram, it keeps your operations organized, your communication seamless, and your time free for meaningful work.",
    avatar: "https://img.freepik.com/premium-photo/3d-rendering-portrait-robot-cyborg-arm-crossed-isolated-white_493806-14337.jpg?w=360",
    features: [
      "Email management",
      "Schedule optimization",
      "Project tracking",
      "Smart reminders",
      "Telegram integration",
      "Auto-response system"
    ],
     bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  },
  {
    id: "meeting-note-taker",
    title: "Meeting Note Taker Agent",
    subtitle: "AI Meeting Assistant",
    icon: "📝",
    briefDescription: "Automatically capture, summarize, and organize meeting insights across all platforms.",
    detailedDescription: "Never miss a detail again with the Meeting Note Taker Agent — your always-on meeting companion. It joins your Zoom, Teams, or Google Meet sessions, or listens in via Telegram for in-person meetings, capturing every discussion in real time. After each meeting, it delivers a clear, structured summary with key decisions, insights, and action items, automatically syncing them to your calendar or task manager. All raw meeting recordings are securely saved to your drive, giving you full access to every conversation whenever you need it. Stay organized, save hours on note-taking, and keep every project moving forward effortlessly.",
    avatar: "https://www.cognigy.com/hs-fs/hubfs/LLM%20Bot%20-%20English%20(3).png?width=750&height=675&name=LLM%20Bot%20-%20English%20(3).png",
    features: [
      "Real-time transcription",
      "Auto-summarization",
      "Action item extraction",
      "Multi-platform support",
      "Cloud storage",
      "Calendar sync"
    ],
     bgColor: "from-blue-500 to-indigo-200",
    iconBg: "bg-[#2F7CFF]",
    customColor: "#2F7CFF"
  }
];

// Individual Agent Card Component - Full details displayed
// Individual Agent Card Component - Enhanced Professional Design
const AgentCard = ({ agent, index, isVisible }) => {
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
      <div className="relative rounded-[32px] shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white border border-gray-100">
        {/* Premium top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ 
            background: `linear-gradient(90deg, ${agent.customColor}, ${agent.customColor}80)` 
          }}
        ></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left Content Section - 3 columns */}
          <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/30">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: agent.customColor }}
                ></div>
                <span 
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: agent.customColor }}
                >
                  AI-Powered Agent
                </span>
              </div>
              
              {/* Title with gradient underline */}
              <div className="mb-6">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.1]">
                  {agent.title}
                </h3>
                <div 
                  className="w-24 h-1.5 rounded-full"
                  style={{ backgroundColor: agent.customColor }}
                ></div>
              </div>
              
              <p className="text-gray-500 text-lg font-medium mb-8 tracking-wide">
                {agent.subtitle}
              </p>
              
              {/* Brief Description with enhanced styling */}
              <div className="mb-10 p-6 bg-white rounded-2xl border-l-4 shadow-sm" style={{ borderLeftColor: agent.customColor }}>
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  {agent.briefDescription}
                </p>
              </div>
              
              {/* Feature Grid - Enhanced */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6" style={{ color: agent.customColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {agent.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100"
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <div 
                          className="w-6 h-6 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                          style={{ backgroundColor: `${agent.customColor}15` }}
                        >
                          <svg className="w-3.5 h-3.5" style={{ color: agent.customColor }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* CTA Button - Enhanced */}
            <div className="flex items-center gap-4 flex-wrap">
              <button 
                className="group relative text-white px-10 py-5 rounded-2xl font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: agent.customColor }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              {/* <button className="text-gray-600 font-semibold text-base hover:text-gray-900 transition-colors duration-300 flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Right Image Section - 2 columns */}
          <div 
            className={`lg:col-span-2 relative bg-gradient-to-br ${agent.bgColor} flex items-end justify-center overflow-hidden min-h-[500px] lg:min-h-[700px]`}
          >
            {/* Geometric background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-3xl rotate-12"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/30 rounded-full"></div>
            </div>
            
            {/* Large decorative circle */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-3xl"></div>
            
            {/* Agent Image */}
            {/* <img
              src={agent.avatar}
              alt={agent.title}
              className="relative z-10 h-[450px] lg:h-[650px] w-auto object-contain drop-shadow-2xl"
            /> */}
            
            {/* Enhanced glow effect */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(circle at 50% 80%, ${agent.customColor}80, transparent 50%)`
              }}
            ></div>
            
            {/* Floating stats badge */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: agent.customColor }}
                ></div>
                <span className="text-sm font-bold text-gray-800">Active Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ModernAgentCards = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }
            });
          },
          { 
            threshold: 0.2,
            rootMargin: '0px'
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      style={{ fontFamily: 'DM Sans' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Recruit enterprise-grade AI agents today<br />fully customizable
          </p>
        </div>

        {/* Agent Cards - Single column full details */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {agentsData.map((agent, index) => (
            <div 
              key={agent.id}
              ref={el => cardRefs.current[index] = el}
            >
              <AgentCard
                agent={agent}
                index={index}
                isVisible={visibleCards.includes(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernAgentCards;
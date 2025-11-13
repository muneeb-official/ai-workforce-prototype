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
    features: [
      "800M+ verified profiles",
      "Real-time data enrichment",
      "Global coverage",
      "Instant contact discovery",
      "LinkedIn URL lookup",
      "Verified emails & phone numbers"
    ],
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
    features: [
      "Decision-maker identification",
      "Company intelligence",
      "Verified contact data",
      "Industry targeting",
      "Location-based search",
      "Pipeline building"
    ],
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
    features: [
      "Automated workflows",
      "150+ leads per month",
      "Daily/weekly reports",
      "Passive generation",
      "Email delivery",
      "Profile matching"
    ],
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
    features: [
      "Multi-channel outreach",
      "Spam filter avoidance",
      "Custom templates",
      "Bulk processing",
      "Two additional domains",
      "Email, Telegram & WhatsApp"
    ],
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
    features: [
      "Voice AI technology",
      "Meeting booking",
      "Natural conversations",
      "24/7 operation",
      "Calendar integration",
      "Smart scheduling"
    ],
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
    features: [
      "Professional design",
      "Market data integration",
      "Brand customization",
      "Multiple formats",
      "Pitch decks & eBooks",
      "Real-time insights"
    ],
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
    features: [
      "SEO optimization",
      "Brand voice matching",
      "Auto-scheduling",
      "Content analysis",
      "LinkedIn integration",
      "Weekly planning"
    ],
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
    features: [
      "Email management",
      "Schedule optimization",
      "Project tracking",
      "Smart reminders",
      "Telegram integration",
      "Auto-response system"
    ],
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
    features: [
      "Real-time transcription",
      "Auto-summarization",
      "Action item extraction",
      "Multi-platform support",
      "Cloud storage",
      "Calendar sync"
    ],
    bgColor: "from-[#7770FF] to-[#E6CBFF]",
    iconBg: "bg-[#7770FF]",
    customColor: "#7770FF"
  }
];

// Individual Agent Card Component - Exact screenshot match
const AgentCard = ({ agent, index, isVisible }) => {
  // Create feature boxes from the features array
  const featureBoxes = [
    { title: agent.features[0]?.split(' ').slice(0, 2).join(' ') || "No cold", subtitle: agent.features[0]?.split(' ').slice(2).join(' ') || "leads" },
    { title: agent.features[1]?.split(' ').slice(0, 2).join(' ') || "Speed to", subtitle: agent.features[1]?.split(' ').slice(2).join(' ') || "lead" },
    { title: agent.features[2]?.split(' ').slice(0, 3).join(' ') || "Sell more, less", subtitle: agent.features[2]?.split(' ').slice(3).join(' ') || "admin" },
    { title: agent.features[3]?.split(' ').slice(0, 2).join(' ') || "Custom", subtitle: agent.features[3]?.split(' ').slice(2).join(' ') || "workflows" },
    { title: agent.features[4]?.split(' ').slice(0, 2).join(' ') || "Seamless", subtitle: agent.features[4]?.split(' ').slice(2).join(' ') || "integration" },
  ];

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
      <div className="relative rounded-3xl overflow-hidden bg-[#EEEEF0] max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Content Section */}
          <div className="p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {agent.title}
              </h3>
              
              {/* Description lines */}
              <div className="space-y-4 mb-8">
                <p className="text-gray-700 text-base leading-relaxed">
                  Engages leads instantly. Drives pipeline 24/7
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Adapts to any sales motion. Fits any playbook
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Automates research, follow-ups, and CRM updates—effortlessly
                </p>
              </div>
              
              {/* Feature Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {featureBoxes.map((feature, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {feature.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Read More Link */}
            <div className="mt-4">
              <button className="inline-flex items-center gap-2 text-gray-900 font-bold text-base hover:gap-3 transition-all duration-300 group">
                <span>Read More</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div 
            className={`relative bg-gradient-to-br ${agent.bgColor} flex items-end justify-center overflow-hidden min-h-[450px] lg:min-h-[550px] rounded-r-3xl`}
          >
            {/* White circle at bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-32 h-32 bg-white/20 rounded-full"></div>
            
            {/* Agent Image */}
            {/* <img
              src={agent.avatar}
              alt={agent.title}
              className="relative z-10 h-[400px] lg:h-[500px] w-auto object-contain"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
            /> */}
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
          <div className="inline-block backdrop-blur-sm px-8 py-4 rounded-full text-blue-700 text-[32px] font-bold mb-8">
            Meet Your AI Workforce
          </div>
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
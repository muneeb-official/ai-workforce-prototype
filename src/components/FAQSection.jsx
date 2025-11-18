import React, { useState, useEffect, useRef } from 'react';

const CategorizedFAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('platform');
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'platform', label: 'Platform & AI Agents', color: 'bg-gradient-to-br from-blue-500 to-indigo-600' },
    { id: 'benefits', label: 'Benefits & Comparisons', color: 'bg-gradient-to-br from-blue-500 to-indigo-600' },
    { id: 'getting-started', label: 'Getting Started & Integration', color: 'bg-gradient-to-br from-blue-500 to-indigo-600' }
  ];

  const faqsByCategory = {
    platform: [
      {
        question: "What is AI Workforce and how does it work?",
        answer: "AI Workforce is a suite of intelligent, custom-trained AI agents that act as your digital team working 24/7 to handle sales, marketing, and administrative tasks. Each agent is designed to perform a specific role, from building and nurturing leads to creating content, managing outreach, organizing schedules, and summarizing meetings. These agents integrate seamlessly with your existing systems such as CRM, email, LinkedIn, and calendar, automating repetitive processes and keeping your business running efficiently. By taking care of repetitive bulk work, these AI agents free up your human team to focus on strategy, closing deals, and other high-value activities."
      },
      {
        question: "What can the AI Sales Agent do?",
        answer: "The AI Sales Agent is your complete digital sales team prospecting, nurturing, and engaging leads 24/7. It can identify and enrich both consumer and business leads, searching through over 800 million verified profiles to build accurate contact lists based on your ideal customer criteria. It helps you generate new leads organically, manage multi-channel outreach via email, WhatsApp, or Telegram, and even make AI-driven calls that warm up prospects and book meetings directly into your calendar."
      },
      {
        question: "What can the AI Marketing Agent do?",
        answer: "The AI Marketing Agent is your on-demand creative team building professional, branded content that drives visibility, engagement, and growth. It includes the Brochure Creation Agent, which designs stunning brochures, pitch decks, business plans, and eBooks in minutes enriched with market insights, visuals, and your brand's style. The SEO Blog & Content Engine Agent transforms simple ideas or keywords into SEO-optimized blogs, LinkedIn articles, and social posts that boost traffic and attract organic leads."
      },
      {
        question: "What can the AI Support/Personal Assistant Agent do?",
        answer: "The AI Support and Personal Assistant Agents act as your always-on administrative and operations team managing communication, organization, and follow-up. The Personal Assistant Agent handles your emails, schedules, calls, and inquiries, drafts replies in your tone, sends reminders through Telegram, and keeps your day organized. The Meeting Note Taker & Summarizer Agent joins your Zoom, Teams, or Google Meet sessions to record, transcribe, and summarize every discussion, automatically syncing key points and action items to your calendar."
      }
    ],
    benefits: [
      {
        question: "Who is AI Workforce for?",
        answer: "AI Workforce is built for anyone who wants to get more done without the stress of doing it all manually. Solo users gain a full-time digital assistant that boosts productivity, while teams benefit from smarter automation and seamless coordination. Our tools are designed for 'one-person teams' and hands-on leaders who wear multiple hats — from converting leads and managing outreach to creating SEO content, handling emails, and recording meetings."
      },
      {
        question: "How is AI Workforce different from competitors like Reply.io and Alta?",
        answer: "AI Workforce is more than just sales automation — it's a fully custom-coded ecosystem of specialized AI agents built to run your sales, marketing, and day-to-day operations 24/7. Instead of a single-purpose assistant, you get a connected team with strong UK and US data accuracy, seamless integration, and always-on automation. Each agent is 100% custom-built to your business, trained on your workflows, preferences, and tone, with a dedicated Account Manager for support."
      },
      {
        question: "Can I train or customize the AI agents for my business?",
        answer: "Yes. You can upload documents, website links, and other materials to train the AI to understand your business. You can also set preferences for tone, timing, behavior, and approvals, ensuring every response sounds just like you. The platform continuously adapts to your workflows and improves over time through your feedback."
      }
    ],
    'getting-started': [
      {
        question: "Do I need technical skills to use AI Workforce?",
        answer: "No technical expertise is needed. Once you sign up, you'll be paired with a dedicated Account Manager who will guide you through an onboarding session and help tailor your AI workflows to fit your business needs from day one. The platform is designed to be user-friendly for business owners and professionals of all technical backgrounds."
      },
      {
        question: "Does AI Workforce integrate with my CRM, calendar, LinkedIn, and other tools?",
        answer: "Yes. AI Workforce integrates seamlessly with popular tools like CRMs (Salesforce, HubSpot, Zoho), calendars (Google, Outlook), LinkedIn, social platforms, voice APIs, and data enrichment services allowing the agents to work effortlessly within your existing workflow. If your CRM isn't listed, simply reach out to our team, and we'll work with you to get it integrated."
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Reset visible items when category changes
  useEffect(() => {
    setVisibleItems([]);
    setOpenIndex(null);
    const currentFaqs = faqsByCategory[activeCategory];
    currentFaqs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 150);
    });
  }, [activeCategory]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentFaqs = faqsByCategory[activeCategory];
            currentFaqs.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
      style={{ fontFamily: 'DM Sans' }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="inline-block px-6 py-3 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            FAQ's
          </div>
        <div className="text-center mb-16">
          <p className="text-5xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about transforming your business with AI agents
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-bold text-base transition-all duration-500 transform ${
                activeCategory === category.id
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-600 scale-105 shadow-2xl text-white'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg hover:scale-102'
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? category.color : undefined,
                border: activeCategory === category.id ? 'none' : '2px solid #e5e7eb'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-20">
          {faqsByCategory[activeCategory].map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-500 ease-in-out hover:scale-105 overflow-hidden ${
                  openIndex === index
                    ? 'shadow-2xl scale-[1.02]'
                    : hoveredIndex === index
                    ? 'shadow-xl scale-[1.01]'
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                style={{
                  borderColor: openIndex === index 
                    ? categories.find(c => c.id === activeCategory).color 
                    : hoveredIndex === index 
                    ? categories.find(c => c.id === activeCategory).color + '50'
                    : undefined
                }}
              >
                <button
                  className={`w-full px-8 py-6 text-left flex items-center justify-between transition-all duration-300 ${
                    hoveredIndex === index || openIndex === index
                      ? 'bg-gradient-to-r from-blue-300 to-indigo-400'
                      : 'hover:bg-blue-300'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-6 flex-1">
                    {/* Question Number Badge */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                        openIndex === index
                          ? 'scale-110 text-white'
                          : hoveredIndex === index
                          ? 'scale-105 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                      style={{
                        backgroundColor: openIndex === index || hoveredIndex === index 
                          ? categories.find(c => c.id === activeCategory).color 
                          : undefined
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1">
                      {/* Question */}
                      <span
                        className={`text-lg sm:text-xl font-bold pr-4 transition-all duration-300 ${
                          openIndex === index || hoveredIndex === index
                            ? 'text-gray-900'
                            : 'text-gray-800'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Arrow */}
                  <div
                    className={`ml-4 p-3 rounded-xl transition-all duration-500 ${
                      openIndex === index
                        ? 'text-white rotate-180 scale-110'
                        : hoveredIndex === index
                        ? 'text-white  scale-105'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                    style={{
                      backgroundColor: openIndex === index || hoveredIndex === index 
                        ? categories.find(c => c.id === activeCategory).color 
                        : undefined
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Enhanced Answer Section */}
                <div
                  className={`overflow-hidden text-left transition-all duration-500 ease-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    {/* Animated Divider */}
                    <div 
                      className="w-full h-1 rounded-full mb-6"
                      style={{
                        background: `linear-gradient(to right, transparent, ${categories.find(c => c.id === activeCategory).color}, transparent)`
                      }}
                    ></div>

                    {/* Answer Text */}
                    <div
                      className={`transition-all duration-700 ${
                        openIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: openIndex === index ? '200ms' : '0ms' }}
                    >
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {faq.answer}
                      </p>

                      {/* Additional Action Button */}
                      <div className="mt-6 flex items-center gap-4">
                        <button
                          className="font-semibold text-sm flex items-center gap-2 group/btn px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                          style={{
                            color: categories.find(c => c.id === activeCategory).color,
                            backgroundColor: categories.find(c => c.id === activeCategory).color + '15'
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        
      </div>
    </section>
  );
};

export default CategorizedFAQSection;
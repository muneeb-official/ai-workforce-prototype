import React, { useState, useEffect, useRef } from 'react';

const EnhancedFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "What is AI Workforce and how does it work?",
      answer: "AI Workforce is a suite of intelligent, custom-trained AI agents that act as your digital team working 24/7 to handle sales, marketing, and administrative tasks. Each agent is designed to perform a specific role, from building and nurturing leads to creating content, managing outreach, organizing schedules, and summarizing meetings. These agents integrate seamlessly with your existing systems such as CRM, email, LinkedIn, and calendar, automating repetitive processes and keeping your business running efficiently. By taking care of repetitive bulk work, these AI agents free up your human team to focus on strategy, closing deals, and other high-value activities.",
      category: "Platform"
    },
    {
      question: "What can the AI Sales Agent do?",
      answer: "The AI Sales Agent is your complete digital sales team prospecting, nurturing, and engaging leads 24/7. It can identify and enrich both consumer and business leads, searching through over 800 million verified profiles to build accurate contact lists based on your ideal customer criteria. It helps you generate new leads organically, manage multi-channel outreach via email, WhatsApp, or Telegram, and even make AI-driven calls that warm up prospects and book meetings directly into your calendar.",
      category: "Sales"
    },
    {
      question: "What can the AI Marketing Agent do?",
      answer: "The AI Marketing Agent is your on-demand creative team building professional, branded content that drives visibility, engagement, and growth. It includes the Brochure Creation Agent, which designs stunning brochures, pitch decks, business plans, and eBooks in minutes enriched with market insights, visuals, and your brand's style. The SEO Blog & Content Engine Agent transforms simple ideas or keywords into SEO-optimized blogs, LinkedIn articles, and social posts that boost traffic and attract organic leads.",
      category: "Marketing"
    },
    {
      question: "What can the AI Support/Personal Assistant Agent do?",
      answer: "The AI Support and Personal Assistant Agents act as your always-on administrative and operations team managing communication, organization, and follow-up. The Personal Assistant Agent handles your emails, schedules, calls, and inquiries, drafts replies in your tone, sends reminders through Telegram, and keeps your day organized. The Meeting Note Taker & Summarizer Agent joins your Zoom, Teams, or Google Meet sessions to record, transcribe, and summarize every discussion, automatically syncing key points and action items to your calendar.",
      category: "Support"
    },
    {
      question: "Do I need technical skills to use AI Workforce?",
      answer: "No technical expertise is needed. Once you sign up, you'll be paired with a dedicated Account Manager who will guide you through an onboarding session and help tailor your AI workflows to fit your business needs from day one. The platform is designed to be user-friendly for business owners and professionals of all technical backgrounds.",
      category: "Getting Started"
    },
    {
      question: "Does AI Workforce integrate with my CRM, calendar, LinkedIn, and other tools?",
      answer: "Yes. AI Workforce integrates seamlessly with popular tools like CRMs (Salesforce, HubSpot, Zoho), calendars (Google, Outlook), LinkedIn, social platforms, voice APIs, and data enrichment services allowing the agents to work effortlessly within your existing workflow. If your CRM isn't listed, simply reach out to our team, and we'll work with you to get it integrated.",
      category: "Integration"
    },
    {
      question: "Can I train or customize the AI agents for my business?",
      answer: "Yes. You can upload documents, website links, and other materials to train the AI to understand your business. You can also set preferences for tone, timing, behavior, and approvals, ensuring every response sounds just like you. The platform continuously adapts to your workflows and improves over time through your feedback.",
      category: "Customization"
    },
    {
      question: "Who is AI Workforce for?",
      answer: "AI Workforce is built for anyone who wants to get more done without the stress of doing it all manually. Solo users gain a full-time digital assistant that boosts productivity, while teams benefit from smarter automation and seamless coordination. Our tools are designed for 'one-person teams' and hands-on leaders who wear multiple hats — from converting leads and managing outreach to creating SEO content, handling emails, and recording meetings.",
      category: "Target Users"
    },
    {
      question: "How is AI Workforce different from competitors like Reply.io and Alta?",
      answer: "AI Workforce is more than just sales automation — it's a fully custom-coded ecosystem of specialized AI agents built to run your sales, marketing, and day-to-day operations 24/7. Instead of a single-purpose assistant, you get a connected team with strong UK and US data accuracy, seamless integration, and always-on automation. Each agent is 100% custom-built to your business, trained on your workflows, preferences, and tone, with a dedicated Account Manager for support.",
      category: "Comparison"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            faqs.forEach((_, index) => {
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Section Header */}
        <div className=" mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 backdrop-blur-sm border border-blue-200/50 px-8 py-4 rounded-full text-blue-700 text-sm font-bold mb-8 shadow-lg">
            💡 Got Questions? We Have Answers
          </div>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Workforce — <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about transforming your business with AI agents
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="space-y-6 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out ${visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-500 overflow-hidden ${openIndex === index
                    ? 'border-blue-300 shadow-2xl shadow-blue-500/20 scale-[1.02]'
                    : hoveredIndex === index
                      ? 'border-blue-200 shadow-xl shadow-blue-500/10 scale-[1.01]'
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
              >
                <button
                  className={`w-full px-8 py-8 text-left flex items-center justify-between transition-all duration-300 ${hoveredIndex === index || openIndex === index
                      ? 'bg-gradient-to-r from-blue-50/50 to-indigo-50/50'
                      : 'hover:bg-gray-50/50'
                    }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Animated Icon */}
                    <div
                      className={`text-3xl transition-all duration-500 ${openIndex === index
                          ? 'scale-110 rotate-12'
                          : hoveredIndex === index
                            ? 'scale-105'
                            : 'scale-100'
                        }`}
                    >
                      {faq.icon}
                    </div>

                    <div className="flex-1">
                      {/* Category Badge */}
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${openIndex === index || hoveredIndex === index
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-blue-100 text-gray-600'
                            }`}
                        >
                          {faq.category}
                        </span>
                      </div>

                      {/* Question */}
                      <span
                        className={`text-xl font-bold pr-4 transition-all duration-300 ${openIndex === index || hoveredIndex === index
                            ? 'text-blue-900'
                            : 'text-gray-900'
                          }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Arrow */}
                  <div
                    className={`ml-4 p-2 rounded-full transition-all duration-500 ${openIndex === index
                        ? 'bg-blue-500 text-white rotate-180 scale-110'
                        : hoveredIndex === index
                          ? 'bg-blue-100 text-blue-600 scale-105'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Enhanced Answer Section */}
                <div className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-8 pb-8">
                    {/* Animated Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6 opacity-50"></div>

                    {/* Answer Text with Typewriter Effect */}
                    <div
                      className={`transition-all duration-700 ${openIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                      style={{ transitionDelay: openIndex === index ? '200ms' : '0ms' }}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>

                      {/* Additional Action Button */}
                      <div className="mt-6 flex items-center gap-4">
                        <button
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 group/btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add your action here
                          }}
                        >
                          <span>Learn More</span>
                          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
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
        <div
          className={`text-center transition-all duration-1000 ${visibleItems.length > 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="relative bg-gradient-to-br from-[#5549FF] via-[#889CFF] to-[#5549FF] rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-blue-100 text-sm font-semibold mb-6">
                🚀 Ready to Get Started?
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transform Your Business Today
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI Workforce to scale their operations and drive unprecedented growth
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="flex items-center gap-3">
                    Get Started Today
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <button className="text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFAQSection;
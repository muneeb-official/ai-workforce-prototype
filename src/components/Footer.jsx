import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';
const ProfessionalFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [email, setEmail] = useState('');
  const footerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', action: () => scrollToSection('world-map-section') },
      { name: 'Our Mission', action: () => scrollToSection('mission') },
      { name: 'Careers', action: () => scrollToSection('careers') },
      { name: 'Blog', action: () => scrollToSection('blog') }
    ],
    services: [
      { name: 'AI Sales Agent', action: () => scrollToSection('agents') },
      { name: 'AI Marketing', action: () => scrollToSection('agents') },
      { name: 'AI Assistant', action: () => scrollToSection('agents') },
      { name: 'Custom Solutions', action: () => scrollToSection('contact') }
    ],
    support: [
      { name: 'Help Center', action: () => scrollToSection('faq') },
      { name: 'Documentation', action: () => scrollToSection('docs') },
      { name: 'Contact Support', action: () => scrollToSection('contact') },
      { name: 'API Reference', action: () => scrollToSection('api') }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR Compliance', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      color: '#7770FF',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      color: '#B09CFF',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      color: '#5549FF',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      color: '#7770FF',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M19.615 3.184A2.997 2.997 0 0017.5 2.26C15.38 2 12 2 12 2s-3.38 0-5.5.26a2.997 2.997 0 00-2.115.924C3.34 3.64 3 5.257 3 8.003v3.994c0 2.746.34 4.363 1.385 5.52.58.613 1.357.943 2.115.923C8.62 18 12 18 12 18s3.38 0 5.5-.26c.758.02 1.535-.31 2.115-.923C20.66 16.36 21 14.743 21 11.997V8.003c0-2.746-.34-4.363-1.385-5.52zM10 14.5v-7l6 3.5-6 3.5z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Countries' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = () => {
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden"
      style={{ fontFamily: 'DM Sans' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-[#7770FF]/5 to-[#B09CFF]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-[#B09CFF]/5 to-[#7770FF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#7770FF]/3 to-[#B09CFF]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div
          className={`bg-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #7770FF 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left side - CTA */}
              <div className="text-gray-900">
                <div className="inline-flex items-center bg-gradient-to-r from-[#7770FF]/10 to-[#B09CFF]/10 backdrop-blur-sm px-6 py-3 rounded-full text-[#7770FF] text-sm font-semibold mb-6 border border-[#7770FF]/20">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 animate-pulse"></div>
                  Stay Ahead of the Curve
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gray-900">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Get exclusive insights, AI workforce updates, and industry trends delivered straight to your inbox. Join 10,000+ innovators already transforming their operations.
                </p>

                {/* Trust indicators */}
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#7770FF]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    </div>
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#7770FF]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    </div>
                    <span>Unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#7770FF]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    </div>
                    <span>Weekly insights</span>
                  </div>
                </div>
              </div>

              {/* Right side - Newsletter signup */}
              <div className="relative">
                <div className="relative group mb-8">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-8 py-5 rounded-2xl text-gray-900 bg-white backdrop-blur-sm border-2 border-white/20 focus:border-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 text-lg"
                    />
                    <button
                      onClick={handleSubscribe}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br from-[#7770FF]/10 to-[#B09CFF]/10 backdrop-blur-sm rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-500 hover:shadow-lg border border-[#7770FF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      style={{
                        transitionDelay: `${index * 100 + 400}ms`,
                        animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="text-gray-900 font-bold text-2xl mb-1">{stat.number}</div>
                      <div className="text-gray-600 text-xs font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

            {/* Logo & Description */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                
                <img
                  src={logo}
                  alt="AI workforce Logo"
                  className="group-hover:opacity-100 transition-opacity duration-300"
                />
                </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  {
                    label: 'Email',
                    text: 'team@aiworkforce.com',
                    href: 'mailto:team@aiworkforce.com',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    label: 'Address',
                    text: '71-75 Shelton Street, London',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    label: 'Phone',
                    text: '+44 20 3372 4223',
                    href: 'tel:+442033724223',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7770FF]/10 to-[#B09CFF]/10 flex items-center justify-center text-[#7770FF] group-hover:shadow-lg transition-all duration-300 flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                        {contact.label}
                      </div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-gray-800 hover:text-[#7770FF] transition-colors duration-300 font-medium text-sm"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-gray-800 font-medium text-sm">{contact.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div
                key={category}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(categoryIndex + 2) * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6 capitalize relative inline-block">
                  {category === 'company' ? 'Company' :
                    category === 'services' ? 'Services' :
                      category === 'support' ? 'Support' : 'Legal'}
                  <div
                    className="absolute -bottom-2 left-0 w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                  ></div>
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      {link.action ? (
                        <button
                          onClick={link.action}
                          onMouseEnter={() => setHoveredLink(`${category}-${index}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="text-gray-600 hover:text-[#7770FF] transition-all duration-300 text-base font-medium relative group"
                        >
                          <span className={`transform inline-block ${hoveredLink === `${category}-${index}` ? 'translate-x-2' : ''} transition-transform duration-300`}>
                            {link.name}
                          </span>
                          <span className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 ${hoveredLink === `${category}-${index}` ? 'opacity-100' : ''} transition-opacity duration-300`}></span>
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          onMouseEnter={() => setHoveredLink(`${category}-${index}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="text-gray-600 hover:text-[#7770FF] transition-all duration-300 text-base font-medium relative group"
                        >
                          <span className={`transform inline-block ${hoveredLink === `${category}-${index}` ? 'translate-x-2' : ''} transition-transform duration-300`}>
                            {link.name}
                          </span>
                          <span className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7770FF] opacity-0 ${hoveredLink === `${category}-${index}` ? 'opacity-100' : ''} transition-opacity duration-300`}></span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-gray-200/50 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

              {/* Copyright */}
              <div className="text-gray-600 text-center md:text-left">
                <p className="font-semibold text-gray-800 text-base">
                  &copy; 2025 AI Workforce Ltd. All rights reserved.
                </p>
                <p className="text-sm mt-1 text-gray-500">
                  Transforming businesses with intelligent automation worldwide.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-600 font-semibold text-sm">Follow us:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-2xl transition-all duration-300 group overflow-hidden transform hover:scale-110"
                      aria-label={social.name}
                    >
                      {/* Animated background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Social icon */}
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                        <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                          {social.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional bottom text */}
            <div className="mt-6 pt-6 border-t border-gray-200/50 text-center">
              <p className="text-sm text-gray-500">
                Made
                by AI Workforce Team • Powered by Advanced AI Technology
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default ProfessionalFooter;
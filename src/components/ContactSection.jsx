// ContactSection.jsx
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true);
      setFormData({
        firstName: '',
        lastName: '',
        location: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-400 to-indigo-600 relative overflow-hidden">

       

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">

            {/* First Content */}
            <div className="text-white">
              <h2
                className="text-6xl sm:text-5xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: 'DM Sans',
                  fontSize: 'clamp(3.7rem, 5vw, 3rem)'
                }}
              >
                Drive business growth <span className="text-yellow-400">10x</span>
                <br /> with AI Workforce
              </h2>
              <p
                className="text-xl text-blue-100 mb-8 leading-relaxed"
                style={{ fontFamily: 'DM Sans' }}
              >
                Contact Us Now
              </p>

              {/* Contact Information */}
              <div className="space-y-6 items-center w-100 m-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <p className="text-blue-100 text-sm font-medium" style={{ fontFamily: 'DM Sans' }}>
                      Email
                    </p>
                    <p className="text-white font-semibold" style={{ fontFamily: 'DM Sans' }}>
                      team@aiworkforce.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <p className="text-blue-100 text-sm" style={{ fontFamily: 'DM Sans' }}>Address</p>
                    <p className="text-white font-semibold" style={{ fontFamily: 'DM Sans' }}>71- 75 Shelton Street, London, WC2H9JQ</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <p className="text-blue-100 text-sm" style={{ fontFamily: 'DM Sans' }}>Phone</p>
                    <p className="text-white font-semibold" style={{ fontFamily: 'DM Sans' }}>02033724223</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-180 m-auto h-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Optional"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      'Contact Us Now'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl transform animate-scale-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'DM Sans' }}
            >
              Message Sent Successfully!
            </h3>
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: 'DM Sans' }}
            >
              Thank you for contacting AI Workforce. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={closePopup}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: 'DM Sans' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ContactSection;
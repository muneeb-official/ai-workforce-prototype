// ContactSection.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    location: false,
    email: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const locations = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Singapore",
    "United Arab Emirates",
    "India",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (value) {
      setTouched((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const validateForm = () => {
    const newTouched = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      location: !formData.location,
      email: !formData.email,
    };
    setTouched(newTouched);
    return !Object.values(newTouched).some((v) => v);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError("");

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      location: formData.location,
      email: formData.email,
      message: formData.message || "No message provided",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowPopup(true);
      setFormData({
        firstName: "",
        lastName: "",
        location: "",
        email: "",
        message: "",
      });
      setTouched({
        firstName: false,
        lastName: false,
        location: false,
        email: false,
      });
    } catch (err) {
      console.error("Email sending failed:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const getFieldName = (field) => {
    const names = {
      firstName: "first name",
      lastName: "last name",
      location: "location",
      email: "email",
    };
    return names[field];
  };

  const inputClassName = (field) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent bg-white ${
      touched[field]
        ? "border-red-500 focus:ring-red-300"
        : "border-gray-200 focus:ring-blue-300"
    }`;

  const labelClassName = (field) =>
    `block text-sm font-semibold mb-2 ${
      touched[field] ? "text-red-500" : "text-gray-900"
    }`;

  return (
    <>
      <section
        id="contact"
        className="py-12 md:py-20 bg-[#4B5DDB] relative overflow-hidden"
        style={{ fontFamily: "DM Sans" }}
      >
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-38">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white text-left lg:pl-8">
              {/* Contact Us Badge */}
              <div className="inline-block px-5 py-3 rounded drop-shadow-white bg-white text-gray-700 text-sm font-medium mb-6">
                Contact Us
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Drive business growth 10x with AI Workforce
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10">
                Contact Us Now
              </p>

              {/* Contact Information */}
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-blue-200 text-sm">Email</p>
                    <p className="text-white text-base font-medium">
                      team@aiworkforce.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-blue-200 text-sm">Address</p>
                    <p className="text-white text-base font-medium">
                      71- 75 Shelton Street, London, WC2H9JQ
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-blue-200 text-sm">Phone</p>
                    <p className="text-white text-base font-medium">
                      02033724223
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-left rounded-2xl p-8 md:p-10 w-full max-w-xl mx-auto shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Get early access.
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Let's see how can we help your business grow.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClassName("firstName")}>
                      First Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your First Name"
                      className={inputClassName("firstName")}
                    />
                    {touched.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        Please enter {getFieldName("firstName")}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClassName("lastName")}>
                      Last Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your Last Name"
                      className={inputClassName("lastName")}
                    />
                    {touched.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        Please enter {getFieldName("lastName")}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClassName("location")}>
                    Location <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClassName(
                        "location"
                      )} appearance-none cursor-pointer pr-10 ${
                        !formData.location ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      <option value="" disabled>
                        Select your Location
                      </option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc} className="text-gray-900">
                          {loc}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {touched.location && (
                    <p className="text-red-500 text-xs mt-1">
                      Please select your {getFieldName("location")}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClassName("email")}>
                    Email <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Email"
                    className={inputClassName("email")}
                  />
                  {touched.email && (
                    <p className="text-red-500 text-xs mt-1">
                      Please enter {getFieldName("email")}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your Message"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none bg-white"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-4 rounded-full transition-all duration-300 flex items-center justify-center text-base shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl animate-scale-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "DM Sans" }}
            >
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: "DM Sans" }}>
              Thank you for contacting AI Workforce. We'll get back to you
              within 24 hours.
            </p>
            <button
              onClick={closePopup}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: "DM Sans" }}
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

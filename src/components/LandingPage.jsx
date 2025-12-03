// LandingPage.jsx - Main Landing Page Component
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Hero from "../components/Hero";
import UpdatedAgentNetwork from "./UpdatedAgentNetwork";
import WorldMapSection from "../components/WorldMapSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import OtherOfferings from "../components/Offerings";

const LandingPage = () => {
  const location = useLocation();

  // HANDLE HASH-BASED SCROLL (e.g., #contact)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // scroll instantly
        element.scrollIntoView({ behavior: "auto" });

        // REMOVE hash so refresh doesn't scroll again
        window.history.replaceState(null, "", "/");
      }
    }
  }, [location]);

  return (
    <div className="h-screen section">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Agent Network Section */}
      <UpdatedAgentNetwork />

      {/* Other offerings Section */}
      <OtherOfferings />

      {/* World Map & Statistics Section */}
      <WorldMapSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

// LandingPage.jsx - Main Landing Page Component
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UpdatedAgentNetwork from './UpdatedAgentNetwork';
import WorldMapSection from '../components/WorldMapSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import OtherOfferings from '../components/Offerings';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#5549FF]/40 via-white to-[#338EFD]/40">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Agent Network Section */}
      <UpdatedAgentNetwork />
      
      {/*Other offerings Section */}
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
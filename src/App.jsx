// App.jsx - Complete Landing Page Implementation
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Cookies from "./components/Cookies";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router";
import BackToTop from "./components/BackToTop/BackToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactSection from "./pages/ContactSection ";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/Privacy";
import CoachingDisclaimer from "./pages/Disclaimer";
import TermsAndConditions from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop.jsx";





function App() {
  return (
    <main>
      <BackToTop />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection  />} />
        <Route path="/book-session" element={<Booking />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<CoachingDisclaimer />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </main>
  );
}

export default App;

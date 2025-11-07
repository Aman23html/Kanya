import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

// Individual Project Pages
import YoungGirlsEmpowerment from "./pages/Project/YoungGirl";
import TribalGirlChildrenCare from "./pages/Project/TribalGirl";
import FoodClothingShelterMedicalHelp from "./pages/Project/FoodClothing";
import EnvironmentProtection from "./pages/Project/Environment";
import LegalHelp from "./pages/Project/Legal";
import FinancialIndependence from "./pages/Project/Financial";
import VolunteerEngagementProgram from "./pages/Project/Volunteer";
import MothersWellnessCare from "./pages/Project/Mother";

import "./App.css";

// 🌀 Scroll to top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F9F9] text-gray-800">
      <Navbar />
      <ScrollToTop />

      {/* Main content area */}
      <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          {/* 🌍 Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />

          {/* 🌿 Project Pages */}
          <Route path="/projects/young-girls-empowerment" element={<YoungGirlsEmpowerment />} />
          <Route path="/projects/tribal-girl-children-care" element={<TribalGirlChildrenCare />} />
          <Route path="/projects/food-clothing-shelter-medical-help" element={<FoodClothingShelterMedicalHelp />} />
          <Route path="/projects/environment-protection" element={<EnvironmentProtection />} />
          <Route path="/projects/legal-help" element={<LegalHelp />} />
          <Route path="/projects/financial-independence" element={<FinancialIndependence />} />
          <Route path="/projects/volunteer-engagement-program" element={<VolunteerEngagementProgram />} />
          <Route path="/projects/mothers-wellness-care" element={<MothersWellnessCare />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

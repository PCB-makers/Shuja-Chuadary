import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home"
import Projects from "./Project";
import CV from "./CV";
import Contact from "./Contact";
import About from "./About";

export default function App() {
  return (
    <Router>
      {/* Navbar stays here so it shows on every page */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer stays here so it shows on every page */}
      <Footer /> 
    </Router>
  );
}
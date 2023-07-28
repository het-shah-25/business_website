import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Index from "./pages/index";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Team from "./pages/team";
import Testimonials from "./pages/testimonials";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import PortfolioDetails from "./pages/portfolio-details";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

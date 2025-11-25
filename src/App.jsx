import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Import React Router
import { useState } from 'react';
import React from "react";
import './index.css';
import Navbar from './Components/Navbar';
import FAQsPage from './Pages/FAQsPage';
import Footer from './Components/Footer';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import Home from './Components/Home';
import BlogsPage from './Pages/BlogsPage';
import Modes from './Pages/Modes';
import BlogsDetailPage from './Pages/BlogsDetailPage';
import AboutUs from './Components/AboutUs';
import HillViewHavenPage from './Pages/HillViewHavenPage';
import MetagenClinicPage from './Pages/Metagen/MetagenClinicPage';
import Packages from './Pages/Packages';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/blogs" element={<BlogsDetailPage />} />
          <Route path="/modes" element={<Modes />} />
          <Route path="/hillview" element={<HillViewHavenPage />} />
          <Route path="/metagen" element={<MetagenClinicPage />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

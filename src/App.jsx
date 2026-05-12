import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SmoothScroll from './components/ui/SmoothScroll';
import Cursor from './components/ui/Cursor';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <Cursor />
      </div>
    </SmoothScroll>
  );
}

export default App;
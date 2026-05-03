import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SmoothScroll from './components/ui/SmoothScroll';
import Cursor from './components/ui/Cursor';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Cursor />
      </div>
    </SmoothScroll>
  );
}

export default App;
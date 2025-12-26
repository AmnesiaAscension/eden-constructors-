
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Markets from './pages/Markets';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Safety from './pages/Safety';
import Preconstruction from './pages/Preconstruction';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/preconstruction" element={<Preconstruction />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-40 bg-white">
                <h1 className="text-9xl font-bebas text-slate-200">404</h1>
                <p className="text-2xl font-bold mt-4">Page Not Found</p>
                <a href="#/" className="mt-8 px-8 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition">Back to Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

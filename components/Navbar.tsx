import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5 lg:py-6'}`}>
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-500 flex items-center justify-center font-bebas text-white text-2xl">E</div>
          <div className="hidden sm:block">
            <span className="block font-bebas text-2xl leading-none text-slate-800">EDEN</span>
            <span className="block text-[8px] tracking-[0.2em] font-bold text-slate-500">CONSTRUCTORS</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-extrabold uppercase tracking-widest transition-colors hover:text-orange-500 ${
                isActive(link.path) ? 'text-orange-500' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 transition-all">
            Request Bid
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-800 z-50" onClick={toggleMenu}>
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-slate-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-8 gap-6 pt-24 h-full">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-4xl font-bebas tracking-wide ${isActive(link.path) ? 'text-orange-500' : 'text-slate-800'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto">
            <Link to="/contact" className="block w-full py-5 bg-orange-500 text-white text-center font-bold uppercase tracking-widest shadow-xl">
              Request a Bid
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
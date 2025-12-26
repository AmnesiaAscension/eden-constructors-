
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS, Icons } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-500 flex items-center justify-center font-bebas text-white text-2xl group-hover:bg-slate-800 transition-colors">E</div>
          <div>
            <span className="block font-bebas text-2xl leading-none text-slate-800">EDEN</span>
            <span className="block text-[10px] tracking-[0.2em] font-bold text-slate-500">CONSTRUCTORS</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-500 ${
                isActive(link.path) ? 'text-orange-500' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="ml-4 px-6 py-2 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
            Request Bid
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[70px] bg-white z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bebas tracking-wide transition-colors ${
                isActive(link.path) ? 'text-orange-500' : 'text-slate-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="mt-4 w-full py-4 bg-orange-500 text-white text-center font-bold uppercase tracking-widest">
            Request a Bid
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

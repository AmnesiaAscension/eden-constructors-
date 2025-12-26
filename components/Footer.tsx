
import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 flex items-center justify-center font-bebas text-white text-2xl">E</div>
              <div>
                <span className="block font-bebas text-2xl leading-none">EDEN</span>
                <span className="block text-[10px] tracking-[0.2em] font-bold text-slate-400">CONSTRUCTORS</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Specializing in commercial and retail construction across the United States. We deliver quality, safety, and reliability on every site.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-orange-500 font-bebas text-xl mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.slice(0, 4).map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="text-orange-500 font-bebas text-xl mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.slice(4).map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-orange-500 font-bebas text-xl mb-6 tracking-wide">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-orange-500 mt-1"><Icons.Phone /></div>
                <div className="text-sm">
                  <span className="block text-slate-400">Call Us</span>
                  <a href="tel:1-800-555-0199" className="text-slate-100 font-bold hover:text-orange-500 transition-colors">800-555-0199</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-orange-500 mt-1"><Icons.Mail /></div>
                <div className="text-sm">
                  <span className="block text-slate-400">Email Us</span>
                  <a href="mailto:bids@edenconstructors.com" className="text-slate-100 font-bold hover:text-orange-500 transition-colors">bids@edenconstructors.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Eden Constructors, Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

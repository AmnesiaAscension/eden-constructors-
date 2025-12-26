
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const { hash } = useLocation();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (hash === '#bid') {
      const element = document.getElementById('bid');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Start Your Project.</h1>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none grid-pattern"></div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-4xl font-bebas text-slate-800 mb-8 uppercase tracking-wide">Contact Information</h2>
              <p className="text-slate-600 mb-12 text-lg font-medium">
                Whether you have a full set of plans ready to bid or just a concept in development, we're ready to provide the expertise you need.
              </p>

              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-orange-500 border border-slate-100">
                    <Icons.Phone />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Phone</h3>
                    <a href="tel:1-800-555-0199" className="text-2xl font-bebas text-slate-800 hover:text-orange-500 transition-colors">800-555-0199</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-orange-500 border border-slate-100">
                    <Icons.Mail />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Email</h3>
                    <a href="mailto:bids@edenconstructors.com" className="text-2xl font-bebas text-slate-800 hover:text-orange-500 transition-colors">bids@edenconstructors.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-orange-500 border border-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Office</h3>
                    <p className="text-2xl font-bebas text-slate-800">Denver, Colorado & National Service</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-10 bg-slate-900 text-white relative">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500 flex items-center justify-center">
                    <Icons.ArrowRight />
                 </div>
                 <h4 className="text-2xl font-bebas mb-4 tracking-wide uppercase">Looking for work?</h4>
                 <p className="text-slate-400 mb-6 text-sm font-medium">Join a team that values precision, safety, and results.</p>
                 <a href="#/careers" className="text-orange-500 font-bold uppercase tracking-widest hover:text-white transition-colors">See Open Positions</a>
              </div>
            </div>

            {/* Right: Bid Form */}
            <div id="bid" className="bg-white border border-slate-200 p-10 shadow-sm relative scroll-mt-32">
              <h2 className="text-4xl font-bebas text-slate-800 mb-8 uppercase tracking-wide">Request a Bid</h2>
              
              {submitted ? (
                <div className="py-20 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icons.Check />
                  </div>
                  <h3 className="text-3xl font-bebas text-slate-800">Inquiry Received</h3>
                  <p className="text-slate-500 mt-4 font-medium">Thank you for inviting Eden to bid. One of our estimators will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Company</label>
                      <input required type="text" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Project Type</label>
                      <select className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors bg-white">
                        <option>Retail</option>
                        <option>Restaurant</option>
                        <option>QSR</option>
                        <option>Tenant Improvement</option>
                        <option>Ground-up</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Timeline</label>
                      <input type="text" placeholder="e.g. Q3 2025" className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Project Details</label>
                    <textarea required rows={4} className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:border-orange-500 transition-colors"></textarea>
                  </div>

                  <div className="bg-slate-50 p-4 border border-slate-100 flex items-start gap-4">
                     <div className="text-orange-500 mt-1 flex-shrink-0">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>
                     </div>
                     <p className="text-[10px] font-medium text-slate-500 leading-normal">
                       Note: Large plan files (Blueprints/Specs) should be sent directly to <a href="mailto:plans@edenconstructors.com" className="text-orange-500 font-bold underline">plans@edenconstructors.com</a> via WeTransfer or Dropbox link.
                     </p>
                  </div>

                  <button type="submit" className="w-full py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-md">
                    Submit Invitation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

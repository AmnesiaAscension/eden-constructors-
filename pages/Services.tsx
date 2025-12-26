
import React from 'react';
import { Icons } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Precision Services.</h1>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none grid-pattern"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
            {[
              {
                title: 'Preconstruction & Estimating',
                icon: '🏗️',
                desc: 'Accurate budgets and constructability reviews before the first shovel hits the ground. We provide detailed value engineering to keep your vision within budget.'
              },
              {
                title: 'Ground-Up Construction',
                icon: '🧱',
                desc: 'From site-work and pad prep to structural steel and finishing. We manage the entire lifecycle of new commercial buildings for national and local brands.'
              },
              {
                title: 'Tenant Improvements (TI)',
                icon: '🛠️',
                desc: 'Specializing in high-end retail and commercial interior fit-outs. We work in occupied malls and office environments with minimal disruption.'
              },
              {
                title: 'Restaurant & QSR',
                icon: '🍔',
                desc: 'The most complex retail builds. We understand kitchen line logic, high-capacity MEP systems, and health code requirements better than anyone.'
              },
              {
                title: 'Multi-site Rollouts',
                icon: '🚀',
                desc: 'Executing consistent brand standards across dozens of locations. Our systems ensure that location #1 and location #50 look and function exactly the same.'
              },
              {
                title: 'Project Management',
                icon: '📊',
                desc: 'Real-time reporting and aggressive scheduling. Using modern project management software, we keep stakeholders informed every step of the way.'
              }
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-6 mb-6">
                   <div className="text-4xl bg-slate-50 w-16 h-16 flex items-center justify-center border border-slate-100 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 transform group-hover:-rotate-12">{s.icon}</div>
                   <h3 className="text-3xl font-bebas text-slate-800 uppercase tracking-wide group-hover:text-orange-500 transition-colors">{s.title}</h3>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed border-l-2 border-slate-100 pl-6 group-hover:border-orange-500 transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Area: Scheduling */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-video bg-slate-800 overflow-hidden relative">
            <img src="https://picsum.photos/id/114/800/600" alt="Active Construction" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="p-8 border-2 border-orange-500 text-center bg-slate-900/40 backdrop-blur-sm">
                  <div className="text-4xl font-bebas text-white mb-2 tracking-widest uppercase">The Eden Way</div>
                  <div className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.4em]">Speed + Quality</div>
               </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bebas mb-8 tracking-wide uppercase">Why Choose Our Team?</h2>
            <div className="space-y-8">
              {[
                { t: 'Rapid Mobilization', d: 'We can deploy crews nationwide on short notice to meet your expansion goals.' },
                { t: 'Safety Stewardship', d: 'Comprehensive safety programs that protect your employees and customers during renovation.' },
                { t: 'Financial Reliability', d: 'Strong bonding capacity and vendor relationships ensure your project is funded and finished.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                   <div className="text-orange-500 flex-shrink-0 mt-1"><Icons.Check /></div>
                   <div>
                      <h4 className="font-bebas text-xl mb-1 tracking-wider">{item.t}</h4>
                      <p className="text-slate-400 text-sm">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-8 tracking-wide uppercase">Need a specific capability?</h2>
           <p className="text-slate-600 font-medium mb-12">Contact our team to discuss your project requirements and get a professional estimate.</p>
           <a href="#/contact" className="px-12 py-5 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">Get a Quote</a>
        </div>
      </section>
    </div>
  );
};

export default Services;

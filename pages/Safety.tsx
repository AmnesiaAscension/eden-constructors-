
import React from 'react';
import { Icons } from '../constants';

const Safety: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Our Top Priority</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Safety First.</h1>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/115/1920/1080')] bg-cover bg-center grayscale"></div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-8 uppercase tracking-wide leading-tight">Zero Incidents is Our Goal.</h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                Safety isn't just a manual on a shelf at Eden Constructors—it's a core value that informs every decision we make. We believe that every accident is preventable through proper training, site supervision, and a culture of accountability.
              </p>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                Especially in public-facing retail environments, the safety of the general public is just as important as the safety of our crews. We maintain pristine, clearly marked jobsites to ensure the surrounding business operations remain safe and professional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'EMR Rating', val: '0.72' },
                 { label: 'OSHA 30', val: '100%' },
                 { label: 'Incident Free', val: '3 Yrs' },
                 { label: 'Safe Hours', val: '250k+' },
               ].map((stat, i) => (
                 <div key={i} className="bg-slate-900 p-8 text-center text-white border-b-4 border-orange-500 shadow-lg">
                    <div className="text-4xl font-bebas text-orange-500 mb-2">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
           <h2 className="text-4xl font-bebas text-slate-800 mb-16 text-center uppercase tracking-wide">Our Safety Protocol</h2>
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { t: 'Daily Toolbox Talks', d: 'Every crew starts the day with a focused safety briefing relevant to the day\'s specific tasks.' },
                { t: 'Third-Party Audits', d: 'We hire independent safety consultants to perform unannounced site inspections to ensure compliance.' },
                { t: 'Subcontractor Vetting', d: 'We only partner with subcontractors who meet our rigorous safety and insurance standards.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 border border-slate-200 group hover:border-orange-500 transition-colors">
                   <div className="w-12 h-12 bg-orange-500 flex items-center justify-center text-white mb-6 transform group-hover:rotate-45 transition-transform">
                      <Icons.Check />
                   </div>
                   <h3 className="text-2xl font-bebas text-slate-800 mb-4 uppercase tracking-wider">{item.t}</h3>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
           <div className="inline-block p-4 border-4 border-slate-900 mb-8">
              <span className="text-4xl font-bebas tracking-widest">SAFETY EXCELLENCE</span>
           </div>
           <h2 className="text-3xl font-bebas text-slate-800 mb-6 uppercase tracking-wide">Trusted by National Brands</h2>
           <p className="text-slate-600 font-medium mb-12">Our safety record allows us to work for some of the largest, most safety-conscious retail brands in the world. We meet and exceed all national safety requirements.</p>
           <a href="#/contact" className="px-10 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">Learn More About our Specs</a>
        </div>
      </section>
    </div>
  );
};

export default Safety;

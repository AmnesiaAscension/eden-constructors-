
import React from 'react';
import { Icons } from '../constants';

const Markets: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Industry Focus</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Markets We Serve.</h1>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/117/1920/1080')] bg-cover bg-center"></div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Shopping Centers',
                img: 'https://picsum.photos/id/142/600/600',
                desc: 'Specializing in exterior renovations, facade upgrades, and common area enhancements for outdoor lifestyle centers and malls.'
              },
              {
                title: 'National Retail',
                img: 'https://picsum.photos/id/143/600/600',
                desc: 'Reliable execution of brand prototypes across a regional or national scale. We ensure every location is built to spec.'
              },
              {
                title: 'Fast Food / QSR',
                img: 'https://picsum.photos/id/144/600/600',
                desc: 'The fastest-paced construction. We deliver complex kitchens and drive-thru lanes while minimizing store downtime.'
              },
              {
                title: 'Full Service Restaurants',
                img: 'https://picsum.photos/id/145/600/600',
                desc: 'High-end interior fit-outs with custom millwork, premium lighting, and specialized kitchen venting solutions.'
              },
              {
                title: 'Commercial Interiors',
                img: 'https://picsum.photos/id/146/600/600',
                desc: 'Modern, functional office and boutique spaces that reflect your brand identity and corporate culture.'
              },
              {
                title: 'Healthcare Retail',
                img: 'https://picsum.photos/id/147/600/600',
                desc: 'Building urgent cares, dental offices, and medical clinics in retail plazas with specialized electrical and plumbing needs.'
              }
            ].map((m, i) => (
              <div key={i} className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                 <div className="aspect-square overflow-hidden relative">
                    <img src={m.img} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-orange-500/10 transition-colors"></div>
                 </div>
                 <div className="p-8 flex-grow">
                    <h3 className="text-3xl font-bebas text-slate-800 mb-4 tracking-wider uppercase group-hover:text-orange-500 transition-colors">{m.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{m.desc}</p>
                 </div>
                 <div className="px-8 pb-8">
                    <a href="#/projects" className="text-[10px] font-bold uppercase tracking-widest text-slate-900 border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors inline-block">See Portfolio</a>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Band */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
           <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bebas mb-6 uppercase tracking-wide">Diverse Experience, Uniform Quality.</h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                Whether it's a 1,500 sq ft coffee shop or a 50,000 sq ft shopping center anchor, we bring the same level of safety, communication, and urgency to every build.
              </p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Markets;

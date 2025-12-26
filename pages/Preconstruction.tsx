
import React from 'react';
import { Icons } from '../constants';

const Preconstruction: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Early Planning</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Preconstruction.</h1>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/118/1920/1080')] bg-cover bg-center"></div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-8 uppercase tracking-wide leading-tight">Winning the Build Before the Shovel.</h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                Success in commercial construction is determined long before mobilization. Our preconstruction services ensure that your project is feasible, within budget, and planned for minimum disruption.
              </p>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10">
                We don't just give you a number; we provide a roadmap. We identify potential structural issues, MEP conflicts, and site constraints during the estimating phase, preventing costly change orders later on.
              </p>
              <div className="space-y-4">
                 {[
                   'Budgeting & Conceptual Estimating',
                   'Constructability Reviews',
                   'Phasing & Scheduling Plans',
                   'Value Engineering',
                   'Long-Lead Material Procurement'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <Icons.Check />
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-800">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="bg-white shadow-2xl p-4 rotate-3">
               <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img src="https://picsum.photos/id/120/1000/750" alt="Blueprints and Planning" className="w-full h-full object-cover" />
               </div>
               <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">PLANNING PHASE</span>
                  <div className="text-xl font-bebas text-slate-800 mt-1">PROCORE INTEGRATED WORKFLOWS</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Engineering */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
           <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                 <h2 className="text-4xl font-bebas mb-6 uppercase tracking-wide">Value Engineering</h2>
                 <p className="text-slate-400 font-medium">We find the "hidden dollars" in your plans. By suggesting alternative materials or construction methods that achieve the same aesthetic and functional result, we help you save without sacrificing quality.</p>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                 <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10">
                    <h3 className="text-2xl font-bebas text-orange-500 mb-4 uppercase tracking-wider">MEP Optimization</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Redesigning HVAC or electrical layouts to use standardized components and reduce labor hours on-site.</p>
                 </div>
                 <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10">
                    <h3 className="text-2xl font-bebas text-orange-500 mb-4 uppercase tracking-wider">Material Alternatives</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Identifying high-durability, lower-cost finishes that maintain the premium look of your retail brand.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Invitation */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-8 tracking-wide uppercase">Ready to start planning?</h2>
           <p className="text-slate-600 font-medium mb-12">Send us your preliminary drawings or work scopes. Our estimating department provides fast, accurate feedback.</p>
           <a href="#/contact" className="px-12 py-5 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">Submit Plans for Review</a>
        </div>
      </section>
    </div>
  );
};

export default Preconstruction;

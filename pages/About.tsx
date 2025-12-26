
import React from 'react';
import { Icons } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">About Eden</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Built on Trust.</h1>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/112/1920/1080')] bg-cover bg-center"></div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-8 uppercase tracking-wide leading-tight">Dependable Partners for Commercial Development.</h2>
              <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                <p>
                  Eden Constructors, Inc. was founded with a single mission: to provide the highest level of professionalism and quality in the commercial and retail construction market.
                </p>
                <p>
                  We understand that for our retail and restaurant clients, time is more than just a schedule—it's revenue. Every day a project is delayed is a day of lost business. That's why we've built our reputation on meeting aggressive deadlines without compromising on safety or quality.
                </p>
                <p>
                  Based in Denver with operations nationwide, we provide a full-service approach that covers every square foot of your project, from initial site clearing to the final coat of paint.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/id/113/1000/1200" alt="Team at Work" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 p-8 bg-orange-500 text-white shadow-xl hidden md:block">
                 <div className="text-5xl font-bebas mb-2">15+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of Building Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 grid-pattern border-y border-slate-100">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bebas text-slate-800 mb-16 text-center uppercase tracking-wide">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Transparency', desc: 'No hidden costs, no surprises. We provide clear, honest communication from day one through turnover.' },
              { title: 'Urgency', desc: 'We treat your schedule as our own. Our phased planning ensures fast turnovers for revenue-generating sites.' },
              { title: 'Excellence', desc: 'Good enough isn\'t in our vocabulary. We build high-traffic environments meant to last for years.' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 shadow-sm hover:shadow-lg transition-all border-t-4 border-orange-500">
                <h3 className="text-3xl font-bebas text-slate-800 mb-4 tracking-wider">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Team Callout */}
      <section className="py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-8 uppercase tracking-wide">A Team of Experts</h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-12">
                Our project managers and superintendents bring decades of combined experience in specialized retail sectors. We don't just hire builders; we hire problem solvers who understand the nuances of mall work, drive-thru operations, and high-spec restaurant requirements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'OSHA 30 Certified',
                  'Procore Experts',
                  'Retail Specialists',
                  'QSR Pioneers'
                ].map(item => (
                  <div key={item} className="p-4 bg-slate-50 border border-slate-100 flex items-center justify-center gap-2">
                    <Icons.Check />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-bebas mb-6 uppercase tracking-wide leading-tight">Ready to see our work in action?</h2>
             <p className="text-slate-400 font-medium text-lg">Browse our portfolio of national retail and restaurant projects.</p>
          </div>
          <a href="#/projects" className="px-12 py-5 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-orange-500 transition-all whitespace-nowrap">View Projects</a>
        </div>
      </section>
    </div>
  );
};

export default About;

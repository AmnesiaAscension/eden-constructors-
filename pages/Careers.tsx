
import React from 'react';
import { CareerOpportunity } from '../types';
import { Icons } from '../constants';

const OPENINGS: CareerOpportunity[] = [
  {
    id: '1',
    title: 'Project Manager (Commercial Retail)',
    location: 'Denver, CO (Remote Hybrid)',
    type: 'Full-Time',
    description: 'Lead commercial builds from precon through turnover. Retail experience required.'
  },
  {
    id: '2',
    title: 'Traveling Superintendent',
    location: 'National (Travel Required)',
    type: 'Full-Time',
    description: 'On-site leadership for QSR and retail TI projects across the United States.'
  },
  {
    id: '3',
    title: 'Senior Estimator',
    location: 'Denver, CO',
    type: 'Full-Time',
    description: 'Accurate pricing for competitive bids and negotiated commercial work.'
  }
];

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Join Our Team</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Build Your Future.</h1>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/116/1920/1080')] bg-cover bg-center"></div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-8 uppercase tracking-wide leading-tight">Excellence in Action.</h2>
              <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                <p>
                  At Eden Constructors, we build more than just structures—we build careers. We look for individuals who are detail-oriented, driven by results, and dedicated to safety.
                </p>
                <p>
                  We offer competitive compensation, comprehensive benefits, and a culture that values professional growth and clear communication. If you're a builder who takes pride in a job well done, we want to hear from you.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 p-10 border border-slate-200">
               <h3 className="text-2xl font-bebas text-slate-800 mb-6 uppercase tracking-wider">Perks & Benefits</h3>
               <ul className="space-y-4">
                 {[
                   'Competitive Salary & Bonuses',
                   'Health, Dental, and Vision Coverage',
                   '401(k) Retirement with Match',
                   'Paid Professional Development',
                   'Modern Tech Stack (Procore, Bluebeam)',
                   'Generous Vacation Policy'
                 ].map((perk, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-600 font-bold uppercase text-xs tracking-widest">
                      <Icons.Check />
                      {perk}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-slate-50 grid-pattern">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
           <h2 className="text-4xl font-bebas text-slate-800 mb-16 uppercase tracking-wide">Current Openings</h2>
           <div className="space-y-6">
             {OPENINGS.map(job => (
               <div key={job.id} className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-orange-500 transition-colors">
                  <div>
                    <h3 className="text-2xl font-bebas text-slate-800 mb-1 group-hover:text-orange-500 transition-colors uppercase tracking-wider">{job.title}</h3>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                       <span className="text-orange-500">{job.location}</span>
                       <span className="text-slate-300">|</span>
                       <span>{job.type}</span>
                    </div>
                    <p className="mt-4 text-slate-500 text-sm max-w-xl font-medium">{job.description}</p>
                  </div>
                  <a href="mailto:careers@edenconstructors.com" className="px-8 py-3 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-orange-500 transition-all">
                    Apply Now
                  </a>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Subcontractors */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
           <h2 className="text-4xl font-bebas text-slate-800 mb-6 uppercase tracking-wide">Are you a subcontractor?</h2>
           <p className="text-slate-600 font-medium mb-12">We are always looking to partner with high-quality trades across the United States. Join our preferred vendor list.</p>
           <a href="#/contact" className="px-10 py-4 border-2 border-slate-800 text-slate-800 font-bold uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all">Register as Subcontractor</a>
        </div>
      </section>
    </div>
  );
};

export default Careers;

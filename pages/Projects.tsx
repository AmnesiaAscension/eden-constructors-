
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Icons } from '../constants';

const FILTERS = ['All', 'Retail', 'Restaurant', 'QSR', 'Tenant Improvement', 'Ground-up'] as const;

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = activeFilter === 'All' || project.type === activeFilter;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bebas text-white">Built with Precision.</h1>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/111/1920/1080')] bg-cover bg-center grayscale"></div>
      </section>

      {/* Controls */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-slate-200 py-6">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                  activeFilter === filter 
                  ? 'bg-slate-800 text-white border-slate-800' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-800 hover:text-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search by city, brand, or project name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-medium"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project) => (
                <Link key={project.slug} to={`/project/${project.slug}`} className="group block">
                  <div className="aspect-[4/5] bg-slate-100 mb-6 overflow-hidden relative shadow-sm">
                    <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">{project.type}</div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bebas text-slate-800 mb-1 tracking-wide group-hover:text-orange-500 transition-colors">{project.name}</h3>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{project.location}</p>
                    </div>
                    <div className="p-2 border border-slate-200 rounded-full group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all">
                      <Icons.ArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Icons.X />
              </div>
              <h3 className="text-2xl font-bebas text-slate-800">No projects found</h3>
              <p className="text-slate-500 mt-2 font-medium">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-6 text-orange-500 font-bold uppercase tracking-widest hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bebas mb-6">Partner with Eden Constructors</h2>
          <p className="text-slate-400 mb-10 text-lg font-medium">
            Ready to bring your commercial vision to life? Our estimating team is standing by to review your plans.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-orange-500 transition-all">
            Request a Bid Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;

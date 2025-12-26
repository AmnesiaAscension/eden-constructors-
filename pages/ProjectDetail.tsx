
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Icons } from '../constants';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" />;
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <section className="h-[70vh] relative flex items-end">
        <div className="absolute inset-0">
          <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1120px] mx-auto px-4 md:px-6 pb-20 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-orange-500 text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                {project.type}
              </span>
              <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4 tracking-wide">{project.name}</h1>
              <p className="text-xl text-slate-300 font-bold uppercase tracking-widest">{project.location}</p>
            </div>
            <div className="hidden md:block">
              <div className="text-white text-right">
                <span className="block text-[10px] font-bold tracking-widest text-orange-500 mb-1 uppercase">Project Year</span>
                <span className="text-4xl font-bebas">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left: Summary & Details */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bebas text-slate-800 mb-8 border-b border-slate-100 pb-4 tracking-wide uppercase">Project Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              
              <h3 className="text-2xl font-bebas text-slate-800 mb-6 tracking-wide uppercase">Scope of Work</h3>
              <p className="text-slate-600 leading-relaxed mb-10 font-medium">
                {project.scope}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {project.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-3 bg-slate-50 p-4 border-l-4 border-orange-500">
                    <Icons.Check />
                    <span className="font-bold text-xs uppercase tracking-widest text-slate-700">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats & Sidebar */}
            <div>
              <div className="bg-slate-900 p-8 text-white shadow-xl">
                <h4 className="text-orange-500 font-bebas text-2xl mb-8 tracking-wide uppercase">Project Specs</h4>
                <div className="space-y-8">
                  <div>
                    <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Size</span>
                    <span className="text-2xl font-bebas">{project.stats.square_feet || 'TBD'} SQ FT</span>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Duration</span>
                    <span className="text-2xl font-bebas">{project.stats.duration || 'TBD'}</span>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Delivery Method</span>
                    <span className="text-2xl font-bebas">{project.stats.delivery || 'General Contractor'}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="block w-full py-4 bg-orange-500 text-white text-center font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg">
                  Invite us to Bid
                </Link>
                <Link to="/projects" className="block w-full py-4 mt-4 border-2 border-slate-800 text-slate-800 text-center font-bold uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all">
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bebas text-slate-800 mb-12 text-center uppercase tracking-wide">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, i) => (
              <div key={i} className="aspect-square bg-white shadow-sm overflow-hidden group">
                <img src={img} alt={`${project.name} gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <section className="mt-24 max-w-[1120px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between border-t border-slate-200 pt-10">
          <Link to="/projects" className="flex items-center gap-4 text-slate-400 hover:text-orange-500 transition-colors">
            <div className="rotate-180"><Icons.ArrowRight /></div>
            <span className="font-bold text-xs uppercase tracking-widest">Back to Projects</span>
          </Link>
          <div className="h-px flex-grow bg-slate-100 mx-10 hidden sm:block"></div>
          <Link to="/contact" className="flex items-center gap-4 text-slate-800 hover:text-orange-500 transition-colors">
            <span className="font-bold text-xs uppercase tracking-widest">Next Step: Bid</span>
            <Icons.ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

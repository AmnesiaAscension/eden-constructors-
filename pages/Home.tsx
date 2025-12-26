
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Icons } from '../constants';

const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://picsum.photos/id/119/1920/1080" alt="Construction Site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 bg-orange-500 text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Commercial & Retail Construction
            </span>
            <h1 className="text-5xl md:text-7xl font-bebas text-white leading-[1.1] mb-8 animate-slide-up">
              Delivered <span className="text-orange-500">On Time.</span><br />
              Built with Safety.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl animate-slide-up delay-100">
              Shopping centers, national retail rollouts, fast food, and signature restaurants—we build with precision and clear communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
              <Link to="/contact" className="px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-orange-500 transition-all text-center">
                Request a Bid
              </Link>
              <Link to="/projects" className="px-8 py-4 border-2 border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all text-center">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
             <div className="w-32 h-1 bg-orange-500"></div>
             <div className="w-16 h-1 bg-slate-500"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bebas text-slate-800 mb-1">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Years in Business</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bebas text-slate-800 mb-1">500+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Projects Completed</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bebas text-slate-800 mb-1">45</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">States Active</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bebas text-slate-800 mb-1">0.72</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">EMR Safety Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50 grid-pattern">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-6">Our Capabilities</h2>
              <p className="text-slate-600 font-medium">
                We handle every aspect of the build, from preconstruction to final turnover. Our teams excel in high-paced retail environments where scheduling is paramount.
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-slate-800 transition-colors">
              All Services <Icons.ArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Ground-Up Retail', img: 'https://picsum.photos/id/135/600/400' },
              { title: 'Tenant Improvements', img: 'https://picsum.photos/id/136/600/400' },
              { title: 'Restaurants & QSR', img: 'https://picsum.photos/id/137/600/400' },
              { title: 'Multi-site Rollouts', img: 'https://picsum.photos/id/139/600/400' },
              { title: 'Preconstruction', img: 'https://picsum.photos/id/140/600/400' },
              { title: 'Project Management', img: 'https://picsum.photos/id/141/600/400' },
            ].map((cap, i) => (
              <div key={i} className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={cap.img} alt={cap.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-orange-500/80 transition-colors duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bebas tracking-wide mb-2">{cap.title}</h3>
                  <div className="w-8 h-1 bg-white group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Work Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bebas text-slate-800">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <Link key={project.slug} to={`/project/${project.slug}`} className="group block">
                <div className="aspect-[4/5] bg-slate-100 mb-6 overflow-hidden relative">
                  <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

          <div className="mt-16 text-center">
            <Link to="/projects" className="inline-block px-10 py-4 border-2 border-slate-800 text-slate-800 font-bold uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-orange-500 rotate-12 translate-x-1/2"></div>
        </div>
        
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bebas mb-16 text-center md:text-left">Our Building Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Precon', desc: 'Estimating, scheduling, and value engineering before breaking ground.' },
              { num: '02', title: 'Planning', desc: 'Phased construction planning for open-store or complex environments.' },
              { num: '03', title: 'The Build', desc: 'Aggressive project management with a relentless focus on quality.' },
              { num: '04', title: 'Turnover', desc: 'Punch-list completion and rapid closeout for business continuity.' },
            ].map((step, i) => (
              <div key={i} className="relative pt-12">
                <div className="text-8xl font-bebas text-white/10 absolute top-0 left-0 leading-none">{step.num}</div>
                <div className="relative">
                  <h3 className="text-2xl font-bebas text-orange-500 mb-4 tracking-wider uppercase">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Band */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-bebas mb-4">Safety First, Always.</h2>
            <p className="text-lg font-medium text-white/90">
              We maintain a safety-first culture on every jobsite. Our clean, public-facing retail sites reflect the professionalism of your brand even during construction.
            </p>
          </div>
          <Link to="/safety" className="px-10 py-4 bg-white text-orange-500 font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap">
            Safety Standards
          </Link>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bebas text-slate-800 mb-6">Have plans ready? Invite Eden to bid.</h2>
          <p className="text-slate-600 mb-10 text-lg font-medium">
            We specialize in aggressive schedules and multi-site rollouts across the US.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-10 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
              Request a Bid
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-slate-800 text-slate-800 font-bold uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all">
              Talk to a PM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

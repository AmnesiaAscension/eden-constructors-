import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const SERVICE_DATA = {
  'preconstruction': {
    title: 'Preconstruction',
    icon: '🏗️',
    img: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80',
    desc: 'Success is built long before the first shovel hits the ground. Our preconstruction services include detailed site feasibility studies, constructability reviews, and accurate conceptual budgeting.',
    capabilities: ['Conceptual Estimating', 'Site Surveys', 'Value Engineering', 'Permit Coordination']
  },
  'ground-up-retail': {
    title: 'Ground-Up Retail',
    icon: '🧱',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80',
    desc: 'We specialize in the rapid delivery of ground-up commercial structures. From site pad preparation and foundation work to structural steel and facade execution.',
    capabilities: ['Pad Prep & Site Work', 'Structural Steel', 'Exterior Facades', 'Shell Completion']
  },
  'restaurant-qsr': {
    title: 'Restaurant & QSR',
    icon: '🍔',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    desc: 'Quick Service Restaurants and high-end dining require specialized knowledge of high-capacity MEP systems, grease trap logic, and health department compliance.',
    capabilities: ['Commercial Kitchens', 'Specialized MEP', 'Health Code Compliance', 'Drive-Thru Systems']
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICE_DATA[slug as keyof typeof SERVICE_DATA];

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="animate-reveal">
      <section className="relative h-[40vh] lg:h-[50vh] flex items-center bg-slate-900 pt-20">
        <img src={service.img} className="absolute inset-0 w-full h-full object-cover opacity-30" alt={service.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 relative z-10 w-full">
          <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-6 hover:gap-4 transition-all">
            ← Back to Services
          </Link>
          <h1 className="text-5xl lg:text-9xl font-bebas text-white uppercase leading-none">{service.title}</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="text-5xl mb-8">{service.icon}</div>
            <h2 className="text-4xl font-bebas text-slate-800 mb-8 uppercase underline decoration-orange-500 decoration-4">Capability Focus</h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">{service.desc}</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {service.capabilities.map(cap => (
                <div key={cap} className="p-4 bg-slate-50 border-l-4 border-orange-500 font-bold uppercase text-[10px] tracking-widest text-slate-700">
                  {cap}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 p-12 text-white shadow-2xl h-fit">
            <h3 className="text-orange-500 font-bebas text-2xl mb-8 uppercase">Start the Build</h3>
            <p className="text-slate-400 text-sm mb-10">Ready to discuss your project requirements? Our team of estimators and project managers is ready to assist.</p>
            <Link to="/contact" className="block w-full py-4 bg-orange-500 text-white text-center font-bold uppercase tracking-widest hover:bg-white hover:text-orange-500 transition-all">
              Request a Bid
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fixed: Added missing default export
export default ServiceDetail;

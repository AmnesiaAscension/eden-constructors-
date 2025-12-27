/**
 * EDEN CONSTRUCTORS - STATIC ENGINE (NO REACT)
 */

const DATA = {
  projects: [
    {
      slug: 'modern-qsr-austin',
      name: 'Burger Haven Austin',
      type: 'QSR',
      location: 'Austin, TX',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      stats: { sqft: '3,500', time: '6 Months', delivery: 'GC' },
      desc: 'Complete ground-up construction of a flagship QSR location featuring dual drive-thru tech and premium finishes.'
    },
    {
      slug: 'mercantile-square',
      name: 'Mercantile Square',
      type: 'Retail',
      location: 'Denver, CO',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      stats: { sqft: '25,000', time: '10 Months', delivery: 'Design-Build' },
      desc: 'Large-scale multi-tenant retail shell with architectural metal facades.'
    },
    {
      slug: 'gilded-spoon',
      name: 'The Gilded Spoon',
      type: 'Restaurant',
      location: 'Chicago, IL',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      stats: { sqft: '5,200', time: '5 Months', delivery: 'CM at Risk' },
      desc: 'Historical bank lobby transformed into a luxury dining destination.'
    }
  ],
  services: [
    { slug: 'preconstruction', title: 'Preconstruction', icon: '🏗️', desc: 'Accurate budgeting and scheduling blueprints.' },
    { slug: 'ground-up', title: 'Ground-Up Retail', icon: '🧱', desc: 'New construction for major commercial anchors.' },
    { slug: 'restaurant', title: 'Restaurant & QSR', icon: '🍔', desc: 'Specialized health-code kitchen environments.' }
  ],
  links: [
    { name: 'Home', path: '#/' },
    { name: 'About', path: '#/about' },
    { name: 'Services', path: '#/services' },
    { name: 'Portfolio', path: '#/projects' },
    { name: 'Safety', path: '#/safety' },
    { name: 'Contact', path: '#/contact' }
  ]
};

const UI = {
  init() {
    this.main = document.getElementById('main-content');
    this.nav = document.getElementById('navbar');
    this.menuToggle = document.getElementById('menu-toggle');
    this.overlay = document.getElementById('mobile-overlay');
    
    window.addEventListener('hashchange', () => this.router());
    window.addEventListener('scroll', () => this.handleScroll());
    this.menuToggle.onclick = () => this.toggleMenu();
    
    this.renderNav();
    this.renderFooter();
    this.router();
  },

  handleScroll() {
    if (window.scrollY > 50) {
      this.nav.classList.add('bg-white/95', 'backdrop-blur-xl', 'shadow-xl', 'py-3');
      this.nav.classList.remove('py-4', 'lg:py-6');
    } else {
      this.nav.classList.remove('bg-white/95', 'backdrop-blur-xl', 'shadow-xl', 'py-3');
      this.nav.classList.add('py-4', 'lg:py-6');
    }
  },

  toggleMenu() {
    const active = this.overlay.classList.contains('translate-x-0');
    this.overlay.classList.toggle('translate-x-0', !active);
    this.overlay.classList.toggle('translate-x-full', active);
    this.menuToggle.classList.toggle('active', !active);
    document.body.style.overflow = !active ? 'hidden' : '';
  },

  renderNav() {
    const linksHtml = DATA.links.map(l => `<a href="${l.path}" class="hover:text-orange-500 transition-colors">${l.name}</a>`).join('');
    document.getElementById('desktop-links').innerHTML = linksHtml + `<a href="#/contact" class="px-8 py-3 bg-slate-900 text-white hover:bg-orange-500 transition-all">Request Bid</a>`;
    this.overlay.innerHTML = `<div class="flex flex-col gap-8">${DATA.links.map(l => `<a href="${l.path}" class="text-5xl font-bebas text-slate-800">${l.name}</a>`).join('')}</div>`;
    
    // Auto-close menu on link click
    this.overlay.querySelectorAll('a').forEach(a => a.onclick = () => this.toggleMenu());
  },

  renderFooter() {
    document.getElementById('footer').innerHTML = `
      <div class="max-w-[1200px] mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div><div class="font-bebas text-4xl mb-4">EDEN</div><p class="text-slate-400 text-sm">National commercial builds delivered with precision.</p></div>
          <div><h4 class="text-orange-500 font-bebas text-xl mb-6 uppercase">Links</h4><div class="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            ${DATA.links.map(l => `<a href="${l.path}" class="hover:text-white">${l.name}</a>`).join('')}
          </div></div>
          <div><h4 class="text-orange-500 font-bebas text-xl mb-6 uppercase">Contact</h4><p class="text-slate-400 text-sm mb-2">800-555-0199</p><p class="text-slate-400 text-sm">bids@edenconstructors.com</p></div>
        </div>
        <div class="pt-10 border-t border-slate-800 text-[10px] font-bold uppercase tracking-widest text-slate-500">© 2025 Eden Constructors, Inc.</div>
      </div>
    `;
  },

  async router() {
    const hash = window.location.hash || '#/';
    this.main.classList.add('fade-out');
    
    setTimeout(() => {
      if (hash === '#/') this.renderHome();
      else if (hash === '#/about') this.renderAbout();
      else if (hash === '#/services') this.renderServices();
      else if (hash === '#/projects') this.renderProjects();
      else if (hash === '#/safety') this.renderSafety();
      else if (hash === '#/contact') this.renderContact();
      else if (hash.startsWith('#/project/')) this.renderProjectDetail(hash.split('/project/')[1]);
      
      this.main.classList.remove('fade-out');
      window.scrollTo(0, 0);
      this.initReveals();
    }, 300);
  },

  initReveals() {
    const obs = new IntersectionObserver(e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  },

  renderHome() {
    this.main.innerHTML = `
      <section class="h-screen bg-slate-900 relative flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1920&q=80" class="absolute inset-0 w-full h-full object-cover opacity-30">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        <div class="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <h1 class="text-6xl md:text-[8vw] font-bebas text-white leading-[0.9] mb-8 reveal">BUILDING THE <br><span class="text-orange-500">EXPERIENCE.</span></h1>
          <p class="text-slate-300 text-lg md:text-2xl max-w-xl mb-12 reveal" style="transition-delay: 200ms">National retail rollouts and signature restaurant builds delivered with precision.</p>
          <div class="flex flex-col sm:flex-row gap-6 reveal" style="transition-delay: 400ms">
            <a href="#/projects" class="px-12 py-5 bg-white text-slate-900 font-bold uppercase tracking-widest text-center shadow-2xl">View Portfolio</a>
            <a href="#/contact" class="px-12 py-5 border-2 border-white text-white font-bold uppercase tracking-widest text-center">Request Bid</a>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="max-w-[1200px] mx-auto px-6">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            ${[
              { n: '15+', l: 'Years Mastery' },
              { n: '500+', l: 'Premium Builds' },
              { n: '45', l: 'States Ready' },
              { n: '0.72', l: 'EMR Rating' }
            ].map((s, i) => `
              <div class="reveal" style="transition-delay: ${i * 100}ms">
                <div class="text-5xl lg:text-7xl font-bebas text-slate-800 mb-2">${s.n}</div>
                <div class="text-[10px] font-extrabold uppercase tracking-widest text-orange-500">${s.l}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="py-24 bg-slate-50 grid-pattern">
        <div class="max-w-[1200px] mx-auto px-6">
          <h2 class="text-5xl md:text-7xl font-bebas text-slate-900 mb-16 reveal">CORE CAPABILITIES.</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${DATA.services.map((s, i) => `
              <div class="bg-white p-10 shadow-xl border-t-4 border-orange-500 reveal" style="transition-delay: ${i * 100}ms">
                <div class="text-5xl mb-6">${s.icon}</div>
                <h3 class="text-3xl font-bebas text-slate-800 mb-4 uppercase">${s.title}</h3>
                <p class="text-slate-500 text-sm mb-6">${s.desc}</p>
                <a href="#/services" class="text-[10px] font-bold uppercase text-orange-500 tracking-widest">Learn More →</a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  renderProjects() {
    this.main.innerHTML = `
      <section class="bg-slate-900 pt-48 pb-24 text-center">
        <h1 class="text-7xl lg:text-9xl font-bebas text-white reveal">PORTFOLIO.</h1>
      </section>
      <section class="py-24 max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          ${DATA.projects.map(p => `
            <a href="#/project/${p.slug}" class="group block reveal">
              <div class="aspect-[4/5] overflow-hidden mb-6 shadow-xl relative">
                <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]">
                <div class="absolute top-4 left-4 py-1 px-3 bg-orange-500 text-white text-[8px] font-bold uppercase tracking-widest">${p.type}</div>
              </div>
              <h3 class="text-3xl font-bebas text-slate-800 uppercase group-hover:text-orange-500 transition-colors">${p.name}</h3>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${p.location}</p>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  },

  renderProjectDetail(slug) {
    const p = DATA.projects.find(x => x.slug === slug) || DATA.projects[0];
    this.main.innerHTML = `
      <section class="h-[60vh] bg-slate-900 relative flex items-end pb-16">
        <img src="${p.img}" class="absolute inset-0 w-full h-full object-cover opacity-40">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div class="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <h1 class="text-6xl md:text-9xl font-bebas text-white uppercase leading-none reveal">${p.name}</h1>
          <p class="text-orange-500 font-bold uppercase tracking-widest mt-4 reveal" style="transition-delay: 200ms">${p.location} | ${p.type}</p>
        </div>
      </section>
      <section class="py-24 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div class="lg:col-span-2 reveal">
          <h2 class="text-4xl font-bebas text-slate-800 mb-8 uppercase underline decoration-orange-500 decoration-4">Scope & Delivery</h2>
          <p class="text-xl text-slate-600 font-medium leading-relaxed">${p.desc}</p>
        </div>
        <div class="bg-slate-900 p-12 text-white shadow-2xl reveal" style="transition-delay: 200ms">
          <h3 class="text-orange-500 font-bebas text-2xl mb-10 uppercase">Specifications</h3>
          <div class="space-y-8">
            <div><span class="text-slate-500 text-[8px] font-bold block mb-1">Area</span><span class="text-3xl font-bebas">${p.stats.sqft} SQ FT</span></div>
            <div><span class="text-slate-500 text-[8px] font-bold block mb-1">Timeline</span><span class="text-3xl font-bebas">${p.stats.time}</span></div>
            <div><span class="text-slate-500 text-[8px] font-bold block mb-1">Delivery</span><span class="text-3xl font-bebas">${p.stats.delivery}</span></div>
          </div>
        </div>
      </section>
    `;
  },

  renderAbout() {
    this.main.innerHTML = `<section class="bg-slate-900 pt-48 pb-32 text-center text-white"><h1 class="text-7xl md:text-9xl font-bebas uppercase reveal">DEPENDABLE <br><span class="text-orange-500">PARTNERS.</span></h1></section>`;
  },

  renderServices() {
    this.main.innerHTML = `<section class="bg-slate-900 pt-48 pb-32 text-center text-white"><h1 class="text-7xl md:text-9xl font-bebas uppercase reveal">ELITE <span class="text-orange-500">SERVICES.</span></h1></section>`;
  },

  renderSafety() {
    this.main.innerHTML = `<section class="bg-slate-900 pt-48 pb-32 text-center text-white"><h1 class="text-7xl md:text-9xl font-bebas uppercase reveal">TOTAL <span class="text-orange-500">SAFETY.</span></h1></section>`;
  },

  renderContact() {
    this.main.innerHTML = `<section class="bg-slate-900 pt-48 pb-32 text-center text-white"><h1 class="text-7xl md:text-9xl font-bebas uppercase reveal">START THE <span class="text-orange-500">BUILD.</span></h1></section>`;
  }
};

UI.init();
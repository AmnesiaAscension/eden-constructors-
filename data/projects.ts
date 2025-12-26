
import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'modern-qsr-austin',
    name: 'Burger Haven Austin',
    type: 'QSR',
    location: 'Austin, TX',
    year: 2024,
    scope: 'Ground-up build with dual drive-thru lanes and high-efficiency kitchen.',
    description: 'This project involved the complete ground-up construction of a 3,500 sq ft Quick Service Restaurant. Our team managed everything from site preparation and utility hookups to the final interior finishes and kitchen equipment installation. Key challenges included a tight urban site and strict municipal environmental regulations.',
    stats: {
      square_feet: '3,500',
      duration: '6 Months',
      delivery: 'General Contractor'
    },
    images: [
      'https://picsum.photos/id/122/1200/800',
      'https://picsum.photos/id/123/1200/800',
      'https://picsum.photos/id/124/1200/800'
    ],
    tags: ['drive-thru', 'ground-up', 'kitchen']
  },
  {
    slug: 'downtown-retail-plaza',
    name: 'Mercantile Square',
    type: 'Retail',
    location: 'Denver, CO',
    year: 2023,
    scope: 'Multi-tenant shell construction and common area landscaping.',
    description: 'A 25,000 sq ft retail shell designed for five anchor tenants. The project featured high-end facade materials, including architectural metal panels and expansive glass storefronts. We delivered the project two weeks ahead of schedule, allowing tenants early access for their own improvements.',
    stats: {
      square_feet: '25,000',
      duration: '10 Months',
      delivery: 'Design-Build'
    },
    images: [
      'https://picsum.photos/id/125/1200/800',
      'https://picsum.photos/id/126/1200/800'
    ],
    tags: ['multi-tenant', 'shell', 'retail']
  },
  {
    slug: 'bistro-renovation-chicago',
    name: 'The Gilded Spoon',
    type: 'Restaurant',
    location: 'Chicago, IL',
    year: 2024,
    scope: 'High-end interior fit-out and historical facade preservation.',
    description: 'Working within a landmarked building, Eden Constructors transformed a former bank lobby into a premium dining destination. The scope included structural reinforcement, custom millwork, and the integration of a commercial kitchen into a non-traditional space.',
    stats: {
      square_feet: '5,200',
      duration: '5 Months',
      delivery: 'CM at Risk'
    },
    images: [
      'https://picsum.photos/id/127/1200/800',
      'https://picsum.photos/id/128/1200/800'
    ],
    tags: ['interiors', 'historical', 'dining']
  },
  {
    slug: 'national-coffee-rollout',
    name: 'BrewPoint Flagship',
    type: 'Tenant Improvement',
    location: 'Seattle, WA',
    year: 2025,
    scope: 'Concept-store rollout featuring automated service tech.',
    description: 'This tenant improvement project served as the prototype for a national brand expansion. We collaborated closely with the client\'s design team to ensure all brand elements were perfectly executed, from the custom lighting fixtures to the integrated digital menu boards.',
    stats: {
      square_feet: '1,800',
      duration: '3 Months',
      delivery: 'GC'
    },
    images: [
      'https://picsum.photos/id/129/1200/800',
      'https://picsum.photos/id/130/1200/800'
    ],
    tags: ['prototype', 'tech-integrated', 'cafe']
  },
  {
    slug: 'mall-anchor-transformation',
    name: 'Pacific Center East',
    type: 'Ground-up',
    location: 'San Diego, CA',
    year: 2024,
    scope: 'Conversion of outdated department store into modern mixed-use retail.',
    description: 'A massive 60,000 sq ft overhaul. We demolished a significant portion of the existing structure to create an open-air mall feel, adding new structural steel and updated MEP systems throughout.',
    stats: {
      square_feet: '60,000',
      duration: '14 Months',
      delivery: 'Design-Build'
    },
    images: [
      'https://picsum.photos/id/131/1200/800',
      'https://picsum.photos/id/132/1200/800'
    ],
    tags: ['mixed-use', 'redevelopment', 'large-scale']
  },
  {
    slug: 'fashion-boutique-soho',
    name: 'Lumiere Boutique',
    type: 'Retail',
    location: 'New York, NY',
    year: 2023,
    scope: 'Minimalist luxury retail interior.',
    description: 'A high-stakes TI in the heart of SoHo. The project required impeccable attention to detail, featuring poured concrete floors, museum-quality lighting, and hidden storage solutions.',
    stats: {
      square_feet: '2,400',
      duration: '4 Months',
      delivery: 'GC'
    },
    images: [
      'https://picsum.photos/id/133/1200/800',
      'https://picsum.photos/id/134/1200/800'
    ],
    tags: ['luxury', 'boutique', 'interiors']
  }
];

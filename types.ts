
export interface ProjectStats {
  square_feet?: string;
  duration?: string;
  delivery?: string;
}

export interface Project {
  slug: string;
  name: string;
  type: 'Retail' | 'Restaurant' | 'QSR' | 'Tenant Improvement' | 'Ground-up';
  location: string;
  year: string | number;
  scope: string;
  description: string;
  stats: ProjectStats;
  images: string[];
  tags: string[];
}

export interface CareerOpportunity {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

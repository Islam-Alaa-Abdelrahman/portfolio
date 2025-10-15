export interface ProjectMedia {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  media: ProjectMedia[];
  demoUrl?: string;
  sourceUrl?: string;
}
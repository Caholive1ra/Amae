export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  caption?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  media?: MediaItem[];
}

export interface Piece {
  id: string;
  slug: string;
  name: string;
  description: string;
  collection: string;
  conceptText: string;
  colorOrigin: {
    name: string;
    description: string;
  };
  materialsCare: string;
  processSteps: ProcessStep[];
  gallery: MediaItem[];
  tags?: string[];
  image: string; // mantém compatibilidade
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  concept: string;
  hero: MediaItem;
  pieces: Piece[];
}

export interface ProcessImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'dye' | 'crochet' | 'modeling' | 'time';
}

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export interface Piece {
  id: string;
  name: string;
  description: string;
  concept: string;
  image: string;
  gallery: string[];
  colorOrigin: {
    name: string;
    description: string;
  };
  process: ProcessStep[];
  materials: string[];
  care: string[];
  collectionId: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  concept: string;
  image: string;
  pieces: string[]; // array of piece IDs
}

export interface ProcessImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'dye' | 'crochet' | 'modeling' | 'time';
}

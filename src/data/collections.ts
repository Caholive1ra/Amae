import { Collection } from '@/types';
import collectionHero from '@/assets/collection-hero.jpg';

export const collections: Collection[] = [
  {
    id: 'memoria-da-terra',
    name: 'Memória da Terra',
    description: 'Uma coleção que traduz o tempo da natureza em peças vivas',
    concept: 'Cada peça desta coleção carrega as camadas da terra, o tempo dos pigmentos naturais e a memória do fazer artesanal. Inspirada na Chapada Diamantina, onde o vento esculpe a rocha e a água desenha os vales, esta coleção celebra a impermanência como forma de beleza.',
    image: collectionHero,
    pieces: ['vestido-sol-poente', 'top-crochet-areia', 'calca-cafe'],
  },
];

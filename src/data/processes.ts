import { ProcessImage } from '@/types';
import processDye from '@/assets/process-dye.jpg';
import processCrochet from '@/assets/process-crochet.jpg';
import collectionHero from '@/assets/collection-hero.jpg';
import aboutAtelier from '@/assets/atelie-novo.jpeg';

export const processImages: ProcessImage[] = [
  {
    id: 'tingimento-curcuma',
    title: 'Tingimento com Cúrcuma',
    description: 'O dourado solar da cúrcuma transforma o tecido em luz. Cada banho é um ritual de paciência, onde a cor nasce do tempo e da temperatura.',
    image: processDye,
    category: 'dye',
  },
  {
    id: 'croche-artesanal',
    title: 'Crochê Artesanal',
    description: 'Cada ponto é uma respiração. O crochê carrega o tempo das mãos que o fazem, transformando linha em forma, técnica em afeto.',
    image: processCrochet,
    category: 'crochet',
  },
  {
    id: 'modelagem-consciente',
    title: 'Modelagem Consciente',
    description: 'Pensar cada corte como um gesto de cuidado. A modelagem respeita o corpo e o tecido, criando peças que abraçam sem apertar.',
    image: collectionHero,
    category: 'modeling',
  },
  {
    id: 'tempo-natural',
    title: 'O Tempo da Natureza',
    description: 'Não há pressa no fazer artesanal. Cada peça leva o tempo que precisa para nascer, respeitando o ritmo natural da criação.',
    image: aboutAtelier,
    category: 'time',
  },
];

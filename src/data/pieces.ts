import { Piece } from '@/types';
import piece1 from '@/assets/piece-1.jpg';
import piece2 from '@/assets/piece-2.jpg';
import piece3 from '@/assets/piece-3.jpg';
import processDye from '@/assets/process-dye.jpg';
import processCrochet from '@/assets/process-crochet.jpg';

export const pieces: Piece[] = [
  {
    id: 'vestido-sol-poente',
    name: 'Vestido Sol Poente',
    description: 'Vestido fluido tingido naturalmente com hibisco',
    concept: 'Como o sol que se põe sobre a Chapada, este vestido carrega a transição entre a luz e a sombra. Tingido com hibisco, cada tom de terracotta e dourado conta a história de uma flor que se tornou cor.',
    image: piece1,
    gallery: [piece1, processDye],
    colorOrigin: {
      name: 'Hibisco',
      description: 'O vermelho bordô profundo do hibisco traz consigo a memória das flores que florescem ao entardecer. Cada banho de cor é único, criando variações sutis que celebram a singularidade de cada peça.',
    },
    process: [
      {
        title: 'Colheita',
        description: 'Flores de hibisco são colhidas no momento ideal de pigmentação',
      },
      {
        title: 'Extração',
        description: 'Fervura lenta para extrair toda a essência da cor',
      },
      {
        title: 'Tingimento',
        description: 'Banhos repetidos até alcançar o tom desejado',
      },
      {
        title: 'Fixação',
        description: 'Processo natural que garante durabilidade da cor',
      },
    ],
    materials: ['Algodão orgânico', 'Tingimento natural de hibisco', 'Fios de algodão'],
    care: [
      'Lavar à mão com sabão neutro',
      'Evitar exposição prolongada ao sol',
      'Secar à sombra',
      'Passar em temperatura baixa',
    ],
    collectionId: 'memoria-da-terra',
  },
  {
    id: 'top-crochet-areia',
    name: 'Top Crochê Areia',
    description: 'Top artesanal em crochê com algodão natural',
    concept: 'Cada ponto deste top é uma respiração, um gesto de paciência e amor. O crochê artesanal carrega o tempo das mãos que o fizeram, transformando fio em forma, técnica em poesia.',
    image: piece2,
    gallery: [piece2, processCrochet],
    colorOrigin: {
      name: 'Natural',
      description: 'A cor natural do algodão orgânico, sem tingimento. É a cor da terra em seu estado mais puro, um bege suave que celebra a simplicidade e a beleza do que não foi alterado.',
    },
    process: [
      {
        title: 'Seleção do fio',
        description: 'Algodão orgânico de alta qualidade',
      },
      {
        title: 'Desenvolvimento do ponto',
        description: 'Criação de padrão exclusivo',
      },
      {
        title: 'Crochê artesanal',
        description: 'Cada peça leva dias para ser concluída',
      },
      {
        title: 'Acabamento',
        description: 'Cuidado em cada detalhe final',
      },
    ],
    materials: ['Algodão orgânico 100%', 'Crochê artesanal'],
    care: [
      'Lavar à mão delicadamente',
      'Não torcer',
      'Secar na horizontal',
      'Não usar alvejante',
    ],
    collectionId: 'memoria-da-terra',
  },
  {
    id: 'calca-cafe',
    name: 'Calça Café',
    description: 'Calça ampla tingida naturalmente com café',
    concept: 'O aroma e a cor do café transformados em tecido. Esta calça carrega o calor da terra brasileira, o marrom quente e acolhedor que nos conecta com nossas raízes.',
    image: piece3,
    gallery: [piece3, processDye],
    colorOrigin: {
      name: 'Café',
      description: 'Grãos de café torrados criam um marrom profundo e aromático. O processo de tingimento preserva parte do aroma, fazendo desta peça uma experiência sensorial completa.',
    },
    process: [
      {
        title: 'Preparo do café',
        description: 'Grãos moídos e fervidos para máxima extração',
      },
      {
        title: 'Mordente natural',
        description: 'Preparação do tecido para receber a cor',
      },
      {
        title: 'Tingimento',
        description: 'Múltiplos banhos para profundidade de cor',
      },
      {
        title: 'Secagem',
        description: 'Processo lento para fixação ideal',
      },
    ],
    materials: ['Linho natural', 'Tingimento de café', 'Elástico natural na cintura'],
    care: [
      'Lavar à mão ou máquina ciclo delicado',
      'Usar sabão neutro',
      'Secar à sombra',
      'Passar com ferro morno',
    ],
    collectionId: 'memoria-da-terra',
  },
];

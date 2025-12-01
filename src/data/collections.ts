import { Collection } from '@/types';
import collectionHero from '@/assets/collection-hero.jpg';
import piece1 from '@/assets/piece-1.jpg';
import piece2 from '@/assets/piece-2.jpg';
import piece3 from '@/assets/piece-3.jpg';
import processDye from '@/assets/process-dye.jpg';
import processCrochet from '@/assets/process-crochet.jpg';

export const collections: Collection[] = [
  {
    id: 'memoria-da-terra',
    slug: 'memoria-da-terra',
    name: 'Memória da Terra',
    description: 'Onde o tempo da natureza se transforma em veste',
    concept: 'Cada peça carrega as camadas da terra — sedimentos de cor, erosão do tempo, a paciência do pigmento. Inspirada na Chapada Diamantina, onde a rocha guarda memória e a água esculpe vales, esta coleção celebra a impermanência como a mais bela forma de existir.',
    hero: {
      type: 'image',
      src: collectionHero,
      alt: 'Coleção Memória da Terra',
      caption: 'Vestes vivas que carregam o tempo'
    },
    pieces: [
      {
        id: 'vestido-sol-poente',
        slug: 'vestido-sol-poente',
        name: 'Vestido Sol Poente',
        description: 'Vestido fluido tingido naturalmente com hibisco',
        collection: 'Memória da Terra',
        conceptText: 'Como o sol que se põe sobre a Chapada, este vestido carrega a transição entre luz e sombra. O hibisco entrega seu vermelho bordô profundo — a memória das flores que florescem ao entardecer. Cada banho de cor é um ato de entrega: a planta à água, a água ao tecido, o tecido ao tempo.',
        colorOrigin: {
          name: 'Hibisco',
          description: 'As flores são colhidas no auge da pigmentação. Na fervura lenta, liberam tons que vão do rosa ao bordô profundo. O tingimento é feito em camadas — banhos repetidos até alcançar a intensidade desejada. Cada peça é única, pois a cor reage ao tempo, à temperatura e à própria memória da fibra.'
        },
        materialsCare: 'Tecido de algodão orgânico tingido com hibisco natural. Lavar à mão com sabão neutro. Evitar exposição prolongada ao sol. Secar à sombra. O desbotamento natural faz parte da vida da peça — é sua memória sendo escrita.',
        processSteps: [
          {
            title: 'Colheita',
            description: 'As flores de hibisco são colhidas no momento exato de pigmentação máxima, respeitando o ciclo da planta.',
            media: [{ type: 'image', src: processDye, alt: 'Flores de hibisco' }]
          },
          {
            title: 'Extração',
            description: 'Fervura lenta e cuidadosa para extrair toda a essência cromática da flor, preservando sua intensidade.',
          },
          {
            title: 'Tingimento',
            description: 'Banhos repetidos e pacientes. O tecido absorve a cor em camadas, criando profundidade e variação única.',
          },
          {
            title: 'Fixação',
            description: 'Processo natural que garante a durabilidade da cor, respeitando o tempo de cura do pigmento.',
          }
        ],
        gallery: [
          { type: 'image', src: piece1, alt: 'Vestido Sol Poente', caption: 'Vista frontal' },
          { type: 'image', src: processDye, alt: 'Processo de tingimento', caption: 'Tingimento natural com hibisco' }
        ],
        tags: ['tingimento natural', 'hibisco', 'algodão orgânico', 'vestido'],
        image: piece1
      },
      {
        id: 'top-crochet-areia',
        slug: 'top-crochet-areia',
        name: 'Top Crochê Areia',
        description: 'Top artesanal em crochê com algodão natural',
        collection: 'Memória da Terra',
        conceptText: 'Cada ponto deste top é uma respiração. O crochê artesanal carrega o tempo das mãos que o fizeram — gesto repetido, laçada sobre laçada, paciência transformada em forma. A cor é a própria cor do algodão: bege suave, terroso, honesto. Não há tingimento. Apenas a verdade da fibra.',
        colorOrigin: {
          name: 'Natural',
          description: 'A cor natural do algodão orgânico em seu estado mais puro — um bege que carrega a memória da terra onde cresceu. Sem tingimento, sem intervenção. É a beleza do que não foi alterado, do que existe em sua essência.'
        },
        materialsCare: 'Algodão orgânico 100% trabalhado à mão em crochê. Lavar delicadamente à mão, sem torcer. Secar na horizontal para manter a forma. Cada ponto foi feito com amor e paciência.',
        processSteps: [
          {
            title: 'Seleção do fio',
            description: 'Algodão orgânico de alta qualidade, sem branqueamento, na cor natural da fibra.',
          },
          {
            title: 'Desenvolvimento do ponto',
            description: 'Criação de padrão exclusivo que equilibra estrutura e leveza, respiração e forma.',
            media: [{ type: 'image', src: processCrochet, alt: 'Pontos de crochê' }]
          },
          {
            title: 'Crochê artesanal',
            description: 'Cada peça leva dias para ser concluída. Ponto a ponto, com atenção total ao gesto.',
          },
          {
            title: 'Acabamento',
            description: 'Cuidado minucioso em cada detalhe: amarrações invisíveis, simetria respeitada.',
          }
        ],
        gallery: [
          { type: 'image', src: piece2, alt: 'Top Crochê Areia', caption: 'Vista frontal' },
          { type: 'image', src: processCrochet, alt: 'Processo de crochê', caption: 'Crochê artesanal' }
        ],
        tags: ['crochê', 'algodão orgânico', 'artesanal', 'natural'],
        image: piece2
      },
      {
        id: 'calca-cafe',
        slug: 'calca-cafe',
        name: 'Calça Café',
        description: 'Calça ampla tingida naturalmente com café',
        collection: 'Memória da Terra',
        conceptText: 'O aroma do café transformado em cor. Esta calça carrega o calor da terra brasileira — o marrom quente que vem do grão torrado, moído, fervido. O tingimento preserva parte do aroma: vestir esta peça é uma experiência sensorial completa. É memória olfativa, é raiz, é pertencimento.',
        colorOrigin: {
          name: 'Café',
          description: 'Grãos de café torrados são moídos e fervidos para máxima extração de cor. O resultado é um marrom profundo, aromático e envolvente. O processo de tingimento é demorado — múltiplos banhos até que a cor se fixe na fibra, criando tons que vão do caramelo ao marrom escuro.'
        },
        materialsCare: 'Tecido de linho natural tingido com café. Lavar à mão ou em ciclo delicado com sabão neutro. Secar à sombra. Passar com ferro morno. A cor amadurece com o uso — cada lavagem revela novas nuances.',
        processSteps: [
          {
            title: 'Preparo do café',
            description: 'Grãos de café são torrados, moídos e fervidos para extrair a máxima concentração de cor e aroma.',
          },
          {
            title: 'Mordente natural',
            description: 'O tecido é preparado com mordente à base de plantas para receber e fixar a cor do café.',
          },
          {
            title: 'Tingimento',
            description: 'Múltiplos banhos em diferentes temperaturas para criar profundidade e fixação ideal da cor.',
            media: [{ type: 'image', src: processDye, alt: 'Tingimento com café' }]
          },
          {
            title: 'Secagem',
            description: 'Processo lento ao ar livre, protegido do sol direto, para que a cor se estabilize naturalmente.',
          }
        ],
        gallery: [
          { type: 'image', src: piece3, alt: 'Calça Café', caption: 'Vista frontal' },
          { type: 'image', src: processDye, alt: 'Tingimento com café', caption: 'Processo de tingimento natural' }
        ],
        tags: ['tingimento natural', 'café', 'linho', 'calça ampla'],
        image: piece3
      }
    ]
  }
];

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
    description: 'a impermanência não é uma perda, mas uma transformação contínua, Cada instante, ao desaparecer, deixa marcas e também memórias que se integram em um ciclo de transformação.',
    concept: 'a impermanência não é uma perda, mas uma transformação contínua, Cada instante, ao desaparecer, deixa marcas e também memórias que se integram em um ciclo de transformação.',
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
      },
      {
        id: 'vestido-natural',
        slug: 'vestido-natural',
        name: 'Vestido Natural',
        description: 'Vestido leve tingido com camomila e ch? verde',
        collection: 'Mem?ria da Terra',
        conceptText: 'A leveza do campo transformada em gesto. O Vestido Natural mistura camadas transl?cidas e pigmentos sussurrados para lembrar o frescor do amanhecer.',
        colorOrigin: {
          name: 'Camomila e ch? verde',
          description: 'Flores e folhas s?o maceradas em infus?es demoradas, liberando tons dourados suaves e verdes delicados. Cada banho adiciona transpar?ncia e profundidade.'
        },
        materialsCare: 'Voil de algod?o org?nico tingido com infus?es bot?nicas. Lavar ? m?o com sab?o neutro e secar ? sombra para preservar a suavidade do pigmento.',
        processSteps: [
          {
            title: 'Colheita bot?nica',
            description: 'Camomila e ch? verde s?o colhidos ainda frescos, no primeiro sol da manh?.'
          },
          {
            title: 'Infus?o lenta',
            description: 'Flores e folhas descansam na ?gua aquecida por horas, soltando toda a tonalidade dourada.',
            media: [{ type: 'image', src: processDye, alt: 'Infus?o bot?nica' }]
          },
          {
            title: 'Tingimento em camadas',
            description: 'O tecido mergulha diversas vezes, absorvendo tons suaves que lembram o orvalho.'
          },
          {
            title: 'Secagem ao vento',
            description: 'O vestido seca suspenso, permitindo que o ar molde o caimento final.'
          }
        ],
        gallery: [
          { type: 'image', src: piece1, alt: 'Vestido Natural', caption: 'Vista frontal' },
          { type: 'image', src: processDye, alt: 'Pigmento bot?nico', caption: 'Pigmentos em infus?o' }
        ],
        tags: ['vestido', 'bot?nico', 'camadas', 'leveza'],
        image: piece1
      },
      {
        id: 'blusa-terra',
        slug: 'blusa-terra',
        name: 'Blusa Terra',
        description: 'Blusa estruturada tingida com argila avermelhada',
        collection: 'Mem?ria da Terra',
        conceptText: 'Feita para lembrar o calor do solo seco ao entardecer, a Blusa Terra envolve o corpo com texturas org?nicas e contrastes sutis.',
        colorOrigin: {
          name: 'Argila e urucum',
          description: 'Argilas avermelhadas se misturam ao urucum para gerar um tom terroso profundo e cintilante.'
        },
        materialsCare: 'Linho org?nico tratado com argila natural. Lavar ? m?o com ?gua fria e secar ? sombra para preservar os minerais.',
        processSteps: [
          {
            title: 'Sele??o da argila',
            description: 'Argila coletada em pequenos lotes, peneirada e hidratada.'
          },
          {
            title: 'Mistura com urucum',
            description: 'O pigmento recebe urucum macerado, criando reflexos quentes.'
          },
          {
            title: 'Aplica??o manual',
            description: 'A argila ? aplicada como pintura, camada ap?s camada, respeitando a trama.',
            media: [{ type: 'image', src: processCrochet, alt: 'Textura artesanal' }]
          },
          {
            title: 'Cura ao sol suave',
            description: 'A pe?a descansa em local arejado, permitindo fixa??o natural.'
          }
        ],
        gallery: [
          { type: 'image', src: piece2, alt: 'Blusa Terra', caption: 'Vista frontal' },
          { type: 'image', src: processCrochet, alt: 'Textura em destaque', caption: 'Camadas de argila' }
        ],
        tags: ['blusa', 'argila', 'linho', 'textura'],
        image: piece2
      },
      {
        id: 'saia-memoria',
        slug: 'saia-memoria',
        name: 'Saia Mem?ria',
        description: 'Saia plissada tingida em camadas de barro vermelho',
        collection: 'Mem?ria da Terra',
        conceptText: 'Camadas que guardam hist?rias. A Saia Mem?ria registra cada mergulho no barro como um arquivo vivo de tempo.',
        colorOrigin: {
          name: 'Barro vermelho',
          description: 'O barro ? dilu?do, filtrado e aplicado em banhos sucessivos que criam grada??es intensas.'
        },
        materialsCare: 'Algod?o org?nico com acabamento leve. Recomenda-se lavar ? m?o e secar estendida para manter as pregas.',
        processSteps: [
          {
            title: 'Preparando o barro',
            description: 'Barro vermelho ? dissolvido e filtrado para remover impurezas.'
          },
          {
            title: 'Banhos graduais',
            description: 'O tecido mergulha em diferentes concentra??es para criar profundidade de cor.'
          },
          {
            title: 'Plissagem manual',
            description: 'Cada prega ? moldada ? m?o e fixada com vapor.'
          },
          {
            title: 'Descanso final',
            description: 'A saia repousa ao vento, consolidando cor e movimento.',
            media: [{ type: 'image', src: collectionHero, alt: 'Descanso das pe?as' }]
          }
        ],
        gallery: [
          { type: 'image', src: piece3, alt: 'Saia Mem?ria', caption: 'Vista frontal' },
          { type: 'image', src: collectionHero, alt: 'Detalhe das pregas', caption: 'Pregas em destaque' }
        ],
        tags: ['saia', 'barro', 'pregas', 'mem?ria'],
        image: piece3
      }

    ]
  }
];

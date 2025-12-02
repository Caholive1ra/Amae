import blusaMangaUnicaHibisco from '@/assets/blusa manga única hibisco + calça reta babados de crochê café.jpg';
import calcaRetaBabadosCrocheCafe from '@/assets/Calça de babados com feijão em seda + blusa gola alta Fuxico.jpg';
import blusaRegataNervurasCafe from '@/assets/Vestido com croche.jpg';
import saiaComCamadasFeijao from '@/assets/blusa ombro em camadas feijão + calça com elastico fluida + lenço de ecoprint.jpg';
import blusaOmbroCamadasFeijao from '@/assets/Top regulável hibisco feito com zanzibar + calça regulável em viscolinho.jpg';
import calcaComElasticoFluida from '@/assets/blusa regata nervuras café + saia com camadas feijão.jpg';

export type Product = {
  id: string;
  name: string;
  image: string;
};

export const allProducts: Product[] = [
  { id: 'blusa-manga-unica-hibisco', name: 'Blusa Manga Unica Hibisco', image: blusaMangaUnicaHibisco },
  { id: 'calca-reta-babados-croche-cafe', name: 'Calca Reta Babados de Croche Cafe', image: calcaRetaBabadosCrocheCafe },
  { id: 'blusa-regata-nervuras-cafe', name: 'Blusa Regata Nervuras Cafe', image: blusaRegataNervurasCafe },
  { id: 'saia-com-camadas-feijao', name: 'Saia com Camadas Feijao', image: saiaComCamadasFeijao },
  { id: 'blusa-ombro-em-camadas-feijao', name: 'Blusa Ombro em Camadas Feijao', image: blusaOmbroCamadasFeijao },
  { id: 'calca-com-elastico-fluida', name: 'Calca com Elastico Fluida', image: calcaComElasticoFluida },
];

export const featuredPieces = allProducts;

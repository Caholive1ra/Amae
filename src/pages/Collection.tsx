import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import InterestModal from '@/components/InterestModal';

// Imagens dos looks
import look1 from '@/assets/blusa manga única hibisco + calça reta babados de crochê café.jpg';
import look2 from '@/assets/Calça de babados com feijão em seda + blusa gola alta Fuxico.jpg';
import look3 from '@/assets/Vestido com croche.jpg';
import look4 from '@/assets/blusa ombro em camadas feijão + calça com elastico fluida + lenço de ecoprint.jpg';
import look5 from '@/assets/Top regulável hibisco feito com zanzibar + calça regulável em viscolinho.jpg';
import look6 from '@/assets/blusa regata nervuras café + saia com camadas feijão.jpg';

type Look = {
  id: string;
  name: string;
  image: string;
  description: string;
};

const looks: Look[] = [
  {
    id: 'look-1',
    name: 'Blusa Manga Única Hibisco + Calça Reta Babados de Crochê Café',
    image: look1,
    description: 'Look completo que celebra a impermanência através de tingimentos naturais. A blusa em algodão orgânico tingido com hibisco oferece um toque fresco e delicado, enquanto a calça com babados em crochê tingida com café traz movimento e textura. Cada peça carrega a memória da terra e o tempo do fazer artesanal.',
  },
  {
    id: 'look-2',
    name: 'Calça de Babados com Feijão em Seda + Blusa Gola Alta Fuxico',
    image: look2,
    description: 'Conjunto que une a leveza da seda tingida naturalmente com feijão preto e o cuidado artesanal do fuxico. A calça com babados cria movimento suave, enquanto a blusa gola alta oferece elegância e conforto. Um look que honra o tempo e a natureza em cada detalhe.',
  },
  {
    id: 'look-3',
    name: 'Vestido com Crochê',
    image: look3,
    description: 'Vestido único que combina modelagem fluida com detalhes em crochê artesanal. Cada ponto é feito à mão, criando texturas que respiram e se movem com o corpo. Peça que celebra a impermanência e o cuidado do fazer manual, perfeita para momentos de pausa e presença.',
  },
  {
    id: 'look-4',
    name: 'Blusa Ombro em Camadas Feijão + Calça com Elástico Fluida + Lenço de Ecoprint',
    image: look4,
    description: 'Look completo que explora diferentes técnicas de tingimento natural. A blusa com ombro escultórico em linho tingido com feijão preto, a calça fluida em viscolinho botânico e o lenço com ecoprint criam uma harmonia de texturas e cores que contam histórias da terra.',
  },
  {
    id: 'look-5',
    name: 'Top Regulável Hibisco feito com Zanzibar + Calça Regulável em Viscolinho',
    image: look5,
    description: 'Conjunto versátil e confortável que combina o top regulável tingido com hibisco em tecido zanzibar com a calça regulável em viscolinho botânico. Look que acompanha o movimento do corpo e oferece liberdade para viver com presença e suavidade.',
  },
  {
    id: 'look-6',
    name: 'Blusa Regata Nervuras Café + Saia com Camadas Feijão',
    image: look6,
    description: 'Conjunto que celebra a simplicidade e o cuidado artesanal. A blusa regata com nervuras feitas à mão em algodão tingido com café por 48 horas, combinada com a saia de camadas leves tingida com feijão preto. Look que respira e se move com naturalidade.',
  },
];

const Collection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState('');

  const handleOrderClick = (lookName: string) => {
    setSelectedLook(lookName);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Coleção"
        description="Coleção Memória da Terra - looks únicos tingidos com pigmentos naturais e feitos à mão com amor e tempo"
      />
      
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-24"
          >
            <h1 className="text-6xl md:text-7xl font-playfair text-[#4C345A] mb-8 leading-tight">
              Coleção
            </h1>
            <p className="text-xl text-[#8B7A6B] max-w-2xl mx-auto font-light">
              Looks únicos que carregam a memória da terra e o tempo do fazer artesanal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {looks.map((look, index) => (
              <LookCard key={look.id} look={look} index={index} onOrderClick={handleOrderClick} />
            ))}
          </div>
        </div>
      </div>

      <InterestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pieceName={selectedLook}
      />
    </>
  );
};

interface LookCardProps {
  look: Look;
  index: number;
  onOrderClick: (lookName: string) => void;
}

const LookCard = ({ look, index, onOrderClick }: LookCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="flex flex-col"
    >
      <div className="group block hover-lift mb-6">
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] rounded-lg overflow-hidden shadow-soft image-zoom">
          <img
            src={look.image}
            alt={look.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 gradient-overlay-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      <h3 className="text-2xl md:text-3xl font-playfair text-[#4C345A] mb-4">
        {look.name}
      </h3>
      <p className="text-base md:text-lg text-[#8B7A6B] font-light mb-6 leading-relaxed">
        {look.description}
      </p>
      <Button 
        onClick={() => onOrderClick(look.name)}
        className="w-full shadow-soft hover-lift"
        size="lg"
      >
        Encomendar
      </Button>
    </motion.div>
  );
};

export default Collection;


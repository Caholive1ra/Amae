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
    name: 'Blusa Manga Única Hibisco e Calça Reta Babados de Crochê Café',
    image: look1,
    description: 'Confeccionado em tecidos 100% naturais. A blusa em seda tingido com hibisco oferece um toque fresco e delicado, enquanto a calça com babados em crochê tingida com café traz movimento e textura. Insumos: Hibisco- Reutilizavel, Borra de café - reaproveitada.',
  },
  {
    id: 'look-2',
    name: 'Calça de Babados com Feijão em Seda e Blusa Gola Alta Fuxico',
    image: look2,
    description: 'Confeccionado em tecidos 100% naturais. A blusa de tencel tingida com cebola e cúrcurma, enquanto a calça em camadas tingida com feijão. Insumos: Feijão, Cúrcuma, Casca de Cebola Amarela - reaproveitada.',
  },
  {
    id: 'look-3',
    name: 'Vestido com Crochê',
    image: look3,
    description: 'Confeccionado em tecidos 100% naturais. O vestido em algodão tingido com cebola roxa, enquanto o crochê tinto com carvão. Insumos: Carvão,Cebola Roxa - reaproveitada.',
  },
  {
    id: 'look-4',
    name: 'Blusa Ombro em Camadas Feijão, Calça com Elástico Fluida e Lenço de Tiedye',
    image: look4,
    description: 'Confeccionado em tecidos 100% naturais. A blusa em viscolinho com algodão tingido com feijão, enquanto a calça em tencel tingida com cebola roxa e o lenço em algodão é uma mistura de pigmentos naturais. Insumos: Feijão, Cebola roxa - reaproveitada e Hibisco.',
  },
  {
    id: 'look-5',
    name: 'Top Regulável Hibisco e Calça Regulável',
    image: look5,
    description: 'Confeccionado em tecidos 100% naturais. O top em tencel tingido com hibisco , enquanto a calça regulável tingida com cúrcuma e casca de cebola amarela. Insumos: Hibisco- Reutilizavel, Casca de cebola e Cúrcuma - reaproveitada.',
  },
  {
    id: 'look-6',
    name: 'Blusa Regata Nervuras Café e Saia com Camadas Feijão',
    image: look6,
    description: 'Confeccionado em tecidos 100% naturais. A blusa em algodão tingido com café, enquanto a saia com camadas tinta com feijão. Insumos: Feijão, Café - reaproveitada.',
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
      
      <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-24"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-[#4C345A] mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              Coleção
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#8B7A6B] max-w-2xl mx-auto font-light px-4">
              Looks únicos que carregam a memória da terra e o tempo do fazer artesanal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
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
      <div className="group block hover-lift mb-4 sm:mb-6">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-soft image-zoom">
          <img
            src={look.image}
            alt={look.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 gradient-overlay-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair text-[#4C345A] mb-3 sm:mb-4">
        {look.name}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-[#8B7A6B] font-light mb-4 sm:mb-6 leading-relaxed">
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


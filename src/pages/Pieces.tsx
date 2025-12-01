import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import InterestModal from '@/components/InterestModal';
import type { Piece } from '@/types';
import { allProducts as originalProducts } from '@/data/products';

import product1 from '@/assets/blusa manga única hibisco + calça reta babados de crochê café.jpg';
import product2 from '@/assets/Calça de babados com feijão em seda + blusa gola alta Fuxico.jpg';
import product3 from '@/assets/Vestido com croche.jpg';
import product4 from '@/assets/blusa ombro em camadas feijão + calça com elastico fluida + lenço de ecoprint.jpg';
import product5 from '@/assets/Top regulável hibisco feito com zanzibar + calça regulável em viscolinho.jpg';
import product6 from '@/assets/blusa regata nervuras café + saia com camadas feijão.jpg';

const Pieces = () => {
  const pieces = originalProducts;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState('');

  const handleOrderClick = (pieceName: string) => {
    setSelectedPiece(pieceName);
    setIsModalOpen(true);
  };

  const updatedPieces = pieces.map((piece, index) => {
    const newImages = [product1, product2, product3, product4, product5, product6];
    if (index < newImages.length) {
      return { ...piece, image: newImages[index] };
    }
    return piece;
  });

  const allProducts = updatedPieces;

  return (
    <>
      <SEO
        title="Peças"
        description="Cada peça é única, carregando a memória da terra e o tempo do fazer artesanal"
      />
      
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-24"
          >
            <h1 className="text-6xl md:text-7xl font-playfair text-foreground mb-8 leading-tight">
              Peças
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Cada peça é única, carregando a memória da terra e o tempo do fazer artesanal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {allProducts.map((piece, index) => (
              <PieceCard key={piece.id} piece={piece} index={index} onOrderClick={handleOrderClick} />
            ))}
          </div>
        </div>
      </div>

      <InterestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pieceName={selectedPiece}
      />
    </>
  );
};

interface PieceCardProps {
  piece: Piece;
  index: number;
  onOrderClick: (pieceName: string) => void;
}

const PieceCard = ({ piece, index, onOrderClick }: PieceCardProps) => {
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
      <Link
        to={`/peca/${piece.id}`}
        className="group block hover-lift mb-4"
      >
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-soft image-zoom">
          <img
            src={piece.image}
            alt={piece.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 gradient-overlay-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
      <h3 className="text-2xl md:text-3xl font-playfair text-foreground mb-4">
        {piece.name}
      </h3>
      <Button 
        onClick={() => onOrderClick(piece.name)}
        className="w-full shadow-soft hover-lift"
        size="lg"
      >
        Encomendar
      </Button>
    </motion.div>
  );
};

export default Pieces;

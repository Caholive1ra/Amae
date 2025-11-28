import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { collections } from '@/data/collections';
import SEO from '@/components/SEO';
import type { Piece } from '@/types';

const Pieces = () => {
  const pieces = collections.flatMap(c => c.pieces);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {pieces.map((piece, index) => (
              <PieceCard key={piece.id} piece={piece} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface PieceCardProps {
  piece: Piece;
  index: number;
}

const PieceCard = ({ piece, index }: PieceCardProps) => {
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
    >
      <Link
        to={`/peca/${piece.id}`}
        className="group block hover-lift"
      >
        <div className="relative h-[600px] rounded-lg overflow-hidden mb-6 shadow-soft image-zoom">
          <img
            src={piece.image}
            alt={piece.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 gradient-overlay-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-playfair text-foreground group-hover:text-accent transition-colors duration-300">
            {piece.name}
          </h3>
          <p className="text-muted-foreground font-light">
            {piece.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Pieces;

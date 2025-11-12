import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { collections } from '@/data/collections';
import InterestModal from '@/components/InterestModal';
import Timeline from '@/components/Timeline';
import MediaCarousel from '@/components/MediaCarousel';
import SEO from '@/components/SEO';

const PieceDetail = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find piece in collections
  const piece = collections
    .flatMap(c => c.pieces)
    .find((p) => p.id === id);

  if (!piece) {
    return (
      <>
        <SEO
          title="Peça não encontrada"
          description="Esta peça não está disponível"
        />
        <div className="min-h-screen pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-playfair text-foreground mb-8">Peça não encontrada</h1>
            <Button asChild className="shadow-soft">
              <Link to="/pecas">Voltar para Peças</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={piece.name}
        description={piece.description}
        image={piece.image}
        type="product"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": piece.name,
            "description": piece.conceptText,
            "image": piece.image,
            "creator": {
              "@type": "Organization",
              "name": "Amaé"
            },
            "keywords": piece.tags?.join(', ')
          })}
        </script>
      </SEO>

      <div className="min-h-screen pt-32 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Button asChild variant="ghost" size="sm" className="hover:text-accent">
          <Link to="/pecas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[75vh] mb-24">
        <div className="image-zoom h-full">
          <img
            src={piece.image}
            alt={piece.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 gradient-overlay-dark" />
        <div className="absolute bottom-16 left-0 right-0">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl font-playfair text-background mb-4 leading-tight"
            >
              {piece.name}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Concept */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-playfair text-foreground mb-8">Conceito</h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            {piece.conceptText}
          </p>
        </motion.section>

        {/* Color Origin */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-playfair text-foreground mb-8">
            Origem da Cor: {piece.colorOrigin.name}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            {piece.colorOrigin.description}
          </p>
        </motion.section>

        {/* Process */}
        <section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-playfair text-foreground mb-12"
          >
            Processo
          </motion.h2>
          <Timeline steps={piece.processSteps} />
        </section>

        {/* Gallery */}
        {piece.gallery.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-playfair text-foreground mb-12">Galeria</h2>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-soft-lg">
              <MediaCarousel items={piece.gallery} />
            </div>
          </motion.section>
        )}

        {/* Materials & Care */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-playfair text-foreground mb-8">Materiais e Cuidados</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            {piece.materialsCare}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 border-t border-border/50"
        >
          <h3 className="text-3xl font-playfair text-foreground mb-6">
            Interessado nesta peça?
          </h3>
          <p className="text-muted-foreground mb-8 font-light text-lg">
            Entre em contato para saber mais sobre disponibilidade
          </p>
          <Button size="lg" onClick={() => setIsModalOpen(true)} className="shadow-soft-lg hover-lift">
            Registrar Interesse
          </Button>
        </motion.div>
      </div>

      <InterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pieceName={piece.name}
      />
      </div>
    </>
  );
};

export default PieceDetail;

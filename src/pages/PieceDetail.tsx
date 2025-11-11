import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { pieces } from '@/data/pieces';
import InterestModal from '@/components/InterestModal';

const PieceDetail = () => {
  const { id } = useParams();
  const piece = pieces.find((p) => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!piece) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-playfair text-foreground mb-8">Peça não encontrada</h1>
          <Button asChild className="shadow-soft">
            <Link to="/pecas">Voltar para Peças</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
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
            <ScrollReveal>
              <h1 className="text-6xl md:text-7xl font-playfair text-background mb-4 leading-tight">
                {piece.name}
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Concept */}
        <ScrollReveal>
          <section className="mb-24">
            <h2 className="text-4xl font-playfair text-foreground mb-8">Conceito</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              {piece.concept}
            </p>
          </section>
        </ScrollReveal>

        {/* Color Origin */}
        <ScrollReveal>
          <section className="mb-24">
            <h2 className="text-4xl font-playfair text-foreground mb-8">
              Origem da Cor: {piece.colorOrigin.name}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              {piece.colorOrigin.description}
            </p>
          </section>
        </ScrollReveal>

        {/* Process */}
        <ScrollReveal>
          <section className="mb-24">
            <h2 className="text-4xl font-playfair text-foreground mb-12">Processo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {piece.process.map((step, index) => (
                <Card key={index} className="border-border/50 shadow-soft hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-playfair text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Gallery */}
        <ScrollReveal>
          <section className="mb-24">
            <h2 className="text-4xl font-playfair text-foreground mb-12">Galeria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {piece.gallery.map((image, index) => (
                <div key={index} className="relative h-[500px] rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                  <img
                    src={image}
                    alt={`${piece.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Materials & Care */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <ScrollReveal>
            <section>
              <h2 className="text-3xl font-playfair text-foreground mb-8">Materiais</h2>
              <ul className="space-y-3">
                {piece.materials.map((material, index) => (
                  <li key={index} className="text-muted-foreground flex items-start font-light text-lg">
                    <span className="mr-3 text-accent">•</span>
                    {material}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section>
              <h2 className="text-3xl font-playfair text-foreground mb-8">Cuidados</h2>
              <ul className="space-y-3">
                {piece.care.map((instruction, index) => (
                  <li key={index} className="text-muted-foreground flex items-start font-light text-lg">
                    <span className="mr-3 text-accent">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center py-16 border-t border-border/50">
            <h3 className="text-3xl font-playfair text-foreground mb-6">
              Interessado nesta peça?
            </h3>
            <p className="text-muted-foreground mb-8 font-light text-lg">
              Entre em contato para saber mais sobre disponibilidade
            </p>
            <Button size="lg" onClick={() => setIsModalOpen(true)} className="shadow-soft-lg hover-lift">
              Registrar Interesse
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <InterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pieceName={piece.name}
      />
    </div>
  );
};

export default PieceDetail;

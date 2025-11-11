import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-light text-foreground mb-6">Peça não encontrada</h1>
          <Button asChild>
            <Link to="/pecas">Voltar para Peças</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link to="/pecas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[70vh] mb-16">
        <img
          src={piece.image}
          alt={piece.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-12 left-0 right-0">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-light text-background mb-4">
              {piece.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Concept */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-6">Conceito</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {piece.concept}
          </p>
        </section>

        {/* Color Origin */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Origem da Cor: {piece.colorOrigin.name}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {piece.colorOrigin.description}
          </p>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-8">Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {piece.process.map((step, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-light">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-foreground mb-8">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {piece.gallery.map((image, index) => (
              <div key={index} className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${piece.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Care */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section>
            <h2 className="text-2xl font-light text-foreground mb-6">Materiais</h2>
            <ul className="space-y-2">
              {piece.materials.map((material, index) => (
                <li key={index} className="text-muted-foreground flex items-start">
                  <span className="mr-2">•</span>
                  {material}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light text-foreground mb-6">Cuidados</h2>
            <ul className="space-y-2">
              {piece.care.map((instruction, index) => (
                <li key={index} className="text-muted-foreground flex items-start">
                  <span className="mr-2">•</span>
                  {instruction}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-border">
          <h3 className="text-2xl font-light text-foreground mb-4">
            Interessado nesta peça?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato para saber mais sobre disponibilidade
          </p>
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            Registrar Interesse
          </Button>
        </div>
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

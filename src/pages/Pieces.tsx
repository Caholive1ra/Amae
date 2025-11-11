import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import { pieces } from '@/data/pieces';

const Pieces = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-7xl font-playfair text-foreground mb-8 leading-tight">
              Peças
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Cada peça é única, carregando a memória da terra e o tempo do fazer artesanal
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pieces.map((piece, index) => (
            <ScrollReveal key={piece.id} delay={index * 100}>
              <Link
                to={`/peca/${piece.id}`}
                className="group block hover-lift"
              >
                <div className="relative h-[600px] rounded-lg overflow-hidden mb-6 shadow-soft image-zoom">
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover"
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pieces;

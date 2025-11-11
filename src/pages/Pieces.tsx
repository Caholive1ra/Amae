import { Link } from 'react-router-dom';
import { pieces } from '@/data/pieces';

const Pieces = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Peças
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada peça é única, carregando a memória da terra e o tempo do fazer artesanal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pieces.map((piece) => (
            <Link
              key={piece.id}
              to={`/peca/${piece.id}`}
              className="group block animate-fade-in"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden mb-4">
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-light text-foreground group-hover:text-accent transition-colors">
                  {piece.name}
                </h3>
                <p className="text-muted-foreground">
                  {piece.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pieces;

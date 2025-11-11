import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { collections } from '@/data/collections';

const Collections = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Coleções
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada coleção é uma história da terra, traduzida em cores e formas que celebram a natureza
          </p>
        </div>

        <div className="space-y-24">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-[600px] rounded-lg overflow-hidden animate-fade-in">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-4xl font-light text-foreground">
                      {collection.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {collection.concept}
                    </p>
                    <Button asChild size="lg">
                      <Link to="/pecas">Ver Peças</Link>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-4xl font-light text-foreground">
                      {collection.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {collection.concept}
                    </p>
                    <Button asChild size="lg">
                      <Link to="/pecas">Ver Peças</Link>
                    </Button>
                  </div>
                  <div className="relative h-[600px] rounded-lg overflow-hidden animate-fade-in">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

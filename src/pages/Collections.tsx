import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { collections } from '@/data/collections';

const Collections = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-7xl font-playfair text-foreground mb-8 leading-tight">
              Coleções
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              coleção de primavera 25 a impermanencia como ponto de transformação
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <ScrollReveal delay={100}>
                    <div className="relative h-[700px] rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                      <img
                        src={collection.hero.src}
                        alt={collection.hero.alt || collection.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="space-y-8">
                      <h2 className="text-5xl font-playfair text-foreground leading-tight">
                        {collection.name}
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        {collection.concept}
                      </p>
                      <Button asChild size="lg" className="shadow-soft hover-lift">
                        <Link to="/pecas">Encomendar</Link>
                      </Button>
                    </div>
                  </ScrollReveal>
                </>
              ) : (
                <>
                  <ScrollReveal delay={300}>
                    <div className="space-y-8">
                      <h2 className="text-5xl font-playfair text-foreground leading-tight">
                        {collection.name}
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        {collection.concept}
                      </p>
                      <Button asChild size="lg" className="shadow-soft hover-lift">
                        <Link to="/pecas">Encomendar</Link>
                      </Button>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={100}>
                    <div className="relative h-[700px] rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                      <img
                        src={collection.hero.src}
                        alt={collection.hero.alt || collection.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollReveal>
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

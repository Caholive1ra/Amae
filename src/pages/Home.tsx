import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import heroHome from '@/assets/hero-home.jpg';
import collectionHero from '@/assets/collection-hero.jpg';
import processDye from '@/assets/process-dye.jpg';
import processCrochet from '@/assets/process-crochet.jpg';
import aboutAtelier from '@/assets/about-atelier.jpg';
import piece1 from '@/assets/piece-1.jpg';
import piece2 from '@/assets/piece-2.jpg';
import piece3 from '@/assets/piece-3.jpg';

const Home = () => {
  const featuredPieces = [
    { id: 'vestido-sol-poente', name: 'Vestido Sol Poente', image: piece1 },
    { id: 'top-crochet-areia', name: 'Top Crochê Areia', image: piece2 },
    { id: 'calca-cafe', name: 'Calça Café', image: piece3 },
  ];

  const processes = [
    { title: 'Tingimento', image: processDye },
    { title: 'Crochê', image: processCrochet },
    { title: 'Modelagem', image: collectionHero },
    { title: 'Tempo', image: aboutAtelier },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroHome}
            alt="Amaé Hero"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 gradient-overlay-dark" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-playfair text-background mb-8 tracking-wide animate-fade-in-up">
            Moda viva que carrega
            <br />a memória da terra
          </h1>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <Button asChild size="lg" variant="secondary" className="mt-4 shadow-soft-lg hover:shadow-soft transition-all duration-300">
              <Link to="/colecoes">Descobrir Coleções</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Essence Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <h2 className="text-5xl font-playfair text-foreground leading-tight">A Essência Amaé</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Amaé é o encontro entre corpo e solo. Entre o fazer e o florescer. 
                  Entre o amor e o tempo. É a lembrança viva de que tudo o que existe, existe por amar.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Nascida da Chapada Diamantina, cada peça carrega as cores da terra, 
                  o tempo da natureza e o toque das mãos que a criaram.
                </p>
                <Button asChild variant="outline" size="lg" className="hover-lift border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link to="/sobre">Conhecer Nossa História</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                <img
                  src={aboutAtelier}
                  alt="Ateliê Amaé"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 bg-muted/30 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-playfair text-foreground mb-6">
              Coleção Memória da Terra
            </h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto font-light">
              Uma coleção que traduz o tempo da natureza em peças vivas
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {featuredPieces.map((piece, index) => (
              <ScrollReveal key={piece.id} delay={index * 100}>
                <Link
                  to={`/peca/${piece.id}`}
                  className="group block hover-lift"
                >
                  <div className="relative h-[500px] rounded-lg overflow-hidden mb-6 shadow-soft image-zoom">
                    <img
                      src={piece.image}
                      alt={piece.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-playfair text-foreground group-hover:text-accent transition-colors duration-300">
                    {piece.name}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Button asChild size="lg" className="shadow-soft-lg hover:shadow-soft">
              <Link to="/pecas">Ver Todas as Peças</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-5xl font-playfair text-foreground text-center mb-20">
              O Processo
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group hover-lift">
                  <div className="relative h-[380px] rounded-lg overflow-hidden mb-6 shadow-soft image-zoom">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 gradient-overlay-dark" />
                    <h3 className="absolute bottom-6 left-6 text-3xl font-playfair text-background">
                      {process.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-16">
              <Button asChild variant="outline" size="lg" className="hover-lift border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/processos">Explorar Processos</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;

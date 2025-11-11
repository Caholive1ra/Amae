import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light text-background mb-6 tracking-wide animate-fade-in">
            Moda viva que carrega
            <br />a memória da terra
          </h1>
          <Button asChild size="lg" variant="secondary" className="mt-4">
            <Link to="/colecoes">Descobrir Coleções</Link>
          </Button>
        </div>
      </section>

      {/* Essence Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-light text-foreground">A Essência Amaé</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Amaé é o encontro entre corpo e solo. Entre o fazer e o florescer. 
                Entre o amor e o tempo. É a lembrança viva de que tudo o que existe, existe por amar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nascida da Chapada Diamantina, cada peça carrega as cores da terra, 
                o tempo da natureza e o toque das mãos que a criaram.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/sobre">Conhecer Nossa História</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src={aboutAtelier}
                alt="Ateliê Amaé"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Coleção Memória da Terra
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Uma coleção que traduz o tempo da natureza em peças vivas
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPieces.map((piece) => (
              <Link
                key={piece.id}
                to={`/peca/${piece.id}`}
                className="group block"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-light text-foreground group-hover:text-accent transition-colors">
                  {piece.name}
                </h3>
              </Link>
            ))}
          </div>

          <Button asChild size="lg">
            <Link to="/pecas">Ver Todas as Peças</Link>
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-light text-foreground text-center mb-16">
            O Processo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="group">
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-light text-background">
                    {process.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/processos">Explorar Processos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

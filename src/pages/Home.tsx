import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import PoeticPause from '@/components/PoeticPause';
import SEO from '@/components/SEO';
import heroHome from '@/assets/hero-home.jpg';
import collectionHero from '@/assets/collection-hero.jpg';
import processDye from '@/assets/process-dye.jpg';
import processCrochet from '@/assets/process-crochet.jpg';
import aboutAtelier from '@/assets/about-atelier.jpg';
import piece1 from '@/assets/piece-1.jpg';
import piece2 from '@/assets/piece-2.jpg';
import piece3 from '@/assets/piece-3.jpg';
import { useRef } from 'react';
import { useProduct } from '@/contexts/ProductContext';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();

  const featuredPieces = [
    { id: 'vestido-sol-poente', name: 'Vestido Sol Poente', image: piece1 },
    { id: 'top-crochet-areia', name: 'Top Crochê Areia', image: piece2 },
    { id: 'calca-cafe', name: 'Calça Café', image: piece3 },
    { id: 'vestido-natural', name: 'Vestido Natural', image: piece1 },
    { id: 'blusa-terra', name: 'Blusa Terra', image: piece2 },
    { id: 'saia-memoria', name: 'Saia Memória', image: piece3 },
  ];

  const handleEncomendar = (pieceName: string) => {
    setSelectedProduct(pieceName);
    navigate('/contato');
    // Scroll suave será feito no Contact após o componente montar
    setTimeout(() => {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const processes = [
    { title: 'Tingimento Natural', description: 'Pigmentos da terra e plantas da Chapada', image: processDye },
    { title: 'Crochê Artesanal', description: 'Cada ponto carrega tempo e cuidado', image: processCrochet },
    { title: 'Modelagem Única', description: 'Formas orgânicas que respeitam o corpo', image: collectionHero },
    { title: 'Tempo', description: 'O processo que honra a impermanência', image: aboutAtelier },
  ];

  return (
    <>
      <SEO
        title="Amaé - Moda Viva que Carrega a Memória da Terra"
        description="Marca de moda autoral inspirada na impermanência da natureza e na Chapada Diamantina. Peças únicas tingidas com pigmentos naturais."
      />
      
      <div className="min-h-screen">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{ opacity: heroOpacity }}
          >
            <motion.img
              style={{ scale: heroScale }}
              src={heroHome}
              alt="Amaé - Moda Viva"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 gradient-overlay-dark" />
          </motion.div>
          
          <motion.div 
            className="relative z-10 text-center px-4"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair text-background mb-6 leading-tight tracking-wide"
            >
              AMAÉ É a lembrança viva de que tudo o que existe, existe por amar e encontro entre corpo e solo.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-background/90 font-light max-w-3xl mx-auto"
            >
              Tudo feito com calma e respeito com a natureza
            </motion.p>
          </motion.div>
        </section>

        {/* Poetic Pause */}
        <div className="poetic-pause flex flex-col items-center justify-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl font-playfair text-foreground text-center max-w-3xl"
          >
            Descubra mais sobre a Amaé
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button asChild size="lg" className="shadow-soft hover-lift">
              <Link to="/sobre">Descubra mais sobre a Amaé</Link>
            </Button>
          </motion.div>
        </div>

        {/* Essence Section */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal delay={100}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[600px] md:h-[700px] rounded-lg overflow-hidden shadow-soft-lg"
                >
                  <img
                    src={aboutAtelier}
                    alt="Ateliê Amaé"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="space-y-8">
                  <h2 className="text-5xl md:text-6xl font-playfair text-foreground leading-tight">
                    A essência Amaé
                  </h2>
                  <div className="space-y-6">
                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                      Nascemos do conceito da impermanência da natureza. Cada peça é um registro vivo do tempo, 
                      tingida com pigmentos naturais que carregam a memória da terra.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                      A roupa registra o passar do tempo criando histórias junto com quem a veste, 
                      celebrando a vida e a impermanência da natureza.
                    </p>
                  </div>
                  <Button asChild size="lg" className="shadow-soft hover-lift">
                    <Link to="/sobre">Descubra Nossa História</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Poetic Pause */}
        <PoeticPause text="A terra fala — e a roupa responde." />

        {/* Featured Pieces */}
        <section className="py-32 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-playfair text-foreground mb-6 leading-tight">
                  Coleção Memória da Terra
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                  Peças únicas que carregam o tempo e a essência da natureza
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuredPieces.map((piece, index) => (
                <ScrollReveal key={piece.id} delay={index * 100}>
                  <div className="group">
                    <motion.div 
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative h-[600px] rounded-lg overflow-hidden mb-6 shadow-soft"
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        src={piece.image}
                        alt={piece.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 gradient-overlay-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    <h3 className="text-2xl font-playfair text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {piece.name}
                    </h3>
                    <Button 
                      onClick={() => handleEncomendar(piece.name)}
                      className="w-full shadow-soft hover-lift"
                    >
                      Encomendar
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-16">
                <Button asChild size="lg" variant="outline" className="shadow-soft hover-lift">
                  <Link to="/pecas">Ver Todas as Peças</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-playfair text-foreground mb-6">
                  O Processo
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                  Cada etapa honra o tempo e a natureza
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processes.map((process, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    <div className="relative h-[400px] rounded-lg overflow-hidden mb-4 shadow-soft">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 gradient-overlay-dark" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-playfair text-background mb-2">
                          {process.title}
                        </h3>
                        <p className="text-background/80 text-sm font-light">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-16">
                <Button asChild variant="outline" size="lg" className="hover-lift border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link to="/processos">Explorar Processos</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import PoeticPause from '@/components/PoeticPause';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/foto-inicio.jpg';
import aboutAtelier from '@/assets/atelie-image.jpeg';
import process1 from '@/assets/process1.jpeg';
import process2 from '@/assets/process2.jpeg';
import process3 from '@/assets/process3.jpeg';
import { useRef } from 'react';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const processes = [
    {
      title: 'Pigmentos que brotam da terra',
      description: 'Infusao de hibisco, cafe e curcuma descansa por horas antes de tocar o algodao.',
      image: process1,
    },
    {
      title: 'Tramas que respiram',
      description: 'Linhas de algodao cru e linho sao tracionadas a mao ate virarem textura calma.',
      image: process2,
    },
    {
      title: 'Casulos de calma',
      description: 'Cada envelope para o corpo repousa em moldes organicos que respeitam o corpo.',
      image: process3,
    },
    {
      title: 'Cuidado que atravessa ciclos',
      description: 'Memorias vestiveis pedem sol delicado, agua fria e sombra prolongada.',
      image: aboutAtelier,
    },
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ opacity: heroOpacity }}
          >
            <motion.img
              style={{ scale: heroScale }}
              src={heroBackground}
              alt="Ama? - Moda Viva"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay-dark" />
          </motion.div>
          
          <motion.div 
            className="relative z-10 text-center px-4 mt-20 md:mt-32"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6x1 lg:text-7xl font-playfair text-background mb-6 leading-tight tracking-wide"
            >
              <span className="block">AMAE é o encontro entre corpo e solo, memoria viva do que existe por amar.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-background/90 font-light max-w-3xl mx-auto"
            >
              <span className="block">A impermanencia e o que nos torna eternos.</span>
              <span className="block">Entre o fazer e o florescer.</span>
            </motion.p>
          </motion.div>
        </section>

        {/* Poetic Pause */}
        <div className="poetic-pause flex flex-col items-center justify-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl font-playfair text-foreground text-center max-w-2x3"
          >
            Entre o fazer e o florescer. Conheca o caderno vivo da Amae.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button asChild size="lg" className="shadow-soft hover-lift">
              <Link to="/sobre">descubra nosso manifesto vivo</Link>
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
                      Costuramos texturas de linho e seda que guardam historias de quem as veste. A impermanencia e celebrada
                      em cada ponto, porque o que nasce do cuidado floresce dentro de quem pausa.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                      registra o passar do tempo criando historias junto com quem a veste. celebrando a vida e a impermanencia da natureza
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
                  <Link to="/processos">baixe nosso caderno de experimentacoes botanicas</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Conceito Imagético Section - com vídeo da coleção */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal>
                <div className="space-y-6 px-2 md:px-0 md:max-w-xl">
                  <p className="text-xs sm:text-sm text-accent uppercase tracking-[0.3em] font-lato font-light">
                    conceito imagetico
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-foreground leading-tight">
                    Conceito imagetico: os cinco sentidos da memoria
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                    <p>
                      O conceito imagetico nasce quando o corpo desacelera e escuta o solo. Sentir tambem e existir.
                      Cada quadro revela pele, tecido e paisagem como camadas de memoria que se abrem como flor depois da chuva.
                    </p>
                    <p>
                      Os angulos nao apenas mostram, eles sentem e aproximam. Convidam a tocar o tempo devagar e a se posicionar
                      no mundo com suavidade, raiz e coragem representativa.
                    </p>
                    <p>
                      O corpo nao e moldura, e materia viva. Ele repousa, observa e respira. Por meio dele a colecao fala com intimidade,
                      lembrando que a impermanencia nos torna eternos.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button asChild size="lg" className="shadow-soft hover-lift">
                      <Link to="/colecao">Conhecer a Coleção</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="w-full md:max-w-sm lg:max-w-md md:justify-self-end">
                  <div className="relative rounded-3xl overflow-hidden shadow-soft-lg" style={{ paddingBottom: '177.78%', height: 0 }}>
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/kCXds_FbF9w"
                      title="Coleção Memória da Terra"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;

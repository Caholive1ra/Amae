import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import PoeticPause from '@/components/PoeticPause';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/foto-inicio.jpg';
import impermanencia from '@/assets/impermanencia.jpg';
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
      title: 'Tingimento Natural',
      description: 'Descubra os pigmentos usados na última coleção.',
      image: process1,
    },
    {
      title: 'Croche Artesanal',
      description: 'Descubra os materiais, tipos de ponto e muito mais.',
      image: process2,
    },
    {
      title: 'Tecidos naturais',
      description: 'Aprenda a identificar e as características de tecidos naturais.',
      image: process3,
    },
    {
      title: 'Cuidados',
      description: 'Cuidados com sua peça 100% natural.',
      image: impermanencia,
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
        <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
            className="relative z-10 text-center px-4 sm:px-6 mt-16 sm:mt-20 md:mt-32"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair text-background mb-4 sm:mb-6 leading-tight tracking-wide px-2"
            >
              <span className="block">AMAE é o encontro entre corpo e solo, memoria viva do que existe por amar.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-background/90 font-light max-w-3xl mx-auto px-2"
            >
              <span className="block">A impermanencia e o que nos torna eternos.</span>
              <span className="block">Entre o fazer e o florescer.</span>
            </motion.p>
          </motion.div>
        </section>

        {/* Poetic Pause */}
        <div className="poetic-pause flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-playfair text-foreground text-center max-w-2xl px-4"
          >
            Entre o fazer e o florescer. Conheca o caderno vivo da Amae.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full sm:w-auto px-4"
          >
            <Button asChild size="lg" className="shadow-soft hover-lift w-full sm:w-auto">
              <Link to="/sobre">descubra nosso manifesto vivo</Link>
            </Button>
          </motion.div>
        </div>

        {/* Essence Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <ScrollReveal delay={100}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-soft-lg"
                >
                  <img
                    src={impermanencia}
                    alt="Ateliê Amaé"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="space-y-6 sm:space-y-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-foreground leading-tight">
                    A essência Amaé
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                    Nascemos do conceito da impermanência da natureza. Cada peça é um registro vivo do tempo, 
                    tingida com pigmentos naturais que carregam a memória da terra.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                    A roupa desbota, marca o uso, registra o passar do tempo criando histórias junto com quem a veste, 
                    celebrando a vida e a impermanência da natureza.
                    </p>
                  </div>
                  <Button asChild size="lg" className="shadow-soft hover-lift w-full sm:w-auto">
                    <Link to="/sobre">Descubra Nossa História</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Poetic Pause */}
        <PoeticPause text="A terra fala e a roupa responde." />

        {/* Process Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-foreground mb-4 sm:mb-6">
                  O Processo
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
                  Cada processo acompanha o tempo e a natureza
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processes.map((process, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    <div className="relative h-[350px] sm:h-[400px] md:h-[450px] rounded-lg overflow-hidden mb-4 shadow-soft">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 gradient-overlay-dark" />
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                        <h3 className="text-xl sm:text-2xl font-playfair text-background mb-2">
                          {process.title}
                        </h3>
                        <p className="text-background/80 text-xs sm:text-sm font-light">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-12 sm:mt-16 px-4">
                <Button asChild variant="outline" size="lg" className="hover-lift border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                  <Link to="/processos">Baixe nosso caderno de estudo de pigmentos</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Conceito Imagético Section - com vídeo da coleção */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
              <ScrollReveal>
                <div className="space-y-4 sm:space-y-6 px-2 md:px-0 md:max-w-xl w-full">
                  <p className="text-xs sm:text-sm text-accent uppercase tracking-[0.25em] sm:tracking-[0.3em] font-lato font-light">
                    Conceito Imagético
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-foreground leading-tight">
                    Os cinco sentidos da memória
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
                    <p>
                      O conceito imagético nasce quando o corpo desacelera e escuta a natureza. Sentir tambem é existir.
                      Cada peça traduz os sentidos como memória da natureza com o despertar de algo que sempre esteve ali.
                    </p>
                    <p>
                      Os angulos nao apenas mostram, eles sentem e aproximam. Convidam a tocar o tempo devagar e a se posicionar
                      no mundo com coragem representativa.
                    </p>
                    <p>
                      O corpo nao e moldura, e materia viva. Ele repousa, observa e respira. Por meio dele a colecao fala com intimidade,
                      lembrando que a impermanencia nos torna eternos.
                    </p>
                  </div>
                  <div className="pt-2 sm:pt-4">
                    <Button asChild size="lg" className="shadow-soft hover-lift w-full sm:w-auto">
                      <Link to="/colecao">Conhecer a Coleção</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <div className="w-full md:max-w-sm lg:max-w-md md:justify-self-end">
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft-lg">
                  <div 
                    className="relative w-full"
                    style={{ 
                      paddingBottom: '177.78%',
                      height: 0,
                      position: 'relative'
                    }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/kCXds_FbF9w"
                      title="Coleção Memória da Terra"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;

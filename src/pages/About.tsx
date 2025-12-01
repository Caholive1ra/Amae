import ScrollReveal from '@/components/ScrollReveal';
import aboutAtelier from '@/assets/about-atelier.jpg';
import heroHome from '@/assets/hero-home.jpg';
import processDye from '@/assets/process-dye.jpg';

const About = () => {
  const manifestoSections = [
    {
      title: 'A Origem da Amaé',
      content: 'Amaé nasce do encontro entre corpo e solo, entre o fazer e o florescer. Cada peça carrega a memória da terra, traduzida em cores que nascem de flores, raízes e sementes.',
      image: heroHome,
    },
    {
      title: 'A Impermanência Como Beleza',
      content: 'Não há duas peças iguais. Como a natureza, cada tingimento é único, cada tom carrega suas próprias nuances. Celebramos a impermanência como forma de beleza, aceitando que o tempo transforma tudo - e que isso é parte da poesia de existir.',
      image: processDye,
    },
    {
      title: 'A Memória da Terra',
      content: 'Trabalhamos com pigmentos naturais: hibisco, café, cúrcuma, cebola, feijão preto. Cada cor tem uma origem, uma história. O tingimento natural é um ritual de paciência, onde a cor nasce do tempo e da temperatura, do encontro entre planta e fibra.',
      image: processDye,
    },
    {
      title: 'A Mulher e o Tempo',
      content: 'Amaé existe para celebrar mulheres que respeitam seu próprio tempo. Que escolhem o que é feito com cuidado, que valorizam o toque humano. Nossas peças são para quem entende que beleza está no gesto, na intenção, na presença.',
      image: aboutAtelier,
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20">
      {/* Hero */}
      <div className="container mx-auto px-6 md:px-4 max-w-4xl mb-20 md:mb-32">
        <ScrollReveal>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-foreground mb-6 md:mb-10 leading-tight">
              Manifesto
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto font-playfair font-light px-4">
              Amaé é amor em estado de ser. É semente, raiz e flor. É o tempo que floresce.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Manifesto Sections */}
      <div className="space-y-20 md:space-y-32 lg:space-y-40">
        {manifestoSections.map((section, index) => (
          <section
            key={index}
            className="container mx-auto px-6 md:px-4 max-w-6xl"
          >
            <div
              className={`flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <ScrollReveal delay={50}>
                    <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={150}>
                    <div className="space-y-5 md:space-y-8 px-2">
                      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-playfair text-foreground leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        {section.content}
                      </p>
                    </div>
                  </ScrollReveal>
                </>
              ) : (
                <>
                  <ScrollReveal delay={150}>
                    <div className="space-y-5 md:space-y-8 px-2 order-2 md:order-1">
                      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-playfair text-foreground leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        {section.content}
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={50}>
                    <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-soft-lg image-zoom order-1 md:order-2">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollReveal>
                </>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Final Quote */}
      <div className="container mx-auto px-4 max-w-3xl mt-40">
        <ScrollReveal>
          <div className="text-center py-20 border-t border-border/50">
            <blockquote className="text-3xl md:text-4xl font-playfair text-foreground italic font-light leading-relaxed">
              "O que é feito com calma, amor e intenção, permanece."
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;

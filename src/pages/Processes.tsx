import ScrollReveal from '@/components/ScrollReveal';
import { processImages } from '@/data/processes';

const Processes = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-4">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              Laboratório de sustentabilidade
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
              Aqui começa o encontro entre você e a natureza.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {processImages.map((process, index) => (
            <div
              key={process.id}
              className={`flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Imagem sempre primeiro em mobile, alterna em desktop */}
              <ScrollReveal delay={50}>
                <div className={`relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full rounded-lg overflow-hidden shadow-soft-lg image-zoom ${
                  index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                }`}>
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              
              {/* Texto sempre segundo em mobile, alterna em desktop */}
              <ScrollReveal delay={150}>
                <div className={`space-y-3 sm:space-y-4 md:space-y-6 px-2 w-full ${
                  index % 2 === 1 ? 'md:order-1' : 'md:order-2'
                }`}>
                  <div className="text-xs sm:text-sm text-accent uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] font-lato font-light">
                    {process.category === 'dye' && 'Tingimento'}
                    {process.category === 'crochet' && 'Croche'}
                    {process.category === 'modeling' && 'Tecidos'}
                    {process.category === 'time' && 'Tempo'}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-foreground leading-tight">
                    {process.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
                    {process.description}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Processes;

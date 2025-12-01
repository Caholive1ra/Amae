import ScrollReveal from '@/components/ScrollReveal';
import { processImages } from '@/data/processes';

const Processes = () => {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-4">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-foreground mb-6 md:mb-8 leading-tight">
              Laboratório de sustentabilidade
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
              Aqui começa o encontro entre você e a natureza.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-20 md:space-y-24 lg:space-y-32">
          {processImages.map((process, index) => (
            <div
              key={process.id}
              className={`flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <ScrollReveal delay={50}>
                    <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={150}>
                    <div className="space-y-4 md:space-y-6 px-2">
                      <div className="text-xs sm:text-sm text-accent uppercase tracking-[0.25em] md:tracking-[0.3em] font-lato font-light">
                        {process.category === 'dye' && 'Tingimento'}
                        {process.category === 'crochet' && 'Croche'}
                        {process.category === 'modeling' && 'Modelagem'}
                        {process.category === 'time' && 'Tempo'}
                      </div>
                      <h2 className="text-3xl sm:text-3xl md:text-4xl font-playfair text-foreground leading-tight">
                        {process.title}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        {process.description}
                      </p>
                    </div>
                  </ScrollReveal>
                </>
              ) : (
                <>
                  <ScrollReveal delay={150}>
                    <div className="space-y-4 md:space-y-6 px-2 order-2 md:order-2">
                      <div className="text-xs sm:text-sm text-accent uppercase tracking-[0.25em] md:tracking-[0.3em] font-lato font-light">
                        {process.category === 'dye' && 'Tingimento'}
                        {process.category === 'crochet' && 'Croche'}
                        {process.category === 'modeling' && 'Modelagem'}
                        {process.category === 'time' && 'Tempo'}
                      </div>
                      <h2 className="text-3xl sm:text-3xl md:text-4xl font-playfair text-foreground leading-tight">
                        {process.title}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        {process.description}
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={50}>
                    <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-soft-lg image-zoom order-1 md:order-1">
                      <img
                        src={process.image}
                        alt={process.title}
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

export default Processes;

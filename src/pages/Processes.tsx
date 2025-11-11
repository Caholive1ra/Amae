import ScrollReveal from '@/components/ScrollReveal';
import { processImages } from '@/data/processes';

const Processes = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-7xl font-playfair text-foreground mb-8 leading-tight">
              Diário da Terra
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Nos bastidores da criação: o tempo, as mãos e os materiais que dão vida a cada peça
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {processImages.map((process, index) => (
            <div
              key={process.id}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <ScrollReveal delay={100}>
                    <div className="relative h-[600px] rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="space-y-6">
                      <div className="text-sm text-accent uppercase tracking-[0.3em] font-lato font-light">
                        {process.category === 'dye' && 'Tingimento'}
                        {process.category === 'crochet' && 'Crochê'}
                        {process.category === 'modeling' && 'Modelagem'}
                        {process.category === 'time' && 'Tempo'}
                      </div>
                      <h2 className="text-4xl font-playfair text-foreground leading-tight">
                        {process.title}
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        {process.description}
                      </p>
                    </div>
                  </ScrollReveal>
                </>
              ) : (
                <>
                  <ScrollReveal delay={300}>
                    <div className="space-y-6 md:order-2">
                      <div className="text-sm text-accent uppercase tracking-[0.3em] font-lato font-light">
                        {process.category === 'dye' && 'Tingimento'}
                        {process.category === 'crochet' && 'Crochê'}
                        {process.category === 'modeling' && 'Modelagem'}
                        {process.category === 'time' && 'Tempo'}
                      </div>
                      <h2 className="text-4xl font-playfair text-foreground leading-tight">
                        {process.title}
                      </h2>
                      <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        {process.description}
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={100}>
                    <div className="relative h-[600px] rounded-lg overflow-hidden shadow-soft-lg image-zoom md:order-1">
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

import { processImages } from '@/data/processes';

const Processes = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Diário da Terra
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos bastidores da criação: o tempo, as mãos e os materiais que dão vida a cada peça
          </p>
        </div>

        <div className="space-y-24">
          {processImages.map((process, index) => (
            <div
              key={process.id}
              className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm text-accent uppercase tracking-widest">
                      {process.category === 'dye' && 'Tingimento'}
                      {process.category === 'crochet' && 'Crochê'}
                      {process.category === 'modeling' && 'Modelagem'}
                      {process.category === 'time' && 'Tempo'}
                    </div>
                    <h2 className="text-3xl font-light text-foreground">
                      {process.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4 md:order-2">
                    <div className="text-sm text-accent uppercase tracking-widest">
                      {process.category === 'dye' && 'Tingimento'}
                      {process.category === 'crochet' && 'Crochê'}
                      {process.category === 'modeling' && 'Modelagem'}
                      {process.category === 'time' && 'Tempo'}
                    </div>
                    <h2 className="text-3xl font-light text-foreground">
                      {process.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                  <div className="relative h-[500px] rounded-lg overflow-hidden md:order-1">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
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

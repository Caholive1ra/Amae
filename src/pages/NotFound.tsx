import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Pagina nao encontrada"
        description="Como uma trilha apagada pela chuva, esta pagina nao existe mais."
      />

      <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-8xl md:text-9xl font-playfair text-accent mb-8">
              404
            </h1>
            <p className="text-3xl md:text-4xl font-playfair text-foreground mb-6 leading-relaxed">
              A trilha se desfez na terra
            </p>
            <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
              As vezes o vento leva nossas pegadas. Volte para o inicio e escolha outro caminho com calma.
            </p>
            <Button asChild size="lg" className="shadow-soft-lg hover-lift">
              <Link to="/">Voltar para o inicio</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

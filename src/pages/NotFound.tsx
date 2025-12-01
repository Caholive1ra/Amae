import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Página não encontrada"
        description="Às vezes o caminho se desfaz na terra. Voltar para o início?"
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
              Às vezes o caminho se desfaz na terra
            </p>
            <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
              Como a trilha que some na paisagem da Chapada, 
              esta página não pode ser encontrada. 
              Mas há sempre um retorno possível.
            </p>
            <Button asChild size="lg" className="shadow-soft-lg hover-lift">
              <Link to="/">Voltar para o início</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

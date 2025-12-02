import { Instagram, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import logoOficial from '@/assets/logo_oficial.png';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="bg-foreground text-background py-12 sm:py-16 md:py-20 mt-16 sm:mt-24 md:mt-32 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-playfair tracking-widest text-background"
          >
            <img src={logoOficial} alt="Amae" className="h-10 sm:h-12 w-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl font-playfair text-background max-w-2xl italic px-4"
          >
            Entre o fazer e o florescer, cada ponto registra a memoria viva da terra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-6 sm:gap-8"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background hover:text-background/80 transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
            <a
              href="mailto:contato@amae.com"
              className="text-background hover:text-background/80 transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Email"
            >
              <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm text-background font-light px-4"
          >
            <p>Rua Mateus Grou 306, Loja 1 • Pinheiros • Sao Paulo</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs text-background pt-4 sm:pt-6 tracking-wide px-4"
          >
            {new Date().getFullYear()} • Amaé. Tudo feito com calma e respeito com a natureza.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

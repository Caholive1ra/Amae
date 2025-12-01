import { Instagram, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-muted/50 py-20 mt-32 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-playfair tracking-widest text-foreground"
          >
            AMAÉ
          </motion.div>

          {/* Poetic phrase */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl font-playfair text-muted-foreground max-w-2xl italic"
          >
            "A impermanência é o que nos torna eternos."
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-8"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="mailto:contato@amae.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-muted-foreground/80 font-light"
          >
            <p>Loja na Rua Mateus Grou, 306, Loja 1</p>
            <p>Pinheiros - São Paulo, SP</p>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs text-muted-foreground/70 pt-6 tracking-wide"
          >
            © {new Date().getFullYear()} Amaé. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

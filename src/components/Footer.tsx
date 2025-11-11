import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-16 mt-32 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="text-4xl font-playfair tracking-widest text-foreground">
            AMAÉ
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
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
          </div>

          {/* Tagline */}
          <p className="text-base font-playfair text-muted-foreground italic max-w-md">
            Moda viva que carrega a memória da terra
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/70 pt-6 tracking-wide">
            © {new Date().getFullYear()} Amaé. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

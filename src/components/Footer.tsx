import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div className="text-3xl font-light tracking-widest text-foreground">
            AMAÉ
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contato@amae.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground italic max-w-md">
            Moda viva que carrega a memória da terra
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground pt-4">
            © {new Date().getFullYear()} Amaé. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

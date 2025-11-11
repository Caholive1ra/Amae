import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Calculate opacity based on scroll (0 to 1 over 200px)
      const newOpacity = Math.min(scrollPosition / 200, 0.98);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/colecoes', label: 'Coleções' },
    { to: '/pecas', label: 'Peças' },
    { to: '/processos', label: 'Processos' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        'backdrop-blur-sm'
      )}
      style={{
        backgroundColor: `rgba(250, 248, 246, ${scrollOpacity})`,
        boxShadow: isScrolled ? '0 2px 20px rgba(76, 52, 90, 0.08)' : 'none',
      }}
    >
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={cn(
              "text-2xl font-playfair tracking-widest transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-background mix-blend-difference"
            )}
          >
            AMAÉ
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    "text-sm tracking-widest uppercase font-lato font-light transition-all duration-300 relative",
                    "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0",
                    "after:bg-accent after:transition-all after:duration-300",
                    "hover:text-accent hover:after:w-full",
                    isScrolled ? "text-foreground/70" : "text-background/90 mix-blend-difference"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-background mix-blend-difference"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-6 space-y-4 pb-4 bg-background/95 backdrop-blur-md rounded-lg p-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block text-sm tracking-widest uppercase font-lato text-foreground/80 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

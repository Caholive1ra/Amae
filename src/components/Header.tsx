import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import NavLink from './NavLink';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
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
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        'backdrop-blur-md'
      )}
      style={{
        backgroundColor: `rgba(250, 248, 246, ${scrollOpacity})`,
        boxShadow: isScrolled ? '0 2px 20px hsl(var(--foreground) / 0.08)' : 'none',
      }}
    >
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={cn(
              "text-2xl font-playfair tracking-widest transition-colors duration-300",
              isScrolled || !isHome ? "text-foreground" : "text-background mix-blend-difference"
            )}
          >
            AMAÉ
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink 
                  to={link.to}
                  className={cn(
                    "text-sm tracking-widest uppercase font-lato font-light transition-all duration-300",
                    isScrolled || !isHome ? "text-foreground/70" : "text-background/90 mix-blend-difference"
                  )}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors duration-300",
              isScrolled || !isHome ? "text-foreground" : "text-background mix-blend-difference"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-6 space-y-4 pb-4 bg-background/95 backdrop-blur-md rounded-lg p-4 overflow-hidden"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm tracking-widest uppercase font-lato text-foreground/80"
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

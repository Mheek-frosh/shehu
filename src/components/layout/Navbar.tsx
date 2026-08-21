import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../data/mockData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="z-50 flex items-center space-x-3">
          <img src="/src/assets/pdp-logo.png" alt="PDP Logo" className="h-10 w-auto" />
          <span className="text-xl font-display font-bold tracking-tight text-[var(--color-pdp-green)]">Shehu ABG Impact</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.slice(0, 6).map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[var(--color-pdp-red)] ${
                location.pathname === link.path ? 'text-[var(--color-pdp-red)]' : 'text-current'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* A dropdown or more menu could be added here for the rest, but for now we'll just show a few and a menu button */}
          <button onClick={() => setIsOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fullscreen Mobile/Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-24 px-6 overflow-y-auto pb-10"
          >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="text-2xl font-display font-medium hover:text-[var(--color-pdp-red)] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

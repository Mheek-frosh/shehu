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
        scrolled ? 'glass py-2.5 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="z-50 flex items-center space-x-3">
          <img src="/assets/pdp-logo.png" alt="PDP Logo" className="h-9 sm:h-10 w-auto" />
          <span className="text-base sm:text-xl font-display font-bold tracking-tight text-[var(--color-pdp-green)] whitespace-nowrap">Shehu ABG Impact</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Impact Projects', path: '/projects' },
            { name: 'Blog', path: '/events' }
          ].map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[var(--color-pdp-red)] ${
                location.pathname === link.path ? 'text-[var(--color-pdp-red)]' : 'text-current'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-[var(--color-pdp-green)] text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition-colors shadow-md shadow-[var(--color-pdp-green)]/20">
            Join Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-[var(--background)] pt-20 sm:pt-24 px-5 sm:px-6 overflow-y-auto pb-10"
          >
            <div className="container mx-auto max-w-lg">
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.filter((link) => ['Home', 'About', 'Projects', 'Impact Gallery', 'Events', 'Contact'].includes(link.name)).map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="border-b border-gray-100 py-4 text-xl sm:text-2xl font-display font-medium hover:text-[var(--color-pdp-red)] transition-colors"
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

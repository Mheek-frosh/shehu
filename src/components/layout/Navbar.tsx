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
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    desktopMediaQuery.addEventListener('change', handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      desktopMediaQuery.removeEventListener('change', handleDesktopChange);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'glass py-2.5 sm:py-3' : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="container mx-auto flex items-center gap-3 px-4 md:px-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
            <img src="/logo-transparent.png" alt="Shehu ABG Impact Initiative logo" className="h-9 w-auto shrink-0 sm:h-11" />
            <span className="min-w-0 text-sm leading-tight font-display font-bold tracking-tight text-[var(--color-pdp-green)] sm:text-xl sm:leading-normal">
              <span className="block sm:inline">Shehu ABG</span>{' '}
              <span className="block sm:inline">Impact Initiative</span>
            </span>
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
            type="button"
            className="-mr-1 flex size-11 shrink-0 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pdp-green)] lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Kept outside the filtered header so it stays fixed to the viewport on mobile. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            id="mobile-navigation"
            className="fixed inset-0 z-40 overflow-y-auto bg-[var(--background)] px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-20 sm:px-6 sm:pt-24 lg:hidden"
          >
            <div className="container mx-auto max-w-lg">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                    className={`flex min-h-14 items-center border-b border-gray-100 px-1 py-3 font-display text-lg font-medium transition-colors sm:text-xl ${
                      location.pathname === link.path
                        ? 'text-[var(--color-pdp-red)]'
                        : 'text-[var(--foreground)] hover:text-[var(--color-pdp-red)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

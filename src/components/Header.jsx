import React, { useState, useEffect } from 'react';
import logoBlanco from '../assets/logoblanco.png'; // Use white logo for dark backgrounds
import logo from '../assets/logo.png'; // Use standard logo for light backgrounds
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="block">
          <img
            src={isScrolled ? logo : logoBlanco}
            alt="Yolima Ballesta Spa"
            className="h-12 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm tracking-widest uppercase hover:text-secondary transition-colors ${isScrolled ? 'text-textDark' : 'text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservar"
            className={`px-6 py-2 rounded-full font-serif font-bold transition-all duration-300 transform hover:scale-105 ${isScrolled
                ? 'bg-primary text-white hover:bg-opacity-90'
                : 'bg-white text-textDark hover:bg-secondary hover:text-white'
              }`}
          >
            Reservar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className={`w-8 h-8 ${isScrolled ? 'text-textDark' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-textDark text-lg tracking-wide hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 bg-primary text-white rounded-full font-serif font-bold hover:bg-opacity-90 transition-all"
              >
                Reservar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

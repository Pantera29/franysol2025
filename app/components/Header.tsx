'use client';

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
      isScrolled ? 'bg-suculenta' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        {/* Layout principal */}
        <div className="flex items-center justify-between">
          {/* Fecha - Solo visible en móvil, a la izquierda */}
          <div className="md:hidden">
            <span className={`font-serif text-sm tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              28.03.26
            </span>
          </div>

          {/* Logo/Iniciales centradas - Solo visible en móvil */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'
            }`}>
              S&F
            </a>
          </div>

          {/* Logo/Iniciales centradas - Solo visible en desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className={`font-serif text-xl tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'
            }`}>
              S&F 28.03.26
            </a>
          </div>

          {/* Navegación izquierda - Solo desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#evento" 
              className={`transition-colors duration-300 text-sm font-sans ${
                isScrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              Ceremonia y Fiesta
            </a>
            <a 
              href="#informacion" 
              className={`transition-colors duration-300 text-sm font-sans ${
                isScrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              Información
            </a>
            <a 
              href="#regalos" 
              className={`transition-colors duration-300 text-sm font-sans ${
                isScrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              Lista de regalos
            </a>
          </nav>

          {/* Botón RSVP - Solo visible en desktop */}
          <a 
            href="#rsvp" 
            className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-[10px] hover:bg-gray-100 transition-colors duration-300 font-sans text-sm"
          >
            Confirmar asistencia
          </a>

          {/* Menú hamburguesa - Solo móvil */}
          <button 
            className={`md:hidden p-1 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú móvil expandido */}
        {isMenuOpen && (
          <nav className={`md:hidden mt-4 pb-4 border-t pt-4 transition-colors duration-300 ${
            isScrolled ? 'border-black/20' : 'border-white/20'
          }`}>
            <div className="flex flex-col space-y-4">
              <a 
                href="#evento" 
                className={`transition-colors duration-300 text-base font-sans py-2 ${
                  isScrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ceremonia y Fiesta
              </a>
              <a 
                href="#informacion" 
                className={`transition-colors duration-300 text-base font-sans py-2 ${
                  isScrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Información
              </a>
              <a 
                href="#regalos" 
                className={`transition-colors duration-300 text-base font-sans py-2 ${
                  isScrolled ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Lista de regalos
              </a>
              <a 
                href="#rsvp" 
                className="bg-white text-black px-6 py-3 rounded-[10px] hover:bg-gray-100 transition-colors duration-300 font-sans text-sm text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Confirmar asistencia
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

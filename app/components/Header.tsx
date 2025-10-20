'use client';

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-suculenta backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Layout principal */}
        <div className="flex items-center justify-between">
          {/* Fecha - Solo visible en móvil, a la izquierda */}
          <div className="md:hidden">
            <span className="text-black font-serif text-sm tracking-wide">
              28.03.26
            </span>
          </div>

          {/* Logo/Iniciales centradas - Solo visible en móvil */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-black font-serif text-lg tracking-wide hover:text-black/80 transition-colors duration-300">
              S&F
            </a>
          </div>

          {/* Logo/Iniciales centradas - Solo visible en desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-black font-serif text-xl tracking-wide hover:text-black/80 transition-colors duration-300">
              S&F 28.03.26
            </a>
          </div>

          {/* Navegación izquierda - Solo desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#evento" 
              className="text-black/90 hover:text-black transition-colors duration-300 text-sm font-sans"
            >
              Ceremonia y Fiesta
            </a>
            <a 
              href="#informacion" 
              className="text-black/90 hover:text-black transition-colors duration-300 text-sm font-sans"
            >
              Información
            </a>
            <a 
              href="#regalos" 
              className="text-black/90 hover:text-black transition-colors duration-300 text-sm font-sans"
            >
              Lista de regalos
            </a>
          </nav>

          {/* Botón RSVP - Solo visible en desktop */}
          <a 
            href="#rsvp" 
            className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-100 transition-colors duration-300 font-sans text-sm"
          >
            Confirmar asistencia
          </a>

          {/* Menú hamburguesa - Solo móvil */}
          <button 
            className="md:hidden text-black p-1"
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
          <nav className="md:hidden mt-4 pb-4 border-t border-black/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#evento" 
                className="text-black/90 hover:text-black transition-colors duration-300 text-base font-sans py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ceremonia y Fiesta
              </a>
              <a 
                href="#informacion" 
                className="text-black/90 hover:text-black transition-colors duration-300 text-base font-sans py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Información
              </a>
              <a 
                href="#regalos" 
                className="text-black/90 hover:text-black transition-colors duration-300 text-base font-sans py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lista de regalos
              </a>
              <a 
                href="#rsvp" 
                className="bg-white text-black px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors duration-300 font-sans text-sm text-center mt-4"
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

'use client';

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navegación izquierda */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#historia" 
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-sans"
            >
              Nuestra historia
            </a>
            <a 
              href="#informacion" 
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-sans"
            >
              Información
            </a>
            <a 
              href="#regalos" 
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-sans"
            >
              Lista de regalos
            </a>
          </nav>

          {/* Logo/Iniciales centradas */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-white font-serif text-lg md:text-xl tracking-wide">
              S&F 28.03.26
            </h1>
          </div>

          {/* Botón derecha */}
          <button className="bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-100 transition-colors duration-300 font-sans text-sm">
            Confirmar asistencia
          </button>

          {/* Menú móvil */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú móvil expandido */}
        <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
          <div className="flex flex-col space-y-3">
            <a 
              href="#historia" 
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-sans"
            >
              Nuestra historia
            </a>
            <a 
              href="#informacion" 
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-sans"
            >
              Información
            </a>
            <a 
              href="#regalos" 
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-sans"
            >
              Lista de regalos
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

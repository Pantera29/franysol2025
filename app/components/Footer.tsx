'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-suculenta text-black py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Iniciales principales */}
        <div className="mb-6">
          <h3 className="font-serif text-2xl md:text-3xl tracking-wide">
            S&F
          </h3>
        </div>

        {/* Fecha */}
        <div className="mb-6">
          <p className="font-sans text-lg tracking-wider opacity-90">
            28 de Marzo, 2026
          </p>
        </div>

        {/* Enlaces */}
        <nav className="mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#informacion" 
              className="text-black/70 hover:text-black transition-colors duration-300 font-sans text-sm"
            >
              Ceremonia y Fiesta
            </a>
            <a 
              href="#informacion" 
              className="text-black/70 hover:text-black transition-colors duration-300 font-sans text-sm"
            >
              Información
            </a>
            <a 
              href="#regalos" 
              className="text-black/70 hover:text-black transition-colors duration-300 font-sans text-sm"
            >
              Lista de regalos
            </a>
          </div>
        </nav>

        {/* Mensaje final */}
        <div className="border-t border-black/20 pt-6">
          <p className="font-sans text-sm text-black/60">
            Con amor, Sol y Fran
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

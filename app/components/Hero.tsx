'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo - placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
        {/* Placeholder para imagen de fondo */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-500 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Imagen de fondo de la pareja</p>
          </div>
        </div>
      </div>

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Texto pequeño arriba */}
        <p className="text-sm md:text-base font-sans tracking-widest uppercase mb-4 opacity-90">
          ¡Nos casamos!
        </p>

        {/* Nombres principales */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Sol y Fran
        </h1>

        {/* Fecha */}
        <p className="text-xl md:text-2xl font-sans tracking-wider opacity-90">
          28.03.26
        </p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

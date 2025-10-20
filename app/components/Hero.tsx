'use client';

import React from 'react';


const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-start justify-center overflow-hidden pt-32">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/solyfranplaya.jpeg)',
          filter: 'grayscale(100%)'
        }}
      ></div>

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Texto pequeño arriba */}
        <p className="text-sm md:text-base font-sans tracking-widest uppercase mb-4 opacity-90">
          ¡Nos casamos!
        </p>

        {/* Nombres principales */}
        <h1 className="font-serif text-[60px] mb-6 leading-tight font-normal tracking-wide">
          Sol & Fran
        </h1>


        {/* Fecha */}
        <div className="flex items-center justify-center space-x-4 text-white">
          <span className="text-lg md:text-xl font-serif font-light tracking-wider opacity-90">
            MAR
          </span>
          <div className="w-px h-8 bg-white/60"></div>
          <span className="text-4xl md:text-5xl font-serif font-normal tracking-wide">
            28
          </span>
          <div className="w-px h-8 bg-white/60"></div>
          <span className="text-lg md:text-xl font-serif font-light tracking-wider opacity-90">
            2026
          </span>
        </div>
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

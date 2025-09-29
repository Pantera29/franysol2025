'use client';

import React from 'react';

const RSVP: React.FC = () => {
  return (
    <section id="rsvp" className="relative py-32 overflow-hidden">
      {/* Imagen de fondo - placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
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
        <div className="max-w-2xl mx-auto">
          {/* Texto pequeño arriba */}
          <p className="text-sm md:text-base font-sans tracking-widest uppercase mb-6 opacity-90">
            Acompáñanos
          </p>

          {/* Título principal */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            ¡Esperamos que puedas celebrar con nosotros!
          </h2>

          {/* Botón principal */}
          <button className="bg-white text-black px-12 py-4 text-lg font-sans tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Confirmar asistencia
          </button>

          {/* Texto adicional */}
          <p className="mt-8 text-sm md:text-base font-sans opacity-80 max-w-lg mx-auto">
            Por favor confirma tu asistencia antes del 15 de diciembre para poder organizar todos los detalles
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;

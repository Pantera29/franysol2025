'use client';

import React from 'react';

const EventInfo: React.FC = () => {
  return (
    <section id="evento" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/bodegas-robinson.jpg"
                alt="Bodegas Robinson - Lugar de la celebración"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Información derecha */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-black">
              Ceremonia y Fiesta
            </h2>

            <div className="space-y-6">
              {/* Hora */}
              <div>
                <h3 className="font-serif text-3xl mb-2 text-black">
                  18:30
                </h3>
              </div>

              {/* Lugar */}
              <div>
                <h4 className="font-sans text-lg font-medium mb-2 text-black">
                  Bodegas Robinson
                </h4>
                <p className="font-sans text-gray-600 mb-4">
                  Concordia, Entre Ríos, Argentina
                </p>
              </div>

              {/* Botón mapa */}
              <div>
                <a
                  href="https://www.google.com/maps/place/Bodega+Robinson/@-31.3297741,-58.0256008,970m/data=!3m1!1e3!4m6!3m5!1s0x95ade9b76e5cd423:0x80f94d22192c7997!8m2!3d-31.3291876!4d-58.0234443!16s%2Fg%2F11h3c6z6cf?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-sans text-sm tracking-wide"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;

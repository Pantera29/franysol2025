'use client';

import React from 'react';
import Link from 'next/link';

const RSVP: React.FC = () => {
  return (
    <section id="rsvp" className="py-20" style={{backgroundColor: '#F2F2F0'}}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Información izquierda */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-black">
            ¿Nos acompañas?
            </h2>

            {/* Imagen pequeña en mobile - aparece después del título */}
            <div className="lg:hidden mb-8">
              <div className="aspect-[4/3] max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/solyfran.jpg"
                  alt="Sol y Fran - Invitación de boda"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              {/* Mensaje principal */}
              <div>
                <p className="font-sans text-lg text-gray-700 mb-6">
                  Esperamos que puedas celebrar con nosotros este día tan especial
                </p>
              </div>

              {/* Texto adicional */}
              <div>
                <p className="font-sans text-sm text-gray-600">
                  Por favor confirma tu asistencia antes del 15 de Diciembre de 2025 para poder organizar todos los detalles
                </p>
              </div>

              {/* Botón principal */}
              <div>
                <Link 
                  href="/rsvp"
                  className="inline-flex items-center px-8 py-3 bg-suculenta text-white hover:bg-suculenta/80 transition-all duration-300 font-sans text-sm tracking-wide"
                >
                  Confirmar asistencia
                </Link>
              </div>
            </div>
          </div>

          {/* Imagen derecha - oculta en mobile */}
          <div className="order-2 lg:order-2 hidden lg:block">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/solyfran.jpg"
                alt="Sol y Fran - Invitación de boda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;

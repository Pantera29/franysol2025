'use client';

import React from 'react';

const Information: React.FC = () => {
  return (
    <section id="informacion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="min-h-[500px] flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                Información
              </h2>
              <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Código de Vestimenta */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <span className="text-2xl mr-3">👗</span>
                  <h3 className="font-serif text-2xl text-gray-800">
                    Código de Vestimenta
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    <strong>Formal</strong> (evitar el color blanco, reservado para la novia)
                  </p>
                  <p>
                    Recomendamos calzado cómodo ya que la ceremonia será en el jardín 
                    y luego tendremos una noche de celebración y mucho baile.
                  </p>
                </div>
              </div>

              {/* Clima Esperado */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <span className="text-2xl mr-3">🌤️</span>
                  <h3 className="font-serif text-2xl text-gray-800">
                    Clima Esperado
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Para finales de Marzo en Concordia, habrán temperaturas entre 
                    <strong> 25°C (día)</strong> y <strong>15°C (noche)</strong>.
                  </p>
                  <p>
                    La ceremonia y recepción cuentan con áreas cubiertas en caso de lluvia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;

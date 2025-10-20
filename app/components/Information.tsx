'use client';

import React from 'react';

const Information: React.FC = () => {
  return (
    <section id="informacion" className="py-20" style={{backgroundColor: '#F2F2F0'}}>
      <div className="container mx-auto px-6">
        <div className="min-h-[500px] flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
                Información
              </h2>
              <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Código de Vestimenta */}
              <div className="rounded-lg p-8 shadow-sm" style={{backgroundColor: '#F2F2F0'}}>
                <div className="mb-4">
                  <h3 className="font-serif text-2xl text-gray-800">
                    Código de Vestimenta
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    <strong>Formal elegante</strong>
                  </p>
                </div>
              </div>

              {/* Clima Esperado */}
              <div className="rounded-lg p-8 shadow-sm" style={{backgroundColor: '#F2F2F0'}}>
                <div className="mb-4">
                  <h3 className="font-serif text-2xl text-gray-800">
                    Clima Esperado
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Para finales de Marzo en Concordia, habrán temperaturas entre 
                    <strong> 25°C (día)</strong> y <strong>15°C (noche)</strong>.
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

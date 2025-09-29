'use client';

import React from 'react';

const GiftList: React.FC = () => {
  return (
    <section id="regalos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-8">
            Lista de Regalos
          </h2>
          <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-12"></div>

          {/* Mensaje inspiracional */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans italic max-w-3xl mx-auto">
              "Muchos de ustedes viajarán desde distintos lugares del mundo para celebrar con nosotros, 
              así que tu presencia tiene una gran importancia para nosotros y es todo lo que podríamos pedir. 
              <br /><br />
              Si aún así quieres acompañarnos con un detalle especial, hemos creado un fondo para nuestra luna de miel. 
              ¡Gracias por ser parte de nuestra historia!"
            </p>
          </div>

          {/* Datos bancarios */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* México */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl text-gray-800 mb-6 flex items-center justify-center">
                <span className="mr-3">🇲🇽</span>
                México
              </h3>
              
              <div className="space-y-6">
                {/* Franco - México */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-serif text-lg text-gray-800 mb-4">Franco Longhi</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Banco:</strong> BBVA Bancomer</div>
                    <div><strong>Cuenta:</strong> 1525412590</div>
                    <div><strong>CLABE:</strong> 012180015254125906</div>
                  </div>
                </div>

                {/* Sol - México */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-serif text-lg text-gray-800 mb-4">Sol Traffano</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Banco:</strong> BBVA Bancomer</div>
                    <div><strong>Cuenta:</strong> XXXXXXXXXX</div>
                    <div><strong>CLABE:</strong> XXXXXXXXXX</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Argentina */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl text-gray-800 mb-6 flex items-center justify-center">
                <span className="mr-3">🇦🇷</span>
                Argentina
              </h3>
              
              <div className="space-y-6">
                {/* Franco - Argentina */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-serif text-lg text-gray-800 mb-4">Franco Longhi</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Banco:</strong> Galicia</div>
                    <div><strong>CBU:</strong> 0070019130004055731523</div>
                    <div><strong>Alias:</strong> francolonghi.gal</div>
                  </div>
                </div>

                {/* Sol - Argentina */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-serif text-lg text-gray-800 mb-4">Sol Traffano</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div><strong>Banco:</strong> MercadoPago</div>
                    <div><strong>CBU:</strong> XXXXXXXXXXXXX</div>
                    <div><strong>Alias:</strong> XXXXXXXXXXXXX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nota adicional */}
          <div className="mt-12">
            <p className="text-gray-500 text-sm font-sans max-w-2xl mx-auto">
              ¡Gracias por ser parte de nuestro día especial! Su amor y apoyo significan el mundo para nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftList;

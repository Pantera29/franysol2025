'use client';

import React, { useState } from 'react';

const GiftList: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const CopyButton = ({ text, fieldName }: { text: string; fieldName: string }) => (
    <button
      onClick={() => copyToClipboard(text, fieldName)}
      className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors"
      title="Copiar"
    >
      {copiedField === fieldName ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      )}
    </button>
  );

  return (
    <section id="regalos" className="py-20" style={{backgroundColor: '#F2F2F0'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ícono de Regalo */}
          <div className="flex justify-center mb-12">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-16 h-16 md:w-20 md:h-20 text-black"
            >
              <polyline points="20 12 20 22 4 22 4 12"></polyline>
              <rect x="2" y="7" width="20" height="5"></rect>
              <line x1="12" y1="22" x2="12" y2="7"></line>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
          </div>

          {/* Mensaje inspiracional */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans italic max-w-3xl mx-auto">
            Tu presencia es el mejor regalo que podríamos recibir.<br />
              Si aún así quieres acompañarnos con un detalle especial, hemos creado un fondo para nuestra luna de miel.
              <br /><br /> 
              ¡Gracias por ser parte de nuestra historia!
            </p>
          </div>

          {/* Datos bancarios */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Argentina */}
            <div className="p-8">
              <h3 className="font-serif text-2xl text-gray-800 mb-6 flex items-center justify-center">
                <span className="mr-3">🇦🇷</span>
                Argentina
              </h3>
              
              <div className="space-y-6">
                {/* Franco - Argentina */}
                <div className="rounded-lg p-6 shadow-sm" style={{backgroundColor: '#F2F2F0'}}>
                  <h4 className="font-serif text-lg text-gray-800 mb-4">Franco Longhi</h4>
                  <div className="text-sm text-gray-600 space-y-2 text-center">
                    <div><strong>Banco:</strong> Galicia</div>
                    <div className="flex items-center justify-center">
                      <span><strong>Alias:</strong> francolonghi.gal</span>
                      <CopyButton text="francolonghi.gal" fieldName="alias-arg" />
                    </div>
                    <div className="flex items-center justify-center">
                      <span><strong>CBU:</strong> 0070019130004055731523</span>
                      <CopyButton text="0070019130004055731523" fieldName="cbu-arg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* México */}
            <div className="p-8">
              <h3 className="font-serif text-2xl text-gray-800 mb-6 flex items-center justify-center">
                <span className="mr-3">🇲🇽</span>
                México
              </h3>
              
              <div className="space-y-6">
                {/* Franco - México */}
                <div className="rounded-lg p-6 shadow-sm" style={{backgroundColor: '#F2F2F0'}}>
                  <h4 className="font-serif text-lg text-gray-800 mb-4">Franco Longhi</h4>
                  <div className="text-sm text-gray-600 space-y-2 text-center">
                    <div><strong>Banco:</strong> BBVA </div>
                    <div><strong>Cuenta:</strong> 1525412590</div>
                    <div className="flex items-center justify-center">
                      <span><strong>CLABE:</strong> 012180015254125906</span>
                      <CopyButton text="012180015254125906" fieldName="clabe-mx" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftList;

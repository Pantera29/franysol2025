'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Hook personalizado para calcular solo los días restantes
const useDaysCountdown = (targetDate: Date) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  const memoizedTargetDate = useMemo(() => targetDate.getTime(), [targetDate]);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const now = new Date();
      const target = new Date(memoizedTargetDate);
      
      // Resetear las horas para calcular días completos
      now.setHours(0, 0, 0, 0);
      target.setHours(0, 0, 0, 0);
      
      const diffTime = target.getTime() - now.getTime();
      
      if (diffTime <= 0) {
        setDaysLeft(0);
        return;
      }
      
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    calculateDaysLeft();
    
    // Actualizar cada día a medianoche
    const interval = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [memoizedTargetDate]);

  return daysLeft;
};

const Countdown: React.FC = () => {
  // Fecha del casamiento: 28 de marzo de 2026
  const weddingDate = useMemo(() => new Date(2026, 2, 28), []); // Mes 2 = marzo (0-indexado)
  const daysLeft = useDaysCountdown(weddingDate);

  return (
    <section className="py-10" style={{backgroundColor: '#F2F2F0'}}>
      <div className="container mx-auto px-6">
        <div className="min-h-[250px] flex items-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
                Bienvenidos a nuestra boda
              </h2>
              <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-6"></div>
            </div>
            
            {/* Countdown Timer - Solo Días */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gray-800 rounded-lg px-8 py-4 min-w-[120px]">
                  {daysLeft}
                </div>
                <div className="text-lg md:text-xl text-gray-600 font-light">
                  {daysLeft === 1 ? 'día' : 'días'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;

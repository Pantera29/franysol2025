'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Hook personalizado para calcular días, horas, minutos y segundos restantes
const useFullCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const memoizedTargetDate = useMemo(() => targetDate.getTime(), [targetDate]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(memoizedTargetDate);
      
      const diffTime = target.getTime() - now.getTime();
      
      if (diffTime <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    
    // Actualizar cada segundo
    const interval = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(interval);
  }, [memoizedTargetDate]);

  return timeLeft;
};

const Countdown: React.FC = () => {
  // Fecha del casamiento: 28 de marzo de 2026
  const weddingDate = useMemo(() => new Date(2026, 2, 28), []); // Mes 2 = marzo (0-indexado)
  const timeLeft = useFullCountdown(weddingDate);

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
            
            {/* Countdown Timer - Días, Horas, Minutos y Segundos */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
                {/* Días */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-suculenta rounded-lg px-4 py-3">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-light">
                    {timeLeft.days === 1 ? 'día' : 'días'}
                  </div>
                </div>

                {/* Horas */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-suculenta rounded-lg px-4 py-3">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-light">
                    {timeLeft.hours === 1 ? 'hora' : 'horas'}
                  </div>
                </div>

                {/* Minutos */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-suculenta rounded-lg px-4 py-3">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-light">
                    {timeLeft.minutes === 1 ? 'minuto' : 'minutos'}
                  </div>
                </div>

                {/* Segundos */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-suculenta rounded-lg px-4 py-3">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-light">
                    {timeLeft.seconds === 1 ? 'segundo' : 'segundos'}
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

export default Countdown;

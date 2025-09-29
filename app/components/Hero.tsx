'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Hook personalizado para calcular los meses y días restantes
const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<{months: number, days: number}>({months: 0, days: 0});

  // Memoizar la fecha objetivo para evitar recreaciones innecesarias
  const memoizedTargetDate = useMemo(() => targetDate.getTime(), [targetDate]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(memoizedTargetDate);
      
      // Resetear las horas para calcular días completos
      now.setHours(0, 0, 0, 0);
      target.setHours(0, 0, 0, 0);
      
      const diffTime = target.getTime() - now.getTime();
      
      if (diffTime <= 0) {
        setTimeLeft(prev => prev.months === 0 && prev.days === 0 ? prev : {months: 0, days: 0});
        return;
      }
      
      // Calcular meses y días de forma más simple
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const currentDay = now.getDate();
      
      const targetYear = target.getFullYear();
      const targetMonth = target.getMonth();
      const targetDay = target.getDate();
      
      // Calcular diferencia en meses
      let months = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);
      
      // Si el día del mes actual es mayor al día objetivo, restar un mes
      if (currentDay > targetDay) {
        months--;
      }
      
      // Calcular días restantes
      const tempDate = new Date(currentYear, currentMonth, currentDay);
      tempDate.setMonth(tempDate.getMonth() + months);
      
      const daysDiff = Math.ceil((target.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
      const days = Math.max(0, daysDiff);
      
      const newTimeLeft = {months: Math.max(0, months), days};
      
      // Solo actualizar si los valores han cambiado
      setTimeLeft(prev => {
        if (prev.months !== newTimeLeft.months || prev.days !== newTimeLeft.days) {
          return newTimeLeft;
        }
        return prev;
      });
    };

    calculateTimeLeft();
    
    // Actualizar cada día a medianoche
    const interval = setInterval(calculateTimeLeft, 24 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [memoizedTargetDate]);

  return timeLeft;
};

const Hero: React.FC = () => {
  // Fecha del casamiento: 28 de marzo de 2026
  const weddingDate = useMemo(() => new Date(2026, 2, 28), []); // Mes 2 = marzo (0-indexado)
  const timeLeft = useCountdown(weddingDate);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight font-normal tracking-wide">
          SOL & FRAN
        </h1>

        {/* Countdown */}
        <div className="mb-6">
          <div className="text-3xl md:text-4xl font-sans font-light mb-2">
            {timeLeft.months > 0 || timeLeft.days > 0 ? (
              <span className="text-white/90">
                {timeLeft.months > 0 && (
                  <span>
                    {timeLeft.months} {timeLeft.months === 1 ? 'mes' : 'meses'}
                    {timeLeft.days > 0 && ' y '}
                  </span>
                )}
                {timeLeft.days > 0 && (
                  <span>
                    {timeLeft.days} {timeLeft.days === 1 ? 'día' : 'días'}
                  </span>
                )}
              </span>
            ) : (
              <span className="text-white/90">¡Hoy es el día!</span>
            )}
          </div>
          <p className="text-sm md:text-base font-sans tracking-widest uppercase opacity-70">
            {timeLeft.months > 0 || timeLeft.days > 0 ? 'para el gran día' : ''}
          </p>
        </div>

        {/* Fecha */}
        <p className="text-xl md:text-2xl font-sans tracking-wider opacity-90">
          28.03.26
        </p>
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

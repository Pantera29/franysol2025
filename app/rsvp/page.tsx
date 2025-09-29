'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests_count: number;
  dietary_restrictions: string;
  message: string;
  attending: boolean;
}

const RSVPPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    guests_count: 1,
    dietary_restrictions: '',
    message: '',
    attending: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (formData.guests_count < 1 || formData.guests_count > 10) {
      newErrors.guests_count = 'Número de invitados debe ser entre 1 y 10' as any;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Aquí se enviará a la API de Supabase
      console.log('Datos del formulario:', formData);
      
      // Simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleAttendingChange = (attending: boolean) => {
    setFormData(prev => ({
      ...prev,
      attending,
      guests_count: attending ? prev.guests_count : 0
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <Link href="/" className="font-serif text-2xl text-gray-800 hover:text-gray-600 transition-colors">
              Sol & Fran
            </Link>
          </div>
        </header>

        {/* Confirmación */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">
                ¡Gracias!
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {formData.attending 
                  ? '¡Nos emociona que puedas acompañarnos en nuestro día especial!'
                  : 'Gracias por hacérnoslo saber. Te extrañaremos en nuestro día especial.'
                }
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-serif text-xl text-gray-800 mb-4">Resumen de tu confirmación:</h3>
                <div className="space-y-2 text-gray-600">
                  <div><strong>Nombre:</strong> {formData.name}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>¿Asistirás?:</strong> {formData.attending ? 'Sí' : 'No'}</div>
                  {formData.attending && (
                    <div><strong>Número de invitados:</strong> {formData.guests_count}</div>
                  )}
                  {formData.dietary_restrictions && (
                    <div><strong>Restricciones alimentarias:</strong> {formData.dietary_restrictions}</div>
                  )}
                </div>
              </div>

              <Link 
                href="/"
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="font-serif text-2xl text-gray-800 hover:text-gray-600 transition-colors">
            Sol y Fran
          </Link>
        </div>
      </header>

      {/* Formulario RSVP */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">
              Confirmación de Asistencia
            </h1>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Por favor confirma tu asistencia antes del 15 de Diciembre de 2025
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ¿Asistirás? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ¿Podrás acompañarnos en nuestro día especial?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleAttendingChange(true)}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    formData.attending
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  ¡Sí, estaré ahí! 🎉
                </button>
                <button
                  type="button"
                  onClick={() => handleAttendingChange(false)}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                    !formData.attending
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  No podré asistir 😢
                </button>
              </div>
            </div>

            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tu nombre completo"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="+52 123 456 7890"
              />
            </div>

            {/* Número de invitados (solo si asiste) */}
            {formData.attending && (
              <div>
                <label htmlFor="guests_count" className="block text-sm font-medium text-gray-700 mb-2">
                  Número total de invitados (incluyéndote)
                </label>
                <select
                  id="guests_count"
                  name="guests_count"
                  value={formData.guests_count}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
                {errors.guests_count && <p className="text-red-500 text-sm mt-1">{errors.guests_count}</p>}
              </div>
            )}

            {/* Restricciones alimentarias (solo si asiste) */}
            {formData.attending && (
              <div>
                <label htmlFor="dietary_restrictions" className="block text-sm font-medium text-gray-700 mb-2">
                  Restricciones alimentarias o alergias
                </label>
                <textarea
                  id="dietary_restrictions"
                  name="dietary_restrictions"
                  value={formData.dietary_restrictions}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Por favor menciona cualquier alergia o restricción alimentaria..."
                />
              </div>
            )}

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje para los novios (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Comparte tus buenos deseos o algún mensaje especial..."
              />
            </div>

            {/* Botón de envío */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
              </button>
            </div>
          </form>

          {/* Nota */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Si tienes alguna pregunta, no dudes en contactarnos directamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPPage;

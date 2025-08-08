'use client'; 

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { getBootcamps, BootcampResponse } from "@/api/supabase.api";

export const DashPublic = () => {
  const [bootcamps, setBootcamps] = useState<BootcampResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const data = await getBootcamps();
        setBootcamps(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBootcamps();
  }, []); 

  return (
    <>
      {/* Sección de Cabecera (Hero) */}
      <header className="bg-black text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">¡Bienvenido a Modigobootcamp!</h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforma tu carrera con nuestro intensivo programa de desarrollo web.
          </p>
          <Link href="#programa" className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Descubre nuestro programa
          </Link>
        </div>
      </header>

      {/* Sección "Acerca de" */}
      <section className="bg-red-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">El futuro de la programación te espera</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            En Modigobootcamp, no solo aprenderás a programar, sino a construir aplicaciones completas y escalables. Te preparamos para los desafíos del mundo laboral con un enfoque práctico y centrado en las tecnologías más actuales.
          </p>
        </div>
      </section>

      {/* Sección del Programa (Temario) dinámico */}
      <section id="programa" className="bg-teal-600 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Nuestros bootcamps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {isLoading && <p className="text-black">Cargando bootcamps...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            
            {bootcamps.map((bootcamp, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl text-black font-bold mb-3">{bootcamp.title}</h3>
                <p className="text-black text-gray-600">{bootcamp.synopsis}</p>
                <div className="mt-4 text-sm text-black">
                  {/* Aquí mostramos el mensaje que invita a registrarse */}
                  <p>Precio: Regístrate para más información</p>
                  <p>Coach: Regístrate para más información</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Llamada a la Acción (CTA) */}
      <section className="bg-white text-black py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Tu futuro como programador comienza aquí!</h2>
          <p className="text-lg md:text-xl mb-8">
            Regístrate para recibir más información y dar el primer paso.
          </p>
          <Link href="#" className="bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Inscríbete ahora
          </Link>
        </div>
      </section>

      {/* Pie de Página (Footer) */}
      <footer className="bg-black text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Modigobootcamp. Todos los derechos reservados.</p>
        </div>
      </footer>
      </>
    )
}
import React from "react";
import Link from 'next/link';

export const DashPublic = () => {
    return(
        <>
        {/* Sección de Cabecera (Hero) */}
      <header className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">¡Bienvenido a Modigobootcamp!</h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforma tu carrera con nuestro intensivo programa de desarrollo web.
          </p>
          <Link href="#programa" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Descubre nuestro programa
          </Link>
        </div>
      </header>

      {/* Sección "Acerca de" */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">El futuro de la programación te espera</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Modigobootcamp, no solo aprenderás a programar, sino a construir aplicaciones completas y escalables. Te preparamos para los desafíos del mundo laboral con un enfoque práctico y centrado en las tecnologías más actuales.
          </p>
        </div>
      </section>

      {/* Sección del Programa (Temario) simplificado */}
      <section id="programa" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Un currículo diseñado para el éxito</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Módulo 1 (simplificado) */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-3">Fundamentos Sólidos</h3>
              <p className="text-gray-600">
                Desde las bases de la web hasta los principios de la programación moderna.
              </p>
            </div>
            {/* Módulo 2 (simplificado) */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-3">Tecnologías de Vanguardia</h3>
              <p className="text-gray-600">
                Domina frameworks y librerías clave como Next.js, React y Tailwind.
              </p>
            </div>
            {/* Módulo 3 (simplificado) */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-3">Aplicaciones Completas</h3>
              <p className="text-gray-600">
                Aprende a conectar tus proyectos con bases de datos y a desplegarlos en la nube.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600">
                "El bootcamp me dio las bases sólidas que necesitaba para empezar mi carrera como desarrollador. Los proyectos prácticos fueron la clave."
              </p>
              <p className="mt-4 font-semibold">- Estudiante Satisfecho</p>
            </div>
            {/* Testimonio 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600">
                "La combinación de Next.js y Supabase es increíble. Aprendí a construir aplicaciones robustas en poco tiempo. ¡Muy recomendado!"
              </p>
              <p className="mt-4 font-semibold">- Exalumno del Bootcamp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Llamada a la Acción (CTA) */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Tu futuro como programador comienza aquí!</h2>
          <p className="text-lg md:text-xl mb-8">
            Regístrate para recibir más información y dar el primer paso.
          </p>
          <Link href="#" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Inscríbete ahora
          </Link>
        </div>
      </section>

      {/* Pie de Página (Footer) */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Modigobootcamp. Todos los derechos reservados.</p>
        </div>
      </footer>
      </>
    )
}
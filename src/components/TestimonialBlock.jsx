import React from 'react';
import  {testimonios } from '../data'
export const TestimonioCard = ({ testimonio }) => {
  const { testimonio: texto, nombre, cargo, avatar } = testimonio;

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Cita del Testimonio */}
      <p className="text-gray-700 italic mb-4 relative before:content-['“'] before:text-4xl before:text-indigo-400 before:absolute before:-top-4 before:-left-3 after:content-['”'] after:text-4xl after:text-indigo-400 after:absolute after:-bottom-1 after:-right-3">
        {texto}
      </p>

      {/* Separador visual */}
      <hr className="my-4 border-indigo-100" />

      {/* Información del Cliente */}
      <div className="flex items-center">
        {/* Avatar */}
       
        <div>
          <p className="font-semibold text-indigo-600">{nombre}</p>
          <p className="text-sm text-gray-500">{cargo}</p>
        </div>
      </div>
    </div>
  );
};
const TestimonialBlock = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Confianza
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </p>
        </div>

        {/* Contenedor de la Cuadrícula Responsiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeo y Renderizado de Componentes */}
          {testimonios.map(testimonio => (
            <TestimonioCard key={testimonio.id} testimonio={testimonio} />
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default TestimonialBlock;

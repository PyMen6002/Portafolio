import React from 'react';

const experienciaData = [
  {
    fecha: 'Actualidad',
    titulo: 'Aprendiendo Frontend',
    descripcion: 'Actualmente estoy aprendiendo diseño web usando React y Tailwind CSS.',
  },
  {
    fecha: '2024 - 2025',
    titulo: 'Django y Flask',
    descripcion: 'Desarrollé una web con stripe integrado usando Django como Backend. Y una API REST con Flask.',
  },
  {
    fecha: '2023 - 2025',
    titulo: 'Machine Learning Con Python',
    descripcion: 'Realicé varios proyectos usando tensorflow y pytorch. Entre ellos, un modelo que predecía señales en el mercado de valores',
  },
  {
    fecha: '2022 - 2023',
    titulo: 'Unreal Engine',
    descripcion: 'Desarrollé un videojuego en Unreal Engine 4 usando Blueprints.', 
  },
  {
    fecha: '2021 - 2022',
    titulo: 'Python',
    descripcion: 'Comencé a programar en python y a meterme en el mundo del desarrollo de software.',
  },
];

export function Experiencia() {
  return (
    <section id='experiencia'>
      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold mb-6">Mi Experiencia</h2>
        <ul className="relative">
          {experienciaData.map((evento, index) => (
            <li key={index} className="mb-10 flex items-start w-full last:mb-0">
              {/* Línea central con el punto */}
              <div
                className={`absolute left-6 w-0.25 ${
                  index === experienciaData.length - 1
                    ? 'h-0'  // Para el último hito, la línea se corta
                    : 'h-37'     // Para los demás hitos, la línea se extiende completamente
                } bg-gradient-to-b from-yellow-400 to-yellow-300`} 
              />
              {/* Punto en la línea */}
              <div className="absolute left-3.5 w-5 h-5 bg-yellow-500 rounded-full border-4 border-gray-700 z-10" />
              
              {/* Contenido a la derecha de la línea */}
              <div className="relative flex flex-col items-start ml-16"> 
                {/* Fecha */}
                <div className="text-yellow-500 font-semibold text-lg mb-2">{evento.fecha}</div>
                {/* Titulo */}
                <div className="text-xl font-semibold text-white">{evento.titulo}</div>
                {/* Descripción */}
                <p className="text-black font-bold text-sm mt-1 max-w-md break-words">{evento.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client"; // Esto marca el archivo como un Client Component

import React from 'react';
import { ButtonLink } from './button_link';

export const Contacto = () => {
  // Función para copiar al portapapeles
  const copyEmailToClipboard = () => {
    const email = "jmpgocamp1@gmail.com"; // Aquí va el correo
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles!");
      })
      .catch(err => {
        alert("Error al copiar al portapapeles: " + err);
      });
  };

  return (
    <section id="contacto" className="flex justify-center flex-col items-center">
      <h2 className="text-3xl font-bold text-center pt-4 mt-20 mb-10">
        Contacto
        <p className="text-lg text-center max-w-2xl mt-10 text-justify">
          Puedes contactar conmigo a través de mi email o a través de mi cuenta de GitHub para cualquier consulta.
        </p>
      </h2>

      {/* Espacio entre el texto y el botón */}
      <div className="mb-100 text-2xl font-bold">
        {/* Enlace para copiar el correo */}
        <a
          href="#"
          onClick={copyEmailToClipboard}
          className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 mr-5"
        >
          <i className="fas fa-envelope mr-2"></i> Copiar correo
        </a>
        <ButtonLink type="github" link="https://github.com/PyMen6002" text='GitHub' />
      </div>
    </section>
  );
}

import React from 'react';

export function ButtonLink({ type = "", link = "", text = "" }) {
  return (
    <>
      {/* Enlazamos Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
      />
      
      {/* Botón con icono de GitHub */}
      <a 
        href={link} // Cambia el enlace con tu perfil de GitHub
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
      >
        <i className={`fab fa-${type} mr-2`}></i> {/* Interpolación correcta del tipo de icono */}
        {text}
      </a>
    </>
  );
}

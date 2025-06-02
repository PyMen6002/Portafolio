'use client';

import React, { useState, useEffect, useRef } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);  // Si no está intersectando, entonces está pegado
      },
      { threshold: 0 } // Esto asegura que se dispare cuando el header deje de ser visible
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Cleanup
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`bg-black bg-opacity-90 p-4 top-0 z-50 shadow-lg rounded-2xl max-w-screen-xl mx-auto ${isSticky ? 'sticky' : ''}`}
    >
      <nav className="flex items-center justify-between w-full px-4">
        {/* Logo */}
        <a href="#inicio" className="text-white text-lg font-bold hover:text-indigo-500 transition-colors">
          <img
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Navegación (centrada horizontalmente) */}
        <div className="hidden md:flex gap-6 text-white mx-auto">
          <a href="#inicio" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Inicio</a>
          <a href="#experiencia" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Experiencia</a>
          <a href="#proyectos" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Proyectos</a>
          <a href="#formacion" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Formación</a>
          <a href="#contacto" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Contacto</a>
        </div>

        {/* Menú de móvil */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white hover:text-indigo-500 focus:outline-none">
            {/* Icono de menú hamburguesa */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-black bg-opacity-90 text-white py-4 shadow-lg rounded-2xl transition-all duration-300 ease-in-out">
          <a href="#inicio" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Inicio</a>
          <a href="#experiencia" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Experiencia</a>
          <a href="#proyectos" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Proyectos</a>
          <a href="#formacion" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Formación</a>
          <a href="#contacto" className="hover:text-indigo-500 transition-colors px-3 py-2 rounded-md text-lg font-medium">Contacto</a>
        </div>
      )}
    </header>
  );
}

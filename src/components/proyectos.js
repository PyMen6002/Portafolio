"use client";

import React, { useEffect, useRef, useState } from 'react';

const proyectosData = [
    {
        'titulo': 'IA ChatBot',
        'descripcion': 'Chatbot con memoria, usando python, Ollama, speech recognition, wikipedia, webbrowser y pyttsx3.',
        'enlace': 'https://github.com/PyMen6002/IA_Chatbot'
    },
    {
        'titulo': 'Web de Cursos Online',
        'descripcion': 'Web de cursos online gratuitos usando la biblioteca django de python.',
        'enlace': 'https://github.com/PyMen6002/courses-online'
    },
    {
        'titulo': 'Tienda Online con Stripe',
        'descripcion': 'Tienda online con stripe integrado usando Django como Backend.',
        'enlace': 'https://github.com/PyMen6002/TiendaOnlineStripe'
    },
    {
        'titulo': 'Tienda Online',
        'descripcion': 'Tienda online usando Flask como Backend.',
        'enlace': 'https://github.com/PyMen6002/Online-store'
    }
];

export const Proyectos = () => {
    const [isVisible, setIsVisible] = useState(false);
    const proyectosRef = useRef(null); // Referencia al contenedor de los proyectos

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true); // Si el contenedor es visible, se activa la animación
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Se activa cuando el 50% del contenedor es visible
        });

        // Observar el contenedor de los proyectos
        if (proyectosRef.current) {
            observer.observe(proyectosRef.current);
        }

        return () => {
            if (proyectosRef.current) {
                observer.unobserve(proyectosRef.current);
            }
        };
    }, []);

    return (
        <section 
            id='proyectos' 
            className="proyectos px-6 sm:px-12 lg:px-20 py-10"
            ref={proyectosRef} // Asignamos la referencia al contenedor
        >
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl font-bold mb-10 mt-10'>Proyectos</h2>
                
                {/* GRID de 3 columnas con margen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proyectosData.map((proyecto, index) => (
                        <div
                            key={index}
                            className={`card max-w-100 min-h-[200px] flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-md 
                                       dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 ease-in-out transform 
                                       hover:shadow-lg hover:scale-105 
                                       ${isVisible ? 'animate-fadeIn' : ''}`} // Aplicamos la animación a todas las tarjetas al mismo tiempo
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {proyecto.titulo}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {proyecto.descripcion}
                            </p>
                            <a 
                                href={proyecto.enlace} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-4 w-fit px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg 
                                           hover:bg-blue-800 hover:shadow-md transition-all duration-300 ease-in-out flex items-center"
                            >
                                Ver más
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

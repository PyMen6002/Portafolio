import React from 'react'
import { Navbar } from '../components/navbar';
import { Inicio } from '../components/inicio';
import { Experiencia } from '../components/experiencia';
import { Proyectos } from '../components/proyectos';
import { Contacto } from '../components/contacto';

export default function page() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <p className='mt-10'/>
      <Experiencia />
      <p className='mt-10'/>
      <Proyectos />
      <p className='mt-10'/>
      <Contacto />
    </div>
  )
}

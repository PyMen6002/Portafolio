import React from 'react'
import { ButtonLink } from './button_link'

export function Inicio() {
  return (
    <section id="inicio" className="flex justify-center">
      <h1 className="text-4xl font-bold text-center pt-4 mt-20">
        Hey, soy Pablo

        <p className="text-lg text-center mt-4 max-w-2xl mt-5 text-justify">
        Desarrollador de aplicaciones de escritorio y desarrollo Web.
        <span className="text-yellow-500"> +5 años de experiencia</span>.
        Especializado en 
        <span className="text-green-500"> React</span>, 
        <span className='text-orange-500'> Tailwind</span>,
        <span className='text-blue-500'> Flask</span>, 
        <span className='text-violet-500'> Django</span>,
        <span className='text-cyan-500'> Tensorflow</span>,
        <span className='text-amber-500'> Pytorch</span>.
        </p>

        <p className='mt-5'/>
        <ButtonLink type="github" link="https://github.com/PyMen6002" text='GitHub' />
      </h1>

    </section>
  )
}


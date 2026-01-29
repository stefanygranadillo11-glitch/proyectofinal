import React, { useEffect, useState } from 'react'
import headerMobile from '../image/HeaderMobile.jpg'

const SectionHeader = () => {

  return (
    <header className='h-screen'>

        <div className="max-lg:bg-[url('./image/HeaderMobile.jpg')] bg-center bg-cover xl:mx-auto lg:w-260 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:rounded-2xl lg:bg-purple-300">
        <figure className='max-lg:hidden lg:w-75 '>
            <img src={headerMobile} className='w-full lg:mask-[linear-gradient(to_left,black_80%,transparent_100%)] lg:rounded-br-2xl lg:rounded-tl-2xl' alt="Retrato de la Odontologa" />
        </figure>
        <div className='lg:flex lg:flex-col lg:w-1/2 lg:pl-16'>
        <div className='flex flex-col p-8 gap-3 lg:flex lg:flex-col lg:pb-0'>
        <h2 className='text-xl px-8 md:px-4 lg:px-0'>Odontólogo General e Infantil</h2>
        <h1 className='text-2xl md:text-4xl font-semibold text-blue-950 px-8 md:px-4 lg:px-0'> Michelle Ghazal <br /> El Bar</h1>   
        <p className='text-lg w-55 px-8 md:text-xl md:w-90 md:px-4 lg:px-0 lg:w-full'>
            “Soy la Dra. Michelle Ghazal el Bar y mi misión es brindarte una atención integral. En nuestro consultorio, no solo tratamos dientes, cuidamos personas."
            </p>
        </div>
        
        <div className="flex flex-col pt-32 pl-12 pr-12 pb-16 gap-4 lg:pt-8 lg:pl-4 lg:pb-0 lg:flex-row">
        <button className="bg-purple-400 text-blue-950 px-6 py-2  rounded-lg font-semibold hover:bg-pink-50 transition">
        Agenda tu consulta
        </button>
        <button className="border-2 border-blue-950  bg-purple-400/30 text-blue-950 px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-400 transition">
        Contáctanos
        </button>
        </div>

        </div>
        </div>
    </header>
  )
}

export default SectionHeader

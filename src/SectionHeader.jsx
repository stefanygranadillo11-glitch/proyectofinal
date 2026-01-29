import React, { useEffect, useState } from 'react'
import headerMobile from './image/HeaderMobile.jpg'
import logo from './image/logo2.png'
import hamburguer from './icons/menu.svg'
import x from './icons/x.svg'
import ResponsiveMenu from './ResponsiveMenu'

const SectionHeader = () => {
    const [open, setOpen] = useState(false); //creamos un estado para controlar la apertura y cierre del menu
    const toggleMenu = () => {
        setOpen(!open);
    };
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768){
            setOpen(false)
        }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    useEffect (() => {
        if(open){
          document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [open])
  return (
    <header className='h-screen'>
        <div className='bg-purple-400/80 h-20 flex justify-between items-center p-3 lg:py-5 lg:px-10'>

        <div className='flex items-center'>
            <figure className='w-16'>
            <img src={logo} className='w-full' alt="Logo Personal" />
            </figure>

            <p className='lg:text-md p-4 font-semibold text-blue-950'>MIchelle Ghazal</p> 


        </div>


        <nav className='max-lg:hidden flex justify-between w-130 h-8 items-center p-5 font-semibold text-blue-950'>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Inicio</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Sobre mi</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Servicios</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Ubicación</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Contacto</a>
        </nav>

        <button href="#" className='max-lg:hidden px-3 py-2 text-lg text-blue-950 font-bold hover:text-white hover:border-2 hover:border-white hover:bg-purple-900 transition-all duration-500'>Agendar cita</button>

        {/*Mobile Hmaburguer Section*/}

        {!open && (
            <figure onClick={toggleMenu} className='w-10 cursor-pointer p-1 lg:hidden'>
            <img src={hamburguer} className='w-full' alt="Icono Hamburguesa"/>
            </figure>
        )
        }

        {open && (
            <figure onClick={toggleMenu} className='w-10 cursor-pointer p-1 lg:hidden z-20'>
            <img src={x} className='w-full' alt="Icono Cerrado"/>
            </figure>
        )
        }
            
        {/*Mobile sldeebar Section*/}

        {open ? 
        <div className='bg-purple-500 overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in'>
          <nav className='flex flex-col font-semibold text-blue-950'>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Inicio</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Sobre mi</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Servicios</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Ubicación</a>
            <a href="#" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Contacto</a>
        </nav>

        <button href="#" className='px-3 py-2 text-blue-950 font-bold hover:text-white hover:border-2 hover:border-white hover:bg-purple-900 transition-all duration-500'>Agendar cita</button>


        </div>
        :
        <div className='bg-purple-400/80 overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in'>

        </div>

        }
        </div>

        <div className="max-lg:bg-[url('./image/HeaderMobile.jpg')] bg-center bg-cover xl:mx-auto lg:mt-4 lg:w-260 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:rounded-2xl lg:bg-purple-300">
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

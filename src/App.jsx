import React, { useEffect, useState } from 'react'
import logo from './image/logo2.png'
import hamburguer from './icons/menu.svg'
import x from './icons/x.svg'
import SectionHeader from './components/SectionHeader'
import SectionSobreMi from './components/SectionSobreMi'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
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
    <>
    <div className="scroll-smooth">

      <div className='bg-purple-400/80 h-20 flex justify-between items-center p-3 lg:py-5 lg:px-10'>
        
        <div className='flex items-center'>
          <figure className='w-16'>
          <img src={logo} className='w-full' alt="Logo Personal" />
          </figure>
        
          <p className='lg:text-md p-4 font-semibold text-blue-950'>MIchelle Ghazal</p> 
        
        
          </div>
        
          <nav className='max-lg:hidden flex justify-between w-130 h-8 items-center p-5 font-semibold text-blue-950'>
          <Link to="/" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Inicio</Link>
          <Link to="/sobre-mi" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Sobre mi</Link>
          <Link to="/Servicios" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Servicios</Link>
          <Link to="/Ubicación" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Ubicación</Link>
          <Link to="/Contacto" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Contacto</Link>
          </nav>
        
          <Link to="/agendar-cita" className='max-lg:hidden px-3 py-2 text-lg text-blue-950 font-bold hover:text-white hover:border-2 hover:border-white hover:bg-purple-900 transition-all duration-500'>Agendar cita</Link>

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
          <Link to="/" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Inicio</Link>
          <Link to="/sobre-mi" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Sobre mi</Link>
          <Link to="/Servicios" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Servicios</Link>
          <Link to="/Ubicación" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Ubicación</Link>
          <Link to="/Contacto" className='px-4 py-2 hover:text-white hover:bg-purple-950 hover:rounded-b-2xl hover:shadow-lg hover:shadow-white transition-shadow duration-300'>Contacto</Link>
          </nav>
        
          <Link to="/agendar-cita" className='px-3 py-2 text-blue-950 font-bold hover:text-white hover:border-2 hover:border-white hover:bg-purple-900 transition-all duration-500'>Agendar cita</Link>
        
          </div>
                :
          <div className='bg-purple-400/80 overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in'>
        
          </div>
        
          }
          </div>

      <main className='lg:pt-20'>
      <Routes>
      <Route path='/' element={<SectionHeader/>}></Route>
      <Route path='/sobre-mi' element={<SectionSobreMi/>}></Route>
      <Route path="*" element={<SectionHeader />} />
      </Routes>
      </main>
    </div>
    </>
  )
}

export default App

import { useEffect } from 'react'
import { useState } from "react"
import db from '../firebase/firebase'


import {collection,getDoc, orderBy , query,limit ,doc, setDoc, getDocs, where} from 'firebase/firestore'

import { CalendarIcon } from '@heroicons/react/outline'
import SubMenuFechasTodos from '../components/MenuRegistro/SubMenuFechasTodos';
import Footer from '../components/footer'

const menuTop = [
    { 
     MenuOption1: 'Fecha' ,
     MenuOption2: 'Proyecto', 
     MenuOption3: 'Referencia' 
    },
    { 
     FechaOption1: 'Todos' ,
     FechaOption2: 'Diario', 
     FechaOption3: 'Semanal',
     FechaOption4: 'Mensual',
     FechaOption5: 'Calendario' 
    },
    {
     FechaTodosOption1: 'Mas reciente' ,
     FechaTodosOption2: 'Mas Antiguo',
    }
  ]

export default function Registro2 (){
    const [menuTopActive,setMenuTopActive] = useState ('Fecha')
    const [subMenuFechaActive,setSubMenuFechaActive] = useState ('Todos')
    // const [subMenuTodosActive,setSubMenuTodosActive] = useState ('Mas reciente')

    


    


    const toggleMenuTopActive= (e)=>{
        setMenuTopActive(e.target.innerText)
        
    }
    const toggleSubMenuFechaActive= (e)=>{
        setSubMenuFechaActive(e.target.innerText)
    }
    return(
        


        <>
        <div className='font-bold  grid grid-cols-3 text-center mt-2'>
                <h1 onClick={toggleMenuTopActive} className={menuTopActive === 'Fecha'  ? 'border-b border-blue-400 p-2': 'm-2'}>Fecha</h1>
                <h1 onClick={toggleMenuTopActive} className={menuTopActive === 'Proyecto'  ? 'border-b border-blue-400 p-2 ': 'm-2'}>Proyecto</h1>
                <h1 onClick={toggleMenuTopActive} className={menuTopActive === 'Referencia'  ? 'border-b border-blue-400 p-2': 'm-2'}>Referencia</h1>
        </div>

        <div className="w-full h-0.5 bg-gray-300 "></div>

        {/* SUBMENU FECHA */}

        { menuTopActive === 'Fecha' ? 
            <div className='grid grid-cols-5 text-center text-xs mt-4 font-bold text-gray-600 mx-2'>
                <h2 onClick={toggleSubMenuFechaActive} className={subMenuFechaActive === 'Todos'  ? 'bg-blue-400 rounded-md p-2 transition-all': 'm-2'}>Todos</h2>
                <h2 onClick={toggleSubMenuFechaActive} className={subMenuFechaActive === 'Diario'  ? 'bg-blue-400 rounded-md p-2 transition-all': 'm-2'}>Diario</h2>
                <h2 onClick={toggleSubMenuFechaActive} className={subMenuFechaActive === 'Semanal'  ? 'bg-blue-400 rounded-md p-2 transition-all': 'm-2'}>Semanal</h2>
                <h2 onClick={toggleSubMenuFechaActive} className={subMenuFechaActive === 'Mensual'  ? 'bg-blue-400 rounded-md p-2 transition-all': 'm-2'}>Mensual</h2>
                <div className=" relative flex justify-center items-center " >
                    <div className=' relative z-10'>
                    <h2 onClick={toggleSubMenuFechaActive} className={subMenuFechaActive === 'Calendario'  ? 'bg-blue-400 rounded-md p-2 transition-all ': 'm-2'}>Calendario</h2>
                    </div>
                    <CalendarIcon onClick={toggleSubMenuFechaActive} className={subMenuFechaActive === 'Calendario'  ? 'hidden': 'h-12 absolute opacity-20'} ></CalendarIcon>
                </div>
            </div>
            : null
            }
            
            {/* SUBMENU FECHA TODOS */}
            
            { menuTopActive === 'Fecha' && subMenuFechaActive  === 'Todos' ? 

            <SubMenuFechasTodos type={subMenuFechaActive}></SubMenuFechasTodos>  : null }

            { menuTopActive === 'Fecha' && subMenuFechaActive  === 'Diario' ? 

            <SubMenuFechasTodos type={subMenuFechaActive}></SubMenuFechasTodos>    : null }

            { menuTopActive === 'Fecha' && subMenuFechaActive  === 'Calendario' ? 

            <SubMenuFechasTodos type={subMenuFechaActive}></SubMenuFechasTodos>    : null }

            <Footer/>
        </>
    )
}


import { CalendarIcon } from '@heroicons/react/outline'
import { useState } from "react"

export default function Registro2 (){
    const [menuTopActive,setMenuTopActive] = useState ('Fecha')
    const [subMenuFechaActive,setSubMenuFechaActive] = useState ('Todos')
    const [subMenuTodosActive,setSubMenuTodosActive] = useState ('Mas reciente')

    const toggleMenuTopActive= (e)=>{
        setMenuTopActive(e.target.innerText)
    }
    const toggleSubMenuFechaActive= (e)=>{
        setSubMenuFechaActive(e.target.innerText)
    }
    const toggleSubMenuTodosActive= (e)=>{
        setSubMenuTodosActive(e.target.innerText)
        
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
            
            {/* SUBMENU FECHA>TODOS */}
            
            { menuTopActive === 'Fecha' && subMenuFechaActive  === 'Todos' ? 
            <div className='grid grid-cols-2 text-center font-bold text-gray-600 mt-7'>
                <h2 onClick={toggleSubMenuTodosActive} className={subMenuTodosActive === 'Mas reciente'  ? 'bg-gray-700 text-white rounded-sm p-2  transition-all': 'm-2'} >Mas reciente</h2>
                <h2 onClick={toggleSubMenuTodosActive} className={subMenuTodosActive === 'Mas antiguo'  ? 'bg-gray-700 text-white rounded-sm p-2 transition-all': 'm-2'}>Mas antiguo</h2>
            </div>
            : null
            }
            
            

        

        </>
    )
}

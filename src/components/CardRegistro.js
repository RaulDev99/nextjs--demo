import React from 'react'
import { CalendarIcon ,ChevronDownIcon, ChevronRightIcon, FilterIcon, PencilIcon} from '@heroicons/react/outline'
import { useState } from "react"

const CardRegistro = ({element : {id,descripcion,referencia,unidades,proyecto,empleado}}) => {
    
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
       
      };
      const handleEditar = () => {
        console.log('CARD EDITAR')
       
      };
      
  return (
      <>
      
      
    <div  className="m-2 p-2 shadow-lg rounded-md bg-white" >  
        <div  className="flex  items-center "> 
            <div onClick={handleExpandClick} className=" flex items-center ">
                {expanded ? <ChevronDownIcon  className= 'h-8 mr-4 ml-2'></ChevronDownIcon> : <ChevronRightIcon className= 'h-8 mr-4 ml-2'></ChevronRightIcon> }                                     
                <div className="flex">
                    <ul>
                        <li><b> {referencia} </b></li>
                        {descripcion ? <li className="text-gray-700">{descripcion}</li> : <li className="text-gray-700" > ------- </li>}
                    </ul>
                </div>
            </div>
                <div onClick={handleEditar} className="flex bg-blue-500 ml-auto mr-2 rounded-md p-1 items-center text-white font-medium">
                    <PencilIcon className="h-5 mr-1 "></PencilIcon>
                    <h2>EDITAR</h2>
                </div>
        </div>  

        <div className={expanded ? 'm-4 ' : 'hidden' }>
            <div className='flex justify-between mx-6'>
                <div className=' '>
                    <h2 >Proyecto: </h2>
                    <h2 >Unidades sacadas: </h2>
                    <h2 >Empleado: </h2>
                </div>
                <div className='text-center'>
                    <h2 >{proyecto} </h2>
                    <h2 >{unidades} </h2>
                    <h2 >{empleado} </h2>
                </div>
            </div>

           
        </div>
    </div>
    
        
</>
  )
}

export default CardRegistro
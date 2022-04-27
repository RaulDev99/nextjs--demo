import React from 'react'
import { CalendarIcon ,ChevronDownIcon, ChevronRightIcon, FilterIcon, PencilIcon} from '@heroicons/react/outline'
import { useState } from "react"

import { useRouter } from 'next/router';
import Link from 'next/link';

const CardRegistro = ( {id,descripcion,referencia,unidades,proyecto,empleado}) => {
    
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
       
      };
    //   const handleEditar = () => {
    //     router.push(`/registro/${id}`)
       
    //   };
      
  return (
      <>
      
      
    <div  className="m-2 p-2 shadow-lg rounded-md bg-white " >  

    <div className="grid grid-cols-5 items-center ">
        <div className="flex truncate items-center col-span-4 " onClick={handleExpandClick}>
                <div  >
                {expanded ? <ChevronDownIcon  className= 'h-8 mr-4 ml-2  '></ChevronDownIcon> : <ChevronRightIcon className= 'h-8 mr-4 ml-2 '></ChevronRightIcon> }
                </div>

                <div className="flex flex-col  truncate  ">
                    
                    <p className="font-bold ">{referencia }</p> 
                    {expanded ? null : <p className="truncate text-gray-600 font-semibold">{descripcion}</p>} 
                </div>
       
        </div>  

        {expanded ? null :
        <div className=" ml-auto flex justify-center ">
                        <Link href={`/registro/${id}`} >
                            <button  className=" bg-blue-500 p-2 mr-2 rounded-md   text-white font-medium ">
                                    <PencilIcon className="h-7  "></PencilIcon>
                                    <h2></h2>
                            </button>
                        </Link>
        </div>
        }
        
    </div>
    
    
         

        <div className={expanded ? 'm-2 ' : 'hidden' }>
        {expanded ? <p className=" text-gray-600 font-medium text-center mb-2 bg-blue-200 ">{descripcion}</p> : null  }
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

            {expanded ? 
            <div className="justify-center flex mt-4">
                <Link href={`/registro/${id}`}>
                <button  className="flex bg-blue-500  mr-2 rounded-md p-1 items-center text-white font-medium ">
                        <PencilIcon className="h-5 mr-1 "></PencilIcon>
                        <h2>EDITAR</h2>
                </button>
                </Link>
            </div>  
                : null  }
        </div>

    </div>
    
        
</>
  )
}

export default CardRegistro
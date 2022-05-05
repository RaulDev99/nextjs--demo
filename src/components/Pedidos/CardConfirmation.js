import Link from "next/link"
import { useEffect } from "react"

export default function CardConfirmation ({values},pedidoAñadidos){
    
    return(
        <div >
                        
                        
            <div className="text-center mx-8 mt-4 mb-2 italic">
                
                <h1 >Pedido añadido:</h1>
                <h2 className="bg-blue-300">{values.descripcion}</h2>
                
            </div>

            <div className='flex-row  mx-8'>

                        <div className='flex justify-between  '>
                            <div className="">
                                <h2 >Referencia: </h2>
                                <h2>Unidades en el almacen</h2>
                            </div>
                        
                            <div className='text-center'>
                                <h2 >{values.referencia ? `${values.referencia}`  : "---"  } </h2>
                                <h2 >{values.unidadesAlmacen} </h2>
                            </div>
                        </div>    
            </div> 
        </div>
    )
}

//  <div className="fixed bg-white shadow-xl rounded-md top-20 bottom-34 left-10 right-10 ">
//                             <div className="text-center mx-2 mt-4 mb-2 italic">
//                             <h1 >Has sacado <b>{values.unidades}</b> {values.formatoUnidades}{values.unidades > 1 && values.formatoUnidades=="unidad" ? "es" : values.unidades > 1 && values.formatoUnidades=="metro" ? "s" : null} de </h1>
//                             <b >{values.descripcion}</b>
//                             </div>

//                             <div className='flex-row  mx-8'>

//                                     <div className='flex justify-between mx-6 '>
//                                         <div className="">
//                                             <h2 >Referencia: </h2>
//                                             <h2 >Proyecto: </h2>
//                                             <h2 >Empleado: </h2>
//                                         </div>
                                    
//                                         <div className='text-center'>
//                                             <h2 >{values.referencia ? `${values.referencia}`  : "---"  } </h2>
//                                             <h2 >{values.proyecto} </h2>
//                                             <h2 >{values.empleado} </h2>
//                                         </div>
//                                     </div>



//                                     <Link href='/almacen2'>
//                                         <div className="text-center bg bg-blue-400 text-white my-4  p-2 rounded-md">
//                                         <button  onClick={()=>{
//                                             resetForm()
//                                             setFormularioEnviado(false)
//                                         }

//                                         }
//                                             type="button">
//                                             Sacar otro elemento
//                                         </button>
//                                         </div>
//                                     </Link>
//                             </div>
//                         </div> 
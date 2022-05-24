import TimeAgo from "./TimeAgo";
import { TrashIcon} from '@heroicons/react/outline'
import { useState } from "react";
import Link from "next/link";
import { deletePedido } from "../../firebase/firebase";
export default function CardPedido ({descripcion,referencia,unidadesAlmacen,timeAgo,estado,formatoUnidades,id}){
    const [deleteModal,setDeleteModal] = useState(false)
    const [deleteSuccess,setDeleteSuccess] = useState(false)
    return(
        <>
        {deleteSuccess == false ?
        <div  className="">
            <div className="flex items-center px-6">
                <b>
                    {referencia ?
                    referencia
                    : "---"
                    }
                </b>
                <TimeAgo timeAgo={timeAgo} className="text-gray-600 text-xs mx-1 ml-auto"/>
            </div>
                <h1 className="bg-blue-200 text-center">{descripcion}</h1>

            <div className="flex justify-between my-2">
                <div>
                    <h1 className="">{formatoUnidades == "metros" ? "Metros": formatoUnidades== "cajas" ? "Cajas" : "Unidades"} en el almacen: {unidadesAlmacen} </h1>
                    {estado == 'Pendiente de enviar' ?
                        <div className="flex items-center font-semibold italic text-red-500 ">
                            <div className="h-2 w-2  mr-2 bg-red-500  rounded-full" ></div>
                            <h1>{estado}</h1>
                        </div>
                    : estado == 'Enviado' ? <div className="flex items-center font-semibold italic text-green-500 ">
                        <div className="h-2 w-2  mr-2 bg-green-500  rounded-full" ></div>
                            <h1>{estado}</h1>
                        </div> 
                    : null}
                </div>
                


                {estado ==  'Pendiente de enviar'? 
                <div>
                    <button id="unidades"  type="button"  onClick={e=>setDeleteModal(true)} className=" tracking-widest block  bg-red-400 text-white border  rounded py-3 px-4 leading-tight focus:outline-none active:bg-blue-300 " >
                    <TrashIcon className="h-6 "></TrashIcon>
                    </button>
                </div>
                :null}
            </div> 
                    
                    {deleteModal ? 
                    <div>
                    <div className="bg-gray-400 opacity-40 w-full h-full fixed top-0 left-0">
                    </div>
                    <div className="fixed bg-white shadow-xl rounded-md top-20 bottom-34 left-10 right-10 ">
                        <div className="text-center mx-2 mt-4 mb-2 italic">
                        </div>

                        <div className='flex-row  mx-4'>
                            <div className=' text-center mx-2 '>
                                    <h1>¿Quieres eliminar definitivamente este pedido?</h1>
                                </div>

                            
                            
                                <div className="flex justify-around">
                                    
                                        <div className="text-center w-1/4 bg-red-400 text-white my-4  p-2 rounded-md">
                                            <button onClick={e=>{
                                                deletePedido(id) 
                                                setDeleteModal(false)
                                                setDeleteSuccess(true)
                                                }
                                            }>
                                                SI
                                            </button>
                                        </div>
                                    
                                    <div className="text-center bg w-1/4 bg-blue-400 text-white my-4  p-2 rounded-md">
                                        <button onClick={e=>setDeleteModal(false)}>
                                            NO
                                        </button>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                : null}
                
        </div>
     :null}
     </>
    )
}
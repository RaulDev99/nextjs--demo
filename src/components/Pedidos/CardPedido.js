import TimeAgo from "./TimeAgo";

export default function CardPedido ({descripcion,referencia,unidadesAlmacen,timeAgo,estado}){
    return(
        <div  className="bg-white flex-row m-1  py-2 px-6 rounded-md shadow-lg ">
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

                                        <div>
                                            <h1 className="">Unidades en el almacen: {unidadesAlmacen} </h1>
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
                                        
                                       
                                       
                                        
                                    </div>
        
    )
}
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { validateYupSchema } from "formik";

import { useState,useEffect } from "react";
import db, { getPedidos } from "../../firebase/firebase";
import useTimeAgo from "../../hooks/useTimeAgo";
import CardRegistro from "../CardRegistro";
import CardConfirmation from "./CardConfirmation";

import TimeAgo from "./TimeAgo";


export default function MenuHistorialPedidos (){
    const [pedidos,setPedidos] = useState([])
    const [ordenFecha,setOrdenFecha]=useState('desc')
    const [subMenu,setSubMenu] = useState ('Mas reciente')
    const [fechasDistintas,setFechasDistintas] = useState ([])
    
    const fechasDiferentes= []
    
    
    useEffect(()=>{ 
        getData()
    },[ordenFecha])

    useEffect(()=>{
        
    },)
    
    const getData= async() =>{
        const pedido = await getPedidos(ordenFecha)
        setPedidos(pedido)
         pedido.forEach((i)=>{
            if (fechasDiferentes.includes(i.createdAt)){
                null
            }else{
                 fechasDiferentes.push(i.createdAt)
            }     
       })
        setFechasDistintas(fechasDiferentes)
    }

    
    
    
    
    

    const toggleSubMenuTodosActive= (e)=>{
        setSubMenu(e.target.innerText)
        if (ordenFecha == 'desc'){
            setOrdenFecha('asc')
            
        }else{
            setOrdenFecha('desc')
        }
    }

    return(
        <div className="mb-20">
            <div className='grid grid-cols-2 text-center font-bold text-gray-600 mt-1'>
                    <h2 onClick={toggleSubMenuTodosActive} className={subMenu === 'Mas reciente'  ? 'bg-gray-700 text-white rounded-sm p-2  transition-all': 'm-2'} >Mas reciente</h2>
                    <h2 onClick={toggleSubMenuTodosActive} className={subMenu === 'Mas antiguo'  ? 'bg-gray-700 text-white rounded-sm p-2 transition-all': 'm-2'}>Mas antiguo</h2>
                </div>
                
                {console.log(pedidos)} 
            {fechasDistintas.map(fechas=>{
                return(
                    <div  key={fechas}>
                        <div className="flex justify-center my-2 text-sm ">
                        <h1 className=" bg-white py-1 px-2  rounded-xl" >{fechas}</h1>
                        </div>
                        {
                            pedidos.map(({id,descripcion,referencia,createdAt,unidadesAlmacen,timeAgo,estado})=>{
                                return(
                                    fechas == createdAt ?
                                    <div key={id} className="bg-white flex-row m-1  py-2 px-6 rounded-md shadow-lg ">
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
                                        :null}
                                        </div>
                                        
                                       
                                       
                                        
                                    </div>
                                        
                                    : null
                                )
                                })
                        }  

                        
                    </div>
                )
                })} 
                    

            
        </div>
    )
        
    
}
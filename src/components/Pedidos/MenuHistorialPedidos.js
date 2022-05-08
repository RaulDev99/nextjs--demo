import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { validateYupSchema } from "formik";

import { useState,useEffect } from "react";
import db, { getPedidos } from "../../firebase/firebase";
import useTimeAgo from "../../hooks/useTimeAgo";

import CardConfirmation from "./CardConfirmation";
import CardPedido from "./CardPedido";

import TimeAgo from "./TimeAgo";


export default function MenuHistorialPedidos (){
    const [pedidos,setPedidos] = useState([])
    const [ordenFecha,setOrdenFecha]=useState('desc')
    const [subMenu,setSubMenu] = useState ('Mas reciente')
    const [fechasDistintasEnviado,setFechasDistintasEnviado] = useState ([])
    const [fechasDistintasPendiente,setFechasDistintasPendiente] = useState ([])
    const [subMenuEstado,setSubMenuEstado] = useState ('Pendiente de enviar')
    
    
    
    
    useEffect(()=>{ 
        getData()
    },[ordenFecha])

    useEffect(()=>{
        
    },)
    
    const getData= async() =>{
        const fechasDiferentesEnviado= []
        const fechasDiferentesPendiente= []
        const pedido = await getPedidos(ordenFecha)
        setPedidos(pedido)
         pedido.forEach((i)=>{
            
             if (i.estado ==  "Enviado"){
                console.log("hola")
                    if (fechasDiferentesEnviado.includes(i.createdAt)){
                        null
                    }else{
                        fechasDiferentesEnviado.push(i.createdAt)
                    }
             }else if (i.estado == "Pendiente de enviar"){
                 
                if (fechasDiferentesPendiente.includes(i.createdAt)){
                    null
                }else{
                    fechasDiferentesPendiente.push(i.createdAt)
                }
             }
             
                 
       })
        setFechasDistintasEnviado(fechasDiferentesEnviado)
        setFechasDistintasPendiente(fechasDiferentesPendiente)
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
                <div className='grid grid-cols-2 text-center text-xs mt-4 font-bold text-gray-600 mx-2'>
                <h2 onClick={e=>setSubMenuEstado('Pendiente de enviar')} className={subMenuEstado === 'Pendiente de enviar'  ? 'bg-blue-400 rounded-md p-2 transition-all': 'm-2'}>Pendiente</h2>
                <h2 onClick={e=>setSubMenuEstado('Enviado')} className={subMenuEstado === 'Enviado'  ? 'bg-blue-400 rounded-md p-2 transition-all': 'm-2'}>Enviado</h2>
                </div>
                 
                {
                subMenuEstado == 'Enviado' ? 
                    <section>
                            {
                            fechasDistintasEnviado != '' ?
                            fechasDistintasEnviado.map(fechas=>{
                            return(
                                <div  key={fechas}> 
                                <div className="flex justify-center my-2 text-sm ">
                                    <h1 className=" bg-white py-1 px-2  rounded-xl" >{fechas}</h1>
                                </div>
                                {
                                            pedidos.map(({id,descripcion,referencia,createdAt,unidadesAlmacen,timeAgo,estado})=>{
                                                
                                                return(

                                                    <div key={id}>
                                                        {estado == subMenuEstado && fechas == createdAt ?
                                                            
                                                            <div>
                                                                
                                                                <CardPedido
                                                                descripcion={descripcion}
                                                                referencia={referencia}
                                                                unidadesAlmacen={unidadesAlmacen}
                                                                timeAgo={timeAgo}
                                                                estado={estado}>  
                                                                </CardPedido>
                                                            </div>
                                                        
                                                        
                                                        : null }
                                                    </div>    
                                                )
                                            })
                                         
                                        }    
                                </div>
                        )
                        })
                    : <div className="text-center italic p-4">Aun no has enviado ningún pedido</div>
                    } 
                    </section>
                :null
                }

                {
                subMenuEstado == 'Pendiente de enviar' ? 
                    <section>
                        
                            {fechasDistintasPendiente != '' ? 
                            fechasDistintasPendiente.map(fechas=>{
                                
                            return(
                                <div  key={fechas}> 
                                <div className="flex justify-center my-2 text-sm ">
                                    <h1 className=" bg-white py-1 px-2  rounded-xl" >{fechas}</h1>
                                </div>
                                {
                                            pedidos.map(({id,descripcion,referencia,createdAt,unidadesAlmacen,timeAgo,estado})=>{
                                                
                                                return(

                                                    <div key={id}>
                                                        {estado == subMenuEstado && fechas == createdAt ?
                                                            
                                                            <div>
                                                                
                                                                <CardPedido
                                                                descripcion={descripcion}
                                                                referencia={referencia}
                                                                unidadesAlmacen={unidadesAlmacen}
                                                                timeAgo={timeAgo}
                                                                estado={estado}>  
                                                                </CardPedido>
                                                            </div>
                                                        
                                                        
                                                        : null }
                                                    </div>    
                                                )
                                            })
                                         
                                        }    
                                </div>
                        )
                        })
                    
                    : <div className="text-center italic p-4">No tienes pedidos pendientes</div>} 
                    </section>
                :null
                }
                

            
        </div>
    )
        
    
}
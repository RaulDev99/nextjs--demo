import React from 'react'
import { useState } from 'react'
import moment from 'moment';
import 'moment/locale/es';
import CardRegistro from '../CardRegistro';
import { useEffect } from 'react';
import db from '../../firebase/firebase'
import {collection,getDoc, orderBy , query,limit ,doc, setDoc, getDocs, where} from 'firebase/firestore'
import { ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/outline'






const SubMenuFechasTodos = ( {type}) => {
    const [subMenuTodosActive,setSubMenuTodosActive] = useState('Mas reciente')
    const [ordenFecha,setOrdenFecha]=useState('desc')
    const [datos,setDatos] = useState([])
    const [fechasDistintas,setFechasDistintas] = useState ([])
    
    const [fechaActual,setFechaActual] = useState ({})
    const [count, setCount] = useState(0)

    console.log(type)
    const getInfo = async ()=>{
        const q = query(collection(db, "almacen"),orderBy('fecha',ordenFecha));

        const querySnapshot = await getDocs(q);
        const docs=[];
        const fechas=[];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        docs.push({...doc.data(),id:doc.id})

        if (fechas.includes(doc.data().fecha)){
            null
        }else{
            fechas.push(doc.data().fecha)
        }
        
        });
        setDatos(docs)
        setFechasDistintas(fechas)
    }
        

    useEffect(()=>{
      getInfo()
      setFechaActual(moment().format("YYYY-MM-DD"))
      
      },[ordenFecha]) 

      
      
      
    

    const toggleSubMenuTodosActive= (e)=>{
        setSubMenuTodosActive(e.target.innerText)
        if (ordenFecha == 'desc'){
            setOrdenFecha('asc')
            
        }else{
            setOrdenFecha('desc')
        }
    }
    
    
    const incrementarFecha = (increment)=>{
        
        setCount(count+1)
        const momento = moment().add(count+1,'d')
        setFechaActual(momento.format("YYYY-MM-DD"))
        
        
    }
    const decrementarFecha = ()=>{
        setCount(count-1)
        const momento = moment().add(count-1,'d')
        setFechaActual(momento.format("YYYY-MM-DD"))
    }


  return (
      
    <div>

                {/* MENU FECHA TODOS */}
                {type === 'Todos' ?
                    
                <section>
                <div className='grid grid-cols-2 text-center font-bold text-gray-600 mt-7'>
                    <h2 onClick={toggleSubMenuTodosActive} className={subMenuTodosActive === 'Mas reciente'  ? 'bg-gray-700 text-white rounded-sm p-2  transition-all': 'm-2'} >Mas reciente</h2>
                    <h2 onClick={toggleSubMenuTodosActive} className={subMenuTodosActive === 'Mas antiguo'  ? 'bg-gray-700 text-white rounded-sm p-2 transition-all': 'm-2'}>Mas antiguo</h2>
                </div>
            
                
                    {fechasDistintas.map(fecha=>{
                                    return(
                                        <div  key={fecha}>
                                            <div className="flex justify-center my-3 text-sm ">
                                            <h1 className=" bg-white py-1 px-2  rounded-xl" >{moment(fecha).format(`DD [de] MMMM [de] YYYY`)}</h1>
                                            </div>
                                            {
                                                datos.map(element=>{
                                                    return(
                                                        fecha == element.fecha ?
                                                        <CardRegistro element={element} key={element.id}></CardRegistro>
                                                        : null
                                                    )
                                                    })

                                            }  
                                        </div>
                                    )
                    })}  
                </section>
                
                : null }
                
                {/* MENU FECHA DIARIO */}
                {
                    type === 'Diario' ?

                    <section>
                        <div className="flex justify-center my-6">
                            
                            <ChevronLeftIcon onClick={decrementarFecha} increment={1} className="h-6 mx-2"></ChevronLeftIcon>
                            <h1 className="" >{moment(fechaActual).format(`DD [de] MMMM [de] YYYY`)}</h1>
                            <ChevronRightIcon onClick={incrementarFecha} className="h-6 mx-2"></ChevronRightIcon>
                        </div> 
                        {   
                            datos.map(element=>{
                                if (fechaActual == element.fecha){
                                    return(
                                        <div key={element.id}>
                                            <CardRegistro element={element} ></CardRegistro>  
                                    </div>
                                    ) 
                                }
                                })
                        }   
                    </section>
                    : null
                }

                {/* MENU FECHA CALENDARIO */}
                {
                    type === 'Calendario' ?
                    <div>
                       <h1>HOLA</h1>
                       <DatePicker className='w-full'/>
                    </div>
                : null }
    </div> 
  )
}

export default SubMenuFechasTodos
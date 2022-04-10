import {useEffect} from 'react'
import db from '../firebase/firebase'
import {collection,getDocs} from 'firebase/firestore'
import { useState } from 'react'
import Nav from '../components/nav'

 export default function Registro (){
   const [datos,setDatos] = useState([])

    const getInfo = async ()=>{
          
      const info = await getDocs(collection(db,'almacen'))
      const docs=[];
      info.forEach((doc)=>{
        
        docs.push({...doc.data(),id:doc.id})
      })
      setDatos(docs)
      console.log(docs)
    }

    useEffect(()=>{
      getInfo()
      },[])

      // useEffect(()=>{
      //     const obtenerDatos = async ()=>{
            
      //       const info = await getDocs(collection(db,'almacen'))
      //       const docs=[];
      //       info.forEach((doc)=>{
              
      //         docs.push({...doc.data(),id:doc.id})
      //       })
      //       setDatos(docs)
      //       console.log(docs)
      //     }
          
      //   },[])
      
return(
  <>
    <Nav></Nav>
  {
    datos.map(element=>{
      return (
        <div key = {element.id} className="m-4 p-4 shadow-lg rounded-md bg-white">
          <h1>Referencia: {element.referencia}</h1>
          <h1>Descripción: {element.descripcion}</h1>
          <h1>Proyecto: {element.proyecto}</h1>
          <h1>Fecha: {element.fecha}</h1>
          <h1>Unidades: {element.unidades}</h1>
          <h1>Empleado: {element.empleado}</h1>
      </div>
      )
    })
  }


</>
)
 }
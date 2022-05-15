import { Slider } from '@mui/material'
import { doc, updateDoc,deleteDoc } from 'firebase/firestore'
import { Field, Formik, Form } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import db from '../firebase/firebase'


export default function  EditElement (props)  {
    
    const [editSuccess,setEditSuccess] = useState(false)
    const [FormItems,setFormItems]=useState([
        {
            label: 'Referencia',
            name:'referencia',
            type:'number',
            },
        {
            label: 'Descripción',
            name:'descripcion',
            type:'text',
        },
        {
            label: 'Proyecto',
            name:'proyecto',
            type:'text',
        },
        {
            label: 'Empleado',
            name:'empleado',
            type:'text',
        },
    ]   
    ) 
    const router = useRouter()

    
    const updateData = async (valores) =>{
        let editDocument= doc(db,'almacen',props.id);
        updateDoc(editDocument,{
            referencia: valores.referencia,
            descripcion:valores.descripcion,
            proyecto:valores.proyecto,
            unidades:valores.unidades,
            empleado:valores.empleado
        }).then(() => {
            
            setEditSuccess(true)
            
            // router.push("/registro2")
            
        })
        .catch((err) => {
            console.log(err);
          })
    }

    const deleteData = async (id) =>{
        let deleteDocument = doc(db,'almacen',id);
        
        deleteDoc(deleteDocument)
        .then(()=>{
            alert('Data Deleted')
            router.push("/registro2")
        }).catch((err) => {
            console.log(err);
          })
    }

    


    

  return (
      <div className="mb-20">
          <h1 className="text-2xl font-mono m-4  text-center">Editar elementos</h1>
      <Formik
      enableReinitialize={true}
      initialValues={{
          referencia:props.referencia,
          descripcion:props.descripcion,
          proyecto:props.proyecto,
          unidades:props.unidades,
          empleado:props.empleado,
      }}

      onSubmit={(valores,{resetForm })=>{
        updateData(valores)
    }}


      >

    {( {values , errors,resetForm} )=>(
        
          <Form>
              <div className='m-8'>
                {FormItems.map((item,index)=>{
                    return(
                        <Field 
                        key={index}
                        type={item.type}
                        name={item.name} 
                        placeholder="..." 
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" 
                        />
                    )
                })}

                        <Field 
                            name="unidades" 
                            as={Slider} 
                            min={1} 
                            max={30}
                        />
                        <div className=" flex items-center justify-center ">
                            <h2 className="px-3 py-1 mb-3 bg-gray-50 rounded-md border-2 border-blue-400">{values.unidades}</h2>
                        </div>
                        <button id="unidades"  type="submit" className=" mt-8 tracking-widest block w-full bg-blue-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300 " >
                        EDITAR
                        </button>
                        <button id="unidades"  type="button" onClick={deleteData} className=" mt-8 tracking-widest block w-full bg-red-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300 " >
                        ELIMINAR
                        </button>


                        {editSuccess ? 

                        <div>
                            <div className="bg-gray-400 opacity-40 w-full h-full fixed top-0 left-0">
                            </div>
                            <div className="fixed bg-white shadow-xl rounded-md top-20 bottom-34 left-10 right-10 ">
                                <div className="text-center mx-2 mt-4 mb-2 italic">
                                <h1 >Has sacado <b>{values.unidades}</b> {props.formatoUnidades}{values.unidades > 1 && props.formatoUnidades=="unidad" ? "es" : values.unidades > 1 && props.formatoUnidades=="metro" ? "s" : null} de </h1>
                                <b >{values.descripcion}</b>
                                </div>

                                <div className='flex-row  mx-6'>
                                    <div className='flex justify-between mx-6 '>
                                            <div className="">
                                                <h2 >Referencia: </h2>
                                                <h2 >Proyecto: </h2>
                                                <h2 >Empleado: </h2>
                                            </div>
                                        
                                            <div className='text-center'>
                                                <h2 >{values.referencia ? `${values.referencia}`  : "---"  } </h2>
                                                <h2 >{values.proyecto} </h2>
                                                <h2 >{values.empleado} </h2>
                                            </div>
                                        </div>

                                    
                                    <Link href='/registro2'>
                                        <div className="text-center bg bg-blue-400 text-white my-4  p-2 rounded-md">
                                        <button  onClick={()=>{
                                            
                                        }

                                        }
                                            type="button">
                                            Volver al registro
                                        </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        : null}
                        
                    

                </div>
          </Form>
          )}
        </Formik>



        </div>
        
  )
}


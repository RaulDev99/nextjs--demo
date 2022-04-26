
import { useState, useEffect } from 'react';

import Slider from '@mui/material/Slider';
import { Formik , Form , Field , ErrorMessage} from 'formik'


import { useStorage } from '../context/StorageContext'
import { useRouter } from 'next/router';

import db from '../firebase/firebase'
import {addDoc,collection, connectFirestoreEmulator} from 'firebase/firestore'
import Footer from '../components/footer';

import Link from 'next/link' 





export default function Almacen(){
   
    
    const [formularioEnviado,setFormularioEnviado]= useState(false)
    const [fechaActual,setFechaActual] = useState ('')
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
    


    useEffect(()=>{
        var today = new Date() 
        setFechaActual(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2))
    },[]);
    
    // const {añadirElemento} = useStorage()
    const {push} = useRouter()

    // console.log(fechaActual)
    // `${day}/${month}/${year}`
    
    const añadirArticulos = async (valores)=>{
        const date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        
        try{
            const docRef = await addDoc(collection(db,'almacen'),{
            referencia:valores.referencia,
            descripcion:valores.descripcion,
            proyecto:valores.proyecto,
            fecha: fechaActual,
            unidades:valores.unidades,
            empleado:valores.empleado,
            formatoUnidades:valores.formatoUnidades,              
        })
            console.log("Documento enviado con ID:", docRef.id)
        }catch(e){
            console.error('Error:',e)
        }
        
     }
   
     
    

return(
    < div className='mb-20'>
    
    <h1 className="text-2xl font-mono m-4 text-center">Sacar elementos</h1>
    <Formik
        enableReinitialize={true}
        initialValues={{
            referencia:'',
            descripcion:'',
            proyecto:'',
            fecha:fechaActual,
            unidades:1,
            empleado:'',
            formatoUnidades:'unidad',
        
        }}

        validate={(valores)=>{
            let errores={};
            

            if(!valores.referencia && !valores.descripcion ){
                errores.referencia = 'Como minimo debes introducir la referencia o la descripcion'
            } 
            

            if(!valores.proyecto){
                errores.proyecto = 'Introduce una proyecto valido'
            } 
        
        return errores;

        }}
    onSubmit={(valores,{resetForm })=>{
        console.log(valores)
        setFormularioEnviado(true)
        // setTimeout(()=>{
        //     setFormularioEnviado(false)
        //     resetForm();
        // },5000)
        
            
        
        
        // añadirElemento(valores.referencia,valores.descripcion,valores.proyecto,valores.fecha,valores.unidades,valores.empleado)
        // push('/')
        añadirArticulos(valores)
        
    }}

    >
        
        {( {values , errors,resetForm} )=>(
            
        <div >

            
            <Form >
            <div className="my-4 mx-8">

            {FormItems.map((item,index)=>{
                    return(
                            <div key={index}> 

                                <label>{item.label}</label>
                            <Field 
                                    type={item.type}
                                    name={item.name} 
                                    placeholder="..." 
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" />
                                    {
                                        
                                        errors ? <div className='text-red-600 italic'><ErrorMessage name={item.name}></ErrorMessage></div>: null
                                    }
                            </div>
                    )
                })}

                <label>Unidades</label>
                <Field 
                    name="unidades" 
                    as={Slider} 
                    min={1} 
                    max={30}>
                </Field>
                    <div className=" flex items-center justify-center ">
                        <h2 className="px-3 py-1 mb-3 bg-gray-50 rounded-md border-2 border-blue-400">{values.unidades}</h2>
                    </div>

                    
                    <div className="flex justify-between mx-10">
                        <label>
                        <Field className="accent-blue-500 mr-2 " type="radio" name="formatoUnidades" value="unidad"  />
                        Unidades
                        </label>

                        <label>
                        <Field className="accent-blue-500 mr-2" type="radio" name="formatoUnidades" value="metro" />
                        Metros
                        </label>
                    </div>
                    
                    
                    

                    {/* <div class="flex justify-center">
                <div>
                    <div class="form-check">
                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                        Default radio
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input  h-4 w-4 border appearance-none rounded border-gray-300 bg-white  checked:bg-blue-600 checked:border-blue-600  transition duration-200 mt-1   float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
                        Default checked radio
                    </label>
                    </div>
                </div>
                </div> */}
                    
                        
                    
                    

                    <button id="unidades"  type="submit" className=" mt-8 tracking-widest block w-full bg-blue-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300 " >
                        SACAR
                    </button>


                    {/* CARD DE CONFIRMACION DE SACAR PRODUCTO */}
                    {formularioEnviado ?
                    <div >
                        
                        <div className="bg-gray-400 opacity-40 w-full h-full fixed top-0 left-0">
                        </div>
                        <div className="fixed bg-white shadow-xl rounded-md top-20 bottom-34 left-10 right-10 ">
                            <div className="text-center mx-2 mt-4 mb-2 italic">
                            <h1 >Has sacado <b>{values.unidades}</b> {values.formatoUnidades}{values.unidades > 1 && values.formatoUnidades=="unidad" ? "es" : values.unidades > 1 && values.formatoUnidades=="metro" ? "s" : null} de </h1>
                            <b >{values.descripcion}</b>
                            </div>

                            <div className='flex-row  mx-8'>

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



                                    <Link href='/almacen2'>
                                        <div className="text-center bg bg-blue-400 text-white my-4  p-2 rounded-md">
                                        <button  onClick={()=>{
                                            resetForm()
                                            setFormularioEnviado(false)
                                        }

                                        }
                                            type="button">
                                            Sacar otro elemento
                                        </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                          
                    </div> : null}
                        
                          



                    
                {/* {console.log(values.ref2)}
                    <Field 
                                // key={index}
                                type={FormItems[0].type}
                                name={FormItems[0].name} 
                                placeholder="..." 
                                value={FormItems[0].value}
                                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                 */}
                    {/* <label>Referencia</label>
                    <Field 
                    type="number"   
                    name="referencia" 
                    placeholder="..." 
                    value={values.referencia}
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    <ErrorMessage name="referencia" component ={()=>(
                        <div className="text-red-600">{errors.referencia}</div>
                    )}/>
                

                    <label>Descripcción</label>
                    <Field 
                    name="descripcion" 
                    type="text" 
                    placeholder="..." 
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    


                    <label>Proyecto</label>
                    <Field
                    name="proyecto" 
                    type="number" 
                    placeholder="..." 
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    <ErrorMessage name="proyecto" component ={()=>(
                        <div className="text-red-600">{errors.proyecto}</div>
                    )}/> */}


                    {/* <label>Fecha</label>
                    <Field 
                    name="fecha" 
                    type="date" 
                    
                    value={values.fecha}
                    className=" block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" /> */}

                    {/* <label>Unidades</label>
                <Field 
                    name="unidades" 
                    as={Slider} 
                    min={1} 
                    max={30}/>
                    <div className=" flex items-center justify-center ">
                        <h2 className="px-3 py-1 mb-3 bg-gray-50 rounded-md border-2 border-blue-400">{values.unidades}</h2>
                    </div> */}

                    {/* <label>Empleado</label>
                    <Field 
                    name="empleado"                    
                    type="text" 
                    placeholder="..." 
                    className=" block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" /> */}
                    
                    {/* <button id="unidades"  type="submit" className=" mt-8 tracking-widest block w-full bg-blue-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300 " >
                        SACAR
                    </button>
                    */}
                    {formularioEnviado ? values.unidades > 1 ?  <p className="text-green-600"> Se han sacado {values.unidades} elementos del almacen</p> : <p className="text-green-600"> Se ha sacado {values.unidades} elemento del almacen</p> : null} 
            </div>
        </Form>
        
        <Footer/>
    </div>
    )}
    </Formik>
    </div>
)
}
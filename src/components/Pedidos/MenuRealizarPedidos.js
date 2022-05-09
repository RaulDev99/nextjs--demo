import { Slider } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { addPedido } from "../../firebase/firebase";
import CardConfirmation from "./CardConfirmation";


export default function MenuRealizarPedidos(){
    const [pedidoAñadido,setPedidoAñadido]= useState(false)
    

    const FormInputs = [
        {
        label:'Referencia',
        name: 'referencia',
        type:'number'},
        {
        label:'Descripcion',
        name:'descripcion',
        type:'text'
        },
        
    ]

    
    return (
        
        <div className="mb-20">
            
            <Formik
            enableReinitialize={true}
            initialValues={{
                referencia:'',
                descripcion:'',
                unidadesAlmacen:0,
                estado:'Pendiente de enviar',
                formatoUnidades:`unidades`
                
            
            }}
            validate={(valores)=>{
                let errores={};
                if(!valores.descripcion ){
                    errores.descripcion = 'La descripción del pedido es obligatoria'
                    console.log(errores)
                }
                return errores;

            }}
            onSubmit={(valores)=>{
                console.log(valores)
                addPedido(valores.referencia,valores.descripcion,valores.unidadesAlmacen,valores.estado,valores.formatoUnidades)
                setPedidoAñadido(true)
            }}
            >
            {({values,errors,resetForm})=>(
                    <Form>
                        <div className="my-4 mx-8">        
                            {FormInputs.map((input,index)=>{
                                
                                return (
                                    <div key={index}> 
                                        <label>{input.label}</label>
                                        <Field 
                                            type={input.type}
                                            name={input.name}
                                            placeholder="..." 
                                            className="appearance-none block w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" />
                                            {
                                                
                                                errors ? <div className='text-red-600 italic'><ErrorMessage name={input.name}></ErrorMessage></div>: null
                                            }
                                    </div>
                                )
                            })}
                            <label>Unidades en el alamcen</label>
                                <Field 
                                    name="unidadesAlmacen" 
                                    as={Slider} 
                                    min={0} 
                                    max={100}>
                                </Field>
                                <div className=" flex items-center justify-center ">
                                    <h2 className="px-3 py-1 mb-3 bg-gray-50 rounded-md border-2 border-blue-400">{values.unidadesAlmacen}</h2>
                                </div>

                                <div className="grid grid-cols-2 mx-10  ">
                                    <label>
                                    <Field className="accent-blue-500 mr-2  mt-4" type="radio" name="formatoUnidades" value="unidades"  />
                                    Unidades
                                    </label>

                                    <label className="">
                                    <Field className="accent-blue-500 mr-2 mt-4" type="radio" name="formatoUnidades" value="metros" />
                                    Metros
                                    </label>

                                    <label>
                                    <Field className="accent-blue-500 mr-2 mt-4" type="radio" name="formatoUnidades" value="cajas" />
                                    Cajas
                                    </label>
                                </div>
                                <button id="unidades"  type="submit" className=" mt-8 tracking-widest block w-full bg-blue-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300 " >
                                    AÑADIR A PEDIDOS
                                </button>

                        </div>

                        {pedidoAñadido ? 
                        <div>

                            <div className="bg-gray-400 opacity-40 w-full h-full fixed top-0 left-0">
                            </div>
                            <div className="fixed bg-white shadow-xl rounded-md top-20 bottom-34 left-5 right-5 ">
                                <CardConfirmation values={values} />
                                <Link href='/pedidos'>
                                    <div className="text-center bg bg-blue-400 text-white my-4  p-2 rounded-md mx-8">
                                    <button  onClick={()=>{
                                    setPedidoAñadido(false)
                                    resetForm()
                                    }  
                                    }
                                        type="button">
                                        PEDIR OTRO
                                    </button>
                                    </div>
                            </Link>
                                
                                
                            </div>
                        </div>
                        :null
                    }

                    </Form>
                
                     
            )}
               

            </Formik>

            

            
        </div>
    )
}
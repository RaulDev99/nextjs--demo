
import { useState } from 'react';
import Nav from '../components/nav'
import Slider from '@mui/material/Slider';
import { Formik , Form , Field , ErrorMessage} from 'formik'




export default function Almacen(){

    const [formularioEnviado,setFormularioEnviado]= useState(false)

return(
    <>
    <Nav/>
    
    <h1 className="text-2xl font-bold mt-8 text-center">Sacar elemento del alamacén 2</h1>
    <Formik
        initialValues={{
            referencia:'',
            descripcion:'',
            proyecto:'',
            fecha:'',
            unidades:1,
            empleado:'',
        }}

        validate={(valores)=>{
            let errores={};

            if(!valores.referencia){
                errores.referencia = 'Introduce una referencia valida'
            } 
            

            if(!valores.proyecto){
                errores.proyecto = 'Introduce una proyecto valido'
            } 
            

            

            return errores;

        }}


        onSubmit={(valores,{resetForm})=>{
            console.log(valores)
            setFormularioEnviado(true)
            setTimeout(()=>setFormularioEnviado(false),5000)
            console.log('formulario enviado')
            resetForm();
        }}
    >

        {( {values , touched , handleChange,handleBlur , errors} )=>(
        <Form >
        <div className="m-8">
            
                <label>Referencia</label>
                <Field 
                type="number" 
                id="referencia"  
                name="referencia" 
                placeholder="..." 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />
                <ErrorMessage name="referencia" component ={()=>(
                    <div className="text-red-600">{errors.referencia}</div>
                )}/>
               

                <label>Descripcción</label>
                <Field 
                name="descripcion" 
                type="text" 
                placeholder="..." 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />
                


                <label>Proyecto</label>
                <Field
                name="proyecto" 
                type="number" 
                placeholder="..." 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />
                <ErrorMessage name="proyecto" component ={()=>(
                    <div className="text-red-600">{errors.proyecto}</div>
                )}/>


                <label>Fecha</label>
                <Field 
                name="fecha" 
                type="date" 
                placeholder="..." 
                className=" block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />

                <label>Unidades</label>
               <Field 
               name="unidades" 
               as={Slider} 
               min={1} 
               max={30}/>
                
                
                <div className=" flex items-center justify-center ">
                    <h2 className="px-3 py-1 mb-3 rounded-md border-2 border-blue-400">{values.unidades}</h2>
                </div>

                <label>Empleado</label>
                <Field 
                name="empleado"                    
                type="text" 
                placeholder="..." 
                className=" block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />
                
                <button id="unidades"  type="submit" className=" mt-8 tracking-widest block w-full bg-blue-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300 " >
                    SACAR
                </button>

                {formularioEnviado ? values.unidades > 1 ?  <p className="text-green-600"> Se han sacado {values.unidades} elementos del almacen</p> : <p className="text-green-600"> Se ha sacado {values.unidades} elemento del almacen</p> : null}
        </div>
    </Form>
    )}
    </Formik>
    </>
)
}
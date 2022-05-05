
import { useEffect, useState } from 'react';
import Nav from '../components/nav'
import Slider from '@mui/material/Slider';





export default function Almacen(){

    const [date,setDate]= useState('')
    const [unidades,setUnidades]= useState('')
    const [formValue,setFormValue]= useState({
        referencia:'',
        descripcion:'',
        proyecto:'',
        fecha:'',
        unidades:'1',
        empleado:'',
    })

    useEffect(()=>{
        var today = new Date();
        setFormValue({ ...formValue, fecha: today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2)});
        console.log(formValue)
    },[]);

    
    

    
     
    const handleOnChange = (e) =>{
    const { name, value } = e.target;
    
    setFormValue({ ...formValue, [name]: value });
    // e.target.setCustomValidity("Please select a date in the past.")
    
   }

  const handleSacar = (e)=>{
        e.preventDefault()
        
        console.log(formValue)
        //ENVIAR formVALUE  a base de datos
  }
    
    

return(
    <>
    <Nav/>
    
    <h1 className="text-2xl font-bold mt-8 text-center">Sacar elemento del alamacén</h1>
    <form onSubmit={handleSacar} className="m-8">
        

            <label>Referencia</label>
            <input id="referencia"  name="referencia" required onChange={handleOnChange} type="number" placeholder="..." className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />
            
             <label>Descripcción</label>
            <input name="descripcion"onChange={handleOnChange} type="text" placeholder="..." className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />
            
            <label>Proyecto</label>
            <input name="proyecto" onChange={handleOnChange}  type="text" placeholder="..." className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />

            <label>Fecha</label>
            <input name="fecha" type="date" value={formValue.fecha} onChange={handleOnChange}  placeholder="..." className=" block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />

            <label>Unidades</label>
            <Slider

                id="unidades"
                name="unidades"
                min={1}
                max={30}
                onChange={handleOnChange}
            />
            <div className=" flex items-center justify-center ">
                <h2 className="px-3 py-1 mb-3 rounded-md border-2 border-blue-400">{formValue.unidades}</h2>
            </div>


            <label>Empleado</label>
            <input name="empleado" onChange={handleOnChange}  type="text" placeholder="..." className=" block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-50" />
            
            <button id="unidades"  type="submit" className=" mt-8 tracking-widest block w-full bg-blue-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300 " >
                SACAR
            </button>

        

    </form>
    
    </>
)
}
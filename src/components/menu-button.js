
import { useState, useEffect } from 'react';

export default function Fecha(){
    const [fechaActual,setFechaActual] = useState ('')
    useEffect(()=>{
        var today = new Date() 
        setFechaActual(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2))
        
        console.log(fechaActual)
    },[]);
    return(
        <div>
            {fechaActual}
        </div>
    )

}
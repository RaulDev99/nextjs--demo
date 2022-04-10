import { useState } from "react";
import { createContext ,useContext } from "react";

export const StorageContext = createContext();


export const useStorage = ()=> useContext(StorageContext)

export const StorageProvider = ({children})=>{ 

    const [storage,setStorage]= useState([{
        id:1,
        referencia:'1234',
        proyecto:'537',
        empleado:'Raul',
    }]
        
    )

    const añadirElemento = (referencia,decripcion,proyecto,fecha,unidades,empleado)=>{
        setStorage([...storage,{referencia,decripcion,proyecto,fecha,unidades,empleado}])
    }

    return(
        <StorageContext.Provider value ={{storage,añadirElemento}}>
            {children}
        </StorageContext.Provider>
    )
}
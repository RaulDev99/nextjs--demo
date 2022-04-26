import React from 'react'

import { useEffect } from 'react';

import { useState } from 'react';
import  { getData } from '../../firebase/firebase';
import {collection,getDoc, orderBy , query,limit ,doc, setDoc, getDocs, where} from 'firebase/firestore'
import { normalizeRepeatedSlashes } from 'next/dist/shared/lib/utils';

export default function GetData ()  {
    const [ordenFecha,setOrdenFecha]=useState('desc')
    const [datos,setDatos] = useState([])
    
    
        

    useEffect(()=>{
        getData().then(setDatos)
      
      
      },[])
    

  return (
      <div>
    {
        datos.map(({id,descripcion,referencia,unidades,proyecto,empleado,fecha})=>{
            return(
                <div key={id}>
                    <h1>{id}</h1>
                    
                    <div>
                    {descripcion}
                    </div>
                </div>
                
            )
            })

    } 
    </div>
  )
}


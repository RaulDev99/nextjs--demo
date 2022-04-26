import React from 'react'
import { useEffect } from 'react'
import CardRegistro from '../../components/CardRegistro'
import EditElement from '../../components/editElement'
import Footer from '../../components/footer'


export default function EditarRegistro (props)  {
    
    
    return (
        <div>

            <EditElement {...props}></EditElement>
        {/* <CardRegistro {...props}></CardRegistro>
        <input placeholder={props.proyecto}></input> */}
        <Footer></Footer>
        </div>
    )
    
    
    
}

EditarRegistro.getInitialProps=(context)=>{
    const {query}=context
    const{id}=query
    
    
    return fetch (`https://topaction.me/api/registro/${id}`).then(
       
        (apiResponse)=>{
            if (apiResponse.ok) 
            return apiResponse.json()
        })

}



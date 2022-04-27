import React from 'react'
import { useEffect } from 'react'
import CardRegistro from '../../components/CardRegistro'
import EditElement from '../../components/editElement'
import Footer from '../../components/footer'
import { firestore } from '../../firebase/admin'



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

export async function getServerSideProps (context){
    const {params,res}=context
    const{id}=params
    
    // Cambiar el fetch
    // const apiResponse = await fetch (`http://localhost:3000/api/registro/${id}`)
    //     if (apiResponse.ok) return apiResponse.json()
    //         if (res){
    //             res.witeHead(301,{Location:"/home"}).end
    //         }

    return firestore
      .collection("almacen")
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data()
        const id= doc.id
        // const object={...data,id}
        const props=({
            ...data,
            id
          
          
        })
        return {props}
        console.log(`la id es la siguiente ${id}`)
      })
      .catch(() => {
        return{props:{}}
      })

}




// EditarRegistro.getInitialProps=(context)=>{
//     const {query}=context
//     const{id}=query
    
//     // Cambiar el fetch
//     return firestore
//       .collection("almacen")
//       .doc(id)
//       .get()
//       .then((doc) => {
//         const data = doc.data()
//         const id= doc.id
//         const object={...data,id}
//         const props = (object)
//         console.log(`la id es la siguiente ${id}`)
//         return {props}
//       })
      
//       .catch(() => {
//         return {props:{}}
//       })

// }


// EditarRegistro.getInitialProps=(context)=>{
//     const {query}=context
//     const{id}=query
    
//     // Cambiar el fetch
//     return fetch (`http://localhost:3000/api/registro/${id}`).then(
       
//         (apiResponse)=>{
//             if (apiResponse.ok) 
//             return apiResponse.json()
//         })

// }



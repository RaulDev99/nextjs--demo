
import Nav from '../components/nav'
import '../firebase/firebase'
import Footer from '../components/footer'
import { ProtectedRoutes } from '../components/auth/ProtectedRoutes'
import InfoUser from '../components/auth/infoUser'


import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'



export default function Home() {
   const [posts,setPosts] = useState()
   
 

  
  
  return (
    <>
    
     
      <ProtectedRoutes>

        <InfoUser/>
        <div className="grid grid-rows-2    text-center  text-white">
          <div className="m-4">
            <Link href="generar-registro">
              <button className="bg-blue-400 p-2 font-semibold rounded-md w-full">
                GENERAR REGISTRO
              </button>
            </Link>
          </div>
          <div className=" m-4">
            <Link href="generar-pedidos">
              <button className="bg-blue-400 p-2 font-semibold rounded-md w-full">
                GENERAR PEDIDOS
              </button>
            </Link>
          </div>
          

        </div>
        
        
       
        <Footer/>

      </ProtectedRoutes>

    </>
  )
}

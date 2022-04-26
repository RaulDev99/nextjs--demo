
import Nav from '../components/nav'
import '../firebase/firebase'
import Footer from '../components/footer'
import { ProtectedRoutes } from '../components/auth/ProtectedRoutes'
import InfoUser from '../components/auth/infoUser'


import { useEffect } from 'react'
import { useState } from 'react'



export default function Home() {
   const [posts,setPosts] = useState()
   
 

  
  
  return (
    <>
    
     
      <ProtectedRoutes>

        <InfoUser/>
       
        <Footer/>

      </ProtectedRoutes>

    </>
  )
}


import Nav from '../components/nav'
import '../firebase/firebase'
import Footer from '../components/footer'
import { ProtectedRoutes } from '../components/auth/ProtectedRoutes'
import InfoUser from '../components/auth/infoUser'

export default function Home() {
  return (
    <>
     
      <ProtectedRoutes>

        <InfoUser/>
        
        <Footer/>

      </ProtectedRoutes>

    </>
  )
}

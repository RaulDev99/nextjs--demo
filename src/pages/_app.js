import '../styles/global.css'
import { StorageProvider } from '../context/StorageContext'
import { AuthProvider } from '../context/AuthContext'



export default function App({ Component, pageProps }) {

  
  return (
    <StorageProvider>
      <AuthProvider>
          <Component {...pageProps} />
    </AuthProvider>
   </StorageProvider> 
  )
  
}
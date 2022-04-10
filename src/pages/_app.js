import '../styles/global.css'
import { StorageProvider } from '../context/StorageContext'

export default function App({ Component, pageProps }) {
  return (
    <StorageProvider>
  <Component {...pageProps} />
   </StorageProvider> 
  )
  
}
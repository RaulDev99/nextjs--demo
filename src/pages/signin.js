
import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"





export default function SignIn  () {
  const {push} = useRouter()

  const [user,setUser] = useState({
    email:"",
    password:"",
  })
  const [error,setError] = useState()
  const {signin}=useAuth()

  


  const handleChange =({target:{name,value}})=>{
    setUser({...user,[name]: value})

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError('')
    try{
      await signin(user.email,user.password)
      push('/')
    } catch(error){
      console.log(error.code)
      if (error.code === 'auth/wrong-password'){
        setError('La contraseña es demasiado corta')
      }else{
        setError(error.code)
      }
      
    }   
  }


  return (
    <div className="  grid place-items-center h-screen ">
      
      {
        error && <p>{error}</p>
      }
        
        <form onSubmit={handleSubmit} className=" m-8   ">

            <label>Email</label>
            <input placeholder="..." type="email" name = "email" onChange={handleChange} className="  w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>

            <label>Contraseña</label>
            <input placeholder="..."  name= "password" onChange={handleChange} type="password" className=" w-full bg-gray-50 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" ></input>
            
            <button type="submit" className=" mt-8 tracking-widest w-full bg-blue-400 text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none active:bg-blue-300">
              Login
            </button>
        </form>
        
        
      
      </div>
  )
}
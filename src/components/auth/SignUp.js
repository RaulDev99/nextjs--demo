import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"


export const SignUp = () => {
  const {push} = useRouter()

  const [user,setUser] = useState({
    email:"",
    password:"",
  })
  const [error,setError] = useState()

  const {signup}=useAuth()

  const handleChange =({target:{name,value}})=>{
    setUser({...user,[name]: value})

  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError('')
    try{
      await signup(user.email,user.password)
      push('/registro2')
    } catch(error){
      console.log(error.code)
      if (error.code === 'auth/weak-password'){
        setError('La contraseña es demasiado corta')
      }
      
      
    }   
  }

  return (
    <div>

      {
        error && <p>{error}</p>
      }
      <form onSubmit={handleSubmit}>
    <label>Email</label>
      <input placeholder="..." type="email" name = "email" onChange={handleChange}></input>
      <label>Contraseña</label>
      <input placeholder="..."  name= "password" onChange={handleChange} type="password"></input>
      <button type="submit">Register</button>
      </form>
      </div>
  )
}


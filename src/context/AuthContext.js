
import { createContext ,useContext} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect } from "react";
import { useState } from "react";
import { connectFirestoreEmulator } from "firebase/firestore";


    export const AuthContext = createContext() 
    
    export const useAuth = () => {
        const context = useContext (AuthContext)
        return context
    }

export function AuthProvider ({children}) {
    const [user,setUser] = useState ("")
    const [loading, setLoading] = useState(true);

  
    

    const signup = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password) 
    }

    const signin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signout = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log({ currentUser });
          setUser(currentUser);
          setLoading(false)
        });
        

        return () => unsubscribe();
      }, []);
    
    return(
       
        <AuthContext.Provider value={{signup , signin ,signout , user,loading}}>
            {children}
        </AuthContext.Provider>

    )
}
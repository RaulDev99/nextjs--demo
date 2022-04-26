
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'



export default function InfoUser() {
  const {user,signout,loading} = useAuth()
  const {push} = useRouter()
  

const handleLogOut = async () => {
  try {
    await signout();
  } catch (error) {
    console.error(error.message);
  }
};




  return (
    <>
    
    <div>
        <h1>Welcome {user?.email}</h1>
        <Link href='/signin'>                       
        <button onClick={handleLogOut}>Logout</button>
        </Link>
    </div>

    {/* <SignUp></SignUp> */}
    </>
  )
}
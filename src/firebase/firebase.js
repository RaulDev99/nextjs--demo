// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore,collection,addDoc, getDocs, orderBy,getDoc,doc, query} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAl9vitTVXI4y5gf-8rOUgPVGLEtUN2QMs",
  authDomain: "almacen-demo-eb4f0.firebaseapp.com",
  projectId: "almacen-demo-eb4f0",
  storageBucket: "almacen-demo-eb4f0.appspot.com",
  messagingSenderId: "401965489593",
  appId: "1:401965489593:web:34c91d11d49b161a49aa68"

  // apiKey: "AIzaSyByiipN60YXG7KqwTlGAD3zO4MLfq1PtqM",
  // authDomain: "almacen-demo-6a485.firebaseapp.com",
  // projectId: "almacen-demo-6a485",
  // storageBucket: "almacen-demo-6a485.appspot.com",
  // messagingSenderId: "483541978120",
  // appId: "1:483541978120:web:bc7e188ad0c4798ac0d5bd"
  

  // apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  // authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN}`,
  // projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID}`,
  // storageBucket:  `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET}`,
  // messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID}`,
  // appId:`${process.env.REACT_APP_FIREBASE_APPID}`
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const auth = getAuth(app)

export default db;


export const addData = async(referencia,descripcion,proyecto) => {
  try {
    const docRef = await addDoc(collection(db, "prueba"), {
      id,
      descripcion,
      proyecto
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export const getData = async ()=>{
  const q = query(collection(db, "almacen"));
  const querySnapshot = await getDocs(q);
  const docs=[];
  
      querySnapshot.forEach((doc) => {
      docs.push({...doc.data(),id:doc.id})
      });
  return docs
}

// export const getPost = async () => {
//   const docs=[];
//   const fechas=[];
//   const snapshot = await getDocs(collection(db, "almacen"))
//     .then((snapshot)=>{
//       return snapshot.docs.map(doc=>{
//         const data = doc.data()
//         const id= doc.id
//         return {
//           id,
//           ...data
//         }
//       })
       
//       })
    
//   }

// export const getData = async(ordenFecha)=>{
//   const querySnapshot = await db(collection("almacen"),orderBy('fecha',ordenFecha))
//   .then((querySnapshot)=>{
//     const docs=[];
//     const fechas=[];
//     querySnapshot.forEach((doc) => {
//       docs.push({...doc.data(),id:doc.id
//     })
    
//       return docs
//     })
    
    


//   })
 

// }



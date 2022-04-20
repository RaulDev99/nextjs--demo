// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByiipN60YXG7KqwTlGAD3zO4MLfq1PtqM",
  authDomain: "almacen-demo-6a485.firebaseapp.com",
  projectId: "almacen-demo-6a485",
  storageBucket: "almacen-demo-6a485.appspot.com",
  messagingSenderId: "483541978120",
  appId: "1:483541978120:web:bc7e188ad0c4798ac0d5bd"
  

  // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId:process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const auth = getAuth(app)

export default db;

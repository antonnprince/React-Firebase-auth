// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzWiyttBi2GCM7pVrgcI_PsCP46QlK--c",
  authDomain: "login-auth-1dc18.firebaseapp.com",
  projectId: "login-auth-1dc18",
  storageBucket: "login-auth-1dc18.appspot.com",
  messagingSenderId: "227890238329",
  appId: "1:227890238329:web:23ee46159737b5896055a8"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore(app)
export default app
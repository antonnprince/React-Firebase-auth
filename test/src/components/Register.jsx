import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState, useEffect } from 'react'
import { auth,db } from './fireabase.js'
import {doc, setDoc} from "firebase/firestore"
import {toast} from "react-toastify"


const Register = () => {
  const [email,setEmail] =useState("")
  const [pass,setPass] = useState("")
  const [name,setName]=useState("")

  const handleRegister= async(e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth,email,pass)
      const user = auth.currentUser
      console.log(user)
      
      if(user)
        {
          await setDoc(doc(db,"Users",user.uid),{
            email:user.email,
            name:name
          })
        }

        toast.success("User registered successfully", {position: 'top-center'})
        window.location.href="/profile"
    } catch(error){
       toast.success(error.message, {position:'top-center'})
    }
  }


  return (
    <form className='flex-col bg-zinc' onSubmit={handleRegister}>
      <div className='flex-row space-x-4'>
      <h1 className='text-2xl'>Enter Name</h1>
      <input type='text' className='px-4 py-2 bg-sky-200'  onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div className='flex-row space-x-4'>
        <h1 className='text-2xl'>Enter email</h1>
        <input type='email' className='px-4 py-2 bg-sky-200' onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      
      <div className='flex-row space-x-4'>
        <h1 className='text-2xl'>Enter Password</h1>
       <input type='password'  className='px-4 py-2 bg-sky-200' onChange={(e)=>setPass(e.target.value)}/>
      </div>

      <button className='bg-sky-600 p-4 rounded-xl text-2xl my-4' type='submit'>
        Submit
      </button>

    </form>
  )
}

export default Register
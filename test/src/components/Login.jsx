import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './fireabase'
import { toast } from 'react-toastify'

const Login = () => {
  const [email,setEmail] =useState("")
  const [pass,setPass] = useState("")

  const handleSubmit= async(e)=>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth,email,pass)
      toast.success("user logged in successfully", {
        position:'top-right'
      })
      window.location.href="/profile"
    } catch (error) {
      console.log(error.message)
      toast.success(error.message, {
        position: 'top-right'
      })
    }
  }

  return (
    <>
    <form className='flex space-x-4' onSubmit={handleSubmit}>

      <div className='flex-row space-x-4'>
        <h1 className='text-2xl'>Enter email</h1>
        <input type='email' className='px-4 py-2 bg-sky-200' onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      
      <div className='flex-row space-x-4'>
        <h1 className='text-2xl'>Enter Password</h1>
       <input type='password'  className='px-4 py-2 bg-sky-200' onChange={(e)=>setPass(e.target.value)}/>
      </div>

        <button className='bg-sky-600 px-4 py-2 rounded-full' type='submit'>
          Login
        </button>

      </form>
         <button className='bg-sky-600 px-4 py-2 rounded-full'>
         <Link to="/register">
         Register
         </Link>
       </button>
       </>
  )
}

export default Login
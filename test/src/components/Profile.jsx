import React from 'react'
import {auth, db} from "./fireabase"
import {doc, getDoc} from "firebase/firestore"
import {toast} from "react-toastify"
import { useState, useEffect } from 'react'

const Profile = () => {

const [userDetails, setUserDetails] = useState(null)

const fetchUserData=async()=>{
    auth.onAuthStateChanged(async (user)=>{
        console.log(user)
        const docRef=doc(db,"Users",user.uid)
        const docSnap=await getDoc(docRef)
        if(docSnap.exists())
            {
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            }
        else{
            console.log("User is not logged in")
        }
    })
}

useEffect(()=>{
    fetchUserData()
},[])

const handleLogout=async()=>{
    try {
            await auth.signOut()
            window.location.href="/login"
            console.log("User signed out")
            
    } catch (error) {
        console.log(error.message)
    }
}

  return (
   <div>
    {
        userDetails?(
            <>
            <h1>Name: </h1>
            <h2>{userDetails.name}</h2>
            <button onClick={handleLogout}>Logout</button>
            </>
        ):(
        <p>Loading...</p>
    )
        
    }
   </div>
  )
}

export default Profile
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../Firebase'
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassWord] = useState()
    const [error,setError] = useState()
    const handleSubmit = () => {
        signInWithEmailAndPassword(email,password)
    }

    

    return (
        <div>
            <input type = "text" placeholder = "email" onChange = {(e) => {
                e.preventDefault()
                setEmail(e.target.value)
            }}></input>
            <input type = "password" placeholder = "password" onChange = {(e) => {
                e.preventDefault()
                setPassWord(e.target.value)
            }}></input>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    )
}

export default Login

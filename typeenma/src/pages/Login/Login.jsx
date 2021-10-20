import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const history = useHistory()
    const [email,setEmail] = useState()
    const [password,setPassWord] = useState()
    const [user,loading,error] = useAuthState(auth)
    useEffect(() => {
        if(loading){
            return 
        }
        if(user){
            history.replace("/")
        }
    },[loading,user])
    const handleSubmit = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth,email,password)
            console.log(user)
        } catch(err){
            console.log(err.message)
        }
        
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

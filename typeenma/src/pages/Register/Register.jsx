import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../Firebase'
const Register = () => {
    const [email,setEmail] = useState()
    const [password,setPassWord] = useState()
    const [error,setError] = useState()
    const handleSubmit = async () => {
        const user = await createUserWithEmailAndPassword(auth,email,password)
        console.log(user)
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

export default Register

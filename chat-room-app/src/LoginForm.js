import {useState} from 'react';
import React from 'react'
import axios from 'axios'   

const LoginForm = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const authObject = {'Project-ID' : "97066cd6-d7a3-4403-8861-186442bb0d1e",'User-Name' : username, 'User-Secret' : password}

        try{
            await axios.get('https://api.chatengine.io/chats', {headers : authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();  
            setError('');          
        } catch(err){
            setError('Oops, incorrect credentials.');
        }
    }

    return (
        <div className = "wrapper">
            <div className = "form">
                <h1 className = "title">
                    Chat Application
                </h1>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" 
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                        className = "input"
                        placeholder = "Username..."
                        required
                    />
                    <input type = "password" 
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        className = "input"
                        placeholder = "Password..."
                        required
                    />
                    <div align ="center">
                        <button className = "button" type = "submit">
                            <span>Log in</span>
                        </button>
                    </div>
                    <h2 className = "error">{error}</h2>
                </form>
                
            </div>
        </div>
    )
}

export default LoginForm

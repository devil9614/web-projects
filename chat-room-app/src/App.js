import {ChatEngine} from 'react-chat-engine';
import './App.css'
import React from 'react'
import ChatFeed from './ChatFeed'
import LoginForm from './LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID="97066cd6-d7a3-4403-8861-186442bb0d1e"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App

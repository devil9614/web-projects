import { Avatar, Button } from '@mui/material'
import React from 'react'
import './Navbar.css'
import styled from 'styled-components'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
import { useHistory } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
const Navbar = () => {
  const history = useHistory()
  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      history.replace('/login')
    }).catch(err => {
      console.log(err)
    })
  }
  const [user,loading,error] = useAuthState(auth)
  const handleRedirect = () => {
    history.replace('/login')
  }
  if(user){console.log(user.providerData[0].email)}
  return (
    <NavContainer className = "main-cntainer">
      <Logo>TypeEnma</Logo>
      <UserDetails>
        {
          user?<><Avatar>{user.providerData[0].email[0]}</Avatar>
      <p style = {{paddingLeft:"10px",paddingRight:"10px"}}>{user.providerData[0].email}</p>
      <Button variant = "contained" onClick = {handleSignOut}>Logout</Button></>:<Button variant = "contained" onClick = {handleRedirect}>Login</Button>
        }
      
      </UserDetails>
    </NavContainer>
  )
}

const Logo = styled.p`
    padding:30px;
    font-size: 1.2rem;
`
const UserDetails = styled.div`
    display: flex;
    align-items: center;
    padding:30px;
`

const NavContainer = styled.div`
    max-width:100vw;
    width:100vw;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:10vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
`

export default Navbar

import { Avatar } from '@mui/material'
import React from 'react'
import './Navbar.css'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <NavContainer className = "main-cntainer">
      <Logo>TypeEnma</Logo>
      <UserDetails>
      <Avatar>s</Avatar>
      <p style = {{paddingLeft:"10px"}}>Sujan</p>
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

import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {ReactComponent as LoginLogo} from '../../assets/login.svg'
import {auth} from '../../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { Button, Container, Grid, TextField } from '@mui/material'
import Card from '@mui/material/Card'
const Login = () => {
    const history = useHistory()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
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
    const handleUsernameChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
    return (
        <MainBox>
      <div >
        <LoginLogo className = "svglogo" style= {{width:"30vw"}}/>
      </div>
      <LoginBox>
    <Card style = {{padding:"20px"}}>
            <div style = {{paddingTop:"20px"}}>
            <Container maxWidth="xs">
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <TextField fullWidth placeholder="Email" name="email" size="small" variant="outlined" 
                      onChange = {e => handleUsernameChange(e)}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        placeholder="Password"
                        name="password"
                        size="small"
                        type="password"
                        variant="outlined"
                        onChange = {e => handlePasswordChange(e)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style = {{justifyContent:"center",alignItems:"center"}}>
                  <Button color="primary"  variant="contained" onClick = {
                    handleSubmit
                  }>
                    Log in
                  </Button>
                  <p style = {{textAlign:"center",paddingTop:"1rem"}}>{error}</p>
                </Grid>
              </Grid>
            </form>
          </Container>
            </div>
        
      <div style = {{cursor:"pointer",margin:"15px"}}>
      <span onClick = {() => history.replace('/register')} >Need an account? <a style = {{color:"blue"}}>Create a new Account</a></span>
      </div></Card>
    </LoginBox>
    </MainBox>
        
    )
}

const MainBox = styled.div`
    display:flex;
    height:100vh;
    width:100vw;
    align-items:center;
    justify-content:center;
    background-image: linear-gradient(to top,lightgreen,white);
`
const LoginBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:white;
    border-radius:10px;
    min-width:38vw;
    min-height:45vh;
    background-image: linear-gradient(to right,lightgreen,white);
`
const InputField = styled.div`
    padding:15px;
`

export default Login

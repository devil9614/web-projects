import { Button, Input, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CircularClock from "../../Components/CircularClock";
import Navbar from '../../Components/Navabar/Navbar'
import TextSection from '../../Components/TextSection';
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));

const Home = () => {
    const [start,setStart] = useState(false)
    const [count,setCount] = useState(0)
    const [right,setRight] = useState(0)
    const [re,setRe] = useState(false)
    const [text,setText] = useState("")
    const handleClick = (e) => {
        setStart(true)
        setTimeout(() => setRe(true),30000)
        setText(e.target.value)
    }
    
    const sampleText = `This will be the sample textSet the color of the text-decoration to redSet the color of the text-decoration to red
                        Set the color of the Set the color of the text-decoration to redSet the color of the texSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redt-decoration to redSet the color of the text-decoration to redtext-decoration to redSet the color of the text-decoration to red`
    const Array = sampleText.split("");
    console.log(Array)
    console.log(text)
    
    return (
        <HomeContainer>
            {re?<Redirect to = {{pathname:"/dashboard",state:{text:String(text),Array:Array},}} />:null}
            <Navbar/>
            <ClockPosition><CircularClock start = {start}/></ClockPosition>
            <TextPosition style = {{maxHeight:"30vh"}}>
                <TotalSection>
                    {Array.map((letter,index) => (<EachLetter 
                    style = 
                    {index+1 > text.length?{color:"grey"}:text[index] === letter?{color:"green"}:{color:"red",textDecoration:"underline",textDecorationColor:"red"}} 
                    key = {index}>{letter}</EachLetter>))}
                </TotalSection>
            </TextPosition>
            <TextField
                onChange = {(e) => handleClick(e)} 
                style = {{outline:"none",paddingTop:"20px",maxWidth:"80vw"}}>
                </TextField>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    width:100vw;
    min-height:100vh;
    overflow-x:hidden;
    background-image: linear-gradient(to top,lightgreen,white);
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ClockPosition = styled.div`
    margin-top:10vh;
    margin-left:10vw;
`
const TextPosition = styled.div`
    margin-top:3vh;
    margin-left:10vw;
    overflow-y:scroll;
    max-height:30vh
    max-width:80vw;
    margin-right:10vw;
`
const EachLetter = styled.div`
    font-size:1.5rem;
    display:flex;
    width:1.1rem;
    color:grey;
`
const TotalSection = styled.div`
    display:flex;
    flex-wrap:wrap
`


export default Home

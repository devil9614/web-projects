import { Button, Input, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CircularClock from "../../Components/CircularClock";
import Navbar from '../../Components/Navabar/Navbar'
import TextSection from '../../Components/TextSection';
import { makeStyles } from "@material-ui/core/styles";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));

const Home = () => {
    const [start,setStart] = useState(false)
    const [count,setCount] = useState(0)
    const [right,setRight] = useState(false)
    const [tryy,setTryy] = useState("")
    const [text,setText] = useState("")
    const classes = useStyles();
    const myRef = useRef(null)
    const UseKey = (key,cb) => {
        const callbackRef = useRef(cb)
        useEffect(() => {
            callbackRef.current = cb
        })
        useEffect(() => {
            const handle = (event) => {
                setTryy(tryy+event.key)
                console.log(event.key)
                if (event.key === key){
                    callbackRef.current(event)
                    setCount(count+1)
                    setRight(true)
                    console.log(true)
                }
                else{
                    console.log(false)
                    setRight(false)
                    if (key === "Backspace"){
                        setCount(count-1)
                    }
                    else{
                        setCount(count+1)
                    }
                }
            }
            document.addEventListener("keypress",handle)
        },[key])
        
    }
    const handleClick = (e) => {
        setStart(true)
        setText(e.target.value)
        scrollToRef(myRef)
    }
    const handleEnter = () => {
        console.log(tryy,"Total Thing")
    }
    useEffect(() => {
        console.log(tryy)
    },[tryy])
    const sampleText = `This will be the sample textSet the color of the text-decoration to redSet the color of the text-decoration to red
                        Set the color of the Set the color of the text-decoration to redSet the color of the texSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redSet the color of the text-decoration to redt-decoration to redSet the color of the text-decoration to redtext-decoration to redSet the color of the text-decoration to red`
    const Array = sampleText.split("");
    console.log(Array)
    UseKey("T",handleEnter)
    console.log(text)
    return (
        <HomeContainer>
            <Navbar/>
            <ClockPosition><CircularClock start = {start}/></ClockPosition>
            <TextPosition style = {{maxHeight:"30vh"}}>
                <TotalSection>
                    {Array.map((letter,index) => <EachLetter ref = {myRef} 
                    style = 
                    {index+1 > text.length?{color:"grey"}:text[index] === letter?{color:"green"}:{color:"red",textDecoration:"underline",textDecorationColor:"red"}} 
                    key = {index}>{letter}</EachLetter>)}
                </TotalSection>
            </TextPosition>
            <TextField
                autoFocus
                classes={{notchedOutline:classes.input}}
                onChange = {(e) => handleClick(e)} 
                style = {{outline:"none",paddingTop:"20px"}}>

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
    width:1.2rem;
    color:grey;
`
const TotalSection = styled.div`
    display:flex;
    flex-wrap:wrap
`


export default Home

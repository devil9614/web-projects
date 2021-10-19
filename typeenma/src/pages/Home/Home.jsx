import { Button, Input } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CircularClock from "../../Components/CircularClock";
import Navbar from '../../Components/Navabar/Navbar'
import TextSection from '../../Components/TextSection';


const Home = () => {
    const [start,setStart] = useState(false)
    const [count,setCount] = useState(0)
    const [right,setRight] = useState(false)
    const [tryy,setTryy] = useState("")
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
    const handleClick = () => {
        setStart(true)
    }
    const handleEnter = () => {
        console.log(tryy,"Total Thing")
    }
    useEffect(() => {
        console.log(tryy)
    },[tryy])
    const Array = [ "T", "h", "i", "s", " ", "w", "i", "l", "l"]
    UseKey("T",handleEnter)
    return (
        <HomeContainer>
            <Navbar/>
            <ClockPosition><CircularClock start = {start}/></ClockPosition>
            <TextPosition><TextSection/></TextPosition>
            <Button onClick = {handleClick}>Start</Button>
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
`
export default Home

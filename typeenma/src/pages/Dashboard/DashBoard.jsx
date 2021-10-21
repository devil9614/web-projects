import React, { useState } from 'react'
import styled from 'styled-components'
const DashBoard = (props) => {
    const [count,setCount] = useState(0)
    const [right,setRight] = useState(0)
    console.log(props.location.state.text[0])
    setCount(props.location.state.text.length)
    if(props.location.state.text && props.location.state.Array){for(let i = 0 ;i < props.location.state.text.length;i++){
        console.log(i)
        if(props.location.state.text[i] === props.location.state.Array[i]){
            setRight(right+1)
        }
    }}
    console.log(right,count)
    const wpm = 12
    const accuracy = 80
    
    return (
        <>
        <DashBox>
            <h1>{wpm}</h1>
            <p>Words Per Min</p>
            <h3>{accuracy} %</h3>
            <p>of Accuracy</p>
        </DashBox>
        </>
        
    )
}
const DashBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    h1{
        font-size:4rem;
        padding:1rem
    }
    p{
        font-size:1.3rem;
        padding:1.5rem;
    }
    h3{
        font-size:1.6rem;
        padding:1.5rem
    }
    background-image: linear-gradient(to top,lightgreen,white);
`


export default DashBoard

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const CircularClock = ({start}) => {
    const [seconds,setSeconds] = useState(30)
    useEffect(() => {
        if(seconds && start){
            setTimeout(() => setSeconds(seconds-1),1000)
        }
    },[seconds,start])
    
    const maxSeconds = seconds>30?60:30
  return (
      <>
    <ClockContainer>
      <CircularProgressbarWithChildren value = {seconds} maxValue = {maxSeconds} strokeWidth = "10" onExpiry>
        <SecondText>{seconds}</SecondText>
      </CircularProgressbarWithChildren>
    </ClockContainer>
    </>
  )
}

const ClockContainer = styled.div`
    width:50px;
    height:50px;
`
const SecondText = styled.p`
    font-size: 1.1rem;
`
export default CircularClock

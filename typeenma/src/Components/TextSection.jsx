import React from 'react'
import styled from 'styled-components'

const sampleText = "This will be the sample text"
const letters = sampleText.split("");
console.log(letters)
// const checkText = () => {
//   if 
// }
const TextSection = () => {
  return (
    <TotalSection>
        {letters.map((letter,index) => <EachLetter style = {index===1?{color:"lightGreen"}:null} key = {index}>{letter}</EachLetter>)}
    </TotalSection>
  )
}
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

export default TextSection

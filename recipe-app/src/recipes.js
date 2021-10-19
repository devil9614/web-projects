import React from 'react'
import './recipes.css';

const recipes = ({title,calories,image}) => {
    return (
        <div className = "block">
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src = {image} alt = {title}></img>
        </div>
    )
}

export default recipes

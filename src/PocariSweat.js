import React from "react"
import { Link } from "react-router-dom"
import pocariSweatImg from "./images/PocariSweat.jpg"

const PocariSweat = () => {
    return (
        <div>
            <h1>Pocari Sweat</h1>
            <img src={pocariSweatImg} alt="NoImage"></img>
            <Link to="/">Home</Link>
        </div>
    )
}

export default PocariSweat
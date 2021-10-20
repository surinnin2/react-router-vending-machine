import React from "react"
import { Link } from "react-router-dom"
import honeyBunImg from "./images/HoneyBun.jpg"

const HoneyBun = () => {
    return (
        <div>
            <h1>Honey Bun</h1>
            <img src={honeyBunImg} alt="NoImage"></img>
            <Link to="/">Home</Link>
        </div>
    )
}

export default HoneyBun
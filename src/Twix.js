import React from "react"
import { Link } from "react-router-dom"
import twixImg from "./images/Twix.jpg"

const Twix = () => {
    return (
        <div>
            <h1>Twix</h1>
            <img src={twixImg} alt="NoImage"></img>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Twix
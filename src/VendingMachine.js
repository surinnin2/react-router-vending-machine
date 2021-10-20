import React from "react"
import Twix from "./Twix"
import HoneyBun from "./HoneyBun"
import PocariSweat from "./PocariSweat"
import { BrowserRouter, Route, Link } from "react-router-dom"

const VendingMachine = () => {
    return (
        <div>
            <h1>Vending Machine</h1>
            <BrowserRouter>
                <Route exact path="/">
                    <div>
                        <Link to="/twix">Twix</Link>
                        <br/>
                        <Link to="/honeybun">Honey Bun</Link>
                        <br/>
                        <Link to="/pocarisweat">Pocari Sweat</Link>
                    </div>
                </Route>
                <Route exact path="/twix"> 
                    <Twix />
                </Route>
                <Route exact path="/honeybun">
                    <HoneyBun />
                </Route>
                <Route exact path="/pocarisweat">
                    <PocariSweat />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine
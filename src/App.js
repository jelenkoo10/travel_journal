import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import Data from "./data"
import "./style.css"

export default function App() {
    const item = Data
    return (
        <div>
            <Nav />
            <Card 
            item={item[0]} />
            
            <Card 
            item={item[1]} />
            
            <Card 
            item={item[2]} />

            <Card 
            item={item[3]} />

            <Card 
            item={item[4]} />
        </div>
    )
    
}


import React from 'react'
import "../head.css"
import {Link} from "react-router-dom"

export default function Head() {
    return (
        <div>
           <Link to="/"><h1 className="title">STEVEN IODICE</h1></Link> 
        </div>
    )
}

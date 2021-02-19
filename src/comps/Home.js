import React from 'react'
import "../home.css"
import {Link} from "react-router-dom"

export default function Home() {



    
    return (
        <div>
            <main className="sidesContainer">

                <section className="side">
                    <Link to="music">
                    <div className="leftSide">
                        <h1>Music</h1>
                        <i className="icon fas fa-music"></i>
                    </div>
                    </Link>
                </section>

           
            <section className="side">
                <Link to="/photography">
                    <div className="rightSide">
                        <h1>Photography</h1>
                        <i className="icon fas fa-camera"></i>
                    </div>
                </Link>
                </section>

            </main>
        </div>
    )
}

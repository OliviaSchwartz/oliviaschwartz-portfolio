import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Home () {
    return(
        <div>
            <header id="header">
            <div className="homepage-title">
                <h1 id="homepage-title">OLIVIA SCHWARTZ</h1>
                <h2 id="homepage-subtitle">SOFTWARE ENGINEER.</h2>
            </div>
            <div className="header-carousel-container">
               <h3 className="intro">WEB DEVELOPER | COFFEE LOVER | TRAVEL ENTHUSIAST | D.C. AREA</h3>
            </div>
            <hr className="page-break"></hr>
            <div className="explore-container">
                <Link to='/portfolio'><button className="explore-button"><h3>EXPLORE WORK >>> </h3></button></Link>
            </div>
            </header>
        </div>
    )
}

export default Home

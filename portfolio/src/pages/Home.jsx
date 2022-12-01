import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Animation from '../components/Animation'

function Home () {
    return(
        <div>
            <header id="header">
            <div className="homepage-title">
                <h1 id="homepage-title">OLIVIA SCHWARTZ</h1>
                <h2 id="homepage-subtitle">JUNIOR SOFTWARE ENGINEER.</h2>
            </div>
            <div className="header-carousel-container">
                <Animation/>
            </div>
            <hr className="page-break"></hr>
            <div className="explore-container">
                <h3>EXPLORE WORK</h3>
                <Link to='/portfolio'><button className="explore-button">Portfolio</button></Link>
            </div>
            </header>
        </div>
    )
}

export default Home

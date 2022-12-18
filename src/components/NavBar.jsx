import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function NavBar () {
    return (
        <div className= "navbar">
            <Link className="nav" to='/'>Home</Link>
            <Link className="nav" to= '/portfolio'>Portfolio</Link>
            <Link className="nav" to="/about-me">About</Link>
         </div>
    )
}

export default NavBar

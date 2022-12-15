import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function NavBar () {
    return (
        <div className= "navbar">
            <Link className="nav" to='/'>Home</Link>
            <Link className="nav" to= '/portolio'>Portfolio</Link>
            <Link className="nav" to="/about-me">About</Link>
            <Link className="nav" to="/contact">Contact</Link>
         </div>
    )
}

export default NavBar

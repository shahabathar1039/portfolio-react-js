import React from 'react'
import { Link } from "react-router-dom";
// Importing Css
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/"><i className="logo">𝓼</i></Link>
            </div>
            <div className="navbar-right">
                <div className="links">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Get In Touch</Link>
                </div>
                <div className="btn">
                    <a href="/tech-stack">Tech Stack</a>
                </div>
                <div className="nav-icons">
                    <a href="https://github.com/Shahab-Athar">
                        <i class="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

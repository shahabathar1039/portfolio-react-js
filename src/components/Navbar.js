import React from 'react'
// Importing Css
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <a href="/"><i className="logo">𝓼</i></a>
            </div>
            <div className="navbar-right">
                <div className="links">
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Get In Touch</a>
                </div>
                <div className="btn">
                    <a href="/tech-stack">Tech Stack</a>
                </div>
                <div className="nav-icons">
                    <a href="https://github.com/Shahab-Athar">
                        <i class="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

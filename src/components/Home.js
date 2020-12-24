import React from 'react'
import "./Home.css"
// import { Link } from "react-router-dom";

function Home() {
    const email = () => {
        alert('Contact Me At shahabathar1039@gmail.com')
    }
    return (
        <div className="home">
            <div className="advertisement">
                <a href="https://pk.linkedin.com/" style={{ textDecoration: "none", color:"black" }}><i class="fab fa-linkedin-in fa-lg"></i></a>
                <a href="https://www.facebook.com/shahab.athar.94" style={{ textDecoration: "none", color:"black" }}><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.instagram.com/mr.unpopulur/" style={{ textDecoration: "none", color:"black" }}><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://twitter.com/MUnpopulur" style={{ textDecoration: "none", color:"black" }}><i class="fab fa-twitter fa-2x"></i></a>
                <div onClick={email} style={{ cursor: "pointer" }}><i class="fas fa-envelope-square fa-2x"></i></div>
            </div>
            <div className="slogo">
                <center>
                    <h1>𝕯𝖊𝖘𝖎𝖌𝖓,𝕯𝖊𝖛𝖊𝖑𝖔𝖕 𝕬𝖓𝖉 𝕸𝖆𝖎𝖓𝖙𝖆𝖎𝖓</h1>
                </center>
            </div>
            <div className="btn-home">
                <div className="btn-all">
                    <a className="redirect" href="/short-description">
                        <p className="about">
                            <span>
                                About
                            </span>
                            <br/>
                            <br/>
                            <i class="far fa-address-card fa-lg"></i>
                        </p>
                    </a>
                    <a className="redirect" href="/skills">
                        <p className="skills">
                            Skills
                            <br/>
                            <br/>
                            <i class="fas fa-sitemap fa-lg"></i>
                        </p>
                    </a>
                    <a className="redirect" href="/top-projects">
                        <p className="projects">
                            <span>
                                Project
                            </span>
                            <br/>
                            <br/>
                            <i class="fas fa-tasks fa-lg"></i>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
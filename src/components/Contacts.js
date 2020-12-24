import React, { Fragment } from 'react'
import "./Contacts.css"

function Contacts() {
    return (
        <Fragment >
            <div className="banner">
                <center>
                    <h1>𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓜𝓮</h1>
                </center>
            </div>
            <br/>
            <div className="contacts">
                <div className="contact-links">
                    <h2>Gmail:</h2>
                    <p>shahabathar1039@gmail.com</p>
                    <h2>Github:</h2>
                    <p><i><a href="https://github.com/Shahab-Athar">https://github.com/Shahab-Athar</a></i></p>
                    <h2>LinkedIn:</h2>
                    <p><i><a href="https://pk.linkedin.com/">https://pk.linkedin.com/</a></i></p>
                </div>
                <div className="experience">
                    <h2>Experience</h2>
                    <li><strong>Python</strong></li>
                    <div className="nested-experiance">
                        <li>Basic Python</li>
                        <li>PyQt5</li>
                        <li>Django</li>
                        <br/>
                    </div>
                    <li><strong>JavaScript</strong></li>
                    <div className="nested-experiance">
                        <li>React Js</li>
                    </div>
                    <br/>
                    <li><strong>SQLite3</strong></li>
                </div>
            </div>
            <center>
                <a href="https://pk.linkedin.com/"><i class="fab fa-linkedin-in fa-lg"></i></a>
                <a href="https://www.facebook.com/shahab.athar.94"><i class="fab fa-facebook fa-2x contact-facebook contact"></i></a>
                <a href="https://www.instagram.com/mr.unpopulur/"><i class="fab fa-instagram fa-2x contact-instagram contact"></i></a>
                <a href="https://twitter.com/MUnpopulur"><i class="fab fa-twitter fa-2x contact-twitter contact"></i></a>
                <i style={{ cursor: "pointer" }}><i class="fas fa-envelope-square fa-2x contact-gmail contact"></i></i>
            </center>
        </Fragment>
    )
}

export default Contacts

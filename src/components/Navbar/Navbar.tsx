import React from 'react';
import "./Navbar.css"

export default function Navbar () {
    return (
        <nav>
            <ul className = "nav">
                <li className = "horizontal"><a className = "changeColor" href="home">Home</a></li>
            </ul>
        </nav>
    )
}
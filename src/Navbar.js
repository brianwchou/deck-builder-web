import React from 'react';
import "./navbar.css"

function Navbar () {
    return (
        <nav>
            <ul className = "nav">
                <li className = "horizontal"><a className = "changeColor" href="Home">Home</a></li>
                <li className = "horizontal"><a className = "changeColor" href="View2">View2</a></li>
                <li className = "horizontal"><a className = "changeColor" href="View3">View3</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
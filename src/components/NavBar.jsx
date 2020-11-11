import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/navbar.css";

const NavBar = () => {
    return (
            <nav className="nav">
                <div id="jo2-home">JO²</div>
                <ul>
                    <li>Collections</li>
                    <li>Bio</li>
                    <li>Contact</li>
                </ul>
                <div id="nav">
                    <div></div>
                    <div></div>
                </div>
            </nav>
    )
}

export default NavBar

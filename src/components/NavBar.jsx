import React from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/navbar.css";

const NavBar = () => {
    return (
            <nav className="nav">
                <NavLink to="/"><div id="jo2-home">JO²</div></NavLink>
                <ul>
                    <NavLink to="/collections"><li>Collections</li></NavLink>
                    <NavLink to="/qui-sommes-nous"><li>Qui sommes nous ?</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
                <div id="social-div">
                    <a href="https://www.instagram.com/jojodaviau/" target="_blank" rel="noreferrer"><div className="social-logo"></div></a>
                    <a href="https://www.facebook.com/Jonathan2Stab/" target="_blank" rel="noreferrer"><div className="social-logo"></div></a>
                </div>
            </nav>
    )
}

export default NavBar

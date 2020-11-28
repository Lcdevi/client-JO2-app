import React from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/navbar.css";
import instagramImg from "../images/instagram-logo.svg";
import logoJoCarre from "../images/logo-jocarre-blanc-2.png";



const NavBar = () => {
    return (
            <nav className="nav">
                <NavLink to="/"><div id="jo2-home"><img src={logoJoCarre} alt="logo jo carre blanc"/></div></NavLink>
                <ul>
                    <NavLink to="/collections"><li>Collections</li></NavLink>
                    <NavLink to="/qui-sommes-nous"><li>Qui sommes nous ?</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
                <div id="social-div">
                    <a href="https://www.instagram.com/jocarreceramics/" target="_blank" rel="noreferrer"><img src={instagramImg} alt="instagram logo"/></a>
                </div>
            </nav>
    )
}

export default NavBar

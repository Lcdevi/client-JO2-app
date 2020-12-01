import React from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/navbar.css";
import instagramImg from "../images/instagram-logo.svg";
import logoJoCarre from "../images/logowebblanc1.png";



const NavBar = () => {
    return (
            <nav className="nav">
                <NavLink to="/"><div id="jo2-home"><img src={logoJoCarre} alt="logo jo carre blanc"/></div></NavLink>
                <ul>

                    <NavLink 
                        to="/"
                    >
                        <li className="navbar-accueil-li">Accueil</li>
                    </NavLink>

                    <NavLink 
                        to="/collections"
                        activeStyle={{
                            borderBottom: "1px solid var(--light-pink)"
                          }}
                    >
                        <li>Collections</li>
                    </NavLink>
                    
                    <NavLink 
                        to="/qui-sommes-nous"
                        activeStyle={{
                            borderBottom: "1px solid var(--light-pink)"
                          }}
                    >
                        <li>Qui sommes nous ?</li>
                    </NavLink>
                    
                    <NavLink 
                        to="/contact"
                        activeStyle={{
                            borderBottom: "1px solid var(--light-pink)"
                          }}
                    >
                        <li>Contact</li>
                    </NavLink>
                    
                    <NavLink 
                        to="/actualites"
                        activeStyle={{
                            borderBottom: "1px solid var(--light-pink)"
                          }}
                    >
                        <li>Actualités</li>
                    </NavLink>

                    <li>
                        <a href="https://www.instagram.com/jocarreceramics/" target="_blank" rel="noreferrer"><img src={instagramImg} alt="instagram logo"/></a>                    
                    </li>
                </ul>
                <div id="social-div">
                    <a href="https://www.instagram.com/jocarreceramics/" target="_blank" rel="noreferrer"><img src={instagramImg} alt="instagram logo"/></a>
                </div>
            </nav>
    )
}

export default NavBar

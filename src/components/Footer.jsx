import React from 'react';
import "../styles/footer.css";
import copyright from "../images/copyright-logo.svg";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>CGV</li>
                <li> <img src={copyright} alt="copyright white logo"/> dessiné et développé par <a href="#"><span>Laura Caillaux</span></a> pour les fabuleux Jo Carré à la fin de l'année 2020 entre Paris et Strasbourg</li>
            </ul>
        </footer>
    )
}

export default Footer

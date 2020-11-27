import React from 'react';
import "../styles/footer.css";
import copyright from "../images/copyright-logo.svg";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>CGV</li>
                <li>Web: Laura Caillaux</li>
                <li> <img src={copyright} alt="copyright white logo"/> Laura Caillaux</li>
                <li>2020</li>
            </ul>
        </footer>
    )
}

export default Footer

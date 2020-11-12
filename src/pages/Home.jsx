import React from 'react';
import {Link} from 'react-router-dom';
import homeImage from '../images/img-home.JPG';
import '../styles/home.css';

const Home = () => {
    return (
        <div id='main-home-div'>
            <div id="home-image-and-infos">
                <img src={homeImage} alt="ceramic's bowls and mugs"/>
                <div className="framed-home">
                    <div id="infos-title">
                        <h2>LA NOUVELLE COLLECTION EST SORTIE DES FOURS!</h2>
                    </div>
                    <div id="infos-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum tortor elit, et viverra purus vestibulum in. Vivamus at nulla felis. Cras fermentum euismod diam eget consectetur.</p>
                        <div id="decouvrir-btn">
                            <Link to="/collections">Découvrir vite</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home

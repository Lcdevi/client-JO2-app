import React from 'react';
import {Link} from 'react-router-dom';
import homeImage from '../images/img-home.JPG';
import '../styles/home.css';

const Home = () => {
    return (
        <div id="main-container-home">
            <div className="top-main-image-home">
                {/* <img src="https://res.cloudinary.com/lcdevicloud/image/upload/v1606416407/Jo2-website/Items/Pico/pico017-1_adz8cm.jpg" alt="ceramique porcelaine gravée"/> */}
                <p>Jo carré ceramics, c'est Jo², c'est Jonathan Stab, ceramiste et Jonathan Daviau, illustrateur.</p>
            </div>
            
            <div className="bottom-actualite-home">
                <h1>actualités</h1>
                <div className="actualite-bloc">
                    <div className="actualite-image">
                        <img src={homeImage} alt=""/>
                    </div>
                    <div className="actualite-text">
                        <h2>festival de Cannes</h2>
                        <br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem.</p>
                    </div>
                </div>
                <div className="actualite-bloc">
                    <div className="actualite-image">
                        <img src={homeImage} alt=""/>
                    </div>
                    <div className="actualite-text">
                        <h2>festival de Cannes</h2>
                        <br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem.</p>
                    </div>
                </div>
                <div className="actualite-bloc">
                    <div className="actualite-image">
                        <img src={homeImage} alt=""/>
                    </div>
                    <div className="actualite-text">
                        <h2>festival de Cannes</h2>
                        <br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem.</p>
                    </div>
                </div>
            </div>
            {/* <div id='main-home-div'> */}

                {/* <div id="home-image-and-infos"> */}
                    {/* <img src={homeImage} alt="ceramic's bowls and mugs"/> */}
                    {/* <div className="framed-home">
                        <div id="infos-title">
                            <h2>LA NOUVELLE COLLECTION EST SORTIE DES FOURS!</h2>
                        </div>
                        <div id="infos-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum tortor elit, et viverra purus vestibulum in. Vivamus at nulla felis. Cras fermentum euismod diam eget consectetur.</p>
                            <div id="decouvrir-btn">
                                <Link to="/collections">Découvrir vite</Link>
                            </div>
                        </div>
                    </div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Home

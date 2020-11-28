import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import homeImage from '../images/img-home.JPG';
import '../styles/home.css';
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap";

class Home extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
      }
    
      componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
      }

      render() {



          return (

              <div id="main-container-home">
                  <div className="top-main-image-home">
                      {/* <img src="https://res.cloudinary.com/lcdevicloud/image/upload/v1606416407/Jo2-website/Items/Pico/pico017-1_adz8cm.jpg" alt="ceramique porcelaine gravée"/> */}
                      <p>
                      La rencontre entre un céramiste obsessionnel et un dessinateur inconstant
                      </p>
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
}

export default Home

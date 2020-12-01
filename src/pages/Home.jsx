import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';
import { Power3, TweenLite } from "gsap";
import SmallCategoriesCart from "../components/SmallCategoryCart";

class Home extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        // this.firstWord = null;
        // this.secondWord = null;
        // this.thirdWord = null;
        // this.fourthWord = null;
        // this.fifthWord = null;
        // this.sixthWord = null;
        // this.seventhWord = null;
        // this.eighthWord = null;
        // this.ninthWord = null;
        // this.tenthWord = null;
        // reference all sentence to the DOM node
        this.sentence = null;

        

        // reference to the animation
        this.myTween = null;
        this.myTween2 = null;
        this.myTween3 = null;
        this.myTween4 = null;
        this.myTween5 = null;
        this.myTween6 = null;
        this.myTween7 = null;
        this.myTween8 = null;
        this.myTween9 = null;
        this.myTween10 = null;
        this.myTween11 = null;
    }
    
    componentDidMount(){
        // use the node ref to create the animation
        // this.myTween = TweenLite.to(this.firstWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 0.2});
        // this.myTween = TweenLite.to(this.secondWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 0.4});
        // this.myTween = TweenLite.to(this.thirdWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 0.6});
        // this.myTween = TweenLite.to(this.fourthWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 0.8});
        // this.myTween = TweenLite.to(this.fifthWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 1});
        // this.myTween = TweenLite.to(this.sixthWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 1.2});
        // this.myTween = TweenLite.to(this.seventhWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 1.4});
        // this.myTween = TweenLite.to(this.heigthWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 1.6});
        // this.myTween = TweenLite.to(this.ninthWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 1.8});
        // this.myTween = TweenLite.to(this.tenthWord, 1.2, {opacity: 1, y: 230, ease: Power3.easeOut, delay: 2});
        this.myTween11 = TweenLite.to(this.sentence, 12, {opacity: 1, ease: Power3.easeOutn, delay: 0.5});

        // this.myTween = TweenLite.staggerTo([this.firstWord, this.secondWord, this.thirdWord, this.fourthWord, this.fifthWord, this.sixthWord, this.seventhWord, this.heigthWord, this.ninthWord, this.tenthWord ], 4, {opacity: 1, y: 230, ease: Power3.easeOut}, .2);

      }

      render() {



          return (

              <div id="main-container-home">
                  <div className="top-main-image-home">
                      {/* <img src="https://res.cloudinary.com/lcdevicloud/image/upload/v1606416407/Jo2-website/Items/Pico/pico017-1_adz8cm.jpg" alt="ceramique porcelaine gravée"/> */}
                      <p id="test-anim-home" ref={el => this.sentence = el}>
                        La rencontre entre un céramiste obsessionnel et un illustrateur inconstant
                      </p>

                      {/* <p>
                          <span ref={el => this.firstWord = el}>
                            La&nbsp; 
                          </span>
                          <span ref={el => this.secondWord = el}>
                            rencontre&nbsp; 
                          </span>
                          <span ref={el => this.thirdWord = el}>
                            entre&nbsp; 
                          </span>
                          <span ref={el => this.fourthWord = el}>
                            un&nbsp; 
                          </span>
                          <span ref={el => this.fifthWord = el}>
                            céramiste&nbsp; 
                          </span>
                          <span ref={el => this.sixthWord = el}>
                            obsessionnel&nbsp; 
                          </span>
                          <span ref={el => this.seventhWord = el}>
                            et&nbsp; 
                          </span>
                          <span ref={el => this.heigthWord = el}>
                            un&nbsp; 
                          </span>
                          <span ref={el => this.ninthWord = el}>
                            dessinateur&nbsp; 
                          </span>
                          <span ref={el => this.tenthWord = el}>
                            inconstant
                          </span>
                      </p> */}
                  </div>

                  <div className="home-collection-container">
                      <h1>Les collections</h1>
                      <div>
                        <SmallCategoriesCart />
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

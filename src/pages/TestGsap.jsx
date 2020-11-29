import React, { Component, useRef, useEffect } from 'react'
import { TweenMax, TweenLite, Power3 } from 'gsap'
import { render } from '@testing-library/react';
import '../styles/testGsap.css'

class TestGsap extends Component {
    constructor(props){
        super(props);
        // reference to the DOM node
        this.myElement = null;
        this.mySecondElement = null;
        this.myThirdElement = null;
        this.myFourthElement = null;

        // reference to the animation
        this.myTween = null;
        this.myTween2 = null;
        this.myTween3 = null;

    }
    
      componentDidMount(){
        // use the node ref to create the animation
        // this.myTween = TweenLite.to(this.myElement, 1.2, {opacity: 1, y: 200, ease: Power3.easeOut});
        this.myTween2 = TweenLite.to(this.mySecondElement, 1.2, {opacity: 1, y: 200, ease: Power3.easeOut});
        this.myTween = TweenLite.to(this.myThirdElement, 1.2, {opacity: 1, y: 200, ease: Power3.easeOut, delay: 0.2});
        this.myTween3 = TweenLite.to(this.myFourthElement, 1.2, {opacity: 1, y: 200, ease: Power3.easeOut, delay: 0.4});

        // this.myTween2 = TweenLite.from(this.mySecondElement, .8, {opacity: 0, y: 100, ease: Power3.easeOut});

      }

    render() {

        return (
            <div>
                <h1>
                    <span ref={el => this.mySecondElement = el} className="yo">Lorem&nbsp;</span><span ref={el => this.myThirdElement = el} className="yo">ipsum&nbsp; </span><span ref={el => this.myFourthElement = el} className="yo">dolor.&nbsp;</span>
                </h1>
            </div>
        )

    }
}

export default TestGsap


// class MyComponent extends Component {
//     constructor(props){
//       super(props);
//       // reference to the DOM node
//       this.myElement = null;
//       // reference to the animation
//       this.myTween = null;
//     }
  
//     componentDidMount(){
//       // use the node ref to create the animation
//       this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
//     }
  
//     render(){
//       return <div ref={div => this.myElement = div} />;
//     }
//   }
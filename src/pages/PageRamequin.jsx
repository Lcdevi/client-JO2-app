import React, { Component } from 'react'
import "../styles/forme.css";
import itemsData from "../data/RamequinsShapeItems.json";
import ItemCart from '../components/ItemCart';
import RamequinImg from '../images/ramequins.png';

class PageRamequin extends Component {

    state = {
        items: itemsData,
    }

    render() {
        return (
            <div className="form-container">
                {/* <div className="title-forme">Nom ramequin + dessin ramequin</div> */}
                <img src={RamequinImg} alt="ramequin noir et blanc"/>
                <div>
                    <ItemCart items={ itemsData } />
                </div>
            </div>
        )
    }
}

export default PageRamequin;
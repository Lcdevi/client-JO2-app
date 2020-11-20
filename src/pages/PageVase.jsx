import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/VasesShapeItems.json";
import ItemCart from '../components/ItemCart';
import VasesImg from '../images/les-vases.jpg';


class PageVase extends Component {

    state = {
        items: itemsData,
    }

    render() {
        return (
            <div className="form-container">
                {/* <div className="title-forme">Vase + dessin du Vase</div> */}
                <img src={VasesImg} alt="vase noir et blanc"/>
                <div>
                    <ItemCart items={ itemsData } />
                </div>
            </div>
        )
    }
}

export default PageVase;
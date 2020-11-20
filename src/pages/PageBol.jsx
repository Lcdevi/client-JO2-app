import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/Shape2Items.json";
import ItemCart from '../components/ItemCart';
import BolsImg from '../images/bols.png';


class PageBol extends Component {

    state = {
        items: itemsData,
    }

    render() {

        return (
            <div className="form-container">
                {/* <div className="title-forme">Nom de la forme 2 + dessin de la forme 2</div> */}
                <img src={BolsImg} alt="bol noir et blanc"/>
                <div>
                    <ItemCart items={ itemsData } />
                </div>
            </div>
        )
    }
}

export default PageBol
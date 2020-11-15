import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/Shape2Items.json";
import ItemCart from '../components/ItemCart';

class forme2Page extends Component {

    state = {
        items: itemsData,
    }

    render() {

        return (
            <div className="form-container">
                <div className="title-forme">Nom de la forme 2 + dessin de la forme 2</div>
                <div>
                    <ItemCart items={ itemsData } />
                </div>
            </div>
        )
    }
}

export default forme2Page
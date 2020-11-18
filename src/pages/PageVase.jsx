import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/VasesShapeItems.json";
import ItemCart from '../components/ItemCart';


class PageVase extends Component {

    state = {
        items: itemsData,
    }

    render() {
        return (
            <div className="form-container">
                <div className="title-forme">Vase + dessin du Vase</div>
                <div>
                    <ItemCart items={ itemsData } />
                </div>
            </div>
        )
    }
}

export default PageVase;
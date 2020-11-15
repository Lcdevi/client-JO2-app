import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/Shape1Items.json";
import ItemCart from '../components/ItemCart';

class formPage extends Component {

    state = {
        items: itemsData,
        categories: this.props.categories,
    }

    render() {
        console.log(this.state.items)
        return (
            <div className="form-container">
                <div className="title-forme">Nom de la forme 1 + dessin de la forme 1</div>
                <div>
                    <ItemCart items={ itemsData } />
                </div>
            </div>
        )
    }
}

export default formPage
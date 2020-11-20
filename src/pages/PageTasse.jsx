import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/TassesShapeItems.json";
import ItemCart from '../components/ItemCart';
import TassesImg from '../images/tasses.png';

class PageTasse extends Component {

    state = {
        items: itemsData,
        categories: this.props.categories,
    }

    render() {
        console.log(this.state.items)
        return (
            <div className="form-container">
                {/* <div className="title-forme">Nom de la forme 1 + dessin de la forme 1</div> */}
                <img src={TassesImg} alt="tasse noir et blanc"/>
                <div>
                    <ItemCart items={ itemsData } />
                </div>
            </div>
        )
    }
}

export default PageTasse
import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/Items.json";
// import ItemCart from '../components/ItemCart';

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
                    {/* <ItemCart items={ itemsData } /> */}
                    {this.state.items.map((item, index) => {
                     if(item.shape === "grand_bol") {
                        return (
                            <div key={index}>
                                <h4>nom : {item.name}</h4>
                            </div>
                        )
                    }
                })}
                </div>
            </div>
        )
    }
}

export default formPage
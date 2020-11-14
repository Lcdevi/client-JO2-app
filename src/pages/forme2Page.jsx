import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/Items.json";
// import ItemCart from '../components/ItemCart';

class forme2Page extends Component {

    state = {
        items: itemsData,
    }

    render() {

        return (
            <div className="form-container">
                <div className="title-forme">Nom de la forme 2 + dessin de la forme 2</div>
                <div>
                    {/* <ItemCart items={ itemsData } /> */}
                    {this.state.items.map((item, index) => {
                     if(item.shape === "petit_bol") {
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

export default forme2Page
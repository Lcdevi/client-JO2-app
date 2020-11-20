import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/itemCart.css";

class ItemCart extends Component {

    state = {
        items: this.props.items,
    }

    render() {
        console.log(this.state)
        console.log(window.location.pathname)
        return (
            <div id="item-cart-container">
                {this.state.items.map((item, index) => (
                // <Link to={`/${item.id}`} params={{ testvalue: "hello" }}>
                <Link to={{
                    pathname: `/${item.id}`,
                    state: {
                      item: item,
                      previousPath: window.location.pathname
                    }
                  }} 
                  key={index}
                >

                    <div className="single-item-cart">
                        <img src={item.image} alt="ceramic details"/>
                        <div id="title-item">
                            <h2>{item.name}</h2>
                            <p>{item.price} €</p>
                        </div> 
                    </div>
                </Link>
                ))
                }
            </div>
        )
    }
}

export default ItemCart;
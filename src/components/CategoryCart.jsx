import React, { Component } from 'react';
import "../styles/categoryCart.css"

class CategoryCart extends Component {

    state = {
        categories: this.props.categories,
    }

    render() {

        return (
            <div id="cat-container">
                {this.state.categories.map((cat, index) => (
                    <div id="cat-cart-container" key={index}>
                            <img src={cat.imageUrl} alt=""/>
                            <div id='topito'>
                            <h2>{cat.name}</h2>

                            </div>
                    </div>
                ))}
            </div>
    )

    }
}

export default CategoryCart;
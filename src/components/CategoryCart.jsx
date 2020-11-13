import React, { Component } from 'react';
import "../styles/categoryCart.css";
import {Link} from 'react-router-dom';

class CategoryCart extends Component {

    state = {
        categories: this.props.categories,
    }

    render() {

        return (
            <div id="cat-container">
                {this.state.categories.map((cat, index) => (
                    // <Link to={`/collections/${cat.id}`} key={index}>
                    <Link to={`/${cat.id}`} key={index} categories={this.props.categories}>
                        <div id="cat-cart-container">
                            <img src={cat.imageUrl} alt=""/>
                            <div id='topito'>
                                <h2>{cat.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
    )

    }
}

export default CategoryCart;
import React, { Component } from 'react'
import CategoriesData from "../data/Categories.json"
import {Link} from 'react-router-dom'
import "../styles/smallCategoryCart.css" 


class SmallCategoryCart extends Component {

    state = {
        categories: CategoriesData,
    }

    render() {

        console.log(this.state)

        return (
            <div id="small-category-cart-container">

                    <div className="small-cat-wrapper">
        
                        {this.state.categories.map((cat, index) => (
                            <Link to={`${cat.id}`} key={index}>
                                <div className="small-cart-container">
                                    <img src={cat.imageUrl} alt="vaisselle en ceramique"/>
                                    <p>{cat.name}</p>
                                </div>
                            </Link>
                        ))}

                    </div>

            </div>
        )
    }
}

export default SmallCategoryCart
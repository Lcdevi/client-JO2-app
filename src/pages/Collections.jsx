import React from 'react';
import "../styles/collections.css";
import CategoriesData from "../data/Categories.json";
import CategoryCart from "../components/CategoryCart"

class Collections extends React.Component {

    state = {
        categories: CategoriesData,
    }

    render() {
        return (
            <div id="collections-page">
                <h1>NOS FORMES</h1>
                <CategoryCart categories={ CategoriesData }/>
            </div>
        )
    }

}

export default Collections

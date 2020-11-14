import React from 'react';
import "../styles/collections.css";
import CategoriesData from "../data/Categories.json";
import CategoryCart from "../components/CategoryCart";


class Collections extends React.Component {

    state = {
        categories: CategoriesData,
    }

    render() {
        console.log(this.state)
        return (
            <div id="collections-page">
                <h1>LES FORMES</h1>
                <CategoryCart categories={ CategoriesData }/>
            </div>
        )
    }

}

export default Collections

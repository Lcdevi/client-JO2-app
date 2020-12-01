import React from 'react';
import "../styles/collections.css";
import CategoriesData from "../data/Categories.json";
import CategoryCart from "../components/CategoryCart";
import LesFormesImg from '../images/les-formes.png';



class Collections extends React.Component {

    state = {
        categories: CategoriesData,
    }

    render() {
        console.log(this.state)
        return (
            <div id="collections-page">
                <h1>Les collections</h1>
                {/* <img src={LesFormesImg} alt="formes de poteries céramiques"/> */}
                <CategoryCart categories={ CategoriesData }/>
            </div>
        )
    }

}

export default Collections

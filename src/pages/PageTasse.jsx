import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/TassesShapeItems.json";
import ItemCart from '../components/ItemCart';
import TassesImg from '../images/tasses.png';
import {Link} from 'react-router-dom';

class PageTasse extends Component {

    state = {
        items: itemsData,
        categories: this.props.categories,
        cat: this.props
    }

    render() {
        console.log(this.state)
        return (
            <div className="form-container">
                {/* <div className="title-forme">Nom de la forme 1 + dessin de la forme 1</div> */}
                <img src={TassesImg} alt="tasse noir et blanc"/>
                <div>
                    <ItemCart items={ itemsData } />
                </div>

                <Link to={this.state.cat.history.location.state.previousPath}>
                    <button>retour</button>
                </Link>
            </div>
        )
    }
}

export default PageTasse
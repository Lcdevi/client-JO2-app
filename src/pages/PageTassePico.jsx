import React, { Component } from 'react';
import "../styles/forme.css";
import itemsData from "../data/TassesPico.json";
import ItemCart from '../components/ItemCart';
import TassesImg from '../images/tasses.png';
import {Link} from 'react-router-dom';

class PageTassePico extends Component {

    state = {
        items: itemsData,
        categories: this.props.categories,
    }

    render() {
        console.log(this.state)
        return (
            <div className="form-container">
                <h1>Les tasses Pico</h1>
                {/* <img src={TassesImg} alt="tasse noir et blanc"/> */}
                <div>
                    <ItemCart items={ itemsData } />
                </div>

                <Link to="/collections">
                    <button>retour</button>
                </Link>
            </div>
        )
    }
}

export default PageTassePico
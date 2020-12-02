import React, { Component } from 'react';
import vaseEmpty from "../images/vase-empty.jpg"
import "../styles/noItemPage.css"

class PageVase extends Component {

    render() {
        return (
            <div className="empty-vase-main-container">
                <p>Les vases sont en cuisson, gravure, émaillage</p>
                <p>Ils se font une beauté et arrivent vite</p>
                <img src={vaseEmpty} alt=""/>
            </div>
        )
    }
}

export default PageVase;
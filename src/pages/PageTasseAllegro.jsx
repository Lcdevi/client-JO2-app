import React, { Component } from 'react'
import tasseAllegroEmpty from "../images/allegro-empty.jpg"
import "../styles/noItemPage.css"

class PageTasseAllegro extends Component {
    render() {
        return (
            <div className="empty-vase-main-container">
                <p>Les tasses allegro sont en cuisson, gravure, émaillage</p>
                <p>Elles se font une beauté et arrivent vite</p>
                <img src={tasseAllegroEmpty} alt=""/>
            </div>
        )
    }
}

export default PageTasseAllegro